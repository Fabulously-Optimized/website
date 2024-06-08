import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    import('floating-vue').then((module) => {
      nuxtApp.vueApp.use(module.default);
    });
  }
});
