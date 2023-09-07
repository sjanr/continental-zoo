import "./HomePage.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

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
              Recieve a one-year admission to our extraordinary wildlife!
              Delight in privileged entry to member-exclusive events, access
              exclusive discounts, and uncover a wealth of special benefits that
              enrich your zoo experience and make memories that last a lifetime.
            </div>
            <div className="cards__item-hyperlink">JOIN NOW</div>
          </div>
        </div>
      </section>
      <section className="info">
        <div className="info__item">
          <div className="info__item-image-koala"></div>
          <div className="info__item-text-container koala-container">
            <div className="info__item-title">Exemplary Animal Welfare</div>
            <div className="info__item-text">
              A dedicated care team comprising professional animal behaviorists,
              zoologists, veterinarians, and dieticians ensures the highest
              standards of animal well-being. Our extensive experience in
              tending to a diverse range of creatures over many years forms the
              foundation of our successful mission, encompassing rescue,
              rehabilitation, and reintegration efforts.
            </div>
          </div>
        </div>
        <div className="info__item">
          <div className="info__item-text-container peacock-container">
            <div className="info__item-title">Globally Acknowledged</div>
            <div className="info__item-text">
              Continental Zoo stands as a global icon of display and
              interpretation excellence. Pioneering the integration of
              professional naturalists and interpretive specialists throughout
              its habitats, it offers unprecedented insight into animal
              behaviors.
            </div>
          </div>
          <div className="info__item-image-peacock"></div>
        </div>
        <div className="info__item">
          <div className="info__item-image-crocodile"></div>
          <div className="info__item-text-container">
            <div className="info__item-title">
              Over 40,000 Rescues and Growing
            </div>
            <div className="info__item-text">
              With round-the-clock availability, our devoted team of animal
              care, veterinary, and animal rescue specialists stands ready to
              respond, every single day of the year. Our dedication to
              safeguarding these remarkable creatures and their environments
              underscores our commitment to you: a visit to Continental Zoo is a
              visit that resonates with purpose.
            </div>
          </div>
        </div>
      </section>
      <div className="description-container">
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
            wildlife. Since its inception decades ago, Continental Zoo has
            united more than 50 million individuals from around the globe,
            inviting them to delve into the boundless tapestry of Earth's
            remarkable biodiversity and the treasures it holds.
          </div>
          <div className="description__text--paragraph">
            Guided by an unwavering commitment to achieve the highest standards
            of animal welfare within a cutting-edge facility, Continental Zoo
            offers an immersive and educational expedition for every visitor.
          </div>
        </section>
      </div>
      <section className="accreditation-container">
        <div className="accreditation">
          <div className="accreditation__header">Accreditation</div>
          <div className="accreditation__text">
            <div className="accreditation__text-title">
              Acclaimed for Exceptional Quality
            </div>
            <div className="accreditation__text-main">
              Continental Zoo willingly participates in periodic accreditation
              evaluations conducted by professional associations. Through this
              voluntary process, we independently validate our commitment to
              upholding, and often exceeding, the industry's established
              benchmarks in animal care, education, conservation, and research.
            </div>
          </div>
          <div className="accreditation__images">
            <div className=" aza"></div>
            <div className="caza"></div>
            <div className="waza"></div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default HomePage;
