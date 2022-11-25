import React, {Component} from "react";
import {Container, Item} from './style';

export const Sidebar =({data}) =>{
    return(
            <Container>
                <Item>Home</Item>
                <Item>About</Item>
                <Item>Service</Item>
                <Item>Contact</Item>
                <Item>Students: {data.length}</Item>
            </Container>
        );
}

export default Sidebar