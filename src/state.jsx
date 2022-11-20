import React, {createRef} from 'react';
import {Container, Title, Box, Desc, DescWrapper} from './style'

class State extends React.Component {
    render(){
        return(
            <Container>
                <Title>Hello Style Components</Title>
                <DescWrapper>
                    <Desc left>Description for the new Topic-1</Desc>
                    <Desc>Description for the new Topic-2</Desc>
                </DescWrapper>
                <Box bg='yellow' type='large'>Large</Box>
                <Box bg='red' type='medium'>Medium</Box>
                <Box bg='coral' type='small'>Small</Box>
            </Container>
        )
    }
   

}
export default State