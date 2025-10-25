import Logo from "./logo"
import './header.css'
import { assets } from "../../assets/assets"



const Header = () => {
    return (
        <>
        <div className="header">
            <div className="header-container">
                <div className="header-logo">
                    <Logo/>
                </div>
                <div className="header-menu">
                        <ul className="header-list">
                            <li><a href="#">Inicio</a></li>
                            <li><a href="#">Recetas</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contacto</a></li>
                        </ul>
                </div>
                <div className="header-right">
                    <img src={assets.search_icon}alt="" />
                    <div className="header-search-icom">
                        <img src={assets.basket_icon} alt="" />
                        <div className="dot"></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Header