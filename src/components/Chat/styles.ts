import styled from 'styled-components';
import { 
    hashtagIcon,
    bellIcon,
    pinIcon,
    personFillIcon
 } from '../../styles/icons' ;
export const Container = styled.div`
position: absolute;
width: 1576px;
height: 900px;
right: -40px;
top: 0px;
background: var(--icon-wrapper);
`;
export const Header = styled.div`
position: absolute;
width: 1560px;
height: 48px;
left: 8px;
top: 0px;
`;
export const HeaderChildren = styled.div`
position: absolute;
width: 1190px;
height: 24px;
left: 0px;
top: 12px;
h3 {
position: absolute;
width: 58px;
height: 20px;
left: 44px;
top: 2px;

font-family: Helvetica;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 20px;

color: var(--white);
}
`;

export const Toolbar = styled.div`
position: absolute;
width: 360px;
height: 24px;
left: 1200px;
top: 12px;
`;
//ICONES
export const HashtagIcon = styled(hashtagIcon)`
position: absolute;
width: 24px;
height: 24px;
left: 14px;
top: 0px;
fill: var(--solid-gray);
`;
export const BellIcon = styled(bellIcon)`
position: absolute;
width: 24px;
height: 24px;
left: 14px;
top: 0px;
fill: var(--fadded-gray);
`;
export const PinIcon = styled(pinIcon)`
position: absolute;
width: 24px;
height: 24px;
left: 52px;
top: 0px;
fill:var(--fadded-gray);
`;
export const PersonIcon = styled(personFillIcon)`
position: absolute;
width: 24px;
height: 24px;
left: 90px;
top: 0px;
fill: var(--fadded-gray);
`;