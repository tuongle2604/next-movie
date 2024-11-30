"use client";
import ReactPlayer from "react-player";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function MoiveTrailer({
  children,
  trailer,
}: {
  children: React.ReactNode;
  trailer?: string;
}) {
  if (!trailer) return <></>;

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-screen-lg p-0 border-0 outline-none">
        <div className="relative aspect-[4/3] w-full bg-black md:aspect-video">
          <ReactPlayer
            url={trailer}
            width={"100%"}
            height={"100%"}
            className="absolute top-0 left-0"
            playing={true}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
