//todo:  Задан произвольный url необходимо получить его домен.
function extract(url) {
  const regex = /^(?:https?:\/\/)?(?:\.)?([^\/\n]+)/i; 
  const matches = url.match(regex);
  return matches && matches[1];
}


console.log(extract("http://www.ozon.ru/context/detail/id/19677670"))
