<template>
    <div>
        <div>{{myCount}}</div>
        <hr />
        <count-button></count-button>
        <hr />
        <count-input></count-input>
    </div>
</template>

<script>
    import CountButton from './components/button.vue'
    import CountInput from './components/input.vue'
    export default{
        name: 'app',
        components:{
            CountButton, CountInput
        },
        computed:{
            myCount(){
                const {count} = this.$store.state
                return `Total de count é ${count}`
            }
        }
    }
</script>
