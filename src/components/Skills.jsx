import React from "react";
import { useData } from "../contexts/DataContext";
import "./skills.css";

export default function Skills() {
    const data = useData();

    if (!data?.skillsSection) {
        return <p>Loading...</p>;
    }

    const {anaBaslik} = data.skillsSection;

    return (
        <div className="container-skills">
            <div>
                <h1>{anaBaslik}</h1>
            </div>
            <div className="container-skill">
                {data.skillsSection.skills.map((skill, index) => (
                    <div key={index} className="box-skills">
                        <h3>{skill.baslik}</h3>
                        <p>{skill.icerik}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}