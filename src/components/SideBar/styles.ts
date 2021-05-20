import styled from 'styled-components';
import homeLogo from '../../styles/mqdefault.jpg';
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
height: 851px;
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
span {
position: absolute;
width: 58px;
height: 20px;
left: 34px;
top: 53px;

font-family: Helvetica;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;
color: var(--fadded-gray);
}
`;
export const UserPanel = styled.div`
position: absolute;
width: 272px;
height: 50px;
left: 0px;
top: 850px;
background: var(--medium-gray);

span {
    position: absolute;
width: 34px;
height: 15px;
left: 65px;
top: 27px;

font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-style: normal;
font-weight: 300;
font-size: 12px;
line-height: 15px;
color: var(--fadded-gray);
}
#span2{
position: absolute;
width: 89px;
height: 17px;
left: 65px;
top: 10px;

font-family: Helvetica;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
}
color: var(--white);
`;

export const AvatarContainer = styled.div`
position: absolute;

width: 32px;
height: 32px;

left: 20px;
top: 10px;


`;
export const ConnecctPointer = styled.div`
position: absolute;

width: 10px;
height: 10px;

left: 22px;
top: 22px;

border-radius: 50%;
background:  var(--green);
`;
export const AvatarImage = styled.div`
position: absolute;
width: 32px;
height: 32px;
left: 0px;
top: 0px;
border-radius: 50%;
background: url(${homeLogo});

`;

export const Transparent = styled.div`
position: absolute;
width: 32px;
height: 32px;
left: 0px;
top: 0px;

border-radius: 50%;

border: 1px solid #000000;
box-sizing: border-box;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

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