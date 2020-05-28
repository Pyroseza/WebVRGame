$ = (queryString) => document.querySelector(queryString);
$('#background').setAttribute('color', 'green');
function changeWallColor() {
  $('#background').setAttribute('color', 'blue');
}
$('#button').addEventListener('collide', function (evt) {
  changeWallColor();
});
