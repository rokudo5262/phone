import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { NbAuthStrategy } from '../auth-strategy';
import { NbAuthRefreshableToken, NbAuthToken } from '../../services/token/token';
import { NbAuthResult } from '../../services/auth-result';
import { NbOAuth2AuthStrategyOptions } from './oauth2-strategy.options';
import { NbAuthStrategyClass } from '../../auth.options';
/**
 * OAuth2 authentication strategy.
 *
 * Strategy settings:
 *
 * ```ts
 * export enum NbOAuth2ResponseType {
 *   CODE = 'code',
 *   TOKEN = 'token',
 * }
 *
 * export enum NbOAuth2GrantType {
 *   AUTHORIZATION_CODE = 'authorization_code',
 *   PASSWORD = 'password',
 *   REFRESH_TOKEN = 'refresh_token',
 * }
 *
 * export class NbOAuth2AuthStrategyOptions {
 *   name: string;
 *   baseEndpoint?: string = '';
 *   clientId: string = '';
 *   clientSecret: string = '';
 *   clientAuthMethod: string = NbOAuth2ClientAuthMethod.NONE;
 *   redirect?: { success?: string; failure?: string } = {
 *     success: '/',
 *     failure: null,
 *   };
 *   defaultErrors?: any[] = ['Something went wrong, please try again.'];
 *   defaultMessages?: any[] = ['You have been successfully authenticated.'];
 *   authorize?: {
 *     endpoint?: string;
 *     redirectUri?: string;
 *     responseType?: string;
 *     requireValidToken: true,
 *     scope?: string;
 *     state?: string;
 *     params?: { [key: string]: string };
 *   } = {
 *     endpoint: 'authorize',
 *     responseType: NbOAuth2ResponseType.CODE,
 *   };
 *   token?: {
 *     endpoint?: string;
 *     grantType?: string;
 *     requireValidToken: true,
 *     redirectUri?: string;
 *     scope?: string;
 *     class: NbAuthTokenClass,
 *   } = {
 *     endpoint: 'token',
 *     grantType: NbOAuth2GrantType.AUTHORIZATION_CODE,
 *     class: NbAuthOAuth2Token,
 *   };
 *   refresh?: {
 *     endpoint?: string;
 *     grantType?: string;
 *     scope?: string;
 *     requireValidToken: true,
 *   } = {
 *     endpoint: 'token',
 *     grantType: NbOAuth2GrantType.REFRESH_TOKEN,
 *   };
 * }
 * ```
 *
 */
