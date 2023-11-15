import { TextOverflowPipe } from './text-overflow.pipe';

describe('TextOverflowPipe', () => {
  let pipe!: TextOverflowPipe;

  beforeEach(() => {
    pipe = new TextOverflowPipe();
  })

  it('should return the same value when the param is non string type', () => {
    const nonString = Symbol('nonString');

    const transformedValue = pipe.transform(nonString);

    expect(transformedValue).toBe(nonString);
  });

  it('should return a shortened substring with `...` at the end when the string argument is more that 41 characters', () => {
    const stringMoreThan41Characters = 'Jinxed wizards pluck ivy from the big quilt.  Sphinx of black quartz, judge my vow';

    const transformedValue = pipe.transform(stringMoreThan41Characters);

    const expectedShortenedValue = 'Jinxed wizards pluck ivy from the big qui...'
    expect(transformedValue).toBe(expectedShortenedValue);
  });

  it('should return a substring with `-` at the end when the suffix argument is `-`', () => {
    const longString104Characters = 'How vexingly quick daft zebras jump! The job requires extra pluck and zeal from every young wage earner.';

    const transformedValue = pipe.transform(longString104Characters, undefined, '-');

    const expectedShortenedValue = 'How vexingly quick daft zebras jump! The -'
    expect(transformedValue).toBe(expectedShortenedValue);
  });

  it('should return 1 character when the limit is set at 1', () => {
    const longString = 'This is how we do it.';

    const transformedValue = pipe.transform(longString, 1);

    const expectedShortenedValue = 'T...';
    expect(transformedValue).toBe(expectedShortenedValue);

  })

  it('should return `null` when the value argument passed is null', () => {
    const nullValue = null;

    const transformedValue = pipe.transform(nullValue);

    expect(transformedValue).toBeNull();
  })

  it('should return the value when the limit is not reached', () => {
    const withinLimitString = 'This'

    const transformedValue = pipe.transform(withinLimitString, 50);

    expect(transformedValue).toBe(withinLimitString);
  })
});
