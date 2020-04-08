import { ChangeDetectorRef, NgZone, OnDestroy, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { CoalescingConfig as PushPipeConfig } from '../core';
/**
 * @Pipe PushPipe
 * @description
 *
 * The `ngrxPush` pipe serves as a drop-in replacement for the `async` pipe.
 * It contains intelligent handling of change detection to enable us
 * running in zone-full as well as zone-less mode without any changes to the code.
 *
 * The current way of binding an observable to the view looks like that:
 *  ```html
 *  {{observable$ | async}}
 * <ng-container *ngIf="observable$ | async as o">{{o}}</ng-container>
 * <component [value]="observable$ | async"></component>
 * ```
 *
 * The problem is `async` pipe just marks the component and all its ancestors as dirty.
 * It needs zone.js microtask queue to exhaust until `ApplicationRef.tick` is called to render all dirty marked components.
 *
 * Heavy dynamic and interactive UIs suffer from zones change detection a lot and can
 * lean to bad performance or even unusable applications, but the `async` pipe does not work in zone-less mode.
 *
 * `ngrxPush` pipe solves that problem.
 *
 * Included Features:
 *  - Take observables or promises, retrieve their values and render the value to the template
 *  - Handling null and undefined values in a clean unified/structured way
 *  - Triggers change-detection differently if `zone.js` is present or not (`detectChanges` or `markForCheck`)
 *  - Distinct same values in a row to increase performance
 *  - Coalescing of change detection calls to boost performance
 *
 * @usageNotes
 *
 * ### Examples
 *
 * `ngrxPush` pipe solves that problem. It can be used like shown here:
 * ```html
 * {{observable$ | ngrxPush}}
 * <ng-container *ngIf="observable$ | ngrxPush as o">{{o}}</ng-container>
 * <component [value]="observable$ | ngrxPush"></component>
 * ```
 *
 * @publicApi
 */
import * as ɵngcc0 from '@angular/core';
export declare class PushPipe<S> implements PipeTransform, OnDestroy {
    private renderedValue;
    private readonly configSubject;
    private readonly config$;
    private readonly subscription;
    private readonly cdAware;
    private readonly updateViewContextObserver;
    private readonly resetContextObserver;
    private readonly configurableBehaviour;
    constructor(cdRef: ChangeDetectorRef, ngZone: NgZone);
    transform(potentialObservable: null, config?: PushPipeConfig): null;
    transform(potentialObservable: undefined, config?: PushPipeConfig): undefined;
    transform(potentialObservable: Observable<S> | Promise<S>, config?: PushPipeConfig): S;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PushPipe<any>, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<PushPipe<any>, "ngrxPush">;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVzaC5waXBlLmQudHMiLCJzb3VyY2VzIjpbInB1c2gucGlwZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIE5nWm9uZSwgT25EZXN0cm95LCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb2FsZXNjaW5nQ29uZmlnIGFzIFB1c2hQaXBlQ29uZmlnIH0gZnJvbSAnLi4vY29yZSc7XG4vKipcbiAqIEBQaXBlIFB1c2hQaXBlXG4gKiBAZGVzY3JpcHRpb25cbiAqXG4gKiBUaGUgYG5ncnhQdXNoYCBwaXBlIHNlcnZlcyBhcyBhIGRyb3AtaW4gcmVwbGFjZW1lbnQgZm9yIHRoZSBgYXN5bmNgIHBpcGUuXG4gKiBJdCBjb250YWlucyBpbnRlbGxpZ2VudCBoYW5kbGluZyBvZiBjaGFuZ2UgZGV0ZWN0aW9uIHRvIGVuYWJsZSB1c1xuICogcnVubmluZyBpbiB6b25lLWZ1bGwgYXMgd2VsbCBhcyB6b25lLWxlc3MgbW9kZSB3aXRob3V0IGFueSBjaGFuZ2VzIHRvIHRoZSBjb2RlLlxuICpcbiAqIFRoZSBjdXJyZW50IHdheSBvZiBiaW5kaW5nIGFuIG9ic2VydmFibGUgdG8gdGhlIHZpZXcgbG9va3MgbGlrZSB0aGF0OlxuICogIGBgYGh0bWxcbiAqICB7e29ic2VydmFibGUkIHwgYXN5bmN9fVxuICogPG5nLWNvbnRhaW5lciAqbmdJZj1cIm9ic2VydmFibGUkIHwgYXN5bmMgYXMgb1wiPnt7b319PC9uZy1jb250YWluZXI+XG4gKiA8Y29tcG9uZW50IFt2YWx1ZV09XCJvYnNlcnZhYmxlJCB8IGFzeW5jXCI+PC9jb21wb25lbnQ+XG4gKiBgYGBcbiAqXG4gKiBUaGUgcHJvYmxlbSBpcyBgYXN5bmNgIHBpcGUganVzdCBtYXJrcyB0aGUgY29tcG9uZW50IGFuZCBhbGwgaXRzIGFuY2VzdG9ycyBhcyBkaXJ0eS5cbiAqIEl0IG5lZWRzIHpvbmUuanMgbWljcm90YXNrIHF1ZXVlIHRvIGV4aGF1c3QgdW50aWwgYEFwcGxpY2F0aW9uUmVmLnRpY2tgIGlzIGNhbGxlZCB0byByZW5kZXIgYWxsIGRpcnR5IG1hcmtlZCBjb21wb25lbnRzLlxuICpcbiAqIEhlYXZ5IGR5bmFtaWMgYW5kIGludGVyYWN0aXZlIFVJcyBzdWZmZXIgZnJvbSB6b25lcyBjaGFuZ2UgZGV0ZWN0aW9uIGEgbG90IGFuZCBjYW5cbiAqIGxlYW4gdG8gYmFkIHBlcmZvcm1hbmNlIG9yIGV2ZW4gdW51c2FibGUgYXBwbGljYXRpb25zLCBidXQgdGhlIGBhc3luY2AgcGlwZSBkb2VzIG5vdCB3b3JrIGluIHpvbmUtbGVzcyBtb2RlLlxuICpcbiAqIGBuZ3J4UHVzaGAgcGlwZSBzb2x2ZXMgdGhhdCBwcm9ibGVtLlxuICpcbiAqIEluY2x1ZGVkIEZlYXR1cmVzOlxuICogIC0gVGFrZSBvYnNlcnZhYmxlcyBvciBwcm9taXNlcywgcmV0cmlldmUgdGhlaXIgdmFsdWVzIGFuZCByZW5kZXIgdGhlIHZhbHVlIHRvIHRoZSB0ZW1wbGF0ZVxuICogIC0gSGFuZGxpbmcgbnVsbCBhbmQgdW5kZWZpbmVkIHZhbHVlcyBpbiBhIGNsZWFuIHVuaWZpZWQvc3RydWN0dXJlZCB3YXlcbiAqICAtIFRyaWdnZXJzIGNoYW5nZS1kZXRlY3Rpb24gZGlmZmVyZW50bHkgaWYgYHpvbmUuanNgIGlzIHByZXNlbnQgb3Igbm90IChgZGV0ZWN0Q2hhbmdlc2Agb3IgYG1hcmtGb3JDaGVja2ApXG4gKiAgLSBEaXN0aW5jdCBzYW1lIHZhbHVlcyBpbiBhIHJvdyB0byBpbmNyZWFzZSBwZXJmb3JtYW5jZVxuICogIC0gQ29hbGVzY2luZyBvZiBjaGFuZ2UgZGV0ZWN0aW9uIGNhbGxzIHRvIGJvb3N0IHBlcmZvcm1hbmNlXG4gKlxuICogQHVzYWdlTm90ZXNcbiAqXG4gKiAjIyMgRXhhbXBsZXNcbiAqXG4gKiBgbmdyeFB1c2hgIHBpcGUgc29sdmVzIHRoYXQgcHJvYmxlbS4gSXQgY2FuIGJlIHVzZWQgbGlrZSBzaG93biBoZXJlOlxuICogYGBgaHRtbFxuICoge3tvYnNlcnZhYmxlJCB8IG5ncnhQdXNofX1cbiAqIDxuZy1jb250YWluZXIgKm5nSWY9XCJvYnNlcnZhYmxlJCB8IG5ncnhQdXNoIGFzIG9cIj57e299fTwvbmctY29udGFpbmVyPlxuICogPGNvbXBvbmVudCBbdmFsdWVdPVwib2JzZXJ2YWJsZSQgfCBuZ3J4UHVzaFwiPjwvY29tcG9uZW50PlxuICogYGBgXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBQdXNoUGlwZTxTPiBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0sIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSByZW5kZXJlZFZhbHVlO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgY29uZmlnU3ViamVjdDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbmZpZyQ7XG4gICAgcHJpdmF0ZSByZWFkb25seSBzdWJzY3JpcHRpb247XG4gICAgcHJpdmF0ZSByZWFkb25seSBjZEF3YXJlO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgdXBkYXRlVmlld0NvbnRleHRPYnNlcnZlcjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJlc2V0Q29udGV4dE9ic2VydmVyO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgY29uZmlndXJhYmxlQmVoYXZpb3VyO1xuICAgIGNvbnN0cnVjdG9yKGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgbmdab25lOiBOZ1pvbmUpO1xuICAgIHRyYW5zZm9ybShwb3RlbnRpYWxPYnNlcnZhYmxlOiBudWxsLCBjb25maWc/OiBQdXNoUGlwZUNvbmZpZyk6IG51bGw7XG4gICAgdHJhbnNmb3JtKHBvdGVudGlhbE9ic2VydmFibGU6IHVuZGVmaW5lZCwgY29uZmlnPzogUHVzaFBpcGVDb25maWcpOiB1bmRlZmluZWQ7XG4gICAgdHJhbnNmb3JtKHBvdGVudGlhbE9ic2VydmFibGU6IE9ic2VydmFibGU8Uz4gfCBQcm9taXNlPFM+LCBjb25maWc/OiBQdXNoUGlwZUNvbmZpZyk6IFM7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbiJdfQ==