export class JwtUtil {

  static storeToken(token: string): void {
    localStorage.setItem('jwt_token', token);
  }

  static getToken(): string | null {
    return localStorage.getItem('jwt_token');
  }

  static removeToken(): void {
    localStorage.removeItem('jwt_token');
  }

  static isValidToken(): boolean {
    const token = JwtUtil.getToken();
    if (!token) {
      return false;
    }
    const payload = JwtUtil.decodeToken(token);
    const expirationDate = new Date(payload.exp * 1000);
    return expirationDate > new Date();
  }

  static decodeToken(token: string): any {
    return JSON.parse(atob(token.split('.')[1]));
  }

  static getExpirationDate(): Date {
    const payload = JwtUtil.decodeToken(JwtUtil.getToken()!);
    return new Date(payload.exp * 1000);
  }

  static getUserId(): string {
    const payload = JwtUtil.decodeToken(JwtUtil.getToken()!);
    return payload.username;
  }

  static getRoles(): string[] {
    const payload = JwtUtil.decodeToken(JwtUtil.getToken()!);
    return payload.roles;
  }
}