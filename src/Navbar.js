import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div style={styles.nav}> 
                <div style={styles.title}>Movie-App</div>
                <div style={styles.cartContainer}>
                    <img alt='cart-icon' src='https://cdn-icons-png.flaticon.com/128/9453/9453946.png' style={styles.cartIcon}/>
                    <span style={styles.cartCount}>0</span>
                </div>
            </div>
        )
    }
}

const styles = {
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
}
