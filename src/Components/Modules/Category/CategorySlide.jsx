import { Link } from 'react-router-dom';
import "../../css/CategorySlider.css"
const CategorySlide = ({image,alt,title,category}) => {
  return (
    <>
        <div className="swiper-slide">
        <div>
          <Link to={`/categories/${category}`} className="flex flex-col justify-center items-center gap-5">
            <img src={image} alt={alt} className="p-1 border-2 border-blue-500 rounded-full" style={{width:"55%"}} />
            <p className='text-sm' style={{fontFamily:"font"}}>{title}</p>
          </Link>
        </div>
      </div>
    </>
  )
}

export default CategorySlide
