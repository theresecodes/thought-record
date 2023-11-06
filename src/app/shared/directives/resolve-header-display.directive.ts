import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';


@Directive({
  selector: '[appResolveHeaderDisplay]'
})
export class ResolveHeaderDisplayDirective implements OnInit {

  constructor(private router: Router, private elementRef: ElementRef,
    private renderer2: Renderer2) { }

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event: unknown) => event instanceof NavigationEnd))
      .subscribe((event) => {
        if ((event as NavigationEnd)?.url.includes('add')) {
          this.renderer2.addClass(this.elementRef.nativeElement, 'd-none');
        } else {
          this.renderer2.removeClass(this.elementRef.nativeElement, 'd-none');
        }
      })
  }

}
