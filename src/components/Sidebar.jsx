import { Dashboard, Key, FontDownloadOutlined, ColorLensOutlined, FormatColorFillOutlined, FilterVintageRounded, Pages, HelpOutlineOutlined } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
        flex: 1;
        background-color: white;
        /* :hover {
            border-right: 1px solid rgb(230, 227, 227);

        } */
`

const Top = styled.div`
        height: 50px;
        display: flex;
        align-items: center;
        /* justify-content: center; */
`

const Logo = styled.span`
        font-size: 18px;
        font-weight: 1000;
        margin-left: 20px;
        cursor: pointer;
        

`

const Middle = styled.div`
        padding-left: 20px;
        ul{
            list-style: none;
            margin: 0;
            padding: 0;
        }

`

const List = styled.li`
    color: #777;
    display:flex;
    align-items: center;
    margin-top: 15px;
    margin-left: 10px;
    padding: 5px;
    border-radius: 10px;
    height: 30px;
    cursor: pointer;
    :hover{
        background-color: lavender;
        color: #5e35b1;
    }
    .icons{
        font-size: 20px;
        margin-right: 15px;

    }
`

const Title = styled.p`    
    font-weight: 600;
    font-size: 15px;
    margin-top: 20px;
    margin-bottom: 10px;

`
const Line = styled.hr`
        margin-top: 20px;
        margin-bottom: 20px;
        border-top: 0.1px solid lightgray;
        border-bottom: none;

`


 function Sidebar() {
  return (
    <Container>
        <Top>
            <Logo>BERRY</Logo>
        </Top>
        <Middle>
            <ul>
                <Title>Dashboard</Title>
                <List>
                <Dashboard className='icons' />
                    Dashboard
                </List> <Line /> 
                <Title>Pages</Title>
                <List>
                    <Key className='icons' />
                    Authentication
                </List> <Line />
                <Title>Utilities</Title>
                <List>
                    <FontDownloadOutlined className='icons' />
                    Typography
                </List>
                <List>
                    <ColorLensOutlined className='icons' />
                    Color
                </List>
                <List>
                    <FormatColorFillOutlined className='icons' />
                    Shadow
                </List>
                <List>
                    <FilterVintageRounded className='icons' />
                    Icons
                </List> <Line />
                <List>
                    <Pages className='icons' />
                    Sample Page
                </List>
                <List>
                    <HelpOutlineOutlined className='icons' />
                    Documentation
                </List>
            </ul>
        </Middle>
    </Container>
  )
}

export default Sidebar;