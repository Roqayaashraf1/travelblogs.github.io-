import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  standalone: true,
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  ngOnInit() {
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');

    if (next && prev) {
      next.addEventListener('click', () => {
        const items = document.querySelectorAll('.item');
        document.querySelector('.slide')?.appendChild(items[0]);
      });

      prev.addEventListener('click', () => {
        const items = document.querySelectorAll('.item');
        document.querySelector('.slide')?.prepend(items[items.length - 1]);
      });
    }
  }

}
