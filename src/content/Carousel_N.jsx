import Carousel from 'react-bootstrap/Carousel';
import img from "../content/Assets/apparels_final.png";
import img1 from "../content/Assets/apparels2.jpg";
import img2 from "../content/Assets/apparels3.jpg";
import Shop from '../Pages/Shop';
import { useNavigate } from 'react-router-dom';
import body from './Body';
import './Carousel.css'

function Carousel_N() {
  const navigate= useNavigate();
  return (
    <Carousel data-bs-theme="dark" id='caro'>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={img}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          {/* <button onClick={()=>navigate("/Body")}>Shop Now</button> */}
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={img1}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel_N;