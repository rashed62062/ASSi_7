
import About from '../About/About';
import Cart from '../Cart/Cart';
import './Cartcounter.css'

export default function CartCounter({handleIsActiveState,isActive}) {
    console.log(isActive);
    
  return (
    <div> 
        <h1>Cart Counter</h1>
  
<div className="toggle flex gap-3">
    <div onClick={()=>handleIsActiveState('cart')} className={`${isActive.cart?"btn active":"btn"}`}>Available</div>
    <div onClick={()=>handleIsActiveState('about')} className={`${isActive.cart?"btn ":"active btn"}`}>selects  <span>(0)</span> </div>
</div>
  {isActive.cart?<Cart></Cart>:
    <About></About>}
    </div>
  )
}
