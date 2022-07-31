<template>
    <div class="header">
      <div class="title">Добавление товара</div>
      <div class="group_option">
        <label @click="changeOptionVisible" @keypress="changeOptionVisible"
        for="select" class="label_select">
          <input id="select" class="select" :value="active_select" disabled/>
          <div class="select_arrow"></div>
        </label>
        <div class="options" v-if="option_visible">
          <div @click="changeActiveSelect(elem.title); sortingProod(elem.title)"
            @keypress="changeActiveSelect(elem.title); sortingProod(elem.title)"
            class="option" v-for="elem in sort" :key="elem.id">
            <span >{{ elem.title }}</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';

export default defineComponent({
  name: 'UserCompany',
  data() {
    return {
      sort: [{
        id: 1,
        title: 'По цене min',
      },
      {
        id: 2,
        title: 'По цене max',
      },
      {
        id: 3,
        title: 'По наименованию',
      }] as any[],
      option_visible: false as boolean,
      active_select: 'По умолчанию' as string,
    };
  },
  components: {
  },
  methods: {
    ...mapMutations({
      sortingProod: 'proods/sortingProod',
    }),
    ...mapActions({
    }),
    changeOptionVisible() {
      this.option_visible = !this.option_visible;
    },
    changeActiveSelect(value: string) {
      this.active_select = value;
    },
  },
  computed: mapState({
  }),
});
</script>
<style lang="scss" scoped>
.options{
    position: absolute;
    top: 46px;
    margin-top: 4px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    z-index: 999;
    border-radius: 4px;
    overflow: hidden;
    animation: appearence alternate linear .33s;
    @keyframes appearence {
        0%{
            opacity: 0%;
        }
        100%{
            opacity: 100%;
        }
    }
}
.option{
    background: #FFFEFB;
    width: 121.49px;
    height: 36px;
    border: 0px;
    padding-left: 15px;
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #B4B4B4;
    appearance: none;
    cursor: pointer;
    display: flex;
    align-items: center;

    &:hover{
        background: #f4f3f0;
    }
}
.group_option{
    display: flex;
    flex-direction: column;
    margin-top: -10px;
    @media(max-width: 630px){
        margin-top: 0px;
    }
}
.select{
    background: #FFFEFB;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    width: 121.49px;
    height: 36px;
    border: 0px;
    padding-left: 15px;
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #B4B4B4;
    appearance: none;
    cursor: pointer;
}
.select_arrow{
    position: absolute;
    top: 50%;
    right: 15.5px;
    height: 10px;
    width: 10px;
    background-image: url('../assets/header/Rectangle\ 33.svg');
    background-size: contain;
    background-repeat: no-repeat;
    transform: translate(0, -30%);
    cursor: pointer;
}
.label_select{
    position: relative;
}
.header{
    margin-top: 23px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    @media(max-width: 450px){
      margin-left: 16px;
      margin-right: 16px;
    }
}
.title{
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 35px;
    color: #3F3F3F;
    @media(max-width: 630px){
        font-size: x-large;
    }
    @media(max-width: 450px){
        font-size: large;
    }
}
</style>
