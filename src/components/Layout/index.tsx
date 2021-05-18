import React from 'react';

 import { Container,Wrapper } from './styles';
 import Navbar from '../Navbar';
 import Chat from '../Chat';

const Layout: React.FC = () => {
  return (
     <Container>
         <Wrapper>  
         <Navbar>
                 
         </Navbar>
         <Chat />
         </Wrapper>
     </Container>

  );
}

export default Layout;