<template>
  <div class="home">
    <Form />
    <Prood />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Form from '@/components/Home/Form.vue';
import Prood from '../components/Home/Prood.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    Form,
    Prood,
  },
});
</script>
<style lang="scss" scoped>
  .home{
    height: fit-content;
    min-height: 80vh;
    display: grid;
    grid-template-columns: 332px auto;
    column-gap: 16px;
    margin-bottom: 20px;
    @media(max-width: 730px){
      row-gap: 10px;
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }
</style>
