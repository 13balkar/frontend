const listeners = () => {
  const containerList = document.getElementsByTagName('main')[0];
  containerList.childNodes.forEach((container) => {
    if (container.childNodes.length > 0) {
      const container_text = container.childNodes[3].childNodes[9];
      const clap = container_text.childNodes[1].childNodes[1];
      const clapCount = container_text.childNodes[1].childNodes[3];
      const heart = container_text.childNodes[3];
      let number = 0;
      clap.addEventListener('click', () => {
        number = parseInt(clapCount.innerHTML);
        clapCount.innerHTML = number + 1;
      });

      heart.addEventListener('click', () => {
        const path = 'http://127.0.0.1:5500/Icons/heart-red.svg';
        heart.src === path ? heart.src = './Icons/heart-black.svg' : heart.src = './Icons/heart-red.svg';
        console.log(heart.src);
      })
    }
  });
};

const viewPosts = (posts) => {
  const main = document.getElementsByTagName('main')[0];
  posts.map(entity => {
    const icon = entity.liked ? './Icons/heart-red.svg' : './Icons/heart-black.svg';
    const post = `
    <div class="container">
      <img class="container-img" src="./Images/${entity.image}" alt="image">
      <div class="container-data">
        <div class="container-feat">
          <p>${entity.date}</p>
          <p>${entity.readingTime}</p>
        </div>
        <h3>${entity.title}</h3>
        <p>${entity.description}</p>
        <hr>
        <div class="container-feat">
          <div class="reactions">
            <img src="./Icons/clapping.svg" alt="">
            <p>${entity.claps}</p>
          </div>
          <img src=${icon} alt="heart">
        </div>
      </div>
    </div>
    `;
    main.innerHTML += post;
  });
};

const fetchPosts = async () => {
  const data = await fetch('./mockData/index.json');
  const posts = await data.json();
  viewPosts(posts);
  listeners();
};
fetchPosts();