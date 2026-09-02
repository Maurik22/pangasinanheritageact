import HeritageGrid from "../organisms/HeritageGrid";

export default function HeritageListingTemplate({ sites, tools }) {
  return (
    <section className="directoryContent">
      {tools}
      <HeritageGrid sites={sites} />
    </section>
  );
}
