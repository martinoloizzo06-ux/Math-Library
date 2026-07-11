---
id: finanza-08-black-scholes
subject: finanza
topic_it: Derivati
topic_en: Derivatives
title_it: Modello di Black-Scholes per la valutazione delle opzioni
title_en: Black-Scholes option pricing model
level: purple
order: 8
source_book: "J.C. Hull, Options, Futures and Other Derivatives"
source_chapter: "Cap. 15 — Black-Scholes"
stato: da-rielaborare
---

## 1. Intuizione — analogia concreta

Prima del 1973, la valutazione delle opzioni era una questione quasi artistica: ogni trader usava regole del pollice e intuizione. Fischer Black, Myron Scholes e Robert Merton rivoluzionarono la finanza con una formula derivata dalla fisica — la stessa equazione del calore usata per descrivere la diffusione del calore in un conduttore metallico.

L'idea chiave è il **delta hedging**: se sai come il prezzo dell'opzione cambia al variare del prezzo del sottostante, puoi costruire un portafoglio (opzione + azioni) perfettamente bilanciato che non dipende dalla direzione del mercato. Questo portafoglio "neutrale" deve crescere al tasso risk-free (se non ci fosse arbitraggio). Imponendo questa condizione si ottiene una equazione differenziale parziale, la cui soluzione è la formula di Black-Scholes.

La formula dice: il valore di una call dipende da cinque fattori — il prezzo attuale del sottostante $S_0$, lo strike $K$, la scadenza $T$, il tasso risk-free $r$ e la volatilità $\sigma$. Di questi, tutti sono osservabili tranne la volatilità: il mercato usa la formula "al contrario" per ricavare la **volatilità implicita** dai prezzi delle opzioni, creando un termometro del sentiment del mercato.

Merton e Scholes vinsero il Nobel per l'Economia nel 1997 (Black era morto nel 1995). La formula è uno dei risultati più influenti dell'intera finanza moderna — e capirne la struttura significa capire come il mercato prezza il rischio e il tempo.

## 2. Prerequisiti

- Opzioni: call, put, payoff, parità put-call (lezione precedente)
- Distribuzione normale standard: funzione di densità $\phi$, CDF $\Phi$
- Equazioni differenziali (nozioni base, per capire la derivazione)
- Processi stocastici: moto browniano geometrico (GBM) — intuitivamente
- Capitalizzazione continua: $e^{rT}$
- Le Greche di una funzione (derivate parziali)

## 3. Teoria

### Il modello del sottostante: moto browniano geometrico

Black-Scholes assume che il prezzo del sottostante $S$ segua un **moto browniano geometrico (GBM)**:

$$dS = \mu S \, dt + \sigma S \, dW_t$$

dove:
- $\mu$ è il drift (rendimento atteso istantaneo) — **non appare nella formula finale**
- $\sigma$ è la volatilità istantanea (deviazione standard annualizzata dei rendimenti log-normali)
- $dW_t$ è un'incremento di moto browniano standard: $dW_t \sim \mathcal{N}(0, dt)$

**Implicazione cruciale:** i rendimenti log-normali del sottostante sono normali. Se $S$ segue il GBM, allora:

$$\ln\left(\frac{S_T}{S_0}\right) \sim \mathcal{N}\!\left(\left(\mu - \frac{\sigma^2}{2}\right)T,\; \sigma^2 T\right)$$

La distribuzione log-normale garantisce $S_T > 0$ sempre — il prezzo non può diventare negativo.

### Assunzioni del modello

1. Il sottostante segue il GBM con $\sigma$ **costante**.
2. Nessun dividendo fino a $T$ (estendibile con dividend yield $q$).
3. Tasso risk-free $r$ costante e noto.
4. Nessun costo di transazione, tasse, o limiti alla vendita allo scoperto.
5. Trading continuo possibile.
6. Opzioni europee (no esercizio anticipato).

### Formula di Black-Scholes (1973)

**Call europea:**

