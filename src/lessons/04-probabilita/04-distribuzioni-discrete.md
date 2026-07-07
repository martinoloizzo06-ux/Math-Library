---
id: probabilita-04-distribuzioni-discrete
subject: probabilita
topic_it: Variabili aleatorie
topic_en: Random variables
title_it: Distribuzioni discrete notevoli
title_en: Common discrete distributions
level: blue
order: 4
source_book: "Blitzstein & Hwang, Introduction to Probability; MIT OCW 6.041"
source_chapter: "Cap. 3–4 — Distribuzioni discrete"
---

## Distribuzione Binomiale

$X\sim\text{Bin}(n,p)$: numero di successi in $n$ prove Bernoulli indipendenti con prob $p$.

$$P(X=k) = \binom{n}{k}p^k(1-p)^{n-k}, \quad k=0,1,\ldots,n$$

$$E[X]=np, \qquad \text{Var}(X)=np(1-p)$$

**Somma:** se $X_i\sim\text{Ber}(p)$ i.i.d., allora $\sum X_i\sim\text{Bin}(n,p)$.

## Distribuzione di Poisson

$X\sim\text{Pois}(\lambda)$ ($\lambda>0$): conta eventi rari in un intervallo.

$$P(X=k) = e^{-\lambda}\frac{\lambda^k}{k!}, \quad k=0,1,2,\ldots$$

$$E[X]=\lambda, \qquad \text{Var}(X)=\lambda$$

**Approssimazione:** Bin$(n,p)\approx$ Pois$(\lambda=np)$ per $n$ grande e $p$ piccolo.

## Distribuzione Geometrica

$X\sim\text{Geom}(p)$: numero di prove fino al primo successo.

$$P(X=k) = (1-p)^{k-1}p, \quad k=1,2,3,\ldots$$

$$E[X]=\frac{1}{p}, \qquad \text{Var}(X)=\frac{1-p}{p^2}$$

**Assenza di memoria:** $P(X>m+n\mid X>m)=P(X>n)$.

## Distribuzione Ipergeometrica

$X\sim\text{HGeom}(N,K,n)$: estrarre $n$ oggetti (senza reinserimento) da $N$ di cui $K$ speciali.

$$P(X=k) = \frac{\binom{K}{k}\binom{N-K}{n-k}}{\binom{N}{n}}$$

$$E[X]=n\frac{K}{N}$$

---

## Esercizi

<details>
<summary>Esercizio 1 — Binomiale</summary>

Un esame ha 10 domande true/false. Un candidato risponde a caso. Qual è la probabilità di rispondere correttamente ad almeno 8?

**Soluzione.**

$X\sim\text{Bin}(10,1/2)$.

$P(X\geq 8)=P(X=8)+P(X=9)+P(X=10)$

$=\binom{10}{8}(1/2)^{10}+\binom{10}{9}(1/2)^{10}+\binom{10}{10}(1/2)^{10}$

$=\dfrac{45+10+1}{1024}=\dfrac{56}{1024}\approx\mathbf{5.5\%}$.

</details>

<details>
<summary>Esercizio 2 — Poisson</summary>

Una centralina riceve in media 4 chiamate per minuto. Qual è la probabilità di ricevere 0 o 1 chiamata in un minuto?

**Soluzione.**

$X\sim\text{Pois}(4)$.

$P(X=0)=e^{-4}\approx 0.0183$.

$P(X=1)=4e^{-4}\approx 0.0733$.

$P(X\leq 1)\approx 0.0183+0.0733\approx\mathbf{9.2\%}$.

</details>

<details>
<summary>Esercizio 3 — Geometrica</summary>

Quante volte in media devo lanciare un dado prima di ottenere un 6?

**Soluzione.**

$X\sim\text{Geom}(1/6)$.

$E[X]=1/p=6$.

In media **6 lanci**.

</details>
