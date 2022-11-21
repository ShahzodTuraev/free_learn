import styled from "styled-components";
import { ReactComponent as burger } from '../assets/icons/header/burger.svg';
import { ReactComponent as search } from '../assets/icons/header/search.svg';
import { ReactComponent as bell } from '../assets/icons/header/bell.svg';
import { ReactComponent as functions } from '../assets/icons/header/functions.svg';
import { ReactComponent as video } from '../assets/icons/header/video.svg';

export const Container = styled.div`
display: flex;
flex-direction: ${({flex})=>!flex &&'column'};
background: #212121;
color: #FFFFFF;
height: 100vh;
padding: ${({flex})=>!flex &&'0 30px'};
`;

export const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 60px;

`;

export const Category = styled.div`
display: flex;
flex: 1;
align-items: center;
justify-content: ${({end})=>end && 'flex-end'};
`;

export const Icons = styled.div``;

Icons.Burger = styled(burger)`
width: 24px;
height: 24px;
margin-left: 20px;
`;

Icons.Bell = styled(bell)`
width: 40px;
height: 40px;
margin-left: 5px;
cursor: pointer;
`;

Icons.Functions = styled(functions)`
width: 40px;
height: 40px;
margin-left: 5px;
cursor: pointer;
`;

Icons.Video = styled(video)`
width: 40px;
height: 40px;
margin-left: 5px;
cursor: pointer;
`;

Icons.Logo = styled.img``;
Icons.Search = styled(search)`
width: 70px;
height: 40px;
padding: 10px 24px;
background: rgba(255, 255, 255, 0.2);
border-radius: 0px 2px 2px 0px;
cursor: pointer;
`;

export const Input = styled.input`
width: 100%;
max-width: 500px;
height: 40px;
background: #000000;
border: 1px solid rgba(255, 255, 255, 0.2);
border-radius: 2px 0px 0px 2px;
color: rgba(255, 255, 255, 0.6);
font-size: 18px;
:focus{
    outline: none;
}
`;

export const User = styled.img`
width: 40px;
height: 40px;
margin-left: 20px;
cursor: pointer;
`;