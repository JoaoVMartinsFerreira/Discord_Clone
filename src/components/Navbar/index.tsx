import React from 'react';

 import { Container,Nav,HomeIcon,IconWrapper,Separator,AddIconWrapper,CrossIcon } from './styles';

const Navbar: React.FC = () => {
  return(
      <Container>
          <Nav>
            <IconWrapper>
             <HomeIcon />
             </IconWrapper>
             <Separator />
          <AddIconWrapper>
            <CrossIcon />
            </AddIconWrapper>  
          </Nav>
      </Container>

  );
}

export default Navbar;