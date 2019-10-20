class Petshop {
  constructor(
    id,
    bathSmall,
    bathBig,
    bathSmallEndWeek,
    bathBigEndWeek,
    distance
  ) {
    this.id = id;
    this.distance = distance;
    this.price = {
      bigDog: bathBig,
      smallDog: bathSmall,
      bigDogEndWeek: bathBigEndWeek,
      smallDogEndWeek: bathSmallEndWeek
    };
  }
  setPetshopName(name) {
    this.name = name;
  }
}

module.exports = Petshop;
