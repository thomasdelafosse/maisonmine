import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "qi23uqs6",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});
