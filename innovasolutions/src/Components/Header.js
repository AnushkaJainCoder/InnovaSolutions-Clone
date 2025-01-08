import { useEffect, useRef, useState } from 'react';
import '../index'

export function Header() {

    // for scrolling
    // const srcollref = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const imageContent = [
        {
            imgLink: 'https://www.sigmoid.com/wp-content/uploads/2024/12/Group-31130-1-1024x501.png',
            text: 'We are Leaders in Talent and Technology Solutions.'
        },
        {
            imgLink: 'https://t3.ftcdn.net/jpg/05/14/95/12/360_F_514951224_2dxMLbIw5qNRdPGD003chpbVcxWtcp7K.jpg',
            text: 'Innovative Core Engineerig Solutions for Leading Edge Product Developement & Process Optimization.',
        },
        {
            imgLink: 'https://media.licdn.com/dms/image/v2/C4D12AQHONeaXTrl3GQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1650366012252?e=2147483647&v=beta&t=R0WWCVafRBe0ZcFjSSNuzKPw6zc6jf9UzfLCT663hVg',
            text: 'Accelerating Client success through Digital Innovation.'
        },
        {
            imgLink: 'https://www.ruffalonl.com/wp-content/uploads/2022/03/CWarren_DigitalWallet_1200.jpg',
            text: 'A digital first-payment platform Inno-Wallet'
        },
        
        {
            imgLink: 'https://eu-images.contentstack.com/v3/assets/blt10e444bce2d36aa8/blt4ac01957d4312a1b/663d0509a040fddd8a864381/Generative_AI_Robot.jpg?width=1280&auto=webp&quality=95&format=jpg&disable=upscale',
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