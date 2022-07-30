<template>
    <div class="form">
      <div class="form_wrapper">
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';

export default defineComponent({
  name: 'FormComponent',
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
.form_wrapper{
    height: 90%;
    width: 80%;
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
