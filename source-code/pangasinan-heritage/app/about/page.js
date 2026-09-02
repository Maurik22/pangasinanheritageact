import HeaderNavigation from "../../components/organisms/HeaderNavigation";



export default function AboutPage() {
  return (
    <>
      <HeaderNavigation />

      <main>

        <section className="aboutHero">

          <p className="tinyLabel">
            ABOUT PANGASINAN
          </p>

          <h1>
            stories shaped
            <br />
            by place.
          </h1>

          <p className="aboutLead">
            Pangasinan is a province filled with coastal landscapes,
            historic landmarks, religious sites and communities that
            continue to shape its identity and culture.
          </p>

        </section>


        <section className="storySection">

          <div className="storyNumber">
            01
          </div>

          <div className="storyContent">

            <p className="tinyLabel">
              THE PROVINCE
            </p>

            <h2>
              from the coast
              <br />
              to the towns.
            </h2>

            <p>
              From the Hundred Islands in Alaminos and the lighthouse
              of Bolinao to museums, churches and local landmarks,
              Pangasinan has many places that tell different stories
              about the province.
            </p>

          </div>

        </section>


        <section className="storySection">

          <div className="storyNumber">
            02
          </div>

          <div className="storyContent">

            <p className="tinyLabel">
              THE SHOWCASE
            </p>

            <h2>
              a small collection
              <br />
              of pangasinan.
            </h2>

            <p>
              This digital showcase presents selected destinations
              around Pangasinan through photography and simple
              descriptions. It gives visitors a quick look at places
              they may want to discover and learn more about.
            </p>

          </div>

        </section>


        <section className="quoteSection">
          <p>
            see pangasinan
            differently.
          </p>
        </section>

      </main>


      <footer className="footer">

        <span>
          pangasinan heritage digital showcase
        </span>

        <span>
          2026
        </span>

      </footer>

    </>
  );
}
