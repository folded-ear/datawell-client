import { Component } from '@angular/core';

@Component({
    selector: 'add-event',
    template: require('./add_event.html')
})

export class AddEvent {

    event: Event;

    constructor() {
    }
}

export class Event {
    event_date: string;
    tags: string[];
    notes: string;
}
