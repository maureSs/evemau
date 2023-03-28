import React, {useState} from 'react';
// chakra
import { LockIcon, UnlockIcon, CheckIcon } from '@chakra-ui/icons';
import { Box, Button, Center, FormControl, FormLabel, Image, Input, Text, ChakraProvider} from '@chakra-ui/react';
// images
import ds1 from '../images/ds1.jpg';
import ds2 from '../images/ds2.jpg';
import valoScore from '../images/valoScore.jpg';


 const Padlock1 = () => {
    const [locked1, setLocked1] = useState(true);
    const [input, setInput] = useState('');

    const handleInputChange = (e) => setInput(e.target.value)

    const handleClick = () => {
        setInput(input)
        if (input.toLocaleLowerCase() === 'valorant') {
          setLocked1(!locked1);
        } else {}
      };

    const width = window.innerWidth;
    const breakpoint = 480;

  return (
    <Box p={10} alignItems='center' marginTop={50} w='100%'>
        <Center>
           <Box>
           {
            locked1 ? ( 
            <Box>
             <Center>
              <LockIcon color='white' marginBottom='5px' />
              </Center>
              <FormControl>
                <Center>
                 <FormLabel color='white'>El juego que nos unió</FormLabel>
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
                  <h3>
                  Aca empezó todo, cuando dije "Che es buena onda esta piba, juega al valo y encima esta re linda, voy a agregarla a ds"
                  </h3>
                </Center>
                <Center>
                  <Text>Adjunto pics de nuestra primera interacción y nuestra primera llamada en discord</Text>
                </Center>
                {width > breakpoint ? 
                 <Center>
                  <Image src={ds1} marginTop='30px' marginRight='20px' width={{sm: '150px', md: '250px', lg: '300px', '2xl': '700px'}} />
                  <Image src={ds2} marginTop='30px' width={{sm: '150px', md: '250px', lg: '300px', '2xl': '700px'}} />
                 </Center>
                 :
                 <>
                  <Image src={ds1} marginTop='30px' marginRight='20px' width={{sm: '150px', md: '250px', lg: '300px', '2xl': '700px'}} />
                  <Image src={ds2} marginTop='30px' width={{sm: '150px', md: '250px', lg: '300px', '2xl': '700px'}} />
                 </>
                }
                <Center>
                 <Text marginTop='20px'>Que tiempos estos en los que ganabamos casi todo eh</Text>
                </Center>
                <Center>
                 <Image src={valoScore} boxSize={{md: '200px', lg: '200px', '2xl': '400px'}} marginTop='20px' />
                </Center>
              </Box>
            </> 
         }
           </Box>
           </Center>
          </Box>
  )
}

export default Padlock1;
