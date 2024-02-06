import "../styles/common.css";
import "../styles/Home.css";
import Navigation from "../scripts/Navigation";
import { Link } from "react-router-dom";
import productImage from "../resources/product_image.jpg";
import chronosphere from "../resources/chronosphere.png";
import futureCity from "../resources/future-city.jpg";
import pastForest from "../resources/past-forest.jpg";
import timelapse from "../resources/timelapse.jpg";
import rome from "../resources/rome.jpg";
import galaxy from "../resources/galaxy.jpg";
import family from "../resources/family.jpg";
import ExploreGrid from "../scripts/Explore-Grid";

/* Content for the Explore-Grid component. */
const items = [
  {
    id: 1,
    image: futureCity,
    imageAlt: "A futuristic city",
    title: "Future Tours",
    subtitle: "See the future of humanity for yourself!",
  },
  {
    id: 2,
    image: pastForest,
    imageAlt: "A prehistoric landscape",
    title: "Prehistoric Tours",
    subtitle: "Experience an age before humanity!",
  },
  {
    id: 3,
    image: rome,
    imageAlt: "A depiction of Rome in ancient times",
    title: "Historic Tours",
    subtitle: "See the wonders of ancient civilisations in their primes!",
  },
  {
    id: 4,
    image: timelapse,
    imageAlt: "A scene of a city being rapidly built up and torn down",
    title: "Timelapse Tours",
    subtitle: "Watch the history of the Earth unfold before your eyes!",
  },
  {
    id: 5,
    image: galaxy,
    imageAlt: "A galaxy being created",
    title: "Cosmic Tours",
    subtitle: "Drift in the serene ocean of space and time!",
  },
  {
    id: 6,
    image: family,
    imageAlt: "A family gasping in wonder",
    title: "Custom Tours",
    subtitle: "See what YOU want to see!",
  },
];

/* Basic React component for the homepage. */

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="Home">
        <div className="Home__hero">
          <img
            className="Hero__image"
            src={productImage}
            alt="The ChronoSphere time travel machine"
          />
          <img
            src={chronosphere}
            alt="ChronoSphere logo"
            className="Hero__logo"
          />
          <div className="Hero__text-content">
            <h1 className="Hero__title">ChronoSphere Time Tours</h1>
            <p className="Hero__subtitle">
              The best time travel agency in the universe!
            </p>
          </div>
        </div>
        <div className="Info-Box">
          <div className="Info-Box__text-content">
            <p>
              Welcome to ChronoSphere Time Tours, the best time travel agency in
              the universe! With our state-of-the-art ChronoSphere time machine,
              you can travel to any point in history or the future. Our expert
              guides will ensure that you have a safe and enjoyable experience
              as you explore the wonders of the space-time continuum.
            </p>
          </div>
          <span className="Info-Box__disclaimer">
            *We are not responsible for any injuries, illnesses, or deaths that
            may occur during your tour. We are also not responsible for any
            changes to the timeline that may occur as a result of your actions,
            including but not limited to interactions with your own ancestors,
            "butterfly effects" from supposedly innocuous actions, and
            back-propogating timeline changes as a result of booking your ticket
            in the first place. Please read our{" "}
            <Link to="/policies">Policies</Link> page for more information.
          </span>
        </div>
        <ExploreGrid items={items} />
      </div>
    </>
  );
}
