// Shooting game //
// Two player, each player has property of name, health and power //

// const Player = class {
//   constructor(name, health = 100, power = 10) {
//     this.name = name;
//     this.health = health;
//     this.power = power;
//   }
//   hit(opponent) {
//     opponent.health -= this.power;
//   }
//   useItem(item) {
//     this.health += item.health;
//     this.power += item.power;
//   }
//   showStatus() {
//     console.log(
//       `${this.name} (Health => ${this.health}, Power => ${this.power})`
//     );
//   }
// };

// const Player2 = class {
//   constructor(name, health = 100, power = 10) {
//     this.name = name;
//     this.health = health;
//     this.power = power;
//   }
//   hit(opponent) {
//     opponent.health -= this.power;
//   }
//   useItem(item) {
//     this.health += item.health;
//     this.power += item.power;
//   }
//   showStatus() {
//     console.log(
//       `${this.name} (Health => ${this.health}, Power => ${this.power})`
//     );
//   }
// };

// class ShootingGame {
//   constructor(player1, player2) {
//     this.player1 = player1;
//     this.player2 = player2;
//   }

//   getRandomItem() {
//     const health = Math.random() < 0.5 ? 0 : 10;
//     const power = Math.random() < 0.5 ? 0 : 10;
//     return `${health}, ${power}`;
//   }

//   start() {
//     while (this.player1.health > 0 && this.player2.health > 0) {
//       this.player1.showStatus();
//       this.player2.showStatus();
//       console.log("Player Status Before Shooting:");

//       const item1 = this.getRandomItem();
//       const item2 = this.getRandomItem();
//       console.log("Player Status After Getting Items:");

//       this.player1.useItem(item1);
//       this.player2.useItem(item2);

//       this.player1.showStatus();
//       this.player2.showStatus();

//       this.player1.hit(this.player2);
//       this.player2.hit(this.player1);
//       console.log("Player Shooting: ");

//       console.log("Player Status after Shooting: ");

//       this.player1.showStatus();
//       this.player2.showStatus();

//       if (this.player1.health <= 0) {
//         console.log(`Winner: ${this.player2.name}`);
//       } else {
//         console.log(`Winner: ${this.player1.name}`);
//       }
//     }
//   }
// }

// const player1 = new Player("Player A");
// const player2 = new Player2("Player B");
// const game = new ShootingGame(player1, player2);

// console.log(game.start());
//------------------------------------------------------------------------//

const Players = class {
  constructor(name, health = 100, power = 10) {
    this.name = name;
    this.health = health;
    this.power = power;
  }

  hitPlayer(power) {
    this.health -= power;
  }

  useItem(item) {
    this.health += item.health;
    this.power += item.power;
  }

  showStatus() {
    console.log(
      `${this.name}: Health -> ${this.health}, Power -> ${this.power}`
    );
  }
};

class ShootingGame extends Players {
  constructor(player1, player2) {
    super();
    this.player1 = player1;
    this.player2 = player2;
  }

  getRandomItem() {
    const randomNums = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
    return {
      health: randomNums(0, 10),
      power: randomNums(0, 10),
    };
  }

  start() {
    while (this.player1.health > 0 && this.player2.health > 0) {
      this.player1.showStatus();
      this.player2.showStatus();

      const item1 = this.getRandomItem();
      const item2 = this.getRandomItem();

      this.player1.useItem(item1);
      this.player2.useItem(item2);

      this.player1.showStatus();
      this.player2.showStatus();

      this.player1.hitPlayer(this.player2);
      this.player2.hitPlayer(this.player1);

      this.player1.showStatus();
      this.player2.showStatus();

      if (this.player1.health <= 0) {
        console.log(`Winner: ${this.player2.name}`);
      } else {
        console.log(`Winner: ${this.player1.name}`);
      }
    }
  }
}

const player1 = new Players("Player 1");
const player2 = new Players("Player 2");
const shoot = new ShootingGame(player1, player2);

console.log(shoot.start());
