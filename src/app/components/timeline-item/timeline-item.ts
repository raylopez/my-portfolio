import { Component, inject, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCalendar, IconDefinition, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { TimelineItemModel } from '../timeline/timeline.model';


@Component({
  selector: 'timeline-item',
  imports: [DatePipe, FontAwesomeModule],
  templateUrl: './timeline-item.html',
  styleUrl: './timeline-item.css',
})
export class TimelineItem {
  item = input.required<TimelineItemModel>();
  icon = input<IconDefinition>(faCalendar);
  faGlobe = faGlobe;
}
