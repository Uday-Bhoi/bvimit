#!/usr/bin/env php
<?php
declare(strict_types=1);

const LEGACY_CONTENT_VERSION = 1;
const LEGACY_REMOTE_BASE_URL = 'https://bvimit.co.in/bvimit/';
const DEFAULT_SOURCE_MODE = 'prefer-local';

/**
 * @return array<int, array<string, string>>
 */
function legacy_page_map(): array
{
    return [
        [
            'id' => 'about',
            'routePath' => '/about',
            'section' => 'Institutional Profile',
            'label' => 'About BVIMIT',
            'legacyPath' => 'about.php',
        ],
        [
            'id' => 'mca-course',
            'routePath' => '/courses/mca',
            'section' => 'Academic Program',
            'label' => 'Master of Computer Applications',
            'legacyPath' => 'course_mca.php',
        ],
        [
            'id' => 'placements',
            'routePath' => '/placements',
            'section' => 'Careers & Outcomes',
            'label' => 'Placements',
            'legacyPath' => 'placements.php',
        ],
        [
            'id' => 'faculty',
            'routePath' => '/faculty',
            'section' => 'Academic Leadership',
            'label' => 'Faculty',
            'legacyPath' => 'faculty.php',
        ],
        [
            'id' => 'alumni',
            'routePath' => '/alumni',
            'section' => 'Alumni Network',
            'label' => 'Alumni',
            'legacyPath' => 'alumni.php',
        ],
        [
            'id' => 'infrastructure',
            'routePath' => '/about/infrastructure',
            'section' => 'Campus Experience',
            'label' => 'Infrastructure',
            'legacyPath' => 'infrastructure.php',
        ],
        [
            'id' => 'important-links',
            'routePath' => '/important-links',
            'section' => 'Student Resources',
            'label' => 'Important Links',
            'legacyPath' => 'important_links.php',
        ],
    ];
}

/**
 * @param array<int, string> $argv
 * @return array{sourceMode: string, outputPath: string}
 */
function parse_cli_options(array $argv): array
{
    $outputPath = dirname(__DIR__) . DIRECTORY_SEPARATOR . 'src' . DIRECTORY_SEPARATOR . 'data' . DIRECTORY_SEPARATOR . 'legacy-pages.generated.json';
    $sourceMode = DEFAULT_SOURCE_MODE;
    $allowedModes = ['local', 'remote', 'prefer-local', 'prefer-remote'];

    foreach (array_slice($argv, 1) as $argument) {
        if (str_starts_with($argument, '--source=')) {
            $sourceMode = substr($argument, strlen('--source='));
            continue;
        }

        if (str_starts_with($argument, '--output=')) {
            $outputPath = substr($argument, strlen('--output='));
        }
    }

    if (!in_array($sourceMode, $allowedModes, true)) {
        fwrite(STDERR, "Unsupported source mode: {$sourceMode}\n");
        exit(1);
    }

    return [
        'sourceMode' => $sourceMode,
        'outputPath' => $outputPath,
    ];
}

function ensure_utf8(string $value): string
{
    $normalized = $value;

    if (!function_exists('mb_detect_encoding') || !function_exists('mb_convert_encoding')) {
        return repair_mojibake($normalized);
    }

    $encoding = mb_detect_encoding($value, ['UTF-8', 'Windows-1252', 'ISO-8859-1'], true);
    if (!$encoding || $encoding === 'UTF-8') {
        return repair_mojibake($normalized);
    }

    $normalized = mb_convert_encoding($value, 'UTF-8', $encoding);

    return repair_mojibake($normalized);
}

function repair_mojibake(string $value): string
{
    return strtr($value, [
        'â€™' => "'",
        'â€˜' => "'",
        'â€œ' => '"',
        'â€' => '"',
        'â€“' => '-',
        'â€”' => '-',
        'â€¦' => '...',
        'Ã—' => 'x',
    ]);
}

function strip_php_blocks(string $value): string
{
    return (string) preg_replace('/<\?(?:php|=)?[\s\S]*?\?>/i', '', $value);
}

/**
 * @return array<int, string>
 */
