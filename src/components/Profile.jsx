import React from "react";
import { useData } from "../contexts/DataContext";
import "./profile.css";

export default function Profile() {
    const data = useData();

    if (!data?.profileSection) {
        return <p>Loading...</p>;
    }

    const { profil, aboutMe, dogumTarihi, ikametSehri, egitimDurumu, tercihEttigiRol, hakkimda, dogumTarihiSor, ikametSehriSor, egitimDurumuSor, tercihEttigiRolSor } = data.profileSection;

    return (
        <div className="container-profil">
            <div><h1>{profil}</h1></div>
            <div className="container-form">
                <div >
                    <h3>{profil}</h3>
                    <div className="container-soru-cevap">
                        <div className="container-soru">
                            <p>{dogumTarihiSor}</p>
                            <p>{ikametSehriSor}</p>
                            <p>{egitimDurumuSor}</p>
                            <p>{tercihEttigiRolSor}</p>
                        </div>
                        <div className="container-cevap">
                            <p> {dogumTarihi}</p>
                            <p> {ikametSehri}</p>
                            <p> {egitimDurumu}</p>
                            <p> {tercihEttigiRol}</p>
                        </div>
                    </div>
                </div>
                <div className="container-hakkimda">
                    <h3>{aboutMe}</h3>
                    <p>{hakkimda}</p>
                </div>
            </div>
        </div>
    );
}