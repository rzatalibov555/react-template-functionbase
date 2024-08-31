import './Img.css'


const Img = ({src, alt, myClass}) => {
    return(
        <img src={src} alt={alt} className={myClass}/>
    )
}

export default Img;