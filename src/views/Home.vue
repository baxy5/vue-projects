<template>
  <div>
    <img src="../assets/logo.png" alt="" id="enlarge-image" />
    <br />
    <input
      :class="{ clickedInput: isClicked, inputErrorStyle: isError }"
      :style="inputStyle"
      @blur="changeOnClick"
      v-model="inputData"
      type="text"
      name=""
      id=""
      placeholder="Irj ide valamit..."
    />
    <p :style="donePara" v-show="isDone">Nice work!</p>
    <p :style="errorPara" v-show="isError">Error</p>
  </div>

  <div class="container">
    <form>
      <input type="text" placeholder="Name" v-model="name" />
      <br />
      <input type="text" placeholder="Email" v-model="email" />
      <p class="email-validation-error" v-show="validation">
        Please give me a real email address you dumb bitch!
      </p>
      <br />
      <input type="password" placeholder="Password" v-model="password" />
      <br />
      <input type="submit" value="Sign up" @click="fetchData" />
    </form>
  </div>

  <div class="data-container">
    <p>Name: {{ this.name }}</p>
    <p>Email: {{ this.email }}</p>
    <p>Password: {{ this.password }}</p>
  </div>

  <div class="blank"></div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      isClicked: false,
      isError: false,
      isDone: false,
      validation: false,
      inputData: "",
      inputStyle: {
        "background-color": "white",
        border: "none",
        outline: "none",
        "font-weight": "bold",
        "font-size": "21px",
      },
      donePara: {
        color: "green",
      },
      errorPara: {
        color: "red",
        "font-weight": "bold",
      },

      name: "",
      email: "",
      password: "",
    };
  },
  mounted() {},
  methods: {
    enlarge() {},
    changeOnClick() {
      let self = this;

      console.log(self.inputData);
      if (self.inputData == "") {
        this.isError = true;
      } else {
        this.isClicked = true;
        this.isDone = true;
        this.isError = false;
      }
    },
    fetchData() {
      if (!this.email.includes("@")) {
        this.validation = true;
      } else {
        // sending data to the database
      }
    },
  },
};
</script>

<style scoped>
.blank {
  height: 100vh;
}
.enlarge-image {
  cursor: pointer;
}
.clickedInput {
  background-color: black !important;
  color: white;
}
.inputErrorStyle {
  background-color: red;
}

.container {
  border: 2px solid green;
}
form {
  padding: 5px;
}
input {
  margin: 10px;
}
.email-validation-error {
  font-size: 0.75em;
  color: red;
  font-weight: bold;
}
</style>
