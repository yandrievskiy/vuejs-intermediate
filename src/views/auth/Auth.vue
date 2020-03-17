<template>
  <div class="auth">
    <form :action="action" method="post" @submit="handleSubmit">
      <div class="form__row">
        <label>Email: <input type="email" name="email"></label>
      </div>
      <div class="form__row">
        <label>Password: <input type="password" name="password"></label>
      </div>
      <div class="form__row">
        <label>Male: <input type="radio" value="male" name="gender"></label>
        <label>Female:<input type="radio" value="female" name="gender"></label>
      </div>
      <div class="form__row">
        <label>I agree to the terms and conditions: <input type="checkbox" name="agree"></label>
      </div>
      <div class="form__row">
        <button>Submit</button>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: 'Auth',
  methods: {
    handleSubmit(event) {
      console.log(event);
      event.preventDefault();
    },
  },
  computed: {
    action() {
      return '';
    },
  },
};
</script>

<style lang="scss">
.auth {
  padding: 15px;
}
.form__row {
  input {
    display: block;
  }
}
</style>
