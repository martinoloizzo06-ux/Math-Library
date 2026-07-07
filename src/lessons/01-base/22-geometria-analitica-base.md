---
id: base-22-geometria-analitica-base
subject: base
topic_it: Geometria analitica
topic_en: Analytic geometry
title_it: Piano cartesiano e distanza tra punti
title_en: Cartesian plane and distance between points
level: green
order: 22
source_book: "MIT OCW 18.01 (Precalcolo)"
source_chapter: "Sezione 8 — Geometria analitica"
---

## Il piano cartesiano

Il **piano cartesiano** è il piano dotato di un sistema di riferimento ortogonale formato da due rette perpendicolari: l'**asse delle ascisse** ($x$) e l'**asse delle ordinate** ($y$), che si incontrano nell'**origine** $O = (0,0)$.

Ogni punto del piano corrisponde a una coppia ordinata $(x, y)$ dove:
- $x$ è l'**ascissa** (distanza con segno dall'asse $y$).
- $y$ è l'**ordinata** (distanza con segno dall'asse $x$).

I quattro **quadranti** sono determinati dal segno di $x$ e $y$:
- I: $(+,+)$, II: $(-,+)$, III: $(-,-)$, IV: $(+,-)$.

## Distanza tra due punti

La distanza tra $P_1 = (x_1, y_1)$ e $P_2 = (x_2, y_2)$ deriva dal teorema di Pitagora:

$$d(P_1, P_2) = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

**Esempio.** $d\bigl((1,-2),(4,2)\bigr) = \sqrt{9+16} = \sqrt{25} = 5$.

## Punto medio

Il **punto medio** del segmento $P_1P_2$ è:

$$M = \left(\frac{x_1 + x_2}{2},\; \frac{y_1 + y_2}{2}\right)$$

## Baricentro di un triangolo

Dato il triangolo con vertici $A$, $B$, $C$, il **baricentro** è:

$$G = \left(\frac{x_A + x_B + x_C}{3},\; \frac{y_A + y_B + y_C}{3}\right)$$

## Traslazione e simmetria

**Simmetria rispetto all'asse $x$:** $(x,y) \mapsto (x,-y)$.

**Simmetria rispetto all'asse $y$:** $(x,y) \mapsto (-x,y)$.

**Simmetria rispetto all'origine:** $(x,y) \mapsto (-x,-y)$.

**Simmetria rispetto alla bisettrice $y = x$:** $(x,y) \mapsto (y,x)$.

---

## Esercizi

<details>
<summary>Esercizio 1 — Distanza e perimetro</summary>

Trovare il perimetro del triangolo $A=(0,0)$, $B=(4,3)$, $C=(0,6)$.

**Soluzione.**

$AB = \sqrt{16+9} = 5$

$BC = \sqrt{16+9} = 5$

$CA = \sqrt{0+36} = 6$

Perimetro $= 5 + 5 + 6 = 16$.

È un triangolo **isoscele** ($AB = BC$).

</details>

<details>
<summary>Esercizio 2 — Punto medio</summary>

Il punto medio di $AB$ è $M = (3, -1)$ e $A = (1, 2)$. Trovare $B$.

**Soluzione.**

$$\frac{x_A + x_B}{2} = 3 \implies x_B = 6 - 1 = 5$$
$$\frac{y_A + y_B}{2} = -1 \implies y_B = -2 - 2 = -4$$

$B = (5, -4)$.

</details>

<details>
<summary>Esercizio 3 — Simmetria</summary>

Trovare il simmetrico del punto $P = (2, -3)$ rispetto alla retta $y = x$.

**Soluzione.**

La simmetria rispetto a $y = x$ scambia ascissa e ordinata:

$P' = (-3, 2)$.

</details>
