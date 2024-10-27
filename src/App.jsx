

import { useState } from 'react'
import './App.css'
import Allplers from './Components/Allapers/Allplers'
import Banner from './Components/Banner/Banners'
import CartCounter from './Components/CartCountainer/CartCounter'
import Navars from './Components/Component/Navar/Navars'



function App() {

  //  toggle button function
  const [isActive, setIsActive] = useState({
      cart : true,
    status: "cart"
  })


  const handleIsActiveState = (status) =>{
    if(status == "cart"){
      setIsActive({
        cart : true,
    status: "cart"

      })
    }

    else{
      setIsActive({
        cart : false,
    status: "about"
      })
    }

  }

  console.log(isActive);

  return (
    <>

      
   <div className='px-9'>
   <Navars></Navars>
   <Banner></Banner>
 
   </div>
   <div className='flex justify-around' >
   <Allplers></Allplers>
   <CartCounter isActive={isActive} handleIsActiveState={handleIsActiveState} ></CartCounter>
   </div>
    </>
  )
}

export default App
