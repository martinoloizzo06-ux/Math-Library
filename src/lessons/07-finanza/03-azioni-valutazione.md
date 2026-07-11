---
id: finanza-03-azioni
subject: finanza
topic_it: Strumenti finanziari
topic_en: Financial instruments
title_it: Azioni e modelli di valutazione
title_en: Stocks and valuation models
level: purple
order: 3
source_book: "Bodie, Kane & Marcus, Investments; J.C. Hull, Options, Futures and Other Derivatives"
source_chapter: "Cap. 18 — Azioni"
stato: da-rielaborare
---

## 1. Intuizione — analogia concreta

Comprare un'azione significa comprare una frazione di un'azienda — e quindi il diritto a una frazione di tutti i suoi utili e dividendi futuri. Ma quanto vale quel diritto? È la domanda fondamentale della valutazione azionaria, e risponderle richiede di attualizzare flussi di cassa che si estendono teoricamente all'infinito.

L'idea chiave è semplice: un'azione vale la somma di tutto ciò che pagherà in futuro, portato a oggi con un tasso appropriato. Il problema è che il futuro è incerto e infinito. I modelli di valutazione sono tentativi di semplificare questo problema imponendo struttura (crescita costante, fasi di crescita distinte, multipli di settore).

Il **modello di Gordon** è l'esempio più elegante: se i dividendi crescono del 3% per sempre e tu vuoi un rendimento del 8%, l'azione vale il dividendo del prossimo anno diviso per la differenza 8% - 3% = 5%. Semplice, potente, e usato tutti i giorni dai fund manager per valutare le utility e le blue chip.

Nella pratica professionale si usano anche i **multipli di mercato** (P/E, EV/EBITDA) — non perché siano teoricamente superiori, ma perché sono veloci e ancorati ai prezzi effettivi di aziende comparabili. La valutazione azionaria è parte scienza, parte arte.

## 2. Prerequisiti

- TVM: valore attuale, rendita perpetua crescente (lezione 01)
- Rendita perpetua: $PV = C/r$
- Modello di Gordon legato al TVM
- Concetto di tasso di crescita, compounding
- Derivate per ottimizzazione (facoltativo, per la crescita sostenibile)

## 3. Teoria

### 3.1 Modello Dividend Discount (DDM) — caso generale

Il **modello Dividend Discount** afferma che il prezzo teorico di un'azione è il valore attuale di tutti i dividendi futuri:

$$P_0 = \sum_{t=1}^\infty \frac{D_t}{(1+r)^t}$$

dove:
- $P_0$ = prezzo attuale dell'azione
- $D_t$ = dividendo pagato al tempo $t$
- $r$ = tasso di rendimento richiesto dall'investitore (costo del capitale azionario)

Questo modello è valido in linea di principio per qualsiasi struttura di dividendi, ma richiede di specificare come evolvono i $D_t$.

### 3.2 Modello di Gordon (crescita costante)

Se i dividendi crescono a tasso costante $g$ per sempre, allora $D_t = D_0(1+g)^t$. Sostituendo:

$$P_0 = \sum_{t=1}^\infty \frac{D_0(1+g)^t}{(1+r)^t} = D_0 \sum_{t=1}^\infty \left(\frac{1+g}{1+r}\right)^t$$

Questa è una serie geometrica convergente se $r > g$. Usando la formula della somma:

$$P_0 = D_0 \cdot \frac{(1+g)/(1+r)}{1 - (1+g)/(1+r)} = D_0 \cdot \frac{1+g}{r-g} = \frac{D_1}{r-g}$$

dove $D_1 = D_0(1+g)$ è il dividendo atteso nel prossimo periodo.

**Formula di Gordon:**

$$P_0 = \frac{D_1}{r - g}, \quad r > g$$

**Rendimento implicito:** riarrangiando, $r = \dfrac{D_1}{P_0} + g$ — il rendimento richiesto è il dividend yield più il tasso di crescita.

### 3.3 DDM a più stadi

Le aziende in crescita attraversano fasi con tassi diversi. Il **modello a due stadi** assume:

