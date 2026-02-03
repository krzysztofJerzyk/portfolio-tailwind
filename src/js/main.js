import githubIcon from "../img/github-icon.svg";
import demoIcon from "../img/demo-icon.svg";
import starIcon from "../img/small-star.svg";

const projectsConteiner = document.querySelector(".projects--js");
const userName = "krzysztofJerzyk";
const direction = "desc";

fetch(`https://api.github.com/users/${userName}/repos?direction=${direction}`)
  .then((response) => response.json())
  .then((response) => {
    for (let repo of response) {
      const {
        description,
        stargazers_count,
        name,
        html_url,
        homepage,
        topics,
      } = repo;
      let tags = ``;

      for (let tag of topics) {
        tags += `<li class="bg-gray-400/10 py-1 px-2 rounded text-sm font-bold">${tag}</li>`;
      }

      const element = `<article
            class="bg-linear-to-br from-white/10 to-white/5 rounded-10x md:rounded-10xl overflow-clip"
          >
            <div
              class="h-11 bg-linear-to-br from-white/10 to-white/5 p-4 flex gap-1.5 shadow-innerLight rounded-t-10x md:rounded-t-10xl border-b border-bg"
            >
              <span class="w-3 h-3 block rounded-full bg-bg opacity-50"></span>
              <span class="w-3 h-3 block rounded-full bg-bg opacity-50"></span>
              <span class="w-3 h-3 block rounded-full bg-bg opacity-50"></span>
            </div>
            <div class="p-5 md:p-6 lg:p-10">
              <header class="flex gap-4 items-center mb-4">
                <h3 class="text-2xl font-bold leading-none">${name}</h3>
                <p
                  class="flex gap-0.5 items-center bg-gray-400/10 py-1 px-2 font-medium text-gray-400 leading-none rounded"
                >
                  <img src="${starIcon}" alt="" class="w-4 h-4" />${stargazers_count}
                </p>
              </header>
              <p class="text-gray-400 text-xl mb-4">
                ${description}
              </p>
              <ul class="flex gap-2 mb-10">
                ${tags}
              </ul>
              <div class="flex flex-col md:flex-row items-start gap-4">
                <a
                  class="bg-bg text-accent flex gap-3 font-bold py-4 px-5 items-center rounded-10x md:rounded-xl md:text-xl border-lightGray border-2"
                  href="${homepage}"
                  target="_blank"
                  rel="noreferrer notfollow"
                  ><img src="${demoIcon}" alt="" class="w-6 h-6" />View
                  demo</a
                >
                <a
                  class="bg-bg text-accent flex gap-3 font-bold py-4 px-5 items-center rounded-10x md:rounded-xl md:text-xl border-lightGray border-2"
                  href="${html_url}"
                    target="_blank"
                  rel="noreferrer notfollow"
                  ><img
                    src="${githubIcon}"
                    alt=""
                    class="w-6 h-6"
                  />Source code</a
                >
              </div>
            </div>
          </article>`;
      if (homepage) projectsConteiner.insertAdjacentHTML("beforeend", element);
    }
  })
  .catch((e) => console.log(e));