function detect_dynamic_signals(string $value): array
{
    $patterns = [
        'database-query' => '/mysqli_query|->query\s*\(|PDO\s*\(|SELECT\s+.+\s+FROM/iu',
        'server-loop' => '/\bwhile\s*\(|\bforeach\s*\(|fetch_assoc|fetch_object/iu',
        'template-output' => '/echo\s*\(|print\s*\(/iu',
        'request-branching' => '/\$_(?:GET|POST|REQUEST|SERVER|SESSION)/iu',
    ];

    $signals = [];
    foreach ($patterns as $label => $pattern) {
        if (preg_match($pattern, $value) === 1) {
            $signals[] = $label;
        }
    }

    return $signals;
}

/**
 * @param array<string, string> $page
 * @return array{kind: string|null, reference: string|null, remoteUrl: string, raw: string|null, error: string|null}
 */
function load_page_source(array $page, string $sourceMode, string $localRoot): array
{
    $remoteUrl = rtrim(LEGACY_REMOTE_BASE_URL, '/') . '/' . ltrim($page['legacyPath'], '/');
    $localPath = join_local_path($localRoot, $page['legacyPath']);
    $order = match ($sourceMode) {
        'local' => ['local'],
        'remote' => ['remote'],
        'prefer-remote' => ['remote', 'local'],
        default => ['local', 'remote'],
    };

    foreach ($order as $candidate) {
        if ($candidate === 'local' && is_file($localPath)) {
            $raw = file_get_contents($localPath);
            if ($raw !== false) {
                return [
                    'kind' => 'local',
                    'reference' => $localPath,
                    'remoteUrl' => $remoteUrl,
                    'raw' => ensure_utf8($raw),
                    'error' => null,
                ];
            }
        }

        if ($candidate === 'remote') {
            $raw = fetch_remote_html($remoteUrl);
            if ($raw !== null) {
                return [
                    'kind' => 'remote',
                    'reference' => $remoteUrl,
                    'remoteUrl' => $remoteUrl,
                    'raw' => ensure_utf8($raw),
                    'error' => null,
                ];
            }
        }
    }

    return [
        'kind' => null,
        'reference' => null,
        'remoteUrl' => $remoteUrl,
        'raw' => null,
        'error' => "Unable to read {$page['legacyPath']} from the configured legacy sources.",
    ];
}

function fetch_remote_html(string $url): ?string
{
    if (function_exists('curl_init')) {
        $handle = curl_init($url);
        curl_setopt_array($handle, [
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_CONNECTTIMEOUT => 10,
            CURLOPT_TIMEOUT => 20,
            CURLOPT_HTTPHEADER => ['Accept: text/html'],
            CURLOPT_USERAGENT => 'bvimitweb-legacy-content-generator/1.0',
        ]);

        $result = curl_exec($handle);
        $statusCode = (int) curl_getinfo($handle, CURLINFO_RESPONSE_CODE);
        curl_close($handle);

        if (is_string($result) && $statusCode >= 200 && $statusCode < 400) {
            return $result;
        }
    }

    $context = stream_context_create([
        'http' => [
            'method' => 'GET',
            'timeout' => 20,
            'header' => "Accept: text/html\r\nUser-Agent: bvimitweb-legacy-content-generator/1.0\r\n",
        ],
        'ssl' => [
            'verify_peer' => true,
            'verify_peer_name' => true,
        ],
    ]);

    $result = @file_get_contents($url, false, $context);

    return is_string($result) ? $result : null;
}

/**
 * @return array{0: DOMDocument, 1: DOMElement}
 */
