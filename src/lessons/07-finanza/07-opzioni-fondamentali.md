---
id: finanza-07-opzioni
subject: finanza
topic_it: Derivati
topic_en: Derivatives
title_it: Opzioni finanziarie — fondamentali
title_en: Financial options — fundamentals
level: purple
order: 7
source_book: "J.C. Hull, Options, Futures and Other Derivatives"
source_chapter: "Cap. 1, 9–10 — Opzioni"
---

## Definizione

Un'**opzione** è il diritto (non l'obbligo) di comprare o vendere un asset sottostante a un prezzo prefissato (**strike price** $K$) entro o ad una data prefissata (**scadenza** $T$).

**Call option:** diritto di **acquistare** il sottostante al prezzo $K$.

**Put option:** diritto di **vendere** il sottostante al prezzo $K$.

**Opzione europea:** esercitabile solo a scadenza.

**Opzione americana:** esercitabile in qualsiasi momento fino a scadenza.

## Payoff a scadenza

**Long call:** $\max(S_T-K,\;0)=(S_T-K)^+$

**Long put:** $\max(K-S_T,\;0)=(K-S_T)^+$

**Short call:** $-\max(S_T-K,0)$

**Short put:** $-\max(K-S_T,0)$

## Profilo del profitto (P&L)

Tenendo conto del premio pagato $C$ (o $P$):

**Profitto long call:** $(S_T-K)^+-C$.

**Profitto long put:** $(K-S_T)^+-P$.

## Relazione di parità put-call (europea)

$$C - P = S_0 e^{-qT} - K e^{-rT}$$

dove $q$ è il dividend yield e $r$ il tasso risk-free (con capitalizzazione continua).

Per asset senza dividendi: $C-P=S_0-Ke^{-rT}$.

## Strategie con opzioni

- **Straddle:** long call + long put (stesso $K$, $T$) — scommette sulla volatilità.
- **Bull spread:** long call a basso $K$ + short call ad alto $K$.
- **Protective put:** long asset + long put — assicurazione sul portafoglio.

---

## Esercizi

<details>
<summary>Esercizio 1 — Payoff</summary>

Call europea: $K=100€$, scadenza tra 1 anno. A scadenza: (a) $S_T=115€$, (b) $S_T=90€$.

**Soluzione.**

(a) $\max(115-100,0)=\mathbf{15€}$. L'opzione è "in the money" e conviene esercitarla.

(b) $\max(90-100,0)=\mathbf{0€}$. L'opzione è "out of the money" e non viene esercitata.

</details>

<details>
<summary>Esercizio 2 — Parità put-call</summary>

$S_0=100€$, $K=100€$, $T=1$ anno, $r=5\%$, no dividendi. Una call europea vale €7. Qual è il valore della put?

**Soluzione.**

$C-P=S_0-Ke^{-rT}=100-100e^{-0.05}=100-95.12=4.88€$.

$P=C-4.88=7-4.88=\mathbf{2.12€}$.

</details>

<details>
<summary>Esercizio 3 — Straddle</summary>

Straddle: call e put con $K=50$, premi $C=3€$, $P=2€$. Calcolare i punti di pareggio.

**Soluzione.**

Costo totale: $C+P=5€$.

**Punto di pareggio a sinistra:** $K-5=45€$ (la put compensa il costo).

**Punto di pareggio a destra:** $K+5=55€$ (la call compensa il costo).

Profitto positivo se $S_T<45€$ o $S_T>55€$.

</details>
