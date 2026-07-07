---
id: base-05-frazioni-algebriche
subject: base
topic_it: Algebra e numeri
topic_en: Algebra and numbers
title_it: Frazioni algebriche
title_en: Algebraic fractions
level: green
order: 5
source_book: "MIT OCW 18.01 (Precalcolo)"
source_chapter: "Sezione 3 — Frazioni razionali"
---

## Definizione e condizioni di esistenza

Una **frazione algebrica** è un'espressione della forma $\dfrac{A(x)}{B(x)}$ dove $A$ e $B$ sono polinomi e $B \not\equiv 0$.

La frazione è **definita** per tutti i valori di $x$ per cui $B(x) \neq 0$.

**Esempio.** $\dfrac{x+1}{x^2 - 4}$ è definita per $x \neq \pm 2$.

## Semplificazione

Si cancellano i fattori comuni tra numeratore e denominatore (dopo averli scomposti):

$$\frac{x^2 - 1}{x^2 + 2x + 1} = \frac{(x-1)(x+1)}{(x+1)^2} = \frac{x-1}{x+1}, \quad x \neq -1$$

> **Attenzione:** non si possono cancellare termini che si sommano, solo fattori che si moltiplicano.

## Operazioni

### Moltiplicazione e divisione

$$\frac{A}{B} \cdot \frac{C}{D} = \frac{AC}{BD} \qquad \frac{A}{B} \div \frac{C}{D} = \frac{A}{B} \cdot \frac{D}{C} = \frac{AD}{BC}$$

### Addizione e sottrazione

Si riduce allo stesso denominatore (minimo comune denominatore, **m.c.d.**):

$$\frac{A}{B} \pm \frac{C}{D} = \frac{AD \pm BC}{BD}$$

In pratica conviene trovare il **minimo comune multiplo** di $B$ e $D$ per semplificare i calcoli.

**Esempio.** $\dfrac{1}{x-1} + \dfrac{2}{x+1}$:

$$= \frac{x+1}{(x-1)(x+1)} + \frac{2(x-1)}{(x-1)(x+1)} = \frac{x+1+2x-2}{(x-1)(x+1)} = \frac{3x-1}{x^2-1}$$

## Equazioni con frazioni algebriche

Si moltiplicano entrambi i membri per il m.c.m. dei denominatori, poi si verifica che le soluzioni trovate non annullino alcun denominatore (**soluzioni estranee**).

**Esempio.** $\dfrac{2}{x} - \dfrac{1}{x-1} = 1$, con $x \neq 0, 1$.

Moltiplico per $x(x-1)$:

$$2(x-1) - x = x(x-1) \implies 2x-2-x = x^2 - x \implies x-2 = x^2 - x$$
$$x^2 - 2x + 2 = 0 \implies \Delta = 4 - 8 = -4 < 0 \implies \text{nessuna soluzione reale}$$

---

## Esercizi

<details>
<summary>Esercizio 1 — Semplificazione</summary>

Semplificare $\dfrac{x^3 - x}{x^2 - 2x + 1}$.

**Soluzione.**

Numeratore: $x^3 - x = x(x^2-1) = x(x-1)(x+1)$

Denominatore: $x^2 - 2x + 1 = (x-1)^2$

$$\frac{x(x-1)(x+1)}{(x-1)^2} = \frac{x(x+1)}{x-1}, \quad x \neq 1, \; x \neq 0$$

</details>

<details>
<summary>Esercizio 2 — Addizione</summary>

Calcolare $\dfrac{3}{x^2-1} - \dfrac{1}{x+1}$.

**Soluzione.**

$x^2 - 1 = (x-1)(x+1)$, quindi il m.c.m. è $(x-1)(x+1)$:

$$\frac{3}{(x-1)(x+1)} - \frac{x-1}{(x-1)(x+1)} = \frac{3-(x-1)}{(x-1)(x+1)} = \frac{4-x}{x^2-1}$$

</details>

<details>
<summary>Esercizio 3 — Equazione</summary>

Risolvere $\dfrac{x}{x-2} + \dfrac{1}{x+2} = \dfrac{8}{x^2-4}$, con $x \neq \pm 2$.

**Soluzione.**

m.c.m. = $(x-2)(x+2)$. Moltiplicando:

$$x(x+2) + (x-2) = 8$$
$$x^2 + 2x + x - 2 = 8$$
$$x^2 + 3x - 10 = 0$$
$$x = \frac{-3 \pm \sqrt{9+40}}{2} = \frac{-3 \pm 7}{2}$$

$x = 2$ o $x = -5$. Poiché $x \neq 2$, l'unica soluzione è $x = -5$.

</details>
