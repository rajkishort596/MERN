import "./Product.css"
const Product = ({Title, Info, img, price}) => {
  return (
    <div className="product">
     <h4>{Title}</h4>
     <img src= {img}  />
     <p>{Info}</p>
     <p className="price">{price}</p>
    </div>
   
  )
}

export default Product