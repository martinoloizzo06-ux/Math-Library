---
id: analisi-17-serie-numeriche
subject: analisi
topic_it: Successioni e serie
topic_en: Sequences and series
title_it: Serie numeriche e criteri di convergenza
title_en: Numerical series and convergence criteria
level: blue
order: 17
source_book: "J. Stewart, Calculus; MIT OCW 18.01"
source_chapter: "Cap. 11 — Serie"
---

## Serie numeriche

Data una successione $(a_n)$, la **serie** associata è la somma formale $\displaystyle\sum_{n=1}^\infty a_n$.

La **somma parziale** è $S_N = \displaystyle\sum_{n=1}^N a_n$.

La serie **converge** a $S$ se $\displaystyle\lim_{N\to\infty}S_N = S$; altrimenti **diverge**.

## Serie geometrica

$$\sum_{n=0}^\infty r^n = \frac{1}{1-r} \quad \text{se } |r|<1$$

Diverge se $|r|\geq 1$. È il prototipo di serie convergente.

**Esempio.** $\displaystyle\sum_{n=0}^\infty \left(\frac{1}{2}\right)^n = \frac{1}{1-1/2} = 2$.

## Serie armonica

$$\sum_{n=1}^\infty \frac{1}{n} = +\infty \quad \text{(diverge)}$$

**Dimostrazione** (Cauchy): raggruppare i termini in blocchi di potenze di 2; ogni blocco supera $1/2$.

## Serie p-armonica

$$\sum_{n=1}^\infty \frac{1}{n^p} \begin{cases} \text{converge} & p>1 \\ \text{diverge} & p\leq 1 \end{cases}$$

## Criteri di convergenza

**Criterio del termine generale (necessario):** se $\displaystyle\sum a_n$ converge, allora $a_n\to 0$. Il viceversa è falso (serie armonica).

**Criterio del confronto:** se $0\leq a_n\leq b_n$:
- $\sum b_n$ converge $\implies$ $\sum a_n$ converge.
- $\sum a_n$ diverge $\implies$ $\sum b_n$ diverge.

**Criterio asintotico:** se $a_n,b_n>0$ e $a_n\sim b_n$, le due serie hanno lo stesso carattere.

**Criterio del rapporto:** se $\displaystyle\lim_{n\to\infty}\frac{a_{n+1}}{a_n}=L$:
- $L<1$: converge assolutamente.
- $L>1$: diverge.
- $L=1$: non conclusivo.

**Criterio della radice:** se $\displaystyle\lim_{n\to\infty}\sqrt[n]{a_n}=L$:
- $L<1$: converge.
- $L>1$: diverge.

**Criterio di Leibniz (serie alternate):** se $(a_n)$ è decrescente e $a_n\to 0$, allora $\displaystyle\sum_{n=1}^\infty(-1)^{n+1}a_n$ converge.

## Convergenza assoluta e condizionata

$\sum a_n$ **converge assolutamente** se $\sum |a_n|$ converge. La convergenza assoluta implica la convergenza.

$\sum a_n$ **converge condizionatamente** se converge ma $\sum|a_n|=+\infty$ (es. $\sum(-1)^{n+1}/n$).

---

## Esercizi

<details>
<summary>Esercizio 1 — Criterio del rapporto</summary>

Stabilire se $\displaystyle\sum_{n=1}^\infty \frac{n!}{3^n}$ converge.

**Soluzione.**

$\dfrac{a_{n+1}}{a_n} = \dfrac{(n+1)!}{3^{n+1}}\cdot\dfrac{3^n}{n!} = \dfrac{n+1}{3} \to +\infty > 1$.

La serie **diverge**.

</details>

<details>
<summary>Esercizio 2 — Serie alternata</summary>

Studiare $\displaystyle\sum_{n=1}^\infty \frac{(-1)^{n+1}}{n}$ (serie armonica alternata).

**Soluzione.**

Per il criterio di Leibniz: $a_n = 1/n$ è decrescente e $\to 0$, quindi la serie **converge**.

Non converge assolutamente (serie armonica), quindi la convergenza è **condizionata**.

Il valore è $\ln 2$ (noto come serie di Mercator).

</details>

<details>
<summary>Esercizio 3 — Confronto asintotico</summary>

Studiare $\displaystyle\sum_{n=1}^\infty \frac{n+2}{n^3+1}$.

**Soluzione.**

Per $n\to\infty$: $\dfrac{n+2}{n^3+1}\sim\dfrac{n}{n^3}=\dfrac{1}{n^2}$.

Poiché $\displaystyle\sum \frac{1}{n^2}$ converge (p=2>1), per il criterio asintotico la serie **converge**.

</details>
