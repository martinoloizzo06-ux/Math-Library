---
id: analisi-16-successioni
subject: analisi
topic_it: Successioni e serie
topic_en: Sequences and series
title_it: Successioni numeriche e limiti
title_en: Numerical sequences and limits
level: blue
order: 16
source_book: "W. Rudin, Principles of Mathematical Analysis; MIT OCW 18.01"
source_chapter: "Cap. 3 — Successioni"
---

## Successioni

Una **successione** è una funzione $a:\mathbb{N}\to\mathbb{R}$, scritta $(a_n)_{n\geq 1}$ o $\{a_n\}$.

**Esempi:**
- $a_n = 1/n$: $1, 1/2, 1/3, \ldots \to 0$.
- $a_n = (-1)^n$: $-1, 1, -1, 1, \ldots$ (non converge).
- $a_n = (1+1/n)^n \to e$.

## Convergenza e divergenza

$\displaystyle\lim_{n\to\infty}a_n = L$ (la successione **converge** a $L$) se:

$$\forall\varepsilon>0,\;\exists N\in\mathbb{N}: n>N \implies |a_n - L|<\varepsilon$$

Se il limite è $\pm\infty$: la successione **diverge** (a $\pm\infty$).

Se il limite non esiste (né finito né infinito): la successione è **irregolare**.

## Proprietà e criteri

**Monotona limitata:** una successione monotona (crescente o decrescente) e limitata converge.

**Squeeze per successioni:** se $b_n\leq a_n\leq c_n$ e $\lim b_n = \lim c_n = L$, allora $\lim a_n = L$.

**Criterio del rapporto:** se $\displaystyle\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right| = r$:
- $r < 1$: $a_n\to 0$.
- $r > 1$: $|a_n|\to\infty$.
- $r = 1$: non conclusivo.

## Limiti notevoli di successioni

$$\lim_{n\to\infty}\frac{1}{n^\alpha}=0\;(\alpha>0) \qquad \lim_{n\to\infty}r^n=0\;(|r|<1) \qquad \lim_{n\to\infty}\sqrt[n]{n}=1$$

$$\lim_{n\to\infty}\frac{n^k}{a^n}=0\;(a>1,\,k>0) \qquad \lim_{n\to\infty}\left(1+\frac{x}{n}\right)^n=e^x$$

---

## Esercizi

<details>
<summary>Esercizio 1 — Calcolo di limiti</summary>

Calcolare: (a) $\displaystyle\lim_{n\to\infty}\frac{3n^2+n}{2n^2-1}$ &ensp; (b) $\displaystyle\lim_{n\to\infty}\frac{n!}{n^n}$

**Soluzione.**

(a) Divido per $n^2$: $\dfrac{3+1/n}{2-1/n^2}\to\dfrac{3}{2}$.

(b) Criterio del rapporto: $\dfrac{(n+1)!/(n+1)^{n+1}}{n!/n^n}=\dfrac{(n+1)\cdot n^n}{(n+1)^{n+1}}=\left(\dfrac{n}{n+1}\right)^n=\dfrac{1}{(1+1/n)^n}\to\dfrac{1}{e}<1$.

Quindi $a_n\to 0$.

</details>

<details>
<summary>Esercizio 2 — Successione ricorsiva</summary>

La successione $a_1=1$, $a_{n+1}=\sqrt{2+a_n}$. Mostrare che converge e trovare il limite.

**Soluzione.**

**Crescente:** $a_2=\sqrt{3}>1=a_1$. Per induzione se $a_{n+1}>a_n$ allora $a_{n+2}=\sqrt{2+a_{n+1}}>\sqrt{2+a_n}=a_{n+1}$.

**Limitata:** $a_n<2$ per induzione ($a_1<2$ e se $a_n<2$ allora $a_{n+1}=\sqrt{2+a_n}<\sqrt{4}=2$).

Per il teorema, esiste $L$. Passando al limite: $L=\sqrt{2+L}\implies L^2-L-2=0\implies L=2$ (soluzione positiva).

</details>

<details>
<summary>Esercizio 3 — Limite di Stirling</summary>

Verificare che $\dfrac{2^n}{n!}\to 0$ usando il criterio del rapporto.

**Soluzione.**

$r = \displaystyle\lim_{n\to\infty}\frac{2^{n+1}/(n+1)!}{2^n/n!} = \lim_{n\to\infty}\frac{2}{n+1} = 0 < 1$.

Quindi $\dfrac{2^n}{n!}\to 0$.

</details>
