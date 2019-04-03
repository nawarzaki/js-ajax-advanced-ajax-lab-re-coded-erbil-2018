
function getRepositories() {
  var request = new XMLHttpRequest();

request.open('GET', 'https://tv-v2.api-fetch.website/movies');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();
}