function parse_html_document(string $rawHtml, string $pageLabel, string $sourceKind): array
{
    $markup = $sourceKind === 'local' ? strip_php_blocks($rawHtml) : $rawHtml;
    $trimmedMarkup = trim($markup);

    if (!preg_match('/<html[\s>]/iu', $trimmedMarkup)) {
        $safeTitle = htmlspecialchars($pageLabel, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
        $trimmedMarkup = <<<HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>{$safeTitle}</title>
  </head>
  <body>
    {$trimmedMarkup}
  </body>
</html>
HTML;
    }

    $dom = new DOMDocument('1.0', 'UTF-8');
    libxml_use_internal_errors(true);
    $dom->loadHTML('<?xml encoding="UTF-8">' . $trimmedMarkup, LIBXML_COMPACT | LIBXML_HTML_NODEFDTD | LIBXML_HTML_NOIMPLIED);
    libxml_clear_errors();

    $bodyNode = $dom->getElementsByTagName('body')->item(0);
    if (!$bodyNode instanceof DOMElement) {
        $bodyNode = $dom->documentElement instanceof DOMElement ? $dom->documentElement : $dom->createElement('body');
    }

    return [$dom, $bodyNode];
}

function prune_document(DOMXPath $xpath): void
{
    $queries = [
        '//script',
        '//style',
        '//noscript',
        '//iframe',
        '//header',
        '//footer',
        '//nav',
        '//*[contains(translate(@class, "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "navbar")]',
        '//*[contains(translate(@id, "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "navbar")]',
        '//*[contains(translate(@class, "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "footer")]',
        '//*[contains(translate(@id, "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "footer")]',
    ];

    foreach ($queries as $query) {
        remove_xpath_matches($xpath, $query);
    }
}

function remove_xpath_matches(DOMXPath $xpath, string $query): void
{
    $matches = [];
    foreach ($xpath->query($query) ?: [] as $node) {
        if ($node instanceof DOMNode) {
            $matches[] = $node;
        }
    }

    foreach ($matches as $node) {
        if ($node->parentNode instanceof DOMNode) {
            $node->parentNode->removeChild($node);
        }
    }
}

/**
 * @return array<int, DOMElement>
 */
function element_children(DOMElement $element): array
{
    $children = [];
    foreach ($element->childNodes as $child) {
        if ($child instanceof DOMElement) {
            $children[] = $child;
        }
    }

    return $children;
}

function normalize_text(string $value): string
{
    $normalized = str_replace(["\xc2\xa0", 'Â'], ' ', $value);
    $normalized = preg_replace('/\s+/u', ' ', trim($normalized));

    return is_string($normalized) ? $normalized : trim($value);
}

function is_meaningful_element(DOMElement $element): bool
{
    $tagName = strtolower($element->tagName);
    if (in_array($tagName, ['script', 'style', 'noscript'], true)) {
        return false;
    }

    $text = normalize_text($element->textContent);
    if ($text !== '' && strlen($text) >= 40) {
        return true;
    }

    return $element->getElementsByTagName('img')->length > 0
        || $element->getElementsByTagName('table')->length > 0
        || $element->getElementsByTagName('ul')->length > 0
        || $element->getElementsByTagName('ol')->length > 0;
}

/**
 * @return array<int, DOMElement>
 */
function choose_root_nodes(DOMElement $bodyNode): array
{
    $children = array_values(array_filter(
        element_children($bodyNode),
        static fn (DOMElement $element): bool => is_meaningful_element($element),
    ));

    if ($children === []) {
        return [];
    }

    if (count($children) === 1) {
        $wrapperChildren = array_values(array_filter(
            element_children($children[0]),
            static fn (DOMElement $element): bool => is_meaningful_element($element),
        ));

        if (count($wrapperChildren) > 1) {
            return $wrapperChildren;
        }
    }

    return $children;
}

/**
 * @param array<int, DOMElement> $nodes
 * @return array<int, DOMElement>
 */
function expand_block_nodes(array $nodes): array
{
    $blocks = [];
    foreach ($nodes as $node) {
        $children = array_values(array_filter(
            element_children($node),
            static fn (DOMElement $element): bool => is_meaningful_element($element),
        ));

        if (count($children) > 1) {
            foreach ($children as $child) {
                $blocks[] = $child;
            }
            continue;
        }

        $blocks[] = $node;
    }

    return $blocks;
}

function outer_html(DOMNode $node): string
{
    return $node->ownerDocument instanceof DOMDocument
        ? trim($node->ownerDocument->saveHTML($node))
        : '';
}

function first_heading_text(DOMElement $element): ?string
{
    $xpath = new DOMXPath($element->ownerDocument);
    $result = $xpath->query('.//h1 | .//h2 | .//h3 | .//h4 | .//h5 | .//h6', $element);
    $heading = $result !== false ? $result->item(0) : null;

    if ($heading instanceof DOMElement) {
        $text = normalize_text($heading->textContent);
        return $text !== '' ? $text : null;
    }

    return null;
}

function slugify(string $value): string
{
    $value = strtolower(trim($value));
    $value = preg_replace('/[^a-z0-9]+/i', '-', $value);
    $value = trim(is_string($value) ? $value : '', '-');

    return $value !== '' ? $value : 'section';
}

/**
 * @param array<int, DOMElement> $nodes
 * @return array<int, array<string, mixed>>
 */
function build_content_blocks(string $pageId, array $nodes): array
{
    $blocks = [];
    foreach (expand_block_nodes($nodes) as $index => $node) {
        $text = normalize_text($node->textContent);
        if ($text === '') {
            continue;
        }

        $xpath = new DOMXPath($node->ownerDocument);
        $linkCount = $xpath->query('.//a[@href]', $node);
        $imageCount = $xpath->query('.//img', $node);
        $tableCount = $xpath->query('.//table', $node);

        $blocks[] = [
            'id' => $pageId . '-' . str_pad((string) ($index + 1), 2, '0', STR_PAD_LEFT),
            'tagName' => strtolower($node->tagName),
            'heading' => first_heading_text($node),
            'text' => $text,
            'html' => outer_html($node),
            'linkCount' => $linkCount === false ? 0 : $linkCount->length,
            'imageCount' => $imageCount === false ? 0 : $imageCount->length,
            'tableCount' => $tableCount === false ? 0 : $tableCount->length,
        ];
    }

    return $blocks;
}

/**
 * @param array<int, DOMElement> $nodes
 * @return array<int, array{level: int, text: string, slug: string}>
 */
function extract_headings(array $nodes): array
{
    $headings = [];
    $seen = [];

    foreach ($nodes as $node) {
        $xpath = new DOMXPath($node->ownerDocument);
        $matches = $xpath->query('.//h1 | .//h2 | .//h3 | .//h4 | .//h5 | .//h6', $node);
        if ($matches === false) {
            continue;
        }

        foreach ($matches as $heading) {
            if (!$heading instanceof DOMElement) {
                continue;
            }

            $text = normalize_text($heading->textContent);
            if ($text === '') {
                continue;
            }

            $key = strtolower($heading->tagName) . '|' . $text;
            if (isset($seen[$key])) {
                continue;
            }

            $seen[$key] = true;
            $headings[] = [
                'level' => (int) substr($heading->tagName, 1),
                'text' => $text,
                'slug' => slugify($text),
            ];
        }
    }

    return $headings;
}

/**
 * @param array<int, DOMElement> $nodes
 * @return array<int, array<string, mixed>>
 */
function extract_tables(array $nodes): array
{
    $tables = [];

    foreach ($nodes as $node) {
        $xpath = new DOMXPath($node->ownerDocument);
        $matches = $xpath->query('.//table', $node);
        if ($matches === false) {
            continue;
        }

        foreach ($matches as $tableNode) {
            if (!$tableNode instanceof DOMElement) {
                continue;
            }

            $captionNode = $xpath->query('./caption', $tableNode);
            $caption = $captionNode !== false && $captionNode->item(0) instanceof DOMElement
                ? normalize_text($captionNode->item(0)->textContent)
                : null;

            $headers = [];
            $headerNodes = $xpath->query('./thead/tr[1]/*', $tableNode);
            if ($headerNodes !== false && $headerNodes->length > 0) {
                foreach ($headerNodes as $headerNode) {
                    if ($headerNode instanceof DOMElement) {
                        $headers[] = normalize_text($headerNode->textContent);
                    }
                }
            }

            $rows = [];
            $rowNodes = $xpath->query('./tbody/tr | ./tr', $tableNode);
            if ($rowNodes !== false) {
                foreach ($rowNodes as $rowNode) {
                    if (!$rowNode instanceof DOMElement) {
                        continue;
                    }

                    $cells = [];
                    foreach ($xpath->query('./th | ./td', $rowNode) ?: [] as $cellNode) {
                        if ($cellNode instanceof DOMElement) {
                            $cells[] = normalize_text($cellNode->textContent);
                        }
                    }

                    if ($cells !== []) {
                        $rows[] = $cells;
                    }
                }
            }

            $tables[] = [
                'index' => count($tables),
                'caption' => $caption !== '' ? $caption : null,
                'headers' => $headers,
                'rows' => $rows,
            ];
        }
    }

    return $tables;
}

/**
 * @return array<int, string>
 */
function document_extensions(): array
{
    return ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'zip'];
}

