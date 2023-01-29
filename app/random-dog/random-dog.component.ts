import {Component, Injectable} from '@angular/core';
import {randomDogService} from "../../service/random-dog-service";

@Component({
  selector: 'app-random-dog',
  templateUrl: './random-dog.component.html',
  styleUrls: ['./random-dog.component.css']
})

@Injectable()
export class RandomDogComponent {

  constructor(private randomDog: randomDogService) {}

  dogUrl: string;

  getRandomDog(){

    this.randomDog.getRandomDog().subscribe(dog => this.dogUrl = dog.message)
  }


}
