<template>
  <Form>
    <div v-for="{ as, name, label, type, attrs } in schema.fields" :key="name">
      <label :for="name">{{ label }}</label>
      <Field :as="as" :id="name" :name="name" :type="type" v-bind="attrs" />
      <ErrorMessage :name="name" />
    </div>

    <button>Submit</button>
  </Form>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  props: {
    schema: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
