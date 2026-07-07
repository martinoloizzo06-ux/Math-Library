---
id: finanza-13-efficienza
subject: finanza
topic_it: Teoria del portafoglio
topic_en: Portfolio theory
title_it: Efficienza dei mercati finanziari
title_en: Efficient market hypothesis
level: purple
order: 13
source_book: "Bodie, Kane & Marcus, Investments"
source_chapter: "Cap. 11 — EMH"
---

## Ipotesi di efficienza del mercato (EMH)

Un mercato è **efficiente** se i prezzi riflettono pienamente tutte le informazioni disponibili.

**Tre forme (Fama, 1970):**

**Forma debole:** i prezzi riflettono tutta la storia passata dei prezzi. L'analisi tecnica non batte il mercato sistematicamente.

**Forma semi-forte:** i prezzi riflettono tutta l'informazione pubblicamente disponibile (bilanci, annunci, notizie). L'analisi fondamentale non batte il mercato sistematicamente.

**Forma forte:** i prezzi riflettono anche l'informazione privata (insider information). Nessuno può battere il mercato — nemmeno gli insider.

## Implicazioni

- In forma debole: i prezzi seguono un **random walk** (con drift).
- I rendimenti non sono prevedibili sistematicamente.
- Il prezzo attuale è la migliore stima del valore dell'asset.
- Fondi a gestione passiva battono sistematicamente quelli attivi (al netto dei costi).

## Test empirici dell'efficienza

**A favore:** la maggior parte dei fondi attivi non batte il benchmark su orizzonti lunghi.

**Contro — anomalie di mercato:**
- **Effect size/value premium:** le small cap e le azioni value tendono a sovraperformare.
- **Momentum:** le azioni che hanno performato bene continuano a farlo nel breve.
- **Calendar effects:** effetto gennaio, effetto fine settimana.

## Finanza comportamentale

Spiega le anomalie con le **euristiche** e i **bias cognitivi** degli investitori:
- **Overconfidence:** eccessiva sicurezza nelle proprie previsioni.
- **Disposition effect:** vendere i vincitori troppo presto, tenere i perdenti.
- **Herding:** seguire la massa.

---

## Esercizi

<details>
<summary>Esercizio 1 — Random walk</summary>

Se il mercato è efficiente in forma debole, la serie dei prezzi è un random walk. Cosa implica per la prevedibilità?

**Soluzione.**

$P_{t+1}=P_t+\varepsilon_{t+1}$ con $\varepsilon_{t+1}$ i.i.d. — il miglior predittore di $P_{t+1}$ è $P_t$, e l'errore di previsione ha varianza costante.

I rendimenti passati non contengono informazione utile per predire i rendimenti futuri — l'analisi tecnica (medie mobili, ecc.) non aggiunge valore.

</details>

<details>
<summary>Esercizio 2 — Anomalia: momentum</summary>

Il momentum suggerisce che le azioni che hanno performato bene negli ultimi 12 mesi continuano a farlo nei 3–12 mesi successivi. Questo è consistente con la EMH?

**Soluzione.**

Il momentum è **inconsistente** con la forma semi-forte dell'EMH: i prezzi storici (pubblici) predicono rendimenti futuri.

Spiegazioni alternative: rischio non misurato dal CAPM; frizioni (costi di transazione, liquidità); behavioral bias (lento aggiustamento alle notizie).

</details>

<details>
<summary>Esercizio 3 — Gestione attiva vs passiva</summary>

Con mercati efficienti, qual è la previsione per la performance dei fondi attivi?

**Soluzione.**

In mercati efficienti: i fondi attivi non possono battere sistematicamente il mercato (al lordo dei costi). Al netto dei costi di gestione più elevati, la performance media è **peggiore** dei fondi passivi.

Questo è il razionale degli ETF e fondi indice: replicare il mercato a costo minimo anziché tentare di batterlo.

</details>
