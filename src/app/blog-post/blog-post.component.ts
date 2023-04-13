import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentfulService } from '../services/contentful.service';
import { Observable } from 'rxjs';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Document } from '@contentful/rich-text-types/dist/types/types';




@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent {
constructor(private route: ActivatedRoute, private contentfulService: ContentfulService) { }

blogPost$: Observable<any> | undefined;

ngOnInit(): void {
this.route.params.subscribe(
  params => {
    const id = params['id'];
    this.blogPost$ = this.contentfulService.getEntryById(id);
  }
);
}



}
