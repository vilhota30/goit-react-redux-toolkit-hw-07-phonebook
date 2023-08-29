import ContactItem from "components/ContactItem/ContactItem";
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from "react";
import { fetchDataContacts } from "redux/Operations/operations";

import { selectDataFilteredContacts } from "redux/Selectors/selectors";

 const ContactList = () => {
    
  const dispatch = useDispatch();

   useEffect(() => {
    dispatch(fetchDataContacts());
   }, [dispatch]);

   const contacts = useSelector(selectDataFilteredContacts);
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