import React from 'react';

 import { Container,
  Header,
  HeaderChildren,
  HashtagIcon,
  Toolbar,
  BellIcon,
  PinIcon,
  PersonIcon,
  SearchBar,
  SearchIcon,
  AtIcon,
  QuestionIcon,
  DivBar,
  EmptyMessage,
  ChatContainer,
  IconContainer,
  AddCircleIcon,
  ChatContent,
  GiftIcon,
  GifIcon,
  EmojiIcon,

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
          <SearchBar>
               <span>Search</span>
               <SearchIcon />
          </SearchBar>
          <AtIcon />
          <QuestionIcon />
        </Toolbar>
        <DivBar />
      </Header>
      <EmptyMessage />
      <ChatContainer>
        <IconContainer>
         <AddCircleIcon />
        </IconContainer>
        <ChatContent>
          <span>Message #general</span>
          <GiftIcon />
          <GifIcon />
          <EmojiIcon />
        </ChatContent>
      </ChatContainer>
    </Container>
    
  );
}

export default Chat;