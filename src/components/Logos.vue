<template>
    <div class="row small-up-12 medium-up-5">
        <div class="columns column-block"><img src="./src/assets/logo-vuejs.png" alt="Vue.js Logo"/></div>
        <div class="columns column-block"><img src="./src/assets/logo-foundation.png" alt="Zurb Foundation Logo"/></div>
        <div class="columns column-block"><img src="./src/assets/logo-sass.png" alt="SASS Logo"/></div>
        <div class="columns column-block"><img src="./src/assets/logo-nodejs.png" alt="Node.js Logo"/></div>
        <div class="columns column-block"><img src="./src/assets/logo-lodash.png" alt="Lodash Logo"/></div>
    </div>
</template>

<script>
    export default {
        name: 'Logos',
        data () {
            return {
                model: window.vuef
            }
        },
        mounted: function () {
            console.log('Logo component mounted')
        }
    }
</script>