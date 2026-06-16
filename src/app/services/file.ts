import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { map } from 'rxjs';

@Service()
export class File {
  private readonly http = inject(HttpClient);

  public downloadPdf(path: string) {
    return this.http.get(path, { responseType: 'blob' }).pipe(
      map((res) => {
        return new Blob([res], { type: 'application/pdf' });
      }),
    );
  }
}
