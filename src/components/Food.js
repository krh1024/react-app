import PropTypes from "prop-types";

function Food(props) {
    return (
        <div>
            <h3>food is {props.name}</h3>
            <h4>{props.rating} / 5.0</h4>
            <img src={props.src} alt={props.name}/>
        </div>
    );
}

Food.propTypes = {
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
}
export default Food;