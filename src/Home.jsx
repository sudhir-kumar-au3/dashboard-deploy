import React from 'react'
import Sidebar from './components/Sidebar';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Widget from './components/Widget';
import {ContentCopySharp, MoreHorizOutlined, OtherHousesOutlined, ShoppingBagOutlined } from '@mui/icons-material';
import Plot from './components/Plot';
import Stocks from './components/Stocks';
const Container = styled.div`
        display: flex;

`
const HomeContainer = styled.div`
        flex: 6;

`

const Dashboard = styled.div`
         
         background-color: #c0e1fb;
         border-radius: 15px;
         margin-left: 15px;
         margin-right: 15px;
         margin-top: 15px;
         margin-bottom : 10px;
`
       
        
const WidgetContainer = styled.div`
        display: flex;
        padding: 20px;
        gap: 20px;
`
const Chart = styled.div`
        display: flex;
`


 function Home() {
  return (
    <Container>
        <Sidebar />
        <HomeContainer>
            <Navbar />
            <Dashboard>
            <WidgetContainer>
            <Widget className = 'first'
            icon = {<ContentCopySharp />}
                    title = '$5000'
                    text =  'Total Earning'
                    rightIcon = {<MoreHorizOutlined />}
             />
            <Widget 
            icon = {<ShoppingBagOutlined />}
                    title = '$961'
                    text =  'Total Orders'
                    rightIcon = {<MoreHorizOutlined />} />
            <Widget className='first'
            icon = {<OtherHousesOutlined  />}
                    title = '$203k'
                    text =  'Total Income'
                    rightIcon = {<MoreHorizOutlined />} />
            </WidgetContainer>
            <Chart>
                <Plot />
                <Stocks />
            </Chart>
            </Dashboard>
            
        </HomeContainer>
    </Container>
  )
}

export default Home;