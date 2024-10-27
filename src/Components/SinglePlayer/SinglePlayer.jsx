export default function SinglePlayer({ player }) {
  const { name, country, battingType, bowlingType, biddingPrice, role, image } = player;

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex flex-col items-center">
        <img 
          src={image} 
          alt={`${name}`} 
          className="w-24 h-24 object-cover rounded-md mb-2" 
        />
       
      </div>
      <div>
        <h1>{name}</h1>
      </div>
      <div className="flex justify-between">
        {country}
        <div><button> All rounder</button></div>
      </div>
      
      <div>
        <hr />
      </div>
      <div><h4>Rating</h4></div>
      
      <div className="flex justify-between">
        <div>
          {battingType}
        </div>
        <div>
          {bowlingType}
        </div>
      </div>
      <div className=" flex justify-between text-1xl">
        <div> Price: ${biddingPrice}</div>
        <div className="bg-slate-500 rounded-sm text-gray-400"><button>Choose player</button></div>
      </div>
    </div>
  );
}
