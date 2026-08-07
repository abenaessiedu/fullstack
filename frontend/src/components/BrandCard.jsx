import { Link } from "react-router-dom"; 

export default function BrandCard({_id, author, } ) {
    return (
        
            <div className="BrandCard">
                <div className="image">
                     <Link to={`/brands/${_id}`}>
                    <img src={" "} alt="" />
                    </Link>
                </div>

                <div className="texts">
                   
                    <h2> {} </h2>
                    <Link /> 
                    <p className="info">  </p>

                    <p className="summary">  </p>
                </div>

            </div>
    ); 
}