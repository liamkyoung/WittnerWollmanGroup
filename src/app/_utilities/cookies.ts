export function setCookie(name, value, days) {
  const d = new Date()
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000)
  let expires = 'expires=' + d.toUTCString()
  document.cookie = name + '=' + value + ';' + expires + ';path=/'
}

export function getCookie(name) {
  const cookies = document.cookie.split('; ')
  for (let i = 0; i < cookies.length; i++) {
    const cookiePair = cookies[i].split('=')
    if (cookiePair[0] === name) {
      return cookiePair[1] // Return the cookie value
    }
  }
  return null // Return null if the cookie doesn't exist
}
