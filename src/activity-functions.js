export function navbar(location) {
  // The navbar is always active
  return true;
}

export function dashboard(location) {
  return location.pathname === "" || location.pathname === "/";
}

export function list(location) {
  return location.pathname.startsWith("/list");
}

export function detail(location) {
  return location.pathname.startsWith("/detail");
}
