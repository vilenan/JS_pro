// 3. *Некая сеть фастфуда предлагает несколько видов гамбургеров:
// ### Маленький (50 рублей, 20 калорий).
// ### Большой (100 рублей, 40 калорий). 
//### Гамбургер может быть с одним из нескольких видов начинок (обязательно):
// ### С сыром (+10 рублей, +20 калорий).
// ### С салатом (+20 рублей, +5 калорий).
// ### С картофелем (+15 рублей, +10 калорий). 
// ### Дополнительно гамбургер можно посыпать приправой (+15 рублей, +0 калорий) 
// и полить майонезом (+20 рублей, +5 калорий). 
// ### 3Напишите программу, рассчитывающую стоимость и калорийность гамбургера. 
// Можно использовать примерную архитектуру класса из методички, но можно использовать и свою.

let gamInfo = {
    isBig: false,
    isSmall: true,
    isCheese: true,
    isSalad: true,
    isPotato: true,
    isSpices: true,
    isSause: true
}

class Gamburger {
    constructor(gamburger) {
        this.isBig = gamburger.isBig; 
        this.isSmall = gamburger.isSmall; 
        this.isCheese = gamburger.isCheese;
        this.isSalad = gamburger.isSalad;
        this.isPotato = gamburger.isPotato;
        this.isSpices = gamburger.isSpices;
        this.isSause = gamburger.isSause;
    }


    totalGamburgerCost() {
        let totalSum = 0;
        let toppingSum = this.isCheese * 10 + this.isSalad * 20 + this.isPotato * 15 + this.isSpices * 15 + this.isSause * 20;


        if (this.isBig) {
            totalSum = 100 + toppingSum;
        } else {
            totalSum = 50 + toppingSum;
        }
        return totalSum;

    }

    totalGamburgerСalories() {
        let totalСalories = 0;
        let toppingСalories = this.isCheese * 20 + this.isSalad * 5 + this.isPotato * 10 + this.isSpices * 0 + this.isSause * 5;

        if (this.isBig) {
            totalСalories = 40 + toppingСalories;
        } else {
            totalСalories = 20 + toppingСalories;
        }
        return totalСalories;
    }
}
const gam1 = new Gamburger(gamInfo);
console.log(gam1);
let costProduct = gam1.totalGamburgerCost();
let caloriesProduct = gam1.totalGamburgerСalories();
console.log(`Ваш гамбургер стоит: ${costProduct}, калорийность: ${caloriesProduct}`);