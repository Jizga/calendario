const gifs = [
  "https://i.pinimg.com/originals/1f/95/92/1f959225538144ad8d5f4c28c62d2846.gif",
  "https://k31.kn3.net/taringa/2/1/5/5/0/7/50/annimendy/9A6.gif",
  "https://www.euroresidentes.com/hogar/mascotas/wp-content/uploads/sites/5/2014/06/img_abrecartas_no_gracias_tengo_un_conejo_5834_orig.gif",
  "https://k46.kn3.net/E/E/5/E/3/D/639.gif",
  "https://reygif.com/media/periquito-jugando-pelota-24099.gif",
  "https://i.gifer.com/7yVP.gif",
  "https://media.tenor.com/images/f683027bbea76030298167f95a6e2994/tenor.gif",
  "https://media.tenor.com/images/3178bd605af437b50b235684f18ad520/tenor.gif",
  "https://m.gifanimados.com/Gifs-Animales/Animaciones-Mamiferos/Hipopotamos/Hipopotamo-Bailando-75376.gif",
  "https://static.paraloscuriosos.com/img/articles/7689/470x470/orig.582c3f99c66ed_tumblr_o1duig4nbw1uzjikao1_400.gif",
  "https://m.gifanimados.com/Gifs-Animales/Animaciones-Aves/Avestruz/Avestruz-Bailando-67852.gif",
  "https://i.pinimg.com/originals/a7/3c/a9/a73ca99110e466659023774ad539e4a3.gif",
  "https://pa1.narvii.com/6625/9076700003526e2ab52a11ef3268f79ddffae807_hq.gif",
  "https://i.pinimg.com/originals/cc/c8/47/ccc84729dc2e0d1b116c328aba89532a.gif",
  "https://www.mundoperro.net/wp-content/uploads/perro-que-se-duerme.gif",
  "https://www.mundoperro.net/wp-content/uploads/perros-hambrientos.gif",
  "https://pa1.narvii.com/7709/cf4ec8ce166b02135d36dcaa611c9e34fcdd8958r1-268-360_00.gif",
  "https://media.tenor.com/images/d8077f7f0461ad9f08d092bcf1156d8c/tenor.gif",
  "https://i.gifer.com/3ZWo.gif",
  "https://i.pinimg.com/originals/d1/d8/e1/d1d8e1b371f2135610522d95680b8683.gif",
  "https://64.media.tumblr.com/tumblr_lyc06mGLa81r0jhcmo1_500.gif",
  "https://64.media.tumblr.com/94e934f083b83fe19ca73e34930d77ca/tumblr_n4quglBYfV1s63c00o1_400.gif",
  "https://i.pinimg.com/originals/41/b0/93/41b0932d7618df0cb68a1e53047ced2c.gif",
  "https://thumbs.gfycat.com/GranularAdorableHare-size_restricted.gif",
];

let animal = document.getElementById("gif");

function getRandomInt() {
  return Math.floor(Math.random() * (24 - 0)) + 0;
}

function checkHide() {
  let cucu = document.getElementById("cucu");
  cucu.hidden = !animal.hidden;
}

function gifAppears() {
  animal.hidden = true;

  let days = document.querySelectorAll("td");
  days.forEach((day) =>
    day.addEventListener("click", (e) => {
      animal.hidden = false;
      animal.src = gifs[getRandomInt()];
      checkHide();
    })
  );
}

gifAppears();
checkHide();