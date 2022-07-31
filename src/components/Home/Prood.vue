<template>
    <div class="prood">
      <div v-if="proods_all.length !== 0" class="prood_wrapper">
        <transition-group class="prood_wrapper" name="list" tag="p">
          <div v-for="prood in proods_all" :key="prood.id" class="cart">
              <div class="cart_wrapper">
                <div :style="{backgroundImage: `url(${prood?.img_link?.includes('http') ?
                prood.img_link : 'https://media.istockphoto.com/vectors/oops-404-error-page-not-found-vector-id904056198?k=6&m=904056198&s=612x612&w=0&h=vm2DYzEvu--hQgRGvsKMacB3yNfqLXwlMAnrxjBzbIA='})`}"
                class="img"></div>
                <div class="block_info">
                  <div class="prood_name">{{ prood.name }}</div>
                  <div class="prood_description">{{ prood.description ? prood.description :
                  'описание отсутствует' }}</div>
                  <div class="prood_price">{{ prood.price }} руб.
                  </div>
                </div>
                <div @click="deleteProod(prood.id)" @keypress="deleteProod(prood)"
                class="delete_btn" title="Удалить товар"></div>
              </div>
          </div>
        </transition-group>
      </div>
      <div class="success" v-if="success">
        <span>Успешное добавление </span>
        <div class="btn_success"></div>
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
      deleteProod: 'proods/deleteProod',
    }),
  },
  computed: mapState({
    proods_all: (state:any) => state.proods.proods_all,
    success: (state:any) => state.proods.success,
  }),
});
</script>
<style lang="scss" scoped>
.success{
  position: absolute;
  border-radius: 10px;
  width: 200px;
  height: 50px;
  top: 50px;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: 1s alternate linear success;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn_success{
  background-image: url('../../assets/home/add_prood.svg');
  background-repeat: no-repeat;
  background-size: contain;
  height: 20px;
  width: 20px;
  margin-left: 10px;
}
@keyframes success{
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
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
    animation: addCart linear alternate 1s;
}
@keyframes addCart {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
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
    .delete_btn{
      display: none;
      animation: delete_btn linear alternate 0.66s;
    }
    &:hover{
      .delete_btn{
      display: block;
      width: 32px;
      height: 32px;
      background: #FF8484;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      position: absolute;
      top: -10px;
      right: -10px;
      background-image: url('../../assets/home/delete_btn.svg');
      background-repeat: no-repeat;
      background-size: 16px 13px;
      background-position: 50% 50%;
      cursor: pointer;
}
    }
}
@keyframes delete_btn {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 100%;
  }
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
    @media(min-width: 1800px) {
      grid-template-columns: 48% 48% 48% 48%;
      column-gap: 5.33%;
    }
    @media(max-width: 1380px){
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
<style>
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