- **Fase 1** ($t = 1, \ldots, T$): crescita straordinaria al tasso $g_1$ (es. azienda tech in espansione)
- **Fase 2** ($t > T$): crescita stabile al tasso $g_2$ (es. economia stazionaria)

Il prezzo terminale a fine della fase 1 è:

$$P_T = \frac{D_{T+1}}{r - g_2} = \frac{D_0(1+g_1)^T(1+g_2)}{r - g_2}$$

Il prezzo corrente è:

$$P_0 = \sum_{t=1}^T \frac{D_0(1+g_1)^t}{(1+r)^t} + \frac{P_T}{(1+r)^T}$$

### 3.4 Multipli di valutazione

I **multipli di mercato** valutano un'azienda per confronto con simili:

**Price-to-Earnings (P/E):** rapporto tra il prezzo dell'azione e l'utile per azione (EPS):

$$P/E = \frac{P_0}{\text{EPS}}$$

Un P/E di 20 significa che il mercato paga €20 per ogni euro di utili. Il P/E di mercato si confronta con quello del settore o con la media storica. P/E elevato = crescita attesa elevata o sopravvalutazione.

**Price-to-Book (P/B):** rapporto tra capitalizzazione di mercato e patrimonio netto contabile. P/B > 1 indica che il mercato riconosce valore aggiunto oltre gli asset contabili (brand, intangibili).

**EV/EBITDA:** Enterprise Value (market cap + debito netto) diviso EBITDA. Indipendente dalla struttura del capitale e dall'aliquota fiscale — utile per comparabili internazionali.

$$EV/EBITDA = \frac{\text{Capitalizzazione} + \text{Debito netto}}{\text{EBITDA}}$$

### 3.5 Free Cash Flow to Equity (FCFE)

Il DDM usa i dividendi, ma molte aziende non li pagano o li pagano in modo non rappresentativo. Il modello **FCFE** usa invece la cassa disponibile per gli azionisti:

$$\text{FCFE} = \text{Utile netto} - \text{Investimenti netti in capitale fisso} + \text{Variazione netta del debito}$$

Il prezzo dell'azione è il valore attuale dei FCFE futuri:

$$P_0 = \sum_{t=1}^\infty \frac{\text{FCFE}_t}{(1+r_e)^t}$$

dove $r_e$ è il costo del capitale azionario. Il modello FCFE è più generale del DDM ed è preferito quando i dividendi divergono dalla capacità di distribuzione reale.

### 3.6 Tasso di crescita sostenibile

Il **tasso di crescita sostenibile** (sustainable growth rate) è il massimo tasso al quale un'azienda può crescere usando solo risorse interne (utili reinvestiti), senza aumentare la leva finanziaria:

$$g^* = ROE \times b$$

dove $ROE = \text{Utile netto}/\text{Patrimonio netto}$ è il Return on Equity e $b = 1 - d$ è il tasso di ritenzione degli utili ($d$ = payout ratio).

In equilibrio, se $g = g^*$ nel modello di Gordon:

$$P_0 = \frac{D_1}{r - ROE \cdot b}$$

Aumentare il reinvestimento ($b$ maggiore) non sempre aumenta il prezzo: se $ROE < r$, reinvestire distrugge valore.

## 4. Derivazioni

### 4.1 Convergenza della serie geometrica in Gordon

Poniamo $q = (1+g)/(1+r)$. Con $r > g$, si ha $0 < q < 1$ e la serie converge:

$$\sum_{t=1}^\infty q^t = \frac{q}{1-q} = \frac{(1+g)/(1+r)}{1-(1+g)/(1+r)} = \frac{1+g}{(1+r)-(1+g)} = \frac{1+g}{r-g}$$

Moltiplicando per $D_0$: $P_0 = D_0 \cdot \frac{1+g}{r-g} = \frac{D_1}{r-g}$.

### 4.2 Legame P/E con Gordon

Dal modello di Gordon: $P_0 = D_1/(r-g) = \text{EPS} \cdot d \cdot (1+g)/(r-g)$ dove $d$ è il payout ratio e $D_1 = \text{EPS} \cdot d \cdot (1+g)$. Quindi:

