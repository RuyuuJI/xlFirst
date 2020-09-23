export interface effectConfig {
    x?: number, // any properties (not limited to CSS)
    y?: number, // any properties (not limited to CSS)
    backgroundColor?: String, // camelCase
    duration?: number, // seconds
    delay?: number,
    ease?: String, // "power2.inOut"
    stagger?: number, // stagger start times
    paused?: boolean, // default is false
    overwrite?: String, // default is false   "auto"
    repeat?: number, // number of repeats (-1 for infinite)
    repeatDelay?: number, // seconds between repeats
    repeatRefresh?: boolean, // invalidates on each repeat
    yoyo?: boolean, // if true > A-B-B-A, if false > A-B-A-B
    yoyoEase?: boolean, // or ease like "power2"
    immediateRender?: boolean,
    onComplete?: Function,
  }