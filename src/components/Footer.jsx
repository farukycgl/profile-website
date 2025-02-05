import { useData } from "../contexts/DataContext"
import "./footer.css";

export default function Footer() {

    const data = useData();

    if (!data?.headerSection) {
        return <p>Loading...</p>;
    }

    const { baslik, email, blog, github, linkedin } = data.footerSection;


    return (
        <div className="container-footer">
            <div className="container-reklam">
                <div>
                    <h1>{baslik}</h1>
                </div>
                <div>
                    <a href="" style={{color: "#AF0C48", fontSize: "20px"}}>👉{email}</a>
                </div>
            </div>
            <div className="container-sosyal">
                <a href="" style={{color: "#0A0A14", fontSize: "18px"}}>{blog}</a>
                <a href="" style={{color: "#00AB6B", fontSize: "18px"}}>{github}</a>
                <a href="" style={{color: "#0077B5", fontSize: "18px"}}>{linkedin}</a>
            </div>
        </div >
    )
}