$$P/E = \frac{P_0}{\text{EPS}} = \frac{d(1+g)}{r-g}$$

Il P/E cresce con $g$ (maggiore crescita attesa) e scende con $r$ (maggiore rischio). Questa relazione spiega perché settori ad alta crescita (tech) trattano a P/E elevati.

### 4.3 Crescita sostenibile da ROE

L'azienda ha patrimonio $E_t$. Reinveste una frazione $b$ degli utili:

$$E_{t+1} = E_t + b \cdot \text{EPS}_t = E_t(1 + b \cdot ROE) = E_t(1 + g^*)$$

Quindi $g^* = b \cdot ROE$ — il patrimonio (e di conseguenza gli utili e dividendi) cresce al tasso $g^*$.

## 5. Esempi

**Esempio 1 — Gordon base**

Un'azienda ha pagato $D_0 = €2$ di dividendo. Si aspetta una crescita perpetua del 4%. Il tasso di rendimento richiesto è 9%.

$D_1 = 2 \times 1{,}04 = €2{,}08$

$$P_0 = \frac{2{,}08}{0{,}09 - 0{,}04} = \frac{2{,}08}{0{,}05} = \mathbf{€41{,}60}$$

---

**Esempio 2 — Rendimento implicito**

Un'azione quota €60. Dividendo atteso €3. Crescita perpetua del 3%. Il tasso di rendimento implicito è:

$$r = \frac{D_1}{P_0} + g = \frac{3}{60} + 0{,}03 = 0{,}05 + 0{,}03 = \mathbf{8\%}$$

Se un investitore richiede il 10%, l'azione è sopravvalutata (il rendimento implicito 8% < 10% richiesto).

---

**Esempio 3 — DDM a due stadi**

$D_0 = €1$, crescita $g_1 = 20\%$ per 3 anni, poi $g_2 = 4\%$ per sempre. $r = 10\%$.

Fase 1:
- $D_1 = 1{,}2$, $D_2 = 1{,}44$, $D_3 = 1{,}728$

Prezzo terminale:
$$P_3 = \frac{D_4}{r-g_2} = \frac{1{,}728 \times 1{,}04}{0{,}10 - 0{,}04} = \frac{1{,}797}{0{,}06} = €29{,}95$$

Valore attuale:
$$P_0 = \frac{1{,}2}{1{,}1} + \frac{1{,}44}{1{,}21} + \frac{1{,}728}{1{,}331} + \frac{29{,}95}{1{,}331}$$
$$= 1{,}091 + 1{,}190 + 1{,}298 + 22{,}50 = \mathbf{€26{,}08}$$

---

**Esempio 4 — Valutazione con P/E**

Un'azienda ha EPS = €5. Il P/E medio del settore è 15x. Il P/E normalizzato (5 anni) è 12x.

- Valore con P/E settore: $5 \times 15 = €75$
- Valore con P/E storico: $5 \times 12 = €60$

L'azione quota €80: sembra sopravvalutata rispetto a entrambi i benchmark. Il P/E forward (EPS atteso €6): $80/6 = 13{,}3x$ — più ragionevole.

---

**Esempio 5 — FCFE vs Dividendi**

Un'azienda ha FCFE di €4 per azione ma paga solo €1 di dividendo (retention rate 75%). Usando il DDM con $D_1 = €1$, $g = 5\%$, $r = 10\%$:

$$P_{\text{DDM}} = \frac{1}{0{,}10 - 0{,}05} = €20$$

Usando il modello FCFE con $\text{FCFE}_1 = €4$, $g = 5\%$, $r = 10\%$:

$$P_{\text{FCFE}} = \frac{4}{0{,}10 - 0{,}05} = €80$$

Il DDM sottostima quando l'azienda trattiene molti utili. Il FCFE cattura meglio il valore se i reinvestimenti sono produttivi.

---

**Esempio 6 — Crescita sostenibile**

Azienda con $ROE = 15\%$ e payout ratio $d = 40\%$ (retention $b = 60\%$):