$$C = S_0 \Phi(d_1) - K e^{-rT} \Phi(d_2)$$

**Put europea:**

$$P = K e^{-rT} \Phi(-d_2) - S_0 \Phi(-d_1)$$

dove:

$$d_1 = \frac{\ln(S_0/K) + \left(r + \frac{\sigma^2}{2}\right)T}{\sigma\sqrt{T}}$$

$$d_2 = d_1 - \sigma\sqrt{T} = \frac{\ln(S_0/K) + \left(r - \frac{\sigma^2}{2}\right)T}{\sigma\sqrt{T}}$$

e $\Phi(x)$ è la **funzione di distribuzione cumulativa della normale standard**: $\Phi(x) = P(Z \leq x)$ per $Z \sim \mathcal{N}(0,1)$.

### Interpretazione della formula

**$\Phi(d_2)$** è la probabilità (risk-neutral) che la call sia esercitata a scadenza, cioè $P^Q(S_T > K)$.

**$K e^{-rT} \Phi(d_2)$** è il valore attuale del pagamento dello strike, condizionato all'esercizio.

**$S_0 \Phi(d_1)$** è il valore attuale del pagamento condizionale del sottostante. $\Phi(d_1)$ è il delta della call — più su questo sotto.

La formula può essere letta come: **valore attuale di ciò che si riceve** (il sottostante, con probabilità $\Phi(d_1)$) meno **valore attuale di ciò che si paga** (lo strike, con probabilità $\Phi(d_2)$).

**Comportamento limite:**
- $S_0 \gg K$ (deep ITM): $d_1, d_2 \to +\infty$, $\Phi(d_1) = \Phi(d_2) \to 1$, $C \to S_0 - K e^{-rT}$ (valore intrinseco attualizzato).
- $S_0 \ll K$ (deep OTM): $d_1, d_2 \to -\infty$, $\Phi \to 0$, $C \to 0$.
- $T \to 0$: $C \to \max(S_0 - K, 0)$ (valore a scadenza).

### Estensione con dividendi (modello Merton)

Se il sottostante paga un dividend yield continuo $q$:

$$C = S_0 e^{-qT} \Phi(d_1) - K e^{-rT} \Phi(d_2)$$

con $d_1 = \frac{\ln(S_0/K) + (r - q + \sigma^2/2)T}{\sigma\sqrt{T}}$.

### Le Greche (The Greeks)

Le **Greche** misurano la sensibilità del prezzo dell'opzione rispetto ai suoi parametri — fondamentali per il risk management.

**Delta ($\Delta$):** variazione del prezzo dell'opzione per unità di variazione del sottostante.

$$\Delta_{call} = \frac{\partial C}{\partial S} = \Phi(d_1) \in (0, 1)$$

$$\Delta_{put} = \frac{\partial P}{\partial S} = \Phi(d_1) - 1 \in (-1, 0)$$

Delta è anche la quantità di azioni da detenere per delta-neutralizzare l'opzione. Una call ATM ha delta $\approx 0.5$.

**Gamma ($\Gamma$):** tasso di variazione del delta rispetto al prezzo del sottostante (derivata seconda).

$$\Gamma_{call} = \Gamma_{put} = \frac{\partial^2 C}{\partial S^2} = \frac{\phi(d_1)}{S_0 \sigma \sqrt{T}} > 0$$

dove $\phi$ è la densità normale standard. Gamma alto significa che il delta cambia rapidamente — il portafoglio delta-neutro deve essere ribilanciato frequentemente.

**Vega ($\mathcal{V}$):** sensibilità rispetto alla volatilità.

$$\mathcal{V}_{call} = \mathcal{V}_{put} = \frac{\partial C}{\partial \sigma} = S_0 \phi(d_1) \sqrt{T} > 0$$

Vega è sempre positivo: maggiore volatilità $\to$ maggior valore per call e put (più probabilità di finire ITM).

**Theta ($\Theta$):** variazione del prezzo dell'opzione per un giorno che passa (decadimento temporale).

