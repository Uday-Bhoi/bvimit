import facultyDirectory from "./faculty.json";
import { facultyAssetPaths } from "./publicAssetMap";

type FacultyRecord = (typeof facultyDirectory)[number];

const facultyData: FacultyRecord[] = facultyDirectory.map((member) => {
  const assetPaths =
    facultyAssetPaths[member.id as keyof typeof facultyAssetPaths];

  return assetPaths ? { ...member, ...assetPaths } : member;
});

export default facultyData;
