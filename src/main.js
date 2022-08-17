import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import App from './App.vue';
import './assets/style.css';

library.add(faGithub, faLinkedinIn);

createApp(App).component('FontAwesomeIcon', FontAwesomeIcon).mount('#app');
