// You will render all components on this file - this file will be the layout for your code

import React from'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import TheNavBar from './navbar/index';

export default class Main extends React.Component{
    render(){
        return(
            <div>
                <TheNavBar/>
             
            </div>
        )
    }
}