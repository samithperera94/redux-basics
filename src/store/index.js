// import { createStore,combineReducers } from "redux";
import { createSlice,configureStore } from "@reduxjs/toolkit";

const initialState = {counter:0,isShown:false};

const counterSlice = createSlice({
    name:'counter',
    initialState,
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


const store = configureStore({
    // reducer:{counter: counterSlice.reducer,} //when having multiple reducers
    reducer:counterSlice.reducer
});

export const counterActions = counterSlice.actions;

export default store;


// const counterReducer = (state=initialState,action)=> {
//     console.warn(state,"1111",action.type)
//     switch(action.type){
//         case 'increment':
//             console.log("increment",action.type)
//             return{
//                 counter:state.counter + 1,
//                 isShown: state.isShown
//             };
            
//         case 'decrement': 
//             console.log("decrement",action.type)
//             return{
//                 counter : state.counter - 1,
//                 isShown: state.isShown
//             } ;  
//         case 'increase':
//             return {
//                 counter : state.counter + action.payload,
//                 isShown: state.isShown
//             }    
//         case 'toggleCounter':
//             return {
//                 counter: state.counter,
//                 isShown : !state.isShown
//             }
//         default:
//             console.log("default",action.type)
//             return state ;   
//     }
     

// }

// const store = createStore(counterReducer);

// const store = createStore(counterSlice.reducer); //with multiple slicers this will be an issue because we can only pass one slice to createStore function



