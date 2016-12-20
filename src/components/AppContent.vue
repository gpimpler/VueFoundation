<template>
    <div class="row column expanded" style="padding: 3rem 4rem;">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'AppContent',
        data () {
            return {
                model: window.vuef,
                title: 'Application Content'
            }
        },
        components: {},
        mounted: function () {
            console.log('AppContent mounted')
        }
    }
</script>