import '../index'

export function Header() {
    let imageContent = [
        {
            imgLink: 'https://t3.ftcdn.net/jpg/05/14/95/12/360_F_514951224_2dxMLbIw5qNRdPGD003chpbVcxWtcp7K.jpg',
            text: 'Innova Orion Empowering Global Capability Centers with tailored & versatile solutions, leveraging our adaptable assets for unparalleled growth, innovation and success, while driving enterprise value'
        },
        {
            imgLink: '',
            text: 'Innovative Core Engineering for Product edge development'
        },
        {
            imgLink: '',
            text: 'Innovative Core Engineering for Product edge development'
        },
    ]
    return (
        <div className='contentbody'>
            {/* <img src="" /> */}
            {imageContent.map((i, index) => (
                <div key={index}>
                    {/* //  <img src={i.imgLink} /> */}
                    <div className='posterimage' style={{ backgroundImage: `url(${i.imgLink})` }}>
                        <p className='headerText'>{i.text}</p>
                    </div>
                </div>
            )
            )}
        </div>
    )
}