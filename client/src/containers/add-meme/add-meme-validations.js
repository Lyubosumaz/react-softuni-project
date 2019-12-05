import * as Yup from 'yup';

const schema = Yup.object().shape({
    title: Yup
        .string('Title should be String')
        .required('Name your meme'),

    imageUrl: Yup
        .string('ImageUrl should be String')
        .required('There is no image'),
});

export default schema;