---
id: base-09-valore-assoluto
subject: base
topic_it: Algebra e numeri
topic_en: Algebra and numbers
title_it: Valore assoluto
title_en: Absolute value
level: green
order: 9
source_book: "MIT OCW 18.01 (Precalcolo)"
source_chapter: "Sezione 4 — Valore assoluto"
---

## Definizione

Il **valore assoluto** (o modulo) di un numero reale $x$ è:

$$|x| = \begin{cases} x & \text{se } x \geq 0 \\ -x & \text{se } x < 0 \end{cases}$$

Geometricamente, $|x|$ è la **distanza** di $x$ dall'origine sulla retta numerica. Più in generale, $|x - a|$ è la distanza tra $x$ e $a$.

## Proprietà fondamentali

Per ogni $a, b \in \mathbb{R}$:

| Proprietà | Formula |
|---|---|
| Non negatività | $|a| \geq 0$, con uguaglianza iff $a=0$ |
| Simmetria | $|-a| = |a|$ |
| Prodotto | $|ab| = |a|\cdot|b|$ |
| Quoziente | $\left|\dfrac{a}{b}\right| = \dfrac{|a|}{|b|}$, $b \neq 0$ |
| Disuguaglianza triangolare | $|a + b| \leq |a| + |b|$ |

## Equazioni con valore assoluto

**Principio:** $|A| = k$ con $k \geq 0$ equivale a $A = k$ oppure $A = -k$.

**Esempio.** $|2x - 3| = 5$:

$$2x - 3 = 5 \implies x = 4 \qquad \text{oppure} \qquad 2x - 3 = -5 \implies x = -1$$

**Equazione $|A| = |B|$:** equivale a $A = B$ oppure $A = -B$.

## Disequazioni con valore assoluto

Le due disequazioni fondamentali:

$$|x| < k \iff -k < x < k \qquad (k > 0)$$
$$|x| > k \iff x < -k \text{ oppure } x > k \qquad (k > 0)$$

Mnemonico: $|x| < k$ → **dentro** l'intervallo; $|x| > k$ → **fuori** dall'intervallo.

**Esempio.** $|3x - 1| \leq 4$:

$$-4 \leq 3x - 1 \leq 4 \implies -3 \leq 3x \leq 5 \implies -1 \leq x \leq \frac{5}{3}$$

**Esempio.** $|x + 2| > 3$:

$$x + 2 < -3 \implies x < -5 \qquad \text{oppure} \qquad x + 2 > 3 \implies x > 1$$

---

## Esercizi

<details>
<summary>Esercizio 1 — Equazione</summary>

Risolvere $|x^2 - 4| = 5$.

**Soluzione.**

Caso 1: $x^2 - 4 = 5 \implies x^2 = 9 \implies x = \pm 3$.

Caso 2: $x^2 - 4 = -5 \implies x^2 = -1$. Nessuna soluzione reale.

$S = \{-3, 3\}$

</details>

<details>
<summary>Esercizio 2 — Disequazione</summary>

Risolvere $|2x + 1| \geq |x - 2|$.

**Soluzione.**

Si eleva al quadrato (entrambi i membri sono non negativi):

$$(2x+1)^2 \geq (x-2)^2$$
$$4x^2 + 4x + 1 \geq x^2 - 4x + 4$$
$$3x^2 + 8x - 3 \geq 0$$

Radici: $x = \dfrac{-8 \pm \sqrt{64+36}}{6} = \dfrac{-8 \pm 10}{6}$, cioè $x = \dfrac{1}{3}$ e $x = -3$.

Segno positivo fuori: $S = \left(-\infty, -3\right] \cup \left[\dfrac{1}{3}, +\infty\right)$.

</details>

<details>
<summary>Esercizio 3 — Interpretazione geometrica</summary>

Trovare tutti i punti $x$ sulla retta reale la cui distanza da 1 è minore o uguale a 3.

**Soluzione.**

La condizione è $|x - 1| \leq 3$:

$$-3 \leq x - 1 \leq 3 \implies -2 \leq x \leq 4$$

I punti cercati formano l'intervallo $[-2, 4]$, cioè il segmento centrato in 1 con raggio 3.

</details>
