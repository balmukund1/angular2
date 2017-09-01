/* * * ./app/comments/components/comment-form.component.ts * * */
// Imports
import {Component, Input, OnChanges} from '@angular/core';
import {Observable} from 'rxjs/Rx';

import {CommentService} from '../services/comment.service';
import {EmitterService} from '../../emitter.service';
import {Comment} from '../model/comment'

// Component decorator
@Component({
  selector: 'comment-form',
  template: `
    <form (ngSubmit)="submitComment()">
      <div class="form-group">
        <div class="input-group">
          <span class="input-group-addon" id="basic-addon1"><span class="glyphicon glyphicon-user"></span></span>
          <input type="text" class="form-control" placeholder="Author" [(ngModel)]="model.author" name="author">
        </div>
        <br/>
        <textarea class="form-control" rows="3" placeholder="Text" [(ngModel)]="model.text" name="text"></textarea>
        <br/>
        <button *ngIf="!editing" type="submit" class="btn btn-primary btn-block">Add</button>
        <button *ngIf="editing" type="submit" class="btn btn-warning btn-block">Update</button>
      </div>
    </form>
  `,
  providers: [CommentService]
})
// Component class
export class CommentFormComponent implements OnChanges {
  // Local properties
  public model = new Comment(new Date(), '', '');
  public editing = false;

  // Input properties
  @Input() editId: string;
  @Input() listId: string;

  // Constructor with injected service
  constructor(private commentService: CommentService) {
  }


  submitComment() {
    // Variable to hold a reference of addComment/updateComment
    let commentOperation: Observable<Comment[]>;

    console.log("Editing: "+this.editing);
    console.log("Model: ");
    console.log(this.model);
    if (!this.editing) {
      // Create a new comment
      commentOperation = this.commentService.addComment(this.model)
    } else {
      // Update an existing comment
      commentOperation = this.commentService.updateComment(this.model)
    }

    // Subscribe to observable
    commentOperation.subscribe(
      comments => {
        // Emit list event
        EmitterService.get(this.listId).emit(comments);
        // Empty model
        this.model = new Comment(new Date(), '', '');
        // Switch editing status
        if (this.editing) {
          this.editing = !this.editing;
        }
      },
      err => {
        // Log errors if any
        console.log(err);
      });
  }

  ngOnChanges() {
    // Listen to the 'edit'emitted event so as populate the model
    // with the event payload
    EmitterService.get(this.editId).subscribe((comment: Comment) => {
      this.model = comment;
      this.editing = true;
    });
  }
}
