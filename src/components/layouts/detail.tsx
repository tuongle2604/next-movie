// import SideBar from "@/app/[lang]/_sidebar";
import Container from "@/components/container";
import SideBar from "@/components/sidebar";

export default async function DetailLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <Container className="flex py-5 mt-14 md:py-8">
      <aside className="hidden shrink-0 lg:block lg:w-52 3xl:pl-0">
        <SideBar lang={lang} />
      </aside>
      <main className="w-full overflow-x-hidden lg:w-[calc(100%-208px)]">
        {children}
      </main>
    </Container>
  );
}
