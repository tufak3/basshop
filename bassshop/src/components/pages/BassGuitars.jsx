import '../../styles/pages/category.css'
import shopCart from '../../constats/shopCart'
function BassGuitars() {
    return (
        <>
        <div className="category-wrapper">
            <div className="category-container">
                <div className="category-left">
                    <div>
                        check
                    </div>
                    </div>
                <div className="category-list"> 
                    <h1 style={{marginLeft: '30px'}}>Бас-гитары</h1>
                    <div className='grid-container'>
                    {shopCart.map((item) => (
                    <div className="category-list-item">
                            <div key={item.id} className='item-container'>
                                <img src={item.img} alt={item.name} className='category-img'/>
                            </div>
                            <div className='card-container'>
                                <p style={{marginTop: '7px'}}>{item.name}</p>
                                <p style={{fontWeight: 300}}>{item.price}</p>
                                <p style={{fontWeight: 300, color: '#00CC1F'}}>{item.have}</p>
                            </div>
                    </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default BassGuitars
