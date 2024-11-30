import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import IconSearch from "@/components/icons/search";
import SearchInput from "@/components/ui/search-input";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { useState } from "react";
import { useClientNavigate } from "@/hooks";

export default function Search() {
  const [open, setOpen] = useState(false);
  const { navigateTo } = useClientNavigate();

  function onSearch(text: string) {
    navigateTo(`/search?query=${text}`);
    setOpen(false);
  }

  return (
    <Dialog modal={true} open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant={"outline"}
          size={"sm"}
          className="flex gap-2 px-2 md:border-accent md:px-3"
        >
          <IconSearch className="w-5 h-5 cursor-pointer " />
          <span className="hidden md:inline-block">Search</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="px-5 py-0 bg-transparent border-none top-20 md:top-28 md:px-0">
        <VisuallyHidden.Root>
          <DialogTitle>Search</DialogTitle>
        </VisuallyHidden.Root>
        <SearchInput onSearch={onSearch} />
      </DialogContent>
    </Dialog>
  );
}
