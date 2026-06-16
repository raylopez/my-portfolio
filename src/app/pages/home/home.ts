import { ViewportScroller } from '@angular/common';
import { httpResource } from '@angular/common/http';
import { Component, inject, LOCALE_ID, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBriefcase,
  faEnvelope,
  faGlobe,
  faGraduationCap,
  faInbox,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { CSharpIcon, Timeline, TimelineItemModel } from '@components';
import { Candidate, CandidateModel, Experience, SocialIconFontAwesome, SocialItem } from '@models';
import { SmoothClick } from '@directives';
import { Canditates, File, Icons } from '@services';

@Component({
  selector: 'app-home',
  imports: [FontAwesomeModule, Timeline, CSharpIcon, SmoothClick],
  templateUrl: './home.html',
  styleUrl: './home.css',
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es',
    },
  ],
})
export class Home implements OnInit {
  private readonly candidatesService = inject(Canditates);
  private readonly iconService = inject(Icons);
  private readonly scrollService = inject(ViewportScroller);
  private readonly fileService = inject(File);

  faEnvelope = faEnvelope;
  faGlobe = faGlobe;
  faBriefcase = faBriefcase;
  faGraduationCap = faGraduationCap;
  faPhone = faPhone;
  faInbox = faInbox;

  ngOnInit(): void {
    this.initialize();
  }

  candidateSignalHttp = httpResource(this.candidatesService.getCandidate, {
    parse: (response) => {
      const res = response as unknown as Candidate;
      const result: CandidateModel = {
        ...res,
        experenceJobsTimeline: res.experenceJobs
          .map((e) => this.convertToTimelineItem(e))
          .sort((a, b) => (b.dateEnd > a.dateEnd ? 1 : -1)),
        educationTimeline: res.experenceJobs
          .map((e) => this.convertToTimelineItem(e))
          .sort((a, b) => (b.dateEnd > a.dateEnd ? 1 : -1)),
        skillIcons: res.skills.map((s) => this.iconService.getIconByKeyword(s)),
        socialIcons: res.socials.map((s) => this.addIconToSocialItem(s)),
      };
      return result;
    },
  });

  private async initialize() {}

  private convertToTimelineItem(
    experience: Experience,
    isEducation: boolean = false,
  ): TimelineItemModel {
    const {
      name: title,
      periodStart: dateStart,
      periodEnd: dateEnd,
      description,
      degree,
      link,
      technologies: tags,
    } = experience;
    return {
      title,
      dateStart,
      dateEnd,
      description: isEducation ? degree : description,
      tags,
      link,
    };
  }

  private addIconToSocialItem(social: SocialItem): SocialIconFontAwesome {
    return {
      ...social,
      icon: this.iconService.getIconByKeyword(social.name),
    };
  }

  public goToSection(section: string) {
    this.scrollService.scrollToAnchor(section, { behavior: 'smooth' });
  }

  public downloadResume(url: string) {
    this.fileService.downloadPdf(url).subscribe({
      next: (res) => {
        const fileUrl = URL.createObjectURL(res);
        window.open(fileUrl, '_blank');
      },
    });
  }
}
