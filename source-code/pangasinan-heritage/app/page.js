import Link from "next/link";
import HeaderNavigation from "../components/organisms/HeaderNavigation";
import HeritageGrid from "../components/organisms/HeritageGrid";
import { heritageSites } from "../data/heritage";



export default function HomePage() {
  let featured = [];

  for (let i = 0; i < heritageSites.length; i++) {
    if (i < 3) {
      featured.push(heritageSites[i]);
    }
  }

  return (
    <>
      <HeaderNavigation />

      <main>

        <section className="editorialHero">

          <img
            src={`${basePath}${heritageSites[0].image}`}
            alt={heritageSites[0].alt}
            className="editorialHeroImage"
            loading="eager"
          />

          <div className="heroOverlay"></div>

          <div className="editorialHeroTitle">
            <span>hundred islands</span>
            <span className="titleDivider">|</span>
            <span>pangasinan</span>
          </div>

          <div className="scrollText">
            scroll to explore
          </div>

        </section>


        <section className="introEditorial">

          <p className="tinyLabel">
            PANGASINAN / PHILIPPINES
          </p>

          <h1>
            places, stories
            <br />
            and memories.
          </h1>

          <p className="introText">
            A visual showcase of cultural, historical and
            natural destinations found around Pangasinan.
          </p>

        </section>


        <section className="featuredEditorial">

          <div className="editorialHeading">
            <span>selected places</span>

            <Link href="/heritage/">
              view all
            </Link>
          </div>

          <HeritageGrid sites={featured} />

        </section>


        <section className="quoteSection">
          <p>
            explore pangasinan slowly.
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