$$\Theta_{call} = -\frac{S_0 \phi(d_1) \sigma}{2\sqrt{T}} - r K e^{-rT} \Phi(d_2)$$

Theta è tipicamente negativo per le opzioni long: col passare del tempo, il valore dell'opzione diminuisce (time decay). Un'opzione ATM perde valore più rapidamente man mano che si avvicina la scadenza.

**Rho ($\rho$):** sensibilità rispetto al tasso di interesse.

$$\rho_{call} = K T e^{-rT} \Phi(d_2) > 0$$

$$\rho_{put} = -K T e^{-rT} \Phi(-d_2) < 0$$

Un aumento del tasso risk-free favorisce le call (lo strike attualizzato vale meno) e penalizza le put.

**Tabella riassuntiva delle Greche:**

| Greco | Definizione | Call | Put |
| --- | --- | --- | --- |
| Delta $\Delta$ | $\partial C / \partial S$ | $(0, 1)$ | $(-1, 0)$ |
| Gamma $\Gamma$ | $\partial^2 C / \partial S^2$ | $> 0$ | $> 0$ |
| Vega $\mathcal{V}$ | $\partial C / \partial \sigma$ | $> 0$ | $> 0$ |
| Theta $\Theta$ | $\partial C / \partial t$ | tipicamente $< 0$ | $< 0$ o $> 0$ |
| Rho $\rho$ | $\partial C / \partial r$ | $> 0$ | $< 0$ |

### Volatilità implicita e volatility smile

La **volatilità implicita (IV)** è il valore di $\sigma$ che, inserito nella formula di Black-Scholes, riproduce il prezzo di mercato dell'opzione. Si ottiene per inversione numerica (non c'è formula chiusa).

$$C_{\text{mercato}} = BS(S_0, K, r, T, \sigma_{imp}) \implies \sigma_{imp} = BS^{-1}(C_{\text{mercato}})$$

Se la formula di Black-Scholes fosse perfetta, la IV sarebbe la stessa per tutti gli strike. In realtà, la IV varia con $K$ — il cosiddetto **volatility smile** o **volatility skew**:

- **Smile:** IV alta per opzioni OTM in entrambe le direzioni — tipico per opzioni su valute (rilievo dei "salti").
- **Skew (smirk):** IV più alta per put OTM che per call OTM — tipico per opzioni su azioni. Gli investitori pagano di più per la protezione al ribasso (fat left tail). Dopo il crash del 1987 il mercato ha imparato che i crolli grandi esistono più spesso della normale lo preveda.

La **superficie di volatilità implicita** mappa IV(K, T) per tutti gli strike e le scadenze — è lo strumento principale dei trader di opzioni per capire come il mercato prezza il rischio.

## 4. Derivazioni

### Derivazione dell'equazione di Black-Scholes

Dato $S$ che segue il GBM, consideriamo un'opzione con valore $V(S, t)$. Per il lemma di Itô:

$$dV = \frac{\partial V}{\partial t} dt + \frac{\partial V}{\partial S} dS + \frac{1}{2} \frac{\partial^2 V}{\partial S^2} (dS)^2$$

Sostituendo $dS = \mu S \, dt + \sigma S \, dW$ e usando $(dW)^2 = dt$:

$$dV = \left(\frac{\partial V}{\partial t} + \mu S \frac{\partial V}{\partial S} + \frac{1}{2}\sigma^2 S^2 \frac{\partial^2 V}{\partial S^2}\right) dt + \sigma S \frac{\partial V}{\partial S} dW$$

Costruiamo il portafoglio delta-neutro: $\Pi = V - \Delta S$ con $\Delta = \partial V / \partial S$:

$$d\Pi = dV - \Delta \, dS = \left(\frac{\partial V}{\partial t} + \frac{1}{2}\sigma^2 S^2 \frac{\partial^2 V}{\partial S^2}\right) dt$$

