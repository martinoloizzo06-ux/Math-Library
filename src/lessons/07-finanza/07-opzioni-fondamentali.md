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

## 1. Intuizione — analogia concreta

Immagina di voler comprare casa. Paghi un deposito di €5.000 al proprietario per bloccare il prezzo a €200.000 entro sei mesi. Se i prezzi salgono a €230.000, eserciti il diritto e compri a €200.000 (guadagno €30.000 meno il deposito). Se i prezzi scendono, lasci scadere l'accordo e perdi solo i €5.000. Hai appena comprato una **call option** sulla casa.

Le opzioni finanziarie funzionano esattamente così. Una **call** è il diritto (non l'obbligo) di acquistare un asset a un prezzo prefissato. Una **put** è il diritto di venderlo. Il bello delle opzioni è l'**asimmetria**: il compratore ha un potenziale guadagno illimitato (per la call) ma una perdita massima limitata al premio pagato. Il venditore incassa il premio ma ha un rischio asimmetrico (guadagno massimo = premio, perdita potenzialmente illimitata).

Le opzioni sono strumenti fondamentali non solo per la speculazione, ma soprattutto per la **gestione del rischio (hedging)**. Un gestore di fondi che teme un crollo del mercato può comprare put sul proprio portafoglio — pagando un premio come una polizza assicurativa. Una multinazionale che deve pagare in dollari tra sei mesi può bloccare il tasso di cambio con opzioni su valute.

Il mercato globale delle opzioni vale centinaia di trilioni di dollari nozionale. Capire le opzioni significa capire come il sistema finanziario gestisce e trasferisce il rischio.

## 2. Prerequisiti

- Concetto di valore attuale e attualizzazione
- Tasso di interesse continuo: $e^{rT}$
- Distribuzione normale e funzione di distribuzione cumulativa $\Phi$
- Nozioni base di probabilità (valor atteso, probabilità neutrale al rischio)
- Rendimenti finanziari e concetto di volatilità

## 3. Teoria

### Definizioni fondamentali

Un'**opzione** è un contratto finanziario derivato che conferisce al compratore il **diritto** (non l'obbligo) di acquistare o vendere un asset sottostante a un prezzo prefissato (**strike price** o **prezzo di esercizio** $K$) entro o alla **data di scadenza** $T$.

**Call option:** diritto di **acquistare** il sottostante al prezzo $K$.

**Put option:** diritto di **vendere** il sottostante al prezzo $K$.

**Opzione europea:** esercitabile **solo a scadenza** (giorno $T$). La maggior parte delle opzioni su indici sono europee.

**Opzione americana:** esercitabile **in qualsiasi momento** fino a scadenza. Le opzioni su azioni singole sono tipicamente americane.

