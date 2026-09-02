import HeritageCard from "../molecules/HeritageCard";

export default function HeritageGrid({ sites }) {
  if (!sites.length) {
    return (
      <p className="emptyState">
        No heritage sites matched your search.
      </p>
    );
  }

  let cards = [];

  for (let i = 0; i < sites.length; i++) {
    let site = sites[i];

    cards.push(
      <HeritageCard
        key={site.id}
        site={site}
      />
    );
  }

  return (
    <section className="heritageGrid" aria-live="polite">
      {cards}
    </section>
  );
}
