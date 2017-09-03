import { Observerable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService) { }

  ngOnInit() {
    Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).subscribe(combined => {
      const id = combined[0].get('id');
      const page = combined[1].get('page');

      // this.service.getAll({ id: id, page: page })
      this.service.getAll()
      .subscribe(followers => this.followers = followers);
    })

    // this.route.paramMap
    //   .subscribe(params => {

    //   });
    // const id = this.route.snapshot.paramMap.get('id');

    // this.route.queryParamMap.subscribe();
    // const page = this.route.snapshot.queryParamMap.get('page');

    // this.service.getAll()
    //   .subscribe(followers => this.followers = followers);
  }
}
