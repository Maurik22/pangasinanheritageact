import { notFound } from "next/navigation";
import HeaderNavigation from "../../../components/organisms/HeaderNavigation";
import HeritageDetailTemplate from "../../../components/templates/HeritageDetailTemplate";
import { heritageSites } from "../../../data/heritage";

export function generateStaticParams() {
  return heritageSites.map((site) => ({ slug: site.slug }));
}

export default function HeritageDetailPage({ params }) {
  const site = heritageSites.find((item) => item.slug === params.slug);

  if (!site) {
    notFound();
  }

  return (
    <>
      <HeaderNavigation />
      <main>
        <HeritageDetailTemplate site={site} />
      </main>
    </>
  );
}
