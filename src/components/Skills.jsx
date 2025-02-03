import React from "react";
import { useData } from "../contexts/DataContext";

export default function Skills() {

    const data = useData();
    if (!data?.en?.headerSection) {
        return <p>Loading...</p>;
    }
 

    return (
        <div className="">
            <div>
                <h1>Skills</h1>
            </div>
            {data.en.skillsSection.map((skill, index) => (
                <div className="">
                    <h3>{skill.baslik}</h3>
                    <p>{skill.icerik}</p>
                </div>
            ))}
        </div>
    )
}