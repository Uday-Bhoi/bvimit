import fs from 'fs';

const sql = fs.readFileSync('../bvimit/database/college.sql', 'utf8');
const insertRegex = /INSERT INTO `alumini` \(`Name`, `Designation`, `Experience`, `Comp_name`, `Message`, `Alu_id`, `Alu_pic`\) VALUES([\s\S]*?);/m;
const match = insertRegex.exec(sql);

if (match) {
  const valuesStr = match[1];
  const regex = /\('(.*?)', '(.*?)', '(.*?)', '(.*?)', '(.*?)', (\d+), '(.*?)'\)/g;
  const alumni = [];
  let m;
  while ((m = regex.exec(valuesStr)) !== null) {
    alumni.push({
      id: m[6],
      name: m[1].replace(/\\'/g, "'"),
      designation: m[2].replace(/\\'/g, "'"),
      experience: m[3].replace(/\\'/g, "'"),
      company: m[4].replace(/\\'/g, "'"),
      message: m[5].replace(/\\'/g, "'"),
      image: '/legacy/images/alumni/' + m[7]
    });
  }
  fs.writeFileSync('src/data/alumni.ts', 'export default ' + JSON.stringify(alumni, null, 2) + ';');
  console.log('Alumni data written to src/data/alumni.ts');
} else {
  console.log('No alumni data found');
}
