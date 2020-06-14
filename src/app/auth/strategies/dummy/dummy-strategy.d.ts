import { Observable } from 'rxjs';
import { NbAuthStrategy } from '../auth-strategy';
import { NbAuthResult } from '../../services/auth-result';
import { NbDummyAuthStrategyOptions } from './dummy-strategy-options';
import { NbAuthStrategyClass } from '../../auth.options';
/**
 * Dummy auth strategy. Could be useful for auth setup when backend is not available yet.
 *
 *
 * Strategy settings.
 *
 * ```ts
 * export class NbDummyAuthStrategyOptions extends NbAuthStrategyOptions {
 *   name = 'dummy';
 *   token = {
 *     class: NbAuthSimpleToken,
 *   };
 *   delay? = 1000;
 *   alwaysFail? = false;
 * }
 * ```
 */
import * as ɵngcc0 from '@angular/core';
export declare class NbDummyAuthStrategy extends NbAuthStrategy {
    protected defaultOptions: NbDummyAuthStrategyOptions;
    static setup(options: NbDummyAuthStrategyOptions): [NbAuthStrategyClass, NbDummyAuthStrategyOptions];
    authenticate(data?: any): Observable<NbAuthResult>;
    register(data?: any): Observable<NbAuthResult>;
    requestPassword(data?: any): Observable<NbAuthResult>;
    resetPassword(data?: any): Observable<NbAuthResult>;
    logout(data?: any): Observable<NbAuthResult>;
    refreshToken(data?: any): Observable<NbAuthResult>;
    protected createDummyResult(data?: any): NbAuthResult;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NbDummyAuthStrategy>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NbDummyAuthStrategy>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHVtbXktc3RyYXRlZ3kuZC50cyIsInNvdXJjZXMiOlsiZHVtbXktc3RyYXRlZ3kuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkE7Ozs7Ozs7Ozs7OztBQVVBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTmJBdXRoU3RyYXRlZ3kgfSBmcm9tICcuLi9hdXRoLXN0cmF0ZWd5JztcbmltcG9ydCB7IE5iQXV0aFJlc3VsdCB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGgtcmVzdWx0JztcbmltcG9ydCB7IE5iRHVtbXlBdXRoU3RyYXRlZ3lPcHRpb25zIH0gZnJvbSAnLi9kdW1teS1zdHJhdGVneS1vcHRpb25zJztcbmltcG9ydCB7IE5iQXV0aFN0cmF0ZWd5Q2xhc3MgfSBmcm9tICcuLi8uLi9hdXRoLm9wdGlvbnMnO1xuLyoqXG4gKiBEdW1teSBhdXRoIHN0cmF0ZWd5LiBDb3VsZCBiZSB1c2VmdWwgZm9yIGF1dGggc2V0dXAgd2hlbiBiYWNrZW5kIGlzIG5vdCBhdmFpbGFibGUgeWV0LlxuICpcbiAqXG4gKiBTdHJhdGVneSBzZXR0aW5ncy5cbiAqXG4gKiBgYGB0c1xuICogZXhwb3J0IGNsYXNzIE5iRHVtbXlBdXRoU3RyYXRlZ3lPcHRpb25zIGV4dGVuZHMgTmJBdXRoU3RyYXRlZ3lPcHRpb25zIHtcbiAqICAgbmFtZSA9ICdkdW1teSc7XG4gKiAgIHRva2VuID0ge1xuICogICAgIGNsYXNzOiBOYkF1dGhTaW1wbGVUb2tlbixcbiAqICAgfTtcbiAqICAgZGVsYXk/ID0gMTAwMDtcbiAqICAgYWx3YXlzRmFpbD8gPSBmYWxzZTtcbiAqIH1cbiAqIGBgYFxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOYkR1bW15QXV0aFN0cmF0ZWd5IGV4dGVuZHMgTmJBdXRoU3RyYXRlZ3kge1xuICAgIHByb3RlY3RlZCBkZWZhdWx0T3B0aW9uczogTmJEdW1teUF1dGhTdHJhdGVneU9wdGlvbnM7XG4gICAgc3RhdGljIHNldHVwKG9wdGlvbnM6IE5iRHVtbXlBdXRoU3RyYXRlZ3lPcHRpb25zKTogW05iQXV0aFN0cmF0ZWd5Q2xhc3MsIE5iRHVtbXlBdXRoU3RyYXRlZ3lPcHRpb25zXTtcbiAgICBhdXRoZW50aWNhdGUoZGF0YT86IGFueSk6IE9ic2VydmFibGU8TmJBdXRoUmVzdWx0PjtcbiAgICByZWdpc3RlcihkYXRhPzogYW55KTogT2JzZXJ2YWJsZTxOYkF1dGhSZXN1bHQ+O1xuICAgIHJlcXVlc3RQYXNzd29yZChkYXRhPzogYW55KTogT2JzZXJ2YWJsZTxOYkF1dGhSZXN1bHQ+O1xuICAgIHJlc2V0UGFzc3dvcmQoZGF0YT86IGFueSk6IE9ic2VydmFibGU8TmJBdXRoUmVzdWx0PjtcbiAgICBsb2dvdXQoZGF0YT86IGFueSk6IE9ic2VydmFibGU8TmJBdXRoUmVzdWx0PjtcbiAgICByZWZyZXNoVG9rZW4oZGF0YT86IGFueSk6IE9ic2VydmFibGU8TmJBdXRoUmVzdWx0PjtcbiAgICBwcm90ZWN0ZWQgY3JlYXRlRHVtbXlSZXN1bHQoZGF0YT86IGFueSk6IE5iQXV0aFJlc3VsdDtcbn1cbiJdfQ==