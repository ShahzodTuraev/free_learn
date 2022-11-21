import React, {Component} from "react";
import {Container, Wrapper, Category, Icons, Input, User} from './style';
import Sidebar from './Sidebar';
import Body from './Body'
import logo from '../assets/imgs/logo.png';
import account from '../assets/imgs/account.png';

export default class YouTube extends Component {
    render(){
        return <Container>
            <Wrapper>
                <Category>
                    <Icons.Burger/>
                    <Icons.Logo src={logo} alt='logo'/>
                </Category>
                <Category>
                    <Input placeholder='search'/>
                    <Icons.Search/>
                </Category>
                <Category end>
                    <Icons.Video/>
                    <Icons.Functions/>
                    <Icons.Bell/>
                    <User src={account} alt='user'/>
                </Category>
            </Wrapper>
            <Container flex>
                <Sidebar/>
                <Body/>
            </Container>
        </Container>
    }
}
