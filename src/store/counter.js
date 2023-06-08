import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {counter:0,isShown:false};

const counterSlice = createSlice({
    name:'counter',
    initialState:initialCounterState,
    reducers:{
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state,action){
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state){
            state.isShown = !state.isShown;
        }
    }
});

export default counterSlice.reducer;

export const counterActions = counterSlice.actions;
