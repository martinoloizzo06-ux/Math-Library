---
id: probabilita-12-markov
subject: probabilita
topic_it: Processi stocastici
topic_en: Stochastic processes
title_it: Catene di Markov
title_en: Markov chains
level: blue
order: 12
source_book: "Blitzstein & Hwang, Introduction to Probability; MIT OCW 6.041"
source_chapter: "Cap. 11 — Catene di Markov"
---

## Definizione

Una **catena di Markov** è una successione di VA $X_0,X_1,X_2,\ldots$ a valori in uno spazio di stati $S$ tale che:

$$P(X_{n+1}=j\mid X_n=i,\;X_{n-1},\ldots,X_0) = P(X_{n+1}=j\mid X_n=i)$$

**Proprietà di Markov:** il futuro dipende solo dallo stato presente, non dalla storia.

## Matrice di transizione

La **matrice di transizione** $P=(p_{ij})$ con $p_{ij}=P(X_{n+1}=j\mid X_n=i)$.

**Proprietà:** $p_{ij}\geq 0$ e $\sum_j p_{ij}=1$ (ogni riga somma a 1 — matrice stocastica).

**Probabilità a $n$ passi:** $(P^n)_{ij}=P(X_n=j\mid X_0=i)$.

## Distribuzione stazionaria

Un vettore di probabilità $\boldsymbol{\pi}$ è **stazionario** se $\boldsymbol{\pi}P=\boldsymbol{\pi}$, cioè $\boldsymbol{\pi}$ è un autovettore sinistro di $P$ con autovalore 1.

**Teorema (catene ergodiche):** per catene irriducibili e aperiodiche, la distribuzione stazionaria è unica e $P^n\to\mathbf{1}\boldsymbol{\pi}^T$ (convergenza alla stazionaria).

## Classificazione degli stati

- **Ricorrente:** il processo ritorna con probabilità 1.
- **Transiente:** probabilità positiva di non ritornare.
- **Irriducibile:** si può raggiungere ogni stato da ogni altro stato.
- **Aperiodico:** il massimo comun divisore dei tempi di ritorno è 1.

---

## Esercizi

<details>
<summary>Esercizio 1 — Distribuzione stazionaria</summary>

Trovare la distribuzione stazionaria per $P=\begin{pmatrix}0.7&0.3\\0.4&0.6\end{pmatrix}$.

**Soluzione.**

$\boldsymbol{\pi}P=\boldsymbol{\pi}$: $0.7\pi_1+0.4\pi_2=\pi_1$ e $\pi_1+\pi_2=1$.

$0.4\pi_2=0.3\pi_1 \Rightarrow \pi_1=\dfrac{4}{3}\pi_2$.

$\dfrac{4}{3}\pi_2+\pi_2=1 \Rightarrow \pi_2=\dfrac{3}{7}$, $\pi_1=\dfrac{4}{7}$.

$\boldsymbol{\pi}=(4/7,\;3/7)$.

</details>

<details>
<summary>Esercizio 2 — Probabilità a più passi</summary>

Con la matrice dell'es. 1, calcolare $P(X_2=1\mid X_0=1)$.

**Soluzione.**

$(P^2)_{11}=(P^2)_{1,1}$: $P^2=P\cdot P$.

$P^2_{11}=0.7\cdot0.7+0.3\cdot0.4=0.49+0.12=\mathbf{0.61}$.

</details>

<details>
<summary>Esercizio 3 — Tempo di ritorno medio</summary>

Per una catena irriducibile, il tempo atteso di ritorno allo stato $i$ è $1/\pi_i$. Con $\boldsymbol{\pi}=(4/7,3/7)$, calcolare il tempo atteso di ritorno a ciascuno stato.

**Soluzione.**

Stato 1: $1/\pi_1=7/4=1.75$ passi.

Stato 2: $1/\pi_2=7/3\approx 2.33$ passi.

</details>
