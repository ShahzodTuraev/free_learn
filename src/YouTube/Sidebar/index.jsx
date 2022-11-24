import React, {Component} from "react";
import { sidebar } from "../../utils/sidebar";
import {Container, Title, Wrapper} from './style';

export default class YouTube extends Component {
    render(){
        return(
            <Container>
                {
                    sidebar.map((value)=>(
                        <Wrapper key={value.id} >
                            <Title title>{value.title}</Title>
                            {value.data.map((item) => (
                               <Title>{item.title}</Title>
                            ))}
                        </Wrapper>
                    ))}
            </Container>
        );
    }
}
