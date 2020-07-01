import * as yup from 'yup';

const formSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

export { formSchema };
