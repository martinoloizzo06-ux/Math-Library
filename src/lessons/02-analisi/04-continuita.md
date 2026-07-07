---
id: analisi-04-continuita
subject: analisi
topic_it: Limiti e continuità
topic_en: Limits and continuity
title_it: Continuità e teoremi fondamentali
title_en: Continuity and fundamental theorems
level: blue
order: 4
source_book: "J. Stewart, Calculus; W. Rudin, Principles of Mathematical Analysis"
source_chapter: "Cap. 3 — Continuità"
---

## Definizione di continuità

Una funzione $f$ è **continua** in $x = a$ se:

1. $f(a)$ è definita.
2. $\displaystyle\lim_{x\to a}f(x)$ esiste.
3. $\displaystyle\lim_{x\to a}f(x) = f(a)$.

In una formula: $\displaystyle\lim_{x\to a}f(x) = f(a)$.

Se $f$ è continua in ogni punto del suo dominio, si dice **continua** (tout court).

## Tipi di discontinuità

| Tipo | Descrizione |
|---|---|
| **Eliminabile** | Il limite esiste ma $\neq f(a)$ (o $f(a)$ non è definita) |
| **Prima specie (salto)** | I limiti sinistro e destro esistono ma sono diversi |
| **Seconda specie** | Almeno uno dei limiti laterali è $\pm\infty$ o non esiste |

## Funzioni continue elementari

Sono continue sul loro dominio naturale: polinomi, funzioni razionali, radicali, $e^x$, $\ln x$, $\sin x$, $\cos x$. La composizione, somma, prodotto, quoziente (dove il denominatore $\neq 0$) di funzioni continue è continua.

## Teorema degli zeri (Bolzano)

Se $f$ è continua su $[a,b]$ e $f(a)\cdot f(b) < 0$ (segni opposti), allora esiste almeno un $c \in (a,b)$ tale che $f(c) = 0$.

**Esempio.** $f(x) = x^3 - x - 2$: $f(1) = -2 < 0$ e $f(2) = 4 > 0$. Quindi esiste una radice in $(1,2)$.

## Teorema dei valori intermedi (TVI)

Se $f$ è continua su $[a,b]$ e $k$ è un valore compreso tra $f(a)$ e $f(b)$, allora esiste $c \in (a,b)$ con $f(c) = k$.

## Teorema di Weierstrass

Se $f$ è continua su un intervallo chiuso e limitato $[a,b]$, allora $f$ raggiunge il suo massimo e il suo minimo assoluti in $[a,b]$.

---

## Esercizi

<details>
<summary>Esercizio 1 — Classificazione delle discontinuità</summary>

Studiare la continuità di $f(x) = \dfrac{x^2-1}{|x-1|}$ in $x=1$.

**Soluzione.**

Per $x > 1$: $f(x) = \dfrac{(x-1)(x+1)}{x-1} = x+1$ → $\lim_{x\to 1^+}f(x) = 2$.

Per $x < 1$: $f(x) = \dfrac{(x-1)(x+1)}{-(x-1)} = -(x+1)$ → $\lim_{x\to 1^-}f(x) = -2$.

Limiti laterali diversi → discontinuità di **prima specie (salto)** in $x=1$.

</details>

<details>
<summary>Esercizio 2 — Continuità per parametri</summary>

Per quale valore di $k$ la funzione $f(x) = \begin{cases} kx^2-1 & x\leq 2 \\ 3x+k & x>2 \end{cases}$ è continua?

**Soluzione.**

Continuità in $x=2$: $\lim_{x\to 2^-}f(x) = 4k-1$ e $\lim_{x\to 2^+}f(x) = 6+k$.

$4k-1 = 6+k \implies 3k = 7 \implies k = \dfrac{7}{3}$.

</details>

<details>
<summary>Esercizio 3 — Teorema degli zeri</summary>

Mostrare che $f(x) = e^x + x - 2$ ha almeno uno zero in $(0,1)$.

**Soluzione.**

$f(0) = 1 + 0 - 2 = -1 < 0$.

$f(1) = e + 1 - 2 = e - 1 \approx 1{,}718 > 0$.

$f$ è continua (composizione e somma di funzioni continue). Poiché $f(0)<0<f(1)$, per il teorema degli zeri esiste $c\in(0,1)$ con $f(c)=0$. $\square$

</details>
