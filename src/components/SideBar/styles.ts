import styled from 'styled-components';
import { 
    arrowDown,
    smallArowDown,
    smallAddIcon,
    hashtagIcon,
    personIcon,
    gearIcon,
    speakerIcon,

     } from '../../styles/icons';
export const Container = styled.div`
position: absolute;
width: 272px;
height: 900px;
left: 70px;
top: 0px;

background: var(--primary);
`;
export const Header = styled.div`
position: absolute;
width: 240px;
height: 48px;
left: 16px;
top: 0px;
h1{
    position: absolute;
width: 40px;
height: 20px;
left: 0px;
top: 9px;

font-family: Helvetica;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 20px;
color:var(--white);
}
`;

export const DivBar = styled.div`
position: absolute;
width: 272px;
height: 0px;
left: 0px;
top: 49px;

border: 1px solid #222327;
`;
export const TextChannelContainer = styled.div`
position: absolute;
width: 272px;
height: 40px;
left: 0px;
top: 16px;
span {
position: absolute;

width: 190px;
height: 16px;
left: 26px;
top: 50px;

font-family: Helvetica;
font-style: normal;
font-weight: bold;
font-size: 12px;

line-height: 15px;
text-transform: uppercase;

color: var(--gray);
}
`;
export const ChannelContainer = styled.div`
position: absolute;

width: 252px;
height: 34px;

left: 10px;
top: 98px;

border-radius: 4px;

background: var(--light-gray);
span {
position: absolute;
width: 58px;
height: 43px;
left: 35px;
top: -5px;

font-family: Arial, Helvetica, sans-serif;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 43px;

color:var(--white);
}
`;
export const VoiceChannelContainer = styled.div`
position: absolute;

width: 272px;
height: 40px;

left: 0px;
top: 120px;
span {
position: absolute;
width: 190px;
height: 16px;
left: 26px;
top: 50px;

font-family: Helvetica;
font-style: normal;
font-weight: bold;
font-size: 12px;
line-height: 15px;
text-transform: uppercase;

color:var(--fadded-gray)
 }
`;
export const VoiceConfigContainer = styled.div`
position: absolute;

width: 252px;
height: 34px;

left: 10px;
top: 160px;

border-radius: 4px;
#voicePersonconfig {
    top: 50px;
}
#voiceGearconfig {
    top: 50px;
    left: 232px;
}
`;

// ICONES
export const SmallArrow = styled(smallArowDown)`
position: absolute;

width: 12px;
height: 12px;

left: 8px;
top: 50px;
fill:var(--gray);
`;

export const SmallAdd = styled(smallAddIcon) `
position: absolute;

position: absolute;
width: 18px;
height: 18px;
left: 239px;
top: 50px;

fill: var(--gray);
`;
export const ArrowIcon = styled(arrowDown)`
position: absolute;

width: 18px;
height: 18px;

left: 222px;
top: 9px;

fill: var(--white);
`;
export const HashtanIcon = styled(hashtagIcon)`
position: absolute;

width: 24px;
height: 24px;

left: 6px;
top: 5px;
fill: var(--fadded-gray);
`;
export const PersonIcon = styled(personIcon)`
position: absolute;

width: 16px;
height: 16px;

left: 210px;
top: 9px;

fill: var(--fadded-gray);
`;
export const GearIcon = styled(gearIcon)`
position: absolute;
width: 16px;
height: 16px;

left: 230px;
top: 9px;

fill: var(--fadded-gray);
`;
export const SpeakerIcon = styled(speakerIcon)`
position: absolute;

left: 2.38%;
right: 88.1%;
top: 50px;
bottom: 14.71%;

fill: var(--fadded-gray);
`;