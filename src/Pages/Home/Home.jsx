import { React} from "react";
import Carousel from 'react-bootstrap/Carousel';
import C1 from '../Assets/carousel_1.png';
import C2 from '../Assets/carousel_2.png';
import C3 from '../Assets/carousel_3.png';
import men from '../Assets/men.jpg';
import women from '../Assets/women.jpg'
import'./Home.css'


const Home = () => {
  return (
    <div className="outerContainer justify-content-center">
    <div className="carousel-container">
    <Carousel>
      <Carousel.Item interval={1000}> 
        <img className = "carouselImg" src={C2} text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="carouselImg" src= {C1} text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carouselImg" src={C3} text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    <div className="shop-by-category">
          <div className="group">
            <a href="/men"><div className="ellipse"><img src={men}/></div></a>
            <div className="text-wrapper">Men</div>
          </div>
          <div className="group">
            <a href="/women"><div className="ellipse"><img src={women}/></div></a>
            <div className="text-wrapper">Women</div>
          </div>
          <div className="group">
            <div className="ellipse" />
            <div className="text-wrapper">Kids</div>
          </div>
          <div className="group">
            <div className="ellipse" />
            <div className="text-wrapper">Sale</div>
          </div>
    </div>
        <div className="feature-photos">
          <div className="rectangle" />
          <div className="rectangle" />
          <div className="rectangle" />
          <div className="rectangle" />
        </div>          
    </div>
    
  );
}

export default Home;