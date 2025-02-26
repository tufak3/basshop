import '../styles/navbar.css'

function NavbarBottom(){
    return(
        <div className="categories-nav">
    <ul className="categories-list">
        <li><a href="#" className="category-item">Электрогитары</a></li>
                <li><a href="#" className="category-item">Бас-гитары</a></li>
                <li><a href="#" className="category-item">Усилители</a></li>
                <li><a href="#" className="category-item" style={{marginRight: '63px'}}>Аксессуары</a></li>
                <li><a href="#" className="category-item" >Доставка</a></li>
            </ul>
        </div>
    )
}
export default NavbarBottom