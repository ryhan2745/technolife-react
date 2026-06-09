import { Link } from "react-router-dom"
import "../../css/CategorySlider.css"
const BrandsSlide = ({id,image,brand}) => {
  return (
    id == 2 ? (
       <Link to={`/brands/${brand}/all`}>
            <div className="">
            <div className="flex justify-center pl-10 items-center mb-2 border-l border-gray-400 ">
                <img src={image} alt="" style={{width:"90%"}} />
            </div>
            </div>
        </Link>
    ) : 
    (
        <Link to={`/brands/${brand}/all`}>
            <div className="">
            <div className="flex justify-center items-center  border-l border-gray-400 ">
                <img src={image} alt="" style={{width:"55%"}} />
            </div>
            </div>
        </Link>
    )
    
  )
}

export default BrandsSlide
