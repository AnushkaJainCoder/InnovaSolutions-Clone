import React, { useEffect, useState } from 'react';

export function Services() {
    const [activeCard, setActiveCard] = useState(1);
    const [cardOrder, setCardOrder] = useState([0,1,2]);

    const handleCardClick = (index) => {
        setActiveCard(index); // Toggle active card
    };

    const cardData = [
        {
            title: "Cyber Security",
            description: "Utilize the power of Innova’s cybersecurity offerings to deliver digital trust and neutralize threats effectively.",
            imgSrc: "https://www.innovasolutions.com/wp-content/uploads/2022/08/Cyber-Security-2.webp"
        },
        {
            title: "Cloud Services",
            description: "Innova’s custom cloud services drive innovation, agility, and intelligence across enterprises helping them realize significant business value.",
            imgSrc: "https://www.innovasolutions.com/wp-content/uploads/2024/12/Cloud-services-info.jpg"
        },
        {
            title: "Talent Solutions",
            description: "Tap into our expertise to address the complex workforce needs and optimize your talent acquisition strategies.",
            imgSrc: "https://www.innovasolutions.com/wp-content/uploads/2022/08/Talent-Solutions-copy.webp"
        },
        // {
        //     title: "Cloud Services",
        //     description: "Leverage cloud technology to enhance your business operations and scalability.",
        //     imgSrc: "https://www.innovasolutions.com/wp-content/uploads/2022/08/Talent-Solutions-copy.webp"
        // }

    ];
    useEffect(() => {
        const interval = setInterval(() => {
             setActiveCard((prev) => (prev + 1) % cardData.length);
             setCardOrder((prevOrder) => {
                const newOrder = [...prevOrder];
                const firstCard = newOrder.shift();
                newOrder.push(firstCard);
                return newOrder;
             })
        }, 1000);
        return () => clearInterval(interval)
    }, [])


    return (
        <>
            <h1 style={{ color: '#212169', fontWeight: '620', fontSize: '40px', marginTop: '50px' }}>Services</h1>
            <div className="sercontainer">

                {cardOrder.map((cardIndex) => (
                    <div
                        key={cardIndex}
                        className={`card ${activeCard === cardIndex ? 'active' : 'not-active'}`}
                        onClick={() => handleCardClick(cardIndex)}
                    >
                        <div className="card-body">
                            <img style={{ width: '100%' }} src={cardData[cardIndex].imgSrc} alt={cardData[cardIndex].title} />

                            <h3 className='servicesSubHeading'>{cardData[cardIndex].title}</h3>
                            <p style={{ fontSize: '14px', paddingLeft: '30px', paddingRight: '30px', fontWeight: '500' }}>
                                {cardData[cardIndex].description}
                            </p>
                            <a href="#" style={{ border: 'none', color: '#212169', fontWeight: '700', textDecoration: 'none' }}>Learn More &gt;</a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}