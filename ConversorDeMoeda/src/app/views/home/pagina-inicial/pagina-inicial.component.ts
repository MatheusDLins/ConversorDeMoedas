import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    const rotate = this.el.nativeElement.querySelector('.rotate');
    this.renderer.listen(rotate, 'click', () => {
      if (rotate.classList.contains('rotate-360')) {
        this.renderer.removeClass(rotate, 'rotate-360');
      } else {
        this.renderer.addClass(rotate, 'rotate-360');
      }
    });
  }


}


