<template>
    <div>
    <div class="pokemon-list">
        <pokemonFigure v-for="pokemon in pokeList.pokeList" :key="pokemon.id" :pokemonInfo="pokemon.data"></pokemonFigure>
    </div>
    <template>
          <router-link :to="{name: 'pokedex', query: {offset: page - 1}}" rel="prev">Prev Page</router-link> |
    </template>
    <!--  <template v-if="page !=1">
          <router-link :to="{name: 'event-list', query: {page: page - 1}}" rel="prev">Prev Page</router-link> |
    </template> -->
  <!--   <template v-if="hasNextPage">
       <router-link :to="{name: 'event-list', query: {page: page + 1}}" rel="next">Next Page</router-link>
    </template> -->
     <template>
       <router-link :to="{name: 'pokedex', query: {offset: page + 1}}" rel="next">Next Page</router-link>
    </template>
        <!-- <ul>
        <li v-for=" pokemon in  pokeList.pokeList" :key="pokemon.id" >{{pokemon.data.name}}</li>
        </ul> -->
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
      return parseInt(this.$route.query.offset) || 1
    },
   /*  hasNextPage() {
      return this.event.eventsTotal > this.page * 3
    }, */
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
     grid-template-columns: 200px 200px 200px;
      column-gap: 10px;
      row-gap: 1em;
      

 }

</style>