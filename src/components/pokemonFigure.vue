<template>
  <div>
    <div class="pokemon-container">
      <div class="pokemon-img-container">
        <img :src="pokemonInfo.sprites.front_shiny" />
      </div>
      <div class="pokemon-info">
        <p class="id">{{pokemonInfo.id}}</p>
        <p class="name">{{pokemonInfo.name}}</p>
        <label v-for="type in pokemonInfo.types" :key="type.name">
          <span :class="type.type.name">
            {{type.type.name + " "}}
          </span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pokemonInfo: Object
  }
};
</script>

<style lang="scss" scoped>
.pokemon-container {
  width: 205px;
  cursor: pointer;
  &:hover {
    opacity: 1;
    transform: translateY(-3px);
  }
  .pokemon-img-container {
    background: #f2f2f2;
    border-radius: 10px;
  }
  .pokemon-info {
    background: #fff;
    .id {
      color: #919191;
      font-size: 80%;
      padding-top: 2px;
    }
    .name {
      color: #313131;
      text-transform: none;
      font-size: 145%;
      margin-bottom: 5px;
    }
    label {
      span {
        font-family: "Flexo-Medium", arial, sans-serif;
      border-radius: 3px;
      line-height: 18px;
      max-width: 110px;
      margin: 0 1.5625% 0 0;
      width: 38.4375%;
      font-size: 11px;
      text-align: center;
      padding: 2px;
      &.poison {
        background-color: #b97fc9;
        color: #fff;
      }
      &.grass {
        background-color: #9bcc50;
      }
      &.fire {
        background-color: #fd7d24;
      }
      &.water {
        background-color: #4592c4;
        color: #fff;
      }
      &.flying {
        background-color: #4592c4;
      }
      &.bug {
        background-color: #729f3f;
      }

      }
    }
  }
}
</style>