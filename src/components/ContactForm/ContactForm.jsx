import { nanoid } from "nanoid";
import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import propsTypes from "prop-types";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3, "To short").max(30).required("Required"),
  number: Yup.string().min(3, "To short").max(30).required("Required"),
});

const initiatValues = {
  name: "",
  number: "",
};

const ContactForm = ({ addNewContact }) => {
  const nameInputId = useId();
  const numberInputId = useId();

  const handleSubmit = (values, actions) => {
    addNewContact({ id: nanoid(), ...values });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initiatValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <div className={css.nameInput}>
          <label htmlFor={nameInputId}>Name</label>
          <Field type="text" name="name" id={nameInputId} />
          <ErrorMessage
            className={css.errorMessage}
            name="name"
            component="span"
          />
        </div>
        <div className={css.numberInput}>
          <label htmlFor={numberInputId}>Number</label>
          <Field type="text" name="number" id={numberInputId} />
          <ErrorMessage
            className={css.errorMessage}
            name="number"
            component="span"
          />
        </div>
        <button className={css.submitButton} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

ContactForm.propsTypes = {
  addNewContact: propsTypes.func.isRequired,
};

export default ContactForm;
