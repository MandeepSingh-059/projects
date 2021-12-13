const modalButton = document.getElementById("modalButton");

modalButton.onclick = () => {
	document.getElementsByClassName("modalDes")[0].style.display="inline";
}
const modalDesBtn = document.getElementById("modalDesBtn");
modalDesBtn.onclick = () => {
	document.getElementsByClassName("modalDes")[0].style.display="none";
}