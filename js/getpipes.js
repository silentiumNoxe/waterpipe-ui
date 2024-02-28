async function getPipes() {
  const pipeContainer = document.getElementById("pipe-container");
  try {
    const response = await fetch(`http://38.242.209.155/pipe`);
    const data = await response.json();

    data.forEach((pipe) => {
      const pipeCard = new PipeCard(
        pipe.id,
        pipe.name,
        pipe.namespace,
        pipe.settings);
      const pipeCardElement = pipeCard.render();
      pipeContainer.appendChild(pipeCardElement);
    });
  } catch (error) {
    console.error("Error fetching pipe data:", error.message);
  }
}
getPipes();
// const pipeContainer = document.getElementById("pipe-container");
// const pipeCard = new PipeCard(
//     "id",
//     "name",
//     "naspace",
//     "settings"
//   );
//   const pipeCardElement = pipeCard.render();
//   pipeContainer.appendChild(pipeCardElement);
