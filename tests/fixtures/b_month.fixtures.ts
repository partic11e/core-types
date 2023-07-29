/**
 * Test fixtures for the bMonth enum.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

import { bMonth } from '../../mod.ts';

export const forwardValidity = [
  [bMonth.None, 0],
  [bMonth.January, 1],
  [bMonth.February, 2],
  [bMonth.March, 4],
  [bMonth.April, 8],
  [bMonth.May, 16],
  [bMonth.June, 32],
  [bMonth.July, 64],
  [bMonth.August, 128],
  [bMonth.September, 256],
  [bMonth.October, 512],
  [bMonth.November, 1024],
  [bMonth.December, 2048],
  [bMonth.FiscalQ1, 7],
  [bMonth.FiscalQ2, 56],
  [bMonth.FiscalQ3, 448],
  [bMonth.FiscalQ4, 3584],
  [bMonth.All, 4095],
] as const;

export const reverseValidity = [
  [bMonth[bMonth.None], 'None'],
  [bMonth[bMonth.January], 'January'],
  [bMonth[bMonth.February], 'February'],
  [bMonth[bMonth.March], 'March'],
  [bMonth[bMonth.April], 'April'],
  [bMonth[bMonth.May], 'May'],
  [bMonth[bMonth.June], 'June'],
  [bMonth[bMonth.July], 'July'],
  [bMonth[bMonth.August], 'August'],
  [bMonth[bMonth.September], 'September'],
  [bMonth[bMonth.October], 'October'],
  [bMonth[bMonth.November], 'November'],
  [bMonth[bMonth.December], 'December'],
  [bMonth[bMonth.FiscalQ1], 'FiscalQ1'],
  [bMonth[bMonth.FiscalQ2], 'FiscalQ2'],
  [bMonth[bMonth.FiscalQ3], 'FiscalQ3'],
  [bMonth[bMonth.FiscalQ4], 'FiscalQ4'],
  [bMonth[bMonth.All], 'All'],
] as const;

export const oredValueValidity = [
  [bMonth.January | bMonth.February | bMonth.March, bMonth.FiscalQ1],
  [bMonth.April | bMonth.May | bMonth.June, bMonth.FiscalQ2],
  [bMonth.July | bMonth.August | bMonth.September, bMonth.FiscalQ3],
  [bMonth.October | bMonth.November | bMonth.December, bMonth.FiscalQ4],
  [
    bMonth.FiscalQ1 | bMonth.FiscalQ2 | bMonth.FiscalQ3 | bMonth.FiscalQ4,
    bMonth.All,
  ],
  [
    bMonth.January | bMonth.February | bMonth.March | bMonth.April |
    bMonth.May | bMonth.June | bMonth.July | bMonth.August | bMonth.September |
    bMonth.October | bMonth.November | bMonth.December,
    bMonth.All,
  ],
] as const;

export const andChecks = [
  [bMonth.None, bMonth.None, false],
  [bMonth.None, bMonth.January, false],
  [bMonth.None, bMonth.February, false],
  [bMonth.None, bMonth.March, false],
  [bMonth.None, bMonth.April, false],
  [bMonth.None, bMonth.May, false],
  [bMonth.None, bMonth.June, false],
  [bMonth.None, bMonth.July, false],
  [bMonth.None, bMonth.August, false],
  [bMonth.None, bMonth.September, false],
  [bMonth.None, bMonth.October, false],
  [bMonth.None, bMonth.November, false],
  [bMonth.None, bMonth.December, false],
  [bMonth.None, bMonth.FiscalQ1, false],
  [bMonth.None, bMonth.FiscalQ2, false],
  [bMonth.None, bMonth.FiscalQ3, false],
  [bMonth.None, bMonth.FiscalQ4, false],
  [bMonth.None, bMonth.All, false],
  [bMonth.FiscalQ1, bMonth.None, false],
  [bMonth.FiscalQ1, bMonth.January, true],
  [bMonth.FiscalQ1, bMonth.February, true],
  [bMonth.FiscalQ1, bMonth.March, true],
  [bMonth.FiscalQ1, bMonth.April, false],
  [bMonth.FiscalQ1, bMonth.May, false],
  [bMonth.FiscalQ1, bMonth.June, false],
  [bMonth.FiscalQ1, bMonth.July, false],
  [bMonth.FiscalQ1, bMonth.August, false],
  [bMonth.FiscalQ1, bMonth.September, false],
  [bMonth.FiscalQ1, bMonth.October, false],
  [bMonth.FiscalQ1, bMonth.November, false],
  [bMonth.FiscalQ1, bMonth.December, false],
  [bMonth.FiscalQ1, bMonth.FiscalQ1, true],
  [bMonth.FiscalQ1, bMonth.FiscalQ2, false],
  [bMonth.FiscalQ1, bMonth.FiscalQ3, false],
  [bMonth.FiscalQ1, bMonth.FiscalQ4, false],
  [bMonth.FiscalQ1, bMonth.All, true],
  [bMonth.FiscalQ2, bMonth.None, false],
  [bMonth.FiscalQ2, bMonth.January, false],
  [bMonth.FiscalQ2, bMonth.February, false],
  [bMonth.FiscalQ2, bMonth.March, false],
  [bMonth.FiscalQ2, bMonth.April, true],
  [bMonth.FiscalQ2, bMonth.May, true],
  [bMonth.FiscalQ2, bMonth.June, true],
  [bMonth.FiscalQ2, bMonth.July, false],
  [bMonth.FiscalQ2, bMonth.August, false],
  [bMonth.FiscalQ2, bMonth.September, false],
  [bMonth.FiscalQ2, bMonth.October, false],
  [bMonth.FiscalQ2, bMonth.November, false],
  [bMonth.FiscalQ2, bMonth.December, false],
  [bMonth.FiscalQ2, bMonth.FiscalQ1, false],
  [bMonth.FiscalQ2, bMonth.FiscalQ2, true],
  [bMonth.FiscalQ2, bMonth.FiscalQ3, false],
  [bMonth.FiscalQ2, bMonth.FiscalQ4, false],
  [bMonth.FiscalQ2, bMonth.All, true],
  [bMonth.FiscalQ3, bMonth.None, false],
  [bMonth.FiscalQ3, bMonth.January, false],
  [bMonth.FiscalQ3, bMonth.February, false],
  [bMonth.FiscalQ3, bMonth.March, false],
  [bMonth.FiscalQ3, bMonth.April, false],
  [bMonth.FiscalQ3, bMonth.May, false],
  [bMonth.FiscalQ3, bMonth.June, false],
  [bMonth.FiscalQ3, bMonth.July, true],
  [bMonth.FiscalQ3, bMonth.August, true],
  [bMonth.FiscalQ3, bMonth.September, true],
  [bMonth.FiscalQ3, bMonth.October, false],
  [bMonth.FiscalQ3, bMonth.November, false],
  [bMonth.FiscalQ3, bMonth.December, false],
  [bMonth.FiscalQ3, bMonth.FiscalQ1, false],
  [bMonth.FiscalQ3, bMonth.FiscalQ2, false],
  [bMonth.FiscalQ3, bMonth.FiscalQ3, true],
  [bMonth.FiscalQ3, bMonth.FiscalQ4, false],
  [bMonth.FiscalQ3, bMonth.All, true],
  [bMonth.FiscalQ4, bMonth.None, false],
  [bMonth.FiscalQ4, bMonth.January, false],
  [bMonth.FiscalQ4, bMonth.February, false],
  [bMonth.FiscalQ4, bMonth.March, false],
  [bMonth.FiscalQ4, bMonth.April, false],
  [bMonth.FiscalQ4, bMonth.May, false],
  [bMonth.FiscalQ4, bMonth.June, false],
  [bMonth.FiscalQ4, bMonth.July, false],
  [bMonth.FiscalQ4, bMonth.August, false],
  [bMonth.FiscalQ4, bMonth.September, false],
  [bMonth.FiscalQ4, bMonth.October, true],
  [bMonth.FiscalQ4, bMonth.November, true],
  [bMonth.FiscalQ4, bMonth.December, true],
  [bMonth.FiscalQ4, bMonth.FiscalQ1, false],
  [bMonth.FiscalQ4, bMonth.FiscalQ2, false],
  [bMonth.FiscalQ4, bMonth.FiscalQ3, false],
  [bMonth.FiscalQ4, bMonth.FiscalQ4, true],
  [bMonth.FiscalQ4, bMonth.All, true],
  [bMonth.All, bMonth.None, false],
  [bMonth.All, bMonth.January, true],
  [bMonth.All, bMonth.February, true],
  [bMonth.All, bMonth.March, true],
  [bMonth.All, bMonth.April, true],
  [bMonth.All, bMonth.May, true],
  [bMonth.All, bMonth.June, true],
  [bMonth.All, bMonth.July, true],
  [bMonth.All, bMonth.August, true],
  [bMonth.All, bMonth.September, true],
  [bMonth.All, bMonth.October, true],
  [bMonth.All, bMonth.November, true],
  [bMonth.All, bMonth.December, true],
  [bMonth.All, bMonth.FiscalQ1, true],
  [bMonth.All, bMonth.FiscalQ2, true],
  [bMonth.All, bMonth.FiscalQ3, true],
  [bMonth.All, bMonth.FiscalQ4, true],
  [bMonth.All, bMonth.All, true],
] as const;

export const orChecks = [
  [bMonth.None, bMonth.None, false],
  [bMonth.None, bMonth.January, false],
  [bMonth.None, bMonth.February, false],
  [bMonth.None, bMonth.March, false],
  [bMonth.None, bMonth.April, false],
  [bMonth.None, bMonth.May, false],
  [bMonth.None, bMonth.June, false],
  [bMonth.None, bMonth.July, false],
  [bMonth.None, bMonth.August, false],
  [bMonth.None, bMonth.September, false],
  [bMonth.None, bMonth.October, false],
  [bMonth.None, bMonth.November, false],
  [bMonth.None, bMonth.December, false],
  [bMonth.None, bMonth.FiscalQ1, false],
  [bMonth.None, bMonth.FiscalQ2, false],
  [bMonth.None, bMonth.FiscalQ3, false],
  [bMonth.None, bMonth.FiscalQ4, false],
  [bMonth.None, bMonth.All, false],
  [bMonth.FiscalQ1, bMonth.None, false],
  [bMonth.FiscalQ1, bMonth.January, true],
  [bMonth.FiscalQ1, bMonth.February, true],
  [bMonth.FiscalQ1, bMonth.March, true],
  [bMonth.FiscalQ1, bMonth.April, false],
  [bMonth.FiscalQ1, bMonth.May, false],
  [bMonth.FiscalQ1, bMonth.June, false],
  [bMonth.FiscalQ1, bMonth.July, false],
  [bMonth.FiscalQ1, bMonth.August, false],
  [bMonth.FiscalQ1, bMonth.September, false],
  [bMonth.FiscalQ1, bMonth.October, false],
  [bMonth.FiscalQ1, bMonth.November, false],
  [bMonth.FiscalQ1, bMonth.December, false],
  [bMonth.FiscalQ1, bMonth.FiscalQ1, true],
  [bMonth.FiscalQ1, bMonth.FiscalQ2, false],
  [bMonth.FiscalQ1, bMonth.FiscalQ3, false],
  [bMonth.FiscalQ1, bMonth.FiscalQ4, false],
  [bMonth.FiscalQ1, bMonth.All, false],
  [bMonth.FiscalQ2, bMonth.None, false],
  [bMonth.FiscalQ2, bMonth.January, false],
  [bMonth.FiscalQ2, bMonth.February, false],
  [bMonth.FiscalQ2, bMonth.March, false],
  [bMonth.FiscalQ2, bMonth.April, true],
  [bMonth.FiscalQ2, bMonth.May, true],
  [bMonth.FiscalQ2, bMonth.June, true],
  [bMonth.FiscalQ2, bMonth.July, false],
  [bMonth.FiscalQ2, bMonth.August, false],
  [bMonth.FiscalQ2, bMonth.September, false],
  [bMonth.FiscalQ2, bMonth.October, false],
  [bMonth.FiscalQ2, bMonth.November, false],
  [bMonth.FiscalQ2, bMonth.December, false],
  [bMonth.FiscalQ2, bMonth.FiscalQ1, false],
  [bMonth.FiscalQ2, bMonth.FiscalQ2, true],
  [bMonth.FiscalQ2, bMonth.FiscalQ3, false],
  [bMonth.FiscalQ2, bMonth.FiscalQ4, false],
  [bMonth.FiscalQ2, bMonth.All, false],
  [bMonth.FiscalQ3, bMonth.None, false],
  [bMonth.FiscalQ3, bMonth.January, false],
  [bMonth.FiscalQ3, bMonth.February, false],
  [bMonth.FiscalQ3, bMonth.March, false],
  [bMonth.FiscalQ3, bMonth.April, false],
  [bMonth.FiscalQ3, bMonth.May, false],
  [bMonth.FiscalQ3, bMonth.June, false],
  [bMonth.FiscalQ3, bMonth.July, true],
  [bMonth.FiscalQ3, bMonth.August, true],
  [bMonth.FiscalQ3, bMonth.September, true],
  [bMonth.FiscalQ3, bMonth.October, false],
  [bMonth.FiscalQ3, bMonth.November, false],
  [bMonth.FiscalQ3, bMonth.December, false],
  [bMonth.FiscalQ3, bMonth.FiscalQ1, false],
  [bMonth.FiscalQ3, bMonth.FiscalQ2, false],
  [bMonth.FiscalQ3, bMonth.FiscalQ3, true],
  [bMonth.FiscalQ3, bMonth.FiscalQ4, false],
  [bMonth.FiscalQ3, bMonth.All, false],
  [bMonth.FiscalQ4, bMonth.None, false],
  [bMonth.FiscalQ4, bMonth.January, false],
  [bMonth.FiscalQ4, bMonth.February, false],
  [bMonth.FiscalQ4, bMonth.March, false],
  [bMonth.FiscalQ4, bMonth.April, false],
  [bMonth.FiscalQ4, bMonth.May, false],
  [bMonth.FiscalQ4, bMonth.June, false],
  [bMonth.FiscalQ4, bMonth.July, false],
  [bMonth.FiscalQ4, bMonth.August, false],
  [bMonth.FiscalQ4, bMonth.September, false],
  [bMonth.FiscalQ4, bMonth.October, true],
  [bMonth.FiscalQ4, bMonth.November, true],
  [bMonth.FiscalQ4, bMonth.December, true],
  [bMonth.FiscalQ4, bMonth.FiscalQ1, false],
  [bMonth.FiscalQ4, bMonth.FiscalQ2, false],
  [bMonth.FiscalQ4, bMonth.FiscalQ3, false],
  [bMonth.FiscalQ4, bMonth.FiscalQ4, true],
  [bMonth.FiscalQ4, bMonth.All, false],
  [bMonth.All, bMonth.None, false],
  [bMonth.All, bMonth.January, true],
  [bMonth.All, bMonth.February, true],
  [bMonth.All, bMonth.March, true],
  [bMonth.All, bMonth.April, true],
  [bMonth.All, bMonth.May, true],
  [bMonth.All, bMonth.June, true],
  [bMonth.All, bMonth.July, true],
  [bMonth.All, bMonth.August, true],
  [bMonth.All, bMonth.September, true],
  [bMonth.All, bMonth.October, true],
  [bMonth.All, bMonth.November, true],
  [bMonth.All, bMonth.December, true],
  [bMonth.All, bMonth.FiscalQ1, true],
  [bMonth.All, bMonth.FiscalQ2, true],
  [bMonth.All, bMonth.FiscalQ3, true],
  [bMonth.All, bMonth.FiscalQ4, true],
  [bMonth.All, bMonth.All, true],
  [
    bMonth.January | bMonth.March | bMonth.April,
    bMonth.January | bMonth.April,
    true,
  ],
  [
    bMonth.January | bMonth.March | bMonth.April,
    bMonth.January | bMonth.February,
    false,
  ],
] as const;
