import PropTypes from "prop-types";
import {Item, Button} from "./ContactItem.styled";
import { BiMessageAltX } from "react-icons/bi";
import {useDispatch} from 'react-redux';
import { toast } from 'react-hot-toast';
import { deleteDataContacts } from "redux/Operations/operations";
const ContactItem = ({name, number, id}) => {

    const dispatch = useDispatch();

    const handleDeleteContact = () => {
        dispatch(deleteDataContacts(id));
        toast.success(`Deleted contact: ${name}`, {
            theme: "colored"
          });
            
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