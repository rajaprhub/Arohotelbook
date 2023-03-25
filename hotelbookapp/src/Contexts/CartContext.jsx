import React,{useState} from 'react'

import { saveData,loadData } from '../Utils/accessLocalstorage'
export const CartContext = React.createContext()

let initialState = {
    cart:[]
  }
  

  let checkoutState = {
   cart:[]
 }

function  CartContextProvider({children}){ 

     const [userCart,setUserCart] = useState(loadData("Cart") || initialState)
     const [CheckoutCart,setCheckoutCart] = useState(loadData("Chkart") || checkoutState)
 
     const [paymentDetails,setPaymentDetails] =  useState(loadData("paymentDetails") || {})

      // console.log(paymentDetails)

  return(
     <CartContext.Provider value={{userCart,setUserCart,CheckoutCart,setCheckoutCart,paymentDetails,setPaymentDetails}} >
        {children}
     </CartContext.Provider>
  )

}

export default CartContextProvider