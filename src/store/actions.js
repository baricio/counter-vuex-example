export default{
    plus(context, callback){
        setTimeout(()=>{
            context.commit('PLUS');
            callback();
        },2000);
    },
    less(context){
        setTimeout(()=>{
            context.commit('LESS');
            callback();
        },2000);
    },
    sum(context, value){
        context.commit('SUM', value);
    },
    showWaitMessage(context){
        context.commit('SHOW_WAIT_MESSAGE');
    },
    hideWaitMessage(context){
        context.commit('HIDE_WAIT_MESSAGE');
    }
}
