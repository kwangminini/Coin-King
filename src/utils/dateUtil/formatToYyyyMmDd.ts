export function formatToYyyyMmDd(dateString: string | number) {
  const date = new Date(dateString)
  const formattedDate = date.toISOString().slice(0, 10)

  return formattedDate
}
