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
        <div className="case-study">
            <h1 style={{ color: '#212169', fontWeight: '620', fontSize: '40px', marginTop: '50px' }}>Case Studies</h1>
            <div className="caseStudyBody">
                <div className="container-caseStudies">
                    {cardData.map((card, index) => (
                        <div key={index}>
                            <div className="cardBody">
                                <div className="cardBodyContent">

                                <img src={card.imgSrc} className="caseStudies-img" />
                                <h4 style={{ marginTop: '11px' }}>{card.title}</h4>
                                <p style={{ marginTop: '-11px' }}>{card.body}</p>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </>
    )
}