/**
 * @param array<string, string> $page
 * @param array<string, string> $routeLookup
 * @return array{text: string, href: string, absoluteUrl: string|null, routePath: string|null, kind: string, localPath: string|null, existsLocally: bool}
 */
function build_link_record(string $href, string $text, array $page, array $routeLookup, string $localRoot): array
{
    $absoluteUrl = resolve_remote_url($href, $page['legacyPath']);
    $localPath = resolve_local_path($href, $page['legacyPath'], $localRoot);
    $routePath = null;

    $lookupKey = '';
    if ($absoluteUrl !== null) {
        $path = parse_url($absoluteUrl, PHP_URL_PATH);
        $lookupKey = is_string($path) ? basename($path) : '';
    } elseif ($href !== '') {
        $path = parse_url($href, PHP_URL_PATH);
        $lookupKey = is_string($path) ? basename($path) : basename($href);
    }

    if ($lookupKey !== '' && isset($routeLookup[$lookupKey])) {
        $routePath = $routeLookup[$lookupKey];
    }

    $kind = infer_link_kind($href, $absoluteUrl, $routeLookup);

    return [
        'text' => $text,
        'href' => $href,
        'absoluteUrl' => $absoluteUrl,
        'routePath' => $routePath,
        'kind' => $kind,
        'localPath' => $localPath,
        'existsLocally' => $localPath !== null && is_file($localPath),
    ];
}