$$g^* = ROE \times b = 0{,}15 \times 0{,}60 = 9\%$$

Con $r = 12\%$ e $\text{EPS} = €3$, $D_1 = 3 \times 0{,}4 \times 1{,}09 = €1{,}308$:

$$P_0 = \frac{1{,}308}{0{,}12 - 0{,}09} = \frac{1{,}308}{0{,}03} = \mathbf{€43{,}60}$$

---

**Esempio 7 — Sensitività del modello di Gordon**

Usando $D_1 = €2$, $r = 10\%$, quanto cambia il prezzo al variare di $g$?

| $g$ | $r - g$ | $P_0 = D_1/(r-g)$ |
| --- | --- | --- |
| 2% | 8% | €25 |
| 4% | 6% | €33,33 |
| 6% | 4% | €50 |
| 8% | 2% | €100 |
| 9% | 1% | €200 |

Piccole variazioni di $g$ producono enormi variazioni di prezzo vicino a $g = r$: il modello è molto sensibile alle ipotesi di crescita.

## 6. Grafico

```plot
{"fn":"2.08/(0.09-x)","domain":[0.01,0.085],"yDomain":[0,300],"title":"Prezzo Gordon al variare di g (D1=2.08, r=9%): P = D1/(r-g)","label1":"P0 = D1/(r-g)","color":"steelblue"}
```

## 7. Interattivo

```slider
{"fn":"D0*(1+g)/Math.max(r-g,0.001)","domain":[0,30],"yDomain":[-5,400],"params":[{"name":"D0","min":0.5,"max":10,"step":0.5,"default":2},{"name":"g","min":0.01,"max":0.12,"step":0.01,"default":0.04},{"name":"r","min":0.05,"max":0.20,"step":0.01,"default":0.09}],"title":"Modello di Gordon: prezzo al variare dei parametri (asse x ignorato)"}
```

## 8. Errori comuni

**Errore 1 — Usare $D_0$ invece di $D_1$ nel modello di Gordon.** La formula è $P_0 = D_1/(r-g)$ dove $D_1 = D_0(1+g)$ è il dividendo del prossimo anno, non quello appena pagato. Usare $D_0$ sottostima il prezzo di un fattore $(1+g)$.

**Errore 2 — Ignorare la condizione $r > g$.** Se $g \geq r$, la serie diverge: il modello non è applicabile. In pratica, $g$ non può superare il tasso di crescita dell'economia a lungo termine (3-4%) per un'azienda matura — altrimenti supererebbe dimensioni irrealistiche.

**Errore 3 — Confondere P/E trailing e forward.** Il P/E trailing usa l'EPS degli ultimi 12 mesi; il P/E forward usa la stima per i prossimi 12 mesi. Confrontare P/E trailing con P/E forward di competitor porta a errori.

**Errore 4 — Trattare i multipli come assoluti.** Un P/E di 20x è "caro" o "economico"? Dipende dal settore, dal ciclo economico e dal tasso privo di rischio. Un P/E di 20x con tassi al 2% equivale a un P/E di 15x con tassi al 5%.

**Errore 5 — Non distinguere DDM e FCFE.** Il DDM valuta la politica dei dividendi effettiva; il FCFE valuta la capacità di distribuzione. Per le aziende che non pagano dividendi (es. tech ad alta crescita), il DDM dà zero — ma l'azienda ha chiaramente un valore.

**Errore 6 — Assumere crescita costante per aziende in fase di hypergrowth.** Il modello di Gordon non si applica a startup o aziende con crescita del 30-40%: bisogna usare il DDM a più stadi con una fase di normalizzazione esplicita.

**Errore 7 — Confondere il tasso richiesto $r$ con il rendimento atteso del mercato.** Il tasso $r$ è specifico per l'azione e riflette il suo rischio (tipicamente stimato con il CAPM: $r = r_f + \beta(r_m - r_f)$). Usare il rendimento di mercato generico per tutte le azioni ignora il profilo di rischio.

## 9. Applicazioni reali

