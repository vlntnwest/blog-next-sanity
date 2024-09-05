export default function DateComponent({ dateString }: { dateString: string }) {
  const date = new Date(dateString);

  const userLanguage = navigator.language || "en-US";
  const formattedDate = date.toLocaleDateString(userLanguage, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return <time dateTime={dateString}>{formattedDate}</time>;
}
