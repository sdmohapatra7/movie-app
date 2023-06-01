import React, { Component } from 'react';
import styled from 'styled-components';

const Nav = styled.div`
    height:50px;
    background:linear-gradient(170deg,#1bc059,#0d47a1);
    display:flex;
    justify-content:space-between;
    align-items:center;
    position:relative;
`;
const Title = styled.div`
    font-size:30px;
    color:#fff;
    font-weight:600;
    font-family:'Times New Roman',Times,serif;
    text-transform:uppercase;
    margin-left:20px;
    &:hover{color:cyan}
`;
const CartImg = styled.img`
    height:40px;
    margin-right:20px;
`;
const CartIconContainer = styled.div`
    position:relative;
    cursor:pointer;
`;
const CartCount = styled.div`
    background-color: ${(props)=>props.color};
    border-radius:50%;
    padding:4px 8px;
    position:absolute;
    right:10px;
    top:-5px;
    font-size:12px;
    visibility: ${(props)=>props.show?'visible':'hidden'}
`;

export default class Navbar extends Component {
    render() {
        return (
            <Nav> 
                <Title>Movie-App</Title>
                <CartIconContainer>
                    <CartImg alt='cart-icon' src='https://cdn-icons-png.flaticon.com/128/9453/9453946.png' />
                    <CartCount color='yellow' show={true}>6</CartCount>
                </CartIconContainer>
            </Nav>
        )
    }
}

/*const styles = {
    nav:{
        width:'100%',
        height:50,
        background:'blue',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        position:'relative'
    },
    title:{
        fontSize:20,
        color:'#fff',
        fontWeight:600,
        marginLeft:30,
        textTransform:'uppercase',
        fontFamily:'sans-serif , montserrat'
    },
    cartContainer:{
        position:'relative',
        cursor:'pointer'
    },
    cartIcon:{
        height:40,
        marginRight:20
    },
    cartCount:{
        background:'orange',
        borderRadius:'50%',
        padding:'4px 8px',
        position:'absolute',
        right:10,
        top:-5,
        fontSize:12
    }
}*/
