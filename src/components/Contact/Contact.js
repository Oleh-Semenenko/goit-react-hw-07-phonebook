import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { ContactItem, Text, DeleteBtn } from './Contact.styled';
import PropTypes from 'prop-types';

export const Contact = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id))

  return (
    <ContactItem>
      <Text>{name}:</Text>
      <Text>{phone}</Text>
      <DeleteBtn type="button" onClick={handleDelete}>
        Delete
      </DeleteBtn>
    </ContactItem>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
}
