// Imports
import { Component} from '@angular/core';

@Component({
    selector: 'comment-widget',
    template: `
        <div>
            <comment-form [listId]="listId" [editId]="editId"></comment-form>
            <comment-list [listId]="listId" [editId]="editId"></comment-list>
        </div>
    `,
})
export class CommentComponent {
    // Event tracking properties
    public listId = 'COMMENT_COMPONENT_LIST';
    public editId = 'COMMENT_COMPONENT_EDIT';
 }
