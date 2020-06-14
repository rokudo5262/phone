import { Observable } from 'rxjs';
import { NbAuthStrategy } from '../strategies/auth-strategy';
import { NbAuthResult } from './auth-result';
import { NbTokenService } from './token/token.service';
import { NbAuthToken } from './token/token';
/**
 * Common authentication service.
 * Should be used to as an interlayer between UI Components and Auth Strategy.
 */
import * as ɵngcc0 from '@angular/core';
export declare class NbAuthService {
    protected tokenService: NbTokenService;
    protected strategies: any;
    constructor(tokenService: NbTokenService, strategies: any);
    /**
     * Retrieves current authenticated token stored
     * @returns {Observable<any>}
     */
    getToken(): Observable<NbAuthToken>;
    /**
     * Returns true if auth token is present in the token storage
     * @returns {Observable<boolean>}
     */
    isAuthenticated(): Observable<boolean>;
    /**
     * Returns true if valid auth token is present in the token storage.
     * If not, calls the strategy refreshToken, and returns isAuthenticated() if success, false otherwise
     * @returns {Observable<boolean>}
     */
    isAuthenticatedOrRefresh(): Observable<boolean>;
    /**
     * Returns tokens stream
     * @returns {Observable<NbAuthSimpleToken>}
     */
    onTokenChange(): Observable<NbAuthToken>;
    /**
     * Returns authentication status stream
     * @returns {Observable<boolean>}
     */
    onAuthenticationChange(): Observable<boolean>;
    /**
     * Authenticates with the selected strategy
     * Stores received token in the token storage
     *
     * Example:
     * authenticate('email', {email: 'email@example.com', password: 'test'})
     *
     * @param strategyName
     * @param data
     * @returns {Observable<NbAuthResult>}
     */
    authenticate(strategyName: string, data?: any): Observable<NbAuthResult>;
    /**
     * Registers with the selected strategy
     * Stores received token in the token storage
     *
     * Example:
     * register('email', {email: 'email@example.com', name: 'Some Name', password: 'test'})
     *
     * @param strategyName
     * @param data
     * @returns {Observable<NbAuthResult>}
     */
    register(strategyName: string, data?: any): Observable<NbAuthResult>;
    /**
     * Sign outs with the selected strategy
     * Removes token from the token storage
     *
     * Example:
     * logout('email')
     *
     * @param strategyName
     * @returns {Observable<NbAuthResult>}
     */
    logout(strategyName: string): Observable<NbAuthResult>;
    /**
     * Sends forgot password request to the selected strategy
     *
     * Example:
     * requestPassword('email', {email: 'email@example.com'})
     *
     * @param strategyName
     * @param data
     * @returns {Observable<NbAuthResult>}
     */
    requestPassword(strategyName: string, data?: any): Observable<NbAuthResult>;
    /**
     * Tries to reset password with the selected strategy
     *
     * Example:
     * resetPassword('email', {newPassword: 'test'})
     *
     * @param strategyName
     * @param data
     * @returns {Observable<NbAuthResult>}
     */
    resetPassword(strategyName: string, data?: any): Observable<NbAuthResult>;
    /**
     * Sends a refresh token request
     * Stores received token in the token storage
     *
     * Example:
     * refreshToken('email', {token: token})
     *
     * @param {string} strategyName
     * @param data
     * @returns {Observable<NbAuthResult>}
     */
    refreshToken(strategyName: string, data?: any): Observable<NbAuthResult>;
    /**
     * Get registered strategy by name
     *
     * Example:
     * getStrategy('email')
     *
     * @param {string} provider
     * @returns {NbAbstractAuthProvider}
     */
    protected getStrategy(strategyName: string): NbAuthStrategy;
    private processResultToken;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NbAuthService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NbAuthService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImF1dGguc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4R0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOYkF1dGhTdHJhdGVneSB9IGZyb20gJy4uL3N0cmF0ZWdpZXMvYXV0aC1zdHJhdGVneSc7XG5pbXBvcnQgeyBOYkF1dGhSZXN1bHQgfSBmcm9tICcuL2F1dGgtcmVzdWx0JztcbmltcG9ydCB7IE5iVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi90b2tlbi90b2tlbi5zZXJ2aWNlJztcbmltcG9ydCB7IE5iQXV0aFRva2VuIH0gZnJvbSAnLi90b2tlbi90b2tlbic7XG4vKipcbiAqIENvbW1vbiBhdXRoZW50aWNhdGlvbiBzZXJ2aWNlLlxuICogU2hvdWxkIGJlIHVzZWQgdG8gYXMgYW4gaW50ZXJsYXllciBiZXR3ZWVuIFVJIENvbXBvbmVudHMgYW5kIEF1dGggU3RyYXRlZ3kuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5iQXV0aFNlcnZpY2Uge1xuICAgIHByb3RlY3RlZCB0b2tlblNlcnZpY2U6IE5iVG9rZW5TZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBzdHJhdGVnaWVzOiBhbnk7XG4gICAgY29uc3RydWN0b3IodG9rZW5TZXJ2aWNlOiBOYlRva2VuU2VydmljZSwgc3RyYXRlZ2llczogYW55KTtcbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgY3VycmVudCBhdXRoZW50aWNhdGVkIHRva2VuIHN0b3JlZFxuICAgICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XG4gICAgICovXG4gICAgZ2V0VG9rZW4oKTogT2JzZXJ2YWJsZTxOYkF1dGhUb2tlbj47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIGF1dGggdG9rZW4gaXMgcHJlc2VudCBpbiB0aGUgdG9rZW4gc3RvcmFnZVxuICAgICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGJvb2xlYW4+fVxuICAgICAqL1xuICAgIGlzQXV0aGVudGljYXRlZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB2YWxpZCBhdXRoIHRva2VuIGlzIHByZXNlbnQgaW4gdGhlIHRva2VuIHN0b3JhZ2UuXG4gICAgICogSWYgbm90LCBjYWxscyB0aGUgc3RyYXRlZ3kgcmVmcmVzaFRva2VuLCBhbmQgcmV0dXJucyBpc0F1dGhlbnRpY2F0ZWQoKSBpZiBzdWNjZXNzLCBmYWxzZSBvdGhlcndpc2VcbiAgICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxib29sZWFuPn1cbiAgICAgKi9cbiAgICBpc0F1dGhlbnRpY2F0ZWRPclJlZnJlc2goKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRva2VucyBzdHJlYW1cbiAgICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxOYkF1dGhTaW1wbGVUb2tlbj59XG4gICAgICovXG4gICAgb25Ub2tlbkNoYW5nZSgpOiBPYnNlcnZhYmxlPE5iQXV0aFRva2VuPjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGF1dGhlbnRpY2F0aW9uIHN0YXR1cyBzdHJlYW1cbiAgICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxib29sZWFuPn1cbiAgICAgKi9cbiAgICBvbkF1dGhlbnRpY2F0aW9uQ2hhbmdlKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogQXV0aGVudGljYXRlcyB3aXRoIHRoZSBzZWxlY3RlZCBzdHJhdGVneVxuICAgICAqIFN0b3JlcyByZWNlaXZlZCB0b2tlbiBpbiB0aGUgdG9rZW4gc3RvcmFnZVxuICAgICAqXG4gICAgICogRXhhbXBsZTpcbiAgICAgKiBhdXRoZW50aWNhdGUoJ2VtYWlsJywge2VtYWlsOiAnZW1haWxAZXhhbXBsZS5jb20nLCBwYXNzd29yZDogJ3Rlc3QnfSlcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdHJhdGVneU5hbWVcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPE5iQXV0aFJlc3VsdD59XG4gICAgICovXG4gICAgYXV0aGVudGljYXRlKHN0cmF0ZWd5TmFtZTogc3RyaW5nLCBkYXRhPzogYW55KTogT2JzZXJ2YWJsZTxOYkF1dGhSZXN1bHQ+O1xuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVycyB3aXRoIHRoZSBzZWxlY3RlZCBzdHJhdGVneVxuICAgICAqIFN0b3JlcyByZWNlaXZlZCB0b2tlbiBpbiB0aGUgdG9rZW4gc3RvcmFnZVxuICAgICAqXG4gICAgICogRXhhbXBsZTpcbiAgICAgKiByZWdpc3RlcignZW1haWwnLCB7ZW1haWw6ICdlbWFpbEBleGFtcGxlLmNvbScsIG5hbWU6ICdTb21lIE5hbWUnLCBwYXNzd29yZDogJ3Rlc3QnfSlcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdHJhdGVneU5hbWVcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPE5iQXV0aFJlc3VsdD59XG4gICAgICovXG4gICAgcmVnaXN0ZXIoc3RyYXRlZ3lOYW1lOiBzdHJpbmcsIGRhdGE/OiBhbnkpOiBPYnNlcnZhYmxlPE5iQXV0aFJlc3VsdD47XG4gICAgLyoqXG4gICAgICogU2lnbiBvdXRzIHdpdGggdGhlIHNlbGVjdGVkIHN0cmF0ZWd5XG4gICAgICogUmVtb3ZlcyB0b2tlbiBmcm9tIHRoZSB0b2tlbiBzdG9yYWdlXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOlxuICAgICAqIGxvZ291dCgnZW1haWwnKVxuICAgICAqXG4gICAgICogQHBhcmFtIHN0cmF0ZWd5TmFtZVxuICAgICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPE5iQXV0aFJlc3VsdD59XG4gICAgICovXG4gICAgbG9nb3V0KHN0cmF0ZWd5TmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxOYkF1dGhSZXN1bHQ+O1xuICAgIC8qKlxuICAgICAqIFNlbmRzIGZvcmdvdCBwYXNzd29yZCByZXF1ZXN0IHRvIHRoZSBzZWxlY3RlZCBzdHJhdGVneVxuICAgICAqXG4gICAgICogRXhhbXBsZTpcbiAgICAgKiByZXF1ZXN0UGFzc3dvcmQoJ2VtYWlsJywge2VtYWlsOiAnZW1haWxAZXhhbXBsZS5jb20nfSlcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdHJhdGVneU5hbWVcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPE5iQXV0aFJlc3VsdD59XG4gICAgICovXG4gICAgcmVxdWVzdFBhc3N3b3JkKHN0cmF0ZWd5TmFtZTogc3RyaW5nLCBkYXRhPzogYW55KTogT2JzZXJ2YWJsZTxOYkF1dGhSZXN1bHQ+O1xuICAgIC8qKlxuICAgICAqIFRyaWVzIHRvIHJlc2V0IHBhc3N3b3JkIHdpdGggdGhlIHNlbGVjdGVkIHN0cmF0ZWd5XG4gICAgICpcbiAgICAgKiBFeGFtcGxlOlxuICAgICAqIHJlc2V0UGFzc3dvcmQoJ2VtYWlsJywge25ld1Bhc3N3b3JkOiAndGVzdCd9KVxuICAgICAqXG4gICAgICogQHBhcmFtIHN0cmF0ZWd5TmFtZVxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICogQHJldHVybnMge09ic2VydmFibGU8TmJBdXRoUmVzdWx0Pn1cbiAgICAgKi9cbiAgICByZXNldFBhc3N3b3JkKHN0cmF0ZWd5TmFtZTogc3RyaW5nLCBkYXRhPzogYW55KTogT2JzZXJ2YWJsZTxOYkF1dGhSZXN1bHQ+O1xuICAgIC8qKlxuICAgICAqIFNlbmRzIGEgcmVmcmVzaCB0b2tlbiByZXF1ZXN0XG4gICAgICogU3RvcmVzIHJlY2VpdmVkIHRva2VuIGluIHRoZSB0b2tlbiBzdG9yYWdlXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOlxuICAgICAqIHJlZnJlc2hUb2tlbignZW1haWwnLCB7dG9rZW46IHRva2VufSlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJhdGVneU5hbWVcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPE5iQXV0aFJlc3VsdD59XG4gICAgICovXG4gICAgcmVmcmVzaFRva2VuKHN0cmF0ZWd5TmFtZTogc3RyaW5nLCBkYXRhPzogYW55KTogT2JzZXJ2YWJsZTxOYkF1dGhSZXN1bHQ+O1xuICAgIC8qKlxuICAgICAqIEdldCByZWdpc3RlcmVkIHN0cmF0ZWd5IGJ5IG5hbWVcbiAgICAgKlxuICAgICAqIEV4YW1wbGU6XG4gICAgICogZ2V0U3RyYXRlZ3koJ2VtYWlsJylcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwcm92aWRlclxuICAgICAqIEByZXR1cm5zIHtOYkFic3RyYWN0QXV0aFByb3ZpZGVyfVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRTdHJhdGVneShzdHJhdGVneU5hbWU6IHN0cmluZyk6IE5iQXV0aFN0cmF0ZWd5O1xuICAgIHByaXZhdGUgcHJvY2Vzc1Jlc3VsdFRva2VuO1xufVxuIl19