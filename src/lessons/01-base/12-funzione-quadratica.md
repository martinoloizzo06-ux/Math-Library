---
id: base-12-funzione-quadratica
subject: base
topic_it: Funzioni elementari
topic_en: Elementary functions
title_it: Funzione quadratica e parabola
title_en: Quadratic function and parabola
level: green
order: 12
source_book: "MIT OCW 18.01 (Precalcolo)"
source_chapter: "Sezione 5 — Parabola"
---

## La parabola come grafico

La **funzione quadratica** $f(x) = ax^2 + bx + c$ con $a \neq 0$ ha come grafico una **parabola** con asse verticale.

- Se $a > 0$: aperta verso l'alto (concava).
- Se $a < 0$: aperta verso il basso (convessa).

## Forma canonica e vertice

Completando il quadrato si ottiene la **forma canonica**:

$$f(x) = a\left(x - \frac{b}{2a}\right)^2 + \left(c - \frac{b^2}{4a}\right)$$

Il **vertice** della parabola è:

$$V = \left(-\frac{b}{2a},\; c - \frac{b^2}{4a}\right) = \left(-\frac{b}{2a},\; f\!\left(-\frac{b}{2a}\right)\right)$$

L'**asse di simmetria** è la retta verticale $x = -\dfrac{b}{2a}$.

## Zeri e intersezioni

Le **radici** (zeri) si trovano con la formula quadratica. Le intersezioni con gli assi:

- **Con l'asse $x$:** risolvere $f(x) = 0$ → esistono se $\Delta \geq 0$.
- **Con l'asse $y$:** il punto $(0, c)$.

**Legame con il discriminante:**
- $\Delta > 0$: la parabola interseca l'asse $x$ in due punti.
- $\Delta = 0$: tangente all'asse $x$ nel vertice.
- $\Delta < 0$: non interseca l'asse $x$.

**Esempio.** $f(x) = -2x^2 + 4x + 1$.

$$V_x = -\frac{4}{2(-2)} = 1, \quad V_y = f(1) = -2 + 4 + 1 = 3$$

Vertice: $(1, 3)$. Parabola aperta verso il basso, massimo valore $3$.

## Ottimizzazione

Il vertice fornisce il **minimo** (se $a>0$) o il **massimo** (se $a<0$) assoluto della funzione su $\mathbb{R}$.

---

## Esercizi

<details>
<summary>Esercizio 1 — Vertice e forma canonica</summary>

Scrivere $f(x) = 3x^2 - 6x + 7$ in forma canonica e trovare il vertice.

**Soluzione.**

$$f(x) = 3(x^2 - 2x) + 7 = 3[(x-1)^2 - 1] + 7 = 3(x-1)^2 + 4$$

Vertice: $V = (1, 4)$, minimo valore = 4.

</details>

<details>
<summary>Esercizio 2 — Intersezioni</summary>

Trovare le intersezioni di $f(x) = x^2 - 3x + 2$ con gli assi.

**Soluzione.**

Con l'asse $y$: $f(0) = 2$ → punto $(0, 2)$.

Con l'asse $x$: $x^2 - 3x + 2 = 0 \implies (x-1)(x-2) = 0 \implies x = 1$ o $x = 2$.

Punti: $(1, 0)$ e $(2, 0)$.

</details>

<details>
<summary>Esercizio 3 — Problema di ottimizzazione</summary>

Un contadino ha 100 m di recinzione e vuole delimitare un'area rettangolare contro un muro (lato lungo il muro non recintato). Trovare le dimensioni che massimizzano l'area.

**Soluzione.**

Siano $x$ la larghezza e $y$ la lunghezza (parallela al muro). Vincolo: $2x + y = 100 \implies y = 100 - 2x$.

$$A(x) = x \cdot y = x(100 - 2x) = -2x^2 + 100x$$

Parabola con $a=-2<0$, massimo in $x = -\dfrac{100}{2(-2)} = 25$.

Dimensioni ottimali: $x = 25$ m, $y = 50$ m. Area massima: $1250$ m².

</details>
