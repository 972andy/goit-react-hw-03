import style from './ContactForm.module.css';

import { Form, Formik, Field, ErrorMessage } from 'formik';

import * as Yup from "yup";


const numberRegex = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/

const addUserShema = Yup.object().shape({
  name: Yup.string().min(3, 'Name must be at least 2 characters long').max(50, 'Name must be lees then 50 characters long').required('Name is required'),
  number: Yup.string().required('Number is required').matches(numberRegex, 'Invalid phone number, example: 123-456-7890')
});

const INITIAL_VALUES = {
  name: '',
  number: '',
};


const ContactForm = ( {addUserToContacts} ) => {

  const addUser = (values, actions) => {
   
   
    addUserToContacts(values);
    actions.resetForm();
   
  };

  return (
    <Formik
      validationSchema={addUserShema}
      initialValues={INITIAL_VALUES}
      onSubmit={addUser}>
      <Form className={style.from}> 
      <div className={style.fromInputFieldContainer}>
        <label className={style.fromLabel}>
        <span className={style.fromSpan}>Name:</span>
            <Field className={style.fromInput} type='text' name='name' />
            <ErrorMessage name="name" component="span" />
      </label>
       <label className={style.fromLabel}>
        <span className={style.fromSpan}>Number:</span>
            <Field className={style.fromInput} type='text' name='number' />
            <ErrorMessage name="number" component="span" />
      </label>
      </div>
      <button className={style.button} type='submit'>Submit</button>
    </Form>
    </Formik>
  
  )
}

export default ContactForm