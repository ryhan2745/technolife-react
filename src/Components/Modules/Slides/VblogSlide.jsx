import "../../css/SimillarSlider.css"
const VblogSlide = ({id,image,name}) => {
  return (
    <div className="bg-black pb-3 gap-3 flex flex-col rounded-b-xl" style={{width:"100%"}}>
        <img src={image} alt="" />
      <p className="text-white text-xs px-5">{name}</p>
    </div>
  )
}

export default VblogSlide
