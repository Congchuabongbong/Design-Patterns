import { Cat } from '../../Factory Design Pattern/Animal/Cat.class';
import { Dog } from '../../Factory Design Pattern/Animal/Dog.class';
import { Duck } from '../../Factory Design Pattern/Animal/Duck.class';
import { IAnimal } from '../../Factory Design Pattern/Animal/IAnimal.interface';
import { IAnimalFactory } from '../../Factory Design Pattern/Factory/IAnimalFactory.interface';

export class BasicAnimalFactory implements IAnimalFactory {
    private index: number = 0;
    public createAnimal(): IAnimal {
        if (this.index == 0) {
            this.index++;
            return new Dog();
        }
        if (this.index == 1) {
            this.index++;
            return new Cat();
        }
        if (this.index == 2) {
            this.index = 0;
            return new Duck();
        }
        return null;
    }
}
