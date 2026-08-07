import BrandCard from "../components/BrandCard"; 
import { useState, useEffect} from "react"; 

export default function Brands() {
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
       <div className="BrandCard">
                <div className="image">
                    <img src="/BEAUTYBYAD.png" alt="BEAUTYBYAD logo" />
                </div>

                <div className="texts">
                    <h2> BEAUTY BY AD. </h2>
                    <p className="info">
                        <a className="author"> Adeola Adeyemi </a>
                        <time> 2026-08-05 9:23 </time>
                    </p>

                    <p className="summary"> by Adeola (Chizoba) Adeyemi, 2017, Nigeria </p>
                </div>

            </div>
    )
}