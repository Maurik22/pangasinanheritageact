import Link from "next/link";
import ImageAtom from "../atoms/ImageAtom";

export default function HeritageDetailTemplate({ site }) {
  return (
    <article className="detailContent">
      <ImageAtom src={site.image} alt={site.alt} className="detailImage" />
      <div className="detailCopy">
        <p className="tinyLabel">{site.location}</p>
        <h1>{site.name}</h1>
        <p>{site.description}</p>
        <Link className="backLink" href="/heritage/">Back to places</Link>
      </div>
    </article>
  );
}
