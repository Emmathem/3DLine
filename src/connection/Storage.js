export function SAVE_TOKEN(value) {
  localStorage.setItem('token', value);
}

export function GET_TOKEN() {
  return localStorage.getItem('token');
}
