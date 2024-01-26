/* Basic React component for the homepage. */

export default function Home() {
  return (
    <div className="Home">
      <header className="Home__title">ChronoSphere</header>
      <p className="Home__subtitle">Time Tours</p>
      <div className="Home__text-content">
        <p>
          Welcome to ChronoSphere Time Tours, the best time travel agency in the
          universe! We offer a wide variety of tours to suit your needs, from
          the prehistoric era to the far future. Our tours are safe, fun, and
          educational. We guarantee that you will have the time of your life!
        </p>
        <p>
          To get started, click on the "Tours" button in the navigation bar
          above.
        </p>
      </div>
    </div>
  );
}
