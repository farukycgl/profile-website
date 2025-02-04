import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const useLanguage = () => {
    return useContext(LanguageContext)
};

const LanguageContextProvider = ({ children }) => {
    const [language, setLanguage] = useState("en");  

    const toggleLanguage = () => {
        setLanguage(prevLanguage => (prevLanguage === "en" ? "tr" : "en"));
      };

      return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
          {children}
        </LanguageContext.Provider>
      );
}

export default LanguageContextProvider;