import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";


 export const AddHotels = () => {


  // const postPackages = async (url, data) => {
  //   try {
  //     return await axios.post(url, data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const [form, setForm] = useState("");
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };


  return (
    <Box>
      <Box w={"50%"}  margin={"auto"} mt={5}>
        <FormControl>
          <FormLabel>Hotel Name : </FormLabel>
          <Input name="hname" 
             onChange={handleChange}  value={form.hname}
            />

          <FormLabel>Hotel front Image Link : </FormLabel>
          <Input
              name="mimage"  type="url"  placeholder="Hotel front image"
             onChange={handleChange}  value={form.image}
          />

         <FormLabel>Add more Images Link : </FormLabel>
          <Input
              name="image1"  type="url"  placeholder="Hotel image 1"
              onChange={handleChange}  value={form.image}
          />
         <Input
              name="image2"  type="url"  placeholder="Hotel image 1"
              onChange={handleChange}  value={form.image}
          /> 

          <FormLabel>City :</FormLabel>
          <Input  name = "city" type="text"  placeholder="enter City"
              onChange={handleChange} value={form.city} 
          />

          <FormLabel>Hotel Location : </FormLabel>
          <Input
            name="location" type="text"  placeholder="enter Loaction"
            onChange={handleChange}  value={form.location}
          />

          <FormLabel>Add Type of Room Standard /Premium  : </FormLabel>
          <Select
            name="button"    onChange={handleChange}
          > 
            <option value="standardroom">Standard</option>
            <option value="premiumroom">Premium</option>
          </Select>

      
          <FormLabel>Add Room Price : </FormLabel>
          <Input
             name="price" type="number"  placeholder="enter Standard room Price"
             onChange={handleChange}  value={form.price}
          />

          <Input
             name="price" type="number"  placeholder="enter Premium room Price"
             onChange={handleChange}  value={form.price}
          />
     

         <FormLabel>Hotel Ratings : </FormLabel>
          <Input
             name="ratings" type="number" placeholder="enter Ratings"
             value={form.location}
          />

         <FormLabel>Discount offer % : </FormLabel>
          <Input
            type="number"
            name="discount"
            value={form.location}
          />

          
         <FormLabel>Add information </FormLabel>
          <Input
            type="text"
            name="discount"
            value={form.location}
          />



        </FormControl>
        <Flex justifyContent={"center"} mt={4}>
          <Button
            // onClick={handleClick}
            bgColor={"blue.500"}
            _hover={{ bgColor: "blue.400" }}
            color={"whiteAlpha.900"}
          >
            ADD Hotels
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};


