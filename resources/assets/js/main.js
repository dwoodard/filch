import Vue from 'Vue';
import Filch from './components/Filch.vue';


// var app = require('./app'); is now hard coded into Vue({})

new Vue({
    el: '#app',
    data: { message: "this is a message"},
    components: {Filch}
});