/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module '@vuelidate/core'
declare module '@vuelidate/validators'
declare module 'vue-imask'
