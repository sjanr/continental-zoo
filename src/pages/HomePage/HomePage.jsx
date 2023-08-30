import "./HomePage.scss";
import Header from "../../components/Header/Header";

function HomePage() {
  return (
    <>
      <Header />
      <section className="hero">
        <p className="hero__text">Exploring Wildlife, Spanning Continents</p>
      </section>
      <section className="cards">
        <div className="cards__item">
          <div className="cards__item-image-flamingo"></div>
          <div className="cards__item-textContainer">
            <div className="cards__item-context">Plan Your Visit</div>
            <div className="cards__item-description">
              Delve into crucial information about your visit. Explore the
              calendar for event updates, find your way with directions and
              parking details, understand our policies, discover accessibility
              features, and check out operating hours. Your journey towards an
              amazing zoo experience starts here!
            </div>
            <div className="cards__item-hyperlink">PLAN</div>
          </div>
        </div>
        <div className="cards__item">
          <div className="cards__item-image-tiger"></div>
          <div className="cards__item-textContainer">
            <div className="cards__item-context">Exhibits & Experiences</div>
            <div className="cards__item-description">
              Embark on a thrilling journey through the world's wonders with the
              Continental Zoo Explorer Pass. Immerse yourself in the captivating
              realms of wildlife and biodiversity as you gain access to a world
              of adventure, discovery, and excitement.
            </div>
            <div className="cards__item-hyperlink">EXPLORE</div>
          </div>
        </div>
        <div className="cards__item">
          <div className="cards__item-image-polarBear"></div>
          <div className="cards__item-textContainer">
            <div className="cards__item-context">Membership</div>
            <div className="cards__item-description">
              Embark on a Continental Zoo Membership journey now. Recieve a
              one-year admission to our extraordinary wildlife! Delight in
              privileged entry to member-exclusive events, access exclusive
              discounts, and uncover a wealth of special benefits that enrich
              your zoo experience and make memories that last a lifetime.
            </div>
            <div className="cards__item-hyperlink">JOIN NOW</div>
          </div>
        </div>
      </section>
      <section className="description">
        <div className="description__text--header">
          THRILLED TO EXPLORE WILDLIFE WITH YOU
        </div>
        <div className="description__text--subheader">
          Embark on a Journey Across Continents
        </div>
        <div className="description__text--paragraph">
          Continental Zoo stands as a haven for a myriad of captivating
          creatures and awe-inspiring encounters with the world's diverse
          wildlife. Since its inception decades ago, Continental Zoo has united
          more than 50 million individuals from around the globe, inviting them
          to delve into the boundless tapestry of Earth's remarkable
          biodiversity and the treasures it holds.
        </div>
        <div className="description__text--paragraph">
          Guided by an unwavering commitment to achieve the highest standards of
          animal welfare within a cutting-edge facility, Continental Zoo offers
          an immersive and educational expedition for every visitor.
        </div>
      </section>
    </>
  );
}

export default HomePage;
