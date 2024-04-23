import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItem } from 'src/app/shared/interfaces/menu-item';

@Component({
  selector: 'app-list-group-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './list-group-menu.component.html',
  styleUrl: './list-group-menu.component.css',
})
export class ListGroupMenuComponent {
  menu: MenuItem[] = [
    { text: 'Component Input Example', routerLink: 'component-input-example' },
    { text: '@for Directive Example', routerLink: 'for-directive-example' },
    { text: 'Event Bind Example', routerLink: 'event-bind-example' },
    {
      text: 'Simple Datatable Example',
      routerLink: 'simple-datatable-example',
    },
    {
      text: 'Component Output Example',
      routerLink: 'component-output-example',
    },
    {
      text: 'Template Driven Form Example',
      routerLink: 'template-driven-form-example',
    },
    {
      text: 'Reactive Form Example',
      routerLink: 'reactive-form-example',
    },
    {
      text: 'HTTP Client Example',
      routerLink: 'http-client-example',
    },
    {
      text: 'User Registration Example',
      routerLink: 'user-registration-example',
    },
    {
      text: 'Restricted Content Example',
      routerLink: 'restricted-content-example',
    },
    { text: 'Fun for Nerds Game', routerLink: 'fun-for-nerds' },
    { text: 'CRUD Example', routerLink: 'crud-example' },
  ];
}
