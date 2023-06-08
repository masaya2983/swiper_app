const { environment } = require('@rails/webpacker')

const webpack = require('webpack')
enviroment.plugins.prepend(
  'provide',
  new webpack.Provideplugin({
    $: 'jquery/src/jquery',
    jquery: 'jquery/src/jquery',
    Swiper: 'swiper/swiper-bundle' 
  })
  )
  
  
module.exports = environment
