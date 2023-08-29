import {LabelFilter, Input} from "./Filter.styled";
import {useDispatch, useSelector} from 'react-redux';
import { selectFilter } from "redux/Selectors/selectors";
import { setFilterValue } from "redux/Filter/filterSlice";

 const Filter = () => {
    const value = useSelector(selectFilter);
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

