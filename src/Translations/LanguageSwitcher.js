import React from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
    const {i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <select onChange={handleLanguageChange}>
      <option value="en">English</option>
      <option value="de">Deuchland</option>
    </select>
  );
}

export default LanguageSwitcher;
