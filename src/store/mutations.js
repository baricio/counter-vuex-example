export default{
    'PLUS' (state){
        state.count++;
    },
    'LESS' (state){
        state.count--;
    },
    'SUM' (state,value){
        let intValue = parseInt(value,10);
        if(isNaN(intValue)){
            throw "impossível converter para número inteiro";
        }else{
            state.count = state.count + parseInt(value,10);
        }
    },
    'SHOW_WAIT_MESSAGE' (state){
        state.showWaitMessage = true;
    },
    'HIDE_WAIT_MESSAGE' (state){
        state.showWaitMessage = false;
    }
}
