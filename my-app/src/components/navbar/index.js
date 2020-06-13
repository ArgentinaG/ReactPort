// this index.js will render your code from navbar.js

import React from 'react';
import NavBar from './navbar';


export default class TheNavBar extends React.Component{
    render(){
        return(
           <div>
                <NavBar/>
           </div>
        )
    }
}