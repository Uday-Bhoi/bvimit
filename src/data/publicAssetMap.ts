export const documentAssetPaths = {
  feeStructureFirstYearAy2025_2026:
    "/assets/documents/admissions/fee-structure-first-year-ay-2025-2026.pdf",
  mcaBrochure2025: "/assets/documents/admissions/mca-brochure-2025.pdf",
  scholarshipDocuments2025_2026:
    "/assets/documents/admissions/scholarship-documents-2025-2026.pdf",
  mcaSyllabusAc20_21Uom:
    "/assets/documents/academics/mca-syllabus-ac20-21-uom.pdf",
} as const;

export const facultyAssetPaths = {
  "suhasini-vijaykumar": {
    image: "/assets/faculty/images/suhasini-vijaykumar.jpg",
    resume: "/assets/faculty/resumes/suhasini-vijaykumar.pdf",
  },
  "jyoti-kharade": {
    image: "/assets/faculty/images/jyoti-kharade.jpg",
    resume: "/assets/faculty/resumes/jyoti-kharade.pdf",
  },
  "priya-chandran": {
    image: "/assets/faculty/images/priya-chandran.jpg",
    resume: "/assets/faculty/resumes/priya-chandran.pdf",
  },
  "shravani-pawar": {
    image: "/assets/faculty/images/shravani-pawar.jpg",
    resume: "/assets/faculty/resumes/shravani-pawar.pdf",
  },
  "pratibha-deshmukh": {
    image: "/assets/faculty/images/pratibha-deshmukh.jpg",
    resume: "/assets/faculty/resumes/pratibha-deshmukh.pdf",
  },
  "shubhangi-mahadik": {
    image: "/assets/faculty/images/shubhangi-mahadik.jpg",
    resume: "/assets/faculty/resumes/shubhangi-mahadik.pdf",
  },
  "sudeshna-roy": {
    image: "/assets/faculty/images/sudeshna-roy.jpg",
    resume: "/assets/faculty/resumes/sudeshna-roy.pdf",
  },
  "nidhi-poonia": {
    image: "/assets/faculty/images/nidhi-poonia.jpg",
    resume: "/assets/faculty/resumes/nidhi-poonia.pdf",
  },
} as const;

