---
id: probabilita-14-dist-continue
subject: probabilita
topic_it: Variabili aleatorie
topic_en: Random variables
title_it: Distribuzioni continue notevoli
title_en: Common continuous distributions
level: blue
order: 14
source_book: "Blitzstein & Hwang, Introduction to Probability; MIT OCW 6.041"
source_chapter: "Cap. 5–6 — Distribuzioni continue"
---

## Distribuzione Gamma

$X\sim\text{Gamma}(\alpha,\beta)$ ($\alpha$=forma, $\beta$=tasso):

$$f_X(x) = \frac{\beta^\alpha x^{\alpha-1}e^{-\beta x}}{\Gamma(\alpha)}, \quad x>0$$

$$E[X]=\frac{\alpha}{\beta}, \qquad \text{Var}(X)=\frac{\alpha}{\beta^2}$$

**Casi speciali:** $\text{Gamma}(1,\beta)=\text{Exp}(\beta)$; $\text{Gamma}(n/2,1/2)=\chi^2(n)$.

## Distribuzione Chi-quadro

$X\sim\chi^2(n)$ = somma di $n$ normali standard indipendenti al quadrato:

$$X=Z_1^2+\cdots+Z_n^2, \quad Z_i\sim\mathcal{N}(0,1) \text{ i.i.d.}$$

$$E[X]=n, \qquad \text{Var}(X)=2n$$

Fondamentale in statistica per test di bontà di adattamento e inferenza sulla varianza.

## Distribuzione t di Student

$T\sim t(n)$ (con $n$ gradi di libertà):

$$T = \frac{Z}{\sqrt{X/n}}, \quad Z\sim\mathcal{N}(0,1),\;X\sim\chi^2(n)\text{ indip.}$$

$$E[T]=0\;(n>1), \qquad \text{Var}(T)=\frac{n}{n-2}\;(n>2)$$

Per $n\to\infty$: $t(n)\to\mathcal{N}(0,1)$. Code più pesanti della normale.

## Distribuzione F di Fisher

$F\sim F(m,n)$:

$$F = \frac{X_1/m}{X_2/n}, \quad X_1\sim\chi^2(m),\;X_2\sim\chi^2(n)\text{ indip.}$$

Usata nei test di uguaglianza delle varianze e in ANOVA.

## Distribuzione Beta

$X\sim\text{Beta}(\alpha,\beta)$ su $[0,1]$:

$$f_X(x)=\frac{x^{\alpha-1}(1-x)^{\beta-1}}{B(\alpha,\beta)}, \quad B(\alpha,\beta)=\frac{\Gamma(\alpha)\Gamma(\beta)}{\Gamma(\alpha+\beta)}$$

$$E[X]=\frac{\alpha}{\alpha+\beta}, \qquad \text{Var}(X)=\frac{\alpha\beta}{(\alpha+\beta)^2(\alpha+\beta+1)}$$

Usata come **prior coniugato** per la Binomiale nell'inferenza bayesiana.

---

## Esercizi

<details>
<summary>Esercizio 1 — Chi-quadro</summary>

$Z_1,Z_2,Z_3\sim\mathcal{N}(0,1)$ i.i.d. Trovare $E[Z_1^2+Z_2^2+Z_3^2]$ e $\text{Var}$.

**Soluzione.**

$X=Z_1^2+Z_2^2+Z_3^2\sim\chi^2(3)$.

$E[X]=3$, $\text{Var}(X)=2\cdot3=6$.

</details>

<details>
<summary>Esercizio 2 — Distribuzione t</summary>

Per $T\sim t(10)$, confrontare la probabilità $P(|T|>2)$ con quella della normale standard $P(|Z|>2)$.

**Soluzione.**

Per la normale: $P(|Z|>2)\approx 4.6\%$.

Per $t(10)$: usando le tavole, $P(|T_{10}|>2)\approx 7.4\%$.

La $t$ ha code più pesanti: sovrastima la probabilità di valori estremi rispetto alla normale.

</details>

<details>
<summary>Esercizio 3 — Beta come prior</summary>

$X\sim\text{Beta}(2,3)$. Calcolare $E[X]$ e $P(X\leq 0.5)$.

**Soluzione.**

$E[X]=2/(2+3)=0.4$.

$P(X\leq 0.5)=\displaystyle\int_0^{0.5}\dfrac{x(1-x)^2}{B(2,3)}\,dx$. Con $B(2,3)=1/12$:

$=12\displaystyle\int_0^{0.5}x(1-x)^2\,dx=12\cdot\dfrac{11}{192}=\dfrac{11}{16}=0.6875$.

</details>
