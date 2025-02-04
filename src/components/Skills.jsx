import React from "react";
import { useData } from "../contexts/DataContext";

export default function Skills() {
    const data = useData();

    if (!data?.skillsSection) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <div>
                <h1>Skills</h1>
            </div>
            {data.skillsSection.map((skill, index) => (
                <div key={index}>
                    <h3>{skill.baslik}</h3>
                    <p>{skill.icerik}</p>
                </div>
            ))}
        </div>
    );
}