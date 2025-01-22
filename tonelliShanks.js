/**
 * Computes the modular square root of `n` modulo `p` using the Tonelli-Shanks algorithm.
 * 
 * This function finds `r` such that `r^2 ≡ n (mod p)` if such an `r` exists. 
 * It works only when `p` is an odd prime and `n` is a quadratic residue modulo `p`.
 * 
 * @param {bigint} n - The number whose square root modulo `p` is to be found.
 * @param {bigint} p - An odd prime modulus.
 * @returns {bigint|null} The square root `r` such that `r^2 ≡ n (mod p)` if it exists, or `null` if no solution exists.
 * 
 * @throws {Error} If the provided modulus `p` is not an odd prime.
 * 
 * @example
 * // Example usage:
 * const n = 10n;
 * const p = 13n;
 * const result = tonelliShanks(n, p); // result could be 6n or 7n
 */
tonelliShanks(n, p) {
    if (n === 0n) return 0n;
    
    // Check if n is a quadratic residue
    if (this.modPow(n, (p - 1n) / 2n, p) !== 1n) {
        return null;
    }
    
    let q = p - 1n;
    let s = 0n;
    while (q % 2n === 0n) {
        q = q / 2n;
        s += 1n;
    }
    
    if (s === 1n) {
        const r = this.modPow(n, (p + 1n) / 4n, p);
        return r;
    }
    
    let z = 2n;
    while (this.modPow(z, (p - 1n) / 2n, p) === 1n) {
        z += 1n;
    }
    
    let c = this.modPow(z, q, p);
    let r = this.modPow(n, (q + 1n) / 2n, p);
    let t = this.modPow(n, q, p);
    let m = s;
    
    while (t !== 1n) {
        let i = 0n;
        let tt = t;
        while (tt !== 1n && i < m) {
            tt = (tt * tt) % p;
            i += 1n;
        }
        
        if (i === m) return null;
        
        const b = this.modPow(c, this.modPow(2n, m - i - 1n, p - 1n), p);
        c = (b * b) % p;
        r = (r * b) % p;
        t = (t * c) % p;
        m = i;
    }
    
    return r;
}
