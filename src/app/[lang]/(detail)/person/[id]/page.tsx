import PersonSummary from "@/features/persons/components/person-summary";
import MovieCollections from "@/features/movies/components/movie-collections";
import NextImage from "@/components/ui/next-image";
import { gerPerson } from "@/features/persons/api";
export { generateDefaultStaticParams as generateStaticParams } from "@/lib/utils-server";
// type PersonParamsProps = {
//   id: string;
// };

type PersonDetailProps = {
  params: Promise<{ id: string; lang: string }>;
};

export async function generateMetadata({ params }: PersonDetailProps) {
  const { id, lang } = await params;
  const person = await gerPerson(id, {
    append_to_response: "credits,recommendations,videos",
    lang,
  });

  return {
    title: person.name,
    openGraph: {
      images: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/original/${person.profile_path}`,
    },
  };
}

export default async function PersonDetail({ params }: PersonDetailProps) {
  const { id, lang } = await params;
  const person = await gerPerson(id, {
    append_to_response: "credits,recommendations",
    lang,
  });

  const getMoviesByPerson = (person: Person): Media[] => {
    const department = person.known_for_department;
    let results;

    if (department === "Acting") {
      results = person.credits?.cast;
    } else if (department === "Directing") {
      results = person.credits?.crew?.filter(
        (item) => item.department === "Directing",
      );
    } else if (department === "Production") {
      results = person.credits?.crew?.filter(
        (item) => item.department === "Production",
      );
    } else if (department === "Writing" || department === "Creator") {
      results = person.credits?.crew?.filter(
        (item) => item.department === "Writing",
      );
    }

    // if no results, return
    if (!results) return [];

    // remove duplicates
    results = removeDuplicates(results);

    // remove adult
    results = results.filter((item: Credit) => {
      if (item.adult) return false;
      return true;
    });

    // sort by popularity
    results.sort((a: Credit, b: Credit) =>
      a.vote_count > b.vote_count ? -1 : 1,
    );

    return results;
  };

  function removeDuplicates(myArr: Credit[]) {
    return myArr.filter((obj, pos, arr) => {
      const prop = obj.title ? "title" : "name";
      return arr.map((mapObj) => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
  }

  return (
    <div className="">
      <div className="flex max-w-5xl flex-col md:flex-row md:gap-5 xl:gap-8">
        <NextImage
          src={person.profile_path}
          alt="THE SHAWSHANK REDEMPTION"
          width={360}
          height={540}
          sizes="360px"
          className="mb-5 self-start md:mb-0 md:flex-[180px] xl:flex-[360px]"
          priority={true}
          unoptimized
        />

        {/* md:w-[calc(100%-180px)] xl:w-[calc(100%-360px-20px)] */}
        <div className="md:w-[calc(100%-180px)] md:overflow-hidden xl:w-[calc(100%-360px-20px)]">
          <PersonSummary person={person} />
        </div>
      </div>

      <div className="mt-10">
        <MovieCollections
          movies={getMoviesByPerson(person)}
          heading="Also appears in"
        />
      </div>
    </div>
  );
}
