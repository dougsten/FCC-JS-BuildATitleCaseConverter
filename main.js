function titleCase (str) {
  for (let i = 0; i < str.length; i++) {
    if (i === 0 || str[i - 1] === " ") {
      str = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
    } 
    else {
      str = str.slice(0, i) + str[i].toLowerCase() + str.slice(i + 1);
    };
  }
  return str;
}


console.log(titleCase("I'm a little tea pot"));