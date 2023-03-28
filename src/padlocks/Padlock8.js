import React, {useState} from 'react';
// chakra
import { CheckIcon, LockIcon, UnlockIcon } from '@chakra-ui/icons';
import { Box, Button, Center, FormControl, FormLabel, Image, Input, Text} from '@chakra-ui/react';
// images
import ds6 from '../images/ds6.PNG';
import birras from '../images/birras.jpg';
import eve from '../images/eve.jpg';


 const Padlock8 = () => {
    const [locked8, setLocked8] = useState(true);
    const [input, setInput] = useState('');

    const handleInputChange = (e) => setInput(e.target.value)

    const handleClick = () => {
        setInput(input)
        if (input.toLocaleLowerCase() === '408') {
          setLocked8(!locked8);
        } else {}
      };

    const width = window.innerWidth;
    const breakpoint = 480;

  return (
    <Box p={10} alignItems='center' marginTop={50} w='100%'>
        <Center>
           <Box>
           {
            locked8 ? ( 
            <Box>
             <Center>
              <LockIcon color='white' marginBottom='5px' />
             </Center>
              <FormControl>
               <Center>
                <FormLabel color='white'>Número de nuestra habitación en Ushuaia</FormLabel>
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
               <h3> Ushuaia </h3>
              </Center>
              <Center>
               <Text marginBottom='20px'>Y llegó el díaaaa</Text>
              </Center>
              <Image src={ds6} />
              <Text>Este viaje no solo fue mágico y me conecto mucho más con vos, si no que me hizo el "click" en algunas cosas</Text>
              <Text margin='10px 10px'>
                Me di cuenta que no podía ni quería dejar de pasar tiempo con vos, de mirarte a los ojos, de reirme con vos, de coger con vos, de dormir con vos.
                <br />
                Dije "Quiero eso y más, y lo quiero todo con ella"
                Viajar, vivir juntos, competir en todo
              </Text>
              {width > breakpoint ? 
              <Center>    
               <Image src={birras} boxSize='350px' marginRight='30px' />
               <Image src={eve} boxSize='350px' />
              </Center>
              :
              <>
               <Image src={birras} boxSize='350px' marginRight='30px' marginBottom='20px' />
               <Image src={eve} boxSize='350px' />
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

export default Padlock8;