import React from 'react'

function Infographic() {
    return (
        <>
            {/* How did coronavirus started? */}
            <section className="p-20 text-sm md:text-base" id="origin">
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
                        <div className="flex flex-col">
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

            {/* Symptoms of coronavirus */}
            <section className="p-20 pt-0 text-sm md:text-base" id="symptom">
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
                        <h1 className="font-bold text-white text-xl">Symptoms of coronavirus</h1>
                    </div>
                    <div className="lg:flex">
                        <div className="lg:flex lg:w-[50%] text-center mb-8 lg:mb-0">
                        <div className="flex justify-center lg:block mb-8 lg:mb-0 lg:mr-8">
                            <img className="" src="cdc_logo.png" alt="CDC Logo" width="100" height="20"></img>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-white font-medium">Center for Disease Control and Prevention</p>
                            <p className="text-white font-light">Nation's Health Protection Agency</p>
                        </div>
                        </div>
                        <div className="lg:w-[50%] text-center lg:text-left text-white font-light">
                            <p className="mb-8">
                                People with COVID-19 have had a wide range of symptoms reported – ranging from mild symptoms to severe illness. Symptoms may appear 2-14 days after exposure to the virus. Anyone can have mild to severe symptoms. People with these symptoms may have COVID-19:
                            </p>
                            <ul className="w-[75%] pl-8 md:pl-16 mb-8 text-left">
                                <li>Fever or chills</li>
                                <li>Cough</li>
                                <li>Shortness of breath or difficulty breathing</li>
                                <li>Fatigue</li>
                                <li>Muscle or body aches</li>
                                <li>Headache</li>
                                <li>New loss of taste or smell</li>
                                <li>Sore throat</li>
                                <li>Congestion or runny nose</li>
                                <li>Nausea or vomiting</li>
                                <li>Diarrhea</li>
                            </ul>
                            <p className="">
                                This list does not include all possible symptoms. CDC will continue to update this list as we learn more about COVID-19. Older adults and people who have severe underlying medical conditions like heart or lung disease or diabetes seem to be at higher risk for developing more serious complications from COVID-19 illness.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How to avoid coronavirus? */}
            <section className="p-20 pb-40" id="avoid">
                <h1 className="font-bold text-xl sm:text-2xl md:text-4xl lg:text-6xl text-center sm:leading-loose md:leading-loose lg:leading-loose">How to avoid coronavirus?</h1>
                <h1 className="font-bold text-xl sm:text-2xl md:text-4xl lg:text-6xl text-center leading-loose sm:leading-loose md:leading-loose lg:leading-loose">
                    Wear a mask.<br></br>
                    Save lives.<br></br>
                    Wear a mask<br></br>
                    Clean your hands<br></br>
                    Keep a safe distance<br></br>
                    Get a vaccine when it's available to you
                </h1>
            </section>
        </>
    )
}

export default Infographic