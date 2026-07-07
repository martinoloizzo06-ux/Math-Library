---
id: probabilita-01-spazi
subject: probabilita
topic_it: Fondamenti
topic_en: Foundations
title_it: Spazi di probabilità e assiomi di Kolmogorov
title_en: Probability spaces and Kolmogorov's axioms
level: blue
order: 1
source_book: "Blitzstein & Hwang, Introduction to Probability; MIT OCW 6.041"
source_chapter: "Cap. 1 — Probabilità"
---

## Spazio campionario ed eventi

- **Spazio campionario** $\Omega$: insieme di tutti i possibili esiti di un esperimento.
- **Evento**: sottoinsieme $A\subseteq\Omega$.
- **$\sigma$-algebra** $\mathcal{F}$: famiglia di eventi "ammissibili" (chiusa rispetto a complementi e unioni numerabili).

**Operazioni sugli eventi:**
- Unione $A\cup B$: almeno uno dei due accade.
- Intersezione $A\cap B$: entrambi accadono.
- Complementare $A^c$: $A$ non accade.
- Differenza $A\setminus B = A\cap B^c$.

## Assiomi di Kolmogorov

Una **misura di probabilità** è una funzione $P:\mathcal{F}\to[0,1]$ tale che:

1. $P(A)\geq 0$ per ogni evento $A$.
2. $P(\Omega)=1$ (normalizzazione).
3. **Additività numerabile:** se $A_1,A_2,\ldots$ sono eventi **mutualmente esclusivi** ($A_i\cap A_j=\emptyset$ per $i\neq j$):

$$P\left(\bigcup_{i=1}^\infty A_i\right) = \sum_{i=1}^\infty P(A_i)$$

## Conseguenze degli assiomi

$$P(\emptyset)=0 \qquad P(A^c)=1-P(A)$$

$$P(A\cup B)=P(A)+P(B)-P(A\cap B) \quad \text{(formula di inclusione-esclusione)}$$

$$A\subseteq B \implies P(A)\leq P(B)$$

## Spazi uniformi discreti

Se $\Omega$ ha $n$ elementi equiprobabili:

$$P(A) = \frac{|A|}{|\Omega|} = \frac{\text{casi favorevoli}}{\text{casi totali}}$$

Il calcolo combinatorio (permutazioni, combinazioni) serve per contare $|A|$ e $|\Omega|$.

---

## Esercizi

<details>
<summary>Esercizio 1 — Spazio uniformi</summary>

Si lanciano due dadi. Qual è la probabilità di ottenere somma 7?

**Soluzione.**

$|\Omega|=36$. Casi favorevoli (somma=7): $(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)$ → 6 casi.

$P(\text{somma}=7)=6/36=\mathbf{1/6}$.

</details>

<details>
<summary>Esercizio 2 — Inclusione-esclusione</summary>

Estrarre una carta da un mazzo standard. $A$= cuori, $B$= figure. Calcolare $P(A\cup B)$.

**Soluzione.**

$P(A)=13/52=1/4$. $P(B)=12/52=3/13$. $P(A\cap B)=3/52$ (figure di cuori: J, Q, K).

$P(A\cup B)=13/52+12/52-3/52=22/52=\mathbf{11/26}$.

</details>

<details>
<summary>Esercizio 3 — Problema del compleanno</summary>

Quale è la probabilità che in un gruppo di 23 persone almeno due abbiano lo stesso compleanno?

**Soluzione.**

$P(\text{tutti diversi}) = \dfrac{365\cdot364\cdots343}{365^{23}} = \prod_{k=0}^{22}\dfrac{365-k}{365} \approx 0.4927$.

$P(\text{almeno due uguali}) = 1-0.4927 \approx \mathbf{0.5073} > 50\%$.

Risultato sorprendente: bastano 23 persone per avere una probabilità superiore al 50%.

</details>
