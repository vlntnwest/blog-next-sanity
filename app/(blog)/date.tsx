export default function DateComponent({ dateString }: { dateString: string }) {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return <time dateTime={dateString}>{formattedDate}</time>;
}
