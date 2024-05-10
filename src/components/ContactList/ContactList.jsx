import propsTypes from "prop-types";
import css from "./ContactList.module.css";
import Contact from "./Contact/Contact";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map((contact) => {
        return (
          <Contact
            key={contact.id}
            id={contact.id}
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
  contacts: propsTypes.array.isRequired,
  onDelete: propsTypes.func.isRequired,
};

export default ContactList;
