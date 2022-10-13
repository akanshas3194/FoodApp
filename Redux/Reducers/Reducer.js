const initialState={
    Products:[],
    CartItems:[]
}

const Reducer=(state=initialState, action)=>{
    switch(action.type){

        case 'GetProducts':
            return{
              ...state, Products:action.payload
            };

        case 'AddtoCart':

           if(state.Products.filter(item=>item.id===action.payload.id))
            return{
                ...state, CartItems:[...state.CartItems,{...action.payload, qty:1 }]
             
            }
         default:
            return state
             
    }
}

export default Reducer;