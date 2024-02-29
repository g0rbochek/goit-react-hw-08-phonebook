import { useDispatch, useSelector } from 'react-redux';

import { object, string, number } from 'yup';

import { selectContactItems } from 'redux/selectors';
import { addContact } from 'redux/operationsContacts';
import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';

const schema = object({
  name: string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required!'),
  number: number('must be a number').min(2, 'Too Short!').required('Required!'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactItems);

  const handleSubmit = (values, { resetForm }) => {
    resetForm();
    if (
      contacts.find(
        ({ name: contactName }) =>
          contactName.toLowerCase() === values.name.toLowerCase()
      )
    ) {
      alert(`${values.name} is already in contacts`);
      return;
    }
    dispatch(addContact(values));

    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    onSubmit: handleSubmit,
    validationSchema: schema,
  });

  return (
    <form className="form" autoComplete="off" onSubmit={formik.handleSubmit}>
      <div className="inputWrap">
        <TextField
          type="text"
          id="name"
          name="name"
          placeholder="Enter name ..."
          label="Name"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="FormikErr">{formik.errors.name}</div>
        ) : null}
      </div>
      <div className="inputWrap">
        <TextField
          type="tel"
          name="number"
          label="Phone"
          id="number"
          placeholder="tel: xxx-xx-xx"
          onChange={formik.handleChange}
          value={formik.values.number}
        />
        {formik.touched.number && formik.errors.number ? (
          <div className="FormikErr">{formik.errors.number}</div>
        ) : null}
      </div>
      <Button variant="contained" type="submit">
        Add contact
      </Button>
    </form>
  );
};
