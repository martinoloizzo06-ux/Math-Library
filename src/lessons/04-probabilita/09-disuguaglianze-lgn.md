---
id: probabilita-09-disuguaglianze-lgn
subject: probabilita
topic_it: Leggi dei grandi numeri
topic_en: Laws of large numbers
title_it: Disuguaglianze probabilistiche e legge dei grandi numeri
title_en: Probability inequalities and the law of large numbers
level: blue
order: 9
source_book: "Blitzstein & Hwang, Introduction to Probability; MIT OCW 6.041"
source_chapter: "Cap. 9 — Convergenza e LGN"
---

## Disuguaglianza di Markov

Per $X\geq 0$ e $a>0$:

$$P(X\geq a) \leq \frac{E[X]}{a}$$

**Interpretazione:** se la media è piccola, è improbabile osservare valori grandi.

## Disuguaglianza di Chebyshev

Per qualsiasi VA con $E[X]=\mu$ e $\text{Var}(X)=\sigma^2<\infty$:

$$P(|X-\mu|\geq k\sigma) \leq \frac{1}{k^2}$$

Equivalentemente: $P(|X-\mu|\geq t)\leq\dfrac{\sigma^2}{t^2}$.

**Nota:** non richiede la forma della distribuzione — universale ma spesso non stretta.

## Legge debole dei grandi numeri

Siano $X_1,X_2,\ldots$ i.i.d. con $E[X_i]=\mu$ e $\text{Var}(X_i)=\sigma^2<\infty$. La media campionaria $\bar{X}_n=\dfrac{1}{n}\sum_{i=1}^n X_i$ soddisfa:

$$\bar{X}_n \xrightarrow{P} \mu \quad (n\to\infty)$$

cioè per ogni $\varepsilon>0$: $\displaystyle\lim_{n\to\infty}P(|\bar{X}_n-\mu|>\varepsilon)=0$.

**Dimostrazione** (via Chebyshev): $\text{Var}(\bar{X}_n)=\sigma^2/n\to 0$.

## Legge forte dei grandi numeri

$$P\!\left(\lim_{n\to\infty}\bar{X}_n=\mu\right)=1$$

La convergenza è **quasi certa** (più forte della convergenza in probabilità).

## Disuguaglianza di Jensen

Per $g$ convessa: $g(E[X])\leq E[g(X)]$.

**Esempi:** $e^{E[X]}\leq E[e^X]$; $\sqrt{E[X^2]}\geq|E[X]|$ (norma $\geq$ media).

---

## Esercizi

<details>
<summary>Esercizio 1 — Chebyshev</summary>

$X$ ha media 10 e deviazione standard 3. Limitare $P(|X-10|\geq 9)$ con Chebyshev.

**Soluzione.**

$k\sigma=9 \Rightarrow k=3$.

$P(|X-10|\geq 9)\leq \dfrac{1}{k^2}=\dfrac{1}{9}\approx 11.1\%$.

</details>

<details>
<summary>Esercizio 2 — LGN applicata</summary>

Si lanciano $n$ dadi. Per quale $n$ la probabilità che la media si discosti da 3.5 di più di 0.1 è inferiore a 5%?

**Soluzione.**

$\sigma^2=35/12$, $\text{Var}(\bar{X}_n)=35/(12n)$.

Chebyshev: $P(|\bar{X}_n-3.5|\geq 0.1)\leq\dfrac{35/12n}{(0.1)^2}=\dfrac{35}{0.12n}$.

$\dfrac{35}{0.12n}\leq 0.05 \Rightarrow n\geq\dfrac{35}{0.006}\approx 5833$.

</details>

<details>
<summary>Esercizio 3 — Jensen</summary>

Usare Jensen per mostrare che la media geometrica $\leq$ media aritmetica:

$(x_1\cdots x_n)^{1/n}\leq\dfrac{x_1+\cdots+x_n}{n}$.

**Soluzione.**

$g(t)=-\ln t$ è convessa. Per Jensen: $-\ln\left(\dfrac{\sum x_i}{n}\right)\leq\dfrac{\sum(-\ln x_i)}{n}=-\ln\left(\prod x_i\right)^{1/n}$.

Poiché $-\ln$ è decrescente: $\left(\prod x_i\right)^{1/n}\leq\dfrac{\sum x_i}{n}$. ✓

</details>
