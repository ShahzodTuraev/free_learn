import React, {createRef} from 'react';
import {
    Container,
    Button,
    ActiveButton,
    Rotate,
} from './style';
import {ThemeProvider, createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
body{
    background: ${(props)=> props.theme.bg};
    color: ${(props)=> props.theme.cl};
}
`;

class State extends React.Component {
    state = {
        light: false,
    }
    render(){
        const theme = {
            bg: this.state.light ? 'white' : 'black',
            cl: this.state.light ? 'black' : 'white',

        }
        return(
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <h1>Theme provider</h1>
                <Button>Click me</Button>
                <ActiveButton>Active me</ActiveButton>
                <Rotate>rotate</Rotate>
                <button onClick={()=>this.setState({light: !this.state.light})}>Change Mode</button>
            </ThemeProvider>
        )
    }
   

}
export default State