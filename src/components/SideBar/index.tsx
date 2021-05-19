import React from 'react';

 import { 
    Container,
     Header,ArrowIcon,
     DivBar,
     TextChannelContainer,
     SmallArrow,
     SmallAdd,
     ChannelContainer,
     HashtanIcon,
     PersonIcon,
     GearIcon,
     VoiceChannelContainer,
     VoiceConfigContainer,
     SpeakerIcon,
      } from './styles';

const SideBar: React.FC = () => {
  return (
      <Container>
      <Header>
        <h1>Guild</h1>
        <button>
            <ArrowIcon />
        </button>
      </Header>
      <DivBar />
      
      <TextChannelContainer >
          <SmallArrow />
          <span>TEXT CHANNELS</span>
          <SmallAdd />
      </TextChannelContainer>

      <ChannelContainer>
       <HashtanIcon />
       <span>general</span>
       <PersonIcon />
       <GearIcon />
      </ChannelContainer>

      <VoiceChannelContainer>
         <SmallArrow />
         <span>VOICE CHANNELS</span>
         <SmallAdd />
      </VoiceChannelContainer>

      <VoiceConfigContainer>
        <SpeakerIcon />
         <GearIcon id="voiceGearconfig"/>
        <PersonIcon id="voicePersonconfig"/>
      </VoiceConfigContainer>
      </Container>
  );
  
}

export default SideBar;