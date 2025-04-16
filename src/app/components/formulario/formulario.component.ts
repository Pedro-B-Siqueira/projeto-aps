import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  imports: [],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  constructor(private router: Router) {}

    nome: string = '';
    email: string = '';
    telefone: string = '';


  formatarTelefone(event: any): void {
    let valor = event.target.value.replace(/\D/g, '');
  
    if (!valor) {
      event.target.value = '';
      return;
    }
  
    if (valor.length > 10) {
      valor = valor.slice(0, 10);
    }
  
    if (valor.length >= 7) {
      valor = valor.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    } else if (valor.length >= 3) {
      valor = valor.replace(/(\d{2})(\d{0,5})/, '($1) $2');
    } else {
      valor = valor.replace(/(\d{0,2})/, '($1');
    }
  
    event.target.value = valor;
    
  }

  nomePreenchido(): boolean {
    return this.nome.trim() !== ''
  }

  formatarNome(event: any): void {
    this.nome = event.target.value.replace(/\s+/g, ' ').trim(); 
  }

  formatarEmail(event: any): void {
    this.email = event.target.value.trim();
  }

  todosCamposPreenchidos(): boolean {
    return (
      this.nome.trim() !== '' &&
      this.email.trim() !== '' &&
      this.telefone.trim().length === 14
    )
  }

  Voltar() {
    this.router.navigate(['']);
  }
}

