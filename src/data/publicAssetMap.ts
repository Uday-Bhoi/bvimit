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
    image: "/legacy/images/Staff/Suhasini Ma_am.JPG",
    resume: "/assets/faculty/resumes/suhasini-vijaykumar.pdf",
  },
  "jyoti-kharade": {
    image: "/legacy/images/Staff/Jyoti Ma_am (2).JPG",
    resume: "/assets/faculty/resumes/jyoti-kharade.pdf",
  },
  "priya-chandran": {
    image: "/legacy/images/Staff/Priya Ma_am (2).JPG",
    resume: "/assets/faculty/resumes/priya-chandran.pdf",
  },
  "shravani-pawar": {
    image: "/legacy/images/Staff/Shravani Ma_am.JPG",
    resume: "/assets/faculty/resumes/shravani-pawar.pdf",
  },
  "pratibha-deshmukh": {
    image: "/legacy/images/Staff/Pratibha Ma_am (2).JPG",
    resume: "/assets/faculty/resumes/pratibha-deshmukh.pdf",
  },
  "shubhangi-mahadik": {
    image: "/legacy/images/Staff/Shubhangi Ma_am (2).JPG",
    resume: "/assets/faculty/resumes/shubhangi-mahadik.pdf",
  },
  "sudeshna-roy": {
    image: "/legacy/images/Staff/Sudheshna Ma_am.JPG",
    resume: "/assets/faculty/resumes/sudeshna-roy.pdf",
  },
  "nidhi-poonia": {
    image: "/legacy/images/Staff/nidhi (2) (1).jpg",
    resume: "/assets/faculty/resumes/nidhi-poonia.pdf",
  },
} as const;

export const legacyPublicAssetMap = {
  documents: [
    {
      id: "fee-structure-first-year-ay-2025-2026",
      legacyUrl:
        "/legacy/pdfs/Fee%20Structure%201%20st%20Year%20Academic%202025-2026.pdf",
      sourceFile: "pdf/Fee Structure 1 st Year Academic 2025-2026.pdf",
      publicPath: documentAssetPaths.feeStructureFirstYearAy2025_2026,
    },
    {
      id: "mca-brochure-2025",
      legacyUrl: "/legacy/pdfs/MCABrochure2025.pdf",
      sourceFile: "pdf/MCABrochure2025.pdf",
      publicPath: documentAssetPaths.mcaBrochure2025,
    },
    {
      id: "scholarship-documents-2025-2026",
      legacyUrl:
        "/legacy/pdfs/Documents%20for%20Scholarship.pdf",
      sourceFile: "pdf/Documents for Scholarship.pdf",
      publicPath: documentAssetPaths.scholarshipDocuments2025_2026,
    },
    {
      id: "mca-syllabus-ac20-21-uom",
      legacyUrl: "/legacy/pdfs/MCAsyllabus%20AC20-21UOM.pdf",
      sourceFile: "pdf/MCAsyllabus AC20-21UOM.pdf",
      publicPath: documentAssetPaths.mcaSyllabusAc20_21Uom,
    },
  ],
  faculty: [
    {
      id: "suhasini-vijaykumar",
      legacyUrl: {
        image: "/legacy/images/Staff/Suhasini_Vijaykumar.jpg",
        resume:
          "/legacy/facultyresume/Suhasini_Vijaykumar_One_Page_Format.pdf",
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
        image: "/legacy/images/Staff/Jyoti_Kharade.jpg",
        resume: "/legacy/facultyresume/jyoti_up.pdf",
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
        image: "/legacy/images/Staff/Priya_Chandran.jpg",
        resume: "/legacy/facultyresume/priys_up.pdf",
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
        image: "/legacy/images/Staff/Shravani_Pawar.jpg",
        resume: "/legacy/facultyresume/shravani_up.pdf",
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
        image: "/legacy/images/Staff/Pratiba_Deshmukh.jpg",
        resume: "/legacy/facultyresume/pratibha_up.pdf",
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
        image: "/legacy/images/Staff/Shubhangi_mahadik.jpg",
        resume: "/legacy/facultyresume/shubhangi_up.pdf",
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
        image: "/legacy/images/Staff/Sudheshna_Roy.jpg",
        resume: "/legacy/facultyresume/sudeshna_up.pdf",
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
        image: "/legacy/images/Staff/Nidhi_Poonia.jpg",
        resume: "/legacy/facultyresume/nidhi_up.pdf",
      },
      sourceFile: {
        image: "images/Staff/nidhi (2) (1).jpg",
        resume: "facultyresume/nidhi _up.pdf",
      },
      publicPath: facultyAssetPaths["nidhi-poonia"],
    },
  ],
} as const;