**Valutazione delle utility:** le aziende di distribuzione elettrica e gas hanno flussi di cassa stabili e crescita prevedibile. Il modello di Gordon è il metodo standard di valutazione — le authority regolatorie spesso lo usano per fissare le tariffe consentite basandosi sul costo del capitale azionario.

**Analisi sell-side:** gli analisti delle banche d'investimento costruiscono modelli DCF (Discounted Cash Flow) basati sul FCFE a 5-10 anni con un terminal value calcolato con Gordon. Il "target price" pubblicato nelle ricerche è quasi sempre il risultato di questo tipo di modello.

**Private equity e M&A:** nelle acquisizioni aziendali, il compratore paga un "premium" rispetto al valore di mercato. La giustificazione matematica viene dai multipli EV/EBITDA o dai modelli DCF: si stima il valore intrinseco e si verifica se c'è ancora un rendimento atteso soddisfacente dopo il premio pagato.

**Gestione fondi e factor investing:** il P/E e il P/B sono alla base dello stile "value investing" (acquistare aziende con multipli bassi). Ricerche empiriche (Fama-French) dimostrano che le azioni con P/B basso tendono a sovraperformare nel lungo periodo — il "value premium".

## 10. Riepilogo

| Concetto | Formula | Note |
| --- | --- | --- |
| DDM generale | $P_0 = \sum_{t=1}^\infty D_t/(1+r)^t$ | Valido per qualsiasi struttura di $D_t$ |
| Gordon (crescita costante) | $P_0 = D_1/(r-g)$ | Richiede $r > g$ |
| Rendimento implicito | $r = D_1/P_0 + g$ | Dividend yield + crescita |
| DDM a due stadi | $P_0 = \sum_{t}^{T} PV(D_t) + PV(P_T)$ | $P_T = D_{T+1}/(r-g_2)$ |
| P/E ratio | $P/E = P_0/\text{EPS}$ | Confronto settoriale |
| EV/EBITDA | $EV/\text{EBITDA}$ | Capital-structure neutral |
| FCFE | Utile netto - Inv. netti + $\Delta$Debito | Cassa disponibile azionisti |
| Crescita sostenibile | $g^* = ROE \times b$ | $b$ = retention rate |
| P/E da Gordon | $P/E = d(1+g)/(r-g)$ | Lega multipli a fondamentali |

## 11. Esercizi

<details>
<summary>Esercizio 1: Gordon con cambio di $r$</summary>

Un'azione ha $D_0 = €3$, $g = 5\%$, $r = 10\%$. Se il tasso privo di rischio sale e il tasso richiesto aumenta a 12%, di quanto cambia il prezzo?

**Soluzione:**

$D_1 = 3 \times 1{,}05 = €3{,}15$

Prezzo iniziale: $P_0 = 3{,}15/(0{,}10 - 0{,}05) = 3{,}15/0{,}05 = €63$

Nuovo prezzo: $P_0' = 3{,}15/(0{,}12 - 0{,}05) = 3{,}15/0{,}07 = €45$

Variazione: $(45-63)/63 = -28{,}6\%$ — quasi un terzo del valore azionario sparisce con un aumento del tasso di 2 punti percentuali!

</details>

<details>
<summary>Esercizio 2: Trovare il tasso di crescita implicito</summary>

Un'azione quota €80. L'analista stima $D_1 = €2$ e $r = 9\%$. Quale tasso di crescita $g$ è implicito nel prezzo corrente?

**Soluzione:**

Dal modello di Gordon: $P_0 = D_1/(r-g)$ → $r - g = D_1/P_0$ → $g = r - D_1/P_0$

$$g = 0{,}09 - \frac{2}{80} = 0{,}09 - 0{,}025 = 6{,}5\%$$

Il mercato sta prezzando una crescita perpetua del 6,5%. L'analista deve valutare se questa aspettativa è realistica rispetto ai fondamentali dell'azienda.

</details>

<details>
<summary>Esercizio 3: DDM a tre stadi</summary>

Azienda biotecnologica: $D_0 = €0{,}50$. Crescita 25% per 3 anni (lancio farmaco), poi 10% per 3 anni (maturità), poi 4% per sempre. $r = 12\%$.

