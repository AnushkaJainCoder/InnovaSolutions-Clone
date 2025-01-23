import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import '././index.css';


export default function CaseStudies() {
    // const [cardOrder, setCardOrder] = useState([0, 1, 2]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);
    const cardData = [
        {
            imgSrc: 'https://www.innovasolutions.com/wp-content/uploads/2023/08/Change-Healthcare-cs-info.jpg',
            title: 'Transforming Healthcare Data Management for Enhanced Efficiency and Insights',
            body: 'A prominent global provider of healthcare software solutions and services faced significant challenges in data storage, data replication, and high operational costs. Our expert team designed and developed a cutting edge Data Lake Platform capable of handling and processing billions of transactions from various data types.'
            , technology: ' Informatica Power Center, IICS, Python, .NET, PL/SQL and Tableau'

        },
        {
            imgSrc: 'https://www.innovasolutions.com/wp-content/uploads/2023/08/Hyundai-Automotive-cs-info.jpg',
            title: 'Revolutionizing Driving Experiences with an Integrated Platform Application',
            body: 'A renowned multinational automotive manufacturer and a global leader in the automotive industry wanted to improve safety and security for drivers, streamline user experiences and enhance customer engagement. Innova developed a comprehensive platform to enhance operational efficiency that offered various car services with seamless communication, safety, and security.'
            , technology: '  Java with Springboot, Microservices'
        },
        {
            imgSrc: 'https://www.innovasolutions.com/wp-content/uploads/2023/08/Toyota-Industry-cs-info.jpg',
            title: 'Driving Digital Transformation and Streamlining Customer Data Management',
            body: 'A global automotive leader, renowned for its innovative vehicles and dedication to customer satisfaction wanted to manage and integrate vast amounts of customer data with accuracy. Innova implemented a transactional-style Master Data Management (MDM) system to support the client’s global Digital Customer Experience Transformation (DCXT) program.'
            , technology: '  Java with Springboot, Microservices'
        },
        // {
        //     imgSrc: 'https://www.innovasolutions.com/wp-content/uploads/2023/08/Toyota-Industry-cs-info.jpg',
        //     title: 'Driving Digital Transformation and Streamlining Customer Data Management',
        //     body: 'A global automotive leader, renowned for its innovative vehicles and dedication to customer satisfaction wanted to manage and integrate vast amounts of customer data with accuracy. Innova implemented a transactional-style Master Data Management (MDM) system to support the client’s global Digital Customer Experience Transformation (DCXT) program.'
        // },
        {
            imgSrc: 'https://www.innovasolutions.com/wp-content/uploads/2023/09/Telecommunications-CaseStudy.jpg',
            title: 'Enhancing Seamless Customer Experience Across Multiple Channels',
            body: 'Discover how Innova Solutions revolutionized a leading telecommunications company’s customer experience across multiple channels, from retail to telesales, digital platforms to third-party retailers. By addressing unique business challenges and implementing innovative solutions, our client achieved remarkable results in order processing, sales growth, and operational excellence.'
            , technology: '  Java with Springboot, Microservices'
        },

    ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 1200,
        // autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true
        // autoplaySpeed: 2000
    }
    useEffect(()=>{
        const interval = setInterval(() => {
            if(sliderRef.current){
                sliderRef.current.slickNext();
            }
        }, 1000);
        return () => clearInterval(interval)
        
    },[]);
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         console.log(currentIndex);
    //         console.log("ef");

    //         setCurrentIndex((prev) => (prev + 1) % cardData.length);


    //         // setCardOrder((prevOrder) => {
    //         //     const newOrder = [...prevOrder];
    //         //     const firstCard = newOrder.shift();
    //         //     newOrder.push(firstCard);
    //         //     // if()
    //         //     for( let i in newOrder) {
    //         //         if(i===2){
    //         //             i=0;
    //         //         }
    //         //     }
    //         //     console.log(newOrder);

    //         //     return newOrder;
    //         // });
    //     }, 3000);
    //     return () => clearInterval(interval);
    // }, [currentIndex]);

    return (
        <>
            <div className="case-study">
                <h1 style={{ color: '#212169', fontWeight: '620', fontSize: '40px', marginTop: '50px' }}>Case Studies</h1>
                <div className="caseStudyBody">
                    <div className="container-caseStudies" >
                        <Slider ref={sliderRef} {...settings}>
                            {cardData.map((card, index) => (
                                <div key={index} className="cardBody" >
                                    <div className="cardBodyContent">
                                        <img src={card.imgSrc} className="caseStudies-img" alt={card.title} />
                                        <h4 style={{ marginTop: '11px' }}>{card.title}</h4>
                                        <p style={{ marginTop: '-11px' }}>{card.body}</p>
                                        {/* <div>
                                            <p></p>
                                        </div> */}
                                        <p style={{ marginTop: '-11px' }}><b>Technologies:</b> {card.technology}</p>
                                        <button style={{ color: '#212169', fontSize: '14px', margin: '0 ', width: 'fit-content'}}>Download the Case Study to Know More  &gt;</button>
                                    </div>
                                </div>
                            ))}

                        </Slider>

                    </div>
                </div>
            </div>
        </>
    );
}