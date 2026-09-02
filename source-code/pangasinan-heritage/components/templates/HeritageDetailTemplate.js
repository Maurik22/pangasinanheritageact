import ImageAtom from "../atoms/ImageAtom";

export default function HeritageDetailTemplate({ site }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <article className="detailContent">
      <ImageAtom src={site.image} alt={site.alt} className="detailImage" width={site.width} height={site.height} loading="eager" />
      <div className="detailCopy">
        <p className="tinyLabel">{site.location}</p>
        <h1>{site.name}</h1>
        <p>{site.description}</p>
        <a className="backLink" href={`${basePath}/heritage/`}>Back to places</a>
      </div>
    </article>
  );
}
