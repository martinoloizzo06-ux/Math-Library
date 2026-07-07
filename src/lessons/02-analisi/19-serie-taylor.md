---
id: analisi-19-serie-taylor
subject: analisi
topic_it: Successioni e serie
topic_en: Sequences and series
title_it: Serie di Taylor e McLaurin
title_en: Taylor and Maclaurin series
level: blue
order: 19
source_book: "J. Stewart, Calculus; MIT OCW 18.01"
source_chapter: "Cap. 11 — Serie di Taylor"
---

## Polinomio di Taylor

Se $f$ è $n$ volte derivabile in $x_0$, il **polinomio di Taylor di ordine $n$** centrato in $x_0$ è:

$$T_n(x) = \sum_{k=0}^n \frac{f^{(k)}(x_0)}{k!}(x-x_0)^k$$

$$= f(x_0) + f'(x_0)(x-x_0) + \frac{f''(x_0)}{2!}(x-x_0)^2 + \cdots$$

## Serie di Taylor

Se $f$ è $C^\infty$ (infinitamente derivabile) in $x_0$:

$$f(x) = \sum_{n=0}^\infty \frac{f^{(n)}(x_0)}{n!}(x-x_0)^n$$

quando la serie converge a $f(x)$ (non sempre garantito!).

**Serie di McLaurin** = serie di Taylor con $x_0=0$.

## Resto di Lagrange

$$f(x) = T_n(x) + R_n(x), \qquad R_n(x) = \frac{f^{(n+1)}(c)}{(n+1)!}(x-x_0)^{n+1}$$

per qualche $c$ tra $x_0$ e $x$. Utile per stimare l'errore di approssimazione.

## Sviluppi fondamentali (in $x_0=0$)

$$e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots = \sum_{n=0}^\infty\frac{x^n}{n!}$$

$$\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots = \sum_{n=0}^\infty\frac{(-1)^n x^{2n+1}}{(2n+1)!}$$

$$\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots = \sum_{n=0}^\infty\frac{(-1)^n x^{2n}}{(2n)!}$$

$$\ln(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \cdots = \sum_{n=1}^\infty\frac{(-1)^{n+1}}{n}x^n \quad (-1<x\leq 1)$$

$$(1+x)^\alpha = 1 + \alpha x + \frac{\alpha(\alpha-1)}{2!}x^2 + \cdots \quad |x|<1 \text{ (serie binomiale)}$$

## Formula di Eulero

Dalle serie di $e^x$, $\sin x$, $\cos x$ (con $x$ complesso):

$$e^{i\theta} = \cos\theta + i\sin\theta$$

In particolare: $e^{i\pi} + 1 = 0$ (identità di Eulero).

---

## Esercizi

<details>
<summary>Esercizio 1 — Sviluppo di McLaurin</summary>

Trovare il polinomio di McLaurin di ordine 4 di $f(x)=e^{-x^2}$.

**Soluzione.**

Da $e^t = 1+t+t^2/2!+\cdots$, sostituisco $t=-x^2$:

$$e^{-x^2} = 1 + (-x^2) + \frac{(-x^2)^2}{2!} + \frac{(-x^2)^3}{3!} + \cdots = 1 - x^2 + \frac{x^4}{2} - \frac{x^6}{6} + \cdots$$

Troncando all'ordine 4: $T_4(x) = 1 - x^2 + \dfrac{x^4}{2}$.

</details>

<details>
<summary>Esercizio 2 — Calcolo di limite con Taylor</summary>

Calcolare $\displaystyle\lim_{x\to 0}\frac{e^x - 1 - x}{x^2}$.

**Soluzione.**

$e^x = 1 + x + \dfrac{x^2}{2} + O(x^3)$.

$$\frac{e^x-1-x}{x^2} = \frac{x^2/2 + O(x^3)}{x^2} = \frac{1}{2} + O(x) \to \frac{1}{2}$$

</details>

<details>
<summary>Esercizio 3 — Stima dell'errore</summary>

Quanto vale l'errore nell'approssimare $\sin(0.1)$ con $x - x^3/6$?

**Soluzione.**

Il resto di Lagrange di ordine 3 è: $R_3(x) = \dfrac{\sin^{(4)}(c)}{4!}x^4 = \dfrac{\sin c}{24}x^4$.

Per $|c|\leq 0.1$: $|\sin c|\leq 1$, quindi:

$$|R_3(0.1)| \leq \frac{(0.1)^4}{24} = \frac{10^{-4}}{24} \approx 4.2\times 10^{-6}$$

L'errore è inferiore a $5\times 10^{-6}$.

</details>
