import React from 'react';
import Card from 'react-bootstrap/Card';


export default class Home extends React.Component{
    render(){
        return(
            <div >
                <Card className="bg-dark text-white">
  <Card.Img src="https://images.unsplash.com/photo-1591713354867-eb283f80aecc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQ3MzMyfQ&auto=format&fit=crop&w=800&q=60" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      {/* Type About Me Here - It will appear with an image background */}
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card>
            </div>
        )
    }
}