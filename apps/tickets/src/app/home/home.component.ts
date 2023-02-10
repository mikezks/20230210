import {
  Component,
  ComponentRef,
  inject,
  Type,
  ViewContainerRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { loadRemoteModule } from '@angular-architects/module-federation';

function injectPlaceholder(): ViewContainerRef {
  return inject(ViewContainerRef);
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  #vc = injectPlaceholder();
  comp?: ComponentRef<unknown>;

  loadMfe(): void {
    loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './Component',
    }).then((esm) => {
      this.comp = this.#vc.createComponent(esm.default);
      this.changeName('Michael');
    });
  }

  changeName(name: string): void {
    this.comp?.setInput('name', name);
  }
}
