<template>
    <div class="navigation-background">
        <ul>
            <li @click="clickRoute('#/');">Route 1</li>
            <li @click="clickRoute('#/Route2');">Route 2</li>
            <li @click="clickRoute('#/Route3');">Route 3</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'AppNavigation',
        data () {
            return {
                model: window.vuef
            }
        },
        mounted: function () {
            console.log('AppNavigation mounted')
        },
        methods: {
            clickRoute: function (url) {
                window.location.href = url
            }
        }
    }
</script>