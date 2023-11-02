export enum Specificity {
  /** 
   * Most basic level of emotion in the emotion wheel.
   * Has the most scope among all levels.
   */
  CORE = 'core',
  /**
   * A more specific label of emotion. Has 2 more
   * fine grained scope.
   */
  SPECIFIC = 'specific',
  /**
   * The most specific identification of emotion
   * in the emotion wheel. 
   */
  FINE_GRAINED = 'fine grained'
}