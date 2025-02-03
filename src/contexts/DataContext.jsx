import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";


const DataContext = createContext();

export const useData = () => {
    return useContext(DataContext)
};

const DataContextProvider = ({children}) => {
    const [data, setData] = useState({});

    useEffect(() => {
        axios
        .get("/data.json")
        .then((response) => {
            //console.log(response.data);
            setData(response.data)
        })
        .catch((error) => {
            console.log("Hata:", error)
        });
    },[])

    return (
        <DataContext.Provider value={data}>{children} </DataContext.Provider>
    )
}

export default DataContextProvider;