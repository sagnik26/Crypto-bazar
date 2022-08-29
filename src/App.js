import React from 'react'
import './App.css'
import { Route, Routes, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'

import { Cryptocurrencies, Navbar, Homepage, News } from './components/exportComponents'

const App = () => {
  return (
    <div className='background'>
    <div className='content'>
      <div className='app'>
        <div className='navbar'>
          <Navbar />
        </div>

        <div className='main'>
          <Layout>
            <div className='routes'>
              <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/cryptocurrencies' element={<Cryptocurrencies />} />
                <Route path='/news' element={<News />} />
              </Routes>
            </div>
          </Layout>
        </div>
      </div>
    </div>
    </div>
  )
}


export default App