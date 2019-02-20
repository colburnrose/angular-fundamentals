import { Component, Input } from '@angular/core'


@Component ({
    selector: 'event-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">
        <h2>{{event?.name}}</h2>
        <div>Date: {{event?.date}}</div>
        <div [class.green]="event?.time === '8:00 am'" [ngSwitch]="event?.time">
            Time: {{event?.time}}
            <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
            <span *ngSwitchDefault>(Normal Start)</span> 
        </div>

        <div>Price: \${{event?.price}}</div>
        <div>
            <span>Location: {{event?.location?.address}}</span>
            <span class="pad-left">{{event?.location?.city}}, {{event?.location.country}}</span>
        </div>
        <div *ngIf="event?.onlineUrl">
            Online: {{event?.onlineUrl}}
        </div>
    </div>
    `,
    styles: [`
    .green { color: #003300 !important;}
    .pad-left {margin-left: 10px;} 
    .well div {color: #bbb;} 
    .thumbnail {min-height: 210px;}`
]
})

export class EventThumbNailComponent {
    @Input() event: any; // passed in from another component

    someString: 'string';

    logFoo() {
        console.log('foo');
    }
}
