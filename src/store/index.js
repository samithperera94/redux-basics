import { createStore } from "redux";

const initialState = {counter:0,isShown:false};
const counterReducer = (state=initialState,action)=> {
    console.warn(state,"1111",action.type)
    switch(action.type){
        case 'increment':
            console.log("increment",action.type)
            return{
                counter:state.counter + 1,
                isShown: state.isShown
            };
            
        case 'decrement': 
            console.log("decrement",action.type)
            return{
                counter : state.counter - 1,
                isShown: state.isShown
            } ;  
        case 'increase':
            return {
                counter : state.counter + action.payload,
                isShown: state.isShown
            }    
        case 'toggleCounter':
            return {
                counter: state.counter,
                isShown : !state.isShown
            }
        default:
            console.log("default",action.type)
            return state ;   
    }
     

}

const store = createStore(counterReducer);

export default store;