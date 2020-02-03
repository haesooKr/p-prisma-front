import React, { useState } from 'react';
import { Menu } from './Container/Menu';
import { Buttons } from './Container/Buttons';


const App = () => {
  const [menu, setMenu] = useState('ramens');

  return <div className="app">
    <Buttons update={setMenu.bind(this)}/>
    {/* binding function as prop to child component */}
    <Menu menu={menu}/>
  </div>
}

export default App;