export const legacyPublicAssetMap = {
  documents: [
    {
      id: "fee-structure-first-year-ay-2025-2026",
      legacyUrl:
        "https://bvimit.co.in/bvimit/pdf/Fee%20Structure%201%20st%20Year%20Academic%202025-2026.pdf",
      sourceFile: "pdf/Fee Structure 1 st Year Academic 2025-2026.pdf",
      publicPath: documentAssetPaths.feeStructureFirstYearAy2025_2026,
    },
    {
      id: "mca-brochure-2025",
      legacyUrl: "https://bvimit.co.in/bvimit/pdf/MCABrochure2025.pdf",
      sourceFile: "pdf/MCABrochure2025.pdf",
      publicPath: documentAssetPaths.mcaBrochure2025,
    },
    {
      id: "scholarship-documents-2025-2026",
      legacyUrl:
        "https://bvimit.co.in/bvimit/pdf/Documents%20for%20Scholarship.pdf",
      sourceFile: "pdf/Documents for Scholarship.pdf",
      publicPath: documentAssetPaths.scholarshipDocuments2025_2026,
    },
    {
      id: "mca-syllabus-ac20-21-uom",
      legacyUrl: "https://bvimit.co.in/bvimit/pdf/MCAsyllabus%20AC20-21UOM.pdf",
      sourceFile: "pdf/MCAsyllabus AC20-21UOM.pdf",
      publicPath: documentAssetPaths.mcaSyllabusAc20_21Uom,
    },
  ],
  faculty: [
    {
      id: "suhasini-vijaykumar",
      legacyUrl: {
        image: "https://bvimit.co.in/bvimit/facultyimage/Suhasini_Vijaykumar.jpg",
        resume:
          "https://bvimit.co.in/bvimit/facultyresume/Suhasini_Vijaykumar_One_Page_Format.pdf",
      },
      sourceFile: {
        image: "images/Staff/Suhasini_Vijaykumar.JPG",
        resume: "facultyresume/Suhasini_Vijaykumar_One_Page_Format.pdf",
      },
      publicPath: facultyAssetPaths["suhasini-vijaykumar"],
    },
    {
      id: "jyoti-kharade",
      legacyUrl: {
        image: "https://bvimit.co.in/bvimit/facultyimage/Jyoti_Kharade.jpg",
        resume: "https://bvimit.co.in/bvimit/facultyresume/jyoti_up.pdf",
      },
      sourceFile: {
        image: "images/Staff/Jyoti_Kharade.JPG",
        resume: "facultyresume/Jyoti .pdf",
      },
      publicPath: facultyAssetPaths["jyoti-kharade"],
    },
    {
      id: "priya-chandran",
      legacyUrl: {
        image: "https://bvimit.co.in/bvimit/facultyimage/Priya_Chandran.jpg",
        resume: "https://bvimit.co.in/bvimit/facultyresume/priys_up.pdf",
      },
      sourceFile: {
        image: "images/Staff/Priya_Chandran.JPG",
        resume: "facultyresume/Priya_resume_1page.pdf",
      },
      publicPath: facultyAssetPaths["priya-chandran"],
    },
    {
      id: "shravani-pawar",
      legacyUrl: {
        image: "https://bvimit.co.in/bvimit/facultyimage/Shravani_Pawar.jpg",
        resume: "https://bvimit.co.in/bvimit/facultyresume/shravani_up.pdf",
      },
      sourceFile: {
        image: "images/Staff/Shravani Ma_am.JPG",
        resume: "facultyresume/Shravani_one_page_format.pdf",
      },
      publicPath: facultyAssetPaths["shravani-pawar"],
    },
    {
      id: "pratibha-deshmukh",
      legacyUrl: {
        image: "https://bvimit.co.in/bvimit/facultyimage/Pratiba_Deshmukh.jpg",
        resume: "https://bvimit.co.in/bvimit/facultyresume/pratibha_up.pdf",
      },
      sourceFile: {
        image: "images/Staff/Pratibha_Mahindra_Deshmukh.JPG",
        resume: "facultyresume/Dr. PratibhaOnePageCV1.pdf",
      },
      publicPath: facultyAssetPaths["pratibha-deshmukh"],
    },
    {
      id: "shubhangi-mahadik",
      legacyUrl: {
        image: "https://bvimit.co.in/bvimit/facultyimage/Shubhangi_mahadik.jpg",
        resume: "https://bvimit.co.in/bvimit/facultyresume/shubhangi_up.pdf",
      },
      sourceFile: {
        image: "images/Staff/Shubhangi_Mahadik.JPG",
        resume: "facultyresume/shubhangi_mahadik (1).pdf",
      },
      publicPath: facultyAssetPaths["shubhangi-mahadik"],
    },
    {
      id: "sudeshna-roy",
      legacyUrl: {
        image: "https://bvimit.co.in/bvimit/facultyimage/Sudheshna_Roy.jpg",
        resume: "https://bvimit.co.in/bvimit/facultyresume/sudeshna_up.pdf",
      },
      sourceFile: {
        image: "images/Staff/SudeshnaRoy.JPG",
        resume: "facultyresume/Sudeshna1.pdf",
      },
      publicPath: facultyAssetPaths["sudeshna-roy"],
    },
    {
      id: "nidhi-poonia",
      legacyUrl: {
        image: "https://bvimit.co.in/bvimit/facultyimage/Nidhi_Poonia.jpg",
        resume: "https://bvimit.co.in/bvimit/facultyresume/nidhi_up.pdf",
      },
      sourceFile: {
        image: "images/Staff/nidhi (2) (1).jpg",
        resume: "facultyresume/nidhi _up.pdf",
      },
      publicPath: facultyAssetPaths["nidhi-poonia"],
    },
  ],
} as const;
