import { Observable } from 'rxjs';

export interface IApiService {
    activityOverview(): Observable<any>;
    crewOverview(): Observable<any>;
    solutionActivity(): Observable<any>;
    solutionDetails(): Observable<any>;
    solutionCrew(): Observable<any>;
    solutionTimeline(): Observable<any>;
    verifyUser(userName: string): Observable<any>;
    verifyEmail(code: string): Observable<any>;
    verifyPhone(code: string): Observable<any>;
}