
---

### 2. **Tonelli-Shanks Algorithm**

**Filename:** `tonelliShanks.js`

#### README

```markdown
# Tonelli-Shanks Algorithm

## Overview

The Tonelli-Shanks algorithm computes the modular square root of a number \(n\) modulo a prime \(p\). This means finding \(x\) such that:

\[
x^2 \equiv n \, (\text{mod } p)
\]

It is particularly important in cryptography, for instance in algorithms like ECDSA (Elliptic Curve Digital Signature Algorithm).

---

## How It Works

1. **Quadratic Residue Check:** Verify that \(n\) is a quadratic residue modulo \(p\) using the Legendre symbol:
   \[
   \text{Check: } n^{(p-1)/2} \mod p = 1
   \]
   If not, \(n\) has no square root modulo \(p\).
   
2. **Factor \(p-1\):** Write \(p-1 = 2^s \cdot q\), where \(q\) is odd.

3. **Special Case \(s = 1\):** If \(s = 1\), compute the square root directly:
   \[
   r \equiv n^{(p+1)/4} \mod p
   \]

4. **General Case \(s > 1\):**
   - Find a quadratic non-residue \(z\) modulo \(p\).
   - Initialize variables \(c = z^q \mod p\), \(r = n^{(q+1)/2} \mod p\), \(t = n^q \mod p\), and \(m = s\).
   - Use iterative updates to refine \(r\) and \(t\) until \(t = 1\).

---

## Usage

### Function Signature
```javascript
function tonelliShanks(n, p) {
    // Implementation
}
