import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { NbAuthResult } from '../../services/auth-result';
import { NbAuthStrategy } from '../auth-strategy';
import { NbAuthStrategyClass } from '../../auth.options';
import { NbPasswordAuthStrategyOptions } from './password-strategy-options';
/**
 * The most common authentication provider for email/password strategy.
 *
 * Strategy settings. Note, there is no need to copy over the whole object to change the settings you need.
 * Also, this.getOption call won't work outside of the default options declaration
 * (which is inside of the `NbPasswordAuthStrategy` class), so you have to replace it with a custom helper function
 * if you need it.
 *
 * ```ts
 *export class NbPasswordAuthStrategyOptions extends NbAuthStrategyOptions {
 *  name: string;
 *  baseEndpoint? = '/api/auth/';
 *  login?: boolean | NbPasswordStrategyModule = {
 *    alwaysFail: false,
 *    endpoint: 'login',
 *    method: 'post',
 *    requireValidToken: true,
 *    redirect: {
 *      success: '/',
 *      failure: null,
 *    },
 *    defaultErrors: ['Login/Email combination is not correct, please try again.'],
 *    defaultMessages: ['You have been successfully logged in.'],
 *  };
 *  register?: boolean | NbPasswordStrategyModule = {
 *    alwaysFail: false,
 *    endpoint: 'register',
 *    method: 'post',
 *    requireValidToken: true,
 *    redirect: {
 *      success: '/',
 *      failure: null,
 *    },
 *    defaultErrors: ['Something went wrong, please try again.'],
 *    defaultMessages: ['You have been successfully registered.'],
 *  };
 *  requestPass?: boolean | NbPasswordStrategyModule = {
 *    endpoint: 'request-pass',
 *    method: 'post',
 *    redirect: {
 *      success: '/',
 *      failure: null,
 *    },
 *    defaultErrors: ['Something went wrong, please try again.'],
 *    defaultMessages: ['Reset password instructions have been sent to your email.'],
 *  };
 *  resetPass?: boolean | NbPasswordStrategyReset = {
 *    endpoint: 'reset-pass',
 *    method: 'put',
 *    redirect: {
 *      success: '/',
 *      failure: null,
 *    },
 *    resetPasswordTokenKey: 'reset_password_token',
 *    defaultErrors: ['Something went wrong, please try again.'],
 *    defaultMessages: ['Your password has been successfully changed.'],
 *  };
 *  logout?: boolean | NbPasswordStrategyReset = {
 *    alwaysFail: false,
 *    endpoint: 'logout',
 *    method: 'delete',
 *    redirect: {
 *      success: '/',
 *      failure: null,
 *    },
 *    defaultErrors: ['Something went wrong, please try again.'],
 *    defaultMessages: ['You have been successfully logged out.'],
 *  };
 *  refreshToken?: boolean | NbPasswordStrategyModule = {
 *    endpoint: 'refresh-token',
 *    method: 'post',
 *    requireValidToken: true,
 *    redirect: {
 *      success: null,
 *      failure: null,
 *    },
 *    defaultErrors: ['Something went wrong, please try again.'],
 *    defaultMessages: ['Your token has been successfully refreshed.'],
 *  };
 *  token?: NbPasswordStrategyToken = {
 *    class: NbAuthSimpleToken,
 *    key: 'data.token',
 *    getter: (module: string, res: HttpResponse<Object>, options: NbPasswordAuthStrategyOptions) => getDeepFromObject(
 *      res.body,
 *      options.token.key,
 *    ),
 *  };
 *  errors?: NbPasswordStrategyMessage = {
 *    key: 'data.errors',
 *    getter: (module: string, res: HttpErrorResponse, options: NbPasswordAuthStrategyOptions) => getDeepFromObject(
 *      res.error,
 *      options.errors.key,
 *      options[module].defaultErrors,
 *    ),
 *  };
 *  messages?: NbPasswordStrategyMessage = {
 *    key: 'data.messages',
 *    getter: (module: string, res: HttpResponse<Object>, options: NbPasswordAuthStrategyOptions) => getDeepFromObject(
 *      res.body,
 *      options.messages.key,
 *      options[module].defaultMessages,
 *    ),
 *  };
 *  validation?: {
 *    password?: {
 *      required?: boolean;
 *      minLength?: number | null;
 *      maxLength?: number | null;
 *      regexp?: string | null;
 *    };
 *    email?: {
 *      required?: boolean;
 *      regexp?: string | null;
 *    };
 *    fullName?: {
 *      required?: boolean;
 *      minLength?: number | null;
 *      maxLength?: number | null;
 *      regexp?: string | null;
 *    };
 *  };
 *}
 * ```
 */
