import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-sidebar-menu',
  imports: [CommonModule],
   template: ` 
   <a class="w-full flex items-center gap-x-2 py-1 px-1.5 text-sm text-gray-500 rounded-lg hover:bg-gray-200 hover:text-gray-800 focus:outline-hidden
    focus:bg-gray-200 focus:text-gray-800 dark:hover:bg-neutral-800 dark:hover:text-neutral-200 dark:focus:bg-neutral-800 dark:focus:text-neutral-500 dark:text-neutral-500" href="#">
                  {{menuName}}
                </a>
  
  `,
  styleUrls: ['./sidebar-menu.scss']
})
export class SidebarMenu {
 
  @Input()  menuName = 'Button';
  @Output()  onClick = new EventEmitter<Event>();
 
}
