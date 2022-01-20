import React from 'react'
import Link from 'next/link'

function Main() {
    return (
        <>
        <section className="lg:flex" id="description">
            <div className="lg:w-[50%] lg:order-2 flex justify-center">
                <img className="w-[40%] lg:w-[80%]" src="sitting_man.svg" alt="Sitting Man"></img>
            </div>
            <div className="lg:w-[50%] p-16 lg:pl-20 lg:order-1 flex flex-col justify-center">
                <h1 className="font-bold mb-8 text-xl text-center">What is covid-19?</h1>
                <p className="font-light mb-8 text-center">
                Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.
                Most people infected with the virus will experience mild to moderate respiratory illness and recover without requiring special treatment. However, some will become seriously ill and require medical attention. Older people and those with underlying medical conditions like cardiovascular disease, diabetes, chronic respiratory disease, or cancer are more likely to develop serious illness. Anyone can get sick with COVID-19 and become seriously ill or die at any age.
                </p>
                <Link href="https://www.who.int/health-topics/coronavirus"><button className="bg-blue-500 text-white py-1 w-[9rem] rounded-full hover:bg-blue-300" >View full details</button></Link>
            </div>
        </section>
        </>
    )
}

export default Main