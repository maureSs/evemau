import React, {useState} from 'react';
// chakra
import { CheckIcon, LockIcon, UnlockIcon } from '@chakra-ui/icons';
import { Box, Button, Center, FormControl, FormLabel, Image, Input, Text} from '@chakra-ui/react';
// images
import ds3 from '../images/ds3.PNG';
import ds4 from '../images/ds4.PNG';

 const Padlock4 = () => {
    const [locked4, setLocked4] = useState(true);
    const [input, setInput] = useState('');

    const handleInputChange = (e) => setInput(e.target.value)

    const handleClick = () => {
        setInput(input)
        if (input.toLocaleLowerCase() === 'pequitas') {
          setLocked4(!locked4);
        } else {}
      };

  return (
    <Box p={10} alignItems='center' marginTop={50} w='100%'>
        <Center>
           <Box>
           {
            locked4 ? ( 
            <Box>
              <Center>
                <LockIcon color='white' marginBottom='5px' />
              </Center>
              <FormControl>
               <Center>
                <FormLabel color='white'>A veces te digo "... locas"</FormLabel>
               </Center>
               <Center>
                  <Input type='email' value={input} onChange={handleInputChange} marginTop='10px' color='white' />
                </Center>
                <Center>
                 <Button onClick={handleClick} marginTop='10px' size='sm'><CheckIcon /></Button>
                </Center>
               </FormControl>
             </Box> 
             ) 
            :
            <>
             <Center>
              <UnlockIcon color='white' marginBottom='10px' />
             </Center>
             <Box color='white'>
              <h3>El 3 de enero en un momento de intensidad esquizofrenica sacamos un viaje a Ushuaia a 2 meses y pico de conocernos</h3>
              <Center>
               <Text marginBottom='20px'>Y arrancabamos una tradición...</Text>
              </Center>
               <Center>
                <Image src={ds3} />
               </Center>
               <Center>
                 <Text marginTop='10px'>Una de las decisiones que no me arrepiento de haber tomado, una de las tantas cosas que nos unieron</Text>
               </Center>
               <Center>
                 <Text marginBottom='20px'>Como olvidar tambien el famoso somebody call 911</Text>
               </Center>
               <Center>
                <Image src={ds4} boxSize='350px' />
               </Center>
              </Box>
            </> 
         }
           </Box>
           </Center>
          </Box>
  )
}

export default Padlock4;