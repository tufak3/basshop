import '../styles/navbar.css'
import shopLogo from '/Logo.svg'
import searchIcon from '/Search.svg'
import profileIcon from '/profile.svg'
import favoritesIcon from '/favorite.svg'
import cartIcon from '/cart.svg'


function Navbar(){
    return(
        <>
        <div className='nav-container'>
            <div className='navbar'>
                <div className='logo'>
                    <img src={shopLogo} alt="logo" className='logo-img'/>
                </div>
                <div className='name'>
                <p>BASS <br></br> SHOP</p>
                </div>
                <div className='input-cont'>
                    <div className="search-wrapper">
                        <img src={searchIcon} alt="search" className="search-icon" />
                        <input 
                            type="text" 
                            placeholder='Просто начните вводить название' 
                            className='input-text'
                        />
                    </div>
                </div>
                <div className='contacts'>
                    <div className='contacts-button'>
                        <button className='contacts-button-text'>Контакты</button>
                    </div>
                    <div className='favorites-button'>
                        <a href="/favorites">
                            <img src={favoritesIcon} alt="Избранное" />
                        </a>
                    </div>
                    <div className='cart-button'>
                        <a href="/cart">
                            <img src={cartIcon} alt="Корзина" />
                        </a>
                    </div>
                    <div className='profile-button'>
                        <a href="/profile">
                            <img src={profileIcon} alt="Профиль" />
                        </a>
                    </div>
                </div>
                <div className='socials'>

                </div>
            </div>
            
        </div>
        
        </>
    )
}
export default Navbar