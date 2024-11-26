import PropTypes from "prop-types";
import { TiTick } from "react-icons/ti";

const Feature = ({feature}) => {
    return (
        <div>
            <p className="flex items-baseline">
            <TiTick className="text-green-500 text-2xl mr-4"/>
                {feature}
            </p>
        </div>
    );
};


Feature.propTypes = {
    feature: PropTypes.string
};
export default Feature;