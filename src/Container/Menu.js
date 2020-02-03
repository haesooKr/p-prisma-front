import React from 'react'
import { Ramens } from '../API/Ramens/Ramens';
import Meals from '../API/Meals';
import Snacks from '../API/Snacks';
import Beverages from '../API/Beverages';

export const Menu = ( { menu } ) => {
  if(menu === "ramens"){
    return <div className="ramens">
      <Ramens/>
    </div>
  } else if(menu === "meals"){
    return <div className="meals">
      <Meals/>
    </div>
  } else if(menu === "snacks"){
    return <div className="snacks">
      <Snacks/>
    </div>
  } else {
    return <div className="beverages">
      <Beverages/>
    </div>
  }
}
