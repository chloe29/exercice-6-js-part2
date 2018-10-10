function change(){
  document.getElementById('image1').src="assets/image1_2.jpg";
  document.getElementById('image2').src="assets/image2_2.jpg";
  document.getElementById('image3').src="assets/image3_2.jpg";
  document.getElementById('image4').src="assets/image4_2.jpg";
  document.getElementById('image5').src="assets/image5_2.jpg";
}
function rechange(){
  document.getElementById('image1').src="assets/image1.jpg";
  document.getElementById('image2').src="assets/image2.jpg";
  document.getElementById('image3').src="assets/image3.jpg";
  document.getElementById('image4').src="assets/image4.jpg";
  document.getElementById('image5').src="assets/image5.jpg";
}
// pour changer les images une par une ( et rajouter this dans le onmonseover)
/* function change(image){
  image.src = 'assets/' + image.id + '_2.jpg';
}
*/
// le mot clé this fait référence au paramètre mis dans la fonction
// pour revenir aux premières images une par une ( et rajouter this dans le onmouseout)
/*
function rechange(image){
  image.src = 'assets/' + image.id + '.jpg';
}
*/
