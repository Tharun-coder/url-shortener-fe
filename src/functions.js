export default function trim(str) {
  if (str.length >= 25) {
    return str.substr(0, 25) + "...";
  } else {
    return str;
  }
}
