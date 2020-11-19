import * as Yup from 'yup';

// Yup.addMethod(Yup.string, equalTo(ref: ))

const schema = Yup.object().shape({
    username: Yup
        .string('Username should be String')
        .required('Username is required')
        .min(4, 'Username should be at least 4 characters long'),

    email: Yup
        .string('Email should be String')
        .required('Email is required')
        .email('Please enter your email address'),

    password: Yup
        .string('Password should be String')
        .required('Password is required')
        .min(5, 'Password should be at least 5 character'),

    repeatPassword: Yup
        .string('Repeated password should be String')
        // .oneOf([Yup.ref('password', null)], 'Repeated password doesn\'t match the password')
        .required('Repeated-Password is required')
        .min(5, 'Repeated-Password should be at least 5 character'),
});

export default schema;