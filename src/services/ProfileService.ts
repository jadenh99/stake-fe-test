import { Observable, map, throwError } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

export type Profile = {
  name: string;
  email: string;
  holdings: [{ symbol: string; shares: number }];
};
@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private url = 'assets/data/profile.json';

  constructor(private http: HttpClient) {}

  getProfileData(): Observable<Profile> {
    return this.http.get<Profile>(this.url).pipe(
      catchError((err) => {
        console.error('Error fetching profile:', err);
        return throwError(() => new Error('Failed to fetch profile'));
      })
    );
  }

  getHoldings(): Observable<{ symbol: string; shares: number }[]> {
    return this.http.get<Profile>(this.url).pipe(
      map((profile) => profile.holdings.map((holding) => holding)),
      catchError((err) => {
        console.error('Error fetching holdings:', err);
        return throwError(() => new Error('Failed to fetch holdings'));
      })
    );
  }
}