**Soluzione:**

Fase 1 ($g_1 = 25\%$):
$D_1 = 0{,}625$, $D_2 = 0{,}781$, $D_3 = 0{,}977$

Fase 2 ($g_2 = 10\%$):
$D_4 = 1{,}074$, $D_5 = 1{,}182$, $D_6 = 1{,}300$

Prezzo terminale: $P_6 = 1{,}300 \times 1{,}04/(0{,}12-0{,}04) = 1{,}352/0{,}08 = €16{,}90$

Valore attuale:

$PV = 0{,}625/1{,}12 + 0{,}781/1{,}12^2 + 0{,}977/1{,}12^3 + 1{,}074/1{,}12^4 + 1{,}182/1{,}12^5 + (1{,}300+16{,}90)/1{,}12^6$

$= 0{,}558 + 0{,}623 + 0{,}695 + 0{,}682 + 0{,}670 + 9{,}230 = \mathbf{€12{,}46}$

</details>

<details>
<summary>Esercizio 4: Valutazione con EV/EBITDA</summary>

Azienda target: EBITDA €50 milioni, debito netto €80 milioni. Il multiplo EV/EBITDA medio del settore è 8x. Calcola il valore del capitale azionario (equity value).

**Soluzione:**

$EV = 8 \times 50 = €400$ milioni (Enterprise Value)

$\text{Equity Value} = EV - \text{Debito netto} = 400 - 80 = \mathbf{€320 \text{ milioni}}$

Se ci sono 40 milioni di azioni in circolazione: prezzo per azione = €320/40 = €8.

</details>

<details>
<summary>Esercizio 5: FCFE vs DDM</summary>

Azienda con EPS = €5, payout 20% ($d = 0{,}2$), ROE = 18%, $r = 11\%$.

a) Calcola la crescita sostenibile $g^*$.
b) Calcola il prezzo con DDM.
c) Calcola il prezzo con FCFE (assumendo FCFE ≈ EPS in assenza di capex netto straordinario).

**Soluzione:**

a) $g^* = ROE \times b = 0{,}18 \times 0{,}80 = 14{,}4\%$

Attenzione: $g^* = 14{,}4\% > r = 11\%$! Il modello di Gordon non si applica direttamente — l'azienda è in fase di hypergrowth non sostenibile all'infinito. Serve il modello a due stadi.

b) Ipotizzando che la crescita si normalizzi a 4% dopo 5 anni:
$D_1 = 5 \times 0{,}2 \times 1{,}144 = €1{,}144$; calcolo a due stadi (omesso per brevità) → circa €28.

c) Con FCFE ≈ EPS = €5, $g = 4\%$ stabile (terminale): $P_{\text{FCFE}} = 5 \times 1{,}04/(0{,}11-0{,}04) = €74{,}3$

Il DDM sottostima perché l'azienda paga pochissimi dividendi (80% ritenuto).

</details>

<details>
<summary>Esercizio 6: P/E e tasso d'interesse</summary>

Il mercato azionario ha P/E di 25x quando i tassi sono al 2%. I tassi salgono al 5%. Usando il modello di Gordon con $d = 50\%$ e $g = 5\%$, come cambia il P/E di equilibrio?

**Soluzione:**

Formula: $P/E = d(1+g)/(r-g)$ dove $r = r_f + \text{premio rischio}$.

Con $r_f = 2\%$ e premio rischio 3%: $r = 5\%$, $P/E = 0{,}5 \times 1{,}05/(0{,}05-0{,}05)$ → diverge! (crescita = tasso)

Usando $r = 5\% + 3\% = 8\%$: $P/E = 0{,}5 \times 1{,}05/(0{,}08-0{,}05) = 0{,}525/0{,}03 = \mathbf{17{,}5x}$

Il P/E di equilibrio scende da 25x a 17,5x — una contrazione di mercato del 30% solo per l'aumento dei tassi, senza cambiamenti negli utili aziendali. È esattamente ciò che si è osservato nel 2022.

</details>
