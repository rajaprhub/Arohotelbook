
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



export const HotelDetail = () => {
   const { id } = useParams();
   const [data, setProduct] = useState({});
  
     const gethoteldetail = () => {
        return axios.get(
          `https://hotelsbookapiserver.onrender.com/hotel/${id}`
        );
      };
    
      useEffect(() => {
        gethoteldetail()
          .then((res) => setProduct(res.data))
          .catch((err) => console.log(err));
      }, []);

  return (
    <> 
   <Box mb={10}>
      {/* <Image
        src="https://cdn1.tripoto.com/assets/2.9/img/home_banner_road.jpg"
        w={"100%"}
        h="200px"
        // mb={1}
      /> */}
      <br />
      <Box  w={"95%"} m={"auto"}  border={"0px solid blue"}>
        <Box w={"100%"}  height={500} border={"0px solid gray"}>
          <Image w="70%" h={"100%"}  src={data.mainImage}  borderRadius={0} />
        </Box>
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
              Avail Rs {data.StanPrice} onwards
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
                // onClick={() => handleGotoSinglePage(elem.id)}
              >
                Add to Cart
              </Button>
              </Flex>
              </Box>

            </Flex>
                  {/* *********** */}

                  <Flex
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
      </Flex>


         
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
       Avail Rs {data.PremPrice} onwards
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
        // onClick={() => handleGotoSinglePage(elem.id)}
      >
        Add to Cart
      </Button>
      </Flex>
      </Box>

    </Flex>
                    {/* ************ */}

                    <Flex
        wrap={"wrap"}
        columnGap={8}
        rowGap={3}
        fontSize={18}
        fontWeight={"semibold"}
      >
        <Center gap={2}>
          <FaHamburger />
          Meals
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
        <Center gap={2}>
          <FaBreadSlice />
         Bread Toasted
        </Center>
        <Center gap={2}>
          <FaSwimmingPool />
          Swimming Pool Acess
        </Center>
      </Flex>
     <Divider />
       
      <Flex gap={"20px"}  alignItems={"center"}  >
           
             
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

        <Flex gap={"20px"}  alignItems={"center"}  >
           
           <Box fontSize={18} fontWeight={"semibold"} color={"gray.500"}>
             Hightlights  
           </Box>
           <Box
             fontSize={20}
             fontWeight={"semibold"}
             color={"blackAlpha.900"}
          
           >
             {data.info}
           </Box>
   
   
           </Flex>
     
    </Box>



    </Box>


    </>
  )
}
