import PropTypes from "prop-types";

import Feature from "../Feature/Feature"; 

const PriceCard = ({ option }) => {

    const { name, price, features } = option;
    
    return (
        <div className="flex flex-col text-center hover:bg-emerald-200 bg-yellow-100 p-4 rounded font-semibold text-black">
            <h2 className="text-center">
                <span className="text-7xl">{price}</span>
                <span className="text-2xl">/mon</span>
            </h2>

            <h4 className="text-3xl my-5">{name}</h4>

            <ul className="list-none space-y-2 flex-grow">
             
              {
                    features.map((feature, index) => (
                        <Feature key={index} feature={feature} />
                    ))
                }
              
            </ul>
            <button className="font-semibold rounded hover:bg-yellow-200 bg-green-300 py-4 mt-6 w-full">Buy now</button>
        </div>
    );
};

PriceCard.propTypes = {
    option: PropTypes.object.isRequired
};

export default PriceCard;
