// ====== ./app/app.routes.ts ======

// Imports
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocalFormComponent } from './lform/LocalFormComponent';
import { MainComponent } from './main/MainComponent';
import {CommentComponent} from "./comments/components/comment-main";

// Route Configuration
export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'lform', component: LocalFormComponent },
  { path: 'remote', component: CommentComponent}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
