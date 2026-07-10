---
id: finanza-11-struttura-capitale
subject: finanza
topic_it: Finanza aziendale
topic_en: Corporate finance
title_it: Struttura del capitale e Modigliani-Miller
title_en: Capital structure and Modigliani-Miller
level: purple
order: 11
source_book: "Bodie, Kane & Marcus, Investments; J.C. Hull, Options, Futures and Other Derivatives"
source_chapter: "Cap. — Struttura del capitale"
---

## 1. Intuizione — analogia concreta

Immagina di comprare una casa da €200.000. Puoi pagarla tutta con i tuoi soldi (100% equity), oppure chiedere un mutuo del 70% (€140.000 a debito, €60.000 tuoi). Il costo del mutuo è il tasso di interesse; il costo del tuo capitale è il rendimento che avresti potuto ottenere investendolo altrove.

La struttura del capitale di un'azienda funziona esattamente così. L'azienda si finanzia con **debito** (obbligazioni, prestiti bancari) e **equity** (azioni). Ma quale mix è ottimale?

Nel 1958, Franco Modigliani e Merton Miller (entrambi futuri Nobel) risposta con un risultato sorprendente e controintuitivo: in un mondo perfetto, **il mix di debito e equity non cambia il valore dell'azienda**. È come dire che tagliare una torta in fette diverse non cambia la quantità di torta — puoi ripartire i flussi di cassa tra azionisti e creditori in mille modi, ma il valore totale resta invariato.

Naturalmente il mondo reale non è perfetto. Le tasse creano un vantaggio al debito (gli interessi sono deducibili, i dividendi no). I costi di fallimento creano uno svantaggio al debito. Il risultato del mondo reale è una struttura ottimale che **bilancia scudo fiscale e costi di dissesto** — la trade-off theory. La pecking order theory aggiunge l'asimmetria informativa: il management sa più degli azionisti, e questo determina l'ordine di preferenza tra fonti di finanziamento.

Capire la struttura del capitale significa capire come le grandi decisioni finanziarie delle aziende — emettere obbligazioni, comprare azioni proprie, fare un leveraged buyout — cambiano il valore e il rischio per gli azionisti.

## 2. Prerequisiti

- Valore attuale e attualizzazione (DCF)
- CAPM: beta, costo dell'equity, premio al rischio
- Nozioni contabili: EBIT, utile netto, debito, equity
- Imposte sul reddito delle imprese (aliquota fiscale $t$)
- Tasso di interesse e costo del debito

## 3. Teoria

### Struttura del capitale: definizioni

Il **capitale totale** di un'azienda è la somma di:
- **Debito** $D$: obbligazioni, prestiti bancari, titoli ibridi. I creditori ricevono interessi fissi e hanno priorità in caso di fallimento.
- **Equity** $E$: azioni ordinarie e privilegiate. Gli azionisti ricevono i residui dopo aver pagato i creditori.

**Enterprise Value (EV):** valore totale dell'azienda (debt + equity): $V = D + E$.

**Leva finanziaria (leverage):** misurata come $L = D/E$ (rapporto debito/equity) o $D/(D+E)$ (peso del debito sul totale). Alta leva = rischio finanziario maggiore per gli azionisti.

**Costo del debito** $r_d$: il tasso di interesse che l'azienda paga. Netto delle tasse: $r_d (1-t)$ perché gli interessi sono deducibili dal reddito imponibile.

**Costo dell'equity** $r_e$: il rendimento richiesto dagli azionisti. Si stima tipicamente con il CAPM:
$$r_e = r_f + \beta_E \cdot (E[R_m] - r_f)$$

**WACC (Weighted Average Cost of Capital):**

$$\text{WACC} = \frac{E}{D+E} r_e + \frac{D}{D+E} r_d (1-t)$$

Il WACC è il tasso di attualizzazione usato nel DCF aziendale — rappresenta il costo medio del capitale dell'impresa, ponderato per la struttura finanziaria.