import * as ɵngcc0 from '@angular/core';
export declare class NbOAuth2AuthStrategy extends NbAuthStrategy {
    protected http: HttpClient;
    protected route: ActivatedRoute;
    protected window: any;
    static setup(options: NbOAuth2AuthStrategyOptions): [NbAuthStrategyClass, NbOAuth2AuthStrategyOptions];
    get responseType(): any;
    get clientAuthMethod(): any;
    protected redirectResultHandlers: {
        [key: string]: Function;
    };
    protected redirectResults: {
        [key: string]: Function;
    };
    protected defaultOptions: NbOAuth2AuthStrategyOptions;
    constructor(http: HttpClient, route: ActivatedRoute, window: any);
    authenticate(data?: any): Observable<NbAuthResult>;
    getAuthorizationResult(): Observable<any>;
    refreshToken(token: NbAuthRefreshableToken): Observable<NbAuthResult>;
    passwordToken(username: string, password: string): Observable<NbAuthResult>;
    protected authorizeRedirect(): void;
    protected isRedirectResult(): Observable<boolean>;
    protected requestToken(code: string): Observable<NbAuthResult>;
    protected buildCodeRequestData(code: string): any;
    protected buildRefreshRequestData(token: NbAuthRefreshableToken): any;
    protected buildPasswordRequestData(username: string, password: string): string;
    protected buildAuthHeader(): any;
    protected cleanParams(params: any): any;
    protected addCredentialsToParams(params: any): any;
    protected handleResponseError(res: any): Observable<NbAuthResult>;
    protected buildRedirectUrl(): string;
    protected parseHashAsQueryParams(hash: string): {
        [key: string]: string;
    };
    protected urlEncodeParameters(params: any): string;
    protected createRefreshedToken(res: any, existingToken: NbAuthRefreshableToken, requireValidToken: boolean): NbAuthToken;
    register(data?: any): Observable<NbAuthResult>;
    requestPassword(data?: any): Observable<NbAuthResult>;
    resetPassword(data?: any): Observable<NbAuthResult>;
    logout(): Observable<NbAuthResult>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NbOAuth2AuthStrategy>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NbOAuth2AuthStrategy>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2F1dGgyLXN0cmF0ZWd5LmQudHMiLCJzb3VyY2VzIjpbIm9hdXRoMi1zdHJhdGVneS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE5iQXV0aFN0cmF0ZWd5IH0gZnJvbSAnLi4vYXV0aC1zdHJhdGVneSc7XG5pbXBvcnQgeyBOYkF1dGhSZWZyZXNoYWJsZVRva2VuLCBOYkF1dGhUb2tlbiB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3Rva2VuL3Rva2VuJztcbmltcG9ydCB7IE5iQXV0aFJlc3VsdCB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGgtcmVzdWx0JztcbmltcG9ydCB7IE5iT0F1dGgyQXV0aFN0cmF0ZWd5T3B0aW9ucyB9IGZyb20gJy4vb2F1dGgyLXN0cmF0ZWd5Lm9wdGlvbnMnO1xuaW1wb3J0IHsgTmJBdXRoU3RyYXRlZ3lDbGFzcyB9IGZyb20gJy4uLy4uL2F1dGgub3B0aW9ucyc7XG4vKipcbiAqIE9BdXRoMiBhdXRoZW50aWNhdGlvbiBzdHJhdGVneS5cbiAqXG4gKiBTdHJhdGVneSBzZXR0aW5nczpcbiAqXG4gKiBgYGB0c1xuICogZXhwb3J0IGVudW0gTmJPQXV0aDJSZXNwb25zZVR5cGUge1xuICogICBDT0RFID0gJ2NvZGUnLFxuICogICBUT0tFTiA9ICd0b2tlbicsXG4gKiB9XG4gKlxuICogZXhwb3J0IGVudW0gTmJPQXV0aDJHcmFudFR5cGUge1xuICogICBBVVRIT1JJWkFUSU9OX0NPREUgPSAnYXV0aG9yaXphdGlvbl9jb2RlJyxcbiAqICAgUEFTU1dPUkQgPSAncGFzc3dvcmQnLFxuICogICBSRUZSRVNIX1RPS0VOID0gJ3JlZnJlc2hfdG9rZW4nLFxuICogfVxuICpcbiAqIGV4cG9ydCBjbGFzcyBOYk9BdXRoMkF1dGhTdHJhdGVneU9wdGlvbnMge1xuICogICBuYW1lOiBzdHJpbmc7XG4gKiAgIGJhc2VFbmRwb2ludD86IHN0cmluZyA9ICcnO1xuICogICBjbGllbnRJZDogc3RyaW5nID0gJyc7XG4gKiAgIGNsaWVudFNlY3JldDogc3RyaW5nID0gJyc7XG4gKiAgIGNsaWVudEF1dGhNZXRob2Q6IHN0cmluZyA9IE5iT0F1dGgyQ2xpZW50QXV0aE1ldGhvZC5OT05FO1xuICogICByZWRpcmVjdD86IHsgc3VjY2Vzcz86IHN0cmluZzsgZmFpbHVyZT86IHN0cmluZyB9ID0ge1xuICogICAgIHN1Y2Nlc3M6ICcvJyxcbiAqICAgICBmYWlsdXJlOiBudWxsLFxuICogICB9O1xuICogICBkZWZhdWx0RXJyb3JzPzogYW55W10gPSBbJ1NvbWV0aGluZyB3ZW50IHdyb25nLCBwbGVhc2UgdHJ5IGFnYWluLiddO1xuICogICBkZWZhdWx0TWVzc2FnZXM/OiBhbnlbXSA9IFsnWW91IGhhdmUgYmVlbiBzdWNjZXNzZnVsbHkgYXV0aGVudGljYXRlZC4nXTtcbiAqICAgYXV0aG9yaXplPzoge1xuICogICAgIGVuZHBvaW50Pzogc3RyaW5nO1xuICogICAgIHJlZGlyZWN0VXJpPzogc3RyaW5nO1xuICogICAgIHJlc3BvbnNlVHlwZT86IHN0cmluZztcbiAqICAgICByZXF1aXJlVmFsaWRUb2tlbjogdHJ1ZSxcbiAqICAgICBzY29wZT86IHN0cmluZztcbiAqICAgICBzdGF0ZT86IHN0cmluZztcbiAqICAgICBwYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICogICB9ID0ge1xuICogICAgIGVuZHBvaW50OiAnYXV0aG9yaXplJyxcbiAqICAgICByZXNwb25zZVR5cGU6IE5iT0F1dGgyUmVzcG9uc2VUeXBlLkNPREUsXG4gKiAgIH07XG4gKiAgIHRva2VuPzoge1xuICogICAgIGVuZHBvaW50Pzogc3RyaW5nO1xuICogICAgIGdyYW50VHlwZT86IHN0cmluZztcbiAqICAgICByZXF1aXJlVmFsaWRUb2tlbjogdHJ1ZSxcbiAqICAgICByZWRpcmVjdFVyaT86IHN0cmluZztcbiAqICAgICBzY29wZT86IHN0cmluZztcbiAqICAgICBjbGFzczogTmJBdXRoVG9rZW5DbGFzcyxcbiAqICAgfSA9IHtcbiAqICAgICBlbmRwb2ludDogJ3Rva2VuJyxcbiAqICAgICBncmFudFR5cGU6IE5iT0F1dGgyR3JhbnRUeXBlLkFVVEhPUklaQVRJT05fQ09ERSxcbiAqICAgICBjbGFzczogTmJBdXRoT0F1dGgyVG9rZW4sXG4gKiAgIH07XG4gKiAgIHJlZnJlc2g/OiB7XG4gKiAgICAgZW5kcG9pbnQ/OiBzdHJpbmc7XG4gKiAgICAgZ3JhbnRUeXBlPzogc3RyaW5nO1xuICogICAgIHNjb3BlPzogc3RyaW5nO1xuICogICAgIHJlcXVpcmVWYWxpZFRva2VuOiB0cnVlLFxuICogICB9ID0ge1xuICogICAgIGVuZHBvaW50OiAndG9rZW4nLFxuICogICAgIGdyYW50VHlwZTogTmJPQXV0aDJHcmFudFR5cGUuUkVGUkVTSF9UT0tFTixcbiAqICAgfTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmJPQXV0aDJBdXRoU3RyYXRlZ3kgZXh0ZW5kcyBOYkF1dGhTdHJhdGVneSB7XG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQ7XG4gICAgcHJvdGVjdGVkIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZTtcbiAgICBwcm90ZWN0ZWQgd2luZG93OiBhbnk7XG4gICAgc3RhdGljIHNldHVwKG9wdGlvbnM6IE5iT0F1dGgyQXV0aFN0cmF0ZWd5T3B0aW9ucyk6IFtOYkF1dGhTdHJhdGVneUNsYXNzLCBOYk9BdXRoMkF1dGhTdHJhdGVneU9wdGlvbnNdO1xuICAgIGdldCByZXNwb25zZVR5cGUoKTogYW55O1xuICAgIGdldCBjbGllbnRBdXRoTWV0aG9kKCk6IGFueTtcbiAgICBwcm90ZWN0ZWQgcmVkaXJlY3RSZXN1bHRIYW5kbGVyczoge1xuICAgICAgICBba2V5OiBzdHJpbmddOiBGdW5jdGlvbjtcbiAgICB9O1xuICAgIHByb3RlY3RlZCByZWRpcmVjdFJlc3VsdHM6IHtcbiAgICAgICAgW2tleTogc3RyaW5nXTogRnVuY3Rpb247XG4gICAgfTtcbiAgICBwcm90ZWN0ZWQgZGVmYXVsdE9wdGlvbnM6IE5iT0F1dGgyQXV0aFN0cmF0ZWd5T3B0aW9ucztcbiAgICBjb25zdHJ1Y3RvcihodHRwOiBIdHRwQ2xpZW50LCByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHdpbmRvdzogYW55KTtcbiAgICBhdXRoZW50aWNhdGUoZGF0YT86IGFueSk6IE9ic2VydmFibGU8TmJBdXRoUmVzdWx0PjtcbiAgICBnZXRBdXRob3JpemF0aW9uUmVzdWx0KCk6IE9ic2VydmFibGU8YW55PjtcbiAgICByZWZyZXNoVG9rZW4odG9rZW46IE5iQXV0aFJlZnJlc2hhYmxlVG9rZW4pOiBPYnNlcnZhYmxlPE5iQXV0aFJlc3VsdD47XG4gICAgcGFzc3dvcmRUb2tlbih1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxOYkF1dGhSZXN1bHQ+O1xuICAgIHByb3RlY3RlZCBhdXRob3JpemVSZWRpcmVjdCgpOiB2b2lkO1xuICAgIHByb3RlY3RlZCBpc1JlZGlyZWN0UmVzdWx0KCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgcHJvdGVjdGVkIHJlcXVlc3RUb2tlbihjb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE5iQXV0aFJlc3VsdD47XG4gICAgcHJvdGVjdGVkIGJ1aWxkQ29kZVJlcXVlc3REYXRhKGNvZGU6IHN0cmluZyk6IGFueTtcbiAgICBwcm90ZWN0ZWQgYnVpbGRSZWZyZXNoUmVxdWVzdERhdGEodG9rZW46IE5iQXV0aFJlZnJlc2hhYmxlVG9rZW4pOiBhbnk7XG4gICAgcHJvdGVjdGVkIGJ1aWxkUGFzc3dvcmRSZXF1ZXN0RGF0YSh1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBidWlsZEF1dGhIZWFkZXIoKTogYW55O1xuICAgIHByb3RlY3RlZCBjbGVhblBhcmFtcyhwYXJhbXM6IGFueSk6IGFueTtcbiAgICBwcm90ZWN0ZWQgYWRkQ3JlZGVudGlhbHNUb1BhcmFtcyhwYXJhbXM6IGFueSk6IGFueTtcbiAgICBwcm90ZWN0ZWQgaGFuZGxlUmVzcG9uc2VFcnJvcihyZXM6IGFueSk6IE9ic2VydmFibGU8TmJBdXRoUmVzdWx0PjtcbiAgICBwcm90ZWN0ZWQgYnVpbGRSZWRpcmVjdFVybCgpOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHBhcnNlSGFzaEFzUXVlcnlQYXJhbXMoaGFzaDogc3RyaW5nKToge1xuICAgICAgICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XG4gICAgfTtcbiAgICBwcm90ZWN0ZWQgdXJsRW5jb2RlUGFyYW1ldGVycyhwYXJhbXM6IGFueSk6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgY3JlYXRlUmVmcmVzaGVkVG9rZW4ocmVzOiBhbnksIGV4aXN0aW5nVG9rZW46IE5iQXV0aFJlZnJlc2hhYmxlVG9rZW4sIHJlcXVpcmVWYWxpZFRva2VuOiBib29sZWFuKTogTmJBdXRoVG9rZW47XG4gICAgcmVnaXN0ZXIoZGF0YT86IGFueSk6IE9ic2VydmFibGU8TmJBdXRoUmVzdWx0PjtcbiAgICByZXF1ZXN0UGFzc3dvcmQoZGF0YT86IGFueSk6IE9ic2VydmFibGU8TmJBdXRoUmVzdWx0PjtcbiAgICByZXNldFBhc3N3b3JkKGRhdGE/OiBhbnkpOiBPYnNlcnZhYmxlPE5iQXV0aFJlc3VsdD47XG4gICAgbG9nb3V0KCk6IE9ic2VydmFibGU8TmJBdXRoUmVzdWx0Pjtcbn1cbiJdfQ==