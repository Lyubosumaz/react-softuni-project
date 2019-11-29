import * as yup from 'yup';

const schema = yup.object({
    username: yup.string('Username should be String')
        .required('Username is required')
        .min(4, 'Username should be at lest 4 symbols'),

    email: yup.string('Email should be String')
        .required('Email is required')
        .min(5, 'Email should be at least 5 character'),

    password: yup.string('Password should be String')
        .required('Password is required')
        .min(5, 'Password should be at least 5 character'),

    repeatPassword: yup.string('Repeated password should be String')
    // .oneOf([yup.ref('password'), null], 'Repeated password doesn\'t match the password')
    // .required('Repeated password is required')
    // .min(5, 'Repeated password should be at least 5 character'),
});

export default schema;