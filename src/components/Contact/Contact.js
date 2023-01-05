import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { ContactItem, Text, DeleteBtn } from './Contact.styled';
import PropTypes from 'prop-types';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <ContactItem>
      <Text>{name}:</Text>
      <Text>{number}</Text>
      <DeleteBtn type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </DeleteBtn>
    </ContactItem>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
}
