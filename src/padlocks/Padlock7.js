import React, {useState} from 'react';
// chakra
import { CheckIcon, LockIcon, UnlockIcon } from '@chakra-ui/icons';
import { Box, Button, Center, FormControl, FormLabel, Input, Text} from '@chakra-ui/react';

 const Padlock7 = () => {
    const [locked7, setLocked7] = useState(true);
    const [input, setInput] = useState('');

    const handleInputChange = (e) => setInput(e.target.value)

    const handleClick = () => {
        setInput(input)
        if (input.toLocaleLowerCase() === 'paternal') {
          setLocked7(!locked7);
        } else {}
      };

  return (
    <Box p={10} alignItems='center' marginTop={50} w='100%'>
        <Center>
           <Box>
           {
            locked7 ? ( 
            <Box>
              <Center>
               <LockIcon color='white' marginBottom='5px' />
              </Center>
              <FormControl>
                <Center>
                 <FormLabel color='white'>Barrio donde vivis</FormLabel>
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
              <h3> Lo que siento </h3>
              </Center>
              <Text>Y esto se supone que es un regalo de cumpleaños así que te voy a expresar un poco lo que siento, y porque estoy feliz de que estes en mi vida.</Text>
              <Text>
                Sos lo primero que pienso cuando me levanto y lo último antes de irme a dormir, y no es algo reciente, me pasa hace meses. <br />
                Te considero una mujer con todas las letras, buena persona y sobre todo tremenda compañera de vida. <br />
                Aprendí a quererte muchisimo, y no fue muy difícil la verdad, simplemente paso. Te hiciste importantisima en mi vida. <br />
                Con el tiempo fui entendiendo que quería darte todo, me enamoré de vos en un abrir y cerrar de ojos. 
              </Text>
             </Box>
            </> 
         }
           </Box>
           </Center>
          </Box>
  )
}

export default Padlock7;