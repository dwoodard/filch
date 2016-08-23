var elixir = require("laravel-elixir");

require('laravel-elixir-vueify');

elixir(function (mix) {
    mix.browserify("main.js", 'public/js/test.js');
    mix.browserify("main.js", 'src/filch/filch.js');
});
