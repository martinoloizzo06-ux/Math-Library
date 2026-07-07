---
id: base-23-retta-nel-piano
subject: base
topic_it: Geometria analitica
topic_en: Analytic geometry
title_it: Retta nel piano
title_en: Lines in the plane
level: green
order: 23
source_book: "MIT OCW 18.01 (Precalcolo)"
source_chapter: "Sezione 8 — Rette"
---

## Equazioni della retta

Una **retta** nel piano può essere descritta in vari modi:

**Forma esplicita (o polare):** $y = mx + q$, con pendenza $m$ e intercetta $q$.

**Forma implicita (o generale):** $ax + by + c = 0$ ($a, b$ non entrambi zero).

**Equazione punto-pendenza:** passante per $(x_0, y_0)$ con pendenza $m$:
$$y - y_0 = m(x - x_0)$$

**Equazione per due punti** $(x_1, y_1)$ e $(x_2, y_2)$, $x_1 \neq x_2$:
$$\frac{y - y_1}{x - x_1} = \frac{y_2 - y_1}{x_2 - x_1}$$

**Rette speciali:**
- Verticale: $x = a$ (non ha forma esplicita).
- Orizzontale: $y = b$ ($m = 0$).

## Posizioni reciproche di due rette

Due rette $r_1: a_1x + b_1y + c_1 = 0$ e $r_2: a_2x + b_2y + c_2 = 0$:

- **Parallele:** $\dfrac{a_1}{a_2} = \dfrac{b_1}{b_2} \neq \dfrac{c_1}{c_2}$ (o equivalentemente, stessa pendenza, diversa intercetta).
- **Coincidenti:** $\dfrac{a_1}{a_2} = \dfrac{b_1}{b_2} = \dfrac{c_1}{c_2}$.
- **Incidenti:** non parallele (si incontrano in un punto, trovato risolvendo il sistema).
- **Perpendicolari:** $m_1 m_2 = -1$.

## Fascio di rette

Il **fascio di rette** per il punto $(x_0, y_0)$ è l'insieme di tutte le rette passanti per quel punto:

$$y - y_0 = m(x - x_0), \quad m \in \mathbb{R} \cup \{\infty\}$$

oppure, se si ha un'equazione di una retta del fascio $r$ e si vuole trovare le rette per la stessa intersezione:

$$(a_1x + b_1y + c_1) + \lambda(a_2x + b_2y + c_2) = 0, \quad \lambda \in \mathbb{R}$$

## Distanza punto-retta

$$d(P, r) = \frac{|ax_0 + by_0 + c|}{\sqrt{a^2 + b^2}}$$

---

## Esercizi

<details>
<summary>Esercizio 1 — Retta per due punti</summary>

Trovare l'equazione della retta passante per $A=(-1, 3)$ e $B=(2, -3)$, poi trovare la retta perpendicolare in $B$.

**Soluzione.**

$m = \dfrac{-3-3}{2-(-1)} = \dfrac{-6}{3} = -2$.

Retta: $y - 3 = -2(x+1) \implies y = -2x + 1$.

Retta perpendicolare in $B$: pendenza $m' = 1/2$, passante per $(2,-3)$:

$y + 3 = \tfrac{1}{2}(x-2) \implies y = \tfrac{1}{2}x - 4$.

</details>

<details>
<summary>Esercizio 2 — Distanza</summary>

Trovare la distanza tra le rette parallele $3x - 4y + 1 = 0$ e $3x - 4y - 9 = 0$.

**Soluzione.**

Prendo un punto sulla prima retta, ad esempio $(1, 1)$ (verifico: $3-4+1=0$ ✓).

$$d = \frac{|3(1) - 4(1) - 9|}{\sqrt{9+16}} = \frac{|3-4-9|}{5} = \frac{10}{5} = 2$$

</details>

<details>
<summary>Esercizio 3 — Triangolo e area</summary>

Le rette $r: y = x$, $s: y = -x + 4$, $t: y = 0$ formano un triangolo. Trovarne i vertici e l'area.

**Soluzione.**

$r \cap t$: $x = 0$ → $A = (0,0)$.
$s \cap t$: $0 = -x+4 \implies x=4$ → $B = (4, 0)$.
$r \cap s$: $x = -x+4 \implies x=2, y=2$ → $C = (2,2)$.

Base $AB = 4$, altezza da $C$ a $t$: $h = 2$.

$\text{Area} = \dfrac{1}{2} \cdot 4 \cdot 2 = 4$.

</details>
