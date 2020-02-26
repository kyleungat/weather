import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Search from './components/Search';
import MainViewContainer from './components/MainViewContainer';
import WeatherCarousel from './components/WeatherCarousel';
import WeatherChartContainer from './components/WeatherChartContainer';
import { DataProvider } from './DataContext';
import Modal from 'react-bootstrap/Modal';
import {weatherClass} from './Utilities'

function App() {
  const [cityInfo, setCityInfo] = useState();
  const [oneWeather, setOneWeather] = useState();
  const [todayArr, setTodayArr] = useState([]);
  const [allArr, setAllArr] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [modalContent, setModalContent] = useState([]);
  const [modalLoading, setModalLoading] = useState(false);

  useEffect(() => {
    fetch("https://api.openweathermap.org/data/2.5/forecast?id=1819730&appid=b04d2b7f0315827083da029f225f0993"
    )
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        parseData(jsonData);
      })
      .catch(err => console.log(err));
  }, []);

  const parseData = (data) => {
    setCityInfo({
      lat: data.city.coord.lat,
      lon: data.city.coord.lon,
      country: data.city.country,
      name: data.city.name,
      sunrise: new Date(data.city.sunrise * 1000),
      sunset: new Date(data.city.sunset * 1000),
    });
    setOneWeather(data.list[0]);

    let temp = data.list.filter(element => {
      const date = new Date(element.dt * 1000).toDateString();
      return (date === new Date().toDateString());
    });
    setTodayArr(temp);
    temp = data.list.filter((element, index) => {
      return (index % 8 === 0);
    });
    setAllArr(temp);
  }

  const updateOneWeather = (weather) => {
    setOneWeather(weather);
  }

  const handleSubmit = (value) => {
    setIsShow(true);
    setModalLoading(true);
    fetch(`https://openweathermap.org/data/2.5/find?&q=${value}&type=like&sort=population&cnt=30&appid=b6907d289e10d714a6e88b30761fae22&_=1579186228326`
    )
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        setModalContent(jsonData.list);
        setModalLoading(false);
      })
      .catch(err => setModalContent([]));
  }

  const hanldChoose = (id) => {
    setIsShow(false);
    setModalContent([]);
    fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=b04d2b7f0315827083da029f225f0993`
    )
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        console.log(jsonData);
        parseData(jsonData);
      })
      .catch(err => console.log(err));
  }

  return (
    <>
    <DataProvider value={{
      cityInfo: cityInfo,
      oneWeather: oneWeather,
      allArr: allArr,
      todayArr: todayArr,
      updateOneWeather: updateOneWeather,
    }}>
      <div className={`App ${oneWeather && weatherClass(oneWeather.weather[0].description)}`}>
        <Search submitToApp={handleSubmit} />
        <MainViewContainer />
        <WeatherCarousel arr={todayArr} title="today weather" />
        <WeatherCarousel arr={allArr} title="5 days weather" />
        <WeatherChartContainer />
        <div className="map">
          {cityInfo && <iframe src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14757.015771565273!2d${cityInfo.lon}!3d${cityInfo.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1szh-TW!2shk!4v1581745343950!5m2!1szh-TW!2shk`} width="100%" height="100%" style={{ border: 0 }} ></iframe>}
        </div>
      </div>
    </DataProvider>
    <Modal show={isShow} onHide={() => setIsShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Result</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalLoading? "Loading" 
          :(modalContent.length? modalContent.map((element, index) =>{
            return (
              <div className="modal-result" key={index} onClick={()=> hanldChoose(element.id)}>
                  {`${element.name}, ${element.sys.country} `}
              </div>
            );
        })
        :"No Matched Result")}</Modal.Body>
    </Modal>
    </>
  );
}

export default App;

