import PropTypes from "prop-types";
import {LabelFilter, Input} from "./Filter.styled";

 const Filter = ({value, onChange}) => {
    return (
        <LabelFilter>
            Find contacts by name
            <Input type="text" value={value} onChange={onChange}/>
        </LabelFilter>
    );
};

Filter.PropTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};
export default Filter;