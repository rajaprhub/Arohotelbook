import {   Box,
    Square,
    Image,
    Heading,
    Flex,
    Avatar,
    Text ,
    Center,
    Divider,
    Button,
  } from "@chakra-ui/react";
  import {
      FaBinoculars,
      FaGem,
      FaHamburger,
      FaHiking,
      FaHome,
      FaMountain,
      FaPersonBooth,
      FaTree,
      FaWifi,
      FaSwimmingPool,
      FaNewspaper,
      FaBoxTissue,
      FaBreadSlice
    } from "react-icons/fa";
  
    import {   BsFillStarFill, } from "react-icons/bs";
  
    import React, { useEffect, useState } from "react";
    import axios from "axios";
    import { useParams, useNavigate } from "react-router-dom";
    import { CartContext } from '../Contexts/CartContext'
    import { saveData,loadData} from '../Utils/accessLocalstorage'
    
    import {Checkout} from './Checkout'
   

export const CartHdetail = ( props) => {

    const {data,RemoveItem}= props 
    const {CheckoutCart,setCheckoutCart} = React.useContext(CartContext)
      
     const HandlestanAdd = ()=>{
      let bag = {
        id: data.id,
        StanPrice: data.StanPrice,
        PremPrice: data.PremPrice,
        discount: data.discount,
        roomtype: data.roomtype,
        countofroom : 1,
    }
    console.log(bag) 
    const arr = []
    arr.push(bag)
    setCheckoutCart({...CheckoutCart,cart:arr})
    saveData("Chkart",{...CheckoutCart,cart:arr})
   }
   
   const HandlePremAdd = ()=>{
    let bag = {
      id: data.id,
      PremPrice: data.PremPrice,
      discount: data.discount,
      roomtype: data.roomtype,
      countofroom : 1,
  }
  console.log(bag) 
  const arr = []
  arr.push(bag)
  setCheckoutCart({...CheckoutCart,cart:arr})
  saveData("Chkart",{...CheckoutCart,cart:arr})
  }
 



  return (
    <> 
         
    <Box mb={10} border={"0px solid red"} >
    
    
      <Box  w={"95%"} m={"auto"}  border={"0px solid blue"}>
         
      <Flex  gap={"2px"} mb={1}>
        <Box w={"100%"}  height={150} border={"0px solid gray"}>
          <Image w="100%" h={"100%"}  src={data.mainImage}  borderRadius={0} />
        </Box>

        <Box w={"100%"}  height={150} border={"0px solid gray"}>
          <Image w="100%" h={"100%"}  src={data.image2}  borderRadius={0} />
        </Box>
      </Flex>
      
       <Box  textAlign={"left"} mt={2} mb={3}>
         <Heading>{data.hotelName}</Heading>
       </Box>

      <Flex  gap={"20px"} mb={2}>
        <Avatar
          size={{
            base: "xs",
            sm: "xs",
            md: "sm",
            xl: "sm",
            "2xl": "md",
          }}
          name={data.hotelName}
          src={data.image2}
        />
         
        <Center  fontSize='20px' >
           {data.rating} <BsFillStarFill/> Ratings
        </Center>
      </Flex>
   
      <Divider/>

      <Flex justify={"space-between"} alignItems={"center"} mt={2} mb={1}>

        <Button
           color={"whiteAlpha.900"}
            bg='blue.500' 
           _hover={{ bgColor: "blue.300" }}
         >
          Book  Standard  Room
        </Button>

          <Box>
            <Flex justify={"space-around"} gap={"20px"}  alignItems={"center"} >

             <Box
                fontSize={{
                  base: "18px",
                  sm: "12px",
                  md: "16px",
                  xl: "20px",
                  "2xl": "22px",
                }}
              >
              Rs {data.StanPrice} Per Day
              </Box>

        
              <Button
                fontSize={{
                  base: "18px",
                  sm: "12px",
                  md: "sm",
                  xl: "md",
                  "2xl": "md",
                }}
                size={{
                  base: "md",
                  sm: "xs",
                  md: "sm",
                  xl: "md",
                  "2xl": "md",
                }}
                borderRadius={10}
                variant="outline"
                borderColor={"blue.400"}
                border="1px"
                color={"blue.400"}
                onClick={HandlestanAdd}
              >
                Book Now
              </Button>
              </Flex>
              </Box>

            </Flex>
                  {/* *********** */}

                  {/* <Flex
        wrap={"wrap"}
        columnGap={8}
        rowGap={3}
        fontSize={18}
        fontWeight={"semibold"}
      >
        <Center gap={2}>
          <FaHamburger />
          Breakfast
        </Center>
        
        <Center gap={2}>
          {" "}
          <FaHome />
          Homestay
        </Center>
      
        <Center gap={2}>
          <FaPersonBooth /> Wellness
        </Center>
        <Center gap={2}>
          <FaGem /> Hidden Gem
        </Center>
        <Center gap={2}>
          <FaWifi />
          Wi-Fi
        </Center>
      </Flex> */}


         
       <Flex justify={"space-between"} alignItems={"center"} mt={2} mb={1}>

     <Button
       color={"whiteAlpha.900"}
       bg='tomato'
      _hover={{ bgColor: "blue.300" }}
    >
      Book  Premium  Room
   </Button>
    <br/>

            
  <Box>
    <Flex justify={"space-around"} gap={"20px"}  alignItems={"center"} >

     <Box
        fontSize={{
          base: "18px",
          sm: "12px",
          md: "16px",
          xl: "20px",
          "2xl": "22px",
        }}
      >
       Rs {data.PremPrice} Per Day
      </Box>


      <Button
        fontSize={{
          base: "18px",
          sm: "12px",
          md: "sm",
          xl: "md",
          "2xl": "md",
        }}
        size={{
          base: "md",
          sm: "xs",
          md: "sm",
          xl: "md",
          "2xl": "md",
        }}
        borderRadius={10}
        variant="outline"
        borderColor={"blue.400"}
        border="1px"
        color={"blue.400"}
        onClick={HandlePremAdd}
      >
          Book Now
      </Button>
      </Flex>
      </Box>

    </Flex>
                    {/* ************ */}

    
     <Divider />
       
      <Flex gap={"20px"}  alignItems={"center"}  >
           
      <Button
       color={"whiteAlpha.900"}
       bg='tomato'
      _hover={{ bgColor: "blue.300" }}
       onClick={()=>RemoveItem(data.id)}
      >
       Remove
     </Button>
             
         <Box fontSize={18} fontWeight={"semibold"} color={"gray.500"}>
          City :  
        </Box>

        <Box
          fontSize={20}
          fontWeight={"semibold"}
          color={"blackAlpha.900"}
       
        >
          {data.city}
        </Box>
        
        <Box fontSize={18} fontWeight={"semibold"} color={"gray.500"}>
          Location 
        </Box>
        <Box
          fontSize={20}
          fontWeight={"semibold"}
          color={"blackAlpha.900"}
       
        >
          {data.location}
        </Box>
      
 
        </Flex>

     </Box>



    </Box>

    </>


  )
}


