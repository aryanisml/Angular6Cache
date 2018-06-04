import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { SampleService, Joke, JokeResponse } from './sample.service';
import { CacheService } from './cache.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular 6';
  jokes$: Observable<Array<Joke>>;
  testdata: any;
  constructor(private sampleService: SampleService,
    private cacheService: CacheService) {
    // this.jokes$= this.sampleService.jokes;
  }
  ngOnInit() {
    // this.jokes$ = this.sampleService.jokes;
    this.jokes$ = this.cacheService.get('jokes', this.sampleService.requestJokes2(), 1000);
    // console.log(this.testdata);
  }
  Show() {
    // this.jokes$.subscribe((data: any) => {
    //   console.log(data);
    // });
    // this.jokes$ = this.sampleService.jokes;
    // console.log(`jokes...- ${this.jokes$}`);
    //  console.log(this.testdata);
    this.jokes$ = this.cacheService.get('jokes', this.sampleService.requestJokes2(), 5000);
    // this.jokes$.subscribe((data: any) => {
    //   console.log(data);
    // });
    const J: JokeResponse = this.jokes$;
    console.log(J.value);
    console.log(`jokes...- ${this.jokes$}`);
  }
}
