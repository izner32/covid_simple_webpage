import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer';
import Nav from '../components/Nav';


export default function Home() {
  return (
    <>
      <Nav></Nav>
      <section className="pt-20 lg:flex">
        <div className="lg:w-[50%] lg:order-2 flex justify-center">
          <img className="w-[40%] lg:w-[80%]" src="sitting_man.svg" alt="Sitting Man"></img>
        </div>
        <div className="lg:w-[50%] p-16 lg:pl-20 lg:order-1 flex flex-col justify-center">
          <h1 className="font-bold mb-8 text-xl text-center">What is covid-19?</h1>
          <p className="font-light mb-8 text-center">
            Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.
            Most people infected with the virus will experience mild to moderate respiratory illness and recover without requiring special treatment. However, some will become seriously ill and require medical attention. Older people and those with underlying medical conditions like cardiovascular disease, diabetes, chronic respiratory disease, or cancer are more likely to develop serious illness. Anyone can get sick with COVID-19 and become seriously ill or die at any age.
          </p>
          <button className="bg-blue-500 text-white py-1 w-[9rem] rounded-full hover:bg-blue-500">View full details</button>
        </div>
      </section>
      <section className="p-20">
        <div 
          className="rounded-lg p-16"
          style={{  
            backgroundImage: "url(" + "https://i.ibb.co/yqQ0g2m/Rectangle-13.png" + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="mb-16 text-center">
            <h1 className="font-bold text-white text-xl">How did coronavirus started?</h1>
          </div>
          <div className="lg:flex">
            <div className="lg:flex lg:w-[50%] text-center mb-8 lg:mb-0">
              {/* <div className="lg:w-[50%] lg:h-[50%]"></div> */}
              <div className="flex justify-center lg:block mb-8 lg:mb-0 lg:mr-8">
                <img className="" src="webmd_logo.png" alt="WebMD Logo" width="100" height="20"></img>
              </div>
              <div classname="flex flex-col">
                <p className="text-white font-medium">WebMD</p>
                <p className="text-white font-light">Health News Publisher</p>
              </div>
            </div>
            <div className="lg:w-[50%] text-center lg:text-left ">
              <p className="text-white font-light">
                Experts say SARS-CoV-2 originated in bats. That’s also how the coronaviruses behind Middle East respiratory syndrome (MERS) and severe acute respiratory syndrome (SARS) got started.<br></br><br></br>
                SARS-CoV-2 made the jump to humans at one of Wuhan’s open-air “wet markets.” They’re where customers buy fresh meat and fish, including animals that are killed on the spot.<br></br><br></br>
                Some wet markets sell wild or banned species like cobras, wild boars, and raccoon dogs. Crowded conditions can let viruses from different animals swap genes. Sometimes the virus changes so much it can start to infect and spread among people.
              </p>
            </div>
          </div>
          </div>
      </section>
      <Footer></Footer>
    </>
  )
}