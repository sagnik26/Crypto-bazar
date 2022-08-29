import React, {useState} from 'react'
import { Select, Typography, Row, Col, Avatar, Card  } from 'antd'
import moment from 'moment'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import { BulbOutlined } from '@ant-design/icons'
import { CircularProgress } from '@mui/material'

const { Text, Title } = Typography;
const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const News = () => {

  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency' });
  console.log(cryptoNews);

  if(isFetching) return (
    <div style={{backgroundColor: 'black'}}>
      <CircularProgress color='secondary' />
    </div>)

  return (
    <div>
     <div className='home'>
     <div style={{marginLeft: '-1.3em'}}><BulbOutlined style={{color: 'white', marginTop:'0.55em'}}/></div>
     <Typography.Title level={5} style={{color:'white', marginLeft:'0.3em', marginTop:'0.2em'}}>NEWS</Typography.Title>
     </div>

     <Row gutter={[24, 24]} className='home-crypto-dash home-row'>
        {cryptoNews.value.map((news, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className="news-card">
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className="news-image-container">
                  <Title className="news-title" level={4}>{news.name}</Title>
                  <img src={news?.image?.thumbnail?.contentUrl || demoImage} style={{maxWidth: '200px', maxHeight:'100px'}} alt="" />
                </div>

                <p>
                  {
                  news.description > 100 
                      ? `${news.description.substring(0,100)}...` 
                      : news.description
                  }
                </p>

                {/* <div className="provider-container">
                    <div>
                        <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="news"/>
                       <Text className='provider-name'>{news.provider[0]?.name}</Text>
                    </div>
                    <Text>{moment(news.dataPublished).startOf('ss').fromNow()}</Text>
                </div> */}

              </a>
            </Card>
          </Col>
        ))}
     </Row>
    </div>
  )
}

export default News
