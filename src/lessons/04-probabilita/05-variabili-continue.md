---
id: probabilita-05-var-continue
subject: probabilita
topic_it: Variabili aleatorie
topic_en: Random variables
title_it: Variabili aleatorie continue
title_en: Continuous random variables
level: blue
order: 5
source_book: "Blitzstein & Hwang, Introduction to Probability; MIT OCW 6.041"
source_chapter: "Cap. 5 — Variabili aleatorie continue"
---

## Variabili aleatorie continue

Una VA $X$ è **continua** se esiste una funzione $f_X\geq 0$ (densità di probabilità) tale che:

$$P(a\leq X\leq b) = \int_a^b f_X(x)\,dx$$

**Proprietà della densità:**
- $f_X(x)\geq 0$ per ogni $x$.
- $\displaystyle\int_{-\infty}^{+\infty}f_X(x)\,dx=1$.
- $P(X=x)=0$ per ogni singolo valore (ma $f_X(x)$ può essere $>0$!).

## Funzione di ripartizione (CDF)

$$F_X(x) = P(X\leq x) = \int_{-\infty}^x f_X(t)\,dt$$

**TFC:** $f_X(x)=F_X'(x)$ (dove esiste).

## Valore atteso e varianza

$$E[X] = \int_{-\infty}^{+\infty} x\,f_X(x)\,dx$$

$$E[g(X)] = \int_{-\infty}^{+\infty} g(x)\,f_X(x)\,dx$$

$$\text{Var}(X) = E[X^2] - (E[X])^2$$

## Distribuzione Uniforme continua

$X\sim\text{Unif}(a,b)$: $f_X(x)=\dfrac{1}{b-a}$ per $x\in[a,b]$, 0 altrove.

$$E[X]=\frac{a+b}{2}, \qquad \text{Var}(X)=\frac{(b-a)^2}{12}$$

## Distribuzione Esponenziale

$X\sim\text{Exp}(\lambda)$ ($\lambda>0$): $f_X(x)=\lambda e^{-\lambda x}$ per $x>0$.

$$E[X]=\frac{1}{\lambda}, \qquad \text{Var}(X)=\frac{1}{\lambda^2}$$

**Assenza di memoria:** $P(X>s+t\mid X>s)=P(X>t)$ — come la Geometrica in continuo.

---

## Esercizi

<details>
<summary>Esercizio 1 — Uniforme</summary>

$X\sim\text{Unif}(0,4)$. Calcolare $P(1\leq X\leq 3)$ e $E[X^2]$.

**Soluzione.**

$f_X(x)=1/4$ su $[0,4]$.

$P(1\leq X\leq 3)=\displaystyle\int_1^3 \dfrac{1}{4}\,dx = \dfrac{2}{4}=\dfrac{1}{2}$.

$E[X^2]=\displaystyle\int_0^4 x^2\cdot\dfrac{1}{4}\,dx = \dfrac{1}{4}\cdot\dfrac{64}{3}=\dfrac{16}{3}$.

$\text{Var}(X)=16/3-(0+4)^2/4=16/3-4=4/3$. Verifica: $(b-a)^2/12=16/12=4/3$. ✓

</details>

<details>
<summary>Esercizio 2 — Esponenziale</summary>

La durata di vita di un componente è $X\sim\text{Exp}(1/5)$ (in anni). Qual è la probabilità che duri più di 3 anni?

**Soluzione.**

$P(X>3)=\displaystyle\int_3^\infty \dfrac{1}{5}e^{-x/5}\,dx = e^{-3/5}\approx \mathbf{0.549}$.

</details>

<details>
<summary>Esercizio 3 — Assenza di memoria</summary>

$X\sim\text{Exp}(\lambda)$. Dato che il componente ha già funzionato 2 anni, qual è la probabilità che duri altri 3?

**Soluzione.**

Per la proprietà di assenza di memoria:

$P(X>5\mid X>2) = P(X>3) = e^{-3\lambda}$.

La "storia" pregressa non influenza la durata residua.

</details>
