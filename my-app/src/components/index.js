// You will render all components on this file - this file will be the layout for your code

import React from'react';

import TheNavBar from './navbar/index';

export default class Main extends React.Component{
    render(){
        return(
            <div>
                <TheNavBar/>
                {/* <p>Hello I was edited in the index file not the app.js file</p> */}
            </div>
        )
    }
}