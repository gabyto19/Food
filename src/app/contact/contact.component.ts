import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  animations: [
    trigger('growShrink', [
      state('shrink', style({
        height: '200px', // Default height
        flex: '1'
      })),
      state('grow', style({
        height: '300px', // Expanded height
        flex: '2'
      })),
      transition('shrink <=> grow', animate('300ms ease-in-out'))
    ])
  ]
})
export class ContactComponent {
  contacts = [
    {
      id: 1,
      name: 'John Doe',
      description: 'Contact details for John Doe',
      expanded: false,
    },
    {
      id: 2,
      name: 'Jane Smith',
      description: 'Contact details for Jane Smith',
      expanded: false,
    },
    {
      id: 3,
      name: 'William Johnson',
      description: 'Contact details for William Johnson',
      expanded: false,
    },
    {
      id: 4,
      name: 'William Johnson',
      description: 'Contact details for William Johnson',
      expanded: false,
    },
  ];

  toggleContact(selectedContact: any): void {
    this.contacts.forEach((contact) => {
      if (contact.id === selectedContact.id) {
        contact.expanded = !contact.expanded;
      } else {
        contact.expanded = false;
      }
    });
  }
  getGridTemplateColumns(): string {
    const expandedContact = this.contacts.find((contact) => contact.expanded);
    if (expandedContact) {
      // Assuming a 3-column layout: expanded item takes 2fr, others take 1fr each
      return '1fr 2fr 1fr';
    }
    // Default case: all items equal size
    return '1fr 1fr 1fr';
  }
}
