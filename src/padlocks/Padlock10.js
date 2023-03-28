import React, {useState} from 'react';
// chakra
import { CheckIcon, LockIcon, UnlockIcon } from '@chakra-ui/icons';
import { Box, Button, Center, FormControl, FormLabel, Input } from '@chakra-ui/react';



 const Padlock10 = () => {
    const [locked10, setLocked10] = useState(true);
    const [input, setInput] = useState('');

    const handleInputChange = (e) => setInput(e.target.value)

    const handleClick = () => {
        setInput(input)
        if (input.toLocaleLowerCase() === 'forever') {
          setLocked10(!locked10);
        } else {}
      };

  return (
    <Box p={10} alignItems='center' marginTop={50} w='100%'>
        <Center>
           <Box>
           {
            locked10 ? ( 
            <Box>
              <Center>
               <LockIcon color='white' marginBottom='5px'/>
              </Center>
              <FormControl>
                <Center>
                 <FormLabel color='white'>Ups sorry pero para este vas a tener que esperar un poco<br/>Soon...</FormLabel>
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
              <Center>
               <h3> Queres ser mi novia? </h3>
              </Center>
              <Center>
               <h3> Te amo </h3>
              </Center>
             </Box>
            </> 
         }
           </Box>
           </Center>
          </Box>
  )
}

export default Padlock10;