import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import carousel1 from '../../images/carousel_1.jpg';
import carousel2 from '../../images/carousel_2.jpg';


function ImageCarousel() {
    return(
        <Carousel>
            <div>
                <img src={carousel1} />
                <p className="legend">“So many books, so little time.”</p>
            </div>
            <div>
            <img src={carousel2} />
                <p className="legend">“If we are to preserve culture we must continue to create it.” – Johan Huizinga.</p>
            </div>
        </Carousel>
    );

}
export default ImageCarousel;