export function getImageUrl(person, size = "s") {
  return "https://i.imgur.com/" + person.imageUrl + size + ".jpg";
}
