export function navbar(location) {
  // The navbar is always active
  return true;
}

export function dashboard(location) {
  return "" || "/";
}

export function list(location) {
  return "/list";
}

export function detail(location) {
  return "/detail";
}
