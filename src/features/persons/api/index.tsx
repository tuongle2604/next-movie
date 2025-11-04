import { fetchApi } from "@/lib/api";

interface PersonParams {
  append_to_response: string;
  lang: string;
}

function gerPerson(id: string, params?: PersonParams): Promise<Person> {
  return fetchApi(`/person/${id}`, params);
}

export { gerPerson };
