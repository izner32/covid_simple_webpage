import React from 'react'

function Footer() {
    return (
        <>
            <div 
                className="p-2"
                style={{  
                    backgroundImage: "url(" + "https://i.ibb.co/yqQ0g2m/Rectangle-13.png" + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
                >
                <h6 className="font-medium text-white text-sm">Copyright © 2022, Renzfographic. All Rights Reserved</h6>
            </div>
        </>
    )
}

export default Footer