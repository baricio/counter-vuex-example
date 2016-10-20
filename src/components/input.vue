<template>
    <div>
        <input type="text" v-model="total" @keyup.enter="sumValue" >
    </div>
</template>

<script>
    export default{
        data(){
            return{
                total:0
            }
        },
        methods:{
            sumValue(){
                try{
                    this.$store.commit('SUM',this.total);
                }catch(error){
                    alert(error);
                }
            }
        }
    }
</script>
