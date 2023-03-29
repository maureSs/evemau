import React, {useState} from 'react';
// chakra
import { CheckIcon, LockIcon, UnlockIcon } from '@chakra-ui/icons';
import { Box, Button, Center, FormControl, FormLabel, Image, Input, Link, Text} from '@chakra-ui/react';
// images
import us from '../images/us.jpg';
import reynabrim from '../images/reynabrim.jpg';

 const Padlock9 = () => {
    const [locked9, setLocked9] = useState(true);
    const [input, setInput] = useState('');

    const handleInputChange = (e) => setInput(e.target.value)

    const handleClick = () => {
        setInput(input)
        if (input.toLocaleLowerCase() === 'after') {
          setLocked9(!locked9);
        } else {}
      };

    const width = window.innerWidth;
    const breakpoint = 480;

  return (
    <Box p={10} alignItems='center' marginTop={50} w='100%'>
      <Center>
           <Box>
           {
            locked9 ? ( 
            <Box>
              <Center>
               <LockIcon color='white' marginBottom='5px' />
              </Center>
              <FormControl>
                <Center>
                 <FormLabel color='white'>Nuestra película de drama adolescente favorita</FormLabel>
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
               <h3> Feliz cumple </h3>
              </Center>
              <Text>Feliz cumple pequitas locas. Cuando estes viendo esto seguro estoy yendo a merendar con vos.</Text>
              <Center>
               <Text>Ya no me alcanza el "te quiero" para expresarte lo que siento...</Text>
              </Center>
              <Center>
                <Text>Nos vemos en un rato my lady.</Text>
              </Center>
              <Center>
               <Link href='https://www.youtube.com/watch?v=450p7goxZqg&ab_channel=johnlegendVEVO' target='blank' color='teal.500' >
                Clickea este link para escuchar un temita
               </Link>
              </Center>
              {width > breakpoint ?
              <Center marginTop='20px'>
               <Image src={us} boxSize='350px' marginRight='30px' />
               <Image src={reynabrim} boxSize='350px' />
              </Center>
              :
              <>
               <Image src={us} boxSize='350px' marginRight='30px' marginBottom='20px'/>
               <Image src={reynabrim} boxSize='350px' />
              </>
              }
             </Box>
            </> 
         }
           </Box>
           </Center>
          </Box>
  )
}

export default Padlock9;