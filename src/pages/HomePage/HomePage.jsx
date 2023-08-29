import "./HomePage.scss";
import Header from "../../components/Header/Header";

function HomePage() {
  return (
    <>
      <Header />
      <section className="hero">
        <p className="hero__text">Exploring Wildlife, Spanning Continents</p>
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
