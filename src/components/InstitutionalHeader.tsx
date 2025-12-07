import React from "react";

export default function InstitutionalHeader() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

        body {
          font-family: 'Inter', sans-serif;
          margin: 0;
          background: #fff;
        }

        header {
          display: grid;
          grid-template-columns: 1fr 3fr 1fr;
          align-items: center;
          /* Background color matches the footer (gray-900) */
          background-color: rgb(17, 24, 39); 
          color: white;
          padding: 10px 5px;
        }

        .logo,
>>>>>>> REPLACE
<<<<<<< SEARCH
        .center-info h1 {
          margin: 0;
          font-size: 26px;
          font-weight: 600;
          color: #333;
          letter-spacing: 1px;
        }

        .center-info h2 {
          margin: 5px 0;
          font-size: 28px;
          font-weight: 700;
          color: #333;
          line-height: 1.2;
        }

        .location {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: #333;
          font-size: 18px;
          margin-top: 6px;
        }
=======
        .center-info h1 {
          margin: 0;
          font-size: 26px;
          font-weight: 600;
          color: white;
          letter-spacing: 1px;
        }

        .center-info h2 {
          margin: 5px 0;
          font-size: 28px;
          font-weight: 700;
          color: white;
          line-height: 1.2;
        }

        .location {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: white;
          font-size: 18px;
          margin-top: 6px;
        }
>>>>>>> REPLACE
<<<<<<< SEARCH
        .dte {
          text-align: center;
          font-size: 18px;
          color: #333;
          font-weight: 500;
          margin-top: 10px;
        }

        .dte span {
          color: #333;
          font-weight: 600;
        }
=======
        .dte {
          text-align: center;
          font-size: 18px;
          color: white;
          font-weight: 500;
          margin-top: 10px;
        }

        .dte span {
          color: white;
          font-weight: 600;
        }
        .jubilee {
          align-self: stretch;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo img,
        .jubilee img {
          height: 120px;
          width: 120px;
          object-fit: contain;
        }

        .center-info h1,
        .center-info h2,
        .location span,
        .dte,
        .badge-box span {
          text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
        }

        .center-info {
          text-align: center;
          color: #fff;
        }

        .center-info h1 {
          margin: 0;
          font-size: 26px;
          font-weight: 600;
          color: #333;
          letter-spacing: 1px;
        }

        .center-info h2 {
          margin: 5px 0;
          font-size: 28px;
          font-weight: 700;
          color: #333;
          line-height: 1.2;
        }

        .location {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: #333;
          font-size: 18px;
          margin-top: 6px;
        }

        .location img {
          height: 18px;
          width: 18px;
          filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.3));
        }

        .badges {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          margin-top: 10px;
        }

        .badge-box {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 10px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 8px;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s;
        }

        .badge-box:hover {
          transform: scale(1.05);
        }

        .badge-box img {
          height: 18px;
          width: 18px;
        }

        .badge-box span {
          font-size: 12px;
          color: #333;
          font-weight: 500;
        }

        .dte {
          text-align: center;
          font-size: 18px;
          color: #333;
          font-weight: 500;
          margin-top: 10px;
        }

        .dte span {
          color: #333;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          header {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto auto auto auto auto;
            text-align: center;
          }

          .logo img,
          .jubilee img {
            height: 120px;
            width: 120px;
          }

          .center-info h1 {
            font-size: 26px;
          }

          .center-info h2 {
            font-size: 32px;
          }

          .location,
          .dte {
            font-size: 14px;
          }

          .badge-box span {
            font-size: 14px;
          }
        }
      `}</style>

      <header>
        {/* Left: BVIMIT Logo */}
        <div className="logo">
          <img
            src="https://harmless-tapir-303.convex.cloud/api/storage/f6eeb27c-af0b-41c3-b2f9-f31da24cc3c8"
            alt="BVIMIT Logo"
          />
        </div>

        {/* Center: Institution Info */}
        <div className="center-info">
          <h1>Bharati Vidyapeeth's</h1>
          <h2>Institute of Management & Information Technology</h2>

          <div className="location">
            <img
              src="https://cdn-icons-png.flaticon.com/512/535/535239.png"
              alt="Location icon"
            />
            <span>Navi Mumbai, Mumbai</span>
          </div>

          <div className="badges">
            <div className="badge-box">
              <img
                src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
                alt="Award"
              />
              <span>AICTE Approved</span>
            </div>

            <div className="badge-box">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1040/1040230.png"
                alt="Building"
              />
              <span>University of Mumbai Affiliated</span>
            </div>

            <div className="badge-box">
              <img
                src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
                alt="Award"
              />
              <span>NBA Accredited till June 2023</span>
            </div>
          </div>

          <div className="dte">
            DTE Code: <span>MC 3162</span>
          </div>
        </div>

        {/* Right: Jubilee Badge */}
        <div className="jubilee">
          <img
            src="https://harmless-tapir-303.convex.cloud/api/storage/03f7eaa4-cf08-4a47-8861-18f37039e935"
            alt="50 Years Badge"
          />
        </div>
      </header>
    </>
  );
}
