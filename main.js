const readline = require('./utils/readline');
const Petshop = require('./models/Petshop');
const PetshopController = require('./controllers/petshop.controller');
const { getDataInfo } = require('./utils/dataProcesing');
const { mainMenu } = require('./utils/views');

const meuCaninoFeliz = new Petshop(1, 20, 40, 20 + 20 * 0.2, 40 + 40 * 0.2, 2);
const vaiRex = new Petshop(2, 15, 50, 20, 55, 1.7);
const chowMara = new Petshop(3, 30, 45, 30, 45, 0.8);
meuCaninoFeliz.setPetshopName('Meu canino feliz');
vaiRex.setPetshopName('Vai rex');
chowMara.setPetshopName('Chow Mara');

const petShops = [meuCaninoFeliz, vaiRex, chowMara];

const petShopController = new PetshopController(petShops);

mainMenu();
readline()
  .then(result => {
    const bestPetshop = petShopController.selectTheBestPetShop(
      getDataInfo(result)
    );
    petShops.forEach(item => {
      if (bestPetshop.id == item.id) {
        console.clear();
        console.log(`Melhor Petshop: ${item.name}`);
        console.log(`Preço total: ${bestPetshop.totalPrice}`);
        process.exit();
      }
    });
  })
  .catch(err => {
    console.log(err);
  });
