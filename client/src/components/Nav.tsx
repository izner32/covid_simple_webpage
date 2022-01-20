import React from 'react'

function Nav() {
    return (
        <>
            <nav className="lg:flex justify-between w-[80%] mx-auto py-8">
                <p className="font-medium text-xl mb-8 lg:mb-0">Renzfographics</p>
                <div className="flex flex-col text-left lg:text-right">
                    <a className="hover:text-blue-500" href="#description">What is covid-19?</a>
                    <a className="hover:text-blue-500" href="#origin">How did coronavirus started?</a>
                    <a className="hover:text-blue-500" href="#symptom">Symptoms of coronavirus</a>
                    <a className="hover:text-blue-500" href="#avoid">How to avoid coronavirus?</a>
                </div>
            </nav>
        </>
    )
}

export default Nav