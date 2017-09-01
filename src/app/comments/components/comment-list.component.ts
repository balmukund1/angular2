/* * * ./app/comments/components/comment-list.component.ts * * */
// Imports
import {Component, OnInit, Input, OnChanges} from '@angular/core';

import {Comment} from '../model/comment';
import {CommentService} from '../services/comment.service';
import {EmitterService} from '../../emitter.service';

// Component decorator
@Component({
  selector: 'comment-list',
  template: `
    <comment-box [editId]="editId" [listId]="listId" *ngFor="let comment of comments" [comment]="comment"></comment-box>
  `,

})
// Component class
export class CommentListComponent implements OnInit, OnChanges {

  // Local properties
  public comments: Comment[];
  // Input properties
  @Input() listId: string;
  @Input() editId: string;

  // Constructor with injected service
  constructor(private commentService: CommentService) {
  }

  loadComments() {
    // Get all comments
    this.commentService.getComments()
      .subscribe(
        comments => this.comments = comments, // Bind to view
        err => {
          // Log errors if any
          console.log(err);
        });
  }

  ngOnInit() {
    // Load comments
    this.loadComments()
  }


  ngOnChanges(changes: any) {
    // Listen to the 'list'emitted event so as populate the model
    // with the event payload
    console.log("Changes: OnInit");
    console.log(changes);
    EmitterService.get(this.listId).subscribe((comments: Comment[]) => {
      this.comments = comments
    });
  }

}
