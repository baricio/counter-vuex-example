<template>
    <div>
        <button :disabled="getShowWaitMessage" @click="addCount">+</button>
        <button :disabled="getShowWaitMessage" @click="removeCount">-</button>
        <span v-show="getShowWaitMessage">Aguarde...</span>
    </div>
</template>

<script>

import {mapActions, mapGetters } from 'vuex'

export default{
    computed:{
        ...mapGetters(['getShowWaitMessage'])
    },
    methods:{
        addCount(){
            this.showWaitMessage();
            this.plus(()=>this.hideWaitMessage());
        },
        removeCount(){
            this.showWaitMessage();
            this.plus(()=>this.hideWaitMessage());
        },
         ...mapActions(['plus','less','showWaitMessage', 'hideWaitMessage'])
    },
}
</script>
