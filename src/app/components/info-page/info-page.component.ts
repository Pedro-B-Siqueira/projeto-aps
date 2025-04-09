import { Component, computed, HostListener, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-info-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './info-page.component.html',
  styleUrl: './info-page.component.css'
})
export class InfoPageComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
    // Signal controlando visibilidade do botão
    private scrollY = signal(0);
    mostrarBotao = computed(() => this.scrollY() > 300); // só aparece depois de 300px

    ngOnInit(): void {
      // Detecta fragmentos na URL e faz scroll suave
      this.route.fragment.subscribe(fragment => {
        if (fragment) {
          const element = document.getElementById(fragment);
          if (element) {
            setTimeout(() => {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
          }
        }
      });
    }

    // Escuta do scroll da página
    @HostListener('window:scroll', [])
    onWindowScroll() {
      this.scrollY.set(window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0);
    }

    // Voltar ao topo suavemente
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
