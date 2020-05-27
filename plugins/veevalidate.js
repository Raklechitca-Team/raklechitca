import Vue from 'vue';
import { ValidationProvider, extend } from 'vee-validate';

extend('secret', {
  validate: value => value === 'example',
  message: 'This is not the magic word',
});

Vue.component('ValidationProvider', ValidationProvider);
