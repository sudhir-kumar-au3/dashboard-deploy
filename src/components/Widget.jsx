import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
        display:flex;
        flex: 1;
        padding: 20px;
        justify-content: space-between;
        -webkit-box-shadow: 0px 6px 14px -9px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 6px 14px -9px rgba(0,0,0,0.75);
         box-shadow: 0px 6px 14px -9px rgba(0,0,0,0.75);
         height: 150px;
         border-radius: 15px;
         background-color: #5e35b1;
`

const Left = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`

const Right = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`

const Icon = styled.div`
        height: 50px;
        width: 50px;
        border-radius: 10px;
        background-color: #512ea9;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        cursor: pointer;
        
`
// const styleIcon = styled.div`
//         margin-top: 10px;
//         margin-left: 2px;
// `
const Title = styled.h1`
        color: white;
        font-weight: 1000;
`

const Text = styled.p`
        color: white;
        font-size: 18px;
        font-weight: 500;
`

const RightIcon = styled.div`
        height: 40px;
        width: 40px;
        border-radius: 10px;
        background-color: #646FD4;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        cursor: pointer;
`

 function Widget(props) {
  return (
    <Container>
        <Left>
        <Icon>
            {props.icon}
        </Icon>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
        </Left>
        <Right>
            <RightIcon>
                {props.rightIcon}
            </RightIcon>
        </Right>
    </Container>
  )
}

export default Widget;