Il termine stocastico $dW$ si cancella! Il portafoglio $\Pi$ è privo di rischio $\implies$ deve crescere al tasso $r$:

$$d\Pi = r \Pi \, dt = r(V - \Delta S) dt = r\left(V - S\frac{\partial V}{\partial S}\right) dt$$

Uguagliando le due espressioni per $d\Pi$:

$$\boxed{\frac{\partial V}{\partial t} + \frac{1}{2}\sigma^2 S^2 \frac{\partial^2 V}{\partial S^2} + r S \frac{\partial V}{\partial S} - rV = 0}$$

Questa è la **EDP di Black-Scholes**. Con le condizioni al contorno della call ($V(S,T) = \max(S-K,0)$), la soluzione è la formula C-B-S.

### Calcolo di $d_1$ e $d_2$ dalla soluzione

La soluzione dell'EDP con la trasformazione $V(S, t) = e^{-r(T-t)} \mathbb{E}^Q[\max(S_T - K, 0)]$ porta a calcolare:

$$C = e^{-rT} \int_K^{\infty} (s - K) \, f^Q(s) \, ds$$

dove $f^Q$ è la densità log-normale di $S_T$ sotto la misura risk-neutral $Q$ (con drift $r$ invece di $\mu$). Il calcolo esplicito di questo integrale dà:

$$C = S_0 \Phi(d_1) - K e^{-rT} \Phi(d_2)$$

con $d_1, d_2$ come definiti — i limiti dell'integrale trasformati in termini della normale standard.

## 5. Esempi

**Esempio 1 — Call europea ATM: calcolo completo**

$S_0 = €100$, $K = €100$, $r = 5\%$, $\sigma = 20\%$, $T = 1$ anno.

$d_1 = \frac{\ln(100/100) + (0.05 + 0.02) \times 1}{0.20 \times 1} = \frac{0 + 0.07}{0.20} = 0.35$

$d_2 = 0.35 - 0.20 = 0.15$

$\Phi(0.35) = 0.6368$, $\Phi(0.15) = 0.5596$

$C = 100 \times 0.6368 - 100 \times e^{-0.05} \times 0.5596 = 63.68 - 95.12 \times 0.5596 = 63.68 - 53.24 = \mathbf{€10.45}$

Delta $= \Phi(d_1) = 0.637$: la call sale di circa €0.63 per ogni €1 di aumento del sottostante.

---

**Esempio 2 — Put tramite parità put-call**

Con i dati dell'esempio 1, calcoliamo la put usando la parità put-call:

$P = C - S_0 + K e^{-rT} = 10.45 - 100 + 100 \times e^{-0.05} = 10.45 - 100 + 95.12 = \mathbf{€5.57}$

Verifica con la formula della put:

$\Phi(-d_1) = 1 - 0.6368 = 0.3632$, $\Phi(-d_2) = 1 - 0.5596 = 0.4404$

$P = 100 \times e^{-0.05} \times 0.4404 - 100 \times 0.3632 = 41.87 - 36.32 = €5.55$ ✓ (differenze per arrotondamento)

---

**Esempio 3 — Effetto della volatilità (Vega)**

Stesso esempio, ma $\sigma = 30\%$:

$d_1 = \frac{0 + 0.07 + 0.5 \times 0.09}{0.30} = \frac{0.115}{0.30} = 0.383$

$d_2 = 0.383 - 0.30 = 0.083$

$C = 100 \times \Phi(0.383) - 95.12 \times \Phi(0.083) = 100 \times 0.6491 - 95.12 \times 0.5331 = 64.91 - 50.71 = \mathbf{€14.20}$

Con $\sigma = 20\%$: $C = €10.45$. Con $\sigma = 30\%$: $C = €14.20$. Il Vega è circa $\Delta C / \Delta\sigma = (14.20 - 10.45) / 0.10 = €37.5$ per unità di vol — o circa €3.75 per ogni punto percentuale di aumento della volatilità.

---

**Esempio 4 — Delta hedging**

