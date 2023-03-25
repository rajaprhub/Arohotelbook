
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Select,
  Spacer,
} from "@chakra-ui/react";

import { FaArrowCircleRight, FaRupeeSign } from "react-icons/fa";
import { saveData,loadData} from '../Utils/accessLocalstorage'
import { CartContext } from '../Contexts/CartContext'


export const Checkout = ( ) => {
   
  const {CheckoutCart,setCheckoutCart} = React.useContext(CartContext)
  const [data,setdata] = useState([])

    useEffect( ()=>{
     setdata(CheckoutCart.cart)
    },[])

  const intData = {
    email: "",
    name: "",
    number: "",
    city: "",
    room: "1",
    date: "",
  };

  const [formData, setFormData] = useState(intData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

   let x = +formData.people;


  let total = x * x;

  return (
    <Box
      border={"0px solid red"}
      borderRadius={8}
      p={3}
      boxShadow={
        "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
      }
    >
      <Heading
        size={"md"}
        w="90%"
        textAlign={"center"}
        mb={4}
        color={"blue.400"}
      >
        Enter Your Details and Proceed To Book
      </Heading>
      <Flex
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={4}
      >
        <Input
          width="90%"
          placeholder="Email"
          type={"email"}
          isRequired
          name="email"
          onChange={handleChange}
        />
        <Input
          width="90%"
          placeholder="Full Name"
          isRequired
          onChange={handleChange}
          name="name"
        />
        <Input
          width="90%"
          placeholder="Contact Number"
          name="number"
          isRequired
          onChange={handleChange}
          type={"number"}
        />
        <Input
          width="90%"
          placeholder="enter address City"
          name="city"
          isRequired
          onChange={handleChange}
        />
        <Select
          placeholder="Number Of Rooms"
          width="90%"
          isRequired
          color={"gray.500"}
          name="rooms"
          onChange={handleChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        
        </Select>
       
        <Input
          placeholder="Selct Check-in Time"
          size="md"
          isRequired
          type="datetime-local"
          width="90%"
          color={"gray.500"}
          onChange={handleChange}
          name="date"
        />
        <Spacer />
        <Flex
          fontSize={20}
          fontWeight={"bold"}
          //   border={"1px solid red"}
          w="90%"
          justifyContent={"space-between"}
        >
          <Box>Amount:</Box>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <FaRupeeSign />
            {total=0}
          </Box>
        </Flex>
        <Box fontSize={12}>Taxes and discounts are calculated at checkout.</Box>
        
     
          
          <Button
       color={"whiteAlpha.900"}
       bg='tomato'
      _hover={{ bgColor: "blue.300" }}
     
      >
       Checkout
     </Button>

        <Box fontSize={12}>
          I accept the Terms of Use and Privacy Policy of Tripoto.
        </Box>
      </Flex>
    </Box>
  );
};

