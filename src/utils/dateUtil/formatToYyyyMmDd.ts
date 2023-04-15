export function formatToYyyyMmDd(dateString: string) {
  const date = new Date(dateString)
  const formattedDate = date.toISOString().slice(0, 10)

  return formattedDate
}
