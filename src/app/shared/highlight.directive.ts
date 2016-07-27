import { Directive, ElementRef, Input, HostListener} from '@angular/core';


@Directive({ selector: '[myHighlight]' })
export class HighlightDirective {

    el: HTMLElement;
    private _secondColor = 'red';

    constructor(el: ElementRef) {
        this.el = el.nativeElement;
    }

    @Input() set secondColor(colorName: string) {
        this._secondColor = colorName || this._secondColor;
    }

    @Input('myHighlight') highlightColor: string;

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.highlightColor || this._secondColor);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }

    private highlight(color: string) {
        this.el.style.backgroundColor = color;
    }
}