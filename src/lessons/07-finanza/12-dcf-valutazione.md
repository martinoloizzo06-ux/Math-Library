---
id: finanza-12-dcf
subject: finanza
topic_it: Finanza aziendale
topic_en: Corporate finance
title_it: Valutazione aziendale — DCF e multipli
title_en: Business valuation — DCF and multiples
level: purple
order: 12
source_book: "Bodie, Kane & Marcus, Investments; J.C. Hull, Options, Futures and Other Derivatives"
source_chapter: "Cap. — Valutazione"
---

## 1. Intuizione — analogia concreta

Quanto vale un'azienda? La risposta intuitiva è: quanto denaro potrà generare in futuro, portato al valore di oggi. Un bar che genera €50.000 di utile l'anno vale molto meno di un software company che genera gli stessi €50.000 ma con prospettive di crescita del 30% annuo. Il valore non è lo snapshot di oggi, ma l'aspettativa di tutti i flussi di cassa futuri.

Il **Discounted Cash Flow (DCF)** è la metodologia che formalizza questa intuizione. Si proiettano i flussi di cassa liberi dell'azienda per 5-10 anni, si calcola il **terminal value** (valore di tutto ciò che l'azienda genererà oltre l'orizzonte di previsione), e si attualizza tutto al WACC — il costo medio del capitale. Il risultato è l'Enterprise Value, da cui si sottrae il debito netto per ottenere l'Equity Value (il valore per gli azionisti).

Il problema: il DCF è sensibilissimo alle assunzioni. Un cambiamento di 0.5% nel tasso di crescita perpetua può cambiare la valutazione del 20%. Per questo i professionisti usano i **multipli** (EV/EBITDA, P/E) come sanity check: confrontano l'azienda con aziende simili già quotate o vendute di recente.

Capire il DCF significa capire come le banche d'investimento valutano le aziende nelle IPO, nelle fusioni e acquisizioni, e nel credito. È la metodologia alla base di ogni decisione di investimento professionale.

## 2. Prerequisiti

- Valore attuale netto (VAN/NPV) e attualizzazione
- WACC (lezione precedente)
- Nozioni contabili: EBIT, EBITDA, CapEx, capitale circolante
- Tasso di crescita: aritmetico vs geometrico (CAGR)
- Distribuzione normale e sensitivity analysis (concettualmente)

## 3. Teoria

### Free Cash Flow to Firm (FCFF)

Il **Free Cash Flow to Firm (FCFF)** è il denaro che l'azienda genera dalle operazioni, disponibile per remunerare sia gli azionisti che i creditori, dopo aver coperto gli investimenti necessari per mantenere e far crescere il business.

$$\text{FCFF} = \text{EBIT}(1-t) + \text{Ammortamenti} - \Delta\text{CWC} - \text{CapEx}$$

dove:
- **EBIT** (Earnings Before Interest and Taxes): utile operativo prima degli interessi e delle tasse. Moltiplicato per $(1-t)$ per ottenere l'utile operativo netto (NOPAT).
- **Ammortamenti** ($D\&A$): costi non monetari da re-aggiungere perché non comportano uscite di cassa.
- **$\Delta$CWC** (variazione del Capitale Circolante Netto): un aumento del CCN (es. più crediti verso clienti, meno debiti verso fornitori) assorbe cassa — va sottratto. Un calo del CCN libera cassa.
- **CapEx** (Capital Expenditure): investimenti in immobilizzazioni materiali e immateriali — uscite di cassa per mantenere e accrescere la capacità produttiva.

**Nota:** il FCFF non include gli interessi (già in EBIT) né le variazioni del debito — sono flussi per i finanziatori, gestiti dal WACC.

**FCFE (Free Cash Flow to Equity):** il flusso di cassa disponibile solo per gli azionisti:

$$\text{FCFE} = \text{FCFF} - \text{Interessi} \times (1-t) + \Delta\text{Debito netto}$$

Il FCFE si attualizza al costo dell'equity $r_e$ (non al WACC) per ottenere direttamente l'Equity Value.

### Modello DCF

Il valore dell'impresa è la somma dei valori attuali dei FCFF futuri:

$$V_0 = \sum_{t=1}^{T} \frac{\text{FCFF}_t}{(1+\text{WACC})^t} + \frac{TV}{(1+\text{WACC})^T}$$

Il **Terminal Value (TV)** cattura il valore dell'azienda oltre l'orizzonte esplicito di previsione $T$.

**Metodo 1 — Gordon Growth Model (crescita perpetua):**

