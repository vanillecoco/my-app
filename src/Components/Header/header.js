import './header.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1st from './Header_img/christmas (2).jpg';
import img2 from './Header_img/christmas (3).jpg';
import img3 from './Header_img/christmas (2).jpg';

function Headers() {
  return (
    <div className="Headers">
      <header className="Headers">
      <Carousel>
                <div>
                    <img src={img1st} className="carousel_img"/>
                    <p className="legend">mood1</p>
                </div>
                <div>
                    <img src={img2} className="carousel_img"/>
                    <p className="legend">mood2</p>
                </div>
                <div>
                    <img src={img3} className="carousel_img"/>
                    <p className="legend">mood3</p>
                </div>
            </Carousel>
        
      </header>
    </div>
  );
}

export default Headers;