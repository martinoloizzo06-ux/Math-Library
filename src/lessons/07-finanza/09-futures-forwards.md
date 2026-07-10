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

## 1. Intuizione — analogia concreta + perché si studia

Immagina di essere un agricoltore che raccoglie grano a settembre. Ad aprile, il prezzo del grano è €200 per tonnellata, ma non sai se a settembre sarà €150 o €250. Questa incertezza rende impossibile pianificare i ricavi, acquistare macchinari, o prendere finanziamenti. La soluzione? Vendere il grano **adesso** ma consegnarlo a settembre, fissando già oggi il prezzo. Questo è esattamente un **contratto forward**: un accordo bilaterale per scambiare un asset a una data futura a un prezzo concordato oggi.

Dall'altra parte del contratto c'è un panificio che deve comprare grano a settembre. Anche loro preferiscono sapere oggi quanto spenderanno, per impostare i prezzi del pane. Entrambe le parti eliminano il rischio di prezzo. Questa funzione di **trasferimento del rischio** è il cuore dei mercati dei derivati, che movimentano ogni giorno decine di trilioni di euro a livello globale.

I **futures** sono la versione istituzionalizzata e standardizzata dei forward: si negoziano su mercati regolamentati come il CME Group (Chicago) o Eurex (Francoforte), con contratti standardizzati per quantità, qualità e date di scadenza. L'introduzione del meccanismo di **mark-to-market giornaliero** (i profitti e le perdite si incassano o pagano ogni sera) rende i futures molto più sicuri dei forward dal punto di vista del rischio di controparte.

Questi strumenti non servono solo agli agricoltori: le compagnie aeree usano futures sul petrolio per fissare il costo del carburante, le banche usano futures su tassi di interesse per gestire la duration del loro bilancio, e i fondi di investimento usano futures su indici azionari per hedgiare le posizioni o modificare rapidamente l'esposizione al mercato. Capire futures e forward è quindi fondamentale per chiunque voglia comprendere come funziona la gestione del rischio finanziario nel mondo reale.

## 2. Prerequisiti

- Interesse continuo e formula $e^{rT}$ (lezione su capitalizzazione)
- Concetto di arbitraggio e legge del prezzo unico
- Valore attuale e futuro di flussi di cassa
- Distribuzione normale e correlazione (per il hedge ratio)
- Concetto di portafoglio e diversificazione

## 3. Teoria

### Contratto forward: definizione precisa

Un **contratto forward** è un accordo tra due parti (**long** e **short**) per scambiare un sottostante (asset) a:
- un prezzo $F_0$ — detto **prezzo forward** — concordato oggi ($t=0$)
- a una data futura $T$ — detta **maturity** o scadenza

Al momento della stipula, il contratto ha **valore zero** per entrambe le parti (nessun pagamento iniziale). I profitti/perdite si realizzano solo alla scadenza:

$$\text{Profitto long forward} = S_T - F_0$$
$$\text{Profitto short forward} = F_0 - S_T$$

dove $S_T$ è il **prezzo spot** (di mercato) dell'asset alla scadenza $T$. Il profitto del long è la perdita dello short e viceversa: i forward sono contratti **a somma zero**.

### Pricing del forward: no-arbitrage

Il prezzo forward $F_0$ è determinato dall'assenza di arbitraggio. Consideriamo un asset che non paga dividendi.

**Strategia 1 (comprare forward):** oggi firmi il forward a $F_0$, a scadenza paghi $F_0$ e ricevi l'asset.

**Strategia 2 (comprare spot e tenere):** oggi compri l'asset a $S_0$ con denaro preso a prestito a tasso $r$. A scadenza devi restituire $S_0 e^{rT}$.

