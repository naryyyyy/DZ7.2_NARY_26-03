const container = document.querySelector('.wrapper');

const fetchData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    renderCards(data);
  } catch (error) {
    console.log(error);
  }
};

const renderCards = (data) => {
  data.forEach(post => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = 
      `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1cfeq71KfWsVL468orJ8oPbEyahSYAdp4s2T-lwYGOk4UId0b4ZnFLIYw_5jNvs2U8Ng&usqp=CAU" alt="Image">
      <h2>${post.title}</h2>
      <p>${post.body}</p>`
    ;
    container.appendChild(card);
  });
};

fetchData();