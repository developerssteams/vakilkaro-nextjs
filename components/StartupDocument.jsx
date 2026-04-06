import React, { useState } from "react";
import "./StartupDocument.css";

const StartupDocument = () => {
  const [activeTab, setActiveTab] = useState("startup");

  const data = {
    startup: ["PAN", "Aadhaar", "Photo", "Utility Bill"],
    ngo: ["PAN", "Aadhaar", "Address Proof", "Trust Deed"],
    ip: ["PAN", "Aadhaar", "Logo", "Business Proof"]
  };

  return (
    <section className="startupdocument-section">
      <div className="startupdocument-container">
        
        {/* LEFT SIDE - Heading wala part */}
        <div className="startupdocument-left">
          <h2>
            Documents <br />
            <span>You'll Need.</span>
          </h2>
          <p>
            Paperwork Made Easy: What We Need From You Paragraph
          </p>
        </div>

        {/* RIGHT SIDE - Tabs aur Pills wala part */}
        <div className="startupdocument-right">
          {/* Tabs */}
          <div className="startupdocument-tabs">
            <button
              className={activeTab === "startup" ? "active" : ""}
              onClick={() => setActiveTab("startup")}
            >
              Startup
            </button>
            <button
              className={activeTab === "ngo" ? "active" : ""}
              onClick={() => setActiveTab("ngo")}
            >
              NGO
            </button>
            <button
              className={activeTab === "ip" ? "active" : ""}
              onClick={() => setActiveTab("ip")}
            >
              IP/Trademark
            </button>
          </div>

          {/* Pills / Documents List */}
          <div className="startupdocument-pills">
            {data[activeTab].map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default StartupDocument;