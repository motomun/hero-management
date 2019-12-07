import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heros';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private _heroService : HeroService) { }

  ngOnInit() {
    this.getHeros();
  }

  getHeros():void {
    this._heroService.getHeros().subscribe(heros => this.heroes = heros);
  }

onSelect(test: Hero):void{
this.selectedHero = test;
}

}
