import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router){ }

  trocarPagina() {
    this.router.navigate(['/confiramais']);
  }
  trocarPaginaHome() {
    this.router.navigate(['']);
  }
  trocarPagFormulario() {
    this.router.navigate(['/formulario']);
  }
}
