import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Svg {
  private readonly http = inject(HttpClient);
  private readonly sanitizer = inject(DomSanitizer);

  public async getSvg(path: string): Promise<SafeHtml> {
    const prom = await firstValueFrom(this.http.get(path, { responseType: 'text' }));
    return this.sanitizer.bypassSecurityTrustHtml(prom);
  }
}
