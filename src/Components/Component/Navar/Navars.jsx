
 import navarImg from '../../../assets/logo.png'
 export default function Navars() {
   return (

<div className="flex justify-between px-8">
        <img src={navarImg} alt="Logo" className="bg-shadow" />
        <ul className="flex gap-3 text-xl">
          <li><a href="">Home</a></li>
          <li><a href="">Fixture</a></li>
          <li><a href="">Teams</a></li>
          <li><a href="">Schedules</a></li>
          <li className="bg-slate-400 mx-4 my-1 rounded"><a href=""> 0 Coin</a></li>
        </ul>
      </div>
     
   )
 }
 