$$TV = \frac{\text{FCFF}_{T+1}}{\text{WACC} - g}$$

dove $g$ è il tasso di crescita perpetua dei flussi di cassa. Per essere credibile, $g$ dovrebbe essere $\leq$ la crescita nominale del PIL del paese (tipicamente 2-4% nelle economie sviluppate). Se $g \geq \text{WACC}$, il valore è infinito — matematicamente impossibile.

**Metodo 2 — Exit Multiple:**

$$TV = \text{EBITDA}_T \times \text{EV/EBITDA}_{exit}$$

Il multiplo di uscita (es. 8x) è scelto guardando le transazioni comparabili nel settore. Questo metodo è circolare (si usa un multiplo per calcolare il TV, che poi viene confrontato con i multipli), ma è molto usato nella pratica.

**Importanza del TV:** tipicamente il terminal value rappresenta il 60-80% del valore totale in un DCF con orizzonte di 5-10 anni. Questo rende la valutazione estremamente sensibile alle assunzioni su $g$ e WACC.

### Enterprise Value vs Equity Value

$$\text{Enterprise Value (EV)} = \text{Capitalizzazione} + \text{Debito netto} - \text{Liquidità}$$

$$\text{Equity Value} = \text{EV} - \text{Debito netto}$$

$$\text{Debito netto} = \text{Debito finanziario} - \text{Liquidità e titoli negoziabili}$$

Il DCF sui FCFF dà direttamente l'Enterprise Value (EV) — il valore per tutti i finanziatori. Per ottenere l'Equity Value (il prezzo delle azioni) si sottrae il debito netto.

**Esempio:** $EV = €500M$, debito $= €150M$, cassa $= €30M$. Debito netto $= €120M$. Equity Value $= 500 - 120 = €380M$. Se ci sono 10 milioni di azioni: prezzo per azione $= €38$.

### Metodo dei Multipli

Il metodo dei multipli (o comparable company analysis) valuta l'azienda target applicando moltiplicatori di mercato osservati da aziende comparabili ("comps").

**Multipli principali:**

| Multiplo | Formula | Nota |
| --- | --- | --- |
| EV/EBITDA | $EV / \text{EBITDA}$ | Capitale e struttura-neutro, settore-specifico |
| EV/EBIT | $EV / \text{EBIT}$ | Include ammortamenti |
| EV/Ricavi | $EV / \text{Ricavi}$ | Usato per aziende in perdita (startup) |
| P/E | $\text{Prezzo} / \text{EPS}$ | Equity multiple, dipende dalla leva |
| P/B | $\text{Prezzo} / \text{Book Value per azione}$ | Usato per banche e assicurazioni |

**Procedura:** identificare un campione di aziende quotate comparabili (stesso settore, dimensione simile, mercati geografici simili) → calcolare i loro multipli → calcolare la mediana → applicare alla target.

**Limitation:** i multipli possono essere distorti da differenze di leva, tasso di crescita, profilo di rischio, qualità del management. È un'analisi "relativa" — se l'intero settore è sopravvalutato, anche la target lo sarà.

### Sensitivity Analysis

Data la sensibilità del DCF alle assunzioni, è prassi presentare una **sensitivity table** con i valori dell'EV al variare di due parametri chiave (tipicamente WACC e $g$):

$$\text{Sensitivity}(g, \text{WACC}) = V_U(g, \text{WACC}) = \sum_t \frac{FCFF_t}{(1+WACC)^t} + \frac{FCFF_{T+1}}{(\text{WACC}-g)(1+WACC)^T}$$

Questo permette di comunicare la range di valori plausibili e identificare le assunzioni più critiche.

## 4. Derivazioni

### Derivazione del Terminal Value (Gordon)

Il TV è il valore a tempo $T$ di tutti i flussi di cassa futuri $\text{FCFF}_{T+k}$ per $k = 1, 2, \ldots, \infty$, assumendo crescita costante a tasso $g$:

$$TV = \sum_{k=1}^{\infty} \frac{\text{FCFF}_{T+k}}{(1+\text{WACC})^k} = \sum_{k=1}^{\infty} \frac{\text{FCFF}_{T+1}(1+g)^{k-1}}{(1+\text{WACC})^k}$$

$$= \frac{\text{FCFF}_{T+1}}{1+\text{WACC}} \sum_{k=0}^{\infty} \left(\frac{1+g}{1+\text{WACC}}\right)^k = \frac{\text{FCFF}_{T+1}}{1+\text{WACC}} \times \frac{1}{1 - \frac{1+g}{1+\text{WACC}}}$$

