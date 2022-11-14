import { Cat } from '../../Factory Design Pattern/Animal/Cat.class';
import { Dog } from '../../Factory Design Pattern/Animal/Dog.class';
import { Duck } from '../../Factory Design Pattern/Animal/Duck.class';
import { IAnimal } from '../../Factory Design Pattern/Animal/IAnimal.interface';
import { IAnimalFactory } from '../../Factory Design Pattern/Factory/IAnimalFactory.interface';

export class RanDomAnimalFactory implements IAnimalFactory {
    public createAnimal(): IAnimal {
        const rndInt = Math.floor(Math.random() * 3);
        if (rndInt == 0) {
            return new Dog();
        } else if (rndInt == 1) {
            return new Cat();
        } else {
            return new Duck();
        }
        return null;
    }
}
