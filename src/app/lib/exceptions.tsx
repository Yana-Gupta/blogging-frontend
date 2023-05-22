export class AuthRequiredError extends Error {
  constructor(message: string = "You need to login first!", actionForBtn = "Try again") {
    super(message)
    this.name = "AuthRequiredError"
  }
}