$$= \frac{\text{FCFF}_{T+1}}{1+\text{WACC}} \times \frac{1+\text{WACC}}{\text{WACC} - g} = \boxed{\frac{\text{FCFF}_{T+1}}{\text{WACC} - g}}$$

La serie geometrica converge solo se $g < \text{WACC}$ — questa condizione è necessaria per la coerenza del modello.

### Il modello P/E e la crescita implicita

Il P/E può essere ricondotto al Gordon model. Per un'azienda che distribuisce una quota $p$ degli utili (payout ratio) e reinveste il resto a un ROE:

$$\frac{P}{E} = \frac{p}{r_e - g}$$

dove $g = ROE \times (1-p)$ (tasso di crescita sostenibile). Un P/E di 20 con $r_e = 8\%$ implica:

$$20 = \frac{p}{0.08 - g} \implies 0.08 - g = p/20 \implies g = 0.08 - p/20$$

Per $p = 0.5$: $g = 0.08 - 0.025 = 5.5\%$ — la crescita implicita richiesta per giustificare il P/E di 20.

## 5. Esempi

**Esempio 1 — FCFF da dati contabili**

Conto economico di Alfa Spa (in M€):

| Voce | Valore |
| --- | --- |
| Ricavi | 200 |
| EBITDA | 40 |
| Ammortamenti ($D\&A$) | 10 |
| EBIT | 30 |
| Aliquota $t$ | 27% |
| CapEx | 15 |
| $\Delta$CWC | 5 (aumento) |

$\text{FCFF} = 30 \times (1 - 0.27) + 10 - 5 - 15 = 21.9 + 10 - 5 - 15 = \mathbf{€11.9M}$

---

**Esempio 2 — Terminal Value**

WACC $= 9\%$, $g = 3\%$, FCFF all'anno $T+1 = €50M$.

$TV = \frac{50}{0.09 - 0.03} = \frac{50}{0.06} = \mathbf{€833.3M}$

Se $g$ sale a 4%: $TV = 50/0.05 = €1.000M$ (+20%). Se $g$ scende a 2%: $TV = 50/0.07 = €714M$ (-14.3%). La sensibilità è enorme.

---

**Esempio 3 — DCF completo a 3 anni**

WACC $= 8\%$. FCFF: €30M (anno 1), €35M (anno 2), €40M (anno 3). TV (a fine anno 3): €400M.

$V_0 = \frac{30}{1.08} + \frac{35}{1.08^2} + \frac{40 + 400}{1.08^3}$
$= 27.78 + 29.98 + 349.26 = \mathbf{€407.02M}$

Il TV attualizzato ($349.26M$) rappresenta l'85.8% del valore totale.

---

**Esempio 4 — Dal DCF all'Equity Value per azione**

$V_0 = EV = €407M$, debito $= €100M$, cassa $= €20M$. Debito netto $= €80M$.

$\text{Equity Value} = 407 - 80 = €327M$

Con 50 milioni di azioni: **prezzo per azione = €6.54**

Se il titolo quota €5.80 in borsa, il DCF suggerisce che è sottovalutato del 12.8% — potenziale opportunità di investimento.

---

**Esempio 5 — Sensitivity analysis (tabella)**

DCF con FCFF stabilizzato a €50M al T+1. EV variando WACC e $g$:

| WACC \ g | 2% | 3% | 4% |
| --- | --- | --- | --- |
| 7% | 1.000 | 1.250 | 1.667 |
| 8% | 833 | 1.000 | 1.250 |
| 9% | 714 | 833 | 1.000 |
| 10% | 625 | 714 | 833 |

Tutti i valori in M€ (solo TV, no flussi di cassa espliciti). La cella di intersezione (WACC 8%, $g$ 3%) dà la valutazione "base case". La diagonale superiore destra dà i valori ottimistici, quella inferiore sinistra quelli pessimistici.

---

**Esempio 6 — Valutazione con i multipli**

Azienda target: EBITDA $= €25M$, debito netto $= €60M$.

Multipli del settore (5 comparabili quotate):

| Comparabile | EV/EBITDA |
| --- | --- |
| Alpha Corp | 7.5x |
| Beta Spa | 8.2x |
| Gamma AG | 8.8x |
| Delta Ltd | 7.9x |
| Epsilon Plc | 9.1x |

Mediana: $8.2x$.

$EV_{\text{target}} = 8.2 \times 25 = €205M$

