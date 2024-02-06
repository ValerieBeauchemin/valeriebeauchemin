import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Explore-Grid.css";

/* A responsive grid component that renders a list of items with a grid of images and text. */

AOS.init({
  duration: 800,
  anchorPlacement: "center-bottom",
});

export default function ExploreGrid(props) {
  const { items } = props;
  return (
    <div className="Explore-Grid">
      {items.map((item, i) => (
        <div
          key={item.id}
          className="Explore-Grid__item"
          style={{ backgroundImage: `url(${item.image})` }}
          data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
        >
          <div className="Explore-Grid-Item__text-content">
            <h2 className="Explore-Grid-Item__title">{item.title}</h2>
            <p className="Explore-Grid-Item__subtitle">{item.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
