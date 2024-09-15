import './css/style.css';

import router from './js/router';
import { login } from './js/api/auth/login';
await router(window.location.pathname);
console.log('hello world');
