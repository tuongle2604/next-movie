// import "server-only";
const apiBaseUrl = "https://api.themoviedb.org/3";

const fetchOptions = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDkwNDlmZjc4ZDM1YmMxMjVkMjc3NmM5NWY4NTk3YSIsIm5iZiI6MTczMDgzMzcxNC42ODQ5NDUzLCJzdWIiOiI2NTUxZmZjNGZiNTI5OTAxM2E2ZWQzNmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.XsO3ajR2FxIQBbqwwCLG7O_EwszXkb9Objgled2j0hU",
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