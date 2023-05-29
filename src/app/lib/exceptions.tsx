export class AuthRequiredError extends Error {
  constructor(message: string = "You need to login first!") {
    super(message)
    this.name = "AuthRequiredError"
  }
}

export class FalseAuthError extends Error {
  constructor(message: string = "You are not authorized to view this page!") {
    super(message)
    this.name = "FalseAuthError"
  }
}
