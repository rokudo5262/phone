import { Observable, BehaviorSubject } from 'rxjs';
import { NbTokenStorage } from './token-storage';
import { NbAuthToken } from './token';
/**
 * Service that allows you to manage authentication token - get, set, clear and also listen to token changes over time.
 */
import * as ɵngcc0 from '@angular/core';
export declare class NbTokenService {
    protected tokenStorage: NbTokenStorage;
    protected token$: BehaviorSubject<NbAuthToken>;
    constructor(tokenStorage: NbTokenStorage);
    /**
     * Publishes token when it changes.
     * @returns {Observable<NbAuthToken>}
     */
    tokenChange(): Observable<NbAuthToken>;
    /**
     * Sets a token into the storage. This method is used by the NbAuthService automatically.
     *
     * @param {NbAuthToken} token
     * @returns {Observable<any>}
     */
    set(token: NbAuthToken): Observable<null>;
    /**
     * Returns observable of current token
     * @returns {Observable<NbAuthToken>}
     */
    get(): Observable<NbAuthToken>;
    /**
     * Removes the token and published token value
     *
     * @returns {Observable<any>}
     */
    clear(): Observable<null>;
    protected publishStoredToken(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NbTokenService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NbTokenService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJ0b2tlbi5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEJBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOYlRva2VuU3RvcmFnZSB9IGZyb20gJy4vdG9rZW4tc3RvcmFnZSc7XG5pbXBvcnQgeyBOYkF1dGhUb2tlbiB9IGZyb20gJy4vdG9rZW4nO1xuLyoqXG4gKiBTZXJ2aWNlIHRoYXQgYWxsb3dzIHlvdSB0byBtYW5hZ2UgYXV0aGVudGljYXRpb24gdG9rZW4gLSBnZXQsIHNldCwgY2xlYXIgYW5kIGFsc28gbGlzdGVuIHRvIHRva2VuIGNoYW5nZXMgb3ZlciB0aW1lLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOYlRva2VuU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIHRva2VuU3RvcmFnZTogTmJUb2tlblN0b3JhZ2U7XG4gICAgcHJvdGVjdGVkIHRva2VuJDogQmVoYXZpb3JTdWJqZWN0PE5iQXV0aFRva2VuPjtcbiAgICBjb25zdHJ1Y3Rvcih0b2tlblN0b3JhZ2U6IE5iVG9rZW5TdG9yYWdlKTtcbiAgICAvKipcbiAgICAgKiBQdWJsaXNoZXMgdG9rZW4gd2hlbiBpdCBjaGFuZ2VzLlxuICAgICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPE5iQXV0aFRva2VuPn1cbiAgICAgKi9cbiAgICB0b2tlbkNoYW5nZSgpOiBPYnNlcnZhYmxlPE5iQXV0aFRva2VuPjtcbiAgICAvKipcbiAgICAgKiBTZXRzIGEgdG9rZW4gaW50byB0aGUgc3RvcmFnZS4gVGhpcyBtZXRob2QgaXMgdXNlZCBieSB0aGUgTmJBdXRoU2VydmljZSBhdXRvbWF0aWNhbGx5LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOYkF1dGhUb2tlbn0gdG9rZW5cbiAgICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgICAqL1xuICAgIHNldCh0b2tlbjogTmJBdXRoVG9rZW4pOiBPYnNlcnZhYmxlPG51bGw+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgb2JzZXJ2YWJsZSBvZiBjdXJyZW50IHRva2VuXG4gICAgICogQHJldHVybnMge09ic2VydmFibGU8TmJBdXRoVG9rZW4+fVxuICAgICAqL1xuICAgIGdldCgpOiBPYnNlcnZhYmxlPE5iQXV0aFRva2VuPjtcbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRoZSB0b2tlbiBhbmQgcHVibGlzaGVkIHRva2VuIHZhbHVlXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgICAqL1xuICAgIGNsZWFyKCk6IE9ic2VydmFibGU8bnVsbD47XG4gICAgcHJvdGVjdGVkIHB1Ymxpc2hTdG9yZWRUb2tlbigpOiB2b2lkO1xufVxuIl19