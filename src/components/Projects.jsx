import React from "react";
import { useData } from "../contexts/DataContext";
import "./projects.css";

export default function Project() {
    const data = useData();

    if (!data?.projectsSection) {
        return <p>Loading...</p>;
    }

    const {anaBaslik} = data.projectsSection;

    return (
        <div className="container-box">
            <div>
                <h1>{anaBaslik}</h1>
            </div>
            <div>
                <div className="container-projects">
                    {data.projectsSection.projects.map((project, index) => (
                        <div key={index}>
                            <img src={project.foto} alt="Project" />
                            <h3>{project.baslik}</h3>
                            <p>{project.icerik}</p>
                            <div>
                                <button>react</button>
                                <button>redux</button>
                                <button>axios</button>
                            </div>
                            <div className="social">
                                <a href="">Github</a>
                                <a href="">View Site</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}