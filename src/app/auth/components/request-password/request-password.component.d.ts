/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthService } from '../../services/auth.service';
import * as ɵngcc0 from '@angular/core';
export declare class NbRequestPasswordComponent {
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
    requestPass(): void;
    getConfigValue(key: string): any;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NbRequestPasswordComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NbRequestPasswordComponent, "nb-request-password-page", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC1wYXNzd29yZC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsicmVxdWVzdC1wYXNzd29yZC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5iQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmJSZXF1ZXN0UGFzc3dvcmRDb21wb25lbnQge1xuICAgIHByb3RlY3RlZCBzZXJ2aWNlOiBOYkF1dGhTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBvcHRpb25zOiB7fTtcbiAgICBwcm90ZWN0ZWQgY2Q6IENoYW5nZURldGVjdG9yUmVmO1xuICAgIHByb3RlY3RlZCByb3V0ZXI6IFJvdXRlcjtcbiAgICByZWRpcmVjdERlbGF5OiBudW1iZXI7XG4gICAgc2hvd01lc3NhZ2VzOiBhbnk7XG4gICAgc3RyYXRlZ3k6IHN0cmluZztcbiAgICBzdWJtaXR0ZWQ6IGJvb2xlYW47XG4gICAgZXJyb3JzOiBzdHJpbmdbXTtcbiAgICBtZXNzYWdlczogc3RyaW5nW107XG4gICAgdXNlcjogYW55O1xuICAgIGNvbnN0cnVjdG9yKHNlcnZpY2U6IE5iQXV0aFNlcnZpY2UsIG9wdGlvbnM6IHt9LCBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsIHJvdXRlcjogUm91dGVyKTtcbiAgICByZXF1ZXN0UGFzcygpOiB2b2lkO1xuICAgIGdldENvbmZpZ1ZhbHVlKGtleTogc3RyaW5nKTogYW55O1xufVxuIl19