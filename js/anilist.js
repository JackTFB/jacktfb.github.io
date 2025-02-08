const query = `
query ($userId: Int, $status: MediaListStatus, $type: MediaType) {
  Page {
    mediaList(userId: $userId, status: $status,  type: $type) {
      userId
      status
      media {
        id
        title {
          english
        }
        coverImage {
          extraLarge
        }
      }
    }
  }
}`;

async function fetchAnimeList(userId, status, type) {
    const url = 'https://graphql.anilist.co';
    const variables = { userId: userId, status: status, type: type };

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: query,
            variables: variables,
        }),
    });

    const data = await response.json();
    return data.data.Page.mediaList;
}

function updateAnimeFinishedList(animeList) {
    const contentDiv = document.querySelector('.anime-finished-list');
    animeList.forEach((anime, index) => {
        const animeElement = document.createElement('div');
        animeElement.classList.add('anime-item');
        animeElement.style.backgroundImage = `url(${anime.media.coverImage.extraLarge})`;
        animeElement.style.animationDelay = `${index * 0.1}s`;
        animeElement.innerHTML = `
      <h2>${anime.media.title.english}</h2>
    `;
        contentDiv.appendChild(animeElement);
    });
}

function updateAnimeCurrentList(animeList) {
    const contentDiv = document.querySelector('.anime-watching-list');
    animeList.forEach((anime, index) => {
        const animeElement = document.createElement('div');
        animeElement.classList.add('anime-item');
        animeElement.style.backgroundImage = `url(${anime.media.coverImage.extraLarge})`;
        animeElement.style.animationDelay = `${index * 0.1}s`;
        animeElement.innerHTML = `
      <h2>${anime.media.title.english}</h2>
    `;
        contentDiv.appendChild(animeElement);
    });
}

function updateAnimePlanningList(animeList) {
    const contentDiv = document.querySelector('.anime-planning-list');
    animeList.forEach((anime, index) => {
        const animeElement = document.createElement('div');
        animeElement.classList.add('anime-item');
        animeElement.style.backgroundImage = `url(${anime.media.coverImage.extraLarge})`;
        animeElement.style.animationDelay = `${index * 0.1}s`;
        animeElement.innerHTML = `
      <h2>${anime.media.title.english}</h2>
    `;
        contentDiv.appendChild(animeElement);
    });
}

document.addEventListener('DOMContentLoaded', async () => {

    const loadingMessage = document.querySelector('.loading-message');
    loadingMessage.style.display = 'block';
    const userId = 616089; // Replace with the desired user ID
    let status = 'CURRENT'; // Replace with the desired status
    const type = 'ANIME';
    let animeList = await fetchAnimeList(userId, status, type);
    updateAnimeCurrentList(animeList);

    status = 'COMPLETED'; // Replace with the desired status
    animeList = await fetchAnimeList(userId, status, type);
    updateAnimeFinishedList(animeList);

    status = 'PLANNING'; // Replace with the desired status
    animeList = await fetchAnimeList(userId, status, type);
    updateAnimePlanningList(animeList);

    loadingMessage.style.display = 'none';

});