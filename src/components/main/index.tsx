import HeroBanner from "@/components/hero-banner";
import SideBar from "@/components/sidebar";
import Container from "@/components/container";

export default function Main({
  children,
  media,
  lang,
}: {
  children: React.ReactNode;
  media?: Media;
  lang: string;
}) {
  return (
    <div>
      <div className="mt-14">{media && <HeroBanner media={media} />}</div>
      {/* className="flex w-full max-w-3xl px-5 py-8 m-auto" */}
      <Container className="flex !px-0 lg:py-8">
        <aside className="hidden shrink-0 lg:block lg:w-52 lg:pl-5 3xl:pl-0">
          <SideBar lang={lang} />
        </aside>
        <main className="w-full lg:w-[calc(100%-208px)]">{children}</main>
      </Container>
    </div>
  );
}
