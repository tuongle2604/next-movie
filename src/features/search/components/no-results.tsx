export default function NoResults({ query }: { query: string }) {
  return (
    <div className="my-40 flex flex-col gap-1 text-center lg:my-60 lg:gap-2">
      <p className="text-xl font-bold lg:text-3xl">No Results Found</p>
      <p className="lg:text-lg">Please try a different search term</p>
    </div>
  );
}
