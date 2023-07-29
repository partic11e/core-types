/**
 * Tests bMonth enum.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

import { assertEquals, describe, it } from '../dev_deps.ts';

import {
  andChecks,
  forwardValidity,
  orChecks,
  oredValueValidity,
  reverseValidity,
} from './fixtures/b_month.fixtures.ts';

describe('bMonth', () => {
  it('should be a valid enum', () => {
    forwardValidity.forEach(([key, value]) => {
      assertEquals(key as number, value);
    });

    reverseValidity.forEach(([key, value]) => {
      assertEquals(key, value);
    });
  });

  it('OR\'d values should be correct', () => {
    oredValueValidity.forEach(([key, value]) => {
      assertEquals(key, value);
    });
  });

  it('AND\'d (x includes any y) operation should be correct', () => {
    andChecks.forEach(([key, value, expected]) => {
      assertEquals(!!(key & value), expected);
    });
  });

  it('OR\'d (x includes all y) operation should be correct', () => {
    orChecks.forEach(([key, value, expected]) => {
      assertEquals(!!key && !!value && (key | value) === key, expected);
    });
  });
});
