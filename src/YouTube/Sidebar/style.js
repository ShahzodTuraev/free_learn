import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
width: 300px;
border: 1px solid white;
`;

export const Wrapper = styled.div`
border-bottom: 1px solid rgba(255, 255, 255, 0.2);
margin: 10px 0px;
`;

export const Title = styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: ${({title})=> title? 'rgba(255, 255, 255, 0.6': '#ffffff'};
margin-right: 24px;
`;