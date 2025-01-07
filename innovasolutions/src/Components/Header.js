import '../index'

export function Header() {
    let imageContent = [
        {
            imgLink: 'https://thenationalfrontier.com/wp-content/uploads/2021/04/What_is_Information_Technology.jpg',
            text: 'Innovative Core Engineering for Product edge development'
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
                        <p>{i.text}</p>
                    </div>

                </div>

            )
            )}
        </div>
    )
}