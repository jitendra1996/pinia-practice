import { defineStore } from "pinia";

export const useCountStore = defineStore({
    id : 'co',
    state:()=>({count:0}),
    actions:{
        increment(){
            this.count++;
        },
        decrement(){
            this.count--;
        }
    },
    getters:{
        evenOrOdd : (state) => {
            if (state.count % 2 === 0) return "Even";
            return "Odd";
        }
    }
});

