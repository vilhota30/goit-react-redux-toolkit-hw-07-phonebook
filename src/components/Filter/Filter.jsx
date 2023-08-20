import {LabelFilter, Input} from "./Filter.styled";
import {useDispatch, useSelector} from 'react-redux';
import { filterSelect } from "redux/Selectors/selectors";
import { setFilterValue } from "redux/Filter/filterSlice";

 const Filter = () => {
    const value = useSelector(filterSelect);
    const dispatch = useDispatch();
    const handleChangeFilter = event => {
        dispatch(setFilterValue(event.target.value));
    };
    return (
        <LabelFilter>
            Find contacts by name
            <Input type="text" value={value} name="filter" placeholder="Enter contact name" onChange={handleChangeFilter}/>
        </LabelFilter>
    );
};

export default Filter;

