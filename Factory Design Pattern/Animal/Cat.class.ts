import { IAnimal } from '../../Factory Design Pattern/Animal/IAnimal.interface';

export class Cat implements IAnimal {
    getName() {
        return "I'm Cat";
    }
}
