import '../index';
import '@fortawesome/fontawesome-free/css/all.min.css';

export function Navbar() {
    return (
        <>
            <nav>
                {/* company logo */}
                <img src="https://www.innovasolutions.com/wp-content/uploads/2025/01/Innova-Logo-New.svg" />
                <ul>
                    <li>
                        Services
                    </li>
                    <li>
                        Industries
                    </li>
                    <li>
                        Partnerships
                    </li>
                    <li>
                        Innova@Work
                    </li>
                    <li>
                        Company
                    </li>
                    <li>
                        Career
                    </li>
                    <li>
                        Contact us
                    </li>
                    <li style={{color: 'grey'}}>|</li>
                    <i className="fas fa-search" />
                </ul>
                {/* search icon */}
                {/* <p>hello</p> */}
               

            </nav>

        </>
    )
}