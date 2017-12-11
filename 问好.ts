function 问好(那谁: string) {
  return "吃了么, " + 那谁;
}

let 路人 = "打酱油的";

document.body.innerHTML = 问好(路人);