---
id: finanza-09-futures
subject: finanza
topic_it: Derivati
topic_en: Derivatives
title_it: Futures e contratti forward
title_en: Futures and forward contracts
level: purple
order: 9
source_book: "J.C. Hull, Options, Futures and Other Derivatives"
source_chapter: "Cap. 2–5 — Futures e forward"
---

## Contratto forward

Un **forward** è un accordo per acquistare o vendere un asset:
- A un **prezzo forward** $F_0$ concordato oggi.
- Ad una **data futura** $T$.
- Nessun pagamento iniziale.

**Long forward:** profitto = $S_T-F_0$ (guadagna se il prezzo sale).

**Short forward:** profitto = $F_0-S_T$ (guadagna se il prezzo scende).

## Prezzi forward — pricing

Per un asset che non paga dividendi:

$$F_0 = S_0\,e^{rT}$$

**Intuizione:** comprare forward è equivalente a comprare l'asset oggi e tenerlo fino a $T$ (costo carry: $r$).

Per asset con dividend yield $q$: $F_0=S_0\,e^{(r-q)T}$.

Per asset con costi di storage $u$: $F_0=S_0\,e^{(r+u)T}$.

## Contratto futures

Simile al forward, ma:
- **Standardizzato** e negoziato su borsa.
- **Mark-to-market** giornaliero: i profitti/perdite sono liquidati ogni giorno.
- **Margine**: deposito iniziale a garanzia.

## Futures su tassi di interesse

**Eurodollar futures:** su LIBOR a 3 mesi.

**Treasury bond futures:** consegna di obbligazioni governative a lunga scadenza.

## Copertura con futures (hedging)

**Ratio di copertura ottimale:**

$$h^* = \rho_{SF}\frac{\sigma_S}{\sigma_F}$$

dove $S$ = asset da coprire, $F$ = futures.

---

## Esercizi

<details>
<summary>Esercizio 1 — Prezzo forward</summary>

Un'azione vale $S_0=50€$, $r=4\%$, nessun dividendo. Calcolare $F_0$ con scadenza $T=6$ mesi.

**Soluzione.**

$F_0=50\,e^{0.04\cdot0.5}=50\,e^{0.02}=50\cdot1.0202=\mathbf{51.01€}$.

Se il forward venisse prezzato a €53: arbitraggio (comprare l'azione, vendere il forward, guadagnare €1.99 senza rischio).

</details>

<details>
<summary>Esercizio 2 — Profitto forward</summary>

Si entra long in un forward su oro a $F_0=1500€/\text{oz}$. A scadenza $S_T=1550€$. Profitto?

**Soluzione.**

Profitto = $S_T-F_0=1550-1500=\mathbf{50€/oz}$.

Se fosse $S_T=1450$: perdita di 50€/oz. Il forward è un contratto simmetrico — profitti e perdite illimitati.

</details>

<details>
<summary>Esercizio 3 — Hedging</summary>

Una compagnia aerea deve acquistare 1000 barili di jet fuel tra 3 mesi. Come coprirsi con futures sul petrolio?

**Soluzione.**

Aprire una **posizione long** di 1000 barili in futures sul petrolio (o jet fuel, se disponibili).

Se il prezzo sale: perdita sull'acquisto fisico, profitto sui futures → copertura.

Se il prezzo scende: guadagno sull'acquisto fisico, perdita sui futures → il costo finale è fissato.

La copertura elimina il rischio di prezzo ma anche i potenziali guadagni da eventuali cali.

</details>
