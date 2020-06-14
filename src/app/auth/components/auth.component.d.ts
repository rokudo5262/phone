/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { NbAuthService } from '../services/auth.service';
import * as ɵngcc0 from '@angular/core';
export declare class NbAuthComponent implements OnDestroy {
    protected auth: NbAuthService;
    protected location: Location;
    private destroy$;
    subscription: any;
    authenticated: boolean;
    token: string;
    constructor(auth: NbAuthService, location: Location);
    back(): boolean;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NbAuthComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NbAuthComponent, "nb-auth", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiYXV0aC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FBUUE7Ozs7Ozs7Ozs7OztBQVVBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuaW1wb3J0IHsgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOYkF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5iQXV0aENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gICAgcHJvdGVjdGVkIGF1dGg6IE5iQXV0aFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGxvY2F0aW9uOiBMb2NhdGlvbjtcbiAgICBwcml2YXRlIGRlc3Ryb3kkO1xuICAgIHN1YnNjcmlwdGlvbjogYW55O1xuICAgIGF1dGhlbnRpY2F0ZWQ6IGJvb2xlYW47XG4gICAgdG9rZW46IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihhdXRoOiBOYkF1dGhTZXJ2aWNlLCBsb2NhdGlvbjogTG9jYXRpb24pO1xuICAgIGJhY2soKTogYm9vbGVhbjtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19