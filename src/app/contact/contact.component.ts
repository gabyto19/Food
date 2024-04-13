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
      state(
        'shrink',
        style({
          height: '200px', // Default height
          flex: '1',
        })
      ),
      state(
        'grow',
        style({
          height: '500px', // Expanded height
          flex: '2',
        })
      ),
      transition('shrink <=> grow', animate('300ms ease-in-out')),
    ]),
  ],
})
export class ContactComponent {
  id: any;
  contacts = [
    {
      id: 1,
      name: 'Email Us',
      description: 'Contact details for John Doe',
      expanded: false,
      imageUrl: '/assets/imgs/Contact/icons/mail.png',
    },
    {
      id: 2,
      name: 'Call Us',
      description: 'Contact details for Jane Smith',
      expanded: false,
      imageUrl: '/assets/imgs/Contact/icons/call.png',
    },
    {
      id: 3,
      name: 'Live Chat',
      description: 'Contact details for William Johnson',
      expanded: false,
      imageUrl: '/assets/imgs/Contact/icons/live.png',
    },
    {
      id: 4,
      name: 'Leave Feedback',
      description: 'Contact details for William Johnson',
      expanded: false,
      imageUrl: '/assets/imgs/Contact/icons/feedback.png',
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
      return '1fr 3fr 1fr';
    }
    // Default case: all items equal size
    return '1fr 1fr 1fr';
  }
  click(id:any){
    this.id = id;
  }

}
