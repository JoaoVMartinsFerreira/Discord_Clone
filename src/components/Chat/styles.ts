import styled from 'styled-components';
import  emptyMessage from '../../styles/EmptyMessage.png';
import { 
    hashtagIcon,
    bellIcon,
    pinIcon,
    personFillIcon,
    searchIcon,
    atIcon,
    questionIcon,
    addCircleIcon,
    gifIcon,
    emojiIcon,
    gifticon,
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
export const SearchBar = styled.div`
position: absolute;

width: 144px;
height: 24px;

right: 88px;
top: 0px;

border-radius: 3px;
background: var(--dark-gray);

span{
position: absolute;
width: 39px;
height: 15px;
left: 6px;
top: 4px;

font-family: Helvetica;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 15px;
color: #6F737A;
}
`;
export const DivBar = styled.div`
position: absolute;
width: 1576px;
height: 0px;
left: -10px;
top: 49px;

border: 1px solid #303239;
`;
export const EmptyMessage = styled.div`
position: absolute;
width: 1540.14px;
height: 117.85px;
left: 16px;
top: 703px;
background: url(${emptyMessage});
`;
export const ChatContainer = styled.div`
position: absolute;
width: 1544px;
height: 44px;
left: 16px;
top: 836px;

border-radius: 8px;
`;
export const IconContainer = styled.div`
position: absolute;
width: 44px;
height: 44px;
left: 0px;
top: 0px;

background: #40444B;
`;
export const ChatContent = styled.div`
position: absolute;
width: 1499px;
height: 44px;
left: 45px;
top: 0px;

background: #40444B;
span {
    position: absolute;
height: 19px;
left: 0.93%;
right: 9.41%;
top: 12px;

font-family: Helvetica;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;

color: #DCDDDE;
}
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
export const SearchIcon = styled(searchIcon)`
position: absolute;
width: 18px;
height: 18px;
right: 6px;
top: 3px;
fill: #6F737A;
`;
export const AtIcon = styled(atIcon)`
position: absolute;
width: 24px;
height: 24px;
left: 286px;
top: 0px;
fill: var(--fadded-gray);
`;
export const QuestionIcon = styled(questionIcon)`
position: absolute;
width: 24px;
height: 24px;
left: 324px;
top: 0px;
fill: var(--fadded-gray);
`;
export const AddCircleIcon = styled(addCircleIcon)`
position: absolute;
width: 24px;
height: 24px;
left: 10px;
top: 10px;
fill: var(--fadded-gray);
`;
export const GiftIcon = styled(gifticon)`
position: absolute;
width: 24px;
height: 24px;
left: 1384px;
top: 10px;

fill: var(--fadded-gray);
`;
export const GifIcon = styled(gifIcon)`
position: absolute;
width: 24px;
height: 24px;
left: 1423px;
top: 10px;

fill: var(--fadded-gray);
`;
export const EmojiIcon = styled(emojiIcon)`
position: absolute;
width: 22px;
height: 22px;
left: 1462px;
top: 11px;
fill: var(--fadded-gray);
`;

