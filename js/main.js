function displayNav() {
  var link = document.getElementById("myLinks");
  let dNone = document.getElementById("dnone");
  if (link.style.display === "block") {
    link.style.display = "none";
  } else {
    link.style.display = "block";
    dNone.style.display = "none";
  }
}