Un market maker ha venduto 1.000 call con delta $= 0.637$.

Per essere delta-neutro: compra $1.000 \times 0.637 = 637$ azioni. Il portafoglio (−1.000 call + 637 azioni) ha $\Delta = -1.000 \times 0.637 + 637 \times 1 = 0$.

Se il sottostante sale di €1:
- Perdita sulle call: $1.000 \times 0.637 = €637$
- Guadagno sulle azioni: $637 \times 1 = €637$
- Netto: €0 (approssimativamente)

Il delta hedging è solo approssimativo per movimenti grandi (gamma non è zero). Si deve ribilanciare continuamente.

---

**Esempio 5 — Volatilità implicita**

Una call ATM ($S_0 = K = €50$) con $T = 3$ mesi, $r = 2\%$ vale €3.20 sul mercato.

La formula BS con $\sigma = 25\%$ dà:

$d_1 = \frac{0 + (0.02 + 0.03125) \times 0.25}{0.25 \times 0.5} = \frac{0.01281}{0.125} = 0.1025$

$C = 50 \times \Phi(0.1025) - 50 \times e^{-0.005} \times \Phi(-0.0225)$

Prova con $\sigma = 30\%$: $C \approx €3.50$. Con $\sigma = 25\%$: $C \approx €2.90$. Interpolando: la volatilità implicita è circa $\sigma_{imp} \approx 27.5\%$ per $C = €3.20$.

---

**Esempio 6 — Theta (time decay)**

Call ATM: $S_0 = K = €50$, $\sigma = 20\%$, $r = 3\%$.

$\phi(d_1) \approx 0.3989$ per $d_1 \approx 0$.

$\Theta_{call} \approx -\frac{50 \times 0.3989 \times 0.20}{2\sqrt{T}} - 0.03 \times 50 \times e^{-0.03T} \times \Phi(d_2)$

Per $T = 1$ anno: $\Theta \approx -€1.99/\text{anno} = -€0.0055/\text{giorno}$

Per $T = 1$ mese ($T = 1/12$): $\Theta \approx -€6.88/\text{anno} = -€0.019/\text{giorno}$

Il time decay accelera avvicinandosi alla scadenza — le opzioni ATM perdono valore sempre più rapidamente.

---

**Esempio 7 — Deep ITM e deep OTM**

$S_0 = €100$, $K = €80$ (deep ITM), $\sigma = 20\%$, $r = 5\%$, $T = 1$ anno.

$d_1 = \frac{\ln(100/80) + 0.07}{0.20} = \frac{0.223 + 0.07}{0.20} = 1.465$

$\Phi(d_1) = 0.929 \approx 1$ — delta quasi 1: la call si comporta come l'azione stessa.

$C \approx S_0 - K e^{-rT} = 100 - 80 \times e^{-0.05} = 100 - 76.10 = €23.90$ (valore intrinseco attualizzato)

Con $K = €120$ (deep OTM): $d_1 = (ln(100/120) + 0.07)/0.20 = (-0.182 + 0.07)/0.20 = -0.56$. $\Phi(-0.56) = 0.29$ — delta basso, l'opzione ha principalmente valore temporale.

## 6. Grafico

```plot
{"fn":"Math.max(x-100,0)","fn2":"10.45+0.637*(x-100)","domain":[70,140],"yDomain":[-5,45],"title":"Payoff call a scadenza (rosso) vs prezzo BS e tangente delta (blu)","label1":"Payoff a scadenza","label2":"Approssimazione delta (tangente)","color":"tomato","color2":"steelblue","xLabel":"S","yLabel":"Valore"}
```

## 7. Interattivo

```slider
{"fn":"Math.max(0, S*0.637 - 95.12*0.56 + (sigma-20)*(S*0.399*1)/100 )","domain":[60,140],"yDomain":[-5,50],"params":[{"name":"sigma","min":10,"max":60,"step":5,"default":20},{"name":"S","min":60,"max":140,"step":5,"default":100}],"title":"Valore approssimato della call al variare di S e della volatilità σ"}
```

