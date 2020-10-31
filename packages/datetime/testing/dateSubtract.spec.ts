import { dateSubtract } from "@numty/datetime";

describe('dateSubtract', () => {
  it('should create TimeSpan with 30 days in it', () => {
    const ts = dateSubtract(new Date(2020, 10, 1), new Date(2020, 11, 1));
    expect(ts.days).toEqual(30);
  });

  it('should create TimeSpan with 2 hours in it', () => {
    const d = new Date();
    d.setHours(d.getHours() - 2);
    const ts = dateSubtract(d)
    expect(ts.hours).toEqual(2);
  });
});
