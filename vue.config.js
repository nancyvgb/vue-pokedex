/* module.exports = {
    publicPath: '/vue-pokedex/'
} */
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/vue-pokedex/'
      : '/'
  }