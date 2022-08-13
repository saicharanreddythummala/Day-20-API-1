
//function to fetch api data
const data = async () => {
  const arr = await fetch("https://anime-facts-rest-api.herokuapp.com/api/v1", {
    method: "GET",
  });

  const res = await arr.json();
  const animeList = res.data;
  console.log(animeList);
  gridData(animeList);
};

data();


//function to create a html element(DRY)
const create = (ele,clas) =>{
  const tag = document.createElement(ele);
  tag.classList.add(clas);
  return tag;
}


//function to create card and append api data to html container
const gridData = (animeList) => {
  const grid = document.querySelector('.row')
  animeList.map((anime) => {
    const gridItem = create('div',"col-lg-4");
    gridItem.classList.add("col-md-6","col-sm-6","col-g")
    const card = create('div','card');
    card.innerHTML = `<img src="${anime.anime_img}" class="card-img-top img-fluid" alt="${anime.anime_name}">
    <div class="card-body"><h5 class="card-title">${anime.anime_name}</h5></div>`

    gridItem.append(card);
    grid.append(gridItem)
  });

};
