<template>
    <div class="prood">
      <div v-if="proods_all.length !== 0" class="prood_wrapper">
        <div v-for="prood in proods_all" :key="prood.id" class="cart">
            <div class="cart_wrapper">
              <div :style="{backgroundImage: `url(${prood?.img_link?.includes('http') ?
              prood.img_link : 'https://media.istockphoto.com/vectors/oops-404-error-page-not-found-vector-id904056198?k=6&m=904056198&s=612x612&w=0&h=vm2DYzEvu--hQgRGvsKMacB3yNfqLXwlMAnrxjBzbIA='})`}"
              class="img"></div>
              <div class="block_info">
                <div class="prood_name">{{ prood.name }}</div>
                <div class="prood_description">{{ prood.description ? prood.description :
                'описание отсутствует' }}</div>
                <div class="prood_price">{{ prood.price }} руб.</div>
              </div>
            </div>
        </div>
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
    proods_all: (state:any) => state.proods.proods_all,
  }),
});
</script>
<style lang="scss" scoped>
.prood_price{
  position: absolute;
  bottom: 16px;
  left: 16px;
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  color: #3F3F3F;
}
.prood_description{
  position: absolute;
  left: 16px;
  top: 66px;
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #3F3F3F;
  width: 100%;
  max-width: 295px;
  max-height: 100px;
  height: 100px;
  word-break: break-all;
  overflow-y: scroll;
}
.prood_name{
  position: absolute;
  top: 16px;
  left: 16px;
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  color: #3F3F3F;
  overflow: hidden;
  max-width: 295px;
  max-height: 30px;
}
.block_info{
  position: relative;
}
.img{
  width: 332px;
  height: 200px;
  border-radius: 4px 4px 0px 0px;
  background-repeat: no-repeat;
  background-size: cover;
}
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
    position: relative;
    display: grid;
    grid-auto-rows: 200px auto;
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

*::-webkit-scrollbar {
    width: 6px; /* ширина scrollbar */
  }
*::-webkit-scrollbar-track {
    background: rgb(255, 255, 255); /* цвет дорожки */
    border-radius: 25px;
  }
*::-webkit-scrollbar-thumb {
    background-color: #84d1fd; /* цвет плашки */
    border-radius: 20px; /* закругления плашки */
    border: 3px solid #84d1fd; /* padding вокруг плашки */
  }
</style>
