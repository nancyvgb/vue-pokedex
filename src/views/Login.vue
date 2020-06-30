<template>
  <div class="home">
    <img alt="pokemon logo" src="../assets/pokemon-login.png" />
    <!-- <WelcomeContainer/> -->
    <h1>Login</h1>
    <form @submit.prevent="register">
      <label>Email</label>
      <input v-model="email" type="text" />
      <label>Pasword</label>
      <input v-model="password" type="password" />
      <div class="button-container">
        <button type="submit" name="button">Login</button>
        <router-link class="button" to="/register">Register</router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    register() {
      this.$store
          .dispatch("user/login", {
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
