import PropTypes from "prop-types";

const Link = ({route}) => {
    return (
        <li className="mr-10 hover:bg-emerald-200 rounded px-4 py-1 font-semibold" >
            <a href={route.path}>{route.name}</a>
        </li>
    );
};


Link.prototypes={
    route:PropTypes.object.isRequired,
}
export default Link;