### Teoremi di Modigliani-Miller

**MM Proposizione I (senza tasse, 1958):** in mercati di capitali perfetti (no tasse, no costi di transazione, no costi di fallimento, informazione simmetrica, investitori e aziende possono indebitarsi allo stesso tasso), il valore dell'azienda è **indipendente dalla struttura del capitale**:

$$V_L = V_U$$

dove $V_L$ è il valore dell'azienda levered (con debito) e $V_U$ è il valore dell'azienda unlevered (solo equity).

**Intuizione/dimostrazione:** se $V_L \neq V_U$, esiste arbitraggio. Un investitore che vuole detenere una quota dell'azienda levered può "replicare" sinteticamente la stessa esposizione comprando azioni dell'azienda unlevered con debito personale — e viceversa. Questo "homemade leverage" eguaglia i valori.

**MM Proposizione II (senza tasse):** il costo dell'equity di un'azienda levered cresce linearmente con la leva:

$$r_e^L = r_U + (r_U - r_d) \frac{D}{E}$$

dove $r_U$ è il costo dell'equity dell'azienda unlevered. Aumentando il debito, il rischio per gli azionisti aumenta (perché il debito è prioritario), quindi richiedono un rendimento maggiore — esattamente sufficiente da lasciare il WACC invariato pari a $r_U$.

**MM Proposizione I (con tasse, 1963):** con le imposte sul reddito delle imprese, gli interessi sul debito sono deducibili dal reddito imponibile. Questo crea un vantaggio fiscale al debito chiamato **tax shield**:

$$V_L = V_U + tD$$

Il valore dello scudo fiscale è $tD$ (aliquota fiscale $\times$ valore del debito). Con debito perpetuo al tasso $r_d$, gli interessi annui sono $r_d D$, il risparmio fiscale è $t \cdot r_d D$ annuo, e il valore attuale (attualizzato a $r_d$) è $t \cdot r_d D / r_d = tD$.

**MM Proposizione II (con tasse):**

$$r_e^L = r_U + (r_U - r_d) \frac{D}{E} (1-t)$$

Con le tasse, l'aumento del costo dell'equity è smorzato dal beneficio fiscale del debito. Il WACC **diminuisce** all'aumentare della leva (perché il tax shield riduce il costo effettivo del debito).

**Implicazione radicale:** con le tasse e senza costi di fallimento, la struttura ottimale sarebbe 100% debito. Ma nella realtà ci sono costi di fallimento — ecco perché serve la trade-off theory.

### Trade-off Theory

La trade-off theory estende MM considerando i **costi di dissesto finanziario**:

$$V_L = V_U + tD - PV(\text{costi di dissesto finanziario})$$

