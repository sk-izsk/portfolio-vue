import axios from 'axios';

const sendEmailUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000/email'
    : 'https://izsk-portfolio-backend.herokuapp.com/email';

const informationsUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000/informations'
    : 'https://izsk-portfolio-backend.herokuapp.com/informations';

const getInformations = async () => {
  const response = await axios(informationsUrl);

  return response;
};

const sendEmail = async (data) => {
  const response = await axios({
    method: 'POST',
    url: sendEmailUrl,
    data,
  });

  return response;
};

export { getInformations, sendEmail };
