import { getJSDocDeprecatedTag } from 'typescript';

export function char_map(x: string): Map<string, string> {
  // Checks if string is empty
  if (x.length === 0) {
    throw Error('Cannot have an alphabet with length zero');
  }

  // Creates hashmap to return <"char", "number">
  let hashmap = new Map<string, string>();

  // Removes all whitespace from string
  let alphabet: string = x.replace(/\s/g, '');

  // Determines length of "numSpace" when mapping
  // alphabet: abc, a->0 b->1 c->2, numSpace = 1
  // alphabet: abc..xyz, a->00 b->01 c->02 ... x->23 y->24 z->25, numSpace = 2
  let lowBound: number = 1;
  let upBound: number = 10;
  let numSpace: number = 1;
  while (!(lowBound <= alphabet.length && alphabet.length <= upBound)) {
    lowBound *= 10;
    upBound *= 10;
    numSpace += 1;
  }

  // Puts alphabet into hashmap
  for (let i: number = 0; i < alphabet.length; i++) {
    // Adds leading zeroes to number
    let num: string = i.toString();
    while (num.length < numSpace) {
      num = '0' + num;
    }

    // Checks for multiple elements
    if (hashmap.has(alphabet[i])) {
      throw Error('Cannot have duplicate elements in alphabet');
    }

    // Adds into hashmap
    hashmap.set(alphabet[i], num);
  }

  return hashmap;
}

/**
 * Creates a hashmap, with numbers as keys and corresponding alphabet characters as their values
 *
 * @param x (The alphabet string)
 * @returns (Map<string, string>)
 */
export function inverse_char_map(x: string): Map<string, string> {
  let hashmap = char_map(x);
  let invMap = new Map<string, string>();

  hashmap.forEach((value, key) => invMap.set(value, key));
  return invMap;
}

/**
 * Creates a corresponding string from a number depending on length
 *
 * @param num (The number to change to a string)
 * @param len (Length of desired output string)
 * @returns (string)
 */
export function num_to_key(num: number, len: number): string {
  // Checks if they're whole numbers
  if (Math.floor(num) !== num || Math.floor(len) !== len) {
    throw Error('Either num or len cannot be a decimal number');
  }

  // Checks if num is negative
  if (num < 0) {
    throw Error('num cannot be negative');
  }

  // Checks if len <= 1
  if (len <= 0) {
    throw Error('len cannot be less than one');
  }

  let s: string = num.toString();

  // Checks if number has a larger length than len
  if (s.length > len) {
    throw Error('number cannot have a larger length than len');
  }

  // Appends leading zeroes
  while (s.length < len) {
    s = '0' + s;
  }

  return s;
}

/**
 * Calculates the greatest common denominator between two integers
 *
 * @param a (Some integer)
 * @param b (Some integer)
 * @returns (integer)
 */
export function GCD(a: number, b: number): number {
  // Check that a and b are decimal
  if (Math.floor(a) !== a || Math.floor(b) !== b) {
    throw Error('a and b have to both be integers');
  }

  // Check that a and b are positive
  if (a <= 0 || b <= 0) {
    throw Error('a and b have to both be positive');
  }

  let r: number = a % b;

  if (r === 0) {
    return b;
  } else {
    return GCD(b, r);
  }
}

/**
 * Calculates the modular inverse of a number
 *
 * @param a (Some integer)
 * @param b (Some integer)
 * @returns (integer)
 */
export function inverseMod(a: number, modulo: number): number {
  // Check if their GCD is 1
  if (GCD(a, modulo) !== 1) {
    throw Error('gcd(a, modulo) must be equal to 1');
  }

  let c: number = 1;

  // Checks if divisible by a
  while (c % a !== 0) {
    c += modulo;
  }

  return c / a;
}

/**
 * Euclidean Algorithm to calculate the greatest common denominator between two integers
 * 1. Check if a and b are integers
 * 2. Check if a and b are positive
 * 3. Check if a % b = 0
 * 4. Compute remainder and qoutient
 * 5. recursively call function with b and r
 *
 * Given an equation in the form of ax + by = gcd(a, b)
 * @param a an integer
 * @param b an integer
 * @returns an array of great common denominator of a and b , coefficient of a (x), coefficient of b (y)
 */

export function extended_euclidean_algorithm(a: number, b: number): number[] {
  // Check that a and b are decimal
  if (Math.floor(a) !== a || Math.floor(b) !== b) {
    throw Error('inputs must be integers');
  }

  // Check that a and b are positive
  if (a <= 0 || b <= 0) {
    throw Error('inputs must be positive');
  }

  let r: number = a % b;
  let q: number = (a - r) / b;

  if (r === 0) {
    return [b, 0, 1];
  } else {
    let arr: number[] = extended_euclidean_algorithm(b, r);
    let gcd: number = arr[0];
    let coeff_b: number = arr[1];
    let coeff_a: number = arr[2];

    return [gcd, coeff_a, coeff_b - q * coeff_a];
  }
}

/**
 * Sussesive Squaring Algorithm to calculate the modular exponentiation of a number
 * Given an equation in the form of base^expo mod modulus
 * @param base an integer
 * @param expo an integer
 * @param modulus an integer
 * @returns the value of x^y mod m
 */
export function sussesive_squaring_mod(
  base: number,
  expo: number,
  modulus: number
): number {
  if (
    Math.floor(base) !== base ||
    Math.floor(expo) !== expo ||
    Math.floor(modulus) !== modulus
  ) {
    throw Error('inputs must be integers');
  }

  let power: number = 1;
  let power_base: number = base;
  let power_bases: number[][] = [[power, base]];

  while (power < expo) {
    power *= 2;
    power_base = (power_base * power_base) % modulus;
    power_bases.push([power_base, power]);
  }

  let result: number = 1;
  let current_power: number = 0;
  for (var i = power_bases.length - 1; i >= 0; i--) {
    if (current_power + power_bases[i][1] <= expo) {
      current_power += power_bases[i][1];
      result = (result * power_bases[i][0]) % modulus;
    }
  }
  return result;
}
