import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { Contact } from 'components/Contact/Contact';
import { Contacts } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  function getVisibleContacts() {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => 
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  const filteredContacts = getVisibleContacts();

  return (
    <Contacts>
      {filteredContacts.map(({ id, name, phone }) => {
        return <Contact key={id} id={id} name={name} phone={phone} />;
      })}
    </Contacts>
  );
};

