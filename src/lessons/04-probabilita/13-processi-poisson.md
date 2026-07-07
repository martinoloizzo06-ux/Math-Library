---
id: probabilita-13-poisson-process
subject: probabilita
topic_it: Processi stocastici
topic_en: Stochastic processes
title_it: Processi di Poisson
title_en: Poisson processes
level: blue
order: 13
source_book: "Blitzstein & Hwang, Introduction to Probability; MIT OCW 6.041"
source_chapter: "Cap. 12 — Processi di Poisson"
---

## Definizione

Un **processo di Poisson** di tasso $\lambda>0$ è un processo di conteggio $\{N(t),t\geq 0\}$ tale che:

1. $N(0)=0$.
2. **Incrementi indipendenti:** per $t_1<t_2\leq t_3<t_4$, $N(t_2)-N(t_1)$ e $N(t_4)-N(t_3)$ sono indipendenti.
3. **Incrementi stazionari:** $N(t+s)-N(t)\sim\text{Pois}(\lambda s)$.

**Interpretazione:** $N(t)$ conta gli eventi in $[0,t]$. Il tasso $\lambda$ è il numero atteso di eventi per unità di tempo.

## Proprietà fondamentali

$$E[N(t)]=\lambda t, \qquad \text{Var}(N(t))=\lambda t$$

**Tempi di interarrivo:** $T_1,T_2,\ldots$ sono i.i.d. con distribuzione $\text{Exp}(\lambda)$.

**Tempo al $k$-esimo evento:** $S_k=T_1+\cdots+T_k\sim\text{Gamma}(k,\lambda)$.

## Distribuzione Gamma

$S\sim\text{Gamma}(k,\lambda)$ (somma di $k$ esponenziali indipendenti con tasso $\lambda$):

$$f_S(s) = \frac{\lambda^k s^{k-1}e^{-\lambda s}}{(k-1)!}, \quad s>0$$

$$E[S]=k/\lambda, \qquad \text{Var}(S)=k/\lambda^2$$

## Sovrapposizione e assottigliamento

**Sovrapposizione:** la somma di un processo di Poisson di tasso $\lambda_1$ e uno di tasso $\lambda_2$ (indipendenti) è un processo di Poisson di tasso $\lambda_1+\lambda_2$.

**Assottigliamento:** se ogni evento viene mantenuto indipendentemente con probabilità $p$, il risultato è un processo di Poisson di tasso $\lambda p$.

---

## Esercizi

<details>
<summary>Esercizio 1 — Conteggio di eventi</summary>

Clienti arrivano a un negozio secondo un processo di Poisson di tasso 3 per ora. Qual è la probabilità di avere esattamente 5 clienti in 2 ore?

**Soluzione.**

$N(2)\sim\text{Pois}(\lambda\cdot 2)=\text{Pois}(6)$.

$P(N(2)=5)=e^{-6}\dfrac{6^5}{5!}=e^{-6}\dfrac{7776}{120}\approx 0.00248\cdot 64.8\approx\mathbf{16.1\%}$.

</details>

<details>
<summary>Esercizio 2 — Tempo di attesa</summary>

Con il processo dell'es. 1, qual è la probabilità che il primo cliente arrivi entro 20 minuti?

**Soluzione.**

$T_1\sim\text{Exp}(3)$ (tasso 3/ora). 20 min = 1/3 ora.

$P(T_1\leq 1/3)=1-e^{-3\cdot 1/3}=1-e^{-1}\approx\mathbf{63.2\%}$.

</details>

<details>
<summary>Esercizio 3 — Sovrapposizione</summary>

Riceviamo email da due mittenti: il primo con processo Pois(2/h), il secondo Pois(3/h). Qual è la distribuzione del numero totale di email in un'ora?

**Soluzione.**

Per la sovrapposizione: processo di Poisson di tasso $2+3=5$/h.

$N(1)\sim\text{Pois}(5)$. $E[N(1)]=5$, $P(N(1)=0)=e^{-5}\approx 0.7\%$.

</details>
