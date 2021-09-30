function choice1() {
  document.getElementById('simple-content').style.display = "block";
  document.getElementById('trans-content').style.display = "none";
  document.getElementById('coll-content').style.display = "none";

  btn1 = document.getElementById('button1');
  btn2 = document.getElementById('button2');
  btn3 = document.getElementById('button3');

  btn1.style.borderBottom = "#add136 solid 0.1rem";
  btn2.style.borderBottom = "none";
  btn3.style.borderBottom = "none";

  document.getElementById('green1').style.display = "inline-block";
  document.getElementById('green2').style.display = "none";
  document.getElementById('green3').style.display = "none";
  document.getElementById('gray1').style.display = "none";
  document.getElementById('gray2').style.display = "inline-block";
  document.getElementById('gray3').style.display = "inline-block";
}
function choice2() {
  document.getElementById('simple-content').style.display = "none";
  document.getElementById('trans-content').style.display = "block";
  document.getElementById('coll-content').style.display = "none";

  btn1 = document.getElementById('button1');
  btn2 = document.getElementById('button2');
  btn3 = document.getElementById('button3');

  btn1.style.borderBottom = "none";
  btn2.style.borderBottom = "#add136 solid 0.1rem";
  btn3.style.borderBottom = "none";

  document.getElementById('green1').style.display = "none";
  document.getElementById('green2').style.display = "inline-block";
  document.getElementById('green3').style.display = "none";
  document.getElementById('gray1').style.display = "inline-block";
  document.getElementById('gray2').style.display = "none";
  document.getElementById('gray3').style.display = "inline-block";
}
function choice3() {
  document.getElementById('simple-content').style.display = "none";
  document.getElementById('trans-content').style.display = "none";
  document.getElementById('coll-content').style.display = "block";
  
  btn1 = document.getElementById('button1');
  btn2 = document.getElementById('button2');
  btn3 = document.getElementById('button3');

  btn1.style.borderBottom = "none";
  btn2.style.borderBottom = "none";
  btn3.style.borderBottom = "#add136 solid 0.1rem";

  document.getElementById('green1').style.display = "none";
  document.getElementById('green2').style.display = "none";
  document.getElementById('green3').style.display = "inline-block";
  document.getElementById('gray1').style.display = "inline-block";
  document.getElementById('gray2').style.display = "inline-block";
  document.getElementById('gray3').style.display = "none";
}