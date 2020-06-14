/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthService } from '../../services/auth.service';
import * as ɵngcc0 from '@angular/core';
export declare class NbResetPasswordComponent {
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
    constructor(service: NbAuthService, options: {}, cd: ChangeDetectorRef, router: Router);
    resetPass(): void;
    getConfigValue(key: string): any;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NbResetPasswordComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NbResetPasswordComponent, "nb-reset-password-page", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInJlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmJBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOYlJlc2V0UGFzc3dvcmRDb21wb25lbnQge1xuICAgIHByb3RlY3RlZCBzZXJ2aWNlOiBOYkF1dGhTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBvcHRpb25zOiB7fTtcbiAgICBwcm90ZWN0ZWQgY2Q6IENoYW5nZURldGVjdG9yUmVmO1xuICAgIHByb3RlY3RlZCByb3V0ZXI6IFJvdXRlcjtcbiAgICByZWRpcmVjdERlbGF5OiBudW1iZXI7XG4gICAgc2hvd01lc3NhZ2VzOiBhbnk7XG4gICAgc3RyYXRlZ3k6IHN0cmluZztcbiAgICBzdWJtaXR0ZWQ6IGJvb2xlYW47XG4gICAgZXJyb3JzOiBzdHJpbmdbXTtcbiAgICBtZXNzYWdlczogc3RyaW5nW107XG4gICAgdXNlcjogYW55O1xuICAgIGNvbnN0cnVjdG9yKHNlcnZpY2U6IE5iQXV0aFNlcnZpY2UsIG9wdGlvbnM6IHt9LCBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsIHJvdXRlcjogUm91dGVyKTtcbiAgICByZXNldFBhc3MoKTogdm9pZDtcbiAgICBnZXRDb25maWdWYWx1ZShrZXk6IHN0cmluZyk6IGFueTtcbn1cbiJdfQ==