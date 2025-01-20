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
            <h1>Services</h1>
            <div className="sercontainer">

                {cardData.map((card, index) => (
                    <div
                        key={index}
                        className={`card ${activeCard === index ? 'active' : 'not-active'}`}
                        ornClick={() => handleCardClick(index)}
                    >
                       <div className="card-body">
                       <img style={{ width: '100%' }} src={card.imgSrc} alt={card.title} />
                        
                            <h2>{card.title}</h2>
                            <p className={activeCard === index ? 'visible' : 'hidden'}>
                                {card.description}
                            </p>
                            <a href="#" style={{ border: 'none' }}>Learn More</a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}