**Premio** (o prezzo dell'opzione): $C$ per la call, $P$ per la put — pagato al momento dell'acquisto, non recuperabile.

**Posizioni:**
- **Long call:** ha comprato la call, paga il premio $C$, ha diritto di comprare a $K$.
- **Short call (naked):** ha venduto la call, incassa il premio $C$, ha l'obbligo di vendere a $K$ se l'acquirente esercita.
- **Long put:** ha comprato la put, paga il premio $P$, ha diritto di vendere a $K$.
- **Short put:** ha venduto la put, incassa $P$, ha l'obbligo di comprare a $K$ se l'acquirente esercita.

### Terminologia: moneyness

- **In the money (ITM):** l'opzione vale esercitarla ora. Call: $S > K$. Put: $S < K$.
- **At the money (ATM):** $S = K$ (circa).
- **Out of the money (OTM):** l'opzione non vale esercitarla ora. Call: $S < K$. Put: $S > K$.

### Payoff a scadenza

Il **payoff** è il valore dell'opzione al momento della scadenza $T$, quando il prezzo del sottostante è $S_T$:

**Long call:** $\max(S_T - K,\, 0) = (S_T - K)^+$

Se $S_T > K$: l'opzione è ITM, si esercita e si guadagna $S_T - K$. Se $S_T \leq K$: l'opzione scade senza valore (worthless).

**Long put:** $\max(K - S_T,\, 0) = (K - S_T)^+$

Se $S_T < K$: si esercita e si guadagna $K - S_T$ (venduto al prezzo $K$ mentre vale $S_T$). Se $S_T \geq K$: scade senza valore.

**Short call:** $-\max(S_T - K, 0)$ — profitto se $S_T \leq K$.

**Short put:** $-\max(K - S_T, 0)$ — profitto se $S_T \geq K$.

### Profilo del profitto (P&L)

Il **profitto (profit)** include il costo del premio pagato (con capitalizzazione continua):

**Long call:** $\Pi = (S_T - K)^+ - C \cdot e^{rT}$

**Long put:** $\Pi = (K - S_T)^+ - P \cdot e^{rT}$

**Breakeven della call:** $S_T^* = K + C \cdot e^{rT}$ — il prezzo a cui il profitto è zero.

**Breakeven della put:** $S_T^* = K - P \cdot e^{rT}$

### Parità put-call (opzioni europee)

La **parità put-call** è una relazione fondamentale tra il prezzo di una call e di una put europee sullo stesso sottostante con stesso $K$ e $T$:

$$C - P = S_0 e^{-qT} - K e^{-rT}$$

dove $q$ è il dividend yield continuamente composto e $r$ il tasso risk-free. Per asset senza dividendi ($q = 0$):

$$C - P = S_0 - K e^{-rT}$$

**Intuizione:** un portafoglio (long call + investimento di $K e^{-rT}$ in titoli privi di rischio) ha lo stesso payoff di un portafoglio (long put + long asset). Per assenza di arbitraggio, devono avere lo stesso prezzo oggi.

**Limiti del prezzo della call:**

$$\max(S_0 e^{-qT} - K e^{-rT},\; 0) \leq C \leq S_0 e^{-qT}$$

La call non vale più del sottostante (limite superiore) e non vale meno del suo valore intrinseco attualizzato (limite inferiore).

### Strategie con opzioni

**Straddle (long):** acquisto di una call e una put con stesso $K$ e $T$. Payoff: $\max(S_T - K, 0) + \max(K - S_T, 0) = \lvert S_T - K \rvert$. Costo: $C + P$. Si guadagna se il sottostante si muove molto in qualsiasi direzione — scommessa sulla volatilità.

**Strangle (long):** come lo straddle ma con strike diversi: put con $K_1 < S_0$, call con $K_2 > S_0$. Meno costoso dello straddle perché entrambe le opzioni sono OTM, ma richiede un movimento ancora più ampio per guadagnare.

**Bull spread (vertical spread):** long call a $K_1$ + short call a $K_2 > K_1$. Payoff massimo: $K_2 - K_1$. Costo: $C(K_1) - C(K_2) > 0$ (si paga meno di una singola call). Visione rialzista con perdita limitata.

**Bear spread:** long put a $K_2$ + short put a $K_1 < K_2$. Visione ribassista con perdita limitata.

**Collar:** lungo sull'asset, long put a $K_1$ (protezione al ribasso), short call a $K_2$ (rinuncia al rialzo). Costo netto spesso quasi zero (zero-cost collar).

**Protective put:** long asset + long put — equivalente a comprare un'assicurazione sul portafoglio. Il payoff minimo è garantito a $K$.

**Covered call:** long asset + short call — cede il potenziale rialzo oltre $K$ in cambio del premio incassato. Usata per generare reddito su un portafoglio azionario.

**Butterfly spread:** long call $K_1$, short 2 call $K_2$, long call $K_3$ (con $K_1 < K_2 < K_3$). Guadagna se il sottostante rimane vicino a $K_2$ — scommessa sulla bassa volatilità.

## 4. Derivazioni

### Derivazione della parità put-call

Costruiamo due portafogli con lo stesso payoff a $T$:

**Portafoglio A:** long call + $K e^{-rT}$ investiti in titoli risk-free.
- Payoff a $T$: $(S_T - K)^+ + K = \max(S_T, K)$

**Portafoglio B:** long put + long asset (con dividendi reinvestiti).
- Payoff a $T$: $(K - S_T)^+ + S_T = \max(K, S_T)$

I due portafogli hanno lo stesso payoff in ogni scenario. Per assenza di arbitraggio:

$$C + K e^{-rT} = P + S_0 \implies C - P = S_0 - K e^{-rT}$$

### Limiti del prezzo della call (senza dividendi)

**Limite inferiore:** $C \geq S_0 - K e^{-rT}$. Supponiamo per assurdo $C < S_0 - K e^{-rT}$. Allora: compra call, vendi asset, investi $K e^{-rT}$. Oggi guadagno $S_0 - K e^{-rT} - C > 0$. A $T$: se $S_T > K$, esercito la call e compro a $K$, uso i $K$ dall'investimento: profitto netto $S_T - K + K - S_T = 0$. Se $S_T \leq K$, non esercito, compro l'asset a $S_T$ con i $K$ dall'investimento, guadagno $K - S_T \geq 0$. Profitto oggi $> 0$, profitto a $T \geq 0$: **arbitraggio**. Quindi $C \geq S_0 - K e^{-rT}$.

**Limite superiore:** $C \leq S_0$. Una call non può valere più dell'asset sottostante: la call dà il diritto di comprare l'asset, non l'asset stesso. Se $C > S_0$, vendo la call e compro l'asset — profitto garantito.

## 5. Esempi

**Esempio 1 — Payoff call europea**

Call europea su azioni ENI: $K = €13$, $T = 6$ mesi.

| $S_T$ | Payoff | Stato |
| --- | --- | --- |
| €10 | $\max(10-13, 0) = 0$ | OTM: non esercitata |
| €13 | $\max(13-13, 0) = 0$ | ATM: indifferente |
| €15 | $\max(15-13, 0) = 2$ | ITM: guadagno €2 |
| €18 | $\max(18-13, 0) = 5$ | ITM: guadagno €5 |

---

**Esempio 2 — Profitto long call con premio**

Call europea: $K = €100$, $C = €5$, $r = 0$. Breakeven: $S_T^* = 100 + 5 = €105$.

| $S_T$ | Payoff | Profitto $= $ Payoff $- 5$ |
| --- | --- | --- |
| €90 | 0 | $-€5$ (perdita massima) |
| €100 | 0 | $-€5$ |
| €105 | 5 | $0$ (breakeven) |
| €115 | 15 | $+€10$ |
| €130 | 30 | $+€25$ |

Il rischio è limitato al premio (€5), il potenziale guadagno è illimitato.

---

**Esempio 3 — Parità put-call**

$S_0 = €50$, $K = €50$, $T = 1$ anno, $r = 4\%$. Call europea vale $C = €4.50$.

$K e^{-rT} = 50 \times e^{-0.04} = 50 \times 0.9608 = €48.04$

$P = C - S_0 + K e^{-rT} = 4.50 - 50 + 48.04 = €2.54$

Se la put sul mercato valesse €3 (arbitraggio): compra call ($-4.50$), vendi put ($+3$), vendi asset ($+50$), investi $48.04$ in risk-free ($-48.04$). Costo netto: $3 - 4.50 + 50 - 48.04 = 0.46 > 0$. A scadenza: payoff netto = 0 in ogni scenario — profitto risk-free di €0.46.

---

**Esempio 4 — Straddle**

Long straddle su azione Telecom: $K = €8$, $C = €0.80$, $P = €0.60$. Costo totale: €1.40.

Breakeven superiore: $8 + 1.40 = €9.40$. Breakeven inferiore: $8 - 1.40 = €6.60$.

Si guadagna se $S_T > €9.40$ o $S_T < €6.60$ — il mercato si aspetta un risultato trimestrale importante o una notizia che muoverà il titolo.

---

**Esempio 5 — Bull spread**

Long call $K_1 = €100$ a $C_1 = €8$. Short call $K_2 = €110$ a $C_2 = €3$. Costo netto: €5.

| $S_T$ | Payoff call $K_1$ | Payoff call $K_2$ | Payoff netto | Profitto |
| --- | --- | --- | --- | --- |
| €95 | 0 | 0 | 0 | $-€5$ |
| €100 | 0 | 0 | 0 | $-€5$ |
| €105 | 5 | 0 | 5 | $0$ (breakeven) |
| €110 | 10 | $-0$ | 10 | $+€5$ |
| €120 | 20 | $-10$ | 10 | $+€5$ (massimo) |

Payoff massimo = $K_2 - K_1 - \text{costo} = 10 - 5 = €5$. Perdita massima = €5.

---

**Esempio 6 — Protective put (portfolio insurance)**

Portafoglio azionario: €100.000. Si teme una correzione entro 3 mesi. Put ITM a $K = €98.000$, costo $P = €2.000$.

- Se mercato scende del 15% ($S_T = €85.000$): put paga $98.000 - 85.000 = €13.000$. Perdita effettiva: $-15.000 + 13.000 - 2.000 = -€4.000$ (invece di $-€15.000$).
- Se mercato sale del 10% ($S_T = €110.000$): put non viene esercitata. Guadagno: $10.000 - 2.000 = €8.000$.

Il costo dell'assicurazione è il premio €2.000 — limite al rialzo ma protezione significativa al ribasso.

---

**Esempio 7 — Collar a costo zero**

Portafoglio €100.000. Long put $K_1 = €95.000$ (costo €2.000). Short call $K_2 = €108.000$ (incasso €2.000). Costo netto: €0.

La protezione sotto €95.000 è pagata cedendo il rialzo sopra €108.000. Strategia comune tra i CFO per proteggere grandi posizioni azionarie senza sborsare premi.

## 6. Grafico

```plot
{"fn":"Math.max(x-100,0)-8","fn2":"Math.max(100-x,0)-5","domain":[70,140],"yDomain":[-15,35],"title":"Profitto long call (blu) e long put (rosso) con K=100","label1":"Long call (C=8)","label2":"Long put (P=5)","color":"steelblue","color2":"tomato","xLabel":"S_T","yLabel":"Profitto"}
```

## 7. Interattivo

```slider
{"fn":"Math.max(x-K,0)-premium","domain":[50,200],"yDomain":[-20,100],"params":[{"name":"K","min":50,"max":150,"step":5,"default":100},{"name":"premium","min":1,"max":20,"step":1,"default":8}],"title":"Profitto long call al variare dello strike K e del premio"}
```

## 8. Errori comuni

**Errore 1 — Confondere payoff e profitto.**
Il payoff di una long call è $\max(S_T - K, 0)$, sempre non negativo. Il profitto è payoff meno il premio pagato: può essere negativo. Molti studenti dimenticano di sottrarre il costo del premio.

**Errore 2 — Pensare che il compratore perda sempre il premio.**
Il compratore perde solo il premio se l'opzione scade OTM. Se è ITM, esercita e recupera parte o tutto il premio. Il costo del premio è la perdita massima in caso di scadenza senza valore.

**Errore 3 — Invertire call e put.**
Call = diritto di **comprare** = profitto se il prezzo sale. Put = diritto di **vendere** = profitto se il prezzo scende. Un modo per ricordarlo: la call "chiama" il titolo verso di te (lo compri), la put lo "metti via" (lo vendi).

**Errore 4 — Applicare la parità put-call alle opzioni americane.**
La parità put-call vale solo per opzioni europee. Le opzioni americane hanno un valore aggiuntivo legato alla possibilità di esercizio anticipato (particolarmente rilevante per le put americane quando il tasso di interesse è alto).

**Errore 5 — Dimenticare il segno nelle posizioni short.**
Il payoff dello short call è $-\max(S_T - K, 0)$ — il segnale meno è fondamentale. Il venditore dell'opzione ha il payoff opposto al compratore. Il profitto del short call è $C - \max(S_T - K, 0)$.

**Errore 6 — Calcolare il breakeven senza considerare l'interesse sul premio.**
Il breakeven preciso per la long call è $S_T^* = K + C \cdot e^{rT}$, non $K + C$. Per periodi brevi la differenza è piccola, ma per $T$ lungo può essere significativa.

**Errore 7 — Confondere straddle e strangle.**
Nello straddle, call e put hanno lo stesso strike $K$. Nello strangle, la call ha $K_{call} > S_0$ e la put ha $K_{put} < S_0$ (entrambe OTM). Lo strangle costa meno ma richiede un movimento più ampio per essere profittevole.

## 9. Applicazioni reali

**Hedging valutario:** un esportatore italiano che riceverà $1M di dollari tra 6 mesi compra put sul dollaro contro euro. Se il dollaro si deprezza, la put compensa la perdita di valore. Il costo è il premio — come un'assicurazione sul tasso di cambio.

**Compensazione manageriale:** le stock option concesse ai manager delle aziende quotate sono call americane: il manager ha il diritto di comprare azioni a un prezzo prestabilito (spesso il prezzo di mercato al momento della concessione). Allineano gli incentivi del management con quelli degli azionisti.

**Volatility trading:** gli hedge fund comprano straddle (long vol) o vendono straddle (short vol) scommettendo rispettivamente sull'aumento o sulla riduzione della volatilità implicita. La strategia è indipendente dalla direzione del mercato — puro gioco sulla volatilità.

**Protezione del portafoglio:** i grandi fondi pensione comprano put su indici (es. S&P 500, EuroStoxx 50) come assicurazione contro i crolli. Il costo di questa protezione può essere finanziato vendendo call (collar), rinunciando ai guadagni oltre un certo livello.

## 10. Riepilogo

| Concetto | Formula | Note |
| --- | --- | --- |
| Payoff long call | $\max(S_T - K, 0)$ | Zero se OTM |
| Payoff long put | $\max(K - S_T, 0)$ | Zero se OTM |
| Profitto long call | $(S_T-K)^+ - C\cdot e^{rT}$ | Max perdita = $C$ |
| Profitto long put | $(K-S_T)^+ - P\cdot e^{rT}$ | Max perdita = $P$ |
| Parità put-call | $C - P = S_0 e^{-qT} - Ke^{-rT}$ | Solo opzioni europee |
| Breakeven call | $S_T^* = K + C \cdot e^{rT}$ | Prezzo dove profitto = 0 |
| Straddle payoff | $\lvert S_T - K \rvert$ | Scommessa su volatilità |
| Bull spread massimo | $K_2 - K_1 - \text{costo netto}$ | Visione rialzista |

## 11. Esercizi

<details>
<summary>Esercizio 1: Payoff e profitto long call</summary>

Call europea su azione ENEL: $K = €6$, premio $C = €0.40$, $T = 3$ mesi.

Calcola payoff e profitto per: $S_T = €5$, $S_T = €6$, $S_T = €6.40$, $S_T = €7$, $S_T = €8$.

**Soluzione:**

| $S_T$ | Payoff $= \max(S_T - 6, 0)$ | Profitto $= $ Payoff $- 0.40$ |
| --- | --- | --- |
| €5.00 | 0 | $-€0.40$ |
| €6.00 | 0 | $-€0.40$ |
| €6.40 | 0.40 | $0$ (breakeven) |
| €7.00 | 1.00 | $+€0.60$ |
| €8.00 | 2.00 | $+€1.60$ |

La perdita massima è €0.40 (il premio), qualunque cosa accada. Il potenziale guadagno è illimitato.

</details>

<details>
<summary>Esercizio 2: Parità put-call — trovare il prezzo della call</summary>

Put europea: $P = €3.50$. $S_0 = €48$, $K = €50$, $T = 6$ mesi, $r = 3\%$. Nessun dividendo.

Trovare il fair value della call $C$.

**Soluzione:**

$C = P + S_0 - K e^{-rT}$

$K e^{-rT} = 50 \times e^{-0.03 \times 0.5} = 50 \times e^{-0.015} = 50 \times 0.9851 = €49.26$

$C = 3.50 + 48 - 49.26 = €2.24$

Se la call sul mercato vale €2.80, c'è un'opportunità di arbitraggio: vendi call ($+2.80$), compra put ($-3.50$), compra asset ($-48$), prendi a prestito $49.26$ ($+49.26$). Costo netto oggi: $2.80 - 3.50 - 48 + 49.26 = +€0.56 > 0$.

</details>

<details>
<summary>Esercizio 3: Straddle — analisi breakeven e profitto</summary>

Straddle su indice MIB con $K = 28.000$. Call $C = 400$, put $P = 350$. Costo totale: $750$.

1. Calcola i breakeven.
2. Calcola il profitto se $S_T = 26.000$.
3. Calcola il profitto se $S_T = 29.000$.

**Soluzione:**

Breakeven superiore: $28.000 + 750 = 28.750$.
Breakeven inferiore: $28.000 - 750 = 27.250$.

Se $S_T = 26.000$: Payoff put $= 28.000 - 26.000 = 2.000$. Profitto $= 2.000 - 750 = +1.250$.

Se $S_T = 29.000$: Payoff call $= 29.000 - 28.000 = 1.000$. Profitto $= 1.000 - 750 = +250$.

La posizione guadagna quando il mercato si muove significativamente in qualsiasi direzione.

</details>

<details>
<summary>Esercizio 4: Bull spread — costruzione e payoff</summary>

Costruisci un bull spread con: long call $K_1 = €50$ a $C_1 = €5$, short call $K_2 = €60$ a $C_2 = €2$.

1. Costo netto.
2. Profitto massimo.
3. Perdita massima.
4. Breakeven.
5. Profitto se $S_T = €57$.

**Soluzione:**

Costo netto: $C_1 - C_2 = 5 - 2 = €3$.

Profitto massimo: $(K_2 - K_1) - \text{costo} = (60 - 50) - 3 = €7$ (quando $S_T \geq 60$).

Perdita massima: costo netto $= €3$ (quando $S_T \leq 50$).

Breakeven: $K_1 + \text{costo} = 50 + 3 = €53$.

Se $S_T = €57$: Payoff long call $= 57 - 50 = 7$. Payoff short call $= -(57 - 60) = 0$ (OTM). Profitto $= 7 - 3 = +€4$.

</details>

<details>
<summary>Esercizio 5: Covered call — rendimento atteso</summary>

Hai 100 azioni FIAT a €14/azione (totale €1.400). Vendi 1 call $K = €15$, $C = €0.50$. Incasso premi: €50.

Calcola il profitto totale se:
(a) $S_T = €13$ (azione scende).
(b) $S_T = €15$ (azione all'ATM).
(c) $S_T = €18$ (azione sale molto).

**Soluzione:**

(a) $S_T = €13$: call scade OTM. P&L azioni: $(13-14) \times 100 = -€100$. Premio incassato: $+€50$. Totale: $-€50$. (Senza la covered call, la perdita sarebbe $-€100$.)

(b) $S_T = €15$: call scade ATM. P&L azioni: $(15-14) \times 100 = +€100$. Premio: $+€50$. Totale: $+€150$.

(c) $S_T = €18$: call esercitata, sei obbligato a vendere a €15. P&L azioni: $(15-14) \times 100 = +€100$. Premio: $+€50$. Totale: $+€150$ — perdi il rialzo oltre €15 (€300 di guadagno potenziale mancato).

La covered call genera reddito ma limita il potenziale rialzo.

</details>

<details>
<summary>Esercizio 6: Put europea — payoff e profitto</summary>

Investi €500 in 100 put su UniCredit ($K = €5$, $P = €0.30$ ciascuna). A scadenza $S_T = €3.80$.

Calcola: (a) Payoff totale. (b) Profitto totale. (c) Ritorno percentuale sull'investimento.

**Soluzione:**

(a) Payoff per opzione: $\max(5 - 3.80, 0) = €1.20$. Payoff totale: $100 \times 1.20 = €120$.

(b) Premio totale pagato: $100 \times 0.30 = €30$. Profitto: $120 - 30 = +€90$.

(c) Ritorno: $90/30 = 300\%$ sul premio investito, oppure $90/500 = 18\%$ sul totale del portafoglio se lo si considerasse isolato.

Confronto: se avessi venduto allo scoperto 100 azioni a €5 e ricomprate a €3.80, il guadagno sarebbe $100 \times 1.20 = €120$, con rischio illimitato al rialzo. Le put limitano il rischio al premio pagato.

</details>
