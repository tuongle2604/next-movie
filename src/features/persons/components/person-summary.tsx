import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function SummarySection({
  children,
  classname = "",
}: {
  children: React.ReactNode;
  classname?: string;
}) {
  return <div className={cn("mb-6 md:mb-7", classname)}>{children}</div>;
}

interface PersonSummaryProps {
  person: Person;
}

export default function PersonSummary({ person }: PersonSummaryProps) {
  return (
    <div className="">
      <SummarySection>
        <p className="mb-2 text-2xl font-bold md:text-4xl">{person.name}</p>
        <p className="">{person.birthday}</p>
      </SummarySection>

      <SummarySection>
        <p className="mb-2 text-sm font-bold">BIOGRAPHY</p>
        <p>{person.biography}</p>
      </SummarySection>

      <SummarySection classname="flex gap-3">
        <Button asChild variant={"secondary"}>
          <Link
            href={`https://www.imdb.com/name/${person.imdb_id}/`}
            target="_blank"
          >
            IMDB
          </Link>
        </Button>
      </SummarySection>
    </div>
  );
}
