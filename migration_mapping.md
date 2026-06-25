# BVIMIT to BVWeb Migration & Mapping Strategy

This document outlines the strategy for migrating the legacy PHP-based BVIMIT website to the new modern Next.js/React stack (bvweb). It systematically maps the old files/pages to the new application's routing and component structure, ensuring all vital information is preserved while enhancing the user experience.

## 1. Overall Strategy & File Cleanup

*   **De-duplication**: The legacy `bvimit` folder contains multiple backups and iterations of the same pages (e.g., `index_backup.php`, `placements_backup.php`, `transparancy_BKP*.php`). These will be consolidated into a single source of truth in the new architecture.
*   **Static vs Dynamic Content**: 
    *   **Static**: Pages like "About Us", "Vision & Mission", "Infrastructure" will be mapped to static Next.js pages or sections.
    *   **Dynamic**: "Events", "Seminars", "Announcements", and "Newsletters" should ideally be backed by a CMS (like Sanity, Strapi, or Supabase/Convex) or structured JSON data in the new app to prevent creating a new route/file for every event (e.g., `seminar_2024-25.php`).
*   **Legacy File Deletion**: Irrelevant, test, or severely outdated files (e.g., `temp.php`, `covid19.php`, `uikit.php`, `.zip` files) can be archived and omitted from the new system.

---

## 2. Comprehensive File-to-Route Mapping

### A. Core Institutional Profile (About Us)
*New Route:* `/about/*`

| Legacy File(s) in `bvimit` | Target Route in `bvweb` | Notes / Action Item |
| :--- | :--- | :--- |
| `index.php` | `/` (Home) | Use `Hero`, `Announcements`, `Events` components. |
| `about.php` | `/about` | Map to general About Us content. |
| `administration.php` | `/about/deans` or `/about/organogram` | Extract the administrative hierarchy and map it to the respective components. |
| `eminence.php`, `achievements.php`, `Awards.php` | `/about/achievements` (New) | Consolidate these into a unified "Accolades & Achievements" page. |
| `code_ethics.php` | `/about/conduct` or `/about/ethics` | Map to Institutional Ethics and Code of Conduct. |
| `contact_us.php`, `enquiry_post.php` | `/#contact` or `/contact` | Map to the new `Contact.tsx` component; replace backend PHP mailer with a modern API (e.g., Resend). |

### B. Academics & Programmes
*New Route:* `/courses/*` and `/faculty`

| Legacy File(s) in `bvimit` | Target Route in `bvweb` | Notes / Action Item |
| :--- | :--- | :--- |
| `MCA.php`, `course_mca.php` | `/courses/mca` | Combine these into a single comprehensive MCA program page. |
| `course_phd.php` | `/courses/phd` | Map PhD program details. |
| `course_pgdbm.php` | *Archive or `/courses/pgdbm`* | Verify if PGDBM is still offered. If yes, add a new route. |
| `academic.php`, `examination.php` | `/academics` (New) | Create a dedicated hub for Academic Calendars and Examination rules. |
| `faculty.php`, `facultylist.php`, `faultyindex.php` | `/faculty` | Consolidate faculty lists and resumes into a structured data format (`data/faculty.json`) mapped to the `Faculty` page. |
| `nptelbvimit.php`, `self_learning.php` | `/#courses` or `/academics/certifications` | Map to Short-term Certifications or self-learning portals. |

### C. Admissions & Finances
*New Route:* `/admissions` or via `/courses/*`

| Legacy File(s) in `bvimit` | Target Route in `bvweb` | Notes / Action Item |
| :--- | :--- | :--- |
| `FEESTRUCTURE.php`, `feedetail.php` | `/courses/mca` (Fee Section) | Extract fee tables and add to the MCA or Admissions page. |
| `scholarship.php` | `/#announcements` or `/admissions/scholarships` | Consider creating a dedicated `/admissions/scholarships` route rather than just hash-linking. |

### D. Placements & Corporate Relations
*New Route:* `/placements`

| Legacy File(s) in `bvimit` | Target Route in `bvweb` | Notes / Action Item |
| :--- | :--- | :--- |
| `placements.php`, `placement_details.php` | `/placements` | Map to Placements Overview and Statistics. |
| `top_placement_21.php` | `/placements` | Convert legacy placement highlights into a "Top Placements" carousel component. |
| `industryinteraction.php` | `/placements/industry-interactions` | Can also map to `/research` depending on context. |

### E. Research & Innovation
*New Route:* `/research`

| Legacy File(s) in `bvimit` | Target Route in `bvweb` | Notes / Action Item |
| :--- | :--- | :--- |
| `researchandconsultancy.php`, `research_objective.php` | `/research` | Map to Research & Consultancy overview. |
| `research_mou.php` | `/research/mous` (New) | Map MoU documents to a dedicated section in Research. |
| `publications.php` | `/#events` (as per config) -> **Recommend `/research/publications`** | Instead of putting publications under events, give it a dedicated page under `/research`. |

### F. Campus Life & Infrastructure
*New Route:* `/about/*` and `/virtual-tour`

