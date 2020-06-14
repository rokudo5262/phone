import { NbAuthToken } from './token';
import { NbAuthTokenParceler } from './token-parceler';
import * as ɵngcc0 from '@angular/core';
export declare abstract class NbTokenStorage {
    abstract get(): NbAuthToken;
    abstract set(token: NbAuthToken): any;
    abstract clear(): any;
}
/**
 * Service that uses browser localStorage as a storage.
 *
 * The token storage is provided into auth module the following way:
 * ```ts
 * { provide: NbTokenStorage, useClass: NbTokenLocalStorage },
 * ```
 *
 * If you need to change the storage behaviour or provide your own - just extend your class from basic `NbTokenStorage`
 * or `NbTokenLocalStorage` and provide in your `app.module`:
 * ```ts
 * { provide: NbTokenStorage, useClass: NbTokenCustomStorage },
 * ```
 *
 */
export declare class NbTokenLocalStorage extends NbTokenStorage {
    private parceler;
    protected key: string;
    constructor(parceler: NbAuthTokenParceler);
    /**
     * Returns token from localStorage
     * @returns {NbAuthToken}
     */
    get(): NbAuthToken;
    /**
     * Sets token to localStorage
     * @param {NbAuthToken} token
     */
    set(token: NbAuthToken): void;
    /**
     * Clears token from localStorage
     */
    clear(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NbTokenLocalStorage>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NbTokenLocalStorage>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4tc3RvcmFnZS5kLnRzIiwic291cmNlcyI6WyJ0b2tlbi1zdG9yYWdlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0NBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmJBdXRoVG9rZW4gfSBmcm9tICcuL3Rva2VuJztcbmltcG9ydCB7IE5iQXV0aFRva2VuUGFyY2VsZXIgfSBmcm9tICcuL3Rva2VuLXBhcmNlbGVyJztcbmV4cG9ydCBkZWNsYXJlIGFic3RyYWN0IGNsYXNzIE5iVG9rZW5TdG9yYWdlIHtcbiAgICBhYnN0cmFjdCBnZXQoKTogTmJBdXRoVG9rZW47XG4gICAgYWJzdHJhY3Qgc2V0KHRva2VuOiBOYkF1dGhUb2tlbik6IGFueTtcbiAgICBhYnN0cmFjdCBjbGVhcigpOiBhbnk7XG59XG4vKipcbiAqIFNlcnZpY2UgdGhhdCB1c2VzIGJyb3dzZXIgbG9jYWxTdG9yYWdlIGFzIGEgc3RvcmFnZS5cbiAqXG4gKiBUaGUgdG9rZW4gc3RvcmFnZSBpcyBwcm92aWRlZCBpbnRvIGF1dGggbW9kdWxlIHRoZSBmb2xsb3dpbmcgd2F5OlxuICogYGBgdHNcbiAqIHsgcHJvdmlkZTogTmJUb2tlblN0b3JhZ2UsIHVzZUNsYXNzOiBOYlRva2VuTG9jYWxTdG9yYWdlIH0sXG4gKiBgYGBcbiAqXG4gKiBJZiB5b3UgbmVlZCB0byBjaGFuZ2UgdGhlIHN0b3JhZ2UgYmVoYXZpb3VyIG9yIHByb3ZpZGUgeW91ciBvd24gLSBqdXN0IGV4dGVuZCB5b3VyIGNsYXNzIGZyb20gYmFzaWMgYE5iVG9rZW5TdG9yYWdlYFxuICogb3IgYE5iVG9rZW5Mb2NhbFN0b3JhZ2VgIGFuZCBwcm92aWRlIGluIHlvdXIgYGFwcC5tb2R1bGVgOlxuICogYGBgdHNcbiAqIHsgcHJvdmlkZTogTmJUb2tlblN0b3JhZ2UsIHVzZUNsYXNzOiBOYlRva2VuQ3VzdG9tU3RvcmFnZSB9LFxuICogYGBgXG4gKlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOYlRva2VuTG9jYWxTdG9yYWdlIGV4dGVuZHMgTmJUb2tlblN0b3JhZ2Uge1xuICAgIHByaXZhdGUgcGFyY2VsZXI7XG4gICAgcHJvdGVjdGVkIGtleTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKHBhcmNlbGVyOiBOYkF1dGhUb2tlblBhcmNlbGVyKTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRva2VuIGZyb20gbG9jYWxTdG9yYWdlXG4gICAgICogQHJldHVybnMge05iQXV0aFRva2VufVxuICAgICAqL1xuICAgIGdldCgpOiBOYkF1dGhUb2tlbjtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRva2VuIHRvIGxvY2FsU3RvcmFnZVxuICAgICAqIEBwYXJhbSB7TmJBdXRoVG9rZW59IHRva2VuXG4gICAgICovXG4gICAgc2V0KHRva2VuOiBOYkF1dGhUb2tlbik6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQ2xlYXJzIHRva2VuIGZyb20gbG9jYWxTdG9yYWdlXG4gICAgICovXG4gICAgY2xlYXIoKTogdm9pZDtcbn1cbiJdfQ==