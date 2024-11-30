// import "server-only";
const apiBaseUrl = "https://api.themoviedb.org/3";

const fetchOptions = {
  Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
  accept: "application/json",
};

async function fetchApi(path: string, params: any = {}) {
  const url = new URL(apiBaseUrl);
  const { lang, ...rest } = params;
  const searchParams = new URLSearchParams({
    ...rest,
    language: lang,
  });

  url.pathname += path;
  url.search = searchParams.toString();
  // console.log(url.toString());

  const resp = await fetch(url.toString(), {
    method: "GET",
    headers: fetchOptions,
  });

  const data = await resp?.json();

  if (!resp.ok || !data) throw new Error("Network Error");

  return data;
}

export { fetchApi };
