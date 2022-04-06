export function Log(): ClassDecorator {
  return function (constructor: any) {
    const LIFECYCLE_HOOKS = ['ngOnInit', 'ngOnChanges', 'ngOnDestroy'];
    const component = constructor.name;

    LIFECYCLE_HOOKS.forEach((hook) => {
      const original = constructor.prototype[hook];

      constructor.prototype[hook] = (...args: any) => {
        console.log(
          `%c ${component} - ${hook}`,
          `color: #4CAF50; font-weight: bold`,
          ...args
        );
        original && original.apply(this, args);
      };
    });
  };
}
