requirejs.config({
    baseUrl: '/public',
    map: {
        '*': {
            'css': 'webjars!css'
        }
    }
});

require(['css!stylesheets/main.css'], function() {
    console.log("loaded main.css")
});