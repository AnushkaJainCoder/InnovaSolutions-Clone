import { useEffect, useState } from "react";

export default function CaseStudies() {
    // const [cardOrder, setCardOrder] = useState([0, 1, 2]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardData = [
        {
            imgSrc: 'https://www.innovasolutions.com/wp-content/uploads/2023/08/Change-Healthcare-cs-info.jpg',
            title: 'Driving Digital Transformation and Streamlining Customer Data Management',
            body: 'A global automotive leader, renowned for its innovative vehicles and dedication to customer satisfaction wanted to manage and integrate vast amounts of customer data with accuracy. Innova implemented a transactional-style Master Data Management (MDM) system to support the client’s global Digital Customer Experience Transformation (DCXT) program.'
        },
        {
            imgSrc: 'https://www.innovasolutions.com/wp-content/uploads/2023/08/Hyundai-Automotive-cs-info.jpg',
            title: 'Driving Digital Transformation and Streamlining Customer Data Management',
            body: 'A global automotive leader, renowned for its innovative vehicles and dedication to customer satisfaction wanted to manage and integrate vast amounts of customer data with accuracy. Innova implemented a transactional-style Master Data Management (MDM) system to support the client’s global Digital Customer Experience Transformation (DCXT) program.'
        },
        {
            imgSrc: 'https://www.innovasolutions.com/wp-content/uploads/2023/08/Toyota-Industry-cs-info.jpg',
            title: 'Driving Digital Transformation and Streamlining Customer Data Management',
            body: 'A global automotive leader, renowned for its innovative vehicles and dedication to customer satisfaction wanted to manage and integrate vast amounts of customer data with accuracy. Innova implemented a transactional-style Master Data Management (MDM) system to support the client’s global Digital Customer Experience Transformation (DCXT) program.'
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % cardData.length);
            // setCardOrder((prevOrder) => {
            //     const newOrder = [...prevOrder];
            //     const firstCard = newOrder.shift();
            //     newOrder.push(firstCard);
            //     // if()
            //     for( let i in newOrder) {
            //         if(i===2){
            //             i=0;
            //         }
            //     }
            //     console.log(newOrder);

            //     return newOrder;
            // });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="case-study">
                <h1 style={{ color: '#212169', fontWeight: '620', fontSize: '40px', marginTop: '50px' }}>Case Studies</h1>
                <div className="caseStudyBody">
                    <div className="container-caseStudies" >

                        {cardData.map((card, index) => (
                            <div key={index} className="cardBody" style={{ transform: `translateX(-${currentIndex * (100 / cardData.length)}%)`, transition: 'transform 0.5s ease' }}>
                                <div className="cardBodyContent">
                                    <img src={card.imgSrc} className="caseStudies-img" alt={card.title} />
                                    <h4 style={{ marginTop: '11px' }}>{card.title}</h4>
                                    <p style={{ marginTop: '-11px' }}>{card.body}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}