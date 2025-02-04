import React from "react";
import { useData } from "../contexts/DataContext";

export default function Project() {
    const data = useData();

    if (!data?.projectsSection) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <div>
                <h1>Projects</h1>
            </div>
            <div>
                {data.projectsSection.map((project, index) => (
                    <div key={index}>
                        <img src={project.foto} alt="Project" />
                        <h3>{project.baslik}</h3>
                        <p>{project.icerik}</p>
                        <div>
                            <button>react</button>
                            <button>redux</button>
                            <button>axios</button>
                        </div>
                        <div>
                            <a href="">Github</a>
                            <a href="">View Site</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}