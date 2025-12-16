import { Injectable } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin, faPhp, faAngular, faNodeJs, faHtml5, faCss, faJava, faAmazon, faReact, faVuejs, faJsSquare, faFacebook, faNode, faBootstrap, faAndroid, faAws  } from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

interface IconKeyWord {
  iconKeyWord: string,
  svgIcon: IconDefinition
}

@Injectable({
  providedIn: 'root',
})
export class Icons {

  private iconsDictionary: Record<string, IconDefinition> =
    {
      'html': faHtml5,
      'css': faCss,
      'js': faJsSquare,
      'javascript': faJsSquare,
      'angular': faAngular,
      'nodejs': faNodeJs,
      'node': faNode,
      'react': faReact,
      'vuejs': faVuejs,
      'php' : faPhp,
      'java': faJava,
      'github': faGithub,
      'facebook': faFacebook,
      'linkedin': faLinkedin,
      'amazon' : faAmazon,
      'bootstrap': faBootstrap,
      'android': faAndroid,
      'aws': faAws
    };


  public getIconByKeyword(keyWord: string): IconDefinition {
     return this.iconsDictionary[keyWord.toLowerCase()] ?? null;
  }
}
