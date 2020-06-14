import { InjectionToken } from '@angular/core';
import { NbAuthToken, NbAuthTokenClass } from './token';
import * as ɵngcc0 from '@angular/core';
export interface NbTokenPack {
    name: string;
    ownerStrategyName: string;
    createdAt: Number;
    value: string;
}
export declare const NB_AUTH_FALLBACK_TOKEN: InjectionToken<NbAuthTokenClass<NbAuthToken>>;
/**
 * Creates a token parcel which could be stored/restored
 */
export declare class NbAuthTokenParceler {
    private fallbackClass;
    private tokenClasses;
    constructor(fallbackClass: NbAuthTokenClass, tokenClasses: NbAuthTokenClass[]);
    wrap(token: NbAuthToken): string;
    unwrap(value: string): NbAuthToken;
    protected getClassByName(name: any): NbAuthTokenClass;
    protected parseTokenPack(value: any): NbTokenPack;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NbAuthTokenParceler>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NbAuthTokenParceler>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4tcGFyY2VsZXIuZC50cyIsInNvdXJjZXMiOlsidG9rZW4tcGFyY2VsZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5iQXV0aFRva2VuLCBOYkF1dGhUb2tlbkNsYXNzIH0gZnJvbSAnLi90b2tlbic7XG5leHBvcnQgaW50ZXJmYWNlIE5iVG9rZW5QYWNrIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgb3duZXJTdHJhdGVneU5hbWU6IHN0cmluZztcbiAgICBjcmVhdGVkQXQ6IE51bWJlcjtcbiAgICB2YWx1ZTogc3RyaW5nO1xufVxuZXhwb3J0IGRlY2xhcmUgY29uc3QgTkJfQVVUSF9GQUxMQkFDS19UT0tFTjogSW5qZWN0aW9uVG9rZW48TmJBdXRoVG9rZW5DbGFzczxOYkF1dGhUb2tlbj4+O1xuLyoqXG4gKiBDcmVhdGVzIGEgdG9rZW4gcGFyY2VsIHdoaWNoIGNvdWxkIGJlIHN0b3JlZC9yZXN0b3JlZFxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOYkF1dGhUb2tlblBhcmNlbGVyIHtcbiAgICBwcml2YXRlIGZhbGxiYWNrQ2xhc3M7XG4gICAgcHJpdmF0ZSB0b2tlbkNsYXNzZXM7XG4gICAgY29uc3RydWN0b3IoZmFsbGJhY2tDbGFzczogTmJBdXRoVG9rZW5DbGFzcywgdG9rZW5DbGFzc2VzOiBOYkF1dGhUb2tlbkNsYXNzW10pO1xuICAgIHdyYXAodG9rZW46IE5iQXV0aFRva2VuKTogc3RyaW5nO1xuICAgIHVud3JhcCh2YWx1ZTogc3RyaW5nKTogTmJBdXRoVG9rZW47XG4gICAgcHJvdGVjdGVkIGdldENsYXNzQnlOYW1lKG5hbWU6IGFueSk6IE5iQXV0aFRva2VuQ2xhc3M7XG4gICAgcHJvdGVjdGVkIHBhcnNlVG9rZW5QYWNrKHZhbHVlOiBhbnkpOiBOYlRva2VuUGFjaztcbn1cbiJdfQ==