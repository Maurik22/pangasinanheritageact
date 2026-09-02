import Link from "next/link";
import ImageAtom from "../atoms/ImageAtom";

export default function HeritageDetailTemplate({ site }) {
  return (
    <article className="detailContent">
      <ImageAtom src={site.image} alt={site.alt} className="detailImage" width={site.width} height={site.height} loading="eager" />
      <div className="detailCopy">
        <p className="tinyLabel">{site.location}</p>
        <h1>{site.name}</h1>
        <p>{site.description}</p>
        <Link className="backLink" href="/heritage/" prefetch={false}>Back to places</Link>
      </div>
    </article>
  );
}
