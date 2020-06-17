<template>
    <div class="container-welcome">
        <h1 class="main-page-title">¡TE DAMOS LA BIENVENIDA AL CLUB DE ENTRENADORES POKÉMON!</h1>
        <div class="container-user">
            <Login/>
            <SignIn/>
        </div>
    </div>
</template>

<script>
import Login from './Login.vue';
import SignIn from '@/components/SignIn.vue';
    export default {
      components: {
        Login,
        SignIn 
      }
    }
</script>

<style lang="scss" scoped>
.container-welcome {
     padding-bottom: 100px;
    .main-page-title {
        margin-top: 1em;
        margin-bottom: 1em;
    }
    .container-user {
        display: flex;
        width: calc(100% - 200px);
        margin: auto;

    }
}

</style>