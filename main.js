const con = document.getElementsByClassName(".con");
const context = document.getElementsByClassName(".text");
const num = document.getElementsByClassName(".clicknum");

const conclick = (e) => {
  const numvalue = num[e].value;
  num[e].innerHTML = numvalue + 1;
};

context[e].addEventListener(click, conclick);
