import { IAnimal } from '../../Factory Design Pattern/Animal/IAnimal.interface';

export interface IAnimalFactory {
    createAnimal: () => IAnimal;
}
