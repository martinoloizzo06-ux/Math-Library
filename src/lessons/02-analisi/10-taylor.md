---
id: analisi-10-taylor
subject: analisi
topic_it: Calcolo differenziale (una variabile)
topic_en: Differential calculus (one variable)
title_it: Polinomio di Taylor e sviluppi di MacLaurin
title_en: Taylor polynomial and MacLaurin expansions
level: blue
order: 10
source_book: "J. Stewart, Calculus; MIT OCW 18.01"
source_chapter: "Cap. 11 — Serie di Taylor"
---

## Polinomio di Taylor

L'idea: approssimare $f(x)$ con un polinomio $T_n(x)$ che "incolla" a $f$ nel punto $a$ fino all'ordine $n$:

$$T_n(x) = \sum_{k=0}^{n}\frac{f^{(k)}(a)}{k!}(x-a)^k = f(a)+f'(a)(x-a)+\frac{f''(a)}{2!}(x-a)^2+\cdots$$

Il polinomio di Taylor di ordine 1 è la tangente; di ordine 2 è la parabola osculatrice.

## Resto di Lagrange

L'errore dell'approssimazione è:

$$f(x) = T_n(x) + R_n(x), \qquad R_n(x) = \frac{f^{(n+1)}(\xi)}{(n+1)!}(x-a)^{n+1}$$

per un opportuno $\xi$ tra $a$ e $x$. Questo fornisce una stima rigorosa dell'errore.

## Sviluppi di MacLaurin (centro $a=0$)

| Funzione | Sviluppo | Raggio di convergenza |
|---|---|---|
| $e^x$ | $\displaystyle\sum_{n=0}^\infty \frac{x^n}{n!} = 1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\cdots$ | $\infty$ |
| $\sin x$ | $\displaystyle\sum_{n=0}^\infty \frac{(-1)^n x^{2n+1}}{(2n+1)!} = x-\frac{x^3}{6}+\frac{x^5}{120}-\cdots$ | $\infty$ |
| $\cos x$ | $\displaystyle\sum_{n=0}^\infty \frac{(-1)^n x^{2n}}{(2n)!} = 1-\frac{x^2}{2}+\frac{x^4}{24}-\cdots$ | $\infty$ |
| $\ln(1+x)$ | $\displaystyle\sum_{n=1}^\infty \frac{(-1)^{n+1}x^n}{n} = x-\frac{x^2}{2}+\frac{x^3}{3}-\cdots$ | $(-1,1]$ |
| $(1+x)^\alpha$ | $\displaystyle\sum_{n=0}^\infty\binom{\alpha}{n}x^n = 1+\alpha x+\frac{\alpha(\alpha-1)}{2}x^2+\cdots$ | $(-1,1)$ |

## Identità di Eulero

Usando lo sviluppo di $e^x$ con $x = i\theta$ (numeri complessi):

$$e^{i\theta} = \cos\theta + i\sin\theta$$

Per $\theta = \pi$: $e^{i\pi}+1=0$ (identità di Eulero, spesso considerata "la formula più bella della matematica").

---

## Esercizi

<details>
<summary>Esercizio 1 — Calcolo di Taylor</summary>

Scrivere il polinomio di Taylor di ordine 4 di $f(x)=e^{-x^2}$ in $a=0$.

**Soluzione.**

Sostituire $-x^2$ nello sviluppo di $e^u$:

$$e^{-x^2} = 1 + (-x^2) + \frac{(-x^2)^2}{2!}+\frac{(-x^2)^3}{3!}+\cdots = 1 - x^2 + \frac{x^4}{2} - \frac{x^6}{6}+\cdots$$

$T_4(x) = 1 - x^2 + \dfrac{x^4}{2}$.

</details>

<details>
<summary>Esercizio 2 — Limite con Taylor</summary>

Calcolare $\displaystyle\lim_{x\to 0}\frac{\sin x - x + x^3/6}{x^5}$.

**Soluzione.**

$\sin x = x - \dfrac{x^3}{6} + \dfrac{x^5}{120} - \cdots$

$\sin x - x + \dfrac{x^3}{6} = \dfrac{x^5}{120} + O(x^7)$

$$\lim_{x\to 0}\frac{x^5/120}{x^5} = \frac{1}{120}$$

</details>

<details>
<summary>Esercizio 3 — Approssimazione</summary>

Usare il polinomio di Taylor di ordine 2 di $\sqrt{x}$ centrato in $a=4$ per approssimare $\sqrt{4{,}1}$.

**Soluzione.**

$f(x)=\sqrt{x}$, $f'(x)=\frac{1}{2\sqrt{x}}$, $f''(x)=-\frac{1}{4x^{3/2}}$.

$T_2(x)=2+\frac{1}{4}(x-4)-\frac{1}{64}(x-4)^2$.

Per $x=4{,}1$: $h=0{,}1$.

$T_2(4{,}1) = 2 + 0{,}025 - \frac{0{,}01}{64} = 2{,}025 - 0{,}000156 \approx 2{,}02484$.

Valore esatto: $\sqrt{4{,}1}\approx 2{,}024846$. Ottima approssimazione!

</details>
