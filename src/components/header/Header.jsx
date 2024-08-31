

import './Header.css'
import Logo from './logo/Logo';
import Menu from './menu/Menu';
import SocialMain from './socialMain/SocialMain';


const Header = () => {
    return (
        <div className="container-fluid px-0">
            <div className='header'>

                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-0">
                        <Logo />
                        <Menu />
                        <SocialMain/>
                    </div>
                </div>

            </div>
        </div>

    )
}



export default Header;