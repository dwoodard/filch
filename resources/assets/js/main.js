import Vue from 'Vue';
import Filch from './components/Filch.vue';


// var app = require('./app');

new Vue({
    el: '#app',
    data: {
        message: "this is a message"
    },
    components: {Filch}
});