import { Directive, input } from '@angular/core';

interface AsContext<T> {
  $implicit: T;
}

@Directive({
  selector: '[as]',
  standalone: true,
})
export class AsDirective<T> {
  as = input.required<T>();

  static ngTemplateContextGuard<T>(dir: AsDirective<T>, ctx: unknown): ctx is AsContext<T> {
    return true;
  }
}
