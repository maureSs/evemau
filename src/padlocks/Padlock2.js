import React, {useState} from 'react';
// chakra
import { CheckIcon, LockIcon, UnlockIcon } from '@chakra-ui/icons';
import { Box, Button, Center, FormControl, FormLabel, Image, Input, Text} from '@chakra-ui/react';
// images
import date1 from '../images/date1.jpg';
import date2 from '../images/date2.jpg';

 const Padlock2 = () => {
    const [locked2, setLocked2] = useState(true);
    const [input, setInput] = useState('');

    const handleInputChange = (e) => setInput(e.target.value)

    const handleClick = () => {
        setInput(input)
        if (input.toLocaleLowerCase() === 'brimstone') {
          setLocked2(!locked2);
        } else {}
      };

  return (
    <Box p={10} alignItems='center' marginTop={50} w='100%'>
    <Center>
    <Box>
   {
    locked2 ? ( 
      <>
      <Center>
        <LockIcon color='white' marginBottom='5px' />
      </Center>
        <FormControl>
         <Center>
          <FormLabel color='white'>Tu main en valorant</FormLabel>
         </Center>
          <Center>
            <Input type='email' value={input} onChange={handleInputChange} marginTop='10px' color='white' />
          </Center>
          <Center>
           <Button onClick={handleClick} marginTop='10px' size='sm'><CheckIcon /></Button>
          </Center>
         </FormControl>
       </> 
       ) 
      :
      <>
        <Center>
          <UnlockIcon color='white' marginBottom='10px' />
         </Center>
          <Box color='white'>
          <h3>
           Cuando te vi en persona por primera vez me di cuenta que eras distinta a cualquier mujer que habia conocido.
          </h3>
          <Center>
            <Text marginBottom='20px'>Me gustaste desde el primer día</Text>
          </Center>
          <Center>
           <Image src={date1} boxSize='350px' />
          </Center>
          <Center>
           <Text margin='10px 10px'>Celebrando uno de los partidos de Arg</Text>
          </Center>
          <Center>
           <Image src={date2} boxSize='350px' />
          </Center>
        </Box>
      </> 
   }
    </Box>
    </Center>
  </Box>
  )
}

export default Padlock2;