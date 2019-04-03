document.addEventListener('DOMContentLoaded', function(event) {
  Handlebars.registerPartial(
    'authorPartial',
    document.getElementById('author-partial-template').innerHTML
  );
});

function getRepositories() {
  const req = new XMLHttpRequest();
  req.addEventListener('load', showRepositories);
  req.open('GET', 'https://github.com/popcorn-official/popcorn-api/blob/development/CHANGELOG.md#223---can-you-see-me-now---19-november-2016');
  req.send();
}

function showRepositories(event, data) {
  const repos = JSON.parse(this.responseText);
  const src = document.getElementById('repository-template').innerHTML;
  const template = Handlebars.compile(src);
  const repoList = template(repos);
  document.getElementById('repositories').innerHTML = repoList;
}
