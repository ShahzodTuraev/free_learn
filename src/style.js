import styled, {css, keyframes} from 'styled-components'

export const Container = styled.div`
margin: 20px;
`;

const rotate = keyframes`
from{
    transform: rotate(0deg);
}
to{
    transform: rotate(360deg);
}
`;

const common = css`
display: flex;
align-items: center;
justify-content: center;
color: white;
width: 200px;
height: 40px;
background: coral;
border-radius: 8px;
margin: 20px;
cursor: pointer;
:active{
    transform: scale(0.97);
}
`;
export const Button = styled.div`
${common}
`;

export const ActiveButton =styled(Button)`
height: 50px;
width: 180px;
background: blue;
`;

export const Rotate = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100px;
height: 100px;
border-radius: 50%;
border: 2px solid coral;
color: blue;
animation: ${rotate} 2s linear infinite;
`