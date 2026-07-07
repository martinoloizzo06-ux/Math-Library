---
id: analisi-15-integrali-impropri
subject: analisi
topic_it: Calcolo integrale (una variabile)
topic_en: Integral calculus (one variable)
title_it: Integrali impropri
title_en: Improper integrals
level: blue
order: 15
source_book: "J. Stewart, Calculus; MIT OCW 18.01"
source_chapter: "Cap. 7 — Integrali impropri"
---

## Integrali impropri di tipo I (intervallo infinito)

$$\int_a^{+\infty}f(x)\,dx = \lim_{t\to+\infty}\int_a^t f(x)\,dx$$

L'integrale **converge** se il limite esiste ed è finito; altrimenti **diverge**.

**Esempio fondamentale:** $\displaystyle\int_1^{+\infty}\frac{dx}{x^p}$

$$= \begin{cases} \dfrac{1}{p-1} & \text{se } p>1 \quad \text{(converge)} \\ +\infty & \text{se } p\leq 1 \quad \text{(diverge)} \end{cases}$$

In particolare $\displaystyle\int_1^\infty \frac{dx}{x}=+\infty$ (diverge, anche se $1/x\to 0$).

## Integrali impropri di tipo II (singolarità nel dominio)

Se $f$ ha una singolarità in $x=b$:

$$\int_a^b f(x)\,dx = \lim_{t\to b^-}\int_a^t f(x)\,dx$$

**Esempio.** $\displaystyle\int_0^1\frac{dx}{\sqrt{x}} = \lim_{t\to 0^+}\int_t^1 x^{-1/2}\,dx = \lim_{t\to 0^+}\Big[2\sqrt{x}\Big]_t^1 = 2$.

## Criteri di convergenza

**Criterio del confronto:** se $0\leq f(x)\leq g(x)$ per $x\geq a$:
- $\int_a^\infty g$ converge $\implies$ $\int_a^\infty f$ converge.
- $\int_a^\infty f$ diverge $\implies$ $\int_a^\infty g$ diverge.

**Criterio asintotico:** se $f(x)\sim g(x)$ per $x\to\infty$, allora le due integrali hanno lo stesso carattere.

---

## Esercizi

<details>
<summary>Esercizio 1 — Tipo I</summary>

Studiare la convergenza di $\displaystyle\int_0^{+\infty}e^{-2x}\,dx$.

**Soluzione.**

$\displaystyle\int_0^t e^{-2x}\,dx = \left[-\frac{e^{-2x}}{2}\right]_0^t = -\frac{e^{-2t}}{2}+\frac{1}{2}$.

Per $t\to+\infty$: $e^{-2t}\to 0$, quindi l'integrale **converge** a $\dfrac{1}{2}$.

</details>

<details>
<summary>Esercizio 2 — Tipo II</summary>

Calcolare $\displaystyle\int_0^2\frac{dx}{(x-1)^{2/3}}$.

**Soluzione.**

Singolarità in $x=1$ (interno). Spezziamo:

$\displaystyle\int_0^1 + \int_1^2$. Per ognuno applichiamo il limite.

$\displaystyle\int_0^1(x-1)^{-2/3}dx = \Big[3(x-1)^{1/3}\Big]_0^1 = 0-3(-1)^{1/3}=3$ (usando $(-1)^{1/3}=-1$).

Analogamente $\displaystyle\int_1^2(x-1)^{-2/3}dx=3$.

Totale: $\mathbf{6}$.

</details>

<details>
<summary>Esercizio 3 — Confronto</summary>

Stabilire se $\displaystyle\int_1^{+\infty}\frac{\sin^2 x}{x^2}\,dx$ converge.

**Soluzione.**

$\dfrac{\sin^2 x}{x^2}\leq \dfrac{1}{x^2}$ per ogni $x$.

Poiché $\displaystyle\int_1^\infty \frac{dx}{x^2} = 1$ converge (p=2>1), per il criterio del confronto anche $\displaystyle\int_1^\infty\frac{\sin^2 x}{x^2}\,dx$ **converge**.

</details>
