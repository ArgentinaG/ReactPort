import React from 'react';
import Card from 'react-bootstrap/Card';


export default class Portfolio extends React.Component{
    render(){
        return(
            <div >
                <Card className="bg-dark text-white">
  <Card.Img src="https://images.unsplash.com/photo-1591715458056-ee013264ffa5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="Card image" />
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