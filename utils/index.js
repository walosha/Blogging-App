export function textTruncate(str, length, ending) {
  if (length == null) {
    length = 100;
  }
  if (ending == null) {
    ending = "...";
  }
  if (str.length > length) {
    const new_str = str.substring(0, length - ending.length);
    news_list = new_str.split(" ");
    news_list.pop();
    return news_list.join(" ") + ending;
  } else {
    return str;
  }
}
