import styled, {css} from 'styled-components'

export const Container = styled('div')`
    /* display: flex;
    justify-content: center; */
    color: blue;
    padding: 20px;
`;

const common = css`
     color: blue;
    text-align: center;
    font-size: 30px;
    `

export const Title = styled.h1`
   ${common};
   `;

export const Desc =styled.h1`
   ${common};
   font-size: 20px;
   font-style: italic;
   color: ${({left})=>(left ? 'red': 'green')};
`;

export const DescWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const getSize = (props) => {
    switch (props.type) {
        case 'large':
            return '200px';
        case 'medium':
            return '150px';
        case 'small':
            return '100px';
        default:
            return '80px';
    }
};

export const Box = styled.div`
    display: flex;
    background: ${(props)=>props.bg};
    align-items: center;
    justify-content: center;
    font-size: 28px;
    width: ${getSize};
    height: ${getSize};
    border: 2px solid green;
    margin: 20px;
`;