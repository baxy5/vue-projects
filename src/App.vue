<script>
import { Field, Form, ErrorMessage } from "vee-validate";
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
    Field,
    Form,
    ErrorMessage,
  },
  methods: {
    onSubmit(values) {
      console.log(JSON.stringify(values, null, 2));
    },
    validateEmail(value) {
      //if the field is empty
      if (!value) {
        return "This field is required";
      }

      //if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return "This field must be valid email";
      }

      //if all good
      return true;
    },
    validatePassword(value) {
      if (!value) {
        return "This field is required";
      }

      if (!value.includes("!")) {
        return "This field must contain ! character";
      }

      return true;
    },
  },
};
</script>

<template>
  <div id="app">
    <Navbar />
    <Form @submit="onSubmit" class="form">
      <div class="input">
        <Field
          type="email"
          name="email"
          :rules="validateEmail"
          placeholder="Email..."
        />
        <ErrorMessage name="email" class="error-message" />
      </div>
      <div class="input">
        <Field
          type="password"
          name="password"
          :rules="validatePassword"
          placeholder="Password..."
        />
        <ErrorMessage name="password" class="error-message" />
      </div>

      <div class="input">
        <button>Sign up for newsletter</button>
      </div>
    </Form>
  </div>
  <router-view />
</template>

<style>
.form {
  display: block;
  padding: 10px;
}
.form > div {
  padding: 10px;
}
.error-message {
  color: red;
  font-weight: bold;
  padding: 5px;
}
</style>
