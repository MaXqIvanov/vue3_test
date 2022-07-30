<template>
    <div class="form">
      <div class="form_wrapper">
        <form>
            <label for="name_prood">
                <div class="label_required">Наименование товара <span></span></div>
                <input id="name_prood" type="text"
                placeholder="Введите наименование товара"/>
            </label>
            <label for="description_prood">
                <div class="label">Описание товара</div>
                <textarea id="description_prood" type="text" multiple
                placeholder="Введите описание товара"/>
            </label>
            <label for="img_prood">
                <div class="label_required">Ссылка на изображение товара <span></span></div>
                <input id="img_prood" type="text" placeholder="Введите ссылку"/>
            </label>
            <label for="price_prood">
                <div class="label_required">Цена товара <span></span></div>
                <input id="price_prood" type="text" placeholder="Введите цену"/>
            </label>
            <label for="add_btn">
                <input id="add_btn" class="add_btn"
                type="button" value="Добавить товар"/>
            </label>
        </form>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
import useValidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';

export default defineComponent({
  name: 'FormComponent',
  components: {
  },
  data() {
    return {
      v$: useValidate(),
      name: '',
      description: '',
      img_link: '',
      price: '',
    };
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
.active_btn{
    background: #7BAE73 !important;
    color: #fff !important;
}
.add_btn{
    margin-top: 24px;
    width: 284px;
    height: 36px;
    background: #EEEEEE;
    border-radius: 10px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #B4B4B4;
    transition: all linear 0.3s;
    cursor: pointer;
    &:focus{
        outline: none;
    }
}
#description_prood{
    height: 88px;
    margin-top: 4px;
    width: 250px;
    background: #FFFEFB;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    border: 0px;
    padding: 10px 16px;
    outline: 0px;
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #3F3F3F;
    resize: none;
    transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.15s;
    &:focus{
        outline: 2px solid rgb(1, 247, 247);
    }
    &::placeholder{
       font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        color: #B4B4B4;
    }
}
.label{
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 13px;
    letter-spacing: -0.02em;
    color: #49485E;
    margin-top: 16px;
}
.label_required{
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 13px;
    letter-spacing: -0.02em;
    color: #49485E;
    position: relative;
    width: fit-content;
    margin-top: 16px;
    span{
        position: absolute;
        top: 0px;
        right: -5px;
        width: 4px;
        height: 4px;
        background-image: url('../../assets/home/Rectangle\ 32.svg');
        background-repeat: no-repeat;
        background-size: contain;
    }
}
input{
    margin-top: 4px;
    width: 250px;
    height: 34px;
    background: #FFFEFB;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    border: 0px;
    padding-left: 16px;
    padding-right: 16px;
    outline: 0px;
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #3F3F3F;
    transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.15s;
    &:focus{
        outline: 2px solid rgb(1, 247, 247);
    }
    &::placeholder{
       font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        color: #B4B4B4;
    }
}
.form_wrapper{
    height: 98%;
    width: 85%;
}
 .form{
    background: #FFFEFB;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    width: 332px;
    height: 440px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
