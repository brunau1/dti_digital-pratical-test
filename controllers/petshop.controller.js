const { verifyIfIsEndOfWeek } = require('../utils/dataProcesing');

class PetshopController {
  constructor(petShops) {
    this.petShops = petShops;
  }

  selectTheBestPetShop(info) {
    const isEndOfWeek = verifyIfIsEndOfWeek(info.date);
    const totalPrices = this.petShops.map(petShop => {
      return this.calcTotalPrice(
        info.smallDogs,
        info.bigDogs,
        petShop,
        isEndOfWeek
      );
    });
    return this.verifyBestPetshop(totalPrices);
  }

  verifyBestPetshop(prices) {
    let bestPetShop;
    let petShoplowestPrice = prices[0];
    let otherPetShops = [];
    let counter = 0;
    prices.forEach(item => {
      if (item.totalPrice < petShoplowestPrice.totalPrice)
        petShoplowestPrice = item;
      else if (item.totalPrice == petShoplowestPrice.totalPrice) {
        counter++;
        otherPetShops.push(item);
      }
    });
    if (counter > 1) {
      let lowestDistance = otherPetShops[0].distance;
      otherPetShops.forEach(item => {
        if (item.distance < lowestDistance) {
          lowestDistance = item.distance;
          bestPetShop = item;
        }
      });
    } else bestPetShop = petShoplowestPrice;
    return bestPetShop;
  }

  calcTotalPrice(smallDogs, bigDogs, petshop, isEndOfWeek) {
    if (!!isEndOfWeek)
      return {
        id: petshop.id,
        name: petshop.name,
        distance: petshop.distance,
        totalPrice:
          petshop.price.smallDogEndWeek * smallDogs +
          petshop.price.bigDogEndWeek * bigDogs
      };
    else if (!isEndOfWeek)
      return {
        id: petshop.id,
        name: petshop.name,
        distance: petshop.distance,
        totalPrice:
          petshop.price.smallDog * smallDogs + petshop.price.bigDog * bigDogs
      };
  }
}

module.exports = PetshopController;
