export const getUser = () : JSON | null => {
  if (localStorage.getItem("user")) {
    return JSON.parse(localStorage.getItem("user") || "{}")
  }
  return null
}
