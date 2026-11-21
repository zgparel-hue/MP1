function showNote() {
  var quotes = [
    "Okay naman yung suka. Bumabalik lang talaga ako pag naka-duty yung anak ni Aling Nena. Minsan nakakalimutan ko tuloy kunin yung sukli. - Isang suking laging may dahilan",
    "Five stars sa kape, one star kasi pinauwi na ako agad dahil wala naman akong bibilhin. - Kapitbahay sa kabilang kanto",
    "Bumili ako ng suka kahapon, bumili ulit ako ngayon. Hindi nagtataka si Nena, pero nakangiti na siya. - Suki sa kanto"
  ];

  var quoteNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById("review-quote").textContent = quotes[quoteNumber];
}

function sendHello() {
  var visitorName = document.getElementById("visitor-name").value;
  var visitorMessage = document.getElementById("visitor-message").value;
  var response = document.getElementById("form-message");

  if (visitorName === "" || visitorMessage === "") {
    response.textContent = "Lagyan muna ng pangalan at message, please.";
  } else {
    response.textContent = "Salamat, " + visitorName + ". Naabot na kay Nena yung note mo.";
  }
}