function infer_link_kind(string $href, ?string $absoluteUrl, array $routeLookup): string
{
    if ($href === '' || str_starts_with($href, '#')) {
        return 'anchor';
    }

    if (preg_match('/^mailto:/iu', $href) === 1) {
        return 'email';
    }

    if (preg_match('/^tel:/iu', $href) === 1) {
        return 'phone';
    }

    $path = $absoluteUrl !== null
        ? (string) parse_url($absoluteUrl, PHP_URL_PATH)
        : (string) parse_url($href, PHP_URL_PATH);
    $fileName = basename($path);
    $extension = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));

    if ($fileName !== '' && isset($routeLookup[$fileName])) {
        return 'internal-page';
    }

    if (in_array($extension, document_extensions(), true)) {
        return 'document';
    }

    if ($absoluteUrl !== null && preg_match('/^https?:\/\/bvimit\.co\.in/iu', $absoluteUrl) === 1) {
        return in_array($extension, ['php', 'html', 'htm', ''], true) ? 'internal-page' : 'asset';
    }

    return 'external';
}

/**
 * @param array<int, DOMElement> $nodes
 * @param array<string, string> $page
 * @param array<string, string> $routeLookup
 * @return array<int, array<string, mixed>>
 */
function extract_links(array $nodes, array $page, array $routeLookup, string $localRoot): array
{
    $links = [];
    $seen = [];

    foreach ($nodes as $node) {
        $xpath = new DOMXPath($node->ownerDocument);
        $matches = $xpath->query('.//a[@href]', $node);
        if ($matches === false) {
            continue;
        }

        foreach ($matches as $anchor) {
            if (!$anchor instanceof DOMElement) {
                continue;
            }

            $href = trim((string) $anchor->getAttribute('href'));
            if ($href === '') {
                continue;
            }

            $text = normalize_text($anchor->textContent);
            $key = $href . '|' . $text;
            if (isset($seen[$key])) {
                continue;
            }

            $seen[$key] = true;
            $links[] = build_link_record($href, $text, $page, $routeLookup, $localRoot);
        }
    }

    return $links;
}

/**
 * @param array<int, DOMElement> $nodes
 * @param array<string, string> $page
 * @return array<int, array<string, mixed>>
 */
function extract_images(array $nodes, array $page, string $localRoot): array
{
    $images = [];
    $seen = [];

    foreach ($nodes as $node) {
        $xpath = new DOMXPath($node->ownerDocument);
        $matches = $xpath->query('.//img[@src]', $node);
        if ($matches === false) {
            continue;
        }

        foreach ($matches as $image) {
            if (!$image instanceof DOMElement) {
                continue;
            }

            $src = trim((string) $image->getAttribute('src'));
            if ($src === '') {
                continue;
            }

            $alt = normalize_text((string) $image->getAttribute('alt'));
            $key = $src . '|' . $alt;
            if (isset($seen[$key])) {
                continue;
            }

            $seen[$key] = true;
            $localPath = resolve_local_path($src, $page['legacyPath'], $localRoot);
            $images[] = [
                'alt' => $alt !== '' ? $alt : null,
                'src' => $src,
                'absoluteUrl' => resolve_remote_url($src, $page['legacyPath']),
                'localPath' => $localPath,
                'existsLocally' => $localPath !== null && is_file($localPath),
            ];
        }
    }

    return $images;
}

function split_path_suffix(string $value): array
{
    $queryPosition = strpos($value, '?');
    $fragmentPosition = strpos($value, '#');

    $cutPositions = array_values(array_filter([
        $queryPosition === false ? null : $queryPosition,
        $fragmentPosition === false ? null : $fragmentPosition,
    ], static fn ($position): bool => $position !== null));

    if ($cutPositions === []) {
        return [$value, ''];
    }

    $cutAt = min($cutPositions);

    return [substr($value, 0, $cutAt), substr($value, $cutAt)];
}

