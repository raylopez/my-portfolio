import { Component, input } from '@angular/core';
import { TimelineItem } from '../timeline-item/timeline-item';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { TimelineItemModel } from './timeline.model';

@Component({
  selector: 'timeline',
  imports: [TimelineItem],
  templateUrl: './timeline.html',
  styleUrl: './timeline.css',
})
export class Timeline {
  items = input<TimelineItemModel[]>([]);
  generalIcon = input<IconDefinition>(faCalendarDays);
}
