import React from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Row, Col, Card } from 'antd'
import { useGetCryptosQuery } from '../services/cryptoApi'
import { MoneyCollectOutlined } from '@ant-design/icons'
import { Typography } from 'antd'
import { CircularProgress } from '@mui/material'


const Cryptocurrencies = () => {

  const { data: cryptosList, isFetching } = useGetCryptosQuery();
  const cryptos =  cryptosList?.data?.coins;
  // console.log(cryptos);
  if(isFetching) return (
    <div style={{backgroundColor: 'black'}}>
      <CircularProgress color='secondary' />
    </div>)

  return (
    <>
     <div className='home'>
     <div style={{marginLeft: '-1.3em'}}><MoneyCollectOutlined style={{color: 'white', marginTop:'0.55em'}}/></div>
     <Typography.Title level={5} style={{color:'white', marginLeft:'0.3em', marginTop:'0.2em'}}>CRYPTOCURRENCIES</Typography.Title>
     </div>

     <Row gutter = {[32,32]} className='home-crypto-dash' >
              {
                cryptos?.map((currency) => (
                  <Col xs={34} sm={22} className="crypto-card" key={currency.uuid}>
                      {/* <Link to={`/crypto/${currency.uuid}`}> */}
                            <Card 
                                  className='card'
                                  hoverable
                                  style={{backgroundColor: 'black', color: 'white', border: 'none'}}
                                  >
                              <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '1.1rem' }}>
                                  {<img className='crypto-image' src={currency.iconUrl} />}
                                  <p><span style={{textShadow: '0 0 2px #fff, 0 0 4px #fff'}}>{currency.name}</span></p>
                                  <p><span style={{textShadow: '0 0 2px #fff, 0 0 4px #fff'}}> Price </span> :  <span style={{color: 'green'}}>{millify(currency.price)} USD </span></p>
                                  <p><span style={{textShadow: '0 0 2px #fff, 0 0 4px #fff'}}> Market cap </span> :   <span style={{color: 'green'}}>{millify(currency.marketCap)} </span></p>
                                  <p><span style={{textShadow: '0 0 2px #fff, 0 0 4px #fff'}}> daily change </span> :   {millify(currency.change)}%</p>
                              </div>
                            </Card>
                      {/* </Link> */}
                 </Col>
                ))
              }
          </Row>
      
    </>
  )
}

export default Cryptocurrencies
