import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useLanguage } from "./LanguageContext";

const DataContext = createContext();

export const useData = () => {
    return useContext(DataContext);
};

const DataContextProvider = ({ children }) => {
    const [data, setData] = useState(null);
    const { language } = useLanguage();

    useEffect(() => {
        axios
            .get("/data.json")
            .then((response) => {
                console.log("Data:", response.data);
                setData(response.data);  
            })
            .catch((error) => {
                console.error("Hata:", error);
            });
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <DataContext.Provider value={data[language]}>  
            {children}
        </DataContext.Provider>
    );
};

export default DataContextProvider;