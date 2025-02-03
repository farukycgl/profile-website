import React from "react";
import { useData } from "../contexts/DataContext";

export default function Profile() {

    const data = useData();
    if (!data?.en?.headerSection) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <div>
                <h1>Profile</h1>
            </div>
            <div>

            </div>
            <div>

            </div>
        </div>
    )
}