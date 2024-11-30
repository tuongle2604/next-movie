"use client";
import { Input } from "@/components/ui/input";
import { usePathname, useRouter } from "next/navigation";
import { KeyboardEvent, ChangeEvent, useState, useEffect } from "react";

export default function SearchFilter({ query }: { query: string }) {
  const router = useRouter();
  const pathName = usePathname();
  // const [selectValue, setSelectValue] = useState(searchBy);
  const [search, setSearch] = useState(query);

  function updatePathName(searchParams: { query: string }) {
    const params = new URLSearchParams(searchParams);
    router.push(`${pathName}?${params.toString()}`);
  }

  function onKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      const value = event.currentTarget.value;
      updatePathName({ query: value });
      // updatePathName({ query: value, searchBy: selectValue });
    }
  }

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.currentTarget.value);
  }

  // function onSelect(value: string) {
  //   setSelectValue(value);
  //   // updatePathName({ query, searchBy: value });
  // }

  useEffect(() => {
    setSearch(query);
  }, [query]);

  return (
    <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:gap-5">
      <p className="text-xl font-bold md:text-2xl lg:mr-14 lg:text-3xl">
        Search results for
      </p>
      <div className="w-80 ">
        <Input
          placeholder="Enter a movie"
          value={search}
          className="text-base"
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
      </div>

      {/* <Select value={selectValue} onValueChange={onSelect}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Search By" />
        </SelectTrigger>
        <SelectContent className="bg-background">
          <SelectItem value="movie">Search by Movie</SelectItem>
          <SelectItem value="person">Search By Person</SelectItem>
        </SelectContent>
      </Select> */}
    </div>
  );
}
