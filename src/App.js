import Logo from './asserts/logo.png'
import Img1 from './asserts/1.png'
import Img2 from './asserts/2.png'
import Img3 from './asserts/3.png'
import './App.css';

function App() {
  return (
    <div className='bg-gradient-to-b from-slate-50 to-amber-200' >

     <div className="App w-11/12 mx-auto relative">
      {/* Logo */}
     <div className='flex justify-center items-center'>
      <img 
      height={25}
      width={500}
      src={Logo}
      ></img>
      
     </div>

      {/* Award Content */}
     <div className='flex felc-row '>
      <div>
        <img src={Img1}></img>
      </div>
      <div>
      <div>
      <div className='font-bold'>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</div>
       <br/>
      C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.
      C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. 
      </div>
      <br/>
      <div>
        <img 
        src={Img2}></img>
      </div>
      <p>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
     </div>
     </div>
      <br/>
      <br/>
    
     {/* Tools Image */}
     <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
       <div className='flex justify-center items-center'><img 
       className=' h-96'
       src={Img3}/>
       </div>
       <p className='text-center m-5'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>


      <div className='h-0.5 bg-red-700'></div>

      {/* Footer */}
      <div >
       <p className='text-center font-bold mt-5'>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
       <p className='text-center m-5'>CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE & RESIDENTIAL</p>
        <div className='flex place-content-evenly bg-red-500 text-white py-5'>
            <p>Tollfree</p>
            <p>Facebook</p>
            <p>Website</p>
        </div><br/>
      </div>



     </div>
     </div>

  );
}

export default App;
