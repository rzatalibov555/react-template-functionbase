import './Logo.css'
import Img from '../../common/img/Img';

const Logo = () => {
    return (
        <div className="col-xs-4 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
            <div className="logo">
                <Img src="https://s3-us-west-2.amazonaws.com/static.music-man.com/website/images/instruments/instrument-109.png?1696912197" alt="logo" myClass="myLogo" />
            </div>
        </div>
    )
}

export default Logo;