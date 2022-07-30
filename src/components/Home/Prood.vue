<template>
    <div class="prood">
      <div class="prood_wrapper">
        <div class="cart"><div class="cart_wrapper"></div></div>
        <div class="cart"><div class="cart_wrapper"></div></div>
        <div class="cart"><div class="cart_wrapper"></div></div>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';

export default defineComponent({
  name: 'ProodComponent',
  components: {
  },
  methods: {
    ...mapMutations({
    }),
    ...mapActions({
    }),
  },
  computed: mapState({
  }),
});
</script>
<style lang="scss" scoped>
.cart{
    width: 100%;
    height: 423px;
    display: flex;
    justify-content: center;
}
.cart_wrapper{
    background: #FFFEFB;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    width: 332px;
    height: 423px;
}
.prood{
    width: 100%;
    height: 100%;

    @media(max-width: 730px){
        margin-top: 20px;
    }
}
.prood_wrapper{
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: auto auto auto;
    column-gap: 16px;
    row-gap: 16px;
    @media(max-width: 1300px){
        grid-template-columns: auto auto;
    }
    @media(max-width: 1080px){
        grid-template-columns: auto;
    }
}
</style>