I **costi di dissesto finanziario** includono:
- **Costi diretti:** legali, amministrativi, consulenziali in caso di fallimento (tipicamente 3-5% del valore dell'azienda).
- **Costi indiretti:** perdita di clienti e fornitori che dubitano della continuità aziendale, difficoltà nell'attrarre talenti, impossibilità di sfruttare opportunità di investimento (underinvestment problem), management distratto dai problemi finanziari.

La **struttura ottimale** bilancia il beneficio marginale del tax shield con il costo marginale del rischio di fallimento. Esiste un leverage ottimale $D^*/E^*$ dove il valore dell'impresa è massimizzato.

**Beta levered e unlevered (Hamada equation):**

$$\beta_L = \beta_U \left(1 + \frac{D}{E}(1-t)\right)$$

Questa formula consente di stimare il $\beta$ di un'azienda quotata con leva diversa da quella target (unlevering e re-levering del beta).

### Pecking Order Theory (Myers & Majluf, 1984)

La pecking order theory abbandona l'idea di una struttura ottimale e si concentra sull'**asimmetria informativa**: il management conosce meglio degli investitori esterni il valore reale dell'azienda e le prospettive future.

**Ordine di preferenza delle fonti di finanziamento:**
1. **Autofinanziamento (retained earnings):** nessuna asimmetria informativa, nessun costo di emissione.
2. **Debito:** costa meno dell'equity in presenza di asimmetria informativa (segnale meno negativo).
3. **Equity:** usata come ultima risorsa, perché l'emissione di nuove azioni segnala al mercato che il management ritiene il titolo sopravvalutato — il prezzo cade.

**Predizione empirica:** le aziende più redditizie (che generano più cassa) si indebitano meno — usano gli utili per finanziarsi. Questo è opposto alla trade-off theory (che prevede più leva per aziende profittevoli con alto reddito imponibile).

### Agency Costs

I **costi di agenzia** nascono dal conflitto di interessi tra manager, azionisti e creditori:
- **Debt overhang:** con alto debito, gli azionisti possono rifiutare investimenti con VAN positivo perché i benefici vanno principalmente ai creditori (Myers 1977).
- **Asset substitution:** gli azionisti hanno incentivi a sostituire progetti sicuri con progetti più rischiosi (guadagnano il rialzo, i creditori subiscono il ribasso).
- **Free cash flow problem:** i manager possono sprecare il free cash flow in acquisizioni non profittevoli invece di restituirlo agli azionisti — il debito disciplina i manager forzando il pagamento degli interessi (Jensen 1986).

## 4. Derivazioni

### Derivazione del WACC

Il WACC è il rendimento totale richiesto dai finanziatori dell'azienda, ponderato per le rispettive quote:

$$\text{WACC} = \frac{E}{V} r_e + \frac{D}{V} r_d (1-t)$$

Il termine $(1-t)$ riflette la deducibilità degli interessi: se l'aliquota fiscale è $t = 30\%$, un debito a $r_d = 6\%$ costa effettivamente $6\% \times (1-0.3) = 4.2\%$ dopo le tasse.

Il WACC è il tasso appropriato per attualizzare i flussi di cassa dell'impresa **indebitata** (FCFF), perché già incorpora il beneficio fiscale del debito. In alternativa si usa l'APV (Adjusted Present Value): $V_L = V_U + PV(\text{tax shield})$ con $V_U$ ottenuto attualizzando i FCFF al $r_U$.

### Dimostrazione di MM I (senza tasse)

Consideriamo due aziende identiche negli asset: $U$ (solo equity, valore $V_U$) e $L$ (equity $E$ + debito $D$, valore $V_L = E + D$).

**Strategia A:** acquisto del 10% dell'equity di $L$. Costo: $0.10 E$. Payoff: $0.10 (X - r_d D)$ dove $X$ è l'EBIT.

**Strategia B:** acquisto del 10% dell'equity di $U$ con debito personale pari a $0.10 D$. Costo: $0.10 V_U - 0.10 D = 0.10(V_U - D)$. Payoff: $0.10 X - 0.10 r_d D = 0.10 (X - r_d D)$.

Le due strategie hanno lo stesso payoff. Per assenza di arbitraggio: $0.10 E = 0.10(V_U - D)$, quindi $E = V_U - D$, ovvero $V_L = E + D = V_U$. ∎

## 5. Esempi

**Esempio 1 — Calcolo del WACC**

Azienda Alfa: equity $E = €600M$ (costo $r_e = 12\%$), debito $D = €400M$ (costo $r_d = 6\%$), aliquota $t = 30\%$.

$V = E + D = €1.000M$

$\text{WACC} = \frac{600}{1000} \times 12\% + \frac{400}{1000} \times 6\% \times (1-0.3)$
$= 0.6 \times 12\% + 0.4 \times 4.2\% = 7.2\% + 1.68\% = \mathbf{8.88\%}$

---

**Esempio 2 — MM II: costo dell'equity con leva**

Azienda Beta: unlevered cost of capital $r_U = 10\%$, costo del debito $r_d = 6\%$, leva $D/E = 0.5$, no tasse.

$r_e^L = r_U + (r_U - r_d) \frac{D}{E} = 10\% + (10\% - 6\%) \times 0.5 = 10\% + 2\% = \mathbf{12\%}$

Verifica WACC: $\frac{1}{1.5} \times 12\% + \frac{0.5}{1.5} \times 6\% = 8\% + 2\% = 10\% = r_U$ ✓

---

**Esempio 3 — Tax shield (MM con tasse)**

Azienda Gamma: $V_U = €100M$, debito perpetuo $D = €40M$, aliquota $t = 25\%$.

$V_L = V_U + tD = 100 + 0.25 \times 40 = 100 + 10 = \mathbf{€110M}$

Lo scudo fiscale vale €10M. Verifica: interessi annui $= r_d \times D$, risparmio fiscale annuo $= t \times r_d \times D$, $PV = t \times r_d \times D / r_d = tD = €10M$ ✓

---

**Esempio 4 — Trade-off theory: struttura ottimale**

Un'azienda ha $V_U = €200M$, aliquota $t = 30\%$, debito a €$D$ milioni. I costi di dissesto finanziario hanno valore attuale:

| $D$ (M€) | Tax shield ($tD$) | $PV$(distress) | $V_L$ |
| --- | --- | --- | --- |
| 0 | 0 | 0 | €200M |
| 50 | 15 | 2 | €213M |
| 100 | 30 | 8 | €222M |
| 150 | 45 | 25 | €220M |
| 200 | 60 | 70 | €190M |

Ottimo: $D^* = €100M$ con $V_L = €222M$. Oltre quel punto, i costi di dissesto superano il beneficio fiscale marginale.

---

**Esempio 5 — Hamada equation: unlevering del beta**

Azienda Delta è quotata con $\beta_L = 1.4$, $D/E = 0.6$, $t = 30\%$.

$\beta_U = \frac{\beta_L}{1 + (D/E)(1-t)} = \frac{1.4}{1 + 0.6 \times 0.7} = \frac{1.4}{1.42} = \mathbf{0.986}$

Se Delta vuole abbassare il leverage a $D/E = 0.2$:

$\beta_L^{new} = \beta_U \times (1 + 0.2 \times 0.7) = 0.986 \times 1.14 = \mathbf{1.124}$

Il beta dell'equity scende da 1.4 a 1.12 — il titolo diventa meno rischioso per gli azionisti dopo la riduzione del debito.

---

**Esempio 6 — Pecking order: azienda redditizia vs non redditizia**

Azienda X (redditizia, EBITDA/Assets = 15%): genera molto autofinanziamento, si indebita poco. $D/E = 0.1$.

Azienda Y (meno redditizia, EBITDA/Assets = 5%): costretta a ricorrere al debito per finanziare gli investimenti. $D/E = 0.8$.

La pecking order theory prevede $D_X < D_Y$ — le aziende più profittevoli hanno meno debito perché finanziano con utili trattenuti. La trade-off theory prevede il contrario (più profitto = più reddito imponibile = più vantaggio dal tax shield). I dati empirici tendono a supportare la pecking order.

---

**Esempio 7 — WACC e costo dell'equity dopo rifinanziamento**

L'azienda Alfa dell'esempio 1 decide di riacquistare €100M di equity e emettere €100M di debito (nuovo $D = €500M$, $E = €500M$). Assumendo che $r_U = 10\%$ e $t = 30\%$.

Nuovo $r_e$ (con tasse): $r_e = r_U + (r_U - r_d)(D/E)(1-t) = 10\% + 4\% \times 1 \times 0.7 = 12.8\%$

Nuovo WACC: $0.5 \times 12.8\% + 0.5 \times 6\% \times 0.7 = 6.4\% + 2.1\% = 8.5\%$

Il WACC scende da 8.88% a 8.5% grazie al maggiore tax shield — il valore dell'azienda aumenta.

## 6. Grafico

```plot
{"fn":"10*x","fn2":"10*x - 0.08*x*x","domain":[0,100],"yDomain":[0,600],"title":"Valore azienda vs debito: tax shield (blu) e trade-off con costi di distress (rosso)","label1":"V = VU + tD (solo tax shield)","label2":"V = VU + tD - PV(distress)","color":"steelblue","color2":"tomato","xLabel":"Debito D (M€)","yLabel":"Valore V_L (M€)"}
```

## 7. Interattivo

```slider
{"fn":"(E/(E+D))*re + (D/(E+D))*rd*(1-t/100)","domain":[0,100],"yDomain":[0,20],"params":[{"name":"E","min":100,"max":900,"step":50,"default":600},{"name":"D","min":100,"max":900,"step":50,"default":400},{"name":"re","min":5,"max":20,"step":1,"default":12},{"name":"rd","min":2,"max":10,"step":1,"default":6},{"name":"t","min":0,"max":40,"step":5,"default":30}],"title":"WACC al variare della struttura del capitale (asse x non usato — WACC è costante)"}
```

## 8. Errori comuni

**Errore 1 — Includere le tasse nel costo del debito quando non è richiesto.**
Il costo del debito al netto delle tasse $r_d(1-t)$ si usa nel WACC perché il WACC include già il beneficio fiscale. Se si usa l'APV (Adjusted Present Value), il beneficio fiscale è calcolato separatamente e si usa $r_d$ lordo per attualizzare i FCFF non-levered.

**Errore 2 — Confondere $r_U$ con $r_d$.**
$r_U$ è il costo dell'equity dell'azienda senza leva — un rendimento sull'equity, non sul debito. È il rendimento richiesto da un azionista che possiede un'azienda senza debito. Tipicamente $r_U > r_d$ perché l'equity è più rischiosa del debito.

**Errore 3 — Dimenticare che MM I senza tasse non implica indifferenza per gli azionisti.**
MM I dice che il valore totale dell'impresa è invariato — ma gli azionisti sopportano più rischio con più leva (MM II). I rendimenti attesi degli azionisti crescono, ma anche la volatilità dei loro rendimenti.

**Errore 4 — Usare il beta levered di una comparabile senza fare unlevering.**
Se si vuole stimare il costo del capitale di un'azienda non quotata, si prendono i beta di aziende quotate comparabili. Ma quelle aziende hanno leve diverse. Si deve: (1) unlever i beta delle comparabili con la formula di Hamada, (2) calcolare il beta unlevered medio del settore, (3) re-lever con la leva target dell'azienda in analisi.

**Errore 5 — Credere che il WACC sia fisso nel tempo.**
Il WACC cambia al variare della struttura del capitale, dei tassi di mercato, del beta dell'azienda e del rating del debito. In un'analisi DCF multi-period, se la struttura del capitale cambia, il WACC dovrebbe essere ricalcolato. Nella pratica si usa spesso un WACC costante per semplicità — un'approssimazione accettabile se la leva è stabile.

**Errore 6 — Pensare che la trade-off theory e la pecking order si escludano.**
In realtà descrivono fenomeni diversi. La trade-off cattura l'obiettivo a lungo termine (struttura ottimale), la pecking order descrive il comportamento a breve termine (come le aziende scelgono le fonti di finanziamento). Empiricamente entrambe spiegano parte del comportamento reale.

**Errore 7 — Non considerare i costi di agenzia nel calcolo del valore.**
L'equazione $V_L = V_U + tD - PV(\text{distress})$ omette i costi di agenzia. La formula completa sarebbe: $V_L = V_U + tD - PV(\text{distress}) - PV(\text{agency costs})$. I costi di agenzia del debito (underinvestment, asset substitution) possono essere significativi nelle aziende con molte opportunità di crescita.

## 9. Applicazioni reali

**Leveraged Buyout (LBO):** un fondo di private equity acquisisce un'azienda con molto debito (spesso 70-80% del prezzo). Il tax shield massimizza il valore nei primi anni; poi si ripaga il debito con i flussi di cassa e si riesce a rivendere l'azienda con una struttura più equilibrata. La teoria di Modigliani-Miller con tasse spiega perché questa strategia crea valore.

**Riacquisto di azioni proprie (buyback):** quando un'azienda riacquista le proprie azioni, aumenta la leva finanziaria. Oltre all'effetto di distribuzione del cash agli azionisti, se il management ritiene che le azioni siano sottovalutate, segnala al mercato una valutazione positiva (information signaling). La pecking order suggerisce che i buyback vengano finanziati con debito solo se non ci sono opportunità di investimento migliori.

**Rating del debito e covenant:** le agenzie di rating (Moody's, S&P, Fitch) valutano la capacità di rimborso del debito — un rating AAA implica costo del debito minore. I covenant (clausole contrattuali) impongono limiti alla leva (es. debito netto / EBITDA < 3x) per proteggere i creditori. Le aziende devono bilanciare il beneficio del tax shield con il costo di una maggiore sorveglianza dei creditori.

**Distressed debt investing:** quando un'azienda è in difficoltà finanziaria, i hedge fund comprano il suo debito a prezzi scontati. Se l'azienda si riorganizza (Chapter 11), i creditori diventano spesso i nuovi azionisti. Questo è un caso estremo di trade-off theory in azione — la struttura del capitale viene riscritta attraverso il processo di ristrutturazione.

## 10. Riepilogo

| Concetto | Formula | Note |
| --- | --- | --- |
| WACC | $\frac{E}{V}r_e + \frac{D}{V}r_d(1-t)$ | Tasso di attualizzazione DCF |
| MM I (no tax) | $V_L = V_U$ | Struttura irrilevante |
| MM II (no tax) | $r_e = r_U + (r_U-r_d)D/E$ | WACC costante = $r_U$ |
| MM I (con tax) | $V_L = V_U + tD$ | Tax shield crea valore |
| MM II (con tax) | $r_e = r_U + (r_U-r_d)(D/E)(1-t)$ | WACC decresce |
| Trade-off | $V_L = V_U + tD - PV(\text{distress})$ | Struttura ottimale interna |
| Hamada equation | $\beta_L = \beta_U(1+(D/E)(1-t))$ | Lever/unlever del beta |
| Pecking order | RE $\to$ debito $\to$ equity | Asimmetria informativa |

## 11. Esercizi

<details>
<summary>Esercizio 1: Calcolo del WACC — base</summary>

Azienda Rossi Spa: capitalizzazione di mercato $E = €800M$, debito netto $D = €200M$, costo dell'equity $r_e = 11\%$, costo del debito $r_d = 5\%$, aliquota $t = 24\%$.

Calcola il WACC.

**Soluzione:**

$V = E + D = €1.000M$

$\text{WACC} = \frac{800}{1000} \times 11\% + \frac{200}{1000} \times 5\% \times (1 - 0.24)$
$= 0.8 \times 11\% + 0.2 \times 3.8\% = 8.8\% + 0.76\% = \mathbf{9.56\%}$

</details>

<details>
<summary>Esercizio 2: MM II con tasse — costo dell'equity</summary>

Azienda unlevered con $r_U = 9\%$. Si introduce debito a $r_d = 4\%$ con $D/E = 1$ (50/50), aliquota $t = 27\%$.

Calcola $r_e^L$ e il nuovo WACC.

**Soluzione:**

$r_e^L = r_U + (r_U - r_d)(D/E)(1-t) = 9\% + 5\% \times 1 \times 0.73 = 9\% + 3.65\% = \mathbf{12.65\%}$

$\text{WACC} = 0.5 \times 12.65\% + 0.5 \times 4\% \times 0.73 = 6.325\% + 1.46\% = \mathbf{7.785\%}$

Il WACC scende da $r_U = 9\%$ a $7.785\%$ grazie al tax shield — il debito crea valore per gli azionisti in presenza di tasse.

</details>

<details>
<summary>Esercizio 3: Tax shield e MM con tasse</summary>

$V_U = €500M$, aliquota $t = 30\%$. L'azienda emette debito perpetuo $D = €200M$ al tasso $r_d = 6\%$.

(a) Calcola il valore dello scudo fiscale.
(b) Calcola $V_L$.
(c) Calcola il risparmio fiscale annuo.

**Soluzione:**

(a) Tax shield $= tD = 0.30 \times 200 = \mathbf{€60M}$

(b) $V_L = V_U + tD = 500 + 60 = \mathbf{€560M}$

(c) Interessi annui $= r_d \times D = 6\% \times 200 = €12M$. Risparmio fiscale $= t \times \text{interessi} = 30\% \times 12 = \mathbf{€3.6M/anno}$. $PV = 3.6/0.06 = €60M$ ✓

</details>

<details>
<summary>Esercizio 4: Hamada — unlevering e re-levering del beta</summary>

Azienda comparabile quotata: $\beta_L = 1.6$, $D/E = 0.8$, $t = 25\%$.

Vogliamo stimare il costo dell'equity di una divisione non quotata con $D/E = 0.3$ e stessa esposizione di business.

$r_f = 3\%$, premio al rischio $= 6\%$.

**Soluzione:**

Passo 1 — Unlever il beta della comparabile:
$\beta_U = \frac{1.6}{1 + 0.8 \times (1-0.25)} = \frac{1.6}{1 + 0.6} = \frac{1.6}{1.6} = 1.0$

Passo 2 — Re-lever con leva target della divisione:
$\beta_L^{div} = 1.0 \times (1 + 0.3 \times 0.75) = 1.0 \times 1.225 = \mathbf{1.225}$

Passo 3 — CAPM:
$r_e = 3\% + 1.225 \times 6\% = 3\% + 7.35\% = \mathbf{10.35\%}$

</details>

<details>
<summary>Esercizio 5: Trade-off theory — struttura ottimale</summary>

$V_U = €300M$, $t = 30\%$. I costi di distress sono stimati in $PV = 0.001 \times D^2$ (milioni).

Trova il debito ottimale $D^*$ che massimizza $V_L = V_U + tD - 0.001 D^2$.

**Soluzione:**

Massimizzando rispetto a $D$:
$\frac{dV_L}{dD} = t - 0.002 D = 0$

$D^* = \frac{t}{0.002} = \frac{0.30}{0.002} = \mathbf{150M€}$

$V_L^* = 300 + 0.30 \times 150 - 0.001 \times 150^2 = 300 + 45 - 22.5 = \mathbf{€322.5M}$

Verifica che sia un massimo: $d^2V_L/dD^2 = -0.002 < 0$ ✓

</details>

<details>
<summary>Esercizio 6: Rifinanziamento e impatto sul valore</summary>

Azienda attuale: $V_U = €400M$, $D = €50M$ (tax shield $= 0.30 \times 50 = €15M$), $V_L = €415M$.

Il management propone di aumentare il debito a $€150M$. I costi di distress aumentano da €5M a €18M.

(a) Calcola il nuovo $V_L$.
(b) Conviene il rifinanziamento?

**Soluzione:**

(a) $V_L^{new} = V_U + tD^{new} - PV(\text{distress}) = 400 + 0.30 \times 150 - 18 = 400 + 45 - 18 = \mathbf{€427M}$

(b) Confronto: $V_L^{new} = €427M > V_L^{old} = €415M$. Il rifinanziamento crea valore per gli azionisti ($+€12M$). Il beneficio del tax shield aggiuntivo (€30M) supera il costo aggiuntivo di distress (€13M).

</details>
