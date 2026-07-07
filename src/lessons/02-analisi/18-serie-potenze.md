---
id: analisi-18-serie-potenze
subject: analisi
topic_it: Successioni e serie
topic_en: Sequences and series
title_it: Serie di potenze
title_en: Power series
level: blue
order: 18
source_book: "W. Rudin, Principles of Mathematical Analysis; MIT OCW 18.01"
source_chapter: "Cap. 3 — Serie di potenze"
---

## Definizione

Una **serie di potenze** centrata in $x_0$ è:

$$\sum_{n=0}^\infty c_n(x-x_0)^n = c_0 + c_1(x-x_0) + c_2(x-x_0)^2 + \cdots$$

Per semplicità consideriamo $x_0=0$: $\displaystyle\sum_{n=0}^\infty c_n x^n$.

## Raggio di convergenza

Esiste $R\in[0,+\infty]$ tale che la serie:
- **converge assolutamente** per $|x|<R$,
- **diverge** per $|x|>R$,
- può convergere o divergere per $|x|=R$ (da verificare caso per caso).

**Formula di Hadamard:**

$$\frac{1}{R} = \limsup_{n\to\infty}\sqrt[n]{|c_n|}$$

**Alternativa (se il limite esiste):**

$$R = \lim_{n\to\infty}\left|\frac{c_n}{c_{n+1}}\right|$$

## Operazioni sulle serie di potenze

All'interno dell'intervallo di convergenza $(-R,R)$:

**Derivazione termine a termine:**

$$\frac{d}{dx}\sum_{n=0}^\infty c_n x^n = \sum_{n=1}^\infty n\,c_n x^{n-1}$$

**Integrazione termine a termine:**

$$\int_0^x \sum_{n=0}^\infty c_n t^n\,dt = \sum_{n=0}^\infty \frac{c_n}{n+1}x^{n+1}$$

Derivazione e integrazione conservano il raggio di convergenza.

## Serie di potenze notevoli

$$\frac{1}{1-x} = \sum_{n=0}^\infty x^n \quad |x|<1$$

$$e^x = \sum_{n=0}^\infty \frac{x^n}{n!} \quad \forall x$$

$$\sin x = \sum_{n=0}^\infty \frac{(-1)^n x^{2n+1}}{(2n+1)!} \quad \forall x$$

$$\cos x = \sum_{n=0}^\infty \frac{(-1)^n x^{2n}}{(2n)!} \quad \forall x$$

$$\ln(1+x) = \sum_{n=1}^\infty \frac{(-1)^{n+1}}{n}x^n \quad -1<x\leq 1$$

---

## Esercizi

<details>
<summary>Esercizio 1 — Raggio di convergenza</summary>

Trovare il raggio di convergenza di $\displaystyle\sum_{n=1}^\infty \frac{x^n}{n\cdot 2^n}$.

**Soluzione.**

$c_n = \dfrac{1}{n\cdot 2^n}$. Formula del rapporto:

$$R = \lim_{n\to\infty}\left|\frac{c_n}{c_{n+1}}\right| = \lim_{n\to\infty}\frac{(n+1)\cdot 2^{n+1}}{n\cdot 2^n} = \lim_{n\to\infty}\frac{(n+1)\cdot 2}{n} = 2$$

Agli estremi: $x=2$: $\sum 1/n$ diverge. $x=-2$: $\sum(-1)^n/n$ converge (Leibniz).

Intervallo di convergenza: $[-2,2)$.

</details>

<details>
<summary>Esercizio 2 — Derivazione</summary>

Ricavare la serie di $\dfrac{1}{(1-x)^2}$ da $\dfrac{1}{1-x}=\displaystyle\sum_{n=0}^\infty x^n$.

**Soluzione.**

Derivando termine a termine:

$$\frac{d}{dx}\sum_{n=0}^\infty x^n = \sum_{n=1}^\infty n\,x^{n-1} = \frac{1}{(1-x)^2}$$

Quindi $\dfrac{1}{(1-x)^2} = \displaystyle\sum_{n=1}^\infty n\,x^{n-1} = \sum_{n=0}^\infty (n+1)x^n$ per $|x|<1$.

</details>

<details>
<summary>Esercizio 3 — Integrazione</summary>

Ricavare la serie di $\arctan x$ da $\dfrac{1}{1+x^2}$.

**Soluzione.**

$\dfrac{1}{1+x^2} = \dfrac{1}{1-(-x^2)} = \displaystyle\sum_{n=0}^\infty(-x^2)^n = \sum_{n=0}^\infty(-1)^n x^{2n}$ per $|x|<1$.

Integrando:

$$\arctan x = \int_0^x\frac{dt}{1+t^2} = \sum_{n=0}^\infty\frac{(-1)^n x^{2n+1}}{2n+1} = x - \frac{x^3}{3}+\frac{x^5}{5}-\cdots$$

Converge anche per $|x|=1$ (Leibniz): in $x=1$ dà $\pi/4 = 1 - 1/3 + 1/5 - \cdots$ (formula di Leibniz-Gregory).

</details>
