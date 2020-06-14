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
export declare class NbLoginComponent {
    protected service: NbAuthService;
    protected options: {};
    protected cd: ChangeDetectorRef;
    protected router: Router;
    redirectDelay: number;
    showMessages: any;
    strategy: string;
    errors: string[];
    messages: string[];
    user: any;
    submitted: boolean;
    socialLinks: NbAuthSocialLink[];
    rememberMe: boolean;
    constructor(service: NbAuthService, options: {}, cd: ChangeDetectorRef, router: Router);
    login(): void;
    getConfigValue(key: string): any;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NbLoginComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NbLoginComponent, "nb-login", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5iQXV0aFNvY2lhbExpbmsgfSBmcm9tICcuLi8uLi9hdXRoLm9wdGlvbnMnO1xuaW1wb3J0IHsgTmJBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOYkxvZ2luQ29tcG9uZW50IHtcbiAgICBwcm90ZWN0ZWQgc2VydmljZTogTmJBdXRoU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgb3B0aW9uczoge307XG4gICAgcHJvdGVjdGVkIGNkOiBDaGFuZ2VEZXRlY3RvclJlZjtcbiAgICBwcm90ZWN0ZWQgcm91dGVyOiBSb3V0ZXI7XG4gICAgcmVkaXJlY3REZWxheTogbnVtYmVyO1xuICAgIHNob3dNZXNzYWdlczogYW55O1xuICAgIHN0cmF0ZWd5OiBzdHJpbmc7XG4gICAgZXJyb3JzOiBzdHJpbmdbXTtcbiAgICBtZXNzYWdlczogc3RyaW5nW107XG4gICAgdXNlcjogYW55O1xuICAgIHN1Ym1pdHRlZDogYm9vbGVhbjtcbiAgICBzb2NpYWxMaW5rczogTmJBdXRoU29jaWFsTGlua1tdO1xuICAgIHJlbWVtYmVyTWU6IGJvb2xlYW47XG4gICAgY29uc3RydWN0b3Ioc2VydmljZTogTmJBdXRoU2VydmljZSwgb3B0aW9uczoge30sIGNkOiBDaGFuZ2VEZXRlY3RvclJlZiwgcm91dGVyOiBSb3V0ZXIpO1xuICAgIGxvZ2luKCk6IHZvaWQ7XG4gICAgZ2V0Q29uZmlnVmFsdWUoa2V5OiBzdHJpbmcpOiBhbnk7XG59XG4iXX0=