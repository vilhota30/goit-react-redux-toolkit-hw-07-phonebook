import {Toaster} from "react-hot-toast";
import 'react-toastify/dist/ReactToastify.css';
import {useSelector} from "react-redux";
import Loader from "./Loader/Loader";

import { selectError, selectIsLoading } from 'redux/Selectors/selectors';

import {Container} from "./App.styled";
import PhoneBook from './PhoneBook/PhoneBook';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';


  function App() {

    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

     return (
      <>
         <Container>
          <h1>-Phonebook- </h1>
            <PhoneBook />  
          <h2>-Contacts-</h2>
            <Filter />
            {isLoading && !error && <Loader/>}
            <ContactList/>
            <Toaster
               toastOptions={{
               duration: 3000,
              }}
            />
         </Container>
      </>
     );

}

export default App;








































// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
