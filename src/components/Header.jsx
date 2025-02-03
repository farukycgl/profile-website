import React from "react";
import { useData } from "../contexts/DataContext";


export default function Header() {

    const data = useData();

    if (!data?.en?.headerSection) {
        return <p>Loading...</p>;
    }
    
    const { isim, baslik, icerik, profilResmi, sosyalMedya } = data.en.headerSection;

    return (
        <header className="header">
            <div>
                <div>
                    <h5>{isim}</h5>
                    <h1>{baslik}</h1>
                    <p>{icerik}</p>
                </div>
                <div className="sosyalMedya">
                    {sosyalMedya.map((item, index) => (
                        <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                            <img src={item.logo} alt={item.alt_text} className="social-icon" />
                        </a>
                    ))
                    }
                </div>
            </div>
            <div>
                <img src={profilResmi} alt="" />
            </div>
        </header>
    )
}