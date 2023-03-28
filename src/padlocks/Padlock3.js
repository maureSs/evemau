import React, {useState} from 'react';
// chakra
import { CheckIcon, LockIcon, UnlockIcon } from '@chakra-ui/icons';
import { Box, Button, Center, FormControl, FormLabel, Image, Input, Text} from '@chakra-ui/react';
// images
import maniko from '../images/maniko.jpg';
import maniko2 from '../images/maniko2.jpg';

 const Padlock3 = () => {
    const [locked3, setLocked3] = useState(true);
    const [input, setInput] = useState('');

    const handleInputChange = (e) => setInput(e.target.value)

    const handleClick = () => {
        setInput(input)
        if (input.toLocaleLowerCase() === 'reyna') {
          setLocked3(!locked3);
        } else {}
      };

    const width = window.innerWidth;
    const breakpoint = 480;

  return (
    <Box p={10} alignItems='center' marginTop={50} w='100%'>
        <Center>
           <Box>
           {
            locked3 ? ( 
            <Box>
             <Center>
              <LockIcon color='white' marginBottom='5px' />
             </Center>
              <FormControl>
                <Center>
                  <FormLabel color='white'>Mi main en valorant</FormLabel>
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
                <h3 marginLeft='20%'> Arrancamos a vernos más seguido, literalmente te convertiste LA... </h3>
              </Center>
              <Center>
                <h3>
                 La persona con la que mas hablaba y con la que más salia.
                 La persona que más ganas tenia de ver.
                </h3>
              </Center>
               <Center>
                <Text marginBottom='20px'>Maniko GOOOOOD</Text>
               </Center>
               {width > breakpoint ? 
               <Center>
               <Image src={maniko} boxSize='350px' marginRight='30px' />
               <Image src={maniko2} boxSize='350px' />
              </Center>
              :
              <>
               <Image src={maniko} boxSize='350px' marginRight='30px' marginBottom='20px' />
               <Image src={maniko2} boxSize='350px' />
              </>
               }
               <Text marginTop='20px'>Ya para estos tiempos nos deciamos te quiero y hacía mucho no decia un "te quiero" tan real y sincero en mi vida</Text>
              </Box>
            </> 
         }
           </Box>
           </Center>
          </Box>
  )
}

export default Padlock3;