import * as ɵngcc0 from '@angular/core';
export declare class NbPasswordAuthStrategy extends NbAuthStrategy {
    protected http: HttpClient;
    private route;
    protected defaultOptions: NbPasswordAuthStrategyOptions;
    static setup(options: NbPasswordAuthStrategyOptions): [NbAuthStrategyClass, NbPasswordAuthStrategyOptions];
    constructor(http: HttpClient, route: ActivatedRoute);
    authenticate(data?: any): Observable<NbAuthResult>;
    register(data?: any): Observable<NbAuthResult>;
    requestPassword(data?: any): Observable<NbAuthResult>;
    resetPassword(data?: any): Observable<NbAuthResult>;
    logout(): Observable<NbAuthResult>;
    refreshToken(data?: any): Observable<NbAuthResult>;
    protected handleResponseError(res: any, module: string): Observable<NbAuthResult>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NbPasswordAuthStrategy>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NbPasswordAuthStrategy>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzc3dvcmQtc3RyYXRlZ3kuZC50cyIsInNvdXJjZXMiOlsicGFzc3dvcmQtc3RyYXRlZ3kuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUlBOzs7Ozs7Ozs7Ozs7Ozs7QUFhQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOYkF1dGhSZXN1bHQgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoLXJlc3VsdCc7XG5pbXBvcnQgeyBOYkF1dGhTdHJhdGVneSB9IGZyb20gJy4uL2F1dGgtc3RyYXRlZ3knO1xuaW1wb3J0IHsgTmJBdXRoU3RyYXRlZ3lDbGFzcyB9IGZyb20gJy4uLy4uL2F1dGgub3B0aW9ucyc7XG5pbXBvcnQgeyBOYlBhc3N3b3JkQXV0aFN0cmF0ZWd5T3B0aW9ucyB9IGZyb20gJy4vcGFzc3dvcmQtc3RyYXRlZ3ktb3B0aW9ucyc7XG4vKipcbiAqIFRoZSBtb3N0IGNvbW1vbiBhdXRoZW50aWNhdGlvbiBwcm92aWRlciBmb3IgZW1haWwvcGFzc3dvcmQgc3RyYXRlZ3kuXG4gKlxuICogU3RyYXRlZ3kgc2V0dGluZ3MuIE5vdGUsIHRoZXJlIGlzIG5vIG5lZWQgdG8gY29weSBvdmVyIHRoZSB3aG9sZSBvYmplY3QgdG8gY2hhbmdlIHRoZSBzZXR0aW5ncyB5b3UgbmVlZC5cbiAqIEFsc28sIHRoaXMuZ2V0T3B0aW9uIGNhbGwgd29uJ3Qgd29yayBvdXRzaWRlIG9mIHRoZSBkZWZhdWx0IG9wdGlvbnMgZGVjbGFyYXRpb25cbiAqICh3aGljaCBpcyBpbnNpZGUgb2YgdGhlIGBOYlBhc3N3b3JkQXV0aFN0cmF0ZWd5YCBjbGFzcyksIHNvIHlvdSBoYXZlIHRvIHJlcGxhY2UgaXQgd2l0aCBhIGN1c3RvbSBoZWxwZXIgZnVuY3Rpb25cbiAqIGlmIHlvdSBuZWVkIGl0LlxuICpcbiAqIGBgYHRzXG4gKmV4cG9ydCBjbGFzcyBOYlBhc3N3b3JkQXV0aFN0cmF0ZWd5T3B0aW9ucyBleHRlbmRzIE5iQXV0aFN0cmF0ZWd5T3B0aW9ucyB7XG4gKiAgbmFtZTogc3RyaW5nO1xuICogIGJhc2VFbmRwb2ludD8gPSAnL2FwaS9hdXRoLyc7XG4gKiAgbG9naW4/OiBib29sZWFuIHwgTmJQYXNzd29yZFN0cmF0ZWd5TW9kdWxlID0ge1xuICogICAgYWx3YXlzRmFpbDogZmFsc2UsXG4gKiAgICBlbmRwb2ludDogJ2xvZ2luJyxcbiAqICAgIG1ldGhvZDogJ3Bvc3QnLFxuICogICAgcmVxdWlyZVZhbGlkVG9rZW46IHRydWUsXG4gKiAgICByZWRpcmVjdDoge1xuICogICAgICBzdWNjZXNzOiAnLycsXG4gKiAgICAgIGZhaWx1cmU6IG51bGwsXG4gKiAgICB9LFxuICogICAgZGVmYXVsdEVycm9yczogWydMb2dpbi9FbWFpbCBjb21iaW5hdGlvbiBpcyBub3QgY29ycmVjdCwgcGxlYXNlIHRyeSBhZ2Fpbi4nXSxcbiAqICAgIGRlZmF1bHRNZXNzYWdlczogWydZb3UgaGF2ZSBiZWVuIHN1Y2Nlc3NmdWxseSBsb2dnZWQgaW4uJ10sXG4gKiAgfTtcbiAqICByZWdpc3Rlcj86IGJvb2xlYW4gfCBOYlBhc3N3b3JkU3RyYXRlZ3lNb2R1bGUgPSB7XG4gKiAgICBhbHdheXNGYWlsOiBmYWxzZSxcbiAqICAgIGVuZHBvaW50OiAncmVnaXN0ZXInLFxuICogICAgbWV0aG9kOiAncG9zdCcsXG4gKiAgICByZXF1aXJlVmFsaWRUb2tlbjogdHJ1ZSxcbiAqICAgIHJlZGlyZWN0OiB7XG4gKiAgICAgIHN1Y2Nlc3M6ICcvJyxcbiAqICAgICAgZmFpbHVyZTogbnVsbCxcbiAqICAgIH0sXG4gKiAgICBkZWZhdWx0RXJyb3JzOiBbJ1NvbWV0aGluZyB3ZW50IHdyb25nLCBwbGVhc2UgdHJ5IGFnYWluLiddLFxuICogICAgZGVmYXVsdE1lc3NhZ2VzOiBbJ1lvdSBoYXZlIGJlZW4gc3VjY2Vzc2Z1bGx5IHJlZ2lzdGVyZWQuJ10sXG4gKiAgfTtcbiAqICByZXF1ZXN0UGFzcz86IGJvb2xlYW4gfCBOYlBhc3N3b3JkU3RyYXRlZ3lNb2R1bGUgPSB7XG4gKiAgICBlbmRwb2ludDogJ3JlcXVlc3QtcGFzcycsXG4gKiAgICBtZXRob2Q6ICdwb3N0JyxcbiAqICAgIHJlZGlyZWN0OiB7XG4gKiAgICAgIHN1Y2Nlc3M6ICcvJyxcbiAqICAgICAgZmFpbHVyZTogbnVsbCxcbiAqICAgIH0sXG4gKiAgICBkZWZhdWx0RXJyb3JzOiBbJ1NvbWV0aGluZyB3ZW50IHdyb25nLCBwbGVhc2UgdHJ5IGFnYWluLiddLFxuICogICAgZGVmYXVsdE1lc3NhZ2VzOiBbJ1Jlc2V0IHBhc3N3b3JkIGluc3RydWN0aW9ucyBoYXZlIGJlZW4gc2VudCB0byB5b3VyIGVtYWlsLiddLFxuICogIH07XG4gKiAgcmVzZXRQYXNzPzogYm9vbGVhbiB8IE5iUGFzc3dvcmRTdHJhdGVneVJlc2V0ID0ge1xuICogICAgZW5kcG9pbnQ6ICdyZXNldC1wYXNzJyxcbiAqICAgIG1ldGhvZDogJ3B1dCcsXG4gKiAgICByZWRpcmVjdDoge1xuICogICAgICBzdWNjZXNzOiAnLycsXG4gKiAgICAgIGZhaWx1cmU6IG51bGwsXG4gKiAgICB9LFxuICogICAgcmVzZXRQYXNzd29yZFRva2VuS2V5OiAncmVzZXRfcGFzc3dvcmRfdG9rZW4nLFxuICogICAgZGVmYXVsdEVycm9yczogWydTb21ldGhpbmcgd2VudCB3cm9uZywgcGxlYXNlIHRyeSBhZ2Fpbi4nXSxcbiAqICAgIGRlZmF1bHRNZXNzYWdlczogWydZb3VyIHBhc3N3b3JkIGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSBjaGFuZ2VkLiddLFxuICogIH07XG4gKiAgbG9nb3V0PzogYm9vbGVhbiB8IE5iUGFzc3dvcmRTdHJhdGVneVJlc2V0ID0ge1xuICogICAgYWx3YXlzRmFpbDogZmFsc2UsXG4gKiAgICBlbmRwb2ludDogJ2xvZ291dCcsXG4gKiAgICBtZXRob2Q6ICdkZWxldGUnLFxuICogICAgcmVkaXJlY3Q6IHtcbiAqICAgICAgc3VjY2VzczogJy8nLFxuICogICAgICBmYWlsdXJlOiBudWxsLFxuICogICAgfSxcbiAqICAgIGRlZmF1bHRFcnJvcnM6IFsnU29tZXRoaW5nIHdlbnQgd3JvbmcsIHBsZWFzZSB0cnkgYWdhaW4uJ10sXG4gKiAgICBkZWZhdWx0TWVzc2FnZXM6IFsnWW91IGhhdmUgYmVlbiBzdWNjZXNzZnVsbHkgbG9nZ2VkIG91dC4nXSxcbiAqICB9O1xuICogIHJlZnJlc2hUb2tlbj86IGJvb2xlYW4gfCBOYlBhc3N3b3JkU3RyYXRlZ3lNb2R1bGUgPSB7XG4gKiAgICBlbmRwb2ludDogJ3JlZnJlc2gtdG9rZW4nLFxuICogICAgbWV0aG9kOiAncG9zdCcsXG4gKiAgICByZXF1aXJlVmFsaWRUb2tlbjogdHJ1ZSxcbiAqICAgIHJlZGlyZWN0OiB7XG4gKiAgICAgIHN1Y2Nlc3M6IG51bGwsXG4gKiAgICAgIGZhaWx1cmU6IG51bGwsXG4gKiAgICB9LFxuICogICAgZGVmYXVsdEVycm9yczogWydTb21ldGhpbmcgd2VudCB3cm9uZywgcGxlYXNlIHRyeSBhZ2Fpbi4nXSxcbiAqICAgIGRlZmF1bHRNZXNzYWdlczogWydZb3VyIHRva2VuIGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSByZWZyZXNoZWQuJ10sXG4gKiAgfTtcbiAqICB0b2tlbj86IE5iUGFzc3dvcmRTdHJhdGVneVRva2VuID0ge1xuICogICAgY2xhc3M6IE5iQXV0aFNpbXBsZVRva2VuLFxuICogICAga2V5OiAnZGF0YS50b2tlbicsXG4gKiAgICBnZXR0ZXI6IChtb2R1bGU6IHN0cmluZywgcmVzOiBIdHRwUmVzcG9uc2U8T2JqZWN0Piwgb3B0aW9uczogTmJQYXNzd29yZEF1dGhTdHJhdGVneU9wdGlvbnMpID0+IGdldERlZXBGcm9tT2JqZWN0KFxuICogICAgICByZXMuYm9keSxcbiAqICAgICAgb3B0aW9ucy50b2tlbi5rZXksXG4gKiAgICApLFxuICogIH07XG4gKiAgZXJyb3JzPzogTmJQYXNzd29yZFN0cmF0ZWd5TWVzc2FnZSA9IHtcbiAqICAgIGtleTogJ2RhdGEuZXJyb3JzJyxcbiAqICAgIGdldHRlcjogKG1vZHVsZTogc3RyaW5nLCByZXM6IEh0dHBFcnJvclJlc3BvbnNlLCBvcHRpb25zOiBOYlBhc3N3b3JkQXV0aFN0cmF0ZWd5T3B0aW9ucykgPT4gZ2V0RGVlcEZyb21PYmplY3QoXG4gKiAgICAgIHJlcy5lcnJvcixcbiAqICAgICAgb3B0aW9ucy5lcnJvcnMua2V5LFxuICogICAgICBvcHRpb25zW21vZHVsZV0uZGVmYXVsdEVycm9ycyxcbiAqICAgICksXG4gKiAgfTtcbiAqICBtZXNzYWdlcz86IE5iUGFzc3dvcmRTdHJhdGVneU1lc3NhZ2UgPSB7XG4gKiAgICBrZXk6ICdkYXRhLm1lc3NhZ2VzJyxcbiAqICAgIGdldHRlcjogKG1vZHVsZTogc3RyaW5nLCByZXM6IEh0dHBSZXNwb25zZTxPYmplY3Q+LCBvcHRpb25zOiBOYlBhc3N3b3JkQXV0aFN0cmF0ZWd5T3B0aW9ucykgPT4gZ2V0RGVlcEZyb21PYmplY3QoXG4gKiAgICAgIHJlcy5ib2R5LFxuICogICAgICBvcHRpb25zLm1lc3NhZ2VzLmtleSxcbiAqICAgICAgb3B0aW9uc1ttb2R1bGVdLmRlZmF1bHRNZXNzYWdlcyxcbiAqICAgICksXG4gKiAgfTtcbiAqICB2YWxpZGF0aW9uPzoge1xuICogICAgcGFzc3dvcmQ/OiB7XG4gKiAgICAgIHJlcXVpcmVkPzogYm9vbGVhbjtcbiAqICAgICAgbWluTGVuZ3RoPzogbnVtYmVyIHwgbnVsbDtcbiAqICAgICAgbWF4TGVuZ3RoPzogbnVtYmVyIHwgbnVsbDtcbiAqICAgICAgcmVnZXhwPzogc3RyaW5nIHwgbnVsbDtcbiAqICAgIH07XG4gKiAgICBlbWFpbD86IHtcbiAqICAgICAgcmVxdWlyZWQ/OiBib29sZWFuO1xuICogICAgICByZWdleHA/OiBzdHJpbmcgfCBudWxsO1xuICogICAgfTtcbiAqICAgIGZ1bGxOYW1lPzoge1xuICogICAgICByZXF1aXJlZD86IGJvb2xlYW47XG4gKiAgICAgIG1pbkxlbmd0aD86IG51bWJlciB8IG51bGw7XG4gKiAgICAgIG1heExlbmd0aD86IG51bWJlciB8IG51bGw7XG4gKiAgICAgIHJlZ2V4cD86IHN0cmluZyB8IG51bGw7XG4gKiAgICB9O1xuICogIH07XG4gKn1cbiAqIGBgYFxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOYlBhc3N3b3JkQXV0aFN0cmF0ZWd5IGV4dGVuZHMgTmJBdXRoU3RyYXRlZ3kge1xuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50O1xuICAgIHByaXZhdGUgcm91dGU7XG4gICAgcHJvdGVjdGVkIGRlZmF1bHRPcHRpb25zOiBOYlBhc3N3b3JkQXV0aFN0cmF0ZWd5T3B0aW9ucztcbiAgICBzdGF0aWMgc2V0dXAob3B0aW9uczogTmJQYXNzd29yZEF1dGhTdHJhdGVneU9wdGlvbnMpOiBbTmJBdXRoU3RyYXRlZ3lDbGFzcywgTmJQYXNzd29yZEF1dGhTdHJhdGVneU9wdGlvbnNdO1xuICAgIGNvbnN0cnVjdG9yKGh0dHA6IEh0dHBDbGllbnQsIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSk7XG4gICAgYXV0aGVudGljYXRlKGRhdGE/OiBhbnkpOiBPYnNlcnZhYmxlPE5iQXV0aFJlc3VsdD47XG4gICAgcmVnaXN0ZXIoZGF0YT86IGFueSk6IE9ic2VydmFibGU8TmJBdXRoUmVzdWx0PjtcbiAgICByZXF1ZXN0UGFzc3dvcmQoZGF0YT86IGFueSk6IE9ic2VydmFibGU8TmJBdXRoUmVzdWx0PjtcbiAgICByZXNldFBhc3N3b3JkKGRhdGE/OiBhbnkpOiBPYnNlcnZhYmxlPE5iQXV0aFJlc3VsdD47XG4gICAgbG9nb3V0KCk6IE9ic2VydmFibGU8TmJBdXRoUmVzdWx0PjtcbiAgICByZWZyZXNoVG9rZW4oZGF0YT86IGFueSk6IE9ic2VydmFibGU8TmJBdXRoUmVzdWx0PjtcbiAgICBwcm90ZWN0ZWQgaGFuZGxlUmVzcG9uc2VFcnJvcihyZXM6IGFueSwgbW9kdWxlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE5iQXV0aFJlc3VsdD47XG59XG4iXX0=