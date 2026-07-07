---
id: base-27-combinatoria
subject: base
topic_it: Ragionamento matematico
topic_en: Mathematical reasoning
title_it: Calcolo combinatorio
title_en: Combinatorics
level: green
order: 27
source_book: "MIT OCW 18.01 (Precalcolo)"
source_chapter: "Appendice — Combinatoria"
---

## Principio fondamentale del conteggio

Se un'operazione si divide in $k$ fasi successive, con $n_1$ modi per la prima, $n_2$ per la seconda, ..., e $n_k$ per la $k$-esima (indipendenti), allora il numero totale di modi è:

$$n_1 \times n_2 \times \cdots \times n_k$$

**Esempio.** Un menù ha 3 primi e 4 secondi. I pasti possibili sono $3 \times 4 = 12$.

## Fattoriale

Per $n \in \mathbb{N}$:

$$n! = n \times (n-1) \times \cdots \times 2 \times 1, \qquad 0! = 1$$

**Esempio.** $5! = 120$, $\; 6! = 720$.

## Permutazioni

Una **permutazione** di $n$ oggetti distinti è un loro ordinamento. Il numero di permutazioni è:

$$P_n = n!$$

**Permutazioni con ripetizione:** se tra gli $n$ oggetti, $n_1$ sono del tipo 1, $n_2$ del tipo 2, ..., $n_k$ del tipo $k$ (con $n_1+\cdots+n_k=n$):

$$P_n^{n_1,\ldots,n_k} = \frac{n!}{n_1!\, n_2!\, \cdots\, n_k!}$$

**Esempio.** Il numero di anagrammi di MATEMATICA (10 lettere: M×2, A×3, T×2, E, I, C):

$$\frac{10!}{2!\cdot 3!\cdot 2!\cdot 1!\cdot 1!\cdot 1!} = \frac{3\,628\,800}{2\cdot 6\cdot 2} = 151\,200$$

## Disposizioni

Le **disposizioni semplici** di $n$ oggetti in $k$ posti ($k \leq n$, l'ordine conta, senza ripetizione):

$$D_{n,k} = \frac{n!}{(n-k)!} = n(n-1)\cdots(n-k+1)$$

## Combinazioni

Le **combinazioni** di $n$ oggetti in $k$ gruppi ($k \leq n$, l'ordine **non** conta, senza ripetizione):

$$\binom{n}{k} = C_{n,k} = \frac{n!}{k!(n-k)!}$$

Si legge "$n$ su $k$" o "coefficiente binomiale $n$ su $k$".

**Proprietà:**
$$\binom{n}{0} = \binom{n}{n} = 1 \qquad \binom{n}{k} = \binom{n}{n-k}$$

**Formula di Pascal:** $\dbinom{n}{k} + \dbinom{n}{k+1} = \dbinom{n+1}{k+1}$

## Teorema binomiale

$$(a+b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k$$

---

## Esercizi

<details>
<summary>Esercizio 1 — Permutazioni</summary>

In quanti modi si possono disporre 5 libri su uno scaffale? E se due libri specifici devono essere sempre adiacenti?

**Soluzione.**

Senza vincoli: $5! = 120$.

Con i due libri adiacenti: trattiamo la coppia come un blocco → $4! = 24$ modi di ordinare i 4 elementi, per $2! = 2$ modi di ordinare internamente la coppia → $24 \times 2 = 48$.

</details>

<details>
<summary>Esercizio 2 — Combinazioni</summary>

Una commissione di 3 persone deve essere scelta tra 8 candidati. In quanti modi? E se deve includere almeno una delle 2 candidate donne?

**Soluzione.**

Senza vincoli: $\dbinom{8}{3} = 56$.

Complementare: commissioni senza donne = $\dbinom{6}{3} = 20$.

Con almeno una donna: $56 - 20 = 36$.

</details>

<details>
<summary>Esercizio 3 — Teorema binomiale</summary>

Trovare il coefficiente di $x^3$ nello sviluppo di $(2x - 1)^5$.

**Soluzione.**

Il termine generico è $\dbinom{5}{k}(2x)^{5-k}(-1)^k$.

Per il termine in $x^3$: $5-k = 3 \implies k = 2$.

$$\binom{5}{2}(2x)^3(-1)^2 = 10 \cdot 8x^3 \cdot 1 = 80x^3$$

Il coefficiente di $x^3$ è **80**.

</details>
