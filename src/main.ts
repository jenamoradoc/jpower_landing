import { createApp } from 'vue';

import { OhVueIcon, addIcons } from 'oh-vue-icons';
import {
  BiTelephoneFill,
  CoTwitter,
  FaFacebookF,
  IoLocationSharp,
  IoMail,
  RiInstagramFill,
} from 'oh-vue-icons/icons';

addIcons(
  BiTelephoneFill,
  CoTwitter,
  FaFacebookF,
  IoLocationSharp,
  IoMail,
  RiInstagramFill
);

import App from './App.vue';

import './style.css';

const app = createApp(App);

app.component('v-icon', OhVueIcon);
app.mount('#app');
