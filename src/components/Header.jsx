import React from "react";
import { useData } from "../contexts/DataContext";
import "./header.css";

export default function Header() {
    const data = useData();

    if (!data?.headerSection) {
        return <p>Loading...</p>;
    }

    const { isim, baslik, icerik, profilResmi, sosyalMedya } = data.headerSection;

    return (
        <header className="container-header">
            <div className="container-hakkimda">
                <div className="hakkimda">
                    <h5 style={{color: "#4338CA"}}>{isim}</h5>
                    <h1>{baslik}</h1>
                    <p>{icerik}</p>
                </div>
                <div >
                    {sosyalMedya.map((item, index) => (
                        <button key={index}>
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                <img src={item.logo}/> {item.alt_text}
                            </a>
                        </button>
                    ))}
                </div>
            </div>
            <div className="profil">
                <img src={profilResmi} alt="Profile" />
            </div>
        </header>
    );
}