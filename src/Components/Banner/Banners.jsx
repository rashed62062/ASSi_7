



import img from '../../assets/banner-main.png';

export default function Banner() {
  return (
     <div className=' bg-gray-950 py-8'>
      <div className='p-5 rounded-lg flex justify-center '>
      <img className='mx-auto h-auto w-auto max-w-full' src={img} alt="Banner" />
        
    </div>
     <div className='text-yellow-100 text-center'>
      <h1 className='text-red-300'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
       <p>Beyond Boundaries Beyond Limits</p>
       <div className='rounded-lg'>
        <button className= 'rounded-lg btn bg-yellow-300 border-e-10 mt-6'>Clime free Credit</button>
       </div>
      </div>
     </div>
  );
}