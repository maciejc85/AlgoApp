import { Directive, ElementRef, Input, HostListener} from '@angular/core';


@Directive({ selector: '[myHighlight]' })
export class HighlightDirective {

    el: HTMLElement;
    

    constructor(el: ElementRef) {
        this.el = el.nativeElement;
    }

    @Input('myHighlight') highlightColor: string;

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight('yellow');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }

    private highlight(color: string) {
        this.el.style.backgroundColor = color;
    }
}