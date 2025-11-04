import { defaultLocale } from "@/lib/regions";

export function generateDefaultStaticParams() {
  return [{ lang: defaultLocale }, { page: "1" }];
}
