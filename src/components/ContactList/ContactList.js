import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { Contact } from 'components/Contact/Contact';
import { Contacts } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <Contacts>
      {contacts.map(({ id, name, phone }) => {
        return <Contact key={id} id={id} name={name} phone={phone} />;
      })}
    </Contacts>
  );
};

