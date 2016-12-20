<template>
    <div class="header">
        <img src="./src/assets/logo-vuejs.png"/> <span class="header-title">{{title}}</span>
    </div>
</template>

<script>
    export default {
        name: 'AppHeader',
        data () {
            return {
                model: window.vuef,
                title: 'Vue Foundation'
            }
        },
        mounted: function () {
            console.log('AppHeader mounted')
        }
    }
</script>