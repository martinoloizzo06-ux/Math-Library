---
id: base-11-funzione-lineare
subject: base
topic_it: Funzioni elementari
topic_en: Elementary functions
title_it: Funzione lineare e retta
title_en: Linear function and line
level: green
order: 11
source_book: "MIT OCW 18.01 (Precalcolo)"
source_chapter: "Sezione 5 — Rette"
---

## Funzione lineare

La **funzione lineare** (o affine) ha la forma:

$$f(x) = mx + q$$

dove:
- $m$ è la **pendenza** (o coefficiente angolare): indica di quanto cresce $f$ per ogni unità di $x$.
- $q$ è l'**intercetta** (o termine noto): il valore di $f$ in $x = 0$.

La pendenza si può calcolare tra due qualsiasi punti $(x_1, y_1)$ e $(x_2, y_2)$ del grafico:

$$m = \frac{y_2 - y_1}{x_2 - x_1} = \frac{\Delta y}{\Delta x}$$

## Equazione della retta

La retta che passa per $(x_0, y_0)$ con pendenza $m$:

$$y - y_0 = m(x - x_0) \quad \text{(equazione punto-pendenza)}$$

La retta passante per due punti $(x_1, y_1)$ e $(x_2, y_2)$ con $x_1 \neq x_2$:

$$\frac{y - y_1}{x - x_1} = \frac{y_2 - y_1}{x_2 - x_1}$$

**Casi particolari:**
- $m = 0$: retta orizzontale $y = q$.
- Retta verticale: $x = a$ (non è una funzione).

## Rette parallele e perpendicolari

- **Parallele:** stessa pendenza $m_1 = m_2$ (e $q_1 \neq q_2$).
- **Perpendicolari:** $m_1 \cdot m_2 = -1$, ovvero $m_2 = -\dfrac{1}{m_1}$.

## Distanza punto-retta

La distanza dal punto $P = (x_0, y_0)$ alla retta $ax + by + c = 0$ è:

$$d = \frac{|ax_0 + by_0 + c|}{\sqrt{a^2 + b^2}}$$

---

## Esercizi

<details>
<summary>Esercizio 1 — Equazione della retta</summary>

Trovare la retta passante per $A = (2, -1)$ e $B = (-4, 5)$.

**Soluzione.**

$$m = \frac{5-(-1)}{-4-2} = \frac{6}{-6} = -1$$

Equazione punto-pendenza con $A$: $y - (-1) = -1(x - 2) \implies y = -x + 1$.

</details>

<details>
<summary>Esercizio 2 — Rette parallele e perpendicolari</summary>

Trovare la retta parallela e la retta perpendicolare a $y = 3x - 2$ passante per $(1, 4)$.

**Soluzione.**

**Parallela:** stessa pendenza $m=3$.  
$y - 4 = 3(x-1) \implies y = 3x + 1$

**Perpendicolare:** pendenza $m = -1/3$.  
$y - 4 = -\tfrac{1}{3}(x-1) \implies y = -\tfrac{1}{3}x + \tfrac{13}{3}$

</details>

<details>
<summary>Esercizio 3 — Distanza</summary>

Trovare la distanza dal punto $P = (3, 1)$ alla retta $4x - 3y + 2 = 0$.

**Soluzione.**

$$d = \frac{|4(3) - 3(1) + 2|}{\sqrt{16+9}} = \frac{|12 - 3 + 2|}{5} = \frac{11}{5} = 2{,}2$$

</details>
