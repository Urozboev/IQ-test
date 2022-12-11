import React from 'react';
import Navbar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'antd';

function App() {
  return (
    <div>
      Hello
      <h6>Vercelga deploy qilindi</h6>
      <Button type='primary'>Click</Button>
      <Navbar />
    </div>
  )
}

export default App

