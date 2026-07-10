---
id: finanza-10-var
subject: finanza
topic_it: Rischio finanziario
topic_en: Financial risk
title_it: Rischio e misure di rischio — VaR e CVaR
title_en: Risk and risk measures — VaR and CVaR
level: purple
order: 10
source_book: "J.C. Hull, Options, Futures and Other Derivatives; Bodie, Kane & Marcus, Investments"
source_chapter: "Cap. 21–22 — Risk Management"
---

## 1. Intuizione — analogia concreta + perché si studia

Immagina di essere il CEO di una banca. Ogni mattina, il tuo responsabile del rischio ti consegna un numero: "Oggi il VaR al 99% è €50 milioni." Questo vuol dire che c'è il 99% di probabilità che la banca non perda più di €50 milioni **entro la giornata**. Solo nell'1% dei casi — circa 2-3 volte l'anno — le perdite supereranno quella soglia. Questa informazione, condensata in un unico numero, permette al CEO di decidere se l'esposizione al rischio è accettabile o meno, di comunicarlo al consiglio di amministrazione, e di allocare il capitale regolamentare.

Il **Value at Risk** (VaR) nasce nella trading room di J.P. Morgan negli anni '80 e diventa standard globale con il documento "RiskMetrics" del 1994. L'obiettivo era rispondere a una domanda semplice ma fondamentale: "Quanto possiamo perdere domani, nei giorni normali?" Non nei giorni catastrofici — quelli sono gestiti dallo stress testing — ma nella vita quotidiana dei mercati finanziari.

