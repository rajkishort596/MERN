import Product from "./Product.jsx";
import Cpu_img from "./assets/CPU.webp";
import Motherboard_img from "./assets/Motherboard.png";
import Mouse_img from "./assets/Mouse.webp";
import Keyboard_img from "./assets/Keyboard.webp";
import './Products.css'
const Products = () => {
  const Products = ["Motherboard", "Keyboard", "Mouse", "CPU"];
  const ProductsImg = [Motherboard_img, Keyboard_img, Mouse_img, Cpu_img];
  const ProductsDescription = [
    "Jual ASUS ROG MAXIMUS Z790 HERO BTF | MOTHERBOARD INTEL Z790 LGA1700 DDR5",
    "87-key Mechanical Keyboard, RGB LED, Outemu Blue Switch, Green Axis Keyboard, Gaming Keyboard",
    "Zebronics Zeb-Transformer Gaming Mouse",
    "Ant Esports Dynamic GT Mid Tower ARGB Gaming Cabinet",
  ];
  const ProductPrice = ["₹70,810.00","₹799.00","₹299.00","₹7,905.00"]

  return (
    <div className="Products">
      <Product
        Title={Products[0]}
        Info={ProductsDescription[0]}
        img={ProductsImg[0]}
        price = {ProductPrice[0]}
      />
      <Product
        Title={Products[1]}
        Info={ProductsDescription[1]}
        img={ProductsImg[1]}
        price = {ProductPrice[1]}
      />
      <Product
        Title={Products[2]}
        Info={ProductsDescription[2]}
        img={ProductsImg[2]}
        price = {ProductPrice[2]}
      />
      <Product
        Title={Products[3]}
        Info={ProductsDescription[3]}
        img={ProductsImg[3]}
        price = {ProductPrice[3]}
      />
    </div>
  );
};

export default Products;
