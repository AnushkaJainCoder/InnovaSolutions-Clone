import React, { useState } from 'react';

export function BodyFive() {
    const [activeCard, setActiveCard] = useState(1);

    const handleCardClick = (index) => {
        setActiveCard(activeCard === index ? null : index); // Toggle active card
    };

    const cardData = [
        {
            title: "Cyber Security",
            description: "Utilize the power of Innova’s cybersecurity offerings to deliver digital trust and neutralize threats effectively.",
            imgSrc: "https://www.innovasolutions.com/wp-content/uploads/2022/08/Talent-Solutions-copy.webp"
        },
        {
            title: "Cloud Services",
            description: "Leverage cloud technology to enhance your business operations and scalability.",
            imgSrc: "https://www.innovasolutions.com/wp-content/uploads/2022/08/Talent-Solutions-copy.webp"
        },
        {
            title: "Cloud Services",
            description: "Leverage cloud technology to enhance your business operations and scalability.",
            imgSrc: "https://www.innovasolutions.com/wp-content/uploads/2022/08/Talent-Solutions-copy.webp"
        },
        // {
        //     title: "Cloud Services",
        //     description: "Leverage cloud technology to enhance your business operations and scalability.",
        //     imgSrc: "https://www.innovasolutions.com/wp-content/uploads/2022/08/Talent-Solutions-copy.webp"
        // }
        
    ];

    return (
        <>
            <h1 style={{color: '#212169', fontWeight: '620', fontSize: '40px', marginTop: '50px'}}>Services</h1>
            <div className="sercontainer">

                {cardData.map((card, index) => (
                    <div
                        key={index}
                        className={`card ${activeCard === index ? 'active' : 'not-active'}`}
                        onClick={() => handleCardClick(index)}
                    >
                       <div className="card-body">
                       <img style={{ width: '100%' }} src={card.imgSrc} alt={card.title} />
                        
                            <h3 className='servicesSubHeading'>{card.title}</h3>
                            <p style={{fontSize: '14px'}}>
                                {card.description}
                            </p>
                            <a href="#" style={{ border: 'none'}}>Learn More</a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}