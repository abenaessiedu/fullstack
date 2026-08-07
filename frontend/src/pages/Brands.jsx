import BrandCard from "../components/BrandCard"; 
import { useState, useEffect} from "react"; 

export default function Brands({data}) {
    const [brands, setBrands] = useState([]);
   async function getBrands() {
    try {
        const response = await fetch(`http://localhost:7777/brands`);
        const data = await response.json();
        console.log(data);
        return setBrands(data);
    } catch (e) {
        console.log(e);
    }
}
  useEffect(() => {
    getBrands();
  }, []);

    return (
        //i should just put examples of black owned brands--BRASS TAX 
   <div className="BrandList">
      {brands.map((brand) => (
        <BrandCard
          key={brand._id}
          _id={brand._id}
          author={brand.author}
          name={brand.name}
          image={brand.image}
          summary={brand.summary}
        />
      ))}
    </div>
    )
}