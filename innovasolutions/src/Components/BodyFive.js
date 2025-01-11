import { useState } from "react"

export function BodyFive() {

    const [activeCard, setActiveCard] = useState();
    const cardData = [
        {
            title: 'Cyber Security',
            desc: 'Utilize the power of Innova’s cybersecurity offerings to deliver digital trust and neutralize threats effectively.',
            imgsrc: 'https://www.innovasolutions.com/wp-content/uploads/2022/08/Talent-Solutions-copy.webp'
        },
        {
            title: 'Cyber Security',
            desc: 'Utilize the power of Innova’s cybersecurity offerings to deliver digital trust and neutralize threats effectively.',
            imgsrc: 'https://www.innovasolutions.com/wp-content/uploads/2022/08/Cyber-Security-2.webp'
        },
        {
            title: 'Cyber Security',
            desc: 'Utilize the power of Innova’s cybersecurity offerings to deliver digital trust and neutralize threats effectively.',
            imgsrc: 'https://www.innovasolutions.com/wp-content/uploads/2022/08/Cyber-Security-2.webp'
        },
        
    ]
    return (
        <>
        <h1>Services</h1>
            <div className="sercontainer">
                {cardData.map((card, index)=>(
                    <div key={index} >
                        <img src={card.imgsrc} alt={card.title}/>
                        <div className="card-body">
                            <h2>{card.title}</h2>
                            <p >
                                {card.description}
                            </p>
                            <a href="#" style={{ border: 'none' }}>Learn More</a>
                        </div>
                        
                    </div>
                ))}
                
            </div>

        </>
    )
}