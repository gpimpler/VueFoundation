<template>
    <div>
        <h1>Vue Foundation</h1>
        <p>Vue Foundation is a boilerplate project that I developed for quick creation of some of my favorite front-end
            frameworks working in harmony together. Since I was doing this so often, I wanted a simple project to clone
            and just get started banging it out rather than scaffolding it time after time. This boilerplate is based on
            the Vue.js CLI Browserify project. I'd love for someone to fork this project and setup a Webpack project
            with the same dependencies. I've set it up myself as well, but didn't feel it was the optimal solution. So
            far the Webpack build process leaves much to be desired from my POV. Feels like a lot of magic going on and
            the build process is split all over the place. I have not yet been converted to fandom the way I was with
            the jump from Grunt to Gulp.</p>
        <ul>
            <li><a href="http://vuejs.org/">Vue.js v2.1.6</a></li>
            <li><a href="http://foundation.zurb.com/">Zurb Foundation v6.2.4</a></li>
            <li><a href="https://github.com/vuejs/vue-router/">Vue Router for 2.0+</a></li>
            <li><a href="https://visionmedia.github.io/superagent/">SuperAgent</a></li>
            <li><a href="http://sass-lang.com/">SASS</a></li>
            <li><a href="https://lodash.com/">Lodash</a></li>
        </ul>
        <hr/>
        <logos></logos>
    </div>
</template>

<script>
    import Logos from './Logos.vue'

    export default {
        name: 'Route1',
        data () {
            return {
                model: window.vuef
            }
        },
        components: {
            Logos
        },
        mounted: function () {
            console.log('Route1 mounted')
        }
    }
</script>