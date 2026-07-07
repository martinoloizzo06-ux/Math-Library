---
id: base-10-funzioni
subject: base
topic_it: Funzioni elementari
topic_en: Elementary functions
title_it: Concetto di funzione, dominio e codominio
title_en: Functions, domain and codomain
level: green
order: 10
source_book: "MIT OCW 18.01 (Precalcolo)"
source_chapter: "Sezione 5 — Funzioni"
---

## Che cos'è una funzione

Una **funzione** $f: A \to B$ è una regola che associa a ogni elemento $x \in A$ (dominio) **uno e un solo** elemento $f(x) \in B$ (codominio).

- **Dominio** $A$: insieme dei valori di input.
- **Codominio** $B$: insieme in cui vivono gli output.
- **Immagine** (o **range**): $\text{Im}(f) = \{f(x) : x \in A\} \subseteq B$.

Il grafico di $f$ è l'insieme di coppie $\{(x, f(x))\}$ nel piano cartesiano. Una curva è il grafico di una funzione se e solo se ogni retta verticale la taglia in al più un punto (**test della retta verticale**).

## Dominio naturale

Quando $f$ è definita da una formula, il **dominio naturale** è il più grande sottoinsieme di $\mathbb{R}$ per cui la formula ha senso:

| Espressione | Condizione |
|---|---|
| $\dfrac{1}{g(x)}$ | $g(x) \neq 0$ |
| $\sqrt{g(x)}$ | $g(x) \geq 0$ |
| $\log_a g(x)$ | $g(x) > 0$ |

## Proprietà delle funzioni

**Iniettiva (1-a-1):** $x_1 \neq x_2 \implies f(x_1) \neq f(x_2)$.

**Suriettiva (su):** $\text{Im}(f) = B$, cioè ogni elemento di $B$ è immagine di qualcuno.

**Biiettiva:** iniettiva e suriettiva.

## Funzione inversa

Se $f$ è biiettiva, esiste la funzione inversa $f^{-1}: B \to A$ tale che $f^{-1}(f(x)) = x$ e $f(f^{-1}(y)) = y$.

Il grafico di $f^{-1}$ è il riflesso del grafico di $f$ rispetto alla bisettrice $y = x$.

## Composizione

Dati $f: A \to B$ e $g: B \to C$, la **composizione** è:

$$(g \circ f)(x) = g(f(x))$$

**Attenzione:** in generale $g \circ f \neq f \circ g$.

**Esempio.** $f(x) = x^2$, $g(x) = x + 1$:

$$(g \circ f)(x) = x^2 + 1 \qquad (f \circ g)(x) = (x+1)^2 = x^2 + 2x + 1$$

---

## Esercizi

<details>
<summary>Esercizio 1 — Dominio naturale</summary>

Trovare il dominio di $f(x) = \dfrac{\sqrt{x+3}}{x^2 - 1}$.

**Soluzione.**

Radice: $x + 3 \geq 0 \implies x \geq -3$.  
Denominatore: $x^2 - 1 \neq 0 \implies x \neq \pm 1$.

$D = [-3, +\infty) \setminus \{1\}$ (si esclude $-1$ perché $-1 < -3$... aspetta: $-1 > -3$, quindi $-1 \in [-3,+\infty)$ e va escluso).

$D = [-3, +\infty) \setminus \{-1, 1\}$

</details>

<details>
<summary>Esercizio 2 — Funzione inversa</summary>

Trovare la funzione inversa di $f(x) = \dfrac{2x - 1}{x + 3}$, $x \neq -3$.

**Soluzione.**

Posto $y = \dfrac{2x-1}{x+3}$, risolviamo per $x$:

$$y(x+3) = 2x - 1 \implies xy + 3y = 2x - 1 \implies x(y-2) = -1 - 3y$$

$$x = \frac{-1-3y}{y-2} = \frac{3y+1}{2-y}, \quad y \neq 2$$

Quindi $f^{-1}(x) = \dfrac{3x+1}{2-x}$, $x \neq 2$.

</details>

<details>
<summary>Esercizio 3 — Composizione</summary>

Dati $f(x) = \sqrt{x}$ e $g(x) = 1 - x^2$, trovare il dominio di $f \circ g$.

**Soluzione.**

$(f \circ g)(x) = f(g(x)) = \sqrt{1-x^2}$.

Condizione: $1 - x^2 \geq 0 \implies x^2 \leq 1 \implies -1 \leq x \leq 1$.

$D(f \circ g) = [-1, 1]$

</details>
