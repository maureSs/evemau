import React, {useState} from 'react';
// chakra
import { CheckIcon, LockIcon, UnlockIcon } from '@chakra-ui/icons';
import { Box, Button, Center, FormControl, FormLabel, Image, Input, Text} from '@chakra-ui/react';
// images
import ds5 from '../images/ds5.PNG';

 const Padlock6 = () => {
    const [locked6, setLocked6] = useState(true);
    const [input, setInput] = useState('');

    const handleInputChange = (e) => setInput(e.target.value)

    const handleClick = () => {
        setInput(input)
        if (input.toLocaleLowerCase() === 'picante') {
          setLocked6(!locked6);
        } else {}
      };

  return (
    <Box p={10} alignItems='center' marginTop={50} w='100%'> 
     <Center>
           <Box>
           {
            locked6 ? ( 
            <Box>
              <Center>
               <LockIcon color='white' marginBottom='5px' />
              </Center>
              <FormControl>
                <Center>
                 <FormLabel color='white'>Nos gusta este tipo de comida <br /> Pistas: <br /> Maniko, empanada de carne, méxico</FormLabel>
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
                <h3>Crecer</h3>
              </Center>
               <Text>Empezamos a crecer en el vinculo y a sincerarnos más, charlar todo, aprendí mucho de vos y vos nada de mi porque ya eras perfecta (tontita)</Text>
               <Text marginBottom='20px'>Aca una imagen que muestra nuestra intesidad de hablar 11 horas en un día por discord</Text>
               <Center>
                <Image src={ds5} />
               </Center>
               <Center>
                <Text marginTop='10px'>Creo que ese fue el día de after?</Text>
               </Center>
              </Box>
            </> 
         }
           </Box>
           </Center>
          </Box>
  )
}

export default Padlock6;