## 8. Errori comuni

**Errore 1 — Usare $\Phi(d_2)$ come probabilità di guadagno.**
$\Phi(d_2)$ è la probabilità (sotto la misura risk-neutral $Q$) che la call sia esercitata — non la probabilità "reale" di guadagnare. Sotto la misura storica $P$, la probabilità di esercizio è $\Phi\left(\frac{\ln(S_0/K) + (\mu - \sigma^2/2)T}{\sigma\sqrt{T}}\right)$ con $\mu$ al posto di $r$.

**Errore 2 — Dimenticare il segno in $d_2 = d_1 - \sigma\sqrt{T}$.**
$d_2$ è sempre minore di $d_1$, quindi $\Phi(d_2) < \Phi(d_1)$. Confondere i due porta a una formula errata per la call.

**Errore 3 — Pensare che il delta sia costante.**
Il delta cambia continuamente con $S$ e $t$ (a causa del gamma). Il delta hedging richiede ribilanciamento continuo — nella pratica si fa periodicamente, accettando un piccolo rischio residuo (gamma risk).

**Errore 4 — Confondere volatilità storica e volatilità implicita.**
La volatilità storica si misura dai rendimenti passati. La volatilità implicita è estratta dai prezzi di mercato delle opzioni — riflette le aspettative future. Non coincidono: spesso la IV è superiore alla vol storica (volatility risk premium) perché il mercato prezza il rischio di momenti avversi.

**Errore 5 — Credere che Black-Scholes valga per le opzioni americane.**
La formula vale solo per opzioni europee. Per opzioni americane, l'esercizio anticipato può essere ottimale (put americane quando profondamente ITM o tasso alto), e si usano metodi numerici (binomial tree, Monte Carlo, differenze finite).

**Errore 6 — Ignorare il segno del Theta.**
Il Theta è quasi sempre negativo per le opzioni long: il tempo che passa riduce il valore. Solo la put americana profondamente ITM (con alto tasso) può avere Theta positivo. Molti studenti confondono il segno della convenzione (Theta come derivata rispetto al tempo rimanente $T-t$ o al tempo trascorso $t$).

**Errore 7 — Pensare che la volatilità implicita sia la stessa per tutti gli strike.**
Il volatility smile/skew è una realtà di mercato: la IV varia sistematicamente con lo strike (e la scadenza). Questo è uno dei limiti fondamentali di Black-Scholes, che assume $\sigma$ costante.

## 9. Applicazioni reali

**Market making su opzioni:** i market maker di opzioni usano le Greche per gestire il rischio del loro book. Mantengono il delta neutro ribilanciando le azioni, minimizzano il gamma risk, e cercano opportunità dove la IV prezzata è più alta della volatilità che si aspettano si realizzi (vendita di vega).

**Structured products:** le banche costruiscono prodotti strutturati (capital protected, reverse convertible) usando opzioni come building block. La formula di Black-Scholes permette di prezzare queste strutture e calcolarne il costo di replicazione.

**Gestione del rischio (VaR):** la sensitivity analysis basata sulle Greche è usata per calcolare il Value at Risk dei portafogli di opzioni. Un portafoglio con alto gamma ha rischio molto non-lineare, richiedendo metodi full revaluation invece della semplice approssimazione delta.

**Volatilità implicita come indicatore di mercato:** l'indice VIX è la radice quadrata della media ponderata delle varianze implicite nelle opzioni S&P 500 a 30 giorni — il "barometro della paura" dei mercati. Un VIX alto (> 30) segnala stress estremo; un VIX basso (< 15) segnala mercati tranquilli e spesso complacenza.

## 10. Riepilogo

