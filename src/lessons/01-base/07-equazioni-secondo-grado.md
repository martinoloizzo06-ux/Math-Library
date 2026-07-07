---
id: base-07-equazioni-secondo-grado
subject: base
topic_it: Algebra e numeri
topic_en: Algebra and numbers
title_it: Equazioni di secondo grado
title_en: Quadratic equations
level: green
order: 7
source_book: "MIT OCW 18.01 (Precalcolo)"
source_chapter: "Sezione 4 — Equazioni quadratiche"
---

## Forma normale e formula risolutiva

Un'equazione di **secondo grado** in forma normale è:

$$ax^2 + bx + c = 0, \quad a \neq 0$$

Le soluzioni si trovano con la **formula quadratica**:

$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

## Il discriminante

La quantità $\Delta = b^2 - 4ac$ determina il numero e la natura delle soluzioni:

| $\Delta$ | Soluzioni |
|---|---|
| $\Delta > 0$ | Due soluzioni reali distinte: $x_1 = \dfrac{-b+\sqrt{\Delta}}{2a}$, $x_2 = \dfrac{-b-\sqrt{\Delta}}{2a}$ |
| $\Delta = 0$ | Una soluzione reale doppia: $x = -\dfrac{b}{2a}$ |
| $\Delta < 0$ | Nessuna soluzione reale |

**Esempio.** $x^2 - 5x + 6 = 0$: $\Delta = 25 - 24 = 1 > 0$.

$$x = \frac{5 \pm 1}{2} \implies x_1 = 3, \quad x_2 = 2$$

## Formule di Vieta

Senza calcolare le radici, si sa che:

$$x_1 + x_2 = -\frac{b}{a} \qquad x_1 \cdot x_2 = \frac{c}{a}$$

Utili per verificare le soluzioni o costruire equazioni con radici assegnate.

**Esempio.** Trovare un'equazione con radici $x_1 = 3$ e $x_2 = -1$.

$$x^2 - (x_1+x_2)x + x_1 x_2 = 0 \implies x^2 - 2x - 3 = 0$$

## Equazioni particolari

**Trinomia pura** ($b = 0$): $ax^2 + c = 0 \implies x^2 = -c/a$.  
Soluzioni: $x = \pm\sqrt{-c/a}$ se $-c/a \geq 0$.

**Monomia** ($b = c = 0$): $ax^2 = 0 \implies x = 0$ (soluzione doppia).

## Equazioni riconducibili al secondo grado

Con la sostituzione $t = x^2$ si risolvono le **equazioni biquadratiche**:

$$x^4 - 5x^2 + 4 = 0 \xrightarrow{t=x^2} t^2 - 5t + 4 = 0 \implies t = 4 \text{ o } t = 1$$

Da $t = x^2$: $x = \pm 2$ o $x = \pm 1$.

---

## Esercizi

<details>
<summary>Esercizio 1 — Formula quadratica</summary>

Risolvere $2x^2 - 3x - 2 = 0$.

**Soluzione.**

$\Delta = 9 + 16 = 25$

$$x = \frac{3 \pm 5}{4} \implies x_1 = 2, \quad x_2 = -\frac{1}{2}$$

Verifica con Vieta: $x_1 + x_2 = 3/2 = b/a$ (con segno) ✓, $x_1 x_2 = -1 = c/a$ ✓.

</details>

<details>
<summary>Esercizio 2 — Equazione con parametro</summary>

Per quale valore di $k$ l'equazione $x^2 - 2kx + k + 2 = 0$ ha soluzioni reali uguali?

**Soluzione.**

$\Delta = 0$: $(2k)^2 - 4(k+2) = 0 \implies 4k^2 - 4k - 8 = 0 \implies k^2 - k - 2 = 0$

$(k-2)(k+1) = 0 \implies k = 2$ o $k = -1$.

Per $k=2$: $x^2 - 4x + 4 = 0 \implies x = 2$ (doppia).  
Per $k=-1$: $x^2 + 2x + 1 = 0 \implies x = -1$ (doppia).

</details>

<details>
<summary>Esercizio 3 — Problema</summary>

Un rettangolo ha perimetro 28 cm e area 48 cm². Trovare le dimensioni.

**Soluzione.**

Siano $l$ e $w$ le dimensioni: $2(l+w) = 28 \implies l+w = 14$.

Per Vieta, $l$ e $w$ sono le radici di $t^2 - 14t + 48 = 0$.

$\Delta = 196 - 192 = 4 \implies t = \frac{14 \pm 2}{2}$, cioè $t = 8$ o $t = 6$.

Il rettangolo misura **8 cm × 6 cm**.

</details>
