import "../styles/common.css";
import "../styles/Home.css";
import Navigation from "../scripts/Navigation";
import { Link } from "react-router-dom";
import productImage from "../resources/product_image.jpg";
import futureCity from "../resources/future-city.jpg";
import pastForest from "../resources/past-forest.jpg";
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
    image: futureCity,
    imageAlt: "A futuristic city",
    title: "Future Tours",
    subtitle: "See the future of humanity for yourself!",
  },
  {
    id: 4,
    image: pastForest,
    imageAlt: "A prehistoric landscape",
    title: "Prehistoric Tours",
    subtitle: "Experience an age before humanity!",
  },
  {
    id: 5,
    image: futureCity,
    imageAlt: "A futuristic city",
    title: "Future Tours",
    subtitle: "See the future of humanity for yourself!",
  },
  {
    id: 6,
    image: pastForest,
    imageAlt: "A prehistoric landscape",
    title: "Prehistoric Tours",
    subtitle: "Experience an age before humanity!",
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
              the universe! We offer a wide variety of tours to suit your needs,
              from the prehistoric era to the far future. Our tours are safe,
              fun, and educational. We guarantee* that you will have the time of
              your life!
            </p>
            <p>
              To get started, click on the "Tours" button in the navigation bar
              above.
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
