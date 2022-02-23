export function SAVE_TOKEN(value) {
  localStorage.setItem('token', value);
}

export function GET_TOKEN() {
  return localStorage.getItem('token');
}

export function REMOVE_TOKEN() {
  return localStorage.removeItem('token');
}
