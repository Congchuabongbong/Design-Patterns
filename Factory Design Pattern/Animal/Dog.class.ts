import { IAnimal } from '../../Factory Design Pattern/Animal/IAnimal.interface';

export class Dog implements IAnimal {
    getName() {
        return "I'm Dog";
    }
}
