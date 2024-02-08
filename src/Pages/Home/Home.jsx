import { React} from "react";
import Carousel from 'react-bootstrap/Carousel';
import C1 from '../Assets/carousel_1.png';
import C2 from '../Assets/carousel_2.png';
import C3 from '../Assets/carousel_3.png';
import'./Home.css'
import Footer from "../Footer/footer";

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
    <Footer/>
    </div>

    
  );
}

export default Home;