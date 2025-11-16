import { PortableText } from "next-sanity";
import { TypedObject } from "@portabletext/types";

export function ArticleContent({
  title,
  body,
}: {
  title: string;
  body?: TypedObject | TypedObject[];
}) {
  return (
    <div className="flex flex-col items-start gap-4 flex-1">
      <h1 className="text-3xl font-light">{title}</h1>
      <div className="text-gray-500 font-base [&>p]:mb-4 last:[&>p]:mb-0">
        {body && <PortableText value={body} />}
      </div>
    </div>
  );
}
