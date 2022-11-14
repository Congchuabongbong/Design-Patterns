import { IAnimal } from '../../Factory Design Pattern/Animal/IAnimal.interface';

export class Duck implements IAnimal {
    public getName(): string {
        return "I'm Duck";
    }
}
