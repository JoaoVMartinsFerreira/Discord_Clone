import React from 'react';

 import { Container,Nav,HomeIcon,IconWrapper,Separator,AddIconWrapper,CrossIcon,SearchIconWrapper,SearchIcon } from './styles';

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
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
          </Nav>
      </Container>

  );
}

export default Navbar;