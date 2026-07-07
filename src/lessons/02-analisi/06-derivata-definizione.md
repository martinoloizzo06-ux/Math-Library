---
id: analisi-06-derivata-definizione
subject: analisi
topic_it: Calcolo differenziale (una variabile)
topic_en: Differential calculus (one variable)
title_it: Derivata — definizione e significato geometrico
title_en: Derivative — definition and geometric meaning
level: blue
order: 6
source_book: "J. Stewart, Calculus; MIT OCW 18.01"
source_chapter: "Cap. 3 — La derivata"
---

## La derivata come limite

La **derivata** di $f$ in $x = a$ è definita come:

$$f'(a) = \lim_{h\to 0}\frac{f(a+h)-f(a)}{h}$$

Il rapporto $\dfrac{f(a+h)-f(a)}{h}$ si chiama **rapporto incrementale** e rappresenta la pendenza della retta secante tra $(a,f(a))$ e $(a+h,f(a+h))$. Al tendere di $h\to 0$, la secante diventa la **retta tangente** in $a$.

Se il limite esiste, $f$ si dice **derivabile** in $a$.

## Notazioni

$$f'(x) = \frac{df}{dx} = \frac{d}{dx}f(x) = \dot{f}(x) \quad \text{(Leibniz, Newton)}$$

La valutazione in un punto: $f'(a) = \left.\frac{df}{dx}\right|_{x=a}$.

## Significato geometrico

$f'(a)$ è la **pendenza della retta tangente** al grafico di $f$ nel punto $(a, f(a))$.

Equazione della tangente: $y - f(a) = f'(a)(x-a)$.

## Derivabilità implica continuità

Se $f$ è derivabile in $a$, allora è continua in $a$. (Il viceversa è falso: $f(x)=|x|$ è continua ma non derivabile in $x=0$.)

## Derivate fondamentali

| $f(x)$ | $f'(x)$ |
|---|---|
| $c$ (costante) | $0$ |
| $x^n$ ($n\in\mathbb{R}$) | $nx^{n-1}$ |
| $e^x$ | $e^x$ |
| $a^x$ | $a^x \ln a$ |
| $\ln x$ | $1/x$ |
| $\log_a x$ | $1/(x\ln a)$ |
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
| $\tan x$ | $1/\cos^2 x = \sec^2 x$ |

---

## Esercizi

<details>
<summary>Esercizio 1 — Dal limite</summary>

Calcolare $f'(2)$ per $f(x)=x^2-3x$ usando la definizione.

**Soluzione.**

$$f'(2) = \lim_{h\to 0}\frac{(2+h)^2-3(2+h)-(4-6)}{h} = \lim_{h\to 0}\frac{4+4h+h^2-6-3h+2}{h}$$
$$= \lim_{h\to 0}\frac{h^2+h}{h} = \lim_{h\to 0}(h+1) = 1$$

</details>

<details>
<summary>Esercizio 2 — Retta tangente</summary>

Trovare la retta tangente a $f(x)=\sqrt{x}$ nel punto $(4,2)$.

**Soluzione.**

$f'(x) = \dfrac{1}{2\sqrt{x}}$, quindi $f'(4) = \dfrac{1}{4}$.

Tangente: $y - 2 = \dfrac{1}{4}(x-4) \implies y = \dfrac{x}{4}+1$.

</details>

<details>
<summary>Esercizio 3 — Non derivabilità</summary>

Mostrare che $f(x)=|x|$ non è derivabile in $x=0$.

**Soluzione.**

Limite destro: $\displaystyle\lim_{h\to 0^+}\frac{|h|-0}{h} = \lim_{h\to 0^+}\frac{h}{h} = 1$.

Limite sinistro: $\displaystyle\lim_{h\to 0^-}\frac{|h|}{h} = \lim_{h\to 0^-}\frac{-h}{h} = -1$.

I limiti laterali del rapporto incrementale sono diversi, quindi $f'(0)$ non esiste. $\square$

</details>
