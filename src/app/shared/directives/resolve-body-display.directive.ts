import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Directive({
  selector: '[appResolveBodyDisplay]'
})
export class ResolveBodyDisplayDirective implements OnInit {

  constructor(private router: Router,
    private elementRef: ElementRef,
    private renderer2: Renderer2) { }

  ngOnInit(): void {
    // on reload
    this.setDisplayHeight(this.router.url.includes('add'));

    // on navigation from records page to add record
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event) => {
        const isAppHeaderRemoved = (event as NavigationEnd).url.includes('add')
        this.setDisplayHeight(isAppHeaderRemoved)
      })
  }

  private setDisplayHeight(isAppHeaderRemoved: boolean): void {
    isAppHeaderRemoved ?
      this.renderer2.addClass(this.elementRef.nativeElement, 'vh-85') :
      this.renderer2.removeClass(this.elementRef.nativeElement, 'vh-85');
  }
}