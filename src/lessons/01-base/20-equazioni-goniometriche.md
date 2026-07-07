---
id: base-20-equazioni-goniometriche
subject: base
topic_it: Trigonometria
topic_en: Trigonometry
title_it: Equazioni e disequazioni goniometriche
title_en: Trigonometric equations and inequalities
level: green
order: 20
source_book: "MIT OCW 18.01 (Precalcolo)"
source_chapter: "Sezione 7 — Equazioni goniometriche"
---

## Equazioni elementari

### $\sin x = k$

Soluzione solo se $|k| \leq 1$. Soluzione "principale" $x_0 = \arcsin k \in [-\pi/2, \pi/2]$.

$$x = x_0 + 2k\pi \quad \text{oppure} \quad x = \pi - x_0 + 2k\pi, \quad k \in \mathbb{Z}$$

### $\cos x = k$

Soluzione solo se $|k| \leq 1$. Soluzione "principale" $x_0 = \arccos k \in [0, \pi]$.

$$x = \pm x_0 + 2k\pi, \quad k \in \mathbb{Z}$$

### $\tan x = k$

Soluzione per qualunque $k \in \mathbb{R}$. Soluzione "principale" $x_0 = \arctan k \in (-\pi/2, \pi/2)$.

$$x = x_0 + k\pi, \quad k \in \mathbb{Z}$$

## Equazioni riconducibili alle elementari

**Esempio.** $2\sin^2 x - \sin x - 1 = 0$.

Posto $t = \sin x$: $2t^2 - t - 1 = (2t+1)(t-1) = 0$.

$t = -1/2$: $\sin x = -1/2 \implies x = -\pi/6 + 2k\pi$ o $x = \pi + \pi/6 + 2k\pi = 7\pi/6 + 2k\pi$.

$t = 1$: $\sin x = 1 \implies x = \pi/2 + 2k\pi$.

## Disequazioni goniometriche

Si usano il grafico o la circonferenza goniometrica.

**Esempio.** $\sin x > 1/2$.

$\sin x = 1/2$ in $[0, 2\pi)$ per $x = \pi/6$ e $x = 5\pi/6$.  
$\sin x > 1/2$ per $x \in (\pi/6, 5\pi/6)$ (arco superiore della circonferenza).

**Soluzione completa:** $x \in \left(\dfrac{\pi}{6} + 2k\pi,\; \dfrac{5\pi}{6} + 2k\pi\right)$, $k \in \mathbb{Z}$.

---

## Esercizi

<details>
<summary>Esercizio 1 — Equazione con cos</summary>

Risolvere $\cos 2x = \dfrac{1}{2}$ in $[0, 2\pi)$.

**Soluzione.**

$\cos 2x = 1/2 \implies 2x = \pm\pi/3 + 2k\pi$.

$2x = \pi/3$: $x = \pi/6$.
$2x = -\pi/3 + 2\pi = 5\pi/3$: $x = 5\pi/6$.
$2x = \pi/3 + 2\pi = 7\pi/3$: $x = 7\pi/6$.
$2x = -\pi/3 + 4\pi = 11\pi/3$: $x = 11\pi/6$.

$S = \left\{\dfrac{\pi}{6},\; \dfrac{5\pi}{6},\; \dfrac{7\pi}{6},\; \dfrac{11\pi}{6}\right\}$

</details>

<details>
<summary>Esercizio 2 — Equazione con tan</summary>

Risolvere $\tan x + \sqrt{3} = 0$.

**Soluzione.**

$\tan x = -\sqrt{3}$. La soluzione principale è $x_0 = \arctan(-\sqrt{3}) = -\dfrac{\pi}{3}$.

$$x = -\frac{\pi}{3} + k\pi, \quad k \in \mathbb{Z}$$

</details>

<details>
<summary>Esercizio 3 — Disequazione</summary>

Risolvere $\cos x < -\dfrac{\sqrt{2}}{2}$ in $[0, 2\pi)$.

**Soluzione.**

$\cos x = -\sqrt{2}/2$ in $[0,2\pi)$ per $x = 3\pi/4$ e $x = 5\pi/4$.

$\cos x < -\sqrt{2}/2$ negli angoli "tra" $3\pi/4$ e $5\pi/4$ (dove il coseno è ancora più negativo):

$S = \left(\dfrac{3\pi}{4},\; \dfrac{5\pi}{4}\right)$

</details>
