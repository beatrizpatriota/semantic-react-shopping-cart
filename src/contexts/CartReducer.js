
const Storage = (cartItems) => {
    localStorage.setItem('cart', JSON.stringify(cartItems.length > 0 ? cartItems: []));
}

export const StorageUser = email => {
    localStorage.setItem('email', JSON.stringify(email !== '' ? email : ''));
}

export const sumItems = cartItems => {
    Storage(cartItems);
    let itemCount = cartItems.reduce((total, product) => total + product.quantity, 0);
    let total = cartItems.reduce((total, product) => total + product.data.price * product.quantity, 0).toFixed(2);
    return { itemCount, total }
}

export const CartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            if (!state.cartItems.find(item => item.data.label === action.payload.data.label)) {
                state.cartItems.push({
                    ...action.payload,
                    quantity: 1
                })
            } 

            return {
                ...state,
                ...sumItems(state.cartItems),
                cartItems: [...state.cartItems]
            }
        case "REMOVE_ITEM":
            return {
                ...state,
                ...sumItems(state.cartItems.filter(item => item.data.label !== action.payload.data.label)),
                cartItems: [...state.cartItems.filter(item => item.data.label !== action.payload.data.label)]
            }
        case "INCREASE":
            state.cartItems[state.cartItems.findIndex(item => item.data.label === action.payload.data.label)].quantity++
            return {
                ...state,
                ...sumItems(state.cartItems),
                cartItems: [...state.cartItems]
            }
        case "DECREASE":
            state.cartItems[state.cartItems.findIndex(item => item.data.label === action.payload.data.label)].quantity--
            return {
                ...state,
                ...sumItems(state.cartItems),
                cartItems: [...state.cartItems]
            }
        case "CHECKOUT":
            return {
                cartItems: [],
                checkout: true,
                ...sumItems([]),
                isLoggedIn: true,
                email: state.email
            }
        case "CLEAR":
                return {
                    cartItems: [],
                    ...sumItems([]),
                }
        case "LOGIN": 
        return {
            ...state,
            isLoggedIn: true,
            ...StorageUser(action.payload)
        }
        default:
            return state
    }
}