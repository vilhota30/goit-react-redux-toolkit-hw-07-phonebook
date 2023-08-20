import ContactItem from "components/ContactItem/ContactItem";
import {useSelector} from 'react-redux';
import { filteredContactsSelect } from "redux/Selectors/selectors";

 const ContactList = () => {
    
  const contacts = useSelector(filteredContactsSelect);
    return (
        <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          id={id}
        />
      ))}
    </ul>
    );
};

export default ContactList;