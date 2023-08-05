import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState();
  const MY_KEY = "cMaNNHPRW1y1jeNtKec1MuyUIM7UwRTIjfgeMYfc";

  const fetchImageOfMars = () => {
    fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=${MY_KEY}`
    ).then((res) =>
      res
        .json()
        .then((fetchedData) => setData(fetchedData.latest_photos[0]))
        .catch((error) => console.log(error.message))
    );
  };

  useEffect(() => {
    fetchImageOfMars();
  }, []);

  return (
    <div class="flex-container">
      <div class="flex-items">
        <h1 className="naslov">Mars Rover Photo by KPortfolio</h1>
      </div>
      {data ? (
        <div class="flex-items">
          <div className="left">
            <img
              className="picture"
              src={data.img_src}
              alt="pictur of the mars"
            ></img>
          </div>
          <div className="right">
            <p>
              Photo captured on <b>{data.sol}</b> sol , <i>vice versa </i>
              <b>{data.earth_date}</b>.
            </p>
            <p>
              Camera name: <b>{data.camera.name}</b>
            </p>
            <p>
              Camera full name: <b>{data.camera.full_name}</b>
            </p>
            <p>
              Rover name: <b>{data.rover.name}</b>
            </p>
          </div>
        </div>
      ) : (
        <p>Waiting for the data...</p>
      )}
      <footer>
        <p className="copyright">
          &copy; Copyright {new Date().getFullYear()} by{" "}
          <a
            href="https://creative-dusk-0dd829.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            KPortfolio
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
