$ = (queryString) => document.querySelector(queryString);
$('#background').setAttribute('color', 'green');
function changeWallColor() {
  $('#background').setAttribute('color', 'blue');
}
$('#button').addEventListener('collisions', function (evt) {
  changeWallColor();
});
