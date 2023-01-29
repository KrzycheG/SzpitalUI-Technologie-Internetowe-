import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Dog} from "../dto/dog";


@Injectable()
export class randomDogService {
  constructor(private http: HttpClient) {
  }

  getDogUrl = 'https://dog.ceo/api/breeds/image/random'

  getRandomDog() {
    return this.http.get<Dog>(this.getDogUrl)
  }

}




