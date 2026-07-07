---
id: probabilita-03-var-discrete
subject: probabilita
topic_it: Variabili aleatorie
topic_en: Random variables
title_it: Variabili aleatorie discrete
title_en: Discrete random variables
level: blue
order: 3
source_book: "Blitzstein & Hwang, Introduction to Probability; MIT OCW 6.041"
source_chapter: "Cap. 3 — Variabili aleatorie discrete"
---

## Variabile aleatoria

Una **variabile aleatoria** (VA) discreta $X:\Omega\to\mathbb{R}$ assume un insieme numerabile di valori $\{x_1,x_2,\ldots\}$.

**Funzione di massa di probabilità (PMF):**

$$p_X(x) = P(X=x)$$

Proprietà: $p_X(x)\geq 0$ e $\displaystyle\sum_x p_X(x)=1$.

## Valore atteso (speranza matematica)

$$E[X] = \sum_x x\,p_X(x)$$

**Linearità:** $E[aX+b]=aE[X]+b$.

**Legge dell'aspettativa totale:** $E[E[X\mid Y]]=E[X]$.

## Varianza e deviazione standard

$$\text{Var}(X) = E[(X-E[X])^2] = E[X^2]-(E[X])^2$$

$$\text{Var}(aX+b)=a^2\text{Var}(X)$$

**Deviazione standard:** $\sigma_X=\sqrt{\text{Var}(X)}$ — stessa unità di misura di $X$.

## Funzione di ripartizione (CDF)

$$F_X(x) = P(X\leq x) = \sum_{k\leq x}p_X(k)$$

Crescente, continua a destra, $F(-\infty)=0$, $F(+\infty)=1$.

## Distribuzione di Bernoulli

$X\sim\text{Ber}(p)$: vale 1 con prob $p$, 0 con prob $1-p$.

$$E[X]=p, \quad \text{Var}(X)=p(1-p)$$

## Distribuzione Uniforme discreta

$X$ uniforme su $\{1,\ldots,n\}$: $p_X(k)=1/n$, $E[X]=(n+1)/2$, $\text{Var}(X)=(n^2-1)/12$.

---

## Esercizi

<details>
<summary>Esercizio 1 — PMF e valor medio</summary>

Un dado equo a 6 facce. Calcolare $E[X]$ e $\text{Var}(X)$.

**Soluzione.**

$p_X(k)=1/6$ per $k=1,\ldots,6$.

$E[X]=\dfrac{1+2+3+4+5+6}{6}=\dfrac{21}{6}=3.5$.

$E[X^2]=\dfrac{1+4+9+16+25+36}{6}=\dfrac{91}{6}$.

$\text{Var}(X)=\dfrac{91}{6}-\dfrac{49}{4}=\dfrac{182-147}{12}=\dfrac{35}{12}\approx 2.917$.

</details>

<details>
<summary>Esercizio 2 — Valore atteso di una funzione</summary>

$X\sim\text{Ber}(1/3)$. Calcolare $E[X^2+2X+1]$.

**Soluzione.**

$E[X]=1/3$, $E[X^2]=E[X]=1/3$ (poiché $X^2=X$ per Bernoulli).

$E[X^2+2X+1]=1/3+2/3+1=2$. Oppure: $Y=X+1$, $E[Y^2]=(E[X]+1)^2=\ldots$

Direttamente: $P(X=0)=2/3 \Rightarrow X^2+2X+1=1$; $P(X=1)=1/3 \Rightarrow =4$.

$E=1\cdot(2/3)+4\cdot(1/3)=2/3+4/3=2$. ✓

</details>

<details>
<summary>Esercizio 3 — CDF</summary>

Costruire la CDF di $X$ con PMF $P(X=0)=1/4$, $P(X=1)=1/2$, $P(X=2)=1/4$.

**Soluzione.**

$$F_X(x) = \begin{cases}0 & x<0 \\ 1/4 & 0\leq x<1 \\ 3/4 & 1\leq x<2 \\ 1 & x\geq 2\end{cases}$$

</details>
