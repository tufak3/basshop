import '../styles/navbar.css'
import NavbarConst from '../constats/navbarconst.jsx'
import { Link } from 'react-router-dom'

function NavbarBottom(){
    return (
        <div className="categories-nav">
            <ul className="categories-list">
                {NavbarConst.map((item,index) => (
                    <li key={index}>
                        <Link to={item.link} className="category-item" style={{textDecoration:'none'}}>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default NavbarBottom