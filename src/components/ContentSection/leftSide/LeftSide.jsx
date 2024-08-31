import Img from '../../common/img/Img';
import './LeftSide.css'

const LeftSide = () => {
    return(
        <div className='col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6'> 
            <div className="l_side d-flex justify-content-center align-items-center">
                <Img src="https://static.vecteezy.com/system/resources/thumbnails/027/142/314/small_2x/3d-computer-icons-png.png" alt="PC" myClass="l_side_img"/>
            </div>
        </div>
    )
}

export default LeftSide;