$\text{Equity Value} = 205 - 60 = \mathbf{€145M}$

Se invece si usa la media ($8.3x$): $EV = 207.5M$, Equity $= €147.5M$. Differenza di €2.5M — per questo si usa la mediana (meno sensibile agli outlier).

---

**Esempio 7 — Confronto DCF vs multipli**

Una società mid-cap produce impianti di energia solare. DCF dà EV $= €300M$; multipli EV/EBITDA di settore danno EV $= €240M$.

Il gap del 25% può dipendere da:
- DCF assume crescita del 5% perpetua, che il mercato non paga ancora per aziende simili.
- Il settore delle rinnovabili è depresso (bear market) — i multipli underprezzano.
- Il DCF usa assunzioni ottimistiche — controllare $g$, WACC, proiezioni FCFF.

La pratica professionale è presentare entrambe le metodologie in un "football field" chart — il range di valori è più informativo del singolo punto.

## 6. Grafico

```plot
{"fn":"50/(x-0.03)","fn2":"50/(x-0.05)","domain":[0.06,0.15],"yDomain":[0,2000],"title":"Terminal Value al variare del WACC (g=3% in blu, g=5% in rosso)","label1":"TV con g=3%","label2":"TV con g=5%","color":"steelblue","color2":"tomato","xLabel":"WACC","yLabel":"TV (M€)"}
```

## 7. Interattivo

```slider
{"fn":"fcff/(wacc/100 - g/100)","domain":[0,10],"yDomain":[0,3000],"params":[{"name":"fcff","min":10,"max":200,"step":10,"default":50},{"name":"wacc","min":5,"max":15,"step":1,"default":8},{"name":"g","min":1,"max":6,"step":1,"default":3}],"title":"Terminal Value (Gordon) al variare di FCFF, WACC e g"}
```

## 8. Errori comuni

**Errore 1 — Usare l'utile netto invece del FCFF.**
L'utile netto include gli interessi (già nel WACC), gli ammortamenti (non cassa) e non include gli investimenti (CapEx). Si deve partire dall'EBIT netto di tasse, aggiungere $D\&A$, sottrarre CapEx e $\Delta$CWC. Confondere utile netto con flusso di cassa porta a valutazioni sistematicamente errate.

**Errore 2 — Assumere $g \geq \text{WACC}$ nel terminal value.**
Se $g \geq \text{WACC}$, il denominatore $\text{WACC} - g \leq 0$ e la formula di Gordon dà un valore negativo o infinito. Non ha senso economico un'azienda che cresce per sempre più dell'economia — $g$ deve essere strettamente minore del WACC.

**Errore 3 — Non sincronizzare FCFF e TV.**
Il TV è calcolato come $\text{FCFF}_{T+1} / (\text{WACC} - g)$ — il flusso è quello dell'anno $T+1$, non dell'anno $T$. Poi si attualizza il TV da $T$ a oggi: $TV / (1+WACC)^T$. Molti studenti dimentica di attualizzare il TV o usano $\text{FCFF}_T$ invece di $\text{FCFF}_{T+1}$.

**Errore 4 — Confondere EV e Equity Value.**
Il DCF sui FCFF dà l'Enterprise Value — il valore per tutti i finanziatori (debt + equity). L'Equity Value si ottiene sottraendo il debito netto. Un errore frequente è interpretare l'EV come il "valore delle azioni" — capita che l'EV sia positivo ma l'Equity Value sia negativo (azienda con debito netto superiore all'EV — in questo caso l'equity vale zero, non un valore negativo).

