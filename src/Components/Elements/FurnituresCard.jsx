import { Link } from "react-router-dom"

const FurnituresCard = ({category,image}) => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <Link to={`/categories/${category}`}>
            <img src={image} alt="" className="rounded-lg" />
        </Link>
        </div>
    </div>
  )
}

export default FurnituresCard
