import { API_AUTH_LOGIN } from '../constants';

const getUserInput = () => {
  const userInputEmail = document.querySelector('#email').value;
  const userInputPassword = document.querySelector('#password').value;
  console.log('userInputEmail:', userInputEmail);
  console.log('userInputPassword :', userInputPassword);
  return { email: userInputEmail, password: userInputPassword };
};

export async function login({ email, password }, apiUrl) {
  try {
    const response = fetch(apiUrl, {
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

// const loginForm = document.querySelector('#login-form');

// loginForm.addEventListener('submit', async event => {
//   event.preventDefault();
//   const userInput = getUserInput();
//   await login(userInput, API_AUTH_LOGIN);
//   window.location.href = '/profile/index.html';
// });

const loginForm = document.querySelector('#login-form');
//
console.log(loginForm);
//
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');
  if (loginForm) {
    loginForm.addEventListener('submit', async event => {
      event.preventDefault();
      const userInput = getUserInput();
      await login(userInput, API_AUTH_LOGIN);
      // refactor this to use router
      // window.location.href = '/profile/index.html';
    });
    console.log(loginForm);
  } else {
    console.log('No login form found');
  }
});