function normalize_relative_path(string $basePath, string $targetPath): string
{
    $normalizedBase = str_replace('\\', '/', $basePath);
    $baseDirectory = dirname($normalizedBase);
    $baseDirectory = $baseDirectory === '.' ? '' : $baseDirectory;

    $combined = str_starts_with($targetPath, '/')
        ? ltrim($targetPath, '/')
        : trim($baseDirectory . '/' . $targetPath, '/');

    $segments = [];
    foreach (explode('/', str_replace('\\', '/', $combined)) as $segment) {
        if ($segment === '' || $segment === '.') {
            continue;
        }

        if ($segment === '..') {
            array_pop($segments);
            continue;
        }

        $segments[] = $segment;
    }

    return implode('/', $segments);
}

function resolve_remote_url(string $value, string $pageLegacyPath): ?string
{
    $trimmed = trim($value);
    if ($trimmed === '' || str_starts_with($trimmed, '#')) {
        return null;
    }

    if (preg_match('/^(mailto:|tel:|javascript:)/iu', $trimmed) === 1) {
        return $trimmed;
    }

    if (preg_match('/^https?:\/\//iu', $trimmed) === 1) {
        return $trimmed;
    }

    if (str_starts_with($trimmed, '//')) {
        return 'https:' . $trimmed;
    }

    if (str_starts_with($trimmed, '/')) {
        return 'https://bvimit.co.in' . $trimmed;
    }

    [$targetPath, $suffix] = split_path_suffix($trimmed);
    $relativePath = normalize_relative_path($pageLegacyPath, $targetPath);

    return rtrim(LEGACY_REMOTE_BASE_URL, '/') . '/' . ltrim($relativePath, '/') . $suffix;
}

