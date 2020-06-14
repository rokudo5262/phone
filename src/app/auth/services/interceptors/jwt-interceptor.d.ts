import { Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NbAuthService } from '../auth.service';
import * as ɵngcc0 from '@angular/core';
export declare class NbAuthJWTInterceptor implements HttpInterceptor {
    private injector;
    protected filter: any;
    constructor(injector: Injector, filter: any);
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    protected get authService(): NbAuthService;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NbAuthJWTInterceptor>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NbAuthJWTInterceptor>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0LWludGVyY2VwdG9yLmQudHMiLCJzb3VyY2VzIjpbImp3dC1pbnRlcmNlcHRvci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7OztBQU1BIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBFdmVudCwgSHR0cEhhbmRsZXIsIEh0dHBJbnRlcmNlcHRvciwgSHR0cFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOYkF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aC5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5iQXV0aEpXVEludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgICBwcml2YXRlIGluamVjdG9yO1xuICAgIHByb3RlY3RlZCBmaWx0ZXI6IGFueTtcbiAgICBjb25zdHJ1Y3RvcihpbmplY3RvcjogSW5qZWN0b3IsIGZpbHRlcjogYW55KTtcbiAgICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+O1xuICAgIHByb3RlY3RlZCBnZXQgYXV0aFNlcnZpY2UoKTogTmJBdXRoU2VydmljZTtcbn1cbiJdfQ==