<<<<<<< HEAD
import ImageAtom from "../atoms/ImageAtom";

export default function HeritageCard({ site }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <article className="heritageCard">
      <a className="heritageCardLink" href={`${basePath}/heritage/${site.slug}/`} aria-label={`View ${site.name}`}>
        <ImageAtom src={site.image} alt={site.alt} className="heritageImage" width={site.width} height={site.height} />
=======
import Link from "next/link";
import ImageAtom from "../atoms/ImageAtom";

export default function HeritageCard({ site }) {
  return (
    <article className="heritageCard">
      <Link className="heritageCardLink" href={`/heritage/${site.slug}/`} prefetch={false} aria-label={`View ${site.name}`}>
        <ImageAtom src={site.image} alt={site.alt} className="heritageImage" />
>>>>>>> 82ec4e7b903b8119eacdf577fec87d5276d2840a
        <div className="photoShade"></div>
        <div className="photoTitle">
          <span>{site.name.toLowerCase()}</span>
          <span className="titleDivider">|</span>
          <span>{site.location.split(",")[0].toLowerCase()}</span>
        </div>
<<<<<<< HEAD
      </a>
=======
      </Link>
>>>>>>> 82ec4e7b903b8119eacdf577fec87d5276d2840a
    </article>
  );
}
