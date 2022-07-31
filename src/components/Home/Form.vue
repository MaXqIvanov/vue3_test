<template>
    <div class="form">
      <div class="form_wrapper">
        <form>
            <label for="name_prood">
                <div class="label_required">
                Наименование товара <span></span></div>
                <input id="name_prood" type="text" v-model="name"
                placeholder="Введите наименование товара"
                :class="v$.$errors[0]?.$property === 'name' && 'input_danger'"/>
                <div class="errors_message" v-if="v$?.$errors[0]?.$validator === 'required'
                && v$.$errors[0]?.$property === 'name'">Поле является обязательным</div>
            </label>
            <label for="description_prood">
                <div class="label">Описание товара</div>
                <textarea id="description_prood" type="text" multiple v-model="description"
                placeholder="Введите описание товара"/>
            </label>
            <label for="img_prood">
                <div class="label_required">Ссылка на изображение товара <span></span></div>
                <input id="img_prood" type="text" placeholder="Введите ссылку" v-model="img_link"
                :class="v$.$errors[0]?.$property === 'img_link' && 'input_danger'"/>
                <div class="errors_message" v-if="v$?.$errors[0]?.$validator === 'required'
                && v$.$errors[0]?.$property === 'img_link'">Поле является обязательным</div>
            </label>
            <label for="price_prood">
                <div class="label_required">Цена товара <span></span></div>
                <input id="price_prood" type="number" min="1"
                placeholder="Введите цену" v-model="price"
                :class="v$.$errors[0]?.$property === 'price' && 'input_danger'"/>
                <div class="errors_message" v-if="v$?.$errors[0]?.$validator === 'required'
                && v$.$errors[0]?.$property === 'price'">Поле является обязательным</div>
                <div class="errors_message" v-else-if="v$?.$errors[0]?.$validator === 'numeric'
                && v$.$errors[0]?.$property === 'price'">Поле не может быть отрицательным</div>
            </label>
            <label for="add_btn">
                <input @click="validateInputs"
                id="add_btn" class="add_btn"
                type="button" value="Добавить товар"
                :class="!v$.$error && price && img_link && name && 'active_btn'"/>
            </label>
        </form>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
import useValidate from '@vuelidate/core';
import { required, numeric } from '@vuelidate/validators';

export default defineComponent({
  name: 'FormComponent',
  components: {
  },
  data() {
    return {
      v$: useValidate(),
      name: '' as string,
      description: '' as string,
      img_link: '' as string,
      price: '' as string,
    };
  },
  validations() {
    return {
      name: { required },
      img_link: { required },
      price: { required, numeric },
    };
  },
  methods: {
    ...mapMutations({
    }),
    ...mapActions({
      addProods: 'proods/addProods',
    }),
    validateInputs() {
      this.v$.$validate();
      if (this.v$.$error) {
        console.log(this.v$.$errors);
      } else {
        this.addProods({
          name: this.name,
          description: this.description,
          img_link: this.img_link,
          price: this.price,
        });
      }
    },
  },
  computed: mapState({
  }),
});
</script>
<style lang="scss" scoped>
.input_danger{
    background: #FFFEFB;
    border: 1px solid #FF8484 !important;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    box-sizing: border-box;
    width: 284px;
    height: 36px;
}
.errors_message{
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 8px;
    line-height: 10px;
    letter-spacing: -0.02em;
    color: #FF8484;
}
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
label{
    position: relative;
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
<style>
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}
input[type="number"]:hover,
input[type="number"]:focus {
  -moz-appearance: number-input;
}
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
