"use client";

import { useState } from "react";
import HeaderNavigation from "../../components/organisms/HeaderNavigation";
import HeritageListingTemplate from "../../components/templates/HeritageListingTemplate";
import SearchForm from "../../components/molecules/SearchForm";
import { heritageSites } from "../../data/heritage";



export default function HeritagePage() {

  const [search, setSearch] = useState("");
  const [shownSites, setShownSites] = useState(heritageSites);

  function doSearch(e) {
    e.preventDefault();

    let word = search.toLowerCase().trim();
    let results = [];

    if (word === "") {
      results = heritageSites;
    } else {

      for (let i = 0; i < heritageSites.length; i++) {

        let one = heritageSites[i];

        if (
          one.name.toLowerCase().includes(word) ||
          one.location.toLowerCase().includes(word) ||
          one.description.toLowerCase().includes(word)
        ) {
          results.push(one);
        }

      }

    }

    setShownSites(results);
  }


  function updateSearch(value) {

    setSearch(value);

    if (value.trim() === "") {
      setShownSites(heritageSites);
    }

  }


  return (
    <>
      <HeaderNavigation />

      <main>

        <section className="directoryHero">

          <p className="tinyLabel">
            CULTURE / HISTORY / NATURE
          </p>

          <h1>
            pangasinan
            <br />
            places.
          </h1>

          <p>
            six destinations from around the province.
          </p>

        </section>


        <HeritageListingTemplate
            sites={shownSites}
            tools={
              <div className="directoryTools">
                <span>{shownSites.length} places</span>
                <SearchForm
                  value={search}
                  onChange={updateSearch}
                  onSubmit={doSearch}
                />
              </div>
            }
          />

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
