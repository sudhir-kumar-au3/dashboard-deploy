import React from 'react';
import styled from 'styled-components';
import {MoreHorizOutlined} from '@mui/icons-material';

const Container = styled.div`
        flex: 2;
        padding: 20px;
        background-color: white;
        border-radius: 15px;
        margin-left: 20px;
        margin-right: 20px;
        margin-bottom:25px;
`
 
const Heading = styled.div`
        margin-top: 10px;
        margin-bottom: 30px;
        .icon{
            float:right;
            cursor: pointer;
            color: dodgerblue;
        }
        .title{
            float:left;
            font-size: 20px;
            font-weight: 500;
            margin-left: 20px;
        }
`
const List = styled.ul`
        list-style: none;
        margin: 0;
        padding: 0;
        .names{
            margin-left:20px;
        }
        
    
    
        
`
const Content = styled.div`
        align-items: center;
        .company{
            float:left;
        }
        .price{
            float:right;
            margin-top:30px;
        }

`
const Des = styled.p`
        font-size: 12px;
        margin-left:20px;
        color: red;
`
const Line = styled.hr`
        margin-top: 20px;
        margin-bottom: 20px;
        border-top: 0px solid lightgray;
        border-bottom: 0px;
`

 function Stocks() {
  return (
    <Container>
    <Heading>
        <p className='title'>Popular Stocks</p>
        <MoreHorizOutlined className = 'icon'/>
    </Heading><br />
    <Content>
    <List className='company'>
        <li className='names'>Bajaj Finery</li>
        <Des style = {{color:'green'}}>10% profit</Des> <Line />
        <li className='names'>TTML</li>
        <Des>10% loss</Des> <Line />
        <li className='names'>Reliance</li>
        <Des style = {{color:'green'}}>10% profit</Des> <Line />
        <li className='names'>TTML</li>
        <Des>10% loss</Des> <Line />
        <li className='names'>StolonS</li>
        <Des>10% loss</Des> <Line />
    </List>
    <List className='price'>
        <li className='names'>$1234.00</li> <Line />
        
        <li className='names'>$100.00</li> <Line />
        
        <li className='names'>$200.00</li> <Line />
       
        <li style = {{marginTop:'20px'}} className='names'>$180.00</li> <Line />
        
        <li style = {{marginTop:'40px'}}  className='names'>$180.00</li> <Line />
    </List>
    </Content>
    </Container>
  )
}

export default Stocks;