import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { MiniaturePersonneComponent } from './miniature-personne/miniature-personne.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    MiniaturePersonneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
