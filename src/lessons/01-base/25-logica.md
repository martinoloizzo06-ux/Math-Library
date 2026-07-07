---
id: base-25-logica
subject: base
topic_it: Ragionamento matematico
topic_en: Mathematical reasoning
title_it: Logica di base e connettivi
title_en: Basic logic and connectives
level: green
order: 25
source_book: "MIT OCW 18.01 (Precalcolo)"
source_chapter: "Appendice — Logica e insiemi"
---

## Proposizioni

Una **proposizione** (o enunciato) è un'affermazione che è o vera (V) o falsa (F), ma non entrambe.

Esempi di proposizioni: "3 è un numero primo" (V), "$\sqrt{2}$ è razionale" (F).

Non sono proposizioni: "questa frase è falsa", "quanto fa $x+1$?" (dipende da $x$).

## Connettivi logici

Dati due proposizioni $P$ e $Q$:

| Connettivo | Simbolo | Nome | Vero quando |
|---|---|---|---|
| negazione | $\lnot P$ | NON | $P$ è falsa |
| congiunzione | $P \land Q$ | E | entrambe vere |
| disgiunzione | $P \lor Q$ | O | almeno una vera |
| implicazione | $P \Rightarrow Q$ | SE...ALLORA | mai (V$\Rightarrow$F) |
| doppia implicazione | $P \Leftrightarrow Q$ | SE E SOLO SE | stessa valore di verità |

**Tabella di verità per $P \Rightarrow Q$:**

| $P$ | $Q$ | $P \Rightarrow Q$ |
|---|---|---|
| V | V | V |
| V | F | **F** |
| F | V | V |
| F | F | V |

> L'unico caso in cui "se P allora Q" è falsa: P è vera ma Q è falsa.

## Implicazione e contronominale

$P \Rightarrow Q$ è **logicamente equivalente** alla sua **contronominale** $\lnot Q \Rightarrow \lnot P$.

Non è equivalente alla **conversa** $Q \Rightarrow P$ né alla **inversa** $\lnot P \Rightarrow \lnot Q$.

## Quantificatori

- **Universale** $\forall x$: "per ogni $x$..."
- **Esistenziale** $\exists x$: "esiste un $x$..."

**Negazioni:**
$$\lnot(\forall x, P(x)) \equiv \exists x,\; \lnot P(x)$$
$$\lnot(\exists x, P(x)) \equiv \forall x,\; \lnot P(x)$$

---

## Esercizi

<details>
<summary>Esercizio 1 — Tabelle di verità</summary>

Costruire la tabella di verità di $(P \lor Q) \land \lnot P$.

**Soluzione.**

| $P$ | $Q$ | $P \lor Q$ | $\lnot P$ | $(P\lor Q)\land \lnot P$ |
|---|---|---|---|---|
| V | V | V | F | F |
| V | F | V | F | F |
| F | V | V | V | **V** |
| F | F | F | V | F |

La formula è equivalente a $\lnot P \land Q$.

</details>

<details>
<summary>Esercizio 2 — Contronominale</summary>

Scrivere la contronominale di "Se $n^2$ è pari, allora $n$ è pari."

**Soluzione.**

Contronominale: "Se $n$ è dispari, allora $n^2$ è dispari."

Le due affermazioni sono logicamente equivalenti. Nota: questa è in effetti la strategia usata nella dimostrazione che $\sqrt{2}$ è irrazionale.

</details>

<details>
<summary>Esercizio 3 — Negazione di enunciati quantificati</summary>

Negare: "Tutti i numeri reali hanno una radice quadrata reale."

**Soluzione.**

L'enunciato formale è $\forall x \in \mathbb{R},\; \exists y \in \mathbb{R}: y^2 = x$.

Negazione: $\exists x \in \mathbb{R}: \forall y \in \mathbb{R},\; y^2 \neq x$.

In parole: "Esiste un numero reale che non ha radice quadrata reale." (Vero: ad esempio $x = -1$.)

</details>
