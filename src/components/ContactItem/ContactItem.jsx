import PropTypes from "prop-types";
import {Item, Button} from "./ContactItem.styled";
import { BiMessageAltX } from "react-icons/bi";
const ContactItem = ({id, name, number, onDeleteContact}) => {
    return (
       <Item>
        <span>
            {name}: {number}
        </span>
        <Button type="button" onClick={() => onDeleteContact(id)}>
         Delete <BiMessageAltX/>
        </Button>
       </Item>
    );
};

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    number: PropTypes.string,
    onDeleteContact: PropTypes.func.isRequired,
}

export default ContactItem;