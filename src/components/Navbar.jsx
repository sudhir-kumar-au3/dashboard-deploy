import React from 'react';
import styled from 'styled-components';
import {SearchOutlined, FilterList, NotificationsNoneOutlined, Settings} from '@mui/icons-material'

const Container = styled.div`
        height: 70px;
        display: flex;
        align-items: center;
        font-size: 14px;
        /* background-color: coral; */
`

const Wrapper = styled.div`
        width: 100%;
        display: flex;
        align-items: center;
        padding: 20px;
        justify-content: space-between;
`

const Search = styled.div`
        display: flex;
        align-items: center;
        border: 0.5px solid lightgray;
        padding: 5px;
        height: 35px;
        margin-left: 20px;
        border-radius: 10px;
        margin-top: 10px;
        :hover{
            border: 2px solid dodgerblue;
        }
        .searchIcon{
            margin-right: 10px;
            margin-left: 5px;
            font-size: 20px;
            color: #777;
        }
        .filterIcon{
            font-size: 18px;
            margin-right: 5px;
            background-color: lavender;
            cursor: pointer;
            border-radius: 10px;
            height: 30px;
            width: 35px;
            color: #5e35b1;
            :hover{
                background-color: #5e35b1;
                color: white;
            }
        }
        
`

const Input = styled.input`
        width: 300px;
        border: none;
        font-weight:600;
        color: lightgray;
        outline: none;
`

const Items = styled.div`
        display: flex;
        margin-right: 20px;
        color: #5e35b1;
        font-size: 20px;
        margin-top: 10px;
        cursor:pointer;

        .notification{
            margin-left: 9px;
            margin-top: 3px;
            font-weight: 100;
            font-size: 20px;
            
            
        }
        
`
const Not = styled.div`
        height: 30px;
        width: 40px;
        background-color: lavender;
        border-radius: 7px;
        margin-right:40px;
        margin-top: 5px;
        :hover{
                background-color: #5e35b1;
                color:white;
            }
`

const CombineIcon = styled.div`
        background-color: #c0e1fb;
        border-radius: 20px;
        height: 45px;
        width: 90px;
        display: flex;
        justify-content: space-between;
        :hover{
            background-color: dodgerblue;
            color:white;
        }
        .profile{
            margin-top: 2px;
            /* font-weight: 100; */
            margin-left:5px;
        }
        .settings{
            margin-top: 10px;
            font-weight: 100;
            margin-right: 7px;
        }
`

 function Navbar() {
  return (
    <Container>
        <Wrapper>
            <Search>
                <SearchOutlined className = 'searchIcon'/>
                <Input type= "text" placeholder= "Search" />
                <FilterList className='filterIcon'/>
            </Search>
            <Items>
                <Not><NotificationsNoneOutlined  className='notification' /> </Not>
                <CombineIcon>
                    <img className='profile' src='https://library.kissclipart.com/20180919/xae/kissclipart-male-avatar-icon-clipart-computer-icons-avatar-104635e37f6b2f94.png'/>
                    <Settings className='settings'/>
                </CombineIcon>
            </Items>
        </Wrapper>
    </Container>
  )
}

export default Navbar;