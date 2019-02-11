import { Component } from '@angular/core'

@Component ({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr>
        <event-thumbnail [event]="event1"></event-thumbnail>
    </div>
    `
})

export class EventListComponent {
    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '09/26/2020',
        time: '10:00 am',
        price: '599.99',
        imageURL: '/assets/images/angularconnect-shield.png',
        location: {
            address: '1728 Corporate Crossing',
            city: 'St. Louis',
            country: 'US'
        }
    };
}