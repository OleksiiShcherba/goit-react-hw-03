import Contact from "./Contact/Contact";
import propsTypes from "prop-types";

const ContactList = ({ contacts, onDelete = () => {} }) => {
  return (
    <ul>
      {contacts.map((contact) => {
        return (
          <Contact
            key={contact.id}
            name={contact.name}
            phone={contact.number}
            onDelete={onDelete}
          />
        );
      })}
    </ul>
  );
};

ContactList.propsTypes = {
  contacts: propsTypes.isRequired.arrayOf(
    propsTypes.shape({
      id: propsTypes.string.isRequired,
      name: propsTypes.string.isRequired,
      number: propsTypes.string.isRequired,
    })
  ),
  onDelete: propsTypes.func,
};

export default ContactList;