Le due strategie danno lo stesso risultato (possedere l'asset a $T$), quindi devono avere lo stesso costo:

$$\boxed{F_0 = S_0 \, e^{rT}}$$

- $S_0$: prezzo spot oggi dell'asset ($€$)
- $r$: tasso risk-free continuo (es. tasso swap o LIBOR/SOFR)
- $T$: tempo alla scadenza in anni

Se $F_0 > S_0 e^{rT}$: arbitraggio comprando l'asset e vendendo il forward.
Se $F_0 < S_0 e^{rT}$: arbitraggio vendendo l'asset allo scoperto e comprando il forward.

### Formule per asset con rendimenti intermedi

**Asset con dividend yield continuo $q$** (es. azioni che pagano dividendi, indici azionari):

$$F_0 = S_0 \, e^{(r-q)T}$$

Il dividendo riduce il costo netto di carry perché chi possiede l'asset fisicamente riceve il dividendo — il forward deve riflettere questa differenza.

**Asset con costi di storage $u$** (commodity: oro, petrolio, grano):

$$F_0 = S_0 \, e^{(r+u)T}$$

Tenere il grano in un silo costa — il forward deve includere questo costo.

**Convenience yield $y$** (beneficio dal possesso fisico di commodity):

$$F_0 = S_0 \, e^{(r+u-y)T}$$

Il petrolio in magazzino ha un valore di "opzione di utilizzo immediato" — per questo a volte i futures hanno prezzi inferiori allo spot (**backwardation** invece di **contango**).

### Forward su valute (Interest Rate Parity)

Per valute straniere con tasso risk-free estero $r_f$:

$$F_0 = S_0 \, e^{(r-r_f)T}$$

Questa è la **parità coperta dei tassi di interesse (CIP)**. Il differenziale di tasso si riflette interamente nel forward exchange rate. Se la CIP non valesse, ci sarebbe arbitraggio valutario.

### Contratti futures: differenze dal forward

| Caratteristica | Forward | Futures |
| --- | --- | --- |
| Negoziazione | OTC (bilaterale) | Borsa regolamentata |
| Standardizzazione | Personalizzato | Contratti standard |
| Rischio controparte | Alto | Minimo (clearing house) |
| Mark-to-market | No | Sì, giornaliero |
| Margine | Raramente | Sempre richiesto |
| Liquidità | Bassa | Alta |
| Consegna fisica | Frequente | Rara (spesso cash settlement) |

**Mark-to-market:** ogni sera, la **clearing house** (cassa di compensazione) calcola il profitto/perdita giornaliera e la accredita/addebita sul conto margine. Se il margine scende sotto il **maintenance margin**, viene emessa una **margin call** e il trader deve reintegrare.

**Esempio:** apri un long futures sull'oro a €1500/oz. Il giorno dopo il prezzo va a €1510. La clearing house ti accredita €10/oz. Il giorno dopo scende a €1490: devi pagare €20/oz.

### Basis e rollover

**Basis** $= S_t - F_t$ (prezzo spot meno prezzo futures). Alla scadenza, basis $\to 0$ (convergenza). Prima della scadenza, la basis può variare — rischio basis per chi fa hedging.

**Rollover:** quando si usa un futures con scadenza vicina per coprire un'esposizione a lungo termine, bisogna chiudere il vecchio contratto e aprire uno con scadenza successiva. Ogni rollover introduce rischio di basis.

### Hedge ratio ottimale

Quanti contratti futures servono per coprire un'esposizione? Il **rapporto di copertura ottimale** minimizza la varianza della posizione coperta:

$$h^* = \rho_{SF} \cdot \frac{\sigma_S}{\sigma_F}$$

- $\rho_{SF}$: correlazione tra variazioni di prezzo dell'asset $S$ e del futures $F$
- $\sigma_S$: volatilità del prezzo dell'asset
- $\sigma_F$: volatilità del prezzo del futures

**Numero di contratti:**

$$N^* = h^* \cdot \frac{\text{Esposizione totale}}{\text{Dimensione contratto futures}}$$

### Futures su tassi di interesse

**Eurodollar / SOFR futures:** il prezzo del contratto è $100 - r$, dove $r$ è il tasso a 3 mesi previsto. Un rialzo dei tassi di 1% fa scendere il prezzo del contratto di 1 punto. Usati per coprire prestiti a tasso variabile.

**Treasury bond futures:** contratto sulla consegna di obbligazioni governative USA a lunga scadenza. Il **conversion factor** aggiusta il prezzo per le diverse cedole dei titoli consegnabili. Il titolo più conveniente da consegnare è il **cheapest-to-deliver (CTD)**.

## 4. Derivazioni

### Derivazione del prezzo forward senza dividendi

Costruiamo due portafogli con lo stesso payoff a $T$:

**Portafoglio A:** un contratto forward long a prezzo $F_0$ + investimento di $F_0 e^{-rT}$ al tasso $r$

- Oggi: costo $= F_0 e^{-rT}$
- A $T$: l'investimento vale $F_0$, uso per pagare il forward → ricevo l'asset. Valore $= S_T$

**Portafoglio B:** comprare l'asset oggi a $S_0$

- Oggi: costo $= S_0$
- A $T$: valore $= S_T$

Stessi payoff ⟹ stesso costo oggi (no-arbitrage):

$$F_0 e^{-rT} = S_0 \implies F_0 = S_0 e^{rT}$$

### Dimostrazione della relazione forward-futures

In assenza di incertezza sui tassi di interesse, forward e futures hanno lo stesso prezzo. Con tassi stocastici, i futures valgono leggermente di più (meno) degli omonimi forward se il sottostante è positivamente (negativamente) correlato con i tassi. In pratica, per la maggior parte dei sottostanti la differenza è trascurabile.

### Derivazione del hedge ratio ottimale

Portafoglio coperto: $\Pi = S - h \cdot F$ (long asset $S$, short $h$ contratti futures $F$).

Varianza della variazione di valore:

$$\text{Var}(\Delta\Pi) = \sigma_S^2 + h^2 \sigma_F^2 - 2h \rho_{SF} \sigma_S \sigma_F$$

Minimizzare rispetto a $h$:

$$\frac{d}{dh}\text{Var}(\Delta\Pi) = 2h\sigma_F^2 - 2\rho_{SF}\sigma_S\sigma_F = 0$$

$$\implies h^* = \rho_{SF} \frac{\sigma_S}{\sigma_F}$$

## 5. Esempi

**Esempio 1 — Prezzo forward base**

Azione: $S_0 = €50$, tasso risk-free $r = 4\%$ annuo continuo, scadenza $T = 6$ mesi $= 0.5$ anni.

$$F_0 = 50 \cdot e^{0.04 \times 0.5} = 50 \cdot e^{0.02} = 50 \times 1.02020 = €51.01$$

Se il forward venisse prezzato a €53: compra l'azione oggi a €50 con €50 presi a prestito, vendi il forward a €53. A $T$: consegni l'azione, incassi €53, rimborsi il prestito €50 × $e^{0.02}$ = €51.01. Profitto senza rischio: €1.99/azione.

**Esempio 2 — Forward su azione con dividendi**

Azione: $S_0 = €100$, dividendo continuo $q = 2\%$, $r = 5\%$, $T = 1$ anno.

$$F_0 = 100 \cdot e^{(0.05-0.02) \times 1} = 100 \cdot e^{0.03} = 100 \times 1.03045 = €103.05$$

Senza il dividendo avremmo avuto $F_0 = 100 \cdot e^{0.05} = €105.13$. Il dividendo abbassa il forward di circa €2.08.

**Esempio 3 — Profitto/perdita da posizione forward**

Entri long in un forward su oro a $F_0 = €1500/\text{oz}$.

- Se $S_T = €1580$: profitto $= 1580 - 1500 = €80/\text{oz}$
- Se $S_T = €1420$: perdita $= 1420 - 1500 = -€80/\text{oz}$
- Se $S_T = €1500$: profitto/perdita $= 0$ (forward at-the-money)

Il forward è simmetrico: guadagni illimitati, perdite illimitate.

**Esempio 4 — Forward su valute (CIP)**

EUR/USD spot: $S_0 = 1.10$, tasso risk-free USD $r_{USD} = 5\%$, tasso risk-free EUR $r_{EUR} = 3\%$, $T = 1$ anno.

$$F_0 = 1.10 \cdot e^{(0.05 - 0.03) \times 1} = 1.10 \cdot e^{0.02} = 1.10 \times 1.02020 = 1.1222$$

Il dollaro vale di più in forward (1.1222 vs 1.10) perché i tassi USA sono più alti: per detenere dollari serve una compensazione maggiore nel cambio a termine.

**Esempio 5 — Hedging con futures: compagnia aerea**

Una compagnia aerea deve acquistare 100.000 barili di kerosene tra 3 mesi. Prezzo spot: $100$/barile. Futures sul crude oil: $F_0 = 102$/barile, correlazione $\rho = 0.92$, $\sigma_{kerosene}/\sigma_{crude} = 1.05$. Dimensione contratto: 1000 barili.

$$h^* = 0.92 \times 1.05 = 0.966$$

$$N^* = 0.966 \times \frac{100{,}000}{1{,}000} = 96.6 \approx 97 \text{ contratti}$$

La compagnia compra 97 contratti futures long sul crude oil. Se il prezzo sale del 10%: perdita sull'acquisto fisico ($+10M$) viene quasi completamente compensata dal profitto sui futures.

**Esempio 6 — Mark-to-market su futures**

Compri un futures sull'indice FTSE-MIB a 28.000 punti. Valore notizionale: €5 per punto → valore contratto €140.000. Margine iniziale: €7.000 (5%). Maintenance margin: €5.600.

| Giorno | Prezzo | Variazione | M-t-M | Saldo margine |
| --- | --- | --- | --- | --- |
| 0 | 28.000 | — | — | €7.000 |
| 1 | 28.200 | +200 | +€1.000 | €8.000 |
| 2 | 27.800 | -400 | -€2.000 | €6.000 |
| 3 | 27.400 | -400 | -€2.000 | €4.000 → margin call! |

Il giorno 3, il margine scende sotto €5.600: margin call di €3.000 per tornare a €7.000.

**Esempio 7 — Rollover basis risk**

Un gestore detiene 1000 oz d'oro (valore €1.5M). Vuole coprirsi con futures a 3 mesi. Vende 10 contratti (100 oz ciascuno) a $F_0 = 1510$. Alla scadenza, spot oro $S_T = 1490$, futures $= 1492$ (basis finale = -2 invece di 0 previsto). Guadagno netto futures: $1510 - 1492 = 18/\text{oz}$, ma perdita spot: $-10/\text{oz}$. Guadagno netto: $+8/\text{oz}$, ma con basis risk non era garantito.

**Esempio 8 — Futures su tassi: coprire un prestito**

Un'azienda prenderà a prestito €10M a tasso EURIBOR 3M tra 2 mesi. Attuale EURIBOR 3M = 4%. Teme un rialzo dei tassi. Vende 10 contratti EURIBOR futures a 96.00 (tasso implicito 4%). Se il tasso sale al 5%, il prezzo futures scende a 95.00. Guadagno short futures: 1 punto = €2.500/contratto × 10 = €25.000. Questo compensa parzialmente il maggior costo del prestito.

## 6. Grafico

```plot
{"fn":"x-100","domain":[70,130],"yDomain":[-35,35],"title":"Profitto posizione forward (F₀=100)","label1":"Long forward: ST - F₀","color":"steelblue"}
```

## 7. Interattivo

```slider
{"fn":"x-K","domain":[50,200],"yDomain":[-60,100],"params":[{"name":"K","min":60,"max":160,"step":5,"default":100}],"title":"Profitto long forward al variare del prezzo forward K"}
```

## 8. Errori comuni

**Errore 1 — Confondere forward price e forward value.** Il prezzo forward $F_0$ è il prezzo concordato nel contratto (fissato alla stipula). Il **valore del forward** $f$ è quanto vale il contratto in un momento successivo alla stipula: $f = (F_0^{\text{nuovo}} - F_0) e^{-r(T-t)}$. Al momento della stipula il valore è zero, non il prezzo.

**Errore 2 — Dimenticare la convenzione di capitalizzazione.** La formula $F_0 = S_0 e^{rT}$ usa tassi **continui**. Se il tasso è annuale composto una volta, la formula è $F_0 = S_0 (1+r)^T$. Applicare la formula sbagliata per la convenzione data produce risultati errati.

**Errore 3 — Ignorare il convenience yield nel backwardation.** Quando le commodity sono in **backwardation** ($F_0 < S_0$), significa che il convenience yield $y$ è grande: $y > r + u$. Questo non è un'anomalia né un'opportunità di arbitraggio, ma riflette il valore reale del possesso fisico (es. scorte di gas naturale in inverno).

**Errore 4 — Credere che l'hedging elimini tutti i rischi.** L'hedging elimina il **rischio di prezzo** ma non il **rischio di basis** (la differenza tra spot e futures può variare) né il **rischio di liquidità** (le margin call richiedono liquidità immediata). La Southwest Airlines negli anni 2000 era coperta sul carburante ma aveva comunque rischi operativi e di basis.

**Errore 5 — Applicare h* = 1 senza calcolare il hedge ratio.** Se la correlazione è 0.8 e le volatilità sono diverse, usare 1 contratto per unità di esposizione è sub-ottimale. Il hedge ratio ottimale tiene conto sia della correlazione che del rapporto di volatilità.

**Errore 6 — Non distinguere forward fisico e cash-settled.** Alcuni futures prevedono consegna fisica (grano, petrolio), altri sono liquidati in contanti (indici azionari, EURIBOR). Tenere aperta una posizione su futures con consegna fisica fino alla scadenza significa doversi aspettare la consegna o ricezione dell'asset sottostante.

**Errore 7 — Confondere short forward e put option.** Un **short forward** obbliga a vendere a $F_0$; una **put option** dà il diritto (non l'obbligo) di vendere. Il forward ha profitti e perdite simmetrici, la put ha perdita massima pari al premio pagato.

## 9. Applicazioni reali

**Gestione del rischio di cambio aziendale:** un'azienda italiana che esporta negli USA riceve pagamenti in dollari. Per eliminare l'incertezza sul tasso di cambio, stipula forward EUR/USD per convertire i ricavi futuri a un tasso fisso. Airbus vende aerei in dollari ma ha costi in euro: usa forward su valute per miliardi di euro ogni anno.

**Compagnie aeree e costo del carburante:** Southwest Airlines (USA) ha usato sistematicamente futures sul petrolio dal 1999, coprendo fino all'80% del fabbisogno con anni di anticipo. Quando il petrolio salì da $25 a $55/barile nel 2004, le altre compagnie subirono perdite enormi mentre Southwest rimase in utile. La copertura costò però quando il petrolio scese nel 2008.

**Agricultural commodity trading:** i produttori di caffè in Brasile vendono forward/futures sul caffè (mercato ICE) per assicurarsi i ricavi prima del raccolto. Nestlé e Lavazza usano la stessa borsa per coprirsi dall'aumento del costo del caffè verde. Questo mercato esiste dal 1882.

**Futures su tassi e gestione bancaria:** le banche centrali usano futures su tassi (Fed Funds futures, SOFR futures) per capire le aspettative del mercato sui futuri tassi di interesse. I portfolio manager usano Treasury bond futures per aggiustare la duration del portafoglio senza comprare/vendere i titoli fisici — molto più efficiente in termini di costi e liquidità.

## 10. Riepilogo

| Concetto | Formula | Note |
| --- | --- | --- |
| Prezzo forward (no dividendi) | $F_0 = S_0 e^{rT}$ | $r$ tasso continuo risk-free |
| Prezzo forward (dividend yield $q$) | $F_0 = S_0 e^{(r-q)T}$ | Per azioni e indici |
| Prezzo forward (storage cost $u$) | $F_0 = S_0 e^{(r+u)T}$ | Per commodity |
| Prezzo forward (convenience yield) | $F_0 = S_0 e^{(r+u-y)T}$ | $y$ per commodity fisiche |
| Forward su valute (CIP) | $F_0 = S_0 e^{(r-r_f)T}$ | $r_f$ tasso estero |
| Profitto long forward | $S_T - F_0$ | Positivo se $S_T > F_0$ |
| Profitto short forward | $F_0 - S_T$ | Positivo se $F_0 > S_T$ |
| Valore forward long dopo $t$ | $(F_t - F_0)e^{-r(T-t)}$ | Al momento $t \in (0,T)$ |
| Hedge ratio ottimale | $h^* = \rho_{SF}\,\sigma_S/\sigma_F$ | Minimizza varianza portafoglio |
| Numero contratti futures | $N^* = h^* \times \text{Esposizione}/\text{Dim. contratto}$ | Arrotondare all'intero |
| Basis | $S_t - F_t$ | Converge a 0 a scadenza |
| Contango | $F_0 > S_0$ | Normale per asset senza rendimento |
| Backwardation | $F_0 < S_0$ | Quando convenience yield alto |

## 11. Esercizi

<details>
<summary>Esercizio 1: Prezzo forward su azione senza dividendi</summary>

Un'azione vale $S_0 = €80$, il tasso risk-free continuo è $r = 3\%$ annuo. Calcolare il prezzo forward con scadenza $T = 9$ mesi. Verificare che un forward quotato a €84 crei opportunità di arbitraggio e descrivere la strategia.

**Soluzione.**

$T = 9/12 = 0.75$ anni.

$$F_0 = 80 \cdot e^{0.03 \times 0.75} = 80 \cdot e^{0.0225} = 80 \times 1.02275 = €81.82$$

Il forward a €84 è sopravvalutato (€84 > €81.82). Strategia di arbitraggio:

1. **Oggi:** prendi a prestito €80 al 3% e compra l'azione a €80. Vendi il forward a €84.
2. **Tra 9 mesi:** consegna l'azione, incassa €84. Rimborsa il prestito: $80 \times e^{0.0225} = €81.82$.
3. **Profitto:** €84 - €81.82 = **€2.18 per azione**, senza rischio.

</details>

<details>
<summary>Esercizio 2: Forward su azione con dividendo</summary>

Un'azione quota $S_0 = €120$ e pagherà un dividendo di €3 tra 2 mesi. Il tasso risk-free è $r = 4\%$ annuo continuo. Calcola il prezzo forward con scadenza $T = 6$ mesi.

**Soluzione.**

Il dividendo certo di €3 fra 2 mesi va attualizzato: $PV(\text{div}) = 3 \cdot e^{-0.04 \times 2/12} = 3 \times 0.9934 = €2.98$.

Si sottrae il valore attuale dei dividendi dal prezzo spot:

$$F_0 = (S_0 - PV(\text{div})) \cdot e^{rT} = (120 - 2.98) \cdot e^{0.04 \times 0.5} = 117.02 \times 1.02020 = €119.38$$

Nota: usare $S_0 e^{rT} = 122.43$ sarebbe sbagliato perché il possessore del forward non riceve il dividendo.

</details>

<details>
<summary>Esercizio 3: Interest rate parity (forward su valute)</summary>

EUR/CHF spot: 0.95 (1 EUR = 0.95 CHF). Tasso risk-free EUR: 3%. Tasso risk-free CHF: 0.5%. Calcola il forward EUR/CHF a 1 anno. Cosa succede se un broker offre 0.98?

**Soluzione.**

$$F_0 = 0.95 \times e^{(0.03 - 0.005) \times 1} = 0.95 \times e^{0.025} = 0.95 \times 1.02532 = 0.9741$$

Il forward corretto è 0.9741 CHF per EUR.

Se il broker offre 0.98 (sopravvalutato):

1. Prendi a prestito €1 al 3%, converti a CHF (ottieni 0.95 CHF), investi CHF al 0.5%.
2. Vendi forward EUR/CHF a 0.98 (ti impegni a vendere CHF, comprare EUR, a 0.98).
3. Dopo 1 anno: i CHF sono diventati $0.95 \times e^{0.005} = 0.9548$ CHF. Converti a EUR: $0.9548/0.98 = 0.9743$ EUR. Rimborsa il prestito EUR: $1 \times e^{0.03} = 1.0305$ EUR. **Perdita!** Quindi conviene la direzione opposta.

</details>

<details>
<summary>Esercizio 4: Hedge ratio e numero di contratti</summary>

Un fondo detiene un portafoglio azionario italiano del valore di €5.000.000. Vuole coprirsi con futures sull'indice FTSE-MIB. Dati: $\sigma_{\text{portafoglio}} = 18\%$, $\sigma_{\text{FTSE-MIB}} = 16\%$, $\rho = 0.85$. Ogni contratto futures FTSE-MIB vale €100.000 (10€ × 10.000 punti). Quanti contratti short deve aprire?

**Soluzione.**

$$h^* = \rho \cdot \frac{\sigma_S}{\sigma_F} = 0.85 \times \frac{0.18}{0.16} = 0.85 \times 1.125 = 0.956$$

$$N^* = 0.956 \times \frac{5{,}000{,}000}{100{,}000} = 0.956 \times 50 = 47.8 \approx \textbf{48 contratti short}$$

Se il mercato scende del 10%, il portafoglio perde circa €5M × 18%/16% × 10% = €562.500. I 48 contratti short guadagnano €100.000 × 48 × 10% = €480.000. La copertura non è perfetta a causa della basis risk (correlazione < 1 e volatilità diversa).

</details>

<details>
<summary>Esercizio 5: Mark-to-market e margin call</summary>

Apri un long futures sul petrolio a $95/barile. Ogni contratto = 1000 barili. Margine iniziale = $5.700, maintenance margin = $4.300. Prezzi dei prossimi 3 giorni: $93, $91, $96. Descrivi le variazioni sul conto margine e le eventuali margin call.

**Soluzione.**

| Giorno | Prezzo | Variazione | Profitto/Perdita | Saldo |
| --- | --- | --- | --- | --- |
| 0 | $95 | — | — | $5.700 |
| 1 | $93 | -$2 | -$2.000 | $3.700 → Margin call! |
| 1 (dopo call) | — | — | +$2.000 | $5.700 (reintegro) |
| 2 | $91 | -$2 | -$2.000 | $3.700 → Margin call! |
| 2 (dopo call) | — | — | +$2.000 | $5.700 (reintegro) |
| 3 | $96 | +$5 | +$5.000 | $10.700 |

Ogni discesa di $1.40 sotto il maintenance margin ($5.700 - $4.300 = $1.400) genera una margin call. Il giorno 3 recuperi e il saldo sale a $10.700. Le margin call richiedono liquidità immediata — rischio di liquidità importante per i futures.

</details>

<details>
<summary>Esercizio 6: Futures su commodity con storage cost</summary>

L'oro quota $S_0 = €1.800/\text{oz}$. Costo di storage: 0.5% annuo continuo. Tasso risk-free: 4%. Calcola il prezzo forward a 1 anno. Se il convenience yield fosse 1%, come cambia?

**Soluzione.**

**Senza convenience yield:**
$$F_0 = 1.800 \times e^{(0.04 + 0.005) \times 1} = 1.800 \times e^{0.045} = 1.800 \times 1.04603 = €1.882.9$$

L'oro è in **contango** perché non ha convenience yield significativo.

**Con convenience yield $y = 1\%$:**
$$F_0 = 1.800 \times e^{(0.04 + 0.005 - 0.01) \times 1} = 1.800 \times e^{0.035} = 1.800 \times 1.03562 = €1.864.1$$

Il convenience yield riduce il prezzo forward — riflette il beneficio di avere oro fisicamente disponibile.

</details>

<details>
<summary>Esercizio 7: Valore di un forward esistente</summary>

Sei entrato in un long forward su un'azione a $F_0 = €50$, scadenza $T = 1$ anno, al tasso $r = 5\%$. Dopo 6 mesi, l'azione quota $S_{0.5} = €55$. Qual è il valore attuale del tuo forward?

**Soluzione.**

Il nuovo prezzo forward a 6 mesi dalla scadenza è:

$$F_{0.5} = 55 \times e^{0.05 \times 0.5} = 55 \times 1.02532 = €56.39$$

Il valore del forward long (inizialmente stipulato a $F_0 = 50$) è:

$$f = (F_{0.5} - F_0) \times e^{-r(T-t)} = (56.39 - 50) \times e^{-0.05 \times 0.5} = 6.39 \times 0.97531 = €6.23$$

Il forward vale ora €6.23 (potresti venderlo a questo prezzo sul mercato OTC). All'inizio valeva 0: il rialzo del sottostante lo ha portato in-the-money.

</details>

<details>
<summary>Esercizio 8: Interpretare contango e backwardation</summary>

Il prezzo spot del gas naturale a giugno è €30/MWh. I futures con scadenza in agosto quotano €28/MWh e quelli con scadenza a dicembre €38/MWh. Analizza la struttura dei prezzi e il convenience yield implicito per agosto.

**Soluzione.**

La struttura è in **backwardation per la scadenza agosto** ($F_{agosto} = 28 < S_0 = 30$) e in **contango per dicembre** ($F_{dicembre} = 38 > S_0 = 30$).

**Backwardation ad agosto:** il gas è scarso in estate (storage limitato, domanda alta per i picchi di calore). Il convenience yield implicito è alto: $30 \times e^{(r+u-y) \times 2/12} = 28$, che per $r+u = 5\%$ implica $y \approx 41\%$ annuo — il possesso fisico del gas vale moltissimo in estate.

**Contango a dicembre:** il gas viene stoccato in estate per l'inverno (domanda alta per riscaldamento), e i costi di storage si accumulano, portando il futures a €38 > spot.

</details>
