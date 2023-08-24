import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

/**
 * Applies the background color code based on the core emotion grouping.
 * @see RecordCardComponent emotion chip
 */
@Directive({
  selector: '[appEmotionBg]'
})
export class EmotionBgDirective implements OnInit {
  @Input() appEmotionBg = '';

  constructor(
    private renderer: Renderer2,
    private elRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.renderer.addClass(this.elRef.nativeElement, this.appEmotionBg);
  }

}
