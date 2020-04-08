import { ChangeDetectorRef, NgZone, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { Observable, Unsubscribable } from 'rxjs';
import { CoalescingConfig as NgRxLetConfig } from '../core';
import * as ɵngcc0 from '@angular/core';
export interface LetViewContext<T> {
    $implicit?: T;
    ngrxLet?: T;
    $error?: boolean;
    $complete?: boolean;
}
/**
 * @Directive LetDirective
 *
 * @description
 *
 * The `*ngrxLet` directive serves a convenient way of binding observables to a view context (a dom element scope).
 * It also helps with several internal processing under the hood.
 *
 * The current way of binding an observable to the view looks like that:
 * ```html
 * <ng-container *ngIf="observableNumber$ as n">
 * <app-number [number]="n">
 * </app-number>
 * <app-number-special [number]="n">
 * </app-number-special>
 * </ng-container>
 *  ```
 *
 *  The problem is `*ngIf` is also interfering with rendering and in case of a `0` the component would be hidden
 *
 * Included Features:
 * - binding is always present. (`*ngIf="truthy$"`)
 * - it takes away the multiple usages of the `async` or `ngrxPush` pipe
 * - a unified/structured way of handling null and undefined
 * - triggers change-detection differently if `zone.js` is present or not (`ChangeDetectorRef.detectChanges` or `ChangeDetectorRef.markForCheck`)
 * - triggers change-detection differently if ViewEngine or Ivy is present (`ChangeDetectorRef.detectChanges` or `ɵdetectChanges`)
 * - distinct same values in a row (distinctUntilChanged operator),
 *
 * @usageNotes
 *
 * ### Examples
 *
 * The `*ngrxLet` directive take over several things and makes it more convenient and save to work with streams in the template
 * `<ng-container *ngrxLet="observableNumber$ as c"></ng-container>`
 *
 * ```html
 * <ng-container *ngrxLet="observableNumber$ as n">
 * <app-number [number]="n">
 * </app-number>
 * </ng-container>
 *
 * <ng-container *ngrxLet="observableNumber$; let n">
 * <app-number [number]="n">
 * </app-number>
 * </ng-container>
 * ```
 *
 * In addition to that it provides us information from the whole observable context.
 * We can track the observables:
 * - next value
 * - error value
 * - complete state
 *
 * ```html
 * <ng-container *ngrxLet="observableNumber$; let n; let e = $error, let c = $complete">
 * <app-number [number]="n"  *ngIf="!e && !c">
 * </app-number>
 * <ng-container *ngIf="e">
 * There is an error: {{e}}
 * </ng-container>
 * <ng-container *ngIf="c">
 * Observable completed: {{c}}
 * </ng-container>
 * </ng-container>
 * ```
 *
 * @publicApi
 */
export declare class LetDirective<U> implements OnDestroy {
    private readonly templateRef;
    private readonly viewContainerRef;
    private embeddedView;
    private readonly ViewContext;
    private readonly configSubject;
    private readonly config$;
    protected readonly subscription: Unsubscribable;
    private readonly cdAware;
    private readonly resetContextObserver;
    private readonly updateViewContextObserver;
    static ngTemplateContextGuard<U>(dir: LetDirective<U>, ctx: unknown): ctx is LetViewContext<U>;
    private readonly configurableBehaviour;
    set ngrxLet(potentialObservable: Observable<U> | Promise<U> | null | undefined);
    set ngrxLetConfig(config: NgRxLetConfig);
    constructor(cdRef: ChangeDetectorRef, ngZone: NgZone, templateRef: TemplateRef<LetViewContext<U>>, viewContainerRef: ViewContainerRef);
    createEmbeddedView(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LetDirective<any>, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<LetDirective<any>, "[ngrxLet]", never, { "ngrxLet": "ngrxLet"; "ngrxLetConfig": "ngrxLetConfig"; }, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGV0LmRpcmVjdGl2ZS5kLnRzIiwic291cmNlcyI6WyJsZXQuZGlyZWN0aXZlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIE5nWm9uZSwgT25EZXN0cm95LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgVW5zdWJzY3JpYmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENvYWxlc2NpbmdDb25maWcgYXMgTmdSeExldENvbmZpZyB9IGZyb20gJy4uL2NvcmUnO1xuZXhwb3J0IGludGVyZmFjZSBMZXRWaWV3Q29udGV4dDxUPiB7XG4gICAgJGltcGxpY2l0PzogVDtcbiAgICBuZ3J4TGV0PzogVDtcbiAgICAkZXJyb3I/OiBib29sZWFuO1xuICAgICRjb21wbGV0ZT86IGJvb2xlYW47XG59XG4vKipcbiAqIEBEaXJlY3RpdmUgTGV0RGlyZWN0aXZlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKlxuICogVGhlIGAqbmdyeExldGAgZGlyZWN0aXZlIHNlcnZlcyBhIGNvbnZlbmllbnQgd2F5IG9mIGJpbmRpbmcgb2JzZXJ2YWJsZXMgdG8gYSB2aWV3IGNvbnRleHQgKGEgZG9tIGVsZW1lbnQgc2NvcGUpLlxuICogSXQgYWxzbyBoZWxwcyB3aXRoIHNldmVyYWwgaW50ZXJuYWwgcHJvY2Vzc2luZyB1bmRlciB0aGUgaG9vZC5cbiAqXG4gKiBUaGUgY3VycmVudCB3YXkgb2YgYmluZGluZyBhbiBvYnNlcnZhYmxlIHRvIHRoZSB2aWV3IGxvb2tzIGxpa2UgdGhhdDpcbiAqIGBgYGh0bWxcbiAqIDxuZy1jb250YWluZXIgKm5nSWY9XCJvYnNlcnZhYmxlTnVtYmVyJCBhcyBuXCI+XG4gKiA8YXBwLW51bWJlciBbbnVtYmVyXT1cIm5cIj5cbiAqIDwvYXBwLW51bWJlcj5cbiAqIDxhcHAtbnVtYmVyLXNwZWNpYWwgW251bWJlcl09XCJuXCI+XG4gKiA8L2FwcC1udW1iZXItc3BlY2lhbD5cbiAqIDwvbmctY29udGFpbmVyPlxuICogIGBgYFxuICpcbiAqICBUaGUgcHJvYmxlbSBpcyBgKm5nSWZgIGlzIGFsc28gaW50ZXJmZXJpbmcgd2l0aCByZW5kZXJpbmcgYW5kIGluIGNhc2Ugb2YgYSBgMGAgdGhlIGNvbXBvbmVudCB3b3VsZCBiZSBoaWRkZW5cbiAqXG4gKiBJbmNsdWRlZCBGZWF0dXJlczpcbiAqIC0gYmluZGluZyBpcyBhbHdheXMgcHJlc2VudC4gKGAqbmdJZj1cInRydXRoeSRcImApXG4gKiAtIGl0IHRha2VzIGF3YXkgdGhlIG11bHRpcGxlIHVzYWdlcyBvZiB0aGUgYGFzeW5jYCBvciBgbmdyeFB1c2hgIHBpcGVcbiAqIC0gYSB1bmlmaWVkL3N0cnVjdHVyZWQgd2F5IG9mIGhhbmRsaW5nIG51bGwgYW5kIHVuZGVmaW5lZFxuICogLSB0cmlnZ2VycyBjaGFuZ2UtZGV0ZWN0aW9uIGRpZmZlcmVudGx5IGlmIGB6b25lLmpzYCBpcyBwcmVzZW50IG9yIG5vdCAoYENoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXNgIG9yIGBDaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2tgKVxuICogLSB0cmlnZ2VycyBjaGFuZ2UtZGV0ZWN0aW9uIGRpZmZlcmVudGx5IGlmIFZpZXdFbmdpbmUgb3IgSXZ5IGlzIHByZXNlbnQgKGBDaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzYCBvciBgybVkZXRlY3RDaGFuZ2VzYClcbiAqIC0gZGlzdGluY3Qgc2FtZSB2YWx1ZXMgaW4gYSByb3cgKGRpc3RpbmN0VW50aWxDaGFuZ2VkIG9wZXJhdG9yKSxcbiAqXG4gKiBAdXNhZ2VOb3Rlc1xuICpcbiAqICMjIyBFeGFtcGxlc1xuICpcbiAqIFRoZSBgKm5ncnhMZXRgIGRpcmVjdGl2ZSB0YWtlIG92ZXIgc2V2ZXJhbCB0aGluZ3MgYW5kIG1ha2VzIGl0IG1vcmUgY29udmVuaWVudCBhbmQgc2F2ZSB0byB3b3JrIHdpdGggc3RyZWFtcyBpbiB0aGUgdGVtcGxhdGVcbiAqIGA8bmctY29udGFpbmVyICpuZ3J4TGV0PVwib2JzZXJ2YWJsZU51bWJlciQgYXMgY1wiPjwvbmctY29udGFpbmVyPmBcbiAqXG4gKiBgYGBodG1sXG4gKiA8bmctY29udGFpbmVyICpuZ3J4TGV0PVwib2JzZXJ2YWJsZU51bWJlciQgYXMgblwiPlxuICogPGFwcC1udW1iZXIgW251bWJlcl09XCJuXCI+XG4gKiA8L2FwcC1udW1iZXI+XG4gKiA8L25nLWNvbnRhaW5lcj5cbiAqXG4gKiA8bmctY29udGFpbmVyICpuZ3J4TGV0PVwib2JzZXJ2YWJsZU51bWJlciQ7IGxldCBuXCI+XG4gKiA8YXBwLW51bWJlciBbbnVtYmVyXT1cIm5cIj5cbiAqIDwvYXBwLW51bWJlcj5cbiAqIDwvbmctY29udGFpbmVyPlxuICogYGBgXG4gKlxuICogSW4gYWRkaXRpb24gdG8gdGhhdCBpdCBwcm92aWRlcyB1cyBpbmZvcm1hdGlvbiBmcm9tIHRoZSB3aG9sZSBvYnNlcnZhYmxlIGNvbnRleHQuXG4gKiBXZSBjYW4gdHJhY2sgdGhlIG9ic2VydmFibGVzOlxuICogLSBuZXh0IHZhbHVlXG4gKiAtIGVycm9yIHZhbHVlXG4gKiAtIGNvbXBsZXRlIHN0YXRlXG4gKlxuICogYGBgaHRtbFxuICogPG5nLWNvbnRhaW5lciAqbmdyeExldD1cIm9ic2VydmFibGVOdW1iZXIkOyBsZXQgbjsgbGV0IGUgPSAkZXJyb3IsIGxldCBjID0gJGNvbXBsZXRlXCI+XG4gKiA8YXBwLW51bWJlciBbbnVtYmVyXT1cIm5cIiAgKm5nSWY9XCIhZSAmJiAhY1wiPlxuICogPC9hcHAtbnVtYmVyPlxuICogPG5nLWNvbnRhaW5lciAqbmdJZj1cImVcIj5cbiAqIFRoZXJlIGlzIGFuIGVycm9yOiB7e2V9fVxuICogPC9uZy1jb250YWluZXI+XG4gKiA8bmctY29udGFpbmVyICpuZ0lmPVwiY1wiPlxuICogT2JzZXJ2YWJsZSBjb21wbGV0ZWQ6IHt7Y319XG4gKiA8L25nLWNvbnRhaW5lcj5cbiAqIDwvbmctY29udGFpbmVyPlxuICogYGBgXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBMZXREaXJlY3RpdmU8VT4gaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgdGVtcGxhdGVSZWY7XG4gICAgcHJpdmF0ZSByZWFkb25seSB2aWV3Q29udGFpbmVyUmVmO1xuICAgIHByaXZhdGUgZW1iZWRkZWRWaWV3O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgVmlld0NvbnRleHQ7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjb25maWdTdWJqZWN0O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgY29uZmlnJDtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgc3Vic2NyaXB0aW9uOiBVbnN1YnNjcmliYWJsZTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNkQXdhcmU7XG4gICAgcHJpdmF0ZSByZWFkb25seSByZXNldENvbnRleHRPYnNlcnZlcjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHVwZGF0ZVZpZXdDb250ZXh0T2JzZXJ2ZXI7XG4gICAgc3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQ8VT4oZGlyOiBMZXREaXJlY3RpdmU8VT4sIGN0eDogdW5rbm93bik6IGN0eCBpcyBMZXRWaWV3Q29udGV4dDxVPjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbmZpZ3VyYWJsZUJlaGF2aW91cjtcbiAgICBzZXQgbmdyeExldChwb3RlbnRpYWxPYnNlcnZhYmxlOiBPYnNlcnZhYmxlPFU+IHwgUHJvbWlzZTxVPiB8IG51bGwgfCB1bmRlZmluZWQpO1xuICAgIHNldCBuZ3J4TGV0Q29uZmlnKGNvbmZpZzogTmdSeExldENvbmZpZyk7XG4gICAgY29uc3RydWN0b3IoY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLCBuZ1pvbmU6IE5nWm9uZSwgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPExldFZpZXdDb250ZXh0PFU+Piwgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZik7XG4gICAgY3JlYXRlRW1iZWRkZWRWaWV3KCk6IHZvaWQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbiJdfQ==