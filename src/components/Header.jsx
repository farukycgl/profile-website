import React from "react";
import { useData } from "../contexts/DataContext";

export default function Header() {
    const data = useData();

    if (!data?.headerSection) {
        return <p>Loading...</p>;
    }

    const { isim, baslik, icerik, profilResmi, sosyalMedya } = data.headerSection;

    return (
        <header className="flex items-center text-red">
            <div>
                <div>
                    <h5>{isim}</h5>
                    <h1>{baslik}</h1>
                    <p>{icerik}</p>
                </div>
                <div className="sosyalMedya">
                    {sosyalMedya.map((item, index) => (
                        <button key={index}>
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                <img src={item.logo} alt={item.alt_text} className="social-icon" />
                            </a>
                        </button>
                    ))}
                </div>
            </div>
            <div>
                <img src={profilResmi} alt="Profile" />
            </div>
        </header>
    );
}