| Legacy File(s) in `bvimit` | Target Route in `bvweb` | Notes / Action Item |
| :--- | :--- | :--- |
| `infrastructure.php` | `/about/infrastructure` | Main IT/Infrastructure mapping. |
| `campus_canteen.php`, `campus_hostel.php`, `campus_library.php`, `campus_gymkhana.php` | `/about/campus` | Consolidate all campus facilities into the `Campus` tab with distinct UI sections. |
| `gallery.php`, `Glimpses.php` | `/virtual-tour` or `/gallery` (New) | Map visual content to a modern image grid/carousel component. |

### G. Statutory Committees & Governance
*New Route:* `/about/committees` and specific routes

| Legacy File(s) in `bvimit` | Target Route in `bvweb` | Notes / Action Item |
| :--- | :--- | :--- |
| `iqac.php`, `iqac1.php` | `/about/committees/iqac` | High priority committee, needs dedicated sub-route or anchor. |
| `iic.php` | `/about/committees/iic` | Institution's Innovation Council. |
| `dab.php`, `dac.php` | `/about/committees/departments` | Department-level boards. |
| `iste.php`, `dlle.php`, `entrepreneurship_cell.php` | `/about/committees` | Extract into a "Committees & Cells" accordion/list component. |
| `grievance-redressal.php` | `/grievance` (New) or Footer Link | Mandated portal link. Update `footerLinkGroups` to point to a real page instead of `#`. |
| `scst-caste-discrimination-complaints-bvimit.php` | `/committees/anti-discrimination` | Essential statutory requirement. |
| `transparancy.php`, `metric-1-1-main.php`, `naac-criteria.php` | `/mandatory-disclosure` (New) | Aggregate NAAC/AICTE disclosures and metrics here. |

### H. Events, Activities & Seminars
*New Route:* `/events` (Recommended New Hub)

| Legacy File(s) in `bvimit` | Target Route in `bvweb` | Notes / Action Item |
| :--- | :--- | :--- |
| `seminar_*.php` (all years) | `/events/seminars` | **Crucial:** Migrate these yearly files into a unified JSON array and use dynamic routing (`/events/[id]`) or a paginated list. |
| `events_workshops.php`, `events_fdps.php`, `events_activities.php` | `/events/workshops`, `/events/activities` | Group by category using the `Events.tsx` component. |
| `ICET*.php`, `NCIT*.php`, `manthan*.php` | `/events/conferences` | Major standalone events. Consider dynamic routes for recurring conferences. |
| `blood_donation.php`, `Tree_Plantation.php`, `BVIMITISR22.php`, `swatch.php` | `/events/isr` | Map to an "Institutional Social Responsibility (ISR)" section. |

### I. Student Resources & Alumni
*New Route:* `/alumni` and `/students`

| Legacy File(s) in `bvimit` | Target Route in `bvweb` | Notes / Action Item |
| :--- | :--- | :--- |
| `alumni.php` | `/alumni` | Map alumni networks and success stories here. |
| `studentscorner.php`, `student_corners.php` | `/students` (New) | Dedicated portal for students (currently missing in `site-navigation.ts`). |
| `student_handbook.php`, `sampleQP*.php` | `/students/resources` | Move study materials and handbooks to a secure or public resource hub. |
| `newsletter.php`, `imit_dairies.php`, `technical_magzine.php` | `/media` (New) | Create a `/media` or `/publications` route for magazines and newsletters. |

---

## 3. Recommended Adjustments to `bvweb` Architecture

While reviewing the legacy files, a few structural gaps were identified in the current `site-navigation.ts` configuration. It is highly recommended to create the following new routes/pages:

1.  **Dedicated Student Hub (`/students`)**: The legacy app has significant student resources (sample QPs, handbooks, self-learning). A `/students` route should be added to `primaryNavigationItems`.
2.  **Mandatory Disclosures (`/mandatory-disclosure`)**: Statutory bodies (AICTE/NAAC) require easy access to transparency reports. Combine `transparancy.php`, `naac-criteria.php`, etc., into this route.
3.  **Media & Newsletters (`/media`)**: To house `imit_dairies.php`, `technical_magzine.php`, and `newsletter.php`.
4.  **Dynamic Events Engine (`/events`)**: Currently, events are relegated to a hash link `/#events`. The sheer volume of seminars, FDPs, workshops, and ICET/Manthan conferences in the old codebase demands a dedicated `/events` route with sub-pages (e.g., `/events/seminars`, `/events/conferences`).
5.  **Grievance & Committees**: Map `grievance-redressal.php` to a concrete route like `/grievance` rather than just a hash link `#` in the footer.

## 4. Next Steps for Implementation

1. **Extract Data**: Use scripts (like `extract-assets.mjs` or `extract-alumni.mjs` already present in `scripts/`) to scrape HTML content from `.php` files into structured JSON/Markdown formats in `bvweb/src/data/`.
2. **Update Navigation Config**: Modify `bvweb/src/config/site-navigation.ts` to include the recommended routes mentioned above.
3. **Build Pages**: Scaffold the Next.js pages in `bvweb/src/app` for the newly mapped routes (e.g., `/events`, `/students`, `/mandatory-disclosure`).
4. **Populate Components**: Feed the extracted JSON/Markdown data into the React components (`About.tsx`, `Events.tsx`, `Placements.tsx`).
5. **Asset Migration**: Copy all PDFs, images, and documents from `bvimit/pdf`, `bvimit/images` to `bvweb/public/`.
