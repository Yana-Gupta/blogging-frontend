export const getUser = (): JSON | undefined => {
  if (typeof window === "undefined") {
    return undefined
  }

  const item = localStorage.getItem("user")
  if (item) {
    return JSON.parse(item)
  }
  return undefined
}

export const deleteToken = (): string => {
  if (typeof window === "undefined") return ""

  window.localStorage.removeItem("user")

  return "You are logged out! Kindly refresh the page."
}
