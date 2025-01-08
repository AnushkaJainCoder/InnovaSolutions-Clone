import { useEffect, useRef, useState } from 'react';
import '../index'

export function Header() {

    // for scrolling
    // const srcollref = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const imageContent = [
        {
            imgLink: 'https://t3.ftcdn.net/jpg/05/14/95/12/360_F_514951224_2dxMLbIw5qNRdPGD003chpbVcxWtcp7K.jpg',
            text: 'Innova Orion Empowering Global Capability Centers with tailored & versatile solutions, leveraging our adaptable assets for unparalleled growth, innovation and success, while driving enterprise value'
        },
        {
            imgLink: 'https://media.licdn.com/dms/image/v2/C4D12AQHONeaXTrl3GQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1650366012252?e=2147483647&v=beta&t=R0WWCVafRBe0ZcFjSSNuzKPw6zc6jf9UzfLCT663hVg',
            text: 'Innovative Core Engineering for Product edge development'
        },
        {
            imgLink: 'https://www.sigmoid.com/wp-content/uploads/2024/12/Group-31130-1-1024x501.png',
            text: 'Innovative Core Engineering for Product edge development'
        },
        {
            imgLink: 'https://i0.wp.com/keepler.io/wp-content/uploads/2023/10/keepler-data-tech-aws-cloud-solutions-1.jpg?resize=1080%2C608&ssl=1',
            text: 'Innovative Core Engineering for Product edge development'
        },

    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % imageContent.length)
        }, 3000);

        return () => clearInterval(interval);


        //    setInterval(()=>{
        //         if(srcollref.current){
        //             srcollref.current.scrollBy({
        //                 left: window.innerWidth,
        //                 behavior: 'smooth'
        //             })
        //         }
        //     }, 3000);
        // return () => clearInterval(scrollInterval);
    }, [])
    return (
        <div className='contentbody' >
            {/* <img src="" /> */}
            {imageContent.map((i, index) => (
                <div key={index}>
                    <div className={`posterimage ${currentIndex === index ? 'active' : ''}`} style={{ backgroundImage: `url(${i.imgLink})` }}>
                        <p className={`headerText ${currentIndex === index ? 'slide-in' : 'slide-out'}`}>{i.text}</p>
                    </div>
                </div>
            )
            )}
            <div className='dots'>
                {imageContent.map((_,index) =>(
                    <span key={index} className={`dot ${currentIndex === index ? 'active': ''}`} onClick={() => setCurrentIndex(index)}>

                    </span>
                ))}
            </div>
        </div>
    )
}