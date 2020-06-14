/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthSocialLink } from '../../auth.options';
import { NbAuthService } from '../../services/auth.service';
import * as ɵngcc0 from '@angular/core';
export declare class NbRegisterComponent {
    protected service: NbAuthService;
    protected options: {};
    protected cd: ChangeDetectorRef;
    protected router: Router;
    redirectDelay: number;
    showMessages: any;
    strategy: string;
    submitted: boolean;
    errors: string[];
    messages: string[];
    user: any;
    socialLinks: NbAuthSocialLink[];
    constructor(service: NbAuthService, options: {}, cd: ChangeDetectorRef, router: Router);
    register(): void;
    getConfigValue(key: string): any;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NbRegisterComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NbRegisterComponent, "nb-register", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmJBdXRoU29jaWFsTGluayB9IGZyb20gJy4uLy4uL2F1dGgub3B0aW9ucyc7XG5pbXBvcnQgeyBOYkF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5iUmVnaXN0ZXJDb21wb25lbnQge1xuICAgIHByb3RlY3RlZCBzZXJ2aWNlOiBOYkF1dGhTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBvcHRpb25zOiB7fTtcbiAgICBwcm90ZWN0ZWQgY2Q6IENoYW5nZURldGVjdG9yUmVmO1xuICAgIHByb3RlY3RlZCByb3V0ZXI6IFJvdXRlcjtcbiAgICByZWRpcmVjdERlbGF5OiBudW1iZXI7XG4gICAgc2hvd01lc3NhZ2VzOiBhbnk7XG4gICAgc3RyYXRlZ3k6IHN0cmluZztcbiAgICBzdWJtaXR0ZWQ6IGJvb2xlYW47XG4gICAgZXJyb3JzOiBzdHJpbmdbXTtcbiAgICBtZXNzYWdlczogc3RyaW5nW107XG4gICAgdXNlcjogYW55O1xuICAgIHNvY2lhbExpbmtzOiBOYkF1dGhTb2NpYWxMaW5rW107XG4gICAgY29uc3RydWN0b3Ioc2VydmljZTogTmJBdXRoU2VydmljZSwgb3B0aW9uczoge30sIGNkOiBDaGFuZ2VEZXRlY3RvclJlZiwgcm91dGVyOiBSb3V0ZXIpO1xuICAgIHJlZ2lzdGVyKCk6IHZvaWQ7XG4gICAgZ2V0Q29uZmlnVmFsdWUoa2V5OiBzdHJpbmcpOiBhbnk7XG59XG4iXX0=