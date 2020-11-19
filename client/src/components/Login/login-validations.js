import * as Yup from 'yup';

const schema = Yup.object().shape({
    username: Yup
        .string('Username should be String')
        .required('Username is required'),

    password: Yup
        .string('Password should be String')
        .required('Password is required'),
});

export default schema;