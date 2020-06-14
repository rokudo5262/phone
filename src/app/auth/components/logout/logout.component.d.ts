/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthService } from '../../services/auth.service';
import * as ɵngcc0 from '@angular/core';
export declare class NbLogoutComponent implements OnInit {
    protected service: NbAuthService;
    protected options: {};
    protected router: Router;
    redirectDelay: number;
    strategy: string;
    constructor(service: NbAuthService, options: {}, router: Router);
    ngOnInit(): void;
    logout(strategy: string): void;
    getConfigValue(key: string): any;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NbLogoutComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NbLogoutComponent, "nb-logout", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb3V0LmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJsb2dvdXQuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQVFBOzs7Ozs7Ozs7Ozs7QUFVQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbmltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5iQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmJMb2dvdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByb3RlY3RlZCBzZXJ2aWNlOiBOYkF1dGhTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBvcHRpb25zOiB7fTtcbiAgICBwcm90ZWN0ZWQgcm91dGVyOiBSb3V0ZXI7XG4gICAgcmVkaXJlY3REZWxheTogbnVtYmVyO1xuICAgIHN0cmF0ZWd5OiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3Ioc2VydmljZTogTmJBdXRoU2VydmljZSwgb3B0aW9uczoge30sIHJvdXRlcjogUm91dGVyKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIGxvZ291dChzdHJhdGVneTogc3RyaW5nKTogdm9pZDtcbiAgICBnZXRDb25maWdWYWx1ZShrZXk6IHN0cmluZyk6IGFueTtcbn1cbiJdfQ==