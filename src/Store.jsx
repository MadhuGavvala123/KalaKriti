import { configureStore } from "@reduxjs/toolkit";
import productS from './ProductSlice'
import cartS from './CartSlice'
import wishlistS from './WishListSlice'
import orderS from './OrderSlice'
export const store=configureStore(
    {
        reducer:{
            product:productS,
            cart:cartS,
            wishlist:wishlistS,
            order:orderS
        }
    }
)