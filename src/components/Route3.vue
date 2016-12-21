<template>
    <div class="row expanded">
        <h1>Can't get enough of these routes?</h1>
        <p>Okay, so you need a third route to be truly sure that this router thing is working. And here it is.</p>
        <div class="row small-up-1 medium-up-2 large-up-3">
            <div class="columns columns-block">
                <h3>Something Witty.</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div class="columns columns-block">
                <h3>Something Funny.</h3>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            </div>
            <div class="columns columns-block">
                <h3>Something Nerdy.</h3>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                    deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                    provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum
                    fuga.</p>
            </div>
        </div>
        <p class="content-callout">And there it is. A basis for a Vue.js Browserify project with the Vue Router ready to route. Foundation 6 SASS is hooked in and ready for use. Hope this gets you up and running quickly. Feel free
            to fork and make it better!</p>
        <hr/>
        <logos></logos>
    </div>
</template>

<script>
    import Logos from './Logos.vue'

    export default {
        name: 'Route3',
        data () {
            return {
                model: window.vuef
            }
        },
        components: {
            Logos
        },
        mounted: function () {
            console.log('Route3 mounted')
        }
    }
</script>