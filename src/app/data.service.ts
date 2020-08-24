import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  private data(): any {
   return  this.http.get('assets/data.json');
  }

  public getData(): any{
    return this.data();
  }

}
