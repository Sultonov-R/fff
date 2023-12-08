import React from "react";
import "./App.css";
import InputTitle from "./components/input";
import Dropdown from "./components/dropdowns/dropdown";
import Explained from "./components/izoh/explain";
import Button from "./components/buttons/button";

function App() {
  return (
    <>
      <div className="wrapper">
        <h1>Vakansiya yaratish</h1>
        <p>Yangi Vakansiya uchun ma'lumotlar</p>
        <div className="title">
          <h4>Sarlavha</h4>
          <InputTitle />
        </div>
        <div className="dropdowns">
          <div>
            <h4>Ariza topshirish muddati</h4>
            <Dropdown />
          </div>
          <div>
            <h4>Ariza topshirish muddati</h4>
            <Dropdown />
          </div>
          <div>
            <h4>Ariza topshirish muddati</h4>
            <Dropdown />
          </div>
        </div>

        <div className="country-city dropdowns">
          <div className="countries-title">
            <h4>Davlat</h4>
            <Dropdown />
          </div>

          <div className="city-title">
            <h4>Shahar</h4>
            <Dropdown />
          </div>
        </div>

        <div className="country-city dropdowns">
          <div className="languages">
            <h4>Til</h4>
            <Dropdown />
          </div>

          <div className="level">
            <h4>Darajasi</h4>
            <Dropdown />
          </div>
        </div>

        <div className="title">
          <h4>Soha</h4>
          <InputTitle />
        </div>
        <div className="title">
          <h4>Ko'nikmalar</h4>
          <InputTitle />
        </div>

        <div className="country-city dropdowns">
          <div className="languages">
            <h4>Minimal maosh</h4>
            <Dropdown />
          </div>

          <div className="level">
            <h4>Maxsimal maosh</h4>
            <Dropdown />
          </div>
        </div>

        <form>
          <label htmlFor="Kelishiladi">Kelishiladi</label>
          <input className="checker" type="checkbox" />
        </form>

        <div className="country-city dropdowns">
          <div className="languages">
            <h4>Maosh muddati</h4>
            <Dropdown />
          </div>

          <div className="level">
            <h4>Valyute</h4>
            <Dropdown />
          </div>
        </div>

        <div className="country-city dropdowns">
          <div className="languages">
            <h4>Ta'lim darajasi</h4>
            <Dropdown />
          </div>

          <div className="level">
            <h4>Tajriba</h4>
            <Dropdown />
          </div>
        </div>

          <div>
            <h4>Izoh</h4>
            <Explained />
          </div>

          <div className="buttons">
            <Button className='back' />
            <Button className= 'forward' />
          </div>

      </div>
    </>
  );
}

export default App;
