interface 人 {
  姓: string;
  名: string;
}

function 问好(那谁: 人) {
  return "吃了么, " + 那谁.姓 + 那谁.名;
}

let 路人 = {姓: "大", 名: "黄"};

document.body.innerHTML = 问好(路人);