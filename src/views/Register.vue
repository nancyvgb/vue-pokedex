<template>
  <div class="home">
    <img alt="pokemon logo" src="../assets/pokemon-login.png" />
    <h1>Register</h1>
    <form @submit.prevent="register">
      <label for="name">Name:</label>
      <input v-model="name" type="text" name="name" value />
      <label for="email">Email:</label>
      <input v-model="email" type="email" name="email" value />

      <label for="password">Password:</label>
      <input v-model="password" type="password" name="password" value />
      <div class="button-container">
        <button type="submit" name="button">Register</button>
        <router-link class="button" to="/">Login</router-link>
      </div>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
/* import WelcomeContainer from "@/components/WelcomeContainer.vue"; */

export default {
  name: "Home",
  /*  components: {
    WelcomeContainer
  }, */
  data() {
    return {
      name: "",
      email: "",
      password: ""
    };
  },
  methods: {
    register() {
      this.$store
        .dispatch("user/register", {
          name: this.name,
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: "pokedex-list" });
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  img {
    width: 25%;
  }
}
</style>
