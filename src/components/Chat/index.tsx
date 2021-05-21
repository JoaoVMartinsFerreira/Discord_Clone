import React from 'react';

 import { Container,
  Header,
  HeaderChildren,
  HashtagIcon,
  Toolbar,
  BellIcon,
  PinIcon,
  PersonIcon 
} from './styles';

const Chat: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderChildren>
          <h3>general</h3>
          <HashtagIcon />
        </HeaderChildren>
        <Toolbar>
          <BellIcon />
          <PinIcon />
          <PersonIcon />
        </Toolbar>
      </Header>
    </Container>
    
  );
}

export default Chat;