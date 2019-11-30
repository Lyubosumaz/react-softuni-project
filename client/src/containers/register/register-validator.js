import * as Yup from 'yup';

const schema = Yup.object().shape({
    username: Yup
        .string('Username should be String')
        .required('Username is required')
        .min(3, 'Username should be at lest 3 symbols'),

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
        // .oneOf([Yup.ref('password')], 'Repeated password doesn\'t match the password')
        .required('Repeated password is required')
        .min(5, 'Repeated password should be at least 5 character'),
});

export default schema;