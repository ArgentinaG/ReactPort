import React from 'react';
import Header from './header';

import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1 style={{ backgroundColor: "lightblue" }}>Argentina Guerrero</h1>
                <p>Add a little style!.</p>
            </div>
        );
    }
}

ReactDOM.render(<Header />, document.getElementById('root'));
