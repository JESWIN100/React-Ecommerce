import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import * as formik from 'formik';
import * as yup from 'yup';

const SignUp = () => {
    const { Formik } = formik;

    const schema = yup.object().shape({
        fullName: yup.string().required("Please enter your fullname").min(5, "Fullname should have a minimum of 5 characters"),
        email: yup.string().required("Please enter your email").email("Please enter a valid email"),
        password: yup.string().required("Please enter your password").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, "Password should contain a minimum of 8 characters, including at least one uppercase letter, one lowercase letter, and one number"),
        confirmPassword: yup.string().required("Please confirm your password").oneOf([yup.ref('password'), null], "Passwords must match"),
    });

    return (
        <Container>
            <Row>
                <Col>
                    <h2>Sign Up</h2>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col md={6} className='mb-4 shadow p-4'>
                    <Formik
                        validationSchema={schema}
                        onSubmit={(values) => console.log(values)}
                        initialValues={{
                            fullName: '',
                            email: '',
                            password: '',
                            confirmPassword: '',
                        }}
                    >
                        {({ handleSubmit, handleChange, values, touched, errors }) => (
                            <Form noValidate onSubmit={handleSubmit}>
                                <Form.Group controlId="validationFormik01" className='position-relative mb-3'>
                                    <Form.Label>Fullname</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="fullName"
                                        value={values.fullName}
                                        onChange={handleChange}
                                        isInvalid={touched.fullName && !!errors.fullName}
                                    />
                                    <Form.Control.Feedback type='invalid' tooltip>
                                        {errors.fullName}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="validationFormik02" className='position-relative mb-3'>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        isInvalid={touched.email && !!errors.email}
                                    />
                                    <Form.Control.Feedback type='invalid' tooltip>
                                        {errors.email}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="validationFormik03" className='position-relative mb-3'>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        isInvalid={touched.password && !!errors.password}
                                    />
                                    <Form.Control.Feedback type="invalid" tooltip>
                                        {errors.password}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="validationFormik04" className='position-relative mb-3'>
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="confirmPassword"
                                        value={values.confirmPassword}
                                        onChange={handleChange}
                                        isInvalid={touched.confirmPassword && !!errors.confirmPassword}
                                    />
                                    <Form.Control.Feedback type="invalid" tooltip>
                                        {errors.confirmPassword}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Button type="submit">Sign Up</Button>
                            </Form>
                        )}
                    </Formik>
                </Col>
            </Row>
        </Container>
    );
}

export default SignUp;
