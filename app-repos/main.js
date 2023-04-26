async function getData() {
  const URL = 'https://api.github.com/users/mojombo/repos';
  try {
    let res = fetch(URL);
    return (await res).json();
  } catch (error) {
    console.error(error);
  }
}

async function renderRepos() {
  let repos = await getData();
  let html = '';

  repos.forEach((repo) => {
    let htmlSegment = `
			<a class='repo' href='${repo.html_url}' target=”_blank”>
				<p>Reposetory name:${repo.name}</p>
				<p>Owner:${repo.owner.login}</p>
			</a>
		`;
    html += htmlSegment;
  });
  const list = document.getElementById('repos-list');
  list.innerHTML = html;
}

document.addEventListener(
  'DOMContentLoaded',
  function () {
    renderRepos();
  },
  false,
);

// async function addListener(){

// 	const block = document.querySelectorALL('.repo');
// }
