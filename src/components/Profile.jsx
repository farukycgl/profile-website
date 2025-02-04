import React from "react";
import { useData } from "../contexts/DataContext";

export default function Profile() {
    const data = useData();

    if (!data?.profileSection) {
        return <p>Loading...</p>;
    }

    const { dogumTarihi, ikametSehri, egitimDurumu, tercihEttigiRol, hakkimda } = data.profileSection;

    return (
        <div>
            <div><h1>Profile</h1></div>
            <div>
                <h3>Profile</h3>
                <p>Doğum Tarihi: {dogumTarihi}</p>
                <p>İkamet Şehri: {ikametSehri}</p>
                <p>Eğitim Durumu: {egitimDurumu}</p>
                <p>Tercih Ettiği Rol: {tercihEttigiRol}</p>
            </div>
            <div>
                <h3>About Me</h3>
                <p>{hakkimda}</p>
            </div>
        </div>
    );
}