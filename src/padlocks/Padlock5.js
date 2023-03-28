import React, {useState} from 'react';
// chakra
import { CheckIcon, LockIcon, UnlockIcon } from '@chakra-ui/icons';
import { Box, Button, Center, FormControl, FormLabel, Input, Text} from '@chakra-ui/react';

 const Padlock5 = () => {
    const [locked5, setLocked5] = useState(true);
    const [input, setInput] = useState('');

    const handleInputChange = (e) => setInput(e.target.value)

    const handleClick = () => {
        setInput(input)
        if (input.toLocaleLowerCase() === 'raro') {
          setLocked5(!locked5);
        } else {}
      };

  return (
    <Box p={10} alignItems='center' marginTop={50} w='100%'>
        <Center>
           <Box>
           {
            locked5 ? ( 
            <Box>
              <Center>
                <LockIcon color='white' marginBottom='5px' />
              </Center>
              <FormControl>
                <Center>
                 <FormLabel color='white'>Antes me decias mucho "Estás r..."</FormLabel>
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
                <h3>No rendirse</h3>
              </Center>
               <Text>Tuvimos nuestros momentos de mierda también, enero - febrero fueron meses difíciles</Text>
               <Text>Pero más allá de todo, hay algo que siempre priorice y lo que más peso hizo y fue que quería tenerte en mi vida</Text>
               <Text>Porque se que dios, la vida o lo que sea nos puso en el camino del otro por algo</Text>
               <Text>Pero también mis sentimientos por vos no me dejaban alejarme, sabia que teniamos una conexión que no era normal</Text>
               <Center>
                <Text>Queria cuidarla pero también "descubrirla"</Text>
               </Center>
              </Box>
            </> 
         }
           </Box>
           </Center>
          </Box>
  )
}

export default Padlock5;