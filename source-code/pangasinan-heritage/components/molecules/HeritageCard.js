import Link from "next/link";
import ImageAtom from "../atoms/ImageAtom";

export default function HeritageCard({ site }) {
  return (
    <article className="heritageCard">
      <Link className="heritageCardLink" href={`/heritage/${site.slug}/`} prefetch={false} aria-label={`View ${site.name}`}>
        <ImageAtom src={site.image} alt={site.alt} className="heritageImage" />
        <div className="photoShade"></div>
        <div className="photoTitle">
          <span>{site.name.toLowerCase()}</span>
          <span className="titleDivider">|</span>
          <span>{site.location.split(",")[0].toLowerCase()}</span>
        </div>
      </Link>
    </article>
  );
}
