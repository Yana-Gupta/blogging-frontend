export class AuthRequiredError extends Error {
  constructor(message: string = "You need to login first!") {
    super(message)
    this.name = "AuthRequiredError"
  }
}
