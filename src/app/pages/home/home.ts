import { Component, inject, OnInit, signal } from '@angular/core';
import { Canditate, Experience, SocialItem } from '../../models';
import { CSharpIcon, Timeline,  } from '../../components';
import { Canditates } from '../../services';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faGlobe, IconDefinition, faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { Icons } from '../../services/icons';
import { ViewportScroller } from '@angular/common';
import { SmoothClick } from '../../directives';
import { TimelineItemModel } from '../../components/timeline/timeline.model';

interface SocialIconFontAwesome extends SocialItem {
  icon: IconDefinition
}

@Component({
  selector: 'app-home',
  imports: [Timeline, FontAwesomeModule, SmoothClick, CSharpIcon],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  private readonly candidatesService = inject(Canditates);
  private readonly iconService = inject(Icons);
  private readonly scrollService = inject(ViewportScroller);

  title = signal<string>('Eric Raymundo López Alonzo');
  canditate: Canditate | null = null;
  timelineItems: TimelineItemModel[] = [];
  educationTimeline: TimelineItemModel[] = [];
  skillIcons: IconDefinition[] = [];
  socialItems: SocialIconFontAwesome[]= [];
  faEnvelope =faEnvelope;
  faGlobe = faGlobe;
  faBriefcase = faBriefcase;
  faGraduationCap = faGraduationCap;

  ngOnInit(): void {
    this.initialize();
  }

  private async initialize(){
    this.canditate = this.candidatesService.getCandidateOne();
    this.timelineItems =this.canditate.experenceJobs.map(e => this.convertToTimelineItem(e)).sort((a,b)=> (b.dateEnd > a.dateEnd) ? 1: -1 );
    this.educationTimeline =this.canditate.education.map(e => this.convertToTimelineItem(e, true)).sort((a,b)=> (b.dateEnd > a.dateEnd) ? 1: -1 );
    this.skillIcons = this.canditate.skills.map(s => this.iconService.getIconByKeyword(s));
    this.socialItems = this.canditate.socials.map(s=> this.addIconToSocialItem(s));
  }

  private convertToTimelineItem(experience: Experience, isEducation: boolean = false): TimelineItemModel {
    return {
      title: experience.name,
      dateStart: experience.periodStart,
      dateEnd: experience.periodEnd,
      description: isEducation ? experience.degree : experience.description,
      tags: experience.technologies ?? [],
      link: experience.link
    };
  }

  private addIconToSocialItem(social: SocialItem): SocialIconFontAwesome {
    return {
      ...social,
      icon: this.iconService.getIconByKeyword(social.name)
    }
  }

  public goToSection(section: string) {
    this.scrollService.scrollToAnchor(section, { behavior:"smooth" });
  }

}
