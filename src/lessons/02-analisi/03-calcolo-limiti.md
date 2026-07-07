---
id: analisi-03-calcolo-limiti
subject: analisi
topic_it: Limiti e continuità
topic_en: Limits and continuity
title_it: Calcolo dei limiti e forme indeterminate
title_en: Computing limits and indeterminate forms
level: blue
order: 3
source_book: "J. Stewart, Calculus; MIT OCW 18.01"
source_chapter: "Cap. 2 — Tecniche per i limiti"
---

## Forme indeterminate

Una **forma indeterminata** emerge quando la sostituzione diretta non fornisce un valore definito. Le principali sono:

$$\frac{0}{0}, \quad \frac{\infty}{\infty}, \quad 0\cdot\infty, \quad \infty - \infty, \quad 0^0, \quad 1^\infty, \quad \infty^0$$

Queste forme richiedono ulteriori elaborazioni — il risultato può essere qualsiasi numero, $\pm\infty$, o non esistere.

## Tecniche di risoluzione

### 1. Semplificazione algebrica (per $0/0$)

Si fattorizza e si cancella il fattore comune:

$$\lim_{x\to 2}\frac{x^3-8}{x-2} = \lim_{x\to 2}\frac{(x-2)(x^2+2x+4)}{x-2} = \lim_{x\to 2}(x^2+2x+4) = 12$$

### 2. Razionalizzazione (per radici)

Si moltiplica per il coniugato:

$$\lim_{x\to 0}\frac{\sqrt{x+4}-2}{x} = \lim_{x\to 0}\frac{(\sqrt{x+4}-2)(\sqrt{x+4}+2)}{x(\sqrt{x+4}+2)} = \lim_{x\to 0}\frac{x}{x(\sqrt{x+4}+2)} = \frac{1}{4}$$

### 3. Divisione per la massima potenza (per $\infty/\infty$)

$$\lim_{x\to\infty}\frac{5x^3-2x}{3x^3+x^2} = \lim_{x\to\infty}\frac{5-2/x^2}{3+1/x} = \frac{5}{3}$$

### 4. Limiti notevoli da memorizzare

$$\lim_{x\to 0}\frac{\sin x}{x} = 1 \qquad \lim_{x\to 0}\frac{1-\cos x}{x^2} = \frac{1}{2} \qquad \lim_{x\to 0}\frac{e^x-1}{x} = 1 \qquad \lim_{x\to 0}\frac{\ln(1+x)}{x} = 1$$

$$\lim_{x\to\infty}\left(1+\frac{1}{x}\right)^x = e \qquad \lim_{x\to 0}(1+x)^{1/x} = e$$

## Ordini di infinito e infinitesimo

Per $x\to+\infty$: $\ln x \ll x^\alpha \ll a^x \ll x! \ll x^x$ per ogni $\alpha > 0$, $a > 1$.

Per $x\to 0^+$ i reciproci si invertono: $e^{-1/x}$ decresce più di qualsiasi potenza di $x$.

---

## Esercizi

<details>
<summary>Esercizio 1 — Limiti notevoli</summary>

Calcolare: (a) $\displaystyle\lim_{x\to 0}\frac{\sin 3x}{5x}$ &ensp; (b) $\displaystyle\lim_{x\to 0}\frac{e^{2x}-1}{\sin x}$

**Soluzione.**

(a) $\dfrac{\sin 3x}{5x} = \dfrac{3}{5}\cdot\dfrac{\sin 3x}{3x} \to \dfrac{3}{5}\cdot 1 = \dfrac{3}{5}$.

(b) $\dfrac{e^{2x}-1}{\sin x} = \dfrac{e^{2x}-1}{2x}\cdot\dfrac{2x}{\sin x}\cdot 2 \to 1\cdot 1\cdot 2 = 2$.

</details>

<details>
<summary>Esercizio 2 — Razionalizzazione</summary>

Calcolare $\displaystyle\lim_{x\to\infty}(\sqrt{x^2+x}-x)$.

**Soluzione.**

Moltiplico per il coniugato $(\sqrt{x^2+x}+x)$:

$$\frac{(\sqrt{x^2+x}-x)(\sqrt{x^2+x}+x)}{\sqrt{x^2+x}+x} = \frac{x^2+x-x^2}{\sqrt{x^2+x}+x} = \frac{x}{\sqrt{x^2+x}+x}$$

Divido per $x$:

$$\frac{1}{\sqrt{1+1/x}+1} \xrightarrow{x\to\infty} \frac{1}{1+1} = \frac{1}{2}$$

</details>

<details>
<summary>Esercizio 3 — Limite di tipo $1^\infty$</summary>

Calcolare $\displaystyle\lim_{x\to 0}(1+\tan x)^{1/x}$.

**Soluzione.**

Per $x\to 0$, $\tan x \sim x$, quindi $(1+\tan x)^{1/x} \approx (1+x)^{1/x} \to e$.

Formalmente: $\ln(1+\tan x)^{1/x} = \dfrac{\ln(1+\tan x)}{x} = \dfrac{\ln(1+\tan x)}{\tan x}\cdot\dfrac{\tan x}{x} \to 1\cdot 1 = 1$.

Quindi il limite è $e^1 = e$.

</details>
