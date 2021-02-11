import { Component, OnInit } from '@angular/core';
import { Issues } from '../issues.model';

import { IssuesService } from '../issues.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  detail: any;
  issues: any;

  constructor(private issuesService: IssuesService) { }

  ngOnInit(): void {
    this.getIssueList();
    this.getDetail();
  }

  getDetail() {
    this.issuesService.getDetail().subscribe(data => {
      console.log(data);
      this.detail = data;
    });
  }

  getIssueList(): void {
    this.issuesService.getIssuesList().subscribe(data => {
      console.log(data);
      this.issues = data.items;
    });
  }

  onChangeEvent(event: any){
    this.issuesService.getIssuesList(event.target.value).subscribe(data => {
      console.log(data);
      this.issues = data.items;
    });
    console.log(event.target.value);

  }
}