function join_local_path(string $localRoot, string $relativePath): string
{
    $safeRelativePath = str_replace(['/', '\\'], DIRECTORY_SEPARATOR, $relativePath);
    return rtrim($localRoot, DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR . $safeRelativePath;
}

function resolve_local_path(string $value, string $pageLegacyPath, string $localRoot): ?string
{
    $trimmed = trim($value);
    if ($trimmed === '' || str_starts_with($trimmed, '#')) {
        return null;
    }

    if (preg_match('/^(mailto:|tel:|javascript:)/iu', $trimmed) === 1) {
        return null;
    }

    if (preg_match('/^https?:\/\//iu', $trimmed) === 1) {
        $parsedPath = parse_url($trimmed, PHP_URL_PATH);
        $host = (string) parse_url($trimmed, PHP_URL_HOST);
        if (strtolower($host) !== 'bvimit.co.in' || !is_string($parsedPath) || $parsedPath === '') {
            return null;
        }

        $relativePath = preg_replace('#^bvimit/#iu', '', ltrim($parsedPath, '/'));
        if (!is_string($relativePath) || $relativePath === '') {
            return null;
        }

        return join_local_path($localRoot, $relativePath);
    }

    if (str_starts_with($trimmed, '//')) {
        return resolve_local_path('https:' . $trimmed, $pageLegacyPath, $localRoot);
    }

    if (str_starts_with($trimmed, '/')) {
        return join_local_path($localRoot, ltrim($trimmed, '/'));
    }

    [$targetPath] = split_path_suffix($trimmed);
    $relativePath = normalize_relative_path($pageLegacyPath, $targetPath);

    return join_local_path($localRoot, $relativePath);
}

function normalize_resource_attributes(DOMXPath $xpath, DOMElement $scope, string $pageLegacyPath): void
{
    $nodes = $xpath->query('.//*[@href or @src or @data-src]', $scope);
    if ($nodes === false) {
        return;
    }

    foreach ($nodes as $node) {
        if (!$node instanceof DOMElement) {
            continue;
        }

        if ($node->tagName === 'img' && !$node->hasAttribute('src') && $node->hasAttribute('data-src')) {
            $node->setAttribute('src', $node->getAttribute('data-src'));
        }

        if ($node->hasAttribute('href')) {
            $absoluteHref = resolve_remote_url($node->getAttribute('href'), $pageLegacyPath);
            if ($absoluteHref !== null) {
                $node->setAttribute('href', $absoluteHref);
            }
        }

        if ($node->hasAttribute('src')) {
            $absoluteSrc = resolve_remote_url($node->getAttribute('src'), $pageLegacyPath);
            if ($absoluteSrc !== null) {
                $node->setAttribute('src', $absoluteSrc);
            }
        }
    }
}

function build_summary(array $blocks, string $text): ?string
{
    foreach ($blocks as $block) {
        if (!is_array($block) || !isset($block['text']) || !is_string($block['text'])) {
            continue;
        }

        $candidate = trim($block['text']);
        if ($candidate !== '') {
            return truncate_text($candidate, 280);
        }
    }

    return $text !== '' ? truncate_text($text, 280) : null;
}

function truncate_text(string $value, int $limit): string
{
    if (function_exists('mb_strlen') && function_exists('mb_substr')) {
        if (mb_strlen($value) <= $limit) {
            return $value;
        }

        return rtrim(mb_substr($value, 0, $limit - 1)) . '…';
    }

    if (strlen($value) <= $limit) {
        return $value;
    }

    return rtrim(substr($value, 0, $limit - 1)) . '…';
}

/**
 * @param array<int, array<string, string>> $pages
 * @return array<string, string>
 */
function build_route_lookup(array $pages): array
{
    $lookup = [];
    foreach ($pages as $page) {
        $lookup[basename($page['legacyPath'])] = $page['routePath'];
    }

    return $lookup;
}

/**
 * @param array<string, string> $page
 * @param array<string, string> $routeLookup
 * @return array<string, mixed>
 */
function ingest_page(array $page, string $sourceMode, string $localRoot, array $routeLookup): array
{
    $source = load_page_source($page, $sourceMode, $localRoot);

    if ($source['error'] !== null || $source['raw'] === null) {
        return [
            'id' => $page['id'],
            'routePath' => $page['routePath'],
            'section' => $page['section'],
            'label' => $page['label'],
            'legacyPath' => $page['legacyPath'],
            'legacyUrl' => $source['remoteUrl'],
            'sourceKind' => null,
            'sourceReference' => null,
            'sourceChecksum' => null,
            'status' => 'missing',
            'title' => $page['label'],
            'summary' => null,
            'html' => '',
            'text' => '',
            'blocks' => [],
            'headings' => [],
            'links' => [],
            'images' => [],
            'documents' => [],
            'tables' => [],
            'warnings' => [$source['error']],
            'dynamicSignals' => [],
        ];
    }

    $dynamicSignals = $source['kind'] === 'local' ? detect_dynamic_signals($source['raw']) : [];
    [$dom, $bodyNode] = parse_html_document($source['raw'], $page['label'], $source['kind']);
    $xpath = new DOMXPath($dom);
    prune_document($xpath);
    normalize_resource_attributes($xpath, $bodyNode, $page['legacyPath']);

    $rootNodes = choose_root_nodes($bodyNode);
    $html = implode("\n", array_map(static fn (DOMElement $node): string => outer_html($node), $rootNodes));
    $text = normalize_text($bodyNode->textContent);
    $headings = extract_headings($rootNodes);
    $blocks = build_content_blocks($page['id'], $rootNodes);
    $links = extract_links($rootNodes, $page, $routeLookup, $localRoot);
    $images = extract_images($rootNodes, $page, $localRoot);
    $tables = extract_tables($rootNodes);
    $documents = array_values(array_filter(
        $links,
        static fn (array $link): bool => ($link['kind'] ?? null) === 'document',
    ));

    $warnings = [];
    if ($source['kind'] === 'local' && $dynamicSignals !== []) {
        $warnings[] = 'Local extraction stripped PHP/database-driven fragments; some repeatable records still need a dedicated data source.';
    }
    if ($rootNodes === []) {
        $warnings[] = 'No meaningful content nodes were isolated from the legacy source.';
    }

    $title = $headings !== [] ? $headings[0]['text'] : $page['label'];
    $status = $html === ''
        ? 'missing'
        : ($dynamicSignals === [] ? 'ready' : 'partial');

    return [
        'id' => $page['id'],
        'routePath' => $page['routePath'],
        'section' => $page['section'],
        'label' => $page['label'],
        'legacyPath' => $page['legacyPath'],
        'legacyUrl' => $source['remoteUrl'],
        'sourceKind' => $source['kind'],
        'sourceReference' => $source['reference'],
        'sourceChecksum' => sha1($source['raw']),
        'status' => $status,
        'title' => $title,
        'summary' => build_summary($blocks, $text),
        'html' => $html,
        'text' => $text,
        'blocks' => $blocks,
        'headings' => $headings,
        'links' => $links,
        'images' => $images,
        'documents' => $documents,
        'tables' => $tables,
        'warnings' => $warnings,
        'dynamicSignals' => $dynamicSignals,
    ];
}

function ensure_directory(string $path): void
{
    if (is_dir($path)) {
        return;
    }

    mkdir($path, 0777, true);
}

function legacy_prefixed_path(string $legacyPath): string
{
    $withoutExtension = preg_replace('/\.(php|html?)$/iu', '', $legacyPath);
    $trimmed = trim(is_string($withoutExtension) ? $withoutExtension : $legacyPath, '/');

    return $trimmed === '' ? '/bvimit' : '/bvimit/' . $trimmed;
}

/**
 * @param array<int, array<string, mixed>> $results
 * @return array<string, array<string, mixed>>
 */
function build_site_manifest(array $results): array
{
    $manifest = [];

    foreach ($results as $page) {
        if (($page['status'] ?? null) === 'missing') {
            continue;
        }

        $sharedEntry = [
            'kind' => 'content',
            'canonicalPath' => $page['routePath'],
            'title' => $page['title'],
            'section' => $page['section'],
            'summary' => $page['summary'],
            'sourceFile' => $page['legacyPath'],
            'html' => $page['html'],
        ];

        $manifest[$page['routePath']] = [
            'path' => $page['routePath'],
            ...$sharedEntry,
        ];

        $legacyPath = legacy_prefixed_path((string) $page['legacyPath']);
        $manifest[$legacyPath] = [
            'path' => $legacyPath,
            ...$sharedEntry,
        ];
    }

    ksort($manifest);

    return $manifest;
}

/**
 * @param array<int, array<string, mixed>> $results
 */
function write_site_manifest(array $results, string $outputPath): void
{
    $encodedManifest = json_encode(
        build_site_manifest($results),
        JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE
    );

    if (!is_string($encodedManifest)) {
        fwrite(STDERR, "Failed to encode the legacy site manifest.\n");
        exit(1);
    }

    $contents = <<<TS
import type { LegacyPageManifest } from "@/types/site";

export const legacyPages: LegacyPageManifest = {$encodedManifest};
TS;

    ensure_directory(dirname($outputPath));
    file_put_contents($outputPath, $contents . PHP_EOL);
}

function main(array $argv): void
{
    $options = parse_cli_options($argv);
    $projectRoot = realpath(dirname(__DIR__));
    $localRoot = realpath(dirname(__DIR__) . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR . 'bvimit');
    $manifestOutputPath = dirname(__DIR__) . DIRECTORY_SEPARATOR . 'src' . DIRECTORY_SEPARATOR . 'data' . DIRECTORY_SEPARATOR . 'site' . DIRECTORY_SEPARATOR . 'legacy-pages.generated.ts';

    if (!is_string($projectRoot) || !is_string($localRoot)) {
        fwrite(STDERR, "Unable to resolve the project or legacy source directories.\n");
        exit(1);
    }

    $pages = legacy_page_map();
    $routeLookup = build_route_lookup($pages);
    $results = [];

    foreach ($pages as $page) {
        $results[] = ingest_page($page, $options['sourceMode'], $localRoot, $routeLookup);
    }

    $payload = [
        'metadata' => [
            'version' => LEGACY_CONTENT_VERSION,
            'generatedAt' => gmdate('c'),
            'sourceMode' => $options['sourceMode'],
            'remoteBaseUrl' => LEGACY_REMOTE_BASE_URL,
            'localRoot' => $localRoot,
        ],
        'pages' => $results,
    ];

    ensure_directory(dirname($options['outputPath']));
    $encoded = json_encode($payload, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    if (!is_string($encoded)) {
        fwrite(STDERR, "Failed to encode generated legacy content.\n");
        exit(1);
    }

    file_put_contents($options['outputPath'], $encoded . PHP_EOL);
    write_site_manifest($results, $manifestOutputPath);

    fwrite(STDOUT, "Generated legacy content for " . count($results) . " pages.\n");
    foreach ($results as $result) {
        $warningSuffix = $result['warnings'] === [] ? '' : ' [' . implode('; ', $result['warnings']) . ']';
        fwrite(STDOUT, "- {$result['id']}: {$result['status']} via {$result['sourceKind']}{$warningSuffix}\n");
    }
    fwrite(STDOUT, "Output: {$options['outputPath']}\n");
}

main($argv);
