<template>
    <div class="signin-container">
     <h1>¡Únete al Club de Entrenadores Pokémon!</h1>
     <p>¡Crea una cuenta del Club de Entrenadores 
         Pokémon hoy mismo! Con ella podrás encargarte 
         de tu perfil en Pokemon.es, 
         jugar al Juego de Cartas Coleccionables Online... 
         ¡y mucho más!</p>
     <button>Registrate</button>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.signin-container{
    width: 50%;
    display: flex;
    flex-direction: column;
    background: #F2F2F2;
    margin: 10px;
    padding: 20px;
 button {
     background-color: #30a7d7;
     color: #fff;
     cursor: pointer;
     border-radius: 5px;
     vertical-align: middle;
     padding: 0.75em 1.25em 0.675em;
     align-self: flex-end;
}
}

</style>