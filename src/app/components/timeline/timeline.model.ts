export interface TimelineItemModel {
  dateStart: Date;
  dateEnd: Date;
  title: string;
  subtitle?: string;
  description: string,
  tags: Array<string>,
  link?: string
}

