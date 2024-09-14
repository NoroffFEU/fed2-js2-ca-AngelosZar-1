import { API_AUTH_LOGIN } from '../constants';
export async function login({ email, password }) {
  try {
    const response = fetch(API_AUTH_LOGIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    if (!response) {
      throw new Error('error.message');
    } else {
      console.log('Successful log in');
    }
    const data = (await response).json();
    return data;
  } catch (error) {
    console.error('Login error:', error.message);
    throw error;
  }
}

const data = {
  name: 'angZar',
  email: 'first.last@stud.noroff.no',
  password: 'UzI1NiIsInR5cCI',
};
const data1 = {
  email: 'angzar49347@stud.noroff.no',
  password: '/.,offThe12qw3p09/',
};

login(data1);
