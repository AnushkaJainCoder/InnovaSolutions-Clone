export default function CaseStudies() {
    const cardData = [
        {
            imgSrc: 'https://www.innovasolutions.com/wp-content/uploads/2023/08/Hyundai-Automotive-cs-info.jpg',
            title: 'Driving Digital Transformation and Streamlining Customer Data Management',
            body: 'A global automotive leader, renowned for its innovative vehicles and dedication to customer satisfaction wanted to manage and integrate vast amounts of customer data with accuracy. Innova implemented a transactional-style Master Data Management (MDM) system to support the client’s global Digital Customer Experience Transformation (DCXT) program.'

        },
        {
            imgSrc: 'https://www.innovasolutions.com/wp-content/uploads/2023/08/Hyundai-Automotive-cs-info.jpg',
            title: 'Driving Digital Transformation and Streamlining Customer Data Management',
            body: 'A global automotive leader, renowned for its innovative vehicles and dedication to customer satisfaction wanted to manage and integrate vast amounts of customer data with accuracy. Innova implemented a transactional-style Master Data Management (MDM) system to support the client’s global Digital Customer Experience Transformation (DCXT) program.'

        },
        {
            imgSrc: 'https://www.innovasolutions.com/wp-content/uploads/2023/08/Hyundai-Automotive-cs-info.jpg',
            title: 'Driving Digital Transformation and Streamlining Customer Data Management',
            body: 'A global automotive leader, renowned for its innovative vehicles and dedication to customer satisfaction wanted to manage and integrate vast amounts of customer data with accuracy. Innova implemented a transactional-style Master Data Management (MDM) system to support the client’s global Digital Customer Experience Transformation (DCXT) program.'

        },

    ]
    return (
        <>
            <h1>Case Studies</h1>
            <div className="caseStudyBody">
                <div className="container-caseStudies">
                    {cardData.map((card, index) => (
                        <div key={index}>
                            <div className="cardBody">
                                <img src={card.imgSrc} className="caseStudies-img" />
                                <h4 style={{ marginTop: '11px' }}>{card.title}</h4>
                                <p>{card.body}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}