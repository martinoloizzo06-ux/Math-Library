---
id: probabilita-02-condizionata
subject: probabilita
topic_it: Fondamenti
topic_en: Foundations
title_it: Probabilità condizionata e indipendenza
title_en: Conditional probability and independence
level: blue
order: 2
source_book: "Blitzstein & Hwang, Introduction to Probability; MIT OCW 6.041"
source_chapter: "Cap. 2 — Probabilità condizionata"
---

## Probabilità condizionata

La **probabilità condizionata** di $A$ dato $B$ (con $P(B)>0$):

$$P(A\mid B) = \frac{P(A\cap B)}{P(B)}$$

Rappresenta la probabilità di $A$ sapendo che $B$ si è verificato. In pratica: restringo lo spazio campionario a $B$.

**Regola della moltiplicazione:**

$$P(A\cap B) = P(A\mid B)\,P(B) = P(B\mid A)\,P(A)$$

## Regola della probabilità totale

Se $B_1,\ldots,B_n$ è una **partizione** di $\Omega$ (mutualmente esclusivi, $\bigcup B_i=\Omega$, $P(B_i)>0$):

$$P(A) = \sum_{i=1}^n P(A\mid B_i)\,P(B_i)$$

## Teorema di Bayes

$$P(B_j\mid A) = \frac{P(A\mid B_j)\,P(B_j)}{\displaystyle\sum_{i=1}^n P(A\mid B_i)\,P(B_i)}$$

- $P(B_j)$: probabilità **a priori** (prior).
- $P(B_j\mid A)$: probabilità **a posteriori** (posterior) dopo aver osservato $A$.
- $P(A\mid B_j)$: **verosimiglianza** (likelihood).

## Indipendenza

$A$ e $B$ sono **indipendenti** se:

$$P(A\cap B) = P(A)\,P(B)$$

Equivalentemente: $P(A\mid B)=P(A)$ — sapere $B$ non modifica la probabilità di $A$.

**Indipendenza multipla:** $A_1,\ldots,A_n$ sono (mutuamente) indipendenti se per ogni sottoinsieme $\{i_1,\ldots,i_k\}$:

$$P(A_{i_1}\cap\cdots\cap A_{i_k}) = P(A_{i_1})\cdots P(A_{i_k})$$

---

## Esercizi

<details>
<summary>Esercizio 1 — Probabilità condizionata</summary>

In un mazzo di 52 carte, si estrae una carta. Dato che è una figura, qual è la probabilità che sia un re?

**Soluzione.**

$A$= re, $B$= figura. $P(A\cap B)=4/52$ (4 re). $P(B)=12/52$.

$P(A\mid B)=\dfrac{4/52}{12/52}=\dfrac{4}{12}=\mathbf{1/3}$.

</details>

<details>
<summary>Esercizio 2 — Teorema di Bayes</summary>

Un test medico ha sensibilità $P(\text{pos}\mid\text{malato})=0.99$ e specificità $P(\text{neg}\mid\text{sano})=0.95$. La prevalenza della malattia è $1\%$. Il test è positivo: qual è la probabilità di essere malato?

**Soluzione.**

$P(M)=0.01$, $P(S)=0.99$. $P(+\mid M)=0.99$. $P(+\mid S)=1-0.95=0.05$.

$P(+)=0.99\cdot0.01+0.05\cdot0.99=0.0099+0.0495=0.0594$.

$P(M\mid+)=\dfrac{0.99\cdot0.01}{0.0594}\approx\mathbf{16.7\%}$.

Anche con test accurato, con malattia rara la probabilità a posteriori è sorprendentemente bassa!

</details>

<details>
<summary>Esercizio 3 — Indipendenza</summary>

Si lancia una moneta e un dado. $A$=testa, $B$=dado pari. $A$ e $B$ sono indipendenti?

**Soluzione.**

$P(A)=1/2$, $P(B)=1/2$. $P(A\cap B)=1/2\cdot 1/2=1/4$ (eventi su esperimenti separati).

$P(A)\cdot P(B)=1/4=P(A\cap B)$. ✓ $A$ e $B$ sono **indipendenti**.

</details>
