import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import {MarkdownModule} from 'ngx-markdown';
import { NgxContentfulRichTextModule } from 'ngx-contentful-rich-text';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxContentfulRichTextModule,
    MarkdownModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
