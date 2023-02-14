const containerList = document.getElementsByTagName('main')[0];
containerList.childNodes.forEach((container) => {
  if (container.childNodes.length > 0) {
    const container_text = container.childNodes[3].childNodes[9];
    const clap = container_text.childNodes[1].childNodes[1];
    console.log(clap);
    const clapCount = container_text.childNodes[1].childNodes[3];
    console.log(clapCount);
    const heart = container_text.childNodes[3];
    let number = 0;
    clap.addEventListener('click', () => {
      number = parseInt(clapCount.innerHTML);
      clapCount.innerHTML = number + 1;
    });

    heart.addEventListener('click', () => {
      const path = 'file:///Users/balkar_singh/frontend/exercise2/Icons/heart-red.svg';
      heart.src === path ? heart.src = './Icons/heart-black.svg' : heart.src = './Icons/heart-red.svg';
      console.log(heart.src);
    })
  }
});