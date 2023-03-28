import React from 'react';
// chakra ui
import {Center, Flex} from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
// components
import Padlock1 from './padlocks/Padlock1';
import Padlock2 from './padlocks/Padlock2';
import Padlock3 from './padlocks/Padlock3';
import Padlock4 from './padlocks/Padlock4';
import Padlock5 from './padlocks/Padlock5';
import Padlock6 from './padlocks/Padlock6';
import Padlock7 from './padlocks/Padlock7';
import Padlock8 from './padlocks/Padlock8';
import Padlock9 from './padlocks/Padlock9';
import Padlock10 from './padlocks/Padlock10';

const App = () => {

  return (
    <ChakraProvider>
      <Flex flexDirection='column' w='100%' bg='black'>
        <Center flexDirection='column'>
          <h1 style={{color: 'white', marginTop:'40px', fontSize: '40px'}}>Eve ♥ Mau</h1>
           {/* padlock 1 */}
             <Padlock1 />
           {/* padlock 2 */}
             <Padlock2 />
           {/* padlock 3 */}
             <Padlock3 />
           {/* padlock 4 */}
             <Padlock4 />
           {/* padlock 5 */}
             <Padlock5 />
           {/* padlock 6 */}
             <Padlock6 />
           {/* padlock 7 */}
             <Padlock7 />
           {/* padlock 8 */}
             <Padlock8 />
           {/* padlock 9 */}
             <Padlock9 />
           {/* padlock 10 */}
             <Padlock10 />
       </Center>
      </Flex>
      </ChakraProvider>
  );
}

export default App;
