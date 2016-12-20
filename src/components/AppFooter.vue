<template>
    <div class="appFooter">
        {{title}}
    </div>
</template>

<script>
    export default {
        name: 'AppFooter',
        data () {
            return {
                model: window.vuef,
                title: 'Application Footer'
            }
        },
        mounted: function () {
            console.log('AppFooter mounted')
        }
    }
</script>