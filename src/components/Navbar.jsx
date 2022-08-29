import React from 'react'
import { Button, Menu, Typography, Avatar, Space } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined  } from '@ant-design/icons'
import icon from '../images/cryptocurrency.png'


const Navbar = () => {
  return (
    <div>
      <div className='nav-container'>
        <div className='logo-container'>
          <img src={icon} size='large' className='top-icon' />
          <Typography.Title level={4} className='logo'>
              <Link to='/'>
                <div className='neontext-crypto'>CRYPTO</div>
                <div className='neonText-stats'>BAZAR</div>
              </Link>
          </Typography.Title>
        </div>

        
        <ul className='menu'>
          <li className='menu-item'>
            <Link to = "/" className='icon-nav'>
              {<HomeOutlined />}
            </Link>
          </li>

          <li className='menu-item'>
            <Link to = "/cryptocurrencies" className='icon-nav'>
              {<MoneyCollectOutlined  />}
            </Link>
          </li>

          <li className='menu-item'>
            <Link to = "/news" className='icon-nav'>
              {<BulbOutlined  />}
            </Link>
          </li>
         
        </ul>
      </div>
    </div>
  )
}

export default Navbar
