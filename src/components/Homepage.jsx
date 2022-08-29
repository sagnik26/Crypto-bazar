import React from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Typography, Row, Col, Statistic } from 'antd'
import { HomeOutlined } from '@ant-design/icons'
import { useGetCryptosQuery } from '../services/cryptoApi'
import { CircularProgress } from '@mui/material'

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery();
  const globalStats = data?.data?.stats;
  console.log(data);
  if(isFetching) return (
    <div style={{backgroundColor: 'black'}}>
      <CircularProgress color='secondary' />
    </div>)

  return (
    <div>
      <div className='home'>
        <div style={{marginLeft: '-1.3em'}}><HomeOutlined style={{color: 'white', marginTop:'0.5em'}}/></div>
        <Typography.Title level={5} style={{color:'white', marginLeft:'0.3em', marginTop:'0.2em'}}>HOME</Typography.Title>
      </div>

      <div className='globalStats'>
        {/* <Typography.Title level={2} style={{color: 'white'}}>Global Crypto Stats</Typography.Title> */}
        <Row className='globalstat-row'>
            <Col span={12}>
              <div className='glob'>
                <Typography.Title level={2} style={{color: 'rgb(129, 64, 199)'}}>Total cryptocurrencies</Typography.Title >
                {globalStats.total}
              </div>
            </Col>
            <Col span={12}>
              <div className='glob'>
                <Typography.Title level={2} style={{color: 'rgb(129, 64, 199)'}}>Total Exchanges</Typography.Title>
                {millify(globalStats.totalExchanges)}
              </div>
            </Col>
            <Col span={12}>
              <div className='glob'>
                <Typography.Title level={2} style={{color: 'rgb(129, 64, 199)'}}>Total Market cap</Typography.Title>
                {millify(globalStats.totalMarketCap)} USD
              </div>
            </Col>
            <Col span={12}>
              <div className='glob'>
                <Typography.Title level={2} style={{color: 'rgb(129, 64, 199)'}}>Total 24h Volume</Typography.Title>
                {millify(globalStats.total24hVolume)} USD
              </div>
            </Col>
            <Col span={12}>
              <div className='glob'>
                <Typography.Title level={2} style={{color: 'rgb(129, 64, 199)'}}>Total Markets</Typography.Title>
                {millify(globalStats.totalMarkets)}
              </div>
            </Col>
        </Row>
      </div>
      
    </div>
  )
}

export default Homepage
