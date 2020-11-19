import * as Yup from 'yup';

const schema = Yup.object().shape({
    title: Yup
        .string('Title should be String')
        .required('Title of your meme is empty')
        .min(3, 'Title minimum length is 3 characters long.')
        .max(100, 'Title maximum length is 100 characters long.'),

    imageUrl: Yup
        .string('ImageUrl should be String')
        .required('There is no ImageUrl'),
});

export default schema;