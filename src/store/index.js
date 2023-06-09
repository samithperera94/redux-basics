// import { createStore,combineReducers } from "redux";
import { createSlice,configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth"


const store = configureStore({
    reducer:{
        counter: counterReducer,
        auth: authReducer,
    } //when having multiple reducers
    // reducer:counterSlice.reducer
});


// export const authActions = authSlice.actions;
// export const counterActions = counterSlice.actions;

export default store;


// const counterReducer = (state=initialCounterState,action)=> {
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



