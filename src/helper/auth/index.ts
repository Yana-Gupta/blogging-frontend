export const getUser = (): JSON | null => {
  const item = localStorage.getItem("user")
  if (item) {
    return JSON.parse(item)
  }
  return null
}
