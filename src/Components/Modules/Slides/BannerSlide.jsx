import "../../css/BannerSlider.css"
const BannerSlide = ({image,alt}) => {
  return (
    <div>
      <img src={image} alt={alt} />
    </div>
  )
}

export default BannerSlide
