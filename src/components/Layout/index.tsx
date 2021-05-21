import React from 'react';

 import { Container,Wrapper } from './styles';
 import Navbar from '../Navbar';
 import Chat from '../Chat';
import SideBar from '../SideBar';
const Layout: React.FC = () => {
  return (
     <Container>
         <Wrapper>  
         <Navbar />
         <SideBar />
         <Chat />
         </Wrapper>
     </Container>

  );
}

export default Layout;