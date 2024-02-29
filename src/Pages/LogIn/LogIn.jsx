import { Button, Container, TextField } from '@mui/material';
import { Section } from 'components/Section/Section.styled';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { object, string } from 'yup';

const schema = object({
  email: string().required('Required!'),
  password: string().min(2, 'Too Short!').required('Required!'),
});

const LogIn = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: handleSubmit,
    validationSchema: schema,
  });

  return (
    <main>
      <Section>
        <Container>
          <h1 style={{ marginTop: '40px', textAlign: 'center', color: 'gray' }}>
            Enter your data
          </h1>
          <form
            className="form"
            autoComplete="off"
            onSubmit={formik.handleSubmit}
          >
            <div className="inputWrap">
              <TextField
                type="email"
                id="email"
                name="email"
                placeholder="Enter e-mail ..."
                label="email"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="FormikErr">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="inputWrap">
              <TextField
                type="password"
                id="password"
                name="password"
                placeholder="Enter password ..."
                label="password"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="FormikErr">{formik.errors.password}</div>
              ) : null}
            </div>
            <Button variant="contained" type="submit">
              submit
            </Button>
          </form>
        </Container>
      </Section>
    </main>
  );
};

export default LogIn;
