<template>
  <div class="home">
    <img alt="pokemon logo" src="../assets/pokemon-login.png" />
    <WelcomeContainer/>
  </div>
</template>

<script>
// @ is an alias to /src
import WelcomeContainer from "@/components/WelcomeContainer.vue";

export default {
  name: "Home",
  components: {
    WelcomeContainer
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
