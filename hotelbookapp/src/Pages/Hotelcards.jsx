import React, {useState, useEffect } from 'react'
import axios from 'axios'
import { useSearchParams } from "react-router-dom"
import { Link } from 'react-router-dom'
import {
  Box,
  SimpleGrid,
  Image,
  Square,
  Flex,
  Input,
  Button,
  Avatar,
  Center,
  Select,
  useToast,
} from "@chakra-ui/react";
import { MdLocationOn } from "react-icons/md";


export const Hotelcards = () => {
  const [searchParams,setSearchParams] = useSearchParams()
  const [hdata,setHdata] = useState([]) 
  const initialSort = searchParams.get("sort")
  const [sort,setSort] = useState(initialSort || "")
  const [page,setPage]= useState(1);
  const [totalPages,setTotalPages] = useState(0)

  // const [limit, setLimit] = useState(9);

  const HandleSort = (e)=>{
    setSort(e.target.value)
   }

    const SortData = async (pageda,sort)=>{
     let sortby = null
     let order = null
     if(sort=="HL"){
       sortby = "StanPrice"
       order = "desc"
    }
     else if(sort=="LH"){
       sortby = "StanPrice"
       order = "asc"
     }
     else {
      sortby = "id"
      order = "asc"
    }
        const res = await axios.get(`https://hotelsbookapiserver.onrender.com/hotel`, {
          params: {_page:pageda,_limit:9, _sort: sortby, _order: order }
        });
         return res;
    }

   useEffect(()=>{
      SortData(page,sort)
      .then( (res)=>{
        let x = res.headers["x-total-count"]
          x = Math.ceil(x/12)
          setTotalPages(x)
          setHdata(res.data) 
      })
      .catch( (err)=>{
        console.log(err)
      })
     },[page,sort])

 
     const fetchData = async ()=>{
      return axios.get(`https://hotelsbookapiserver.onrender.com/hotel`)
        .then( (res)=>setHdata(res.data) )
     }
     useEffect(()=>{
       fetchData()
     },[])
      



  return (
    <> 
      {/* <h1> hotel List Cards</h1> */}

      <Flex minWidth='max-content'  mt={5} justifyContent="space-around" alignItems='center' gap='1'>

       <Box
          w={{
            base: "50%",
            sm: "40%",
            md: "30%",
            xl: "20%",
            "2xl": "20%",
          }}
          ml={"10%"}
          mb={6}
        >
           <Input 
              border='1px solid black'  w='200px' placeholder='search ' />
        </Box>
          
          {/* <Box>
            <h1>totalpage:  {totalPages}</h1>
          </Box> */}
        <Box
          w={{
            base: "50%",
            sm: "40%",
            md: "30%",
            xl: "20%",
            "2xl": "20%",
          }}
          ml={"10%"}
          mb={6}
        >
          <Select   onChange={(e)=>HandleSort(e)} >
             <option>Relevance</option>
             <option value="LH">Price: Low to High</option>
             <option value="HL">Price: High to Low</option>
          </Select>
        </Box>

        </Flex>
      


      <SimpleGrid
        columns={{
          base: 1,
          sm: 2,
          md: 2,
          xl: 3,
          "2xl": 3,
        }}
        w="80%"
        margin={"auto"}
        spacing={5}
      >
        {hdata.map((elem) => (
          <Box
            key={elem.id}
            // border="2px solid red"
            p={3}
            borderRadius={10}
            boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
          >
            <Image src={elem.mainImage} w="100%" h={"50%"} />
            <Box
              fontSize={{
                base: "18px",
                sm: "12px",
                md: "20px",
                xl: "18px",
                "2xl": "20px",
              }}
              mb={1}
            >
              {elem.hotelName}
            </Box>
            
            <Flex justify={"space-between"} mb={2}>
              <Button
                variant={"ghost"}
                fontSize={{
                  base: "18px",
                  sm: "12px",
                  md: "18px",
                  xl: "md",
                  "2xl": "md",
                }}
                size={{
                  base: "sm",
                  sm: "xs",
                  md: "sm",
                  xl: "md",
                  "2xl": "md",
                }}
                leftIcon={<MdLocationOn />}
                color={"blue.400"}
              >
                {elem.city}
              </Button>
              <Button
                fontSize={{
                  base: "18px",
                  sm: "12px",
                  md: "sm",
                  xl: "md",
                  "2xl": "md",
                }}
                size={{
                  base: "sm",
                  sm: "xs",
                  md: "sm",
                  xl: "md",
                  "2xl": "md",
                }}
                bgColor={"blue.300"}
                _hover={{ bgColor: "blue.300" }}
              >
                Rating:{elem.rating}
              </Button>
            </Flex>
            <Flex justify={"space-between"} alignItems={"center"} mb={1}>
              <Box
                fontSize={{
                  base: "18px",
                  sm: "12px",
                  md: "16px",
                  xl: "20px",
                  "2xl": "22px",
                }}
              >
               Rs {elem.StanPrice} onwards
              </Box>

              <Link to={`/hoteldetail/${elem.id}`}>
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
                Book Now
              </Button>
              </Link>
            </Flex>
            <Flex>
              <Avatar
                size={{
                  base: "xs",
                  sm: "xs",
                  md: "sm",
                  xl: "sm",
                  "2xl": "md",
                }}
                name={elem.brand_name}
                src={elem.image1}
              />
              <p
                fontSize={{
                  base: "16px",
                  sm: "13px",
                  md: "16px",
                  xl: "20px",
                  "2xl": "20px",
                }}
              >
                {elem.info}
              </p>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
           

      <Flex justifyContent={"center"} alignItems={"center"} mt={8} gap={4}>
        <Button
          onClick={() => setPage((prev) => prev - 1)}
          disabled ={ page === 1}
          borderColor={"blue.400"}
          bgColor={"blue.300"}
        >
          Prev
        </Button>
        <Button
          colorScheme="whiteAlpha"
          bgColor={"whiteAlpha.900"}
          variant="outline"
          border="1px"
          borderColor={"blue.400"}
          color={"blue.400"}
        >
          Page {page}
        </Button>
        <Button
          disabled={page===totalPages}
          onClick={() => setPage((prev) => prev + 1)}
          borderColor={"blue.400"}
          bgColor={"blue.300"}
        >
          Next
        </Button>
      </Flex>


    </>
  )
}
