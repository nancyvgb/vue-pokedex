<template>
    <div>
    <div class="pokemon-list">
        <pokemonFigure v-for="pokemon in pokeList.pokeList" :key="pokemon.id" :pokemonInfo="pokemon.data"></pokemonFigure>
    </div>
      <template v-if="page !=1">
         <router-link :to="{name: 'pokedex-list', query: {page: page - 1}}" rel="prev">Prev Page</router-link> |
      </template>
     <template>
       <router-link :to="{name: 'pokedex-list', query: {page: page + 1}}" rel="next">Next Page</router-link>
      </template>
    </div>
      
</template>

<script>
 import pokemonFigure from '@/components/pokemonFigure.vue';
 import {mapState} from 'vuex'
    export default {
    components: {
       pokemonFigure
    },
    created() {
        this.$store.dispatch('pokeList/fetchPokemonList', 
        { perPage: 10,
          page: this.page
        })
    },
    computed: {
    page() {
      return parseInt(this.$route.query.page) || 1
    },
     /* hasNextPage() {
       console.log('this.pokeList.pokemonsTotal', this.pokeList.pokemonsTotal)
      return this.pokeList.pokemonsTotal < this.page * 10
    },  */
      ...mapState(['pokeList'])
    }
    }
</script>

<style lang="scss" scoped>
 .pokemon-list {
     background: #ffff;
     display: grid;
     width: fit-content;
     margin: auto;
     grid-template-columns: 200px 200px 200px 200px;
      column-gap: 10px;
      row-gap: 1em;
      

 }

</style>