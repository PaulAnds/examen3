import './Navbar.css';

export default function Navbar(){
    return <div className="wrapper">
        <div className="sidebar">
            <div><img src={require("../../shared/images/profile.png")} alt="Avatar"/></div>
        <h2>Paul Solis</h2>
            <ul>
                <li><a href="/curriculum-vitae">Curriculum Vitae</a></li>
                <li><a href="/portafolio">Portafolio</a></li>
                <li><a href="/contacto">Contacto</a></li>
            </ul>
        </div>
    </div>
        
}