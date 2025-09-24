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


let title = "hello world";
console.log(titleCase (title));
titlel = "sHoRt AnD sToUt";
console.log(titleCase (titlel));  