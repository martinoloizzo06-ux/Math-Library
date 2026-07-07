---
id: analisi-01-limite-intuitivo
subject: analisi
topic_it: Limiti e continuità
topic_en: Limits and continuity
title_it: Concetto di limite e definizione intuitiva
title_en: The concept of limit — intuitive approach
level: blue
order: 1
source_book: "J. Stewart, Calculus; MIT OCW 18.01"
source_chapter: "Cap. 2 — Limiti"
---

## L'idea di limite

Il **limite** descrive il comportamento di una funzione $f(x)$ quando $x$ si avvicina a un valore $a$, senza necessariamente arrivarci.

Scriviamo:

$$\lim_{x \to a} f(x) = L$$

per dire: "al tendere di $x$ ad $a$, $f(x)$ si avvicina arbitrariamente a $L$."

Questa nozione è fondamentale: permette di studiare funzioni dove una sostituzione diretta sarebbe impossibile (divisione per zero, forme indeterminate, comportamento all'infinito).

## Limiti da sinistra e da destra

Il **limite sinistro** $\displaystyle\lim_{x \to a^-} f(x) = L^-$: $x$ si avvicina ad $a$ restando minore di $a$.

Il **limite destro** $\displaystyle\lim_{x \to a^+} f(x) = L^+$: $x$ si avvicina ad $a$ restando maggiore di $a$.

Il limite $\displaystyle\lim_{x \to a} f(x)$ esiste (e vale $L$) se e solo se:

$$\lim_{x \to a^-} f(x) = \lim_{x \to a^+} f(x) = L$$

**Esempio.** Sia $f(x) = |x|/x$ (segno di $x$). Allora $\displaystyle\lim_{x\to 0^-}f(x)=-1$ e $\displaystyle\lim_{x\to 0^+}f(x)=1$: il limite in $0$ non esiste.

## Limiti all'infinito

$$\lim_{x\to +\infty} f(x) = L \quad \text{significa che } f(x) \to L \text{ per } x \text{ grande positivo}$$

Se $L$ è finito, la retta $y=L$ è un **asintoto orizzontale**.

Se invece $\displaystyle\lim_{x\to a}f(x) = \pm\infty$, la retta $x=a$ è un **asintoto verticale**.

## Calcolo intuitivo di limiti semplici

Per funzioni continue nel punto (polinomi, razionali con denominatore non nullo) si può **sostituire direttamente**:

$$\lim_{x\to 2}(3x^2-x+1) = 12 - 2 + 1 = 11$$

Quando la sostituzione dà la forma $0/0$, occorre semplificare:

$$\lim_{x\to 3}\frac{x^2-9}{x-3} = \lim_{x\to 3}\frac{(x-3)(x+3)}{x-3} = \lim_{x\to 3}(x+3) = 6$$

---

## Esercizi

<details>
<summary>Esercizio 1 — Limiti di polinomi e razionali</summary>

Calcolare: (a) $\displaystyle\lim_{x\to -1}(x^3+2x-1)$ &ensp; (b) $\displaystyle\lim_{x\to 2}\frac{x^2-4}{x^2-3x+2}$

**Soluzione.**

(a) Sostituzione diretta: $(-1)^3 + 2(-1) - 1 = -1 -2 -1 = -4$.

(b) Forma $0/0$. Scomponiamo: $\dfrac{(x-2)(x+2)}{(x-2)(x-1)} = \dfrac{x+2}{x-1}$. Per $x\to 2$: $\dfrac{4}{1} = 4$.

</details>

<details>
<summary>Esercizio 2 — Limiti da sinistra e destra</summary>

Per $f(x) = \dfrac{|x-1|}{x-1}$, trovare i limiti da sinistra e destra in $x=1$ e stabilire se il limite esiste.

**Soluzione.**

Per $x > 1$: $|x-1| = x-1$, quindi $f(x) = 1$. Limite destro = $1$.

Per $x < 1$: $|x-1| = -(x-1)$, quindi $f(x) = -1$. Limite sinistro = $-1$.

Limiti diversi → **il limite non esiste** in $x=1$.

</details>

<details>
<summary>Esercizio 3 — Limiti all'infinito</summary>

Calcolare $\displaystyle\lim_{x\to+\infty}\frac{3x^2-x+2}{x^2+5}$.

**Soluzione.**

Dividere numeratore e denominatore per $x^2$:

$$\frac{3 - 1/x + 2/x^2}{1 + 5/x^2} \xrightarrow{x\to+\infty} \frac{3}{1} = 3$$

L'asintoto orizzontale è $y=3$.

</details>
