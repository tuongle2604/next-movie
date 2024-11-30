import { fetchApi } from "@/lib/api";

function gerPerson(id: string, params?: PayloadParams): Promise<Person> {
  return fetchApi(`/person/${id}`, params);
}

export { gerPerson };
