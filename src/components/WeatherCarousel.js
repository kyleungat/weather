import React, { useEffect, useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import WeatherCard from './WeatherCard';


function WeatherCarousel({ arr, title }) {

    const [number, setNumber] = useState(1);

    useEffect(() => {
        const checkTheSize = () => {
            if (window.innerWidth > 576) {
                setNumber(3);
            }
            else {
                setNumber(1);
            }
        }
        checkTheSize();
        window.addEventListener('resize', checkTheSize);
    }, []);

    if (arr.length === 0) return null;
    const temp = arr.map((element, index) => {
        return (
            <WeatherCard key={index} weather={element} title={title}/>
        );
    });

    let slides = [];
    for (let i = 0; i < arr.length / number; i++) {
        slides.push(
            <Carousel.Item key={i}>
                <div className="weather-carousel-slide">
                    {temp.slice(i*number, (i+1)* number)}
                </div>
            </Carousel.Item>
        );
    }

    return (
        <div className="carousel-container" >
            <h3>{title}</h3>
            <Carousel className="weather-carousel">
                {slides}
            </Carousel>
        </div>
    )
}

export default WeatherCarousel