| Concetto | Formula | Note |
| --- | --- | --- |
| GBM | $dS = \mu S \, dt + \sigma S \, dW$ | Modello del sottostante |
| $d_1$ | $\frac{\ln(S_0/K)+(r+\sigma^2/2)T}{\sigma\sqrt{T}}$ | Argomento della Normale |
| $d_2$ | $d_1 - \sigma\sqrt{T}$ | Sempre $d_2 < d_1$ |
| Call BS | $C = S_0\Phi(d_1) - Ke^{-rT}\Phi(d_2)$ | Opzione europea |
| Put BS | $P = Ke^{-rT}\Phi(-d_2) - S_0\Phi(-d_1)$ | Via parità put-call |
| Delta call | $\Phi(d_1) \in (0,1)$ | Qty di azioni nel hedge |
| Gamma | $\phi(d_1)/(S\sigma\sqrt{T})$ | Convessità, uguale per C e P |
| Vega | $S_0\phi(d_1)\sqrt{T} > 0$ | Uguale per C e P |
| Volatilità implicita | $\sigma: BS(\sigma) = C_{mkt}$ | Inversione numerica |

## 11. Esercizi

<details>
<summary>Esercizio 1: Call europea — calcolo completo</summary>

$S_0 = €50$, $K = €52$, $r = 4\%$, $\sigma = 25\%$, $T = 6$ mesi ($T = 0.5$).

Calcola $C$, $\Delta$, $d_1$, $d_2$.

**Soluzione:**

$d_1 = \frac{\ln(50/52) + (0.04 + 0.03125) \times 0.5}{0.25 \times \sqrt{0.5}} = \frac{\ln(0.9615) + 0.03563}{0.1768} = \frac{-0.03922 + 0.03563}{0.1768} = \frac{-0.00359}{0.1768} = -0.0203$

$d_2 = -0.0203 - 0.1768 = -0.1971$

$\Phi(-0.0203) \approx 0.4919$, $\Phi(-0.1971) \approx 0.4219$

$C = 50 \times 0.4919 - 52 \times e^{-0.02} \times 0.4219 = 24.595 - 52 \times 0.9802 \times 0.4219 = 24.595 - 21.512 = \mathbf{€3.08}$

Delta $= \Phi(d_1) = 0.492$: l'opzione è quasi ATM, delta vicino a 0.5.

</details>

<details>
<summary>Esercizio 2: Put tramite parità put-call</summary>

Con i dati dell'esercizio 1, calcola $P$ usando la parità put-call.

**Soluzione:**

$P = C - S_0 + K e^{-rT} = 3.08 - 50 + 52 \times e^{-0.02} = 3.08 - 50 + 52 \times 0.9802 = 3.08 - 50 + 50.97 = \mathbf{€4.05}$

La put vale più della call perché il sottostante ($€50$) è sotto lo strike ($€52$) — la put è leggermente ITM, la call è OTM.

</details>

<details>
<summary>Esercizio 3: Delta hedging — portafoglio neutro</summary>

Un trader ha venduto 500 call con delta $= 0.55$. Prezzo azione: €80. Quante azioni compra per delta-neutralizzare?

Se il giorno dopo il prezzo dell'azione sale a €82 e il delta diventa 0.62, come deve ribilanciare?

**Soluzione:**

Inizialmente: compra $500 \times 0.55 = 275$ azioni. Portafoglio: −500 call + 275 azioni.

Dopo il rialzo: il nuovo delta richiede $500 \times 0.62 = 310$ azioni. Attualmente ne ha 275. Deve comprare altre $310 - 275 = 35$ azioni.

Il gamma risk: il ribilanciamento costa denaro (si compra dopo il rialzo). Il costo del gamma è la principale fonte di perdita per i venditori di opzioni che fanno delta hedging.

</details>

<details>
<summary>Esercizio 4: Effetto della scadenza (Theta)</summary>

Call ATM ($S_0 = K = €100$), $\sigma = 20\%$, $r = 3\%$.

Con la formula di Black-Scholes, calcola $C$ per $T = 1$ anno, $T = 0.5$ anni, $T = 1/12$ anno (1 mese).

Commenta l'accelerazione del time decay.

**Soluzione:**

