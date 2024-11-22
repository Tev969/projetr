import { createSlice} from '@reduxjs/toolkit'

const shopingCartSlice = createSlice({
name: 'shoping-cart',
initialState:{
    items: [],
    isVisible: false,
},
    reducers: {
        toggleCart:(state) => {
            state.isVisible = !state.isVisible
        },
        addItemToCart:(state , action ) => {
           const  newProduct = action.payload

           const existingItem = state.items.find((item) => item.id === newProduct.id)

           if (!existingItem) {
            state.items.push({
                id: newProduct.id,
                title: newProduct.title,
                price: newProduct.price,
                image: newProduct.image,
                quantity: 1,
            });
            }
            else {
                existingItem.quantity ++;
           }
          
        console.log(action.payload);
    },
    removeItemCart:(state , action) => {
        state.items = state.items.filter((item) => item.id != action.payload)
    },
    incrementQuantity:(state,action) => {
        const productIndex = state.items.findIndex((item) => item.id === action.payload)
        state.items[productIndex].quantity ++
    },
    decrementQuantity:(state,action) => {
        const productIndex = state.items.findIndex((item) => item.id === action.payload)
        state.items[productIndex].quantity --
    }
      }
})
export const {addItemToCart , toggleCart , removeItemCart , incrementQuantity , decrementQuantity} = shopingCartSlice.actions
export default shopingCartSlice.reducer