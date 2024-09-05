"use client";

import { useState, useEffect } from "react";

export default function DateComponent({ dateString }: { dateString: string }) {
  const [userLanguage, setUserLanguage] = useState<string | null>(null);
  const date = new Date(dateString);

  useEffect(() => {
    setUserLanguage(navigator.language || "fr-FR");
  }, []);

  const formattedDate = userLanguage
    ? date.toLocaleDateString(userLanguage, {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return <time dateTime={dateString}>{formattedDate}</time>;
}
