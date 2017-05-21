export class AuthenticationService {
  private _authenticatedUser: string;

  adminUser = 'admin'

  isAuthenticated() {
    return !!this._authenticatedUser
  }

  hasSpecialRights() {
    return this._authenticatedUser === this.adminUser
  }

  login(username) {
    this._authenticatedUser = username
  }

  logout() {
    this._authenticatedUser = undefined
  }

  get authenticatedUser(): string {
    return this._authenticatedUser;
  }

}