**Errore 5 — Usare il P/E per aziende ad alta leva.**
Il P/E dipende dalla struttura del capitale (gli interessi riducono l'utile). Confrontare il P/E di un'azienda con debito netto zero con quello di un'azienda levered non è corretto. Meglio usare EV/EBIT o EV/EBITDA che sono indipendenti dalla struttura del capitale.

**Errore 6 — Doppio conteggio del tax shield nel DCF.**
Se si usa il WACC come tasso di attualizzazione (che include già il beneficio fiscale del debito attraverso il termine $r_d(1-t)$), non si deve aggiungere separatamente il valore dello scudo fiscale. Alternativa corretta: APV = attualizza al $r_U$ (unlevered) + aggiungi $PV(\text{tax shield})$ separatamente.

**Errore 7 — Considerare il terminal value come accessorio.**
In molte valutazioni, il TV è il 70-80% del valore totale. Non è un "dettaglio" — è il cuore del modello. Trascurare la sensitivity analysis del TV è il principale errore di comunicazione in un pitch professionale.

## 9. Applicazioni reali

**M&A (fusioni e acquisizioni):** la banca d'investimento advisor in un'operazione di M&A costruisce un DCF della target per determinare il "fundamental value" e giustificare il prezzo offerto. Il DCF è il "fairness opinion" presentato al board e agli azionisti per approvare l'operazione. I multipli EV/EBITDA e P/E delle transazioni comparabili forniscono il benchmark.

**IPO (Initial Public Offering):** nella valutazione per un'IPO, l'investment bank costruisce un DCF dell'azienda e poi confronta i multipli impliciti con quelli di aziende già quotate nel settore. Il prezzo di collocamento viene fissato per lasciare un "IPO discount" di circa il 10-15% rispetto al fair value stimato — attraente per gli investitori che vogliono una "pop" nel primo giorno di trading.

**Private equity:** un fondo di PE valuta la target con un DCF levered (usando l'LBO model), proiettando i flussi di cassa per 5 anni, stimando il TV come multiplo dell'EBITDA exit, e calcolando il IRR (Internal Rate of Return) dell'investimento. Il target IRR è tipicamente 20-25%. Se il DCF implica un IRR inferiore al target, l'acquisizione non è attraente.

**Analisi di credito:** le banche e le agenzie di rating usano varianti del DCF per valutare la capacità di rimborso del debito. Il rapporto Debito netto / EBITDA (leverage ratio) e il rapporto EBIT / Interessi (interest coverage) sintetizzano la liquidità del debitore — sono i principali covenant nei contratti di finanziamento.

## 10. Riepilogo

| Concetto | Formula | Note |
| --- | --- | --- |
| FCFF | $\text{EBIT}(1-t) + D\&A - \Delta CWC - CapEx$ | Flusso per tutti i finanziatori |
| FCFE | $\text{FCFF} - \text{Interessi}(1-t) + \Delta D$ | Flusso solo per azionisti |
| Enterprise Value DCF | $\sum \frac{FCFF_t}{(1+WACC)^t} + \frac{TV}{(1+WACC)^T}$ | Attualizzare al WACC |
| Terminal Value (Gordon) | $\frac{FCFF_{T+1}}{WACC - g}$ | Richiede $g < WACC$ |
| Terminal Value (multiplo) | $EBITDA_T \times EV/EBITDA_{exit}$ | Metodo alternativo |
| Equity Value | $EV - \text{Debito netto}$ | Dopo il DCF |
| EV/EBITDA | $EV / EBITDA$ | Multiplo principale M&A |
| Prezzo per azione | $\text{Equity Value} / \text{Azioni}$ | Ultimo step |

## 11. Esercizi

<details>
<summary>Esercizio 1: Calcolo del FCFF</summary>

Beta Spa, anno 2024 (dati in M€): EBIT $= 60$, aliquota $t = 24\%$, ammortamenti $= 12$, CapEx $= 18$, variazione CCN $= +4$ (aumento).

Calcola il FCFF.

**Soluzione:**

$\text{FCFF} = 60 \times (1-0.24) + 12 - 4 - 18$
$= 45.6 + 12 - 4 - 18 = \mathbf{€35.6M}$

Nota: la variazione CCN positiva (aumento dei crediti/magazzino o calo dei debiti) assorbe cassa e va sottratta. Un azienda che cresce rapidamente spesso vede il CCN crescere — consuma cassa anche se è redditizia.

</details>

<details>
<summary>Esercizio 2: Terminal Value con Gordon Growth Model</summary>

FCFF all'anno $T+1 = €40M$, WACC $= 9\%$, $g = 3.5\%$.

(a) Calcola TV.
(b) Calcola TV se $g$ scende a 2.5%.
(c) Commenta la variazione percentuale.

**Soluzione:**

(a) $TV = \frac{40}{0.09 - 0.035} = \frac{40}{0.055} = \mathbf{€727.3M}$

(b) $TV = \frac{40}{0.09 - 0.025} = \frac{40}{0.065} = \mathbf{€615.4M}$

(c) Variazione: $(615.4 - 727.3)/727.3 = -15.4\%$. Un calo di soli 100 bps nel tasso di crescita riduce il TV del 15.4%. Questo illustra la straordinaria sensibilità del terminal value — l'assunzione di $g$ è la più critica nell'intero modello.

</details>

<details>
<summary>Esercizio 3: DCF completo a 5 anni</summary>

WACC $= 10\%$. Proiezione FCFF (M€):

| Anno | FCFF |
| --- | --- |
| 1 | 20 |
| 2 | 25 |
| 3 | 30 |
| 4 | 35 |
| 5 | 40 |

Dopo l'anno 5: crescita perpetua $g = 3\%$.

Calcola EV totale e la quota del TV.

**Soluzione:**

TV (fine anno 5): $\frac{40 \times 1.03}{0.10 - 0.03} = \frac{41.2}{0.07} = €588.6M$

| Anno | FCFF | Fattore | PV |
| --- | --- | --- | --- |
| 1 | 20 | $1/1.10^1 = 0.909$ | 18.18 |
| 2 | 25 | $1/1.10^2 = 0.826$ | 20.66 |
| 3 | 30 | $1/1.10^3 = 0.751$ | 22.54 |
| 4 | 35 | $1/1.10^4 = 0.683$ | 23.91 |
| 5 | 40 | $1/1.10^5 = 0.621$ | 24.83 |
| TV | 588.6 | $0.621$ | 365.5 |

$EV = 18.18 + 20.66 + 22.54 + 23.91 + 24.83 + 365.5 = \mathbf{€475.6M}$

TV / EV $= 365.5 / 475.6 = 76.8\%$ — il TV rappresenta i tre quarti del valore!

</details>

<details>
<summary>Esercizio 4: Dal DCF al prezzo per azione</summary>

Dal DCF ottieni $EV = €350M$. L'azienda ha: debito bancario $= €100M$, obbligazioni $= €50M$, cassa $= €25M$, titoli negoziabili $= €10M$. Azioni in circolazione: 25 milioni.

Calcola: (a) debito netto, (b) Equity Value, (c) prezzo per azione.

**Soluzione:**

(a) Debito netto $= (100 + 50) - (25 + 10) = 150 - 35 = \mathbf{€115M}$

(b) Equity Value $= EV - \text{Debito netto} = 350 - 115 = \mathbf{€235M}$

(c) Prezzo per azione $= 235M / 25M = \mathbf{€9.40}$

Se il titolo quota €8.50 in borsa: upside $= (9.40 - 8.50)/8.50 = 10.6\%$ — potenziale di rialzo secondo la valutazione DCF.

</details>

<details>
<summary>Esercizio 5: Valutazione con multipli e confronto DCF</summary>

Target: EBITDA $= €30M$, debito netto $= €80M$.

Multipli EV/EBITDA di 4 comparabili: 7.2x, 8.5x, 7.8x, 9.0x.

Il DCF della target ha dato EV $= €280M$.

Calcola: (a) EV con multipli (mediana), (b) Equity Value con multipli, (c) confronto con DCF.

**Soluzione:**

(a) Ordinando i multipli: 7.2, 7.8, 8.5, 9.0. Mediana $= (7.8 + 8.5)/2 = 8.15x$.
$EV_{\text{multipli}} = 8.15 \times 30 = \mathbf{€244.5M}$

(b) Equity Value multipli $= 244.5 - 80 = \mathbf{€164.5M}$

(c) Il DCF dà EV = €280M, i multipli danno €244.5M — differenza del 14.5%. Possibili spiegazioni: la target cresce più velocemente delle comparabili (giustificherebbe un multiplo premium nel DCF), oppure il DCF usa assunzioni ottimistiche di crescita. In un'analisi professionale si mostrerebbe il "football field" con entrambe le stime.

</details>

<details>
<summary>Esercizio 6: Sensitivity analysis del terminal value</summary>

Base case: FCFF al T+1 = €60M. Costruisci la tabella di sensitivity dell'EV (TV only, in M€) per WACC $\in \{7\%, 8\%, 9\%, 10\%\}$ e $g \in \{2\%, 3\%, 4\%\}$.

**Soluzione:**

$TV(WACC, g) = 60 / (WACC - g)$

| WACC \ g | 2% | 3% | 4% |
| --- | --- | --- | --- |
| 7% | 1.200 | 1.500 | 3.000 |
| 8% | 833 | 1.000 | 1.500 |
| 9% | 714 | 857 | 1.200 |
| 10% | 625 | 750 | 1.000 |

Osservazione: il valore va da un minimo di €625M (WACC 10%, $g$ 2%) a un massimo di €3.000M (WACC 7%, $g$ 4%) — un range di quasi 5x. Questa volatilità riflette l'incertezza intrinseca nelle assunzioni a lungo termine e giustifica la necessity di presentare sempre una sensitivity analysis accanto al base case.

</details>
