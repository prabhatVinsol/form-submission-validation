
function isEmailValid(email) {
  const regex = (/^(([^<>()[\]\.,;:\s@]+(\.[^<>()[\]\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
  return regex.test(email);
}

function isUrlValid(url) {
  const regex = (/^(http[s]?:\/\/(www\.)?|ftp:\/\/(www\.)?|www\.){1}([0-9A-Za-z-\.@:%_\+~#=]+)+((\.[a-zA-Z]{2,3})+)((.)*)?(\?(.)*)?/)
  return regex.test(url);
}

export {isEmailValid, isUrlValid}