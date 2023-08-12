export enum Specificity {
  /** 
   * Most basic level of emotion in the emotion wheel.
   * Has the most scope among all levels.
   */
  CORE = 1,
  /**
   * A more specific label of emotion. Has 2 more
   * fine grained scope.
   */
  SPECIFIC = 2,
  /**
   * The most specific identification of emotion
   * in the emotion wheel. 
   */
  FINE_GRAINED = 3
}