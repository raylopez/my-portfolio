import { inject, Service } from '@angular/core';
import { Candidate, CandidateEditModel } from '@models';
import { HttpClient, httpResource, HttpResourceRequest } from '@angular/common/http';

@Service()
export class Canditates {
  private readonly http = inject(HttpClient);

  getCandidateEdit = httpResource<Candidate>(() => 'http://localhost:3300/candidates/first');

  public getCandidate = (): HttpResourceRequest => {
    return {
      url: 'http://localhost:3300/candidates/first',
    };
  };

  public editCandidate(id: string, candidate: CandidateEditModel) {
    return this.http.patch(`http://localhost:3300/candidates/${id}`, candidate);
  }
}
