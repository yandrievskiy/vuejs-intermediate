<template>
  <div class="auth">
    <validation-observer ref="form" v-slot="{ handleSubmit }">
      <form action="#" method="post" @submit.prevent="handleSubmit(onSubmit)">
        <div class="form__row">
          <label>Email:
            <validation-provider class="validation" tag="div" v-slot="{ errors }" vid="email">
              <input type="email" name="email" v-model="formData.email">
              <span class="error">{{ errors[0] }}</span>
            </validation-provider>
          </label>
        </div>
        <div class="form__row">
          <label>Password:
            <validation-provider class="validation" tag="div" v-slot="{ errors }" vid="password">
              <input type="password" name="password" v-model="formData.password">
              <span class="error"> {{ errors[0] }} </span>
            </validation-provider>
          </label>
        </div>
        <div class="form__row">
          <validation-provider class="validation" tag="div" v-slot="{ errors }" vid="gender">
            <label>Male:
              <input type="radio" value="male" name="gender" v-model="formData.gender">
            </label>
            <label>Female:
              <input type="radio" value="female" name="gender" v-model="formData.gender">
            </label>
            <span class="error"> {{ errors[0] }} </span>
          </validation-provider>
        </div>
        <div class="form__row">
          <label>I agree to the
            <a href="#" @click.prevent="toggleModal">terms and conditions</a>:
            <validation-provider class="validation" tag="div" v-slot="{ errors }" vid="agree">
              <input type="checkbox" name="agree" v-model="formData.agree">
              <span class="error"> {{ errors[0] }} </span>
            </validation-provider>
          </label>
        </div>
        <div class="form__row">
          <button>Submit</button>
        </div>
      </form>
    </validation-observer>
    <modal :open="isModalOpen" @close="toggleModal"></modal>
  </div>
</template>

<script>

import Modal from '@/components/Modal.vue';

export default {
  name: 'Auth',
  components: {
    Modal,
  },
  data() {
    return {
      isModalOpen: false,
      formData: {
        email: null,
        password: null,
        gender: null,
        agree: null,
      },
    };
  },
  methods: {
    async onSubmit() {
      this.$refs.form.setErrors({
        ...this.$store.state.auth.errors,
      });
      await this.$store.dispatch('auth/signup', this.formData);
      // this.$router.push({ name: 'posts.index' });
    },
    toggleModal() {
      this.isModalOpen = !this.isModalOpen;
    },
  },
};
</script>

<style lang="scss">
.auth {
  padding: 15px;
}
.error {
  font-size: 12px;
  color: red;
  margin-left: 15px;
}
.form__row {
  margin-bottom: 15px;

  .validation {
    display: flex;
    align-items: center;

    label + label {
      margin-left: 20px;
    }
  }

  input {
    display: block;
    margin: 0 0;

  }
}
</style>
