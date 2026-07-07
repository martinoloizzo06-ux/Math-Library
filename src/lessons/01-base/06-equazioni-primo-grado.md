---
id: base-06-equazioni-primo-grado
subject: base
topic_it: Algebra e numeri
topic_en: Algebra and numbers
title_it: Equazioni di primo grado
title_en: Linear equations
level: green
order: 6
source_book: "MIT OCW 18.01 (Precalcolo)"
source_chapter: "Sezione 4 — Equazioni"
---

## Equazioni e principi di equivalenza

Un'**equazione** è un'uguaglianza $A(x) = B(x)$ che si deve verificare per i valori di $x$ detti **soluzioni** (o **radici**). L'insieme di tutte le soluzioni si chiama **insieme soluzione** $S$.

Due equazioni sono **equivalenti** se hanno lo stesso insieme soluzione. I **principi di equivalenza** garantiscono trasformazioni che conservano le soluzioni:

1. **Principio additivo:** aggiungere (o sottrarre) la stessa quantità a entrambi i membri.
2. **Principio moltiplicativo:** moltiplicare (o dividere) entrambi i membri per la stessa quantità **non nulla**.

## Equazione lineare in forma normale

Un'equazione di primo grado in $x$ si riconduce alla forma:

$$ax = b, \quad a \neq 0$$

e ha un'unica soluzione $x = \dfrac{b}{a}$.

Se $a = 0$ e $b = 0$ → identità (infinite soluzioni: $S = \mathbb{R}$).  
Se $a = 0$ e $b \neq 0$ → equazione impossibile ($S = \emptyset$).

## Procedura di risoluzione

1. Eliminare denominatori (moltiplicare per m.c.m.).
2. Espandere le parentesi.
3. Raccogliere i termini in $x$ a sinistra, le costanti a destra.
4. Dividere per il coefficiente di $x$.

**Esempio.** Risolvere $3(x-2) - 2(x+1) = x - 8$.

$$3x - 6 - 2x - 2 = x - 8$$
$$x - 8 = x - 8$$

Sottraendo $x$: $-8 = -8$. Identità → $S = \mathbb{R}$.

**Esempio.** $\dfrac{x}{3} - \dfrac{x-1}{2} = 1$.

m.c.m. = 6. Moltiplico tutto per 6:

$$2x - 3(x-1) = 6 \implies 2x - 3x + 3 = 6 \implies -x = 3 \implies x = -3$$

## Equazioni con parametri

Se l'equazione contiene un parametro $k$, la soluzione dipende dal valore di $k$.

**Esempio.** $kx + 2 = 3x - k$.

$$(k-3)x = -k - 2$$

- Se $k \neq 3$: $x = \dfrac{-k-2}{k-3}$.
- Se $k = 3$: $0 \cdot x = -5$, impossibile ($S = \emptyset$).

---

## Esercizi

<details>
<summary>Esercizio 1 — Equazione con frazioni</summary>

Risolvere $\dfrac{2x-1}{3} - \dfrac{x+2}{4} = \dfrac{1}{6}$.

**Soluzione.**

m.c.m. = 12. Moltiplico per 12:

$$4(2x-1) - 3(x+2) = 2$$
$$8x - 4 - 3x - 6 = 2$$
$$5x - 10 = 2 \implies 5x = 12 \implies x = \frac{12}{5}$$

</details>

<details>
<summary>Esercizio 2 — Identità o impossibile?</summary>

Discutere al variare del parametro $m$: $(m+1)x = m^2 - 1$.

**Soluzione.**

$m^2 - 1 = (m-1)(m+1)$, quindi:

$$(m+1)x = (m-1)(m+1)$$

- Se $m \neq -1$: divido per $(m+1)$ → $x = m - 1$.
- Se $m = -1$: $0 \cdot x = 0$ → identità, $S = \mathbb{R}$.

</details>

<details>
<summary>Esercizio 3 — Problema</summary>

La somma di tre numeri interi consecutivi è 87. Trovare i tre numeri.

**Soluzione.**

Siano $n$, $n+1$, $n+2$ i tre consecutivi.

$$n + (n+1) + (n+2) = 87 \implies 3n + 3 = 87 \implies n = 28$$

I tre numeri sono **28, 29, 30**.

</details>
