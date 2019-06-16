import React, {Component} from 'react';
import Card from '../Components/Home/Card/card';
import '../Assets/Container/Home/home.css';

class Home extends Component {

  render () {
    return (
      <Card
        altImg = "Img"
        classCard = "card"
        img = "/static/img/house.jpg"
        heightImg = "140"
        text = "texto"
        />
    );
  }

}

export default Home;
