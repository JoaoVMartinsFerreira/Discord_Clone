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
     UserPanel,
     AvatarContainer,
     ConnecctPointer,
     AvatarImage,
     Transparent,
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
        <span>General</span>
         <GearIcon id="voiceGearconfig"/>
        <PersonIcon id="voicePersonconfig"/>
      </VoiceConfigContainer>

      <UserPanel>
      <span># 1234</span>
      <span id="span2">yTekilla</span>
        <AvatarContainer>
        
          <AvatarImage >
          <Transparent />
          <ConnecctPointer />
          </AvatarImage>
         
        </AvatarContainer>
      </UserPanel>
      </Container>
  );
  
}

export default SideBar;