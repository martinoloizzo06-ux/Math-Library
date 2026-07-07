---
id: analisi-07-regole-derivazione
subject: analisi
topic_it: Calcolo differenziale (una variabile)
topic_en: Differential calculus (one variable)
title_it: Regole di derivazione
title_en: Rules of differentiation
level: blue
order: 7
source_book: "J. Stewart, Calculus; MIT OCW 18.01"
source_chapter: "Cap. 3 — Regole di derivazione"
---

## Regole algebriche

Per $f$ e $g$ derivabili e $c$ costante:

| Regola | Formula |
|---|---|
| Linearità | $(cf)' = cf'$ &ensp; $(f\pm g)' = f'\pm g'$ |
| Prodotto | $(fg)' = f'g + fg'$ |
| Quoziente | $\left(\dfrac{f}{g}\right)' = \dfrac{f'g - fg'}{g^2}$ &ensp; ($g\neq 0$) |

**Dimostrazione della regola del prodotto:**

$$\lim_{h\to 0}\frac{f(x+h)g(x+h)-f(x)g(x)}{h}$$

Aggiungo e sottraggo $f(x+h)g(x)$:

$$= \lim_{h\to 0}\left[f(x+h)\frac{g(x+h)-g(x)}{h} + g(x)\frac{f(x+h)-f(x)}{h}\right] = f(x)g'(x)+g(x)f'(x)$$

## Regola della catena (chain rule)

Se $h(x)=f(g(x))$, allora:

$$h'(x) = f'(g(x))\cdot g'(x) \qquad \frac{d}{dx}f(g(x)) = f'(g(x))\cdot g'(x)$$

Notazione di Leibniz: $\dfrac{dy}{dx} = \dfrac{dy}{du}\cdot\dfrac{du}{dx}$.

**Esempi:**

$$\frac{d}{dx}\sin(x^2) = \cos(x^2)\cdot 2x$$

$$\frac{d}{dx}e^{3x-1} = e^{3x-1}\cdot 3$$

$$\frac{d}{dx}\ln(\cos x) = \frac{-\sin x}{\cos x} = -\tan x$$

## Derivata della funzione inversa

Se $f$ è invertibile e derivabile con $f'(x)\neq 0$:

$$(f^{-1})'(y) = \frac{1}{f'(f^{-1}(y))}$$

**Esempio.** $(\arcsin x)' = \dfrac{1}{\cos(\arcsin x)} = \dfrac{1}{\sqrt{1-x^2}}$.

Derivate inverse principali:

$$(\arctan x)' = \frac{1}{1+x^2} \qquad (\arcsin x)' = \frac{1}{\sqrt{1-x^2}} \qquad (\arccos x)' = -\frac{1}{\sqrt{1-x^2}}$$

---

## Esercizi

<details>
<summary>Esercizio 1 — Prodotto e quoziente</summary>

Derivare: (a) $f(x) = x^2 e^x$ &ensp; (b) $g(x) = \dfrac{\sin x}{x^2+1}$

**Soluzione.**

(a) $f'(x) = 2x e^x + x^2 e^x = xe^x(2+x)$.

(b) $g'(x) = \dfrac{\cos x(x^2+1) - \sin x\cdot 2x}{(x^2+1)^2} = \dfrac{(x^2+1)\cos x - 2x\sin x}{(x^2+1)^2}$.

</details>

<details>
<summary>Esercizio 2 — Catena</summary>

Derivare: (a) $h(x)=\ln(\sqrt{1+x^2})$ &ensp; (b) $k(x)=(3x^2-1)^5$

**Soluzione.**

(a) $h(x)=\frac{1}{2}\ln(1+x^2)$, quindi $h'(x)=\dfrac{1}{2}\cdot\dfrac{2x}{1+x^2}=\dfrac{x}{1+x^2}$.

(b) $k'(x) = 5(3x^2-1)^4\cdot 6x = 30x(3x^2-1)^4$.

</details>

<details>
<summary>Esercizio 3 — Derivazione implicita</summary>

Trovare $dy/dx$ per la curva implicita $x^2+y^2=25$.

**Soluzione.**

Derivo entrambi i membri rispetto a $x$:

$$2x + 2y\frac{dy}{dx} = 0 \implies \frac{dy}{dx} = -\frac{x}{y}$$

In $(3,4)$: $dy/dx = -3/4$ (pendenza della tangente alla circonferenza).

</details>
