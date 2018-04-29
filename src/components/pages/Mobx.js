import React from "react";
import { render } from "react-dom";
import { observer } from "mobx-react";

import {
  decorate,
  observable,
  flow,
  set,
  keys,
  onBecomeObserved,
  onBecomeUnobserved
} from "mobx";

const APPID = "<select>";
const UPDATE_INTERVAL = 5000;

export class City {
  constructor(location) {
    this.location = location;
    // only start data fetching if temperature is actually used!
    onBecomeObserved(this, "temperature", this.resume);
    onBecomeUnobserved(this, "temperature", this.suspend);
  }

  resume() {
    this.interval = setInterval(() => this.fetchTemperature(), UPDATE_INTERVAL);
  }

  suspend() {
    this.temperature = undefined;
    clearInterval(this.interval);
  }

  async fetchTemperature() {
    const res = await window.fetch(
      `https://api.openweathermap.org/data/2.5/weather?appid=${APPID}&q=${
        this.location
      }`
    );
    const json = await res.json();
    if (json.cod === 429) {
      this.temperature = Math.round(Math.random() * 50 - 10);
      return;
    }
    try {
      this.temperature = Math.round(json.main.temp - 273.15);
    } catch (e) {
      this.temperature = "Sry, error" + e;
    }
  }
}
// Decorate without decorate syntax!
decorate(City, {
  location: observable,
  temperature: observable
});

const PAGE_SIZE = 2;

const CityView = observer(({ city }) => (
  <li>
    City: {city.location} - Temperature in ℃: {city.temperature || "Loading"}
  </li>
));

const App = observer(
  class App extends React.Component {
    constructor() {
      super();
      this.page = 0;
      this.cities = {};
    }

    componentDidMount() {
      ["Amsterdam", "London", "Boston", "Tel Aviv", "Delhi"].map(name =>
        this.addCity(name)
      );
    }

    render() {
      const names = keys(this.cities);
      return (
        <div>
          <h2>Start paging to see some magic happen {"\u2728"}</h2>
          <ul>
            {names
              .slice(this.page * PAGE_SIZE, (1 + this.page) * PAGE_SIZE)
              .map(key => <CityView key={key} city={this.cities[key]} />)}
          </ul>
          <br />
          <button onClick={this.prev}>◀</button>
          {"  "}City {1 + this.page * PAGE_SIZE} -{" "}
          {Math.min((1 + this.page) * PAGE_SIZE, names.length)} of{" "}
          {names.length} <button onClick={this.next}>▶</button>
          {"  "}Add: <input onBlur={e => this.addCity(e.target.value)} />
          <small> (Blur to add)</small>
          <hr />
        </div>
      );
    }

    addCity(name) {
      if (!name) return;
      // New in MobX 4: dynamically add values
      set(this.cities, name, new City(name));
    }

    prev() {
      if (this.page > 0) this.page--;
    }

    next() {
      if ((1 + this.page) * PAGE_SIZE < keys(this.cities).length) this.page++;
    }
  }
);
decorate(App, { page: observable, cities: observable });

export default App;
