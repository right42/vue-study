<template>
    <div>  
        {{count}}
        <button @click="increment">increment</button>
        <button @click="increment_with_action">increment_with_action</button>
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
        },
        async increment_with_action(){
            let result = await this.$store.dispatch('increment', {amount : 10});
            console.log(result);
        }
        
    },
}
</script>

<style>

</style>