---
id: base-03-espressioni-polinomi
subject: base
topic_it: Algebra e numeri
topic_en: Algebra and numbers
title_it: Espressioni algebriche e polinomi
title_en: Algebraic expressions and polynomials
level: green
order: 3
source_book: "MIT OCW 18.01 (Precalcolo)"
source_chapter: "Sezione 3 — Polinomi"
---

## Monomi

Un **monomio** è il prodotto di un numero (coefficiente) per una o più variabili elevate a potenze intere non negative:

$$3x^2y, \quad -\frac{1}{2}a^3b, \quad 7$$

Il **grado** di un monomio è la somma degli esponenti delle variabili. Il grado di $3x^2y$ è $2+1=3$; il grado di una costante non nulla è $0$.

Due monomi si dicono **simili** se hanno la stessa parte letterale. Si possono sommare e sottrarre solo monomi simili:

$$5x^2 - 2x^2 = 3x^2 \qquad 4xy + xy = 5xy$$

## Polinomi

Un **polinomio** è una somma di monomi (chiamati **termini**). Si scrive in forma ordinata disponendo i termini in ordine decrescente di grado:

$$p(x) = a_n x^n + a_{n-1}x^{n-1} + \cdots + a_1 x + a_0, \quad a_n \neq 0$$

Il **grado** del polinomio è il massimo grado dei suoi termini. Il coefficiente $a_n$ si chiama **coefficiente direttore** (o dominante); $a_0$ è il **termine noto**.

**Esempio.** $p(x) = 2x^3 - x + 5$ ha grado 3, coefficiente direttore 2, termine noto 5.

## Operazioni sui polinomi

### Somma e differenza

Si raccolgono i termini simili:

$$(3x^2 + 2x - 1) + (x^2 - 5x + 4) = 4x^2 - 3x + 3$$

### Prodotto

Si applica la proprietà distributiva (ogni termine di un polinomio moltiplica ogni termine dell'altro):

$$(x+2)(x^2 - x + 3) = x^3 - x^2 + 3x + 2x^2 - 2x + 6 = x^3 + x^2 + x + 6$$

### Divisione (con il metodo di Ruffini)

Se si divide $p(x)$ per $(x - a)$, il **teorema di Ruffini** afferma che il resto è $p(a)$. Se $p(a) = 0$, allora $(x-a)$ è un fattore di $p(x)$.

**Teorema del resto:** $p(x) = (x-a) \cdot q(x) + p(a)$

**Esempio.** Dividere $p(x) = x^3 - 6x^2 + 11x - 6$ per $(x-1)$. Poiché $p(1) = 1 - 6 + 11 - 6 = 0$, il resto è zero e $(x-1)$ è fattore.

---

## Esercizi

<details>
<summary>Esercizio 1 — Operazioni tra polinomi</summary>

Calcolare $(2x^2 - 3x + 1)(x + 2)$.

**Soluzione.**

$$= 2x^3 + 4x^2 - 3x^2 - 6x + x + 2 = 2x^3 + x^2 - 5x + 2$$

</details>

<details>
<summary>Esercizio 2 — Grado e coefficienti</summary>

Dato $p(x) = (x^2+1)(x-3) - x(x^2-2)$, trovare grado, coefficiente direttore e termine noto.

**Soluzione.**

$$(x^2+1)(x-3) = x^3 - 3x^2 + x - 3$$
$$x(x^2-2) = x^3 - 2x$$

$$p(x) = x^3 - 3x^2 + x - 3 - x^3 + 2x = -3x^2 + 3x - 3$$

- Grado: **2**
- Coefficiente direttore: **−3**
- Termine noto: **−3**

</details>

<details>
<summary>Esercizio 3 — Teorema di Ruffini</summary>

Verificare che $x = 2$ è radice di $p(x) = x^3 - 7x + 6$, poi trovare la scomposizione.

**Soluzione.**

$p(2) = 8 - 14 + 6 = 0$ ✓, quindi $(x-2)$ divide $p(x)$.

Schema di Ruffini:

| 1 | 0 | −7 | 6 |
|---|---|---|---|
| ↓ | 2 | 4 | −6 |
| **1** | **2** | **−3** | **0** |

Quoziente: $x^2 + 2x - 3 = (x+3)(x-1)$.

$$p(x) = (x-2)(x+3)(x-1)$$

</details>
