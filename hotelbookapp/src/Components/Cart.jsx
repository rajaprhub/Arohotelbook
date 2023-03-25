import React, { useEffect, useState } from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import { CartContext } from '../Contexts/CartContext'
import { saveData,loadData} from '../Utils/accessLocalstorage'

import {CartHdetail} from './CartHdetail'
import {Checkout} from './Checkout'


export const Cart = () => {
  const {userCart,setUserCart} = React.useContext(CartContext)

  const [data,setdata] = useState([])


   useEffect( ()=>{
     setdata(userCart.cart)
   },[])

   const RemoveItem = (id)=>{
    let x = userCart.cart
    let newCart = []
     for(let i=0; i<x.length;i++){
      if(x[i].id!==id){
      newCart.push(x[i])
    }
  }
    setUserCart({...userCart,cart:newCart})
    saveData("Cart",{...userCart,cart:newCart})
  }
  




  return (
    <> 
     {/* <h1>cart page</h1> */}
       

     <Box>
   
      <br />
      <Flex
        mt={10}
        gap={2}
        w={"95%"}
        margin={"auto"}
        flexDir={{ base: "column", sm: "column", md: "row" }}
      >
        <Box flex={2}>
         {data.map((el)=>(
           <CartHdetail key={el.id} data={el} RemoveItem={RemoveItem} />
         ))}
      </Box>
        <Box flex={1}>
          <Checkout />
        </Box>
      </Flex>
    </Box>



    </>
  )
}