Per $T = 1$: $d_1 = (0 + 0.05)/0.20 = 0.25$, $\Phi(0.25) = 0.599$, $d_2 = 0.05$, $\Phi(0.05) = 0.520$
$C = 100 \times 0.599 - 100 \times e^{-0.03} \times 0.520 = 59.9 - 97.04 \times 0.520 = 59.9 - 50.46 = \mathbf{€9.44}$

Per $T = 0.5$: $d_1 = (0 + 0.025)/(0.20 \times 0.707) = 0.025/0.141 = 0.177$, $\Phi(0.177) = 0.570$, $d_2 = 0.177 - 0.141 = 0.036$, $\Phi(0.036) = 0.514$
$C = 100 \times 0.570 - 100 \times e^{-0.015} \times 0.514 = 57.0 - 98.5 \times 0.514 = 57.0 - 50.62 = \mathbf{€6.38}$

Per $T = 1/12$: $d_1 = (0 + 0.0025)/(0.20 \times 0.289) = 0.0025/0.0577 = 0.043$, $\Phi = 0.517$, $d_2 = -0.015$, $\Phi = 0.494$
$C \approx 100 \times 0.517 - 100 \times e^{-0.0025} \times 0.494 = 51.7 - 49.26 = \mathbf{€2.44}$

Il decay: da 12 a 6 mesi si perdono €3.06, da 6 a 1 mese si perdono €3.94. Il tempo finale vale molto di più — la radice quadrata del tempo spiega questa non-linearità.

</details>

<details>
<summary>Esercizio 5: Volatilità implicita — interpretazione</summary>

Una call ATM ($S_0 = K = €30$) a 1 mese ($T = 1/12$) vale €1.50 sul mercato. $r = 2\%$.

Trova la volatilità implicita (per tentativi) e commentala.

**Soluzione:**

Con $\sigma = 30\%$: $d_1 = (0 + (0.02 + 0.045)/12)/(0.30/\sqrt{12}) = 0.00542/0.0866 = 0.0625$. $C = 30 \times 0.525 - 30 \times e^{-0.00167} \times 0.510 = 15.75 - 15.25 = €0.50$. Troppo basso.

Con $\sigma = 60\%$: $d_1 = (0 + 0.0183)/(0.60/\sqrt{12}) = 0.0183/0.1732 = 0.1057$. $C \approx 30 \times 0.542 - 29.95 \times 0.508 = 16.26 - 15.23 = €1.03$. Ancora basso.

Con $\sigma = 90\%$: $C \approx 30 \times 0.567 - 29.95 \times 0.510 = 17.01 - 15.27 = €1.74$. Troppo alto.

La volatilità implicita è circa $\sigma_{imp} \approx 82\%$ per $C = €1.50$. Una IV di 82% indica enorme incertezza di mercato (es. pre-earnings di un'azienda biotech).

</details>

<details>
<summary>Esercizio 6: Le Greche — portafoglio di opzioni</summary>

Un portafoglio ha: 100 call long (delta $= 0.60$, gamma $= 0.04$, vega $= 15$) e 50 put short (delta $= -0.40$, gamma $= 0.03$, vega $= 12$).

Calcola delta, gamma e vega totali del portafoglio.

**Soluzione:**

Delta totale: $100 \times 0.60 + (-50) \times (-0.40) = 60 + 20 = 80$ (portafoglio rialzista)

Gamma totale: $100 \times 0.04 + (-50) \times 0.03 = 4.0 - 1.5 = 2.5$ (positivo: il portafoglio beneficia dalla volatilità realizzata)

Vega totale: $100 \times 15 + (-50) \times 12 = 1500 - 600 = 900$ (positivo: beneficia dall'aumento della volatilità implicita)

Il portafoglio è long delta (rialzista), long gamma (beneficia dai movimenti grandi del sottostante) e long vega (beneficia dall'aumento della IV). Questo rispecchia una visione "rialzista con alta volatilità".

</details>
