import React, { useState } from "react";

const LanguageToggle = () => {
  const [language, setLanguage] = useState("de");

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    console.log("Language selected:", e.target.value);
  };

  return (
    <div className="language-toggle">
      <input
        type="radio"
        id="de"
        name="language"
        value="de"
        checked={language === "de"}
        onChange={handleLanguageChange}
      />
      <label htmlFor="de">De</label>
      <input
        type="radio"
        id="en"
        name="language"
        value="en"
        checked={language === "en"}
        onChange={handleLanguageChange}
      />
      <label htmlFor="en">En</label>
    </div>
  );
};

export default LanguageToggle;
