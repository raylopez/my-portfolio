import { Component, inject, LOCALE_ID, OnInit, signal } from '@angular/core';
import { Canditate, Experience, SocialItem } from '../../models';
import { CSharpIcon, Timeline,  } from '../../components';
import { Canditates } from '../../services';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faGlobe, IconDefinition, faBriefcase, faGraduationCap, faMobile, faInbox, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Icons } from '../../services/icons';
import { ViewportScroller } from '@angular/common';
import { SmoothClick } from '../../directives';
import { TimelineItemModel } from '../../components/timeline/timeline.model';
import { File } from '../../services/file';
import { toSignal } from '@angular/core/rxjs-interop'
import { tap } from 'rxjs';
interface SocialIconFontAwesome extends SocialItem {
  icon: IconDefinition
}

@Component({
  selector: 'app-home',
  imports: [Timeline, FontAwesomeModule, SmoothClick, CSharpIcon],
  templateUrl: './home.html',
  styleUrl: './home.css',
  providers:[
    {
      provide: LOCALE_ID, useValue: 'es'
    }
  ]
})
export class Home implements OnInit {

  private readonly candidatesService = inject(Canditates);
  private readonly iconService = inject(Icons);
  private readonly scrollService = inject(ViewportScroller);
  private readonly fileService = inject(File);

  timelineItems: TimelineItemModel[] = [];
  educationTimeline: TimelineItemModel[] = [];
  skillIcons: IconDefinition[] = [];
  socialItems: SocialIconFontAwesome[]= [];
  faEnvelope =faEnvelope;
  faGlobe = faGlobe;
  faBriefcase = faBriefcase;
  faGraduationCap = faGraduationCap;
  faPhone = faPhone;
  faInbox = faInbox;

  ngOnInit(): void {
    this.initialize();
  }

  candidateToSignal = toSignal<Canditate>(this.candidatesService.getCandidateRemote()
  .pipe(
    tap((res)=> {
      this.timelineItems = res.experenceJobs.map(e => this.convertToTimelineItem(e)).sort((a,b)=> (b.dateEnd > a.dateEnd) ? 1: -1 );
      this.educationTimeline = res.education.map(e => this.convertToTimelineItem(e, true)).sort((a,b)=> (b.dateEnd > a.dateEnd) ? 1: -1 );
      this.skillIcons = res.skills.map(s => this.iconService.getIconByKeyword(s));
      this.socialItems = res.socials.map(s=> this.addIconToSocialItem(s));
    })
  )
)

  private async initialize(){
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

  public downloadResume(url: string) {
    this.fileService.downloadPdf(url).subscribe({
      next: (res) => {
        const fileUrl = URL.createObjectURL(res);
        window.open(fileUrl, '_blank');
      }
    });
  }
}
