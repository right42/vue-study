<template>
    <div>  
        {{count}}
        <button @click="increment">increment</button>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    computed: {
        count(){
            return this.$store.state.count;
        },
        ...mapGetters([
            'doneTodos'
        ])
    },
    methods: {
        increment(){
            this.$store.commit({
                type : 'increment',
                amount : 10
            });
        },
        getDoneTodos(){
            console.dir(this.$store.getters.doneTodos);
        }
    },
}
</script>

<style>

</style>