Pensa al VaR come al **budget del rischio**: così come hai un budget di spesa mensile e accetti di sforarlo raramente (solo nei mesi con spese straordinarie), la banca accetta di perdere più del VaR solo raramente (nell'1% o 5% dei giorni). Questo "budget del rischio" può essere allocato a diversi desk di trading, divisioni, o portafogli.

Il limite del VaR è che non ti dice **quanto perdi** nei giorni cattivi: sapere che nell'1% dei casi perdi "più di €50M" non ti dice se in quei casi perdi €51M o €500M. Per rispondere a questa domanda è stato sviluppato l'**Expected Shortfall** (ES o CVaR): la perdita media condizionale nei giorni peggiori. Basilea III e IV (la regolamentazione bancaria internazionale) hanno adottato l'ES al 97.5% come standard, riconoscendo che il VaR da solo non cattura il rischio di coda.

## 2. Prerequisiti

- Distribuzione normale e proprietà: media, varianza, deviazione standard
- Quantili di una distribuzione e funzione inversa $\Phi^{-1}$
- Valore atteso condizionale $E[X | X > c]$
- Correlazione tra variabili aleatorie
- Portafogli azionari e rendimenti
- Concetto di backtesting e test statistici (utile ma non indispensabile)

## 3. Teoria

### Definizione formale di VaR

Sia $L$ la perdita (variabile aleatoria positiva quando si perde denaro) di un portafoglio su un orizzonte $T$. Il **Value at Risk** al livello di confidenza $1 - \alpha$ è:

$$\text{VaR}_{1-\alpha}(L) = \inf\{l \in \mathbb{R} : P(L > l) \leq \alpha\} = F_L^{-1}(1-\alpha)$$

dove $F_L$ è la funzione di ripartizione delle perdite. In parole: il VaR è il **quantile $(1-\alpha)$ della distribuzione delle perdite**.

**Interpretazione pratica:** VaR al 99% = €1M significa che con probabilità 99% la perdita non supera €1M, e con probabilità 1% la supera.

Parametri chiave:
- **Livello di confidenza:** 99% (standard regolamentare Basilea II), 97.5% (ES in Basilea III/IV)
- **Orizzonte temporale:** 1 giorno (trading book), 10 giorni (regolamentare), 1 mese
- **Valuta:** il VaR è espresso in unità monetarie, non in percentuale

### Metodo 1: VaR Parametrico (analitico)

Se i rendimenti del portafoglio sono $R \sim \mathcal{N}(\mu, \sigma^2)$, allora la perdita è $L = -W \cdot R$ con $W$ valore del portafoglio.

$$\boxed{\text{VaR}_{1-\alpha} = W \cdot (-\mu + z_\alpha \cdot \sigma)}$$

dove $z_\alpha = \Phi^{-1}(1-\alpha)$ è il quantile $\alpha$ della distribuzione normale standard (positivo per $\alpha < 0.5$).

**Valori chiave:**
- $\alpha = 5\%$: $z_{0.05} = 1.645$
- $\alpha = 1\%$: $z_{0.01} = 2.326$
- $\alpha = 0.1\%$: $z_{0.001} = 3.090$

Per $\mu \approx 0$ (rendimento giornaliero vicino a zero): $\text{VaR}_{99\%} \approx 2.326 \cdot \sigma \cdot W$.

**Scaling temporale:** il VaR a $T$ giorni da un VaR giornaliero si ottiene con:

$$\text{VaR}(T) = \text{VaR}(1) \times \sqrt{T}$$

(valido sotto l'ipotesi di rendimenti i.i.d. normali)

**Portafoglio multiplo:** con $n$ asset e matrice di covarianza $\Sigma$:

$$\text{VaR}_{1-\alpha}^{\text{portafoglio}} = z_\alpha \cdot \sqrt{\mathbf{w}^T \Sigma \mathbf{w}} \cdot W$$

dove $\mathbf{w}$ è il vettore dei pesi.

### Metodo 2: VaR Storico (historical simulation)

1. Raccogliere le osservazioni storiche dei rendimenti (es. ultimi 250 giorni)
2. Applicarle al portafoglio attuale (P&L ipotetico)
3. Ordinare i P&L in ordine crescente
4. Il VaR al 99% è il 2.5° scenario peggiore (in 250 giorni, l'1% peggiore è i 2.5 giorni peggiori)

**Vantaggi:** non assume distribuzione normale, cattura fat tails (code spesse), correlazioni non lineari.
**Svantaggi:** dipende dalla finestra storica scelta, non predice scenari mai accaduti.

### Metodo 3: VaR Monte Carlo

1. Stimare parametri della distribuzione dei fattori di rischio (volatilità, correlazioni)
2. Simulare $N$ scenari (tipicamente $N = 10.000 - 100.000$)
3. Calcolare il P&L per ogni scenario
4. Prendere il quantile $(1-\alpha)$ come VaR

**Vantaggi:** estrema flessibilità, gestisce derivati non lineari, distribuzioni non normali.
**Svantaggi:** computazionalmente costoso, risultati dipendono dal modello assunto.

### Expected Shortfall (ES) / CVaR / Tail VaR

L'**Expected Shortfall** al livello $1-\alpha$ è la perdita media condizionale dato che si supera il VaR:

$$\text{ES}_{1-\alpha} = E[L \mid L > \text{VaR}_{1-\alpha}]$$

Per distribuzione normale con media $\mu = 0$:

$$\text{ES}_{1-\alpha} = \sigma \cdot \frac{\phi(z_\alpha)}{\alpha}$$

dove $\phi$ è la densità normale standard. Poiché $\phi(z_\alpha)/\alpha > z_\alpha$, si ha sempre **ES > VaR**.

**Proprietà teorica fondamentale:** ES è una **misura di rischio coerente** (soddisfa le proprietà di monotonia, sub-additività, omogeneità e invarianza per traslazioni). Il VaR **non** è sub-additivo in generale.

**Sub-additività:** ES(A+B) $\leq$ ES(A) + ES(B). La diversificazione non aumenta mai il rischio secondo l'ES. Il VaR può invece aumentare combinando portafogli (contro-intuitivo!).

### Backtesting

Il **backtesting** verifica se il VaR stimato è corretto: su $N$ giorni di osservazione, conta le **eccezioni** (giorni in cui la perdita supera il VaR).

Sotto l'ipotesi che il VaR al 99% sia corretto, il numero atteso di eccezioni in 250 giorni è:
$$N_{\text{atteso}} = 250 \times 0.01 = 2.5$$

**Test di Kupiec (proporzione di fallimenti):** sotto $H_0$, le eccezioni seguono una distribuzione binomiale $B(250, 0.01)$. Zona verde: 0-4 eccezioni. Zona gialla: 5-9. Zona rossa: 10+. La zona rossa implica sanzioni regolamentari.

**Test di Christoffersen:** verifica anche l'**indipendenza** delle eccezioni nel tempo (eccezioni raggruppate indicano che il modello non cattura i cluster di volatilità).

### Stress Testing

Il VaR cattura i rischi "normali" (99°percentile), ma non gli eventi estremi. Lo **stress testing** simula scenari catastrofici espliciti:

- **Scenario storico:** replicare la crisi del 1987 (Black Monday: -22% in un giorno), la crisi del 2008, il COVID-19 di marzo 2020
- **Scenario ipotetico:** rialzo dei tassi di 500bp, crollo del mercato azionario del 40%, default di un paese sovrano

### Framework regolamentare Basilea

**Basilea II (2004):** VaR al 99%, orizzonte 10 giorni, finestra 1 anno. Moltiplicatore $k \in [3,4]$ per il requisito di capitale.

**Basilea III (2010) / IV:** passaggio dal VaR al 97.5% **Expected Shortfall** (Fundamental Review of the Trading Book, FRTB). L'ES al 97.5% è circa equivalente al VaR al 99% sotto normale, ma è più conservativo nelle code.

**Requisito di capitale (Basilea):**

$$\text{Capitale}_{MRC} = \max\left(\text{VaR}_{t-1}, k \cdot \frac{1}{60}\sum_{i=1}^{60}\text{VaR}_{t-i}\right)$$

## 4. Derivazioni

### Derivazione ES per distribuzione normale

$$\text{ES}_{1-\alpha} = E[L \mid L > \text{VaR}_{1-\alpha}]$$

Per $L = -W \cdot R$ con $R \sim \mathcal{N}(0, \sigma^2)$, la perdita normalizzata è $Z = -R/\sigma \sim \mathcal{N}(0,1)$.

$$\text{ES}_{1-\alpha} = W\sigma \cdot E[Z \mid Z > z_\alpha]$$

Per una normale standard:

$$E[Z \mid Z > z_\alpha] = \frac{1}{\alpha} \int_{z_\alpha}^{\infty} z \phi(z) dz = \frac{1}{\alpha} [-\phi(z)]_{z_\alpha}^{\infty} = \frac{\phi(z_\alpha)}{\alpha}$$

Quindi:

$$\boxed{\text{ES}_{1-\alpha} = W \sigma \cdot \frac{\phi(z_\alpha)}{\alpha}}$$

Per $\alpha = 1\%$: $\phi(2.326) = 0.02665$, quindi $ES = W\sigma \times 2.665$.
Per $\alpha = 5\%$: $\phi(1.645) = 0.10314$, quindi $ES = W\sigma \times 2.063$.

### Dimostrazione non-subadditività del VaR

Siano due posizioni identiche $X$ e $Y$: ognuna perde €10M con probabilità 0.8% e €0 altrimenti (le perdite sono indipendenti).

**VaR al 99% individuale:**
$P(X > 0) = 0.8\% < 1\% \implies \text{VaR}_{99\%}(X) = 0$
Analogamente $\text{VaR}_{99\%}(Y) = 0$.

**VaR al 99% del portafoglio:**
$P(X + Y > 0) = 1 - P(X = 0, Y = 0) = 1 - (1-0.008)^2 = 1 - 0.984064 = 1.6\% > 1\%$

La perdita minima quando si supera il VaR = €10M (almeno una posizione perde).
$\text{VaR}_{99\%}(X+Y) = €10M > 0 = \text{VaR}_{99\%}(X) + \text{VaR}_{99\%}(Y)$

Paradosso: combinare due portafogli "a rischio zero" (secondo il VaR) crea un portafoglio con VaR positivo.

### Scaling rule $\sqrt{T}$

Se i rendimenti giornalieri sono i.i.d. con varianza $\sigma^2$, allora la varianza a $T$ giorni è $T\sigma^2$ (somma di variabili indipendenti). La deviazione standard scala come $\sqrt{T}$, e quindi il VaR scala come $\sqrt{T}$:

$$\text{VaR}(T) = \text{VaR}(1) \times \sqrt{T}$$

In pratica, questa regola è solo approssimata perché i rendimenti non sono i.i.d. (ci sono cluster di volatilità, fat tails, autocorrelazioni).

## 5. Esempi

**Esempio 1 — VaR parametrico base**

Portafoglio: $W = €1.000.000$. Rendimento giornaliero $\mathcal{N}(0, 1\%)$ (dev. standard). Calcolare VaR al 99%.

$$\text{VaR}_{99\%} = 2.326 \times 0.01 \times 1.000.000 = €23.260$$

Interpretazione: c'è l'1% di probabilità di perdere più di €23.260 in un giorno (circa 2-3 giorni l'anno).

**Esempio 2 — ES parametrico**

Con i dati dell'esempio 1, calcolare ES al 99%.

$$\text{ES}_{99\%} = \frac{\phi(2.326)}{0.01} \times 0.01 \times 1.000.000 = \frac{0.02665}{0.01} \times 10.000 = 2.665 \times 10.000 = €26.650$$

Nei giorni peggiori (quell'1% dei casi), la perdita media è €26.650, non solo "più di €23.260".

**Esempio 3 — VaR a 10 giorni**

VaR giornaliero al 99% = €23.260. Calcolare il VaR a 10 giorni.

$$\text{VaR}_{10g} = 23.260 \times \sqrt{10} = 23.260 \times 3.162 = €73.545$$

Basilea II richiede questo calcolo per il requisito di capitale del trading book.

**Esempio 4 — VaR storico: costruzione manuale**

Portafoglio su azioni Eni. Rendimenti ultimi 10 giorni (simulati): -2.1%, +1.3%, -0.5%, -3.8%, +0.9%, -1.2%, +2.4%, -0.7%, +1.8%, -1.5%. Portafoglio = €100.000. VaR al 90% (1° percentile su 10 osservazioni = 1 scenario peggiore)?

Ordine crescente: -3.8%, -2.1%, -1.5%, -1.2%, -0.7%, -0.5%, +0.9%, +1.3%, +1.8%, +2.4%.

Il 10° scenario peggiore (10° da sinistra) è -3.8%. VaR al 90% = $0.038 \times 100.000 = €3.800$.

**Esempio 5 — Non subadditività del VaR**

Due obbligazioni: ognuna default con probabilità 0.8%, perdita = €1.000.000. Default indipendenti.

VaR al 99% di ciascuna = €0 (perché $P(\text{default}) = 0.8\% < 1\%$).

VaR al 99% del portafoglio: $P(\text{almeno un default}) = 1 - (0.992)^2 = 1.6\% > 1\%$. VaR = €1.000.000.

Quindi VaR(A+B) = €1M > VaR(A) + VaR(B) = €0. La diversificazione ha **aumentato** il VaR!

**Esempio 6 — Backtesting**

Una banca ha usato un modello VaR al 99% per 250 giorni. Ha registrato 8 eccezioni (giorni con perdita > VaR).

- Atteso: $250 \times 1\% = 2.5$ eccezioni
- Osservato: 8 eccezioni
- Il modello sottostima il rischio (zona gialla/rossa di Basilea)

Il supervisore (BCE/Fed) può aumentare il moltiplicatore del capitale da 3 a 4 (zona rossa = 10+ eccezioni = moltiplicatore massimo). La banca è sotto pressione a migliorare il modello.

**Esempio 7 — VaR di portafoglio con correlazioni**

Due asset: $W_1 = €600.000, \sigma_1 = 2\%$; $W_2 = €400.000, \sigma_2 = 3\%$; correlazione $\rho = 0.5$.

Varianza portafoglio:
$$\sigma_P^2 = (600.000 \times 0.02)^2 + (400.000 \times 0.03)^2 + 2 \times 0.5 \times (12.000)(12.000)$$
$$= 144.000.000 + 144.000.000 + 144.000.000 = 432.000.000$$

$$\sigma_P = \sqrt{432.000.000} = €20.785$$

$$\text{VaR}_{99\%}^{\text{portafoglio}} = 2.326 \times 20.785 = €48.345$$

$$\text{VaR}_{99\%}^{\text{sum}} = 2.326 \times 12.000 + 2.326 \times 12.000 = €55.824$$

Beneficio diversificazione: €55.824 - €48.345 = **€7.479** (VaR portafoglio < somma VaR individuali: sub-additività rispettata per normale).

**Esempio 8 — Stress testing**

Portafoglio: 40% azioni, 40% obbligazioni, 20% oro. VaR normale al 99% = €45.000 su €1M. Stress test scenario "Lehman Brothers 2008":

- Azioni: -40%
- Obbligazioni governative: +5% (flight to quality)
- Oro: +15%

P&L stress: $(0.40 \times (-0.40) + 0.40 \times 0.05 + 0.20 \times 0.15) \times 1.000.000$
$= (-0.16 + 0.02 + 0.03) \times 1.000.000 = -0.11 \times 1.000.000 = -€110.000$

Lo stress test mostra una perdita di €110.000 vs VaR di €45.000. Il portafoglio sopravvive ma con forte impatto.

## 6. Grafico

```plot
{"fn":"2.326*0.01*x","domain":[0,2000000],"yDomain":[0,50000],"title":"VaR al 99% in funzione del valore del portafoglio (σ=1% giornaliero)","label1":"VaR 99% = 2.326 × σ × W","color":"steelblue"}
```

## 7. Interattivo

```slider
{"fn":"2.326*s*x","domain":[0,1000000],"yDomain":[0,40000],"params":[{"name":"s","min":0.005,"max":0.03,"step":0.005,"default":0.01}],"title":"VaR al 99% al variare della volatilità σ (portafoglio in €)"}
```

## 8. Errori comuni

**Errore 1 — Interpretare il VaR come la "perdita massima".** Il VaR al 99% non è la perdita massima possibile — è la perdita massima nel 99% dei giorni. Nell'1% dei casi si può perdere MOLTO di più. JP Morgan nel 2012 ("London Whale") ha perso $6 miliardi in posizioni che il VaR classificava come sicure.

**Errore 2 — Confondere il livello di confidenza con la probabilità di perdita.** "VaR al 99%" significa che c'è l'1% di probabilità di perdere più del VaR. NON significa che c'è il 99% di probabilità di guadagnare. Il VaR non dice nulla sui guadagni, solo sulla coda sinistra delle perdite.

**Errore 3 — Applicare la regola $\sqrt{T}$ senza verificarne le ipotesi.** La regola funziona solo se i rendimenti giornalieri sono i.i.d. e normali. In realtà, ci sono **cluster di volatilità** (giorni di alta volatilità seguiti da alta volatilità) e **fat tails**: il VaR a 10 giorni calcolato con $\sqrt{10}$ sottostima significativamente il rischio reale durante le crisi.

**Errore 4 — Non fare backtesting.** Il VaR è inutile se non viene validato. Un modello che produce 0 eccezioni in 250 giorni (quando ne aspetti 2.5) è probabilmente **troppo conservativo** (immobilizza troppo capitale). Uno con 15 eccezioni è troppo ottimistico e inadeguato. Solo il backtesting rivela questi problemi.

**Errore 5 — Credere che il VaR catturi il rischio di liquidità.** Il VaR assume che le posizioni possano essere liquidate al prezzo di mercato. Durante le crisi, i mercati diventano illiquidi: il bid-ask spread esplode, si può vendere solo a prezzi molto più bassi. Il **Liquidity-adjusted VaR** (LVaR) corregge per questo, ma è raramente implementato.

**Errore 6 — Ottimizzare il portafoglio per minimizzare il VaR senza considerare ES.** La non-subadditività del VaR può portare a portafogli ottimizzati per il VaR che hanno concentrazioni di rischio di coda elevate. L'ES è una metrica più affidabile per l'ottimizzazione del portafoglio.

**Errore 7 — Dimenticare che il VaR dipende dalla finestra storica nel metodo storico.** Un VaR storico basato su dati 2010–2019 (periodo di bassa volatilità) sarà molto basso. Se poi arriva il COVID-19 di marzo 2020, il modello sarà completamente sbagliato. L'**aggiornamento dinamico** della finestra (es. exponential weighting) mitiga questo problema.

## 9. Applicazioni reali

**Risk management bancario e requisiti di capitale:** le banche calcolano il VaR (ora ES per Basilea IV) su base giornaliera per tutti i portafogli di trading. Il requisito di capitale è proporzionale all'ES: una banca con ES di €100M deve detenere circa €300M di capitale contro il rischio di mercato. Questo vincola la capacità di assumere rischi e il ROE (Return on Equity).

**Hedge fund e controllo del rischio:** fondi come Bridgewater Associates o Renaissance Technologies usano sistemi di risk management sofisticati che includono VaR, ES, e stress test su centinaia di scenari simultaneamente. Il VaR viene decomposto per fattori (equity beta, tasso, credit spread, valute) per identificare le fonti di rischio e bilanciarle. Un gestore che supera il limite di VaR assegnato deve ridurre le posizioni automaticamente.

**Regolamentazione assicurativa (Solvency II):** il regime europeo per le assicurazioni usa il VaR al 99.5% su 1 anno per calcolare il Solvency Capital Requirement (SCR). Un'assicurazione deve avere capitale sufficiente per sopravvivere all'evento che si verifica una volta ogni 200 anni. L'ES complementa questa analisi per le code più estreme.

**Corporate treasury e hedging:** le grandi aziende (Volkswagen, Shell, Siemens) usano il VaR per monitorare l'esposizione complessiva ai rischi di cambio, tasso e commodity. Il "budget del rischio" viene allocato tra le diverse divisioni geografiche, e il VaR viene monitorato in tempo reale per assicurarsi che nessuna divisione superi il limite assegnato.

## 10. Riepilogo

| Concetto | Formula | Note |
| --- | --- | --- |
| VaR parametrico (normale, $\mu=0$) | $\text{VaR}_{1-\alpha} = z_\alpha \cdot \sigma \cdot W$ | $z_{1\%} = 2.326$; $z_{5\%} = 1.645$ |
| VaR con media non nulla | $\text{VaR}_{1-\alpha} = W(-\mu + z_\alpha \sigma)$ | Per orizzonti lunghi $\mu$ è rilevante |
| Scaling temporale | $\text{VaR}(T) = \text{VaR}(1) \times \sqrt{T}$ | Solo se rendimenti i.i.d. normali |
| VaR portafoglio | $z_\alpha \sqrt{\mathbf{w}^T \Sigma \mathbf{w}} \cdot W$ | $\Sigma$ matrice di covarianza |
| Expected Shortfall (normale) | $\text{ES}_{1-\alpha} = W\sigma \cdot \phi(z_\alpha)/\alpha$ | $\text{ES} > \text{VaR}$ sempre |
| ES per $\alpha=1\%$ | $\text{ES}_{99\%} \approx 2.665 \cdot \sigma \cdot W$ | $\phi(2.326)/0.01 = 2.665$ |
| ES per $\alpha=5\%$ | $\text{ES}_{95\%} \approx 2.063 \cdot \sigma \cdot W$ | $\phi(1.645)/0.05 = 2.063$ |
| Sub-additività VaR | Non garantita | Può aumentare con diversificazione |
| Sub-additività ES | ES(A+B) $\leq$ ES(A)+ES(B) | ES è misura coerente |
| Backtesting zona verde | 0–4 eccezioni/250 gg (99%) | Moltiplicatore Basilea = 3 |
| Backtesting zona rossa | ≥10 eccezioni/250 gg (99%) | Moltiplicatore Basilea = 4 |
| Basilea II (mercato) | VaR al 99%, 10 giorni | Ora superato da Basilea III/IV |
| Basilea III/IV (FRTB) | ES al 97.5%, 10 giorni | Standard dal 2022 |

## 11. Esercizi

<details>
<summary>Esercizio 1: VaR parametrico al 95% e 99%</summary>

Portafoglio da €500.000. Rendimento giornaliero: $\mathcal{N}(0, 1.5\%)$. Calcola VaR al 95% e al 99%. Poi calcola il VaR a 10 giorni (Basilea).

**Soluzione.**

**VaR al 95%:** $z_{5\%} = 1.645$

$$\text{VaR}_{95\%} = 1.645 \times 0.015 \times 500.000 = €12.338$$

**VaR al 99%:** $z_{1\%} = 2.326$

$$\text{VaR}_{99\%} = 2.326 \times 0.015 \times 500.000 = €17.445$$

**VaR a 10 giorni (99%):**

$$\text{VaR}_{99\%}^{10g} = 17.445 \times \sqrt{10} = 17.445 \times 3.162 = €55.132$$

Basilea II richiederebbe un capitale minimo di almeno $3 \times €55.132 = €165.396$ contro questo portafoglio.

</details>

<details>
<summary>Esercizio 2: Expected Shortfall e confronto con VaR</summary>

Portafoglio da €2.000.000 con $\sigma = 1\%$ giornaliero. Calcola VaR al 99%, ES al 99%, e il rapporto ES/VaR. Interpreta il risultato.

**Soluzione.**

$$\text{VaR}_{99\%} = 2.326 \times 0.01 \times 2.000.000 = €46.520$$

$$\text{ES}_{99\%} = \frac{\phi(2.326)}{0.01} \times 0.01 \times 2.000.000 = \frac{0.02665}{0.01} \times 20.000 = €53.300$$

$$\text{Rapporto ES/VaR} = \frac{53.300}{46.520} = 1.146$$

Nei giorni in cui si supera il VaR (1% dei casi), la perdita media è 14.6% superiore al VaR. Sotto distribuzione normale, l'ES è moderatamente superiore al VaR. Con distribuzioni a code spesse (fat tails), questo rapporto può essere molto più alto (2x o 3x).

</details>

<details>
<summary>Esercizio 3: VaR storico manuale</summary>

Rendimenti giornalieri di un portafoglio da €100.000 negli ultimi 20 giorni (in %):

+1.2, -0.8, +2.1, -1.5, +0.3, -2.8, +1.7, -0.4, +0.9, -3.2, +1.1, -0.6, +2.3, -1.9, +0.5, -0.2, +1.4, -1.1, +0.7, -4.5

Calcola il VaR al 90% con il metodo storico (2 eccezioni su 20).

**Soluzione.**

Ordina i rendimenti in ordine crescente:
-4.5%, -3.2%, -2.8%, -1.9%, -1.5%, -1.1%, -0.8%, -0.6%, -0.4%, -0.2%, +0.3%, +0.5%, +0.7%, +0.9%, +1.1%, +1.2%, +1.4%, +1.7%, +2.1%, +2.3%

Il VaR al 90% su 20 osservazioni corrisponde al 2° scenario peggiore (10% di 20 = 2):

VaR al 90% = -(-3.2%) = 3.2% → €100.000 × 3.2% = **€3.200**

I due giorni più pesanti (-4.5% e -3.2%) sono le "eccezioni" al 90%. Nota: il 4° scenario peggiore (-1.9%) sarebbe il VaR al 80%.

</details>

<details>
<summary>Esercizio 4: VaR di portafoglio con correlazione</summary>

Portafoglio: azioni €300.000 ($\sigma_1 = 2\%$) e obbligazioni €200.000 ($\sigma_2 = 0.5\%$), correlazione $\rho = -0.3$. Calcola VaR al 99% del portafoglio e confronta con la somma dei VaR individuali.

**Soluzione.**

$$\sigma_{\Pi}^2 = (300.000 \times 0.02)^2 + (200.000 \times 0.005)^2 + 2(-0.3)(6.000)(1.000)$$
$$= 36.000.000 + 1.000.000 - 3.600.000 = 33.400.000$$

$$\sigma_{\Pi} = \sqrt{33.400.000} = €5.779$$

$$\text{VaR}_{99\%}^{\text{portafoglio}} = 2.326 \times 5.779 = €13.442$$

**Somma VaR individuali:**

$$\text{VaR}_1 = 2.326 \times 6.000 = €13.956; \quad \text{VaR}_2 = 2.326 \times 1.000 = €2.326$$

$$\text{Somma} = €16.282$$

**Beneficio diversificazione:** €16.282 - €13.442 = **€2.840** (17.5% di risparmio sul VaR). La correlazione negativa tra azioni e obbligazioni (tipica delle crisi: "flight to quality") riduce significativamente il rischio del portafoglio misto.

</details>

<details>
<summary>Esercizio 5: Backtesting e verifica del modello</summary>

Un banco di investimento ha usato un modello VaR al 99% per 500 giorni lavorativi. Ha registrato 9 eccezioni. Il modello è adeguato secondo Basilea?

**Soluzione.**

Numero di eccezioni attese: $500 \times 0.01 = 5$.

Osservate: 9. La probabilità di osservare 9 o più eccezioni sotto $H_0: p = 0.01$ (binomiale) è:

$$P(X \geq 9) = \sum_{k=9}^{500} \binom{500}{k}(0.01)^k(0.99)^{500-k} \approx 1.5\%$$

La p-value è bassa: c'è evidenza statistica che il modello sottostima il rischio.

Secondo Basilea II su 250 giorni (proporzione equivalente: $9/2 = 4.5$ eccezioni in 250 gg → zona gialla, moltiplicatore $k = 3.4$).

**Conclusione:** il modello è nella zona gialla — non è immediato l'aumento del capitale, ma la banca dovrebbe rivedere le assunzioni del modello.

</details>

<details>
<summary>Esercizio 6: Non subadditività del VaR — caso esplicito</summary>

Due posizioni speculari su credit default swap (CDS): posizione A perde €5M con probabilità 0.9%, posizione B perde €5M con probabilità 0.9%. I due default sono indipendenti. Calcola VaR al 99% di A, B e A+B.

**Soluzione.**

**VaR individuale al 99%:**
$P(A > 0) = 0.9\% < 1\% \implies \text{VaR}_{99\%}(A) = 0$

Analogamente: $\text{VaR}_{99\%}(B) = 0$.

**VaR del portafoglio:**
$P(A+B > 0) = P(\text{almeno un default}) = 1 - (1-0.009)^2 = 1 - 0.982081 = 1.79\% > 1\%$

Minima perdita quando si supera 0: €5M (un solo default).

$$\text{VaR}_{99\%}(A+B) = €5.000.000$$

**Violazione subadditività:**
$$€5.000.000 = \text{VaR}(A+B) > \text{VaR}(A) + \text{VaR}(B) = 0$$

Questo è un esempio reale del problema che i regulatori avevano con la cartolarizzazione dei mutui subprime: tranche individualmente sicure (VaR = 0) formavano portafogli con rischio sistemico elevato.

</details>

<details>
<summary>Esercizio 7: Stress testing di un portafoglio bilancia</summary>

Portafoglio: 60% azioni italiane, 30% BTP, 10% EUR/USD. Valore: €1.000.000. Scenario stress "crisi Italia": azioni -35%, BTP -15% (spread allargamento), EUR/USD -8% (deprezzamento euro). VaR normale al 99% = €28.000. Calcola la perdita in scenario stress.

**Soluzione.**

P&L stress:
$$= (0.60 \times (-0.35) + 0.30 \times (-0.15) + 0.10 \times (-0.08)) \times 1.000.000$$
$$= (-0.210 - 0.045 - 0.008) \times 1.000.000 = -0.263 \times 1.000.000 = -€263.000$$

Lo stress test rivela una perdita potenziale di **€263.000**, quasi 9.4 volte il VaR normale di €28.000. Questo dimostra l'importanza dello stress test: il VaR normale non cattura gli scenari di crisi sistemica dove le correlazioni tra asset cambiano drasticamente.

**Implicazione gestionale:** il gestore dovrebbe considerare di ridurre l'esposizione alle azioni italiane o acquistare protezione (put options sull'indice, CDS sui BTP) per ridurre la perdita in scenario stress a un livello accettabile.

</details>

<details>
<summary>Esercizio 8: Calcolo del requisito di capitale Basilea</summary>

Una banca ha i seguenti VaR al 99% su 10 giorni degli ultimi 60 giorni lavorativi: i primi 59 giorni danno VaR medio di €2.000.000. Il 60° giorno il VaR è €2.500.000. Moltiplicatore $k = 3$ (zona verde). Calcola il requisito di capitale (MRC).

**Soluzione.**

Media VaR 60 giorni:
$$\bar{\text{VaR}} = \frac{59 \times 2.000.000 + 2.500.000}{60} = \frac{118.000.000 + 2.500.000}{60} = \frac{120.500.000}{60} = €2.008.333$$

Requisito di capitale:
$$MRC = \max(\text{VaR}_{t-1}, k \times \bar{\text{VaR}}) = \max(2.500.000, 3 \times 2.008.333) = \max(2.500.000, 6.025.000)$$

$$MRC = €6.025.000$$

Il moltiplicatore $k=3$ amplifica il VaR medio per creare un buffer di sicurezza. Le banche devono detenere questo importo come capitale minimo contro il rischio di mercato del trading book.

</details>
