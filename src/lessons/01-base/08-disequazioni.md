---
id: base-08-disequazioni
subject: base
topic_it: Algebra e numeri
topic_en: Algebra and numbers
title_it: Disequazioni e sistemi di disequazioni
title_en: Inequalities and systems of inequalities
level: green
order: 8
source_book: "MIT OCW 18.01 (Precalcolo)"
source_chapter: "Sezione 4 — Disequazioni"
---

## Disequazioni di primo grado

Una **disequazione** è una disuguaglianza che contiene un'incognita. I principi sono analoghi a quelli delle equazioni, con un'eccezione fondamentale:

> **Moltiplicare o dividere per un numero negativo inverte il verso della disuguaglianza.**

**Esempio.** $-2x + 3 > 7$:

$$-2x > 4 \implies x < -2$$

Soluzione: $x \in (-\infty, -2)$.

## Disequazioni di secondo grado

Per risolvere $ax^2 + bx + c > 0$ (o $< 0$), si studia il **segno del trinomio**:

1. Trovare le radici $x_1 \leq x_2$ (se esistono) con la formula quadratica.
2. Il trinomio ha il segno di $a$ **fuori** dall'intervallo $(x_1, x_2)$ e segno opposto a $a$ **dentro**.

**Schema del segno:**

$$\underbrace{+\; +\; +}_{a>0}\quad x_1\quad \underbrace{-\;-\;-}_{}\quad x_2\quad \underbrace{+\;+\;+}_{a>0}$$

**Esempio.** $x^2 - 3x + 2 < 0$.

Radici: $x_1 = 1$, $x_2 = 2$. Poiché $a = 1 > 0$, il trinomio è negativo tra le radici:

$$S = (1, 2)$$

**Caso $\Delta \leq 0$:**
- $\Delta < 0$, $a > 0$: il trinomio è sempre positivo → $ax^2+bx+c>0$ per tutti gli $x$.
- $\Delta = 0$, $a > 0$: il trinomio è $\geq 0$, zero solo nella radice doppia.

## Sistemi di disequazioni

Si risolve ogni disequazione separatamente, poi si prende l'**intersezione** delle soluzioni (per "e") o l'**unione** (per "o").

**Esempio.**
$$\begin{cases} 2x - 1 > 3 \\ x^2 - 4 \leq 0 \end{cases}$$

- Primo: $x > 2$.
- Secondo: $-2 \leq x \leq 2$.
- Intersezione: $\{x > 2\} \cap \{-2 \leq x \leq 2\} = \emptyset$.

---

## Esercizi

<details>
<summary>Esercizio 1 — Disequazione lineare</summary>

Risolvere $\dfrac{x-1}{2} - \dfrac{x+3}{3} \geq 1$.

**Soluzione.**

m.c.m. = 6:

$$3(x-1) - 2(x+3) \geq 6 \implies 3x-3-2x-6 \geq 6 \implies x - 9 \geq 6 \implies x \geq 15$$

$S = [15, +\infty)$

</details>

<details>
<summary>Esercizio 2 — Disequazione di secondo grado</summary>

Risolvere $-x^2 + 4x - 3 > 0$.

**Soluzione.**

Equivalente a $x^2 - 4x + 3 < 0$. Radici: $x = 1$ e $x = 3$. Siccome $a = 1 > 0$, il trinomio è negativo tra le radici.

$S = (1, 3)$

</details>

<details>
<summary>Esercizio 3 — Sistema</summary>

Risolvere $\begin{cases} x^2 - x - 6 < 0 \\ 2x + 1 > 0 \end{cases}$

**Soluzione.**

Prima disequazione: radici $x = 3$ e $x = -2$, segno negativo dentro → $(-2, 3)$.

Seconda: $x > -\dfrac{1}{2}$, cioè $\left(-\dfrac{1}{2}, +\infty\right)$.

Intersezione: $\left(-\dfrac{1}{2}, 3\right)$

</details>
