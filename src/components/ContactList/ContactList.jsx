import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import ContactListItem from '../ContactListItem/ContactListItem';

import { ListStyle } from './ContactList.styled';

const ContactList = ({ /* visibleContact, */ onDeleteContact }) => {
  const visibleContact = useSelector(state => state.contacts.items);

  return (
    <ListStyle>
      {visibleContact.map(({ name, id, number }) => {
        return (
          <ContactListItem key={id} data={{ number, name, id }} onDeleteContact={onDeleteContact} />
        );
      })}
    </ListStyle>
  );
};

export default ContactList;

ContactList.propTypes = {
  visibleContact: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
