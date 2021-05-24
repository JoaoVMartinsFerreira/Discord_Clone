import styled from 'styled-components';
import homeLogo from '../../styles/discord.svg';
import{ addIcon,searchIcon }  from '../../styles/icons';

export const Container = styled.div`
background: var(--dark-gray);
`;
export const Nav = styled.div`
position: absolute;
width: 72px;
height: 900px;
left: 0px;
top: 0px;
background: var(--dark-gray);
`;

export const HomeIcon = styled.div`

background: url(${homeLogo});
position: absolute;
width: 29px;
height: 25px;
left: 12px;
top: 11px;
background-repeat: no-repeat;
`;

export const IconWrapper = styled.div`
position: absolute;
width: 48px;
height: 48px;
left: 12px;
top: 14px;
border-radius:50%;
background: var(--icon-wrapper);
`;
export const Separator = styled.div`
position: absolute;
width: 32px;
height: 0px;
left: 20px;
top: 72px;

border: 2px solid rgba(6, 6, 7, 0.08);
`;
export const AddIconWrapper = styled.div`
position: absolute;
width: 48px;
height: 48px;
left: 12px;
top: 98px;
border-radius:50%;
background: var(--icon-wrapper);
`;
export const CrossIcon = styled(addIcon)`
position: absolute;

left: 12.5%;
right: 12.5%;
top: 12.5%;
bottom: 12.5%;

fill:var(--green);


`;
export const SearchIconWrapper = styled.div`
position: absolute;

width: 48px;
height: 48px;

left: 12px;
top: 154px;
border-radius:50%;
background: var(--icon-wrapper);
`;
export const SearchIcon = styled(searchIcon)`
position: absolute;



position: absolute;
width: 24px;
height: 24px;
left: 12px;
top: 12px;

fill: var(--green);
`;