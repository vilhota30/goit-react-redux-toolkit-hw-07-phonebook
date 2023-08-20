import PropTypes from "prop-types";
import {Item, Button} from "./ContactItem.styled";
import { BiMessageAltX } from "react-icons/bi";
import {useDispatch} from 'react-redux';
import { deleteContact } from "redux/Contacts/contactsSlice";
const ContactItem = ({id, name, number}) => {

    const dispatch = useDispatch();
    const handleDeleteContact = () => {
        dispatch(deleteContact(id));
    };
    return (
       <Item>
        <span>
            {name}: {number}
        </span>
        <Button type="button" onClick={() => handleDeleteContact(id)}>
         Delete <BiMessageAltX/>
        </Button>
       </Item>
    );
};

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    number: PropTypes.string,
}

export default ContactItem;