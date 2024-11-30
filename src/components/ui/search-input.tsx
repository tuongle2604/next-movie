import IconSearch from "../icons/search";
import { FormEventHandler, FormEvent } from "react";

interface SearchInputProps {
  onSearch: (search: string) => void;
}

export default function SearchInput({ onSearch }: SearchInputProps) {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const text = formData.get("search") as string;
    onSearch(text);
  }

  return (
    <form
      className="mx-auto flex w-full overflow-hidden rounded-full border-2 bg-accent dark:bg-secondary"
      onSubmit={onSubmit}
    >
      <button type="submit" className="flex items-center justify-center px-4">
        <IconSearch className="h-5 w-5 md:h-6 md:w-6" />
      </button>
      <input
        type="text"
        placeholder="Search Something..."
        className="w-full bg-accent py-2 pr-2 text-sm outline-none md:text-base dark:bg-secondary"
        name="search"
        autoFocus
      />
    </form>
  );
}
