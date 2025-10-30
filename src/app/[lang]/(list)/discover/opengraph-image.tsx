import { ImageResponse } from "next/og";
import { home } from "@/data/metadata";
// Image metadata
export const alt = home.title;
export const size = {
  width: 1200,
  height: 630,
};

export const runtime = "edge";

export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {home.title}
      </div>
    ),
  );
}
