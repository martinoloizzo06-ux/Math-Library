---
id: probabilita-07-funzioni-va
subject: probabilita
topic_it: Variabili aleatorie
topic_en: Random variables
title_it: Funzioni di variabili aleatorie
title_en: Functions of random variables
level: blue
order: 7
source_book: "Blitzstein & Hwang, Introduction to Probability; MIT OCW 6.041"
source_chapter: "Cap. 7 — Trasformazioni di VA"
---

## Trasformazione di una VA continua

Dato $Y=g(X)$ con $g$ monotona e derivabile, la densità di $Y$ è:

$$f_Y(y) = f_X(g^{-1}(y))\cdot\left|\frac{d}{dy}g^{-1}(y)\right|$$

**Metodo della CDF:** calcolare $F_Y(y)=P(Y\leq y)=P(g(X)\leq y)$, poi derivare.

## Metodo della CDF — Procedura

1. Esprimere $\{Y\leq y\}$ in termini di $X$: $\{g(X)\leq y\}$.
2. Calcolare $F_Y(y)=P(g(X)\leq y)$.
3. Derivare: $f_Y(y)=F_Y'(y)$.

## Trasformazione log-normale

Se $X\sim\mathcal{N}(\mu,\sigma^2)$, allora $Y=e^X$ ha distribuzione **log-normale**:

$$f_Y(y) = \frac{1}{y\sigma\sqrt{2\pi}}e^{-(\ln y-\mu)^2/(2\sigma^2)}, \quad y>0$$

$$E[Y]=e^{\mu+\sigma^2/2}, \qquad \text{Var}(Y)=(e^{\sigma^2}-1)e^{2\mu+\sigma^2}$$

Usata in finanza (prezzi di azioni) e in biologia.

## Funzione generatrice dei momenti

$$M_X(t) = E[e^{tX}]$$

Quando esiste, $M_X^{(n)}(0)=E[X^n]$ (n-esimo momento).

**Proprietà:** se $X$ e $Y$ sono indipendenti, $M_{X+Y}(t)=M_X(t)M_Y(t)$.

## Momenti e cumulanti

- Momento di ordine $n$: $\mu_n=E[X^n]$.
- **Momento centrale:** $\mu_n'=E[(X-E[X])^n]$.
- **Asimmetria** (skewness): $\gamma_1=\mu_3'/\sigma^3$.
- **Curtosi** (kurtosis): $\gamma_2=\mu_4'/\sigma^4-3$ (la normale ha curtosi = 0).

---

## Esercizi

<details>
<summary>Esercizio 1 — Trasformazione di variabile</summary>

$X\sim\text{Unif}(0,1)$. Trovare la densità di $Y=X^2$.

**Soluzione.**

$F_Y(y)=P(X^2\leq y)=P(X\leq\sqrt{y})=\sqrt{y}$ per $y\in[0,1]$.

$f_Y(y)=F_Y'(y)=\dfrac{1}{2\sqrt{y}}$ per $y\in(0,1)$.

</details>

<details>
<summary>Esercizio 2 — Metodo Jacobiano</summary>

$X\sim\text{Exp}(\lambda)$. Trovare la densità di $Y=\ln X$.

**Soluzione.**

$g^{-1}(y)=e^y$, $\dfrac{d}{dy}e^y=e^y$.

$f_Y(y)=f_X(e^y)\cdot e^y=\lambda e^{-\lambda e^y}\cdot e^y = \lambda e^y e^{-\lambda e^y}$, $y\in\mathbb{R}$.

(Distribuzione di Gumbel del valore minimo.)

</details>

<details>
<summary>Esercizio 3 — FGM della normale</summary>

Calcolare la FGM di $X\sim\mathcal{N}(\mu,\sigma^2)$.

**Soluzione.**

$$M_X(t)=E[e^{tX}]=e^{\mu t+\sigma^2t^2/2}$$

Da cui: $M_X'(0)=\mu=E[X]$. $M_X''(0)=\mu^2+\sigma^2=E[X^2]$, e $\text{Var}(X)=\sigma^2$. ✓

</details>
