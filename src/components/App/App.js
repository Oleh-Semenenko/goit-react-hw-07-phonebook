import { ContactForm } from 'components/ContactForm/ContactForm';
import {ContactList} from 'components/ContactList/ContactList';
import {Filter} from 'components/Filter/Filter';
import { Container, Title, SecondaryTitle } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <SecondaryTitle>Contacts</SecondaryTitle>
      <Filter />
      <ContactList />
    </Container>
  );
}

