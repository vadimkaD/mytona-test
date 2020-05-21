export function getIsAuthenticated(): boolean {
  const token = localStorage.getItem("token");
  return !!token;
}

export function saveToken(token: string) {
  localStorage.setItem("token", token);
}

export function clearToken() {
  localStorage.removeItem("token");
}
