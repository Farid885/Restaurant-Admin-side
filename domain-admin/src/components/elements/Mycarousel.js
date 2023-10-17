import React from 'react';
import { Carousel } from 'antd';
import Images from '../../assets/Images/Images';
const contentStyle = {
  height: '70vh',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const App = () => (
    <div>
      <h3 style={contentStyle}><img  width={'100%'} height={'100%'} src={Images.Food1}/></h3>
    </div>
);
export default App;