import { BasicAnimalFactory } from "./Factory Design Pattern/Factory/BasicAnimalFactory.class";
import { IAnimalFactory } from "./Factory Design Pattern/Factory/IAnimalFactory.interface";
import { RanDomAnimalFactory } from "./Factory Design Pattern/Factory/RanDomAnimalFactory.class";

function main() {
    const rndInt = Math.floor(Math.random() * 2);
    let factory: IAnimalFactory;
    if (rndInt == 0) {
        console.log('basic');
        factory = new BasicAnimalFactory();
    } else if (rndInt == 1) {
        console.log('random');
        factory = new RanDomAnimalFactory();
    } else {
    }
    console.log(factory.createAnimal().getName());
    console.log(factory.createAnimal().getName());
    console.log(factory.createAnimal().getName());
}

const idSti = setInterval(() => {
    main();
}, 3000);

const idSto = setTimeout(() => {
    clearInterval(idSti);
    clearTimeout(idSto);
}, 21000);
