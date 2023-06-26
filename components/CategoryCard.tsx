"use client"

import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
    Text
  } from '@chakra-ui/react';




  
  function CategoryCard({ data}: { data: any}) {
    return (
      <Flex p={50} w="full" alignItems="center" justifyContent="center">
        <Box
          bg={useColorModeValue('white', 'gray.800')}
          width={{ base: 'full', md: 64 }}
          maxW="sm"
          borderWidth="1px"
          rounded="sm"
          shadow="sm"
          position="relative">
        

  
          <Image
            src={data.imageURL}
            alt={`Picture of ${data.name}`}
            roundedTop="lg"
          />
  
          <Box p="6">
            <Box display="flex" alignItems="baseline">
              
            </Box>
            <Flex mt="1" justifyContent="space-between" alignContent="center"
            alignItems="center"
            >
              <Box
              w={"full"}
                fontSize="xl"
                fontWeight="semibold"
           justifyContent={"center"}
           alignItems={"center"}
                as="h4"
                lineHeight="tight"
                isTruncated>
         <Text>
         {data.name}
         </Text>
              </Box>
     
            </Flex>
  
 
          </Box>
        </Box>
      </Flex>
    );
  }
  
  export default CategoryCard;