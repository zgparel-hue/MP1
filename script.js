function showNote() {
  var reviews = [
    "Okay naman yung suka. Bumabalik lang talaga ako pag naka-duty yung anak ni Aling Nena. Minsan nakakalimutan ko tuloy kunin yung sukli. - Isang suking laging may dahilan",
    "Five stars sa kape, one star kasi pinauwi na ako agad dahil wala naman akong bibilhin. - Kapitbahay sa kabilang kanto",
    "Bumili ako ng suka kahapon, bumili ulit ako ngayon. Hindi nagtataka si Nena, pero nakangiti na siya. - Suki sa kanto"
  ];

  var pick = Math.floor(Math.random() * reviews.length);
  document.getElementById("review-quote").textContent = reviews[pick];
}

function sendHello() {
  var name = document.getElementById("visitor-name").value;
  var message = document.getElementById("visitor-message").value;
  var reply = document.getElementById("form-message");

  if (name === "" || message === "") {
    reply.textContent = "Lagyan muna ng pangalan at message, please.";
  } else {
    reply.textContent = "Salamat, " + name + ". Naabot na kay Nena yung note mo.";
  }
}
