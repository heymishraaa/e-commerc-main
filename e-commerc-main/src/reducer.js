export const initialState = {
    cart: [],
    wishlist: [],
};

export const getCartTotal = (cart) =>
    cart?.reduce((amount, item) => item.price + amount, 0)

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.item],
            };

        case 'REMOVE_FROM_CART':
            const index = state.cart.findIndex(
                (cartItem) => cartItem.id === action.id
            );
            let newCart = [...state.cart];

            if (index >= 0) {
                newCart.splice(index, 1);
            } else {
                console.warn(
                    `Can't remove product (id: ${action.id}) as it's not in the cart!`
                );
            }

            return {
                ...state,
                cart: newCart,
            };

        case 'ADD_TO_WISHLIST':
            return {
                ...state,
                wishlist: [...state.wishlist, action.item],
            };

        case 'REMOVE_FROM_WISHLIST':
            const wishlistIndex = state.wishlist.findIndex(
                (wishlistItem) => wishlistItem.id === action.id
            );
            let newWishlist = [...state.wishlist];

            if (wishlistIndex >= 0) {
                newWishlist.splice(wishlistIndex, 1);
            }

            return {
                ...state,
                wishlist: newWishlist,
            };

        case 'MOVE_TO_CART':
            const moveIndex = state.wishlist.findIndex(
                (wishlistItem) => wishlistItem.id === action.id
            );

            if (moveIndex < 0) {
                console.warn(`Can't move product (id: ${action.id}) as it's not in the wishlist!`);
                return state; // Return current state if item is not found
            }

            const movedItem = state.wishlist[moveIndex];
            const updatedWishlist = state.wishlist.filter((_, index) => index !== moveIndex);

            return {
                ...state,
                cart: [...state.cart, movedItem],
                wishlist: updatedWishlist,
            };

        default:
            return state;
    }
};

export default reducer;
