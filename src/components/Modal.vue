<template>
  <div class="modal" v-if="isOpen">
    <div class="modal__wrapper">
        <h1>Lorem, ipsum dolor.</h1>
        <button @click="$emit('close')">Close</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Modal',
  data() {
    return {
      isOpen: false,
    };
  },
  props: ['open'],
  methods: {
    toggle(value) {
      this.isOpen = value;
    },
  },
  watch: {
    open(newVal) {
      this.toggle(newVal);
    },
  },
};
</script>

<style lang="scss">
.modal {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, .3);
  display: flex;
  align-items: center;
  justify-content: center;

  &__wrapper {
    width: 500px;
    height: 200px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
}
</style>
