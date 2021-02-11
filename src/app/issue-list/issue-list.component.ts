import { Component, OnInit } from '@angular/core';
import { Issues } from '../issues.model';

import { IssuesService } from '../issues.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  issues: any;

  constructor(private issuesService: IssuesService) { }

  ngOnInit(): void {
    this.getIssueList();
  }

  getIssueList(): void {
    this.issuesService.getIssuesList().subscribe(data => {
      // console.log(data.items);
      // this.issues = data.items;
    });
  }

}
