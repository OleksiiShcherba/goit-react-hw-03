import propsTypes from "prop-types";
import css from "./Contact.module.css";

const Contact = ({ id, name, phone, onDelete }) => {
  return (
    <li className={css.contactElement}>
      <ul className={css.dataList}>
        <li className={css.name}>{name}</li>
        <li className={css.phone}>{phone}</li>
      </ul>
      <button className={css.deleteAction} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

Contact.propsTypes = {
  name: propsTypes.string.isRequired,
  phone: propsTypes.string.isRequired,
  onDelete: propsTypes.func.isRequired,
};

export default Contact;
