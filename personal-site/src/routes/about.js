import "../styles/common.css";
import Navigation from "../scripts/Navigation";
import LogoGradient from "../scripts/Logo-Gradient";
import "../styles/About.css";

/* React component for the about page. */
export default function About() {
  return (
    <div>
      <Navigation />
      <div
        className="About"
        style={{
          backgroundImage: `url(${require("../resources/background.jpg")})`,
        }}
      >
        <div className="About__logo">
          <LogoGradient />
        </div>
        <h1 className="About__title">About ChronoSphere</h1>
        <p className="About__text">
          Embark on a journey through time with ChronoSphere, where history
          isn't just something you read about—it's where you go for vacation! At
          ChronoSphere, we pride ourselves on being the pioneers of temporal
          tourism, offering exclusive tours to the past and future that promise
          not just a trip, but an adventure of a lifetime. Founded by a team of
          visionary scientists, historians, and thrill-seekers, we've harnessed
          the power of time travel to open up the annals of history and the
          mysteries of the future to the curious and the brave. Our mission is
          simple: to provide an unforgettable journey through the ages, where
          you can witness history unfold, explore the future, and return with
          stories that defy time itself. Join us on an unparalleled exploration
          where time is not a barrier, but a destination.
        </p>
        <h2 className="About__subtitle">Our Team</h2>
        <p className="About__text">
          In a world bound by the relentless march of time, three extraordinary
          minds dared to dream differently. Dr. Ada Quantum, Professor Leo
          Chronos, and Madeline Tempus are the visionary founders behind
          ChronoSphere, the first company to turn the pages of history and the
          future into destinations. United by their passion for exploration,
          innovation, and the occasional paradox, this trio has rewritten the
          rules of reality.
        </p>
        <p className="About__text">
          Dr. Ada Quantum, with her groundbreaking work in quantum mechanics and
          temporal physics, cracked the code to safe and reliable time travel.
          Her genius lies in creating the ChronoSphere machine, a marvel of
          technology that navigates the complex currents of the time-space
          continuum.
        </p>
        <p className="About__text">
          Professor Leo Chronos, a renowned historian and the moral compass of
          the team, ensures that each tour is not only educational but also
          ethical. His deep understanding of historical events and cultures
          guarantees that ChronoSphere's journeys respect the past while
          celebrating its richness.
        </p>
        <p className="About__text">
          Madeline Tempus, the fearless adventurer and CEO, brings the dream of
          time travel to the public. With her unmatched charisma and business
          acumen, she's the driving force behind ChronoSphere's mission to offer
          once-in-a-lifetime experiences. Her leadership has catapulted the
          company into the forefront of the adventure tourism industry.
        </p>
        <p className="About__text">
          Together, these founders have created more than just a company;
          they've opened a gateway to the wonders of the universe. At
          ChronoSphere, they invite you to step beyond the present, to explore
          the uncharted territories of time, and to become a part of history
          itself.
        </p>
      </div>
    </div>
  );
}
