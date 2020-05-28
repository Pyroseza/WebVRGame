$ = (queryString) => document.querySelector(queryString);
function changeWallColor() {
  $('#background').setAttribute('color', 'blue');
}
$('#button').addEventListener('collide', function (evt) {
  changeWallColor();
});
