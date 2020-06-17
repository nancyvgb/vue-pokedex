<template>
  <div class="login-container">
    <h1>Iniciar Sesion</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <label>Nombre de usuario</label>
        <input type="text" />
      </div>
      <div class="form-group">
        <label>Contraseña</label>
        <input type="password" />
      </div>
     <input type="submit" value="Iniciar sesión" class="button -fill-gradient">
    </form>
  </div>
</template>

<script>
export default {
    methods: {
      login() {
           this.$router.push({
                name: 'pokedex',
            })
      }  
    }
};
</script>

<style lang="scss" scoped>
.login-container {
  width: 50%;
  background: #F2F2F2;
  padding: 20px;
  margin: 10px;
  form {
      position: relative;
      display: flex;
      flex-direction: column;
    .form-group {
      margin-bottom: 10px;
       display: flex;
      flex-direction: row;
       input,
       textarea {
      width: 50%;
      box-sizing: border-box;
      border: solid 1px rgba(0, 0, 0, 0.4);
      background-color: #313131;
      color: #fff;
      outline: none;
      padding: 0.5em 0;
    }
    }
    .form-group label {
      flex: none;
      width: 50%;
      text-align: left;
    }
    label {
      color: rgba(0, 0, 0, 0.5);
      font-weight: 700;
    }
    input.button.-fill-gradient {
     background-color: #4dad5b;
     color: #fff;
     cursor: pointer;
     border-radius: 5px;
     vertical-align: middle;
     padding: 0.75em 1.25em 0.675em;
     align-self: flex-end;
    }
  }
}
</style>