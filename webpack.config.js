const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');
const MiniCsssExtractPlugin = require('mini-css-extract-plugin');

// npm install touch-cli -g (https://stackoverflow.com/questions/36126269/touch-is-not-recognized-as-an-internal-or-external-command-operable-program-o)
module.exports = {
    entry:'./scr/main.js'
}