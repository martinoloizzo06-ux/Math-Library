---
id: finanza-06-fattori
subject: finanza
topic_it: Teoria del portafoglio
topic_en: Portfolio theory
title_it: Modelli fattoriali e Fama-French
title_en: Factor models and Fama-French
level: purple
order: 6
source_book: "Bodie, Kane & Marcus, Investments; J.C. Hull, Options, Futures and Other Derivatives"
source_chapter: "Cap. 10 — Modelli fattoriali"
stato: da-rielaborare
---

## 1. Intuizione — perché il CAPM da solo non basta

Il CAPM è elegante e fondamentale, ma ha un problema: empiricamente, non funziona bene. Negli anni '80 e '90, i ricercatori hanno scoperto che i rendimenti azionari sono sistematicamente spiegati da variabili che il CAPM ignora. Le aziende piccole rendono di più delle grandi (size effect), e le aziende "value" (con alto rapporto book-to-market) rendono di più delle "growth" (value premium). Questi fenomeni persistono anche dopo aver controllato per il beta di mercato: i rendimenti extra non sono compensazione per il rischio sistematico CAPM, ma qualcosa di diverso.

Immagina di analizzare 10.000 azioni americane su 50 anni di dati. Se ordini le azioni dal più piccolo al più grande e calcoli i rendimenti, le aziende più piccole hanno reso in media 2-3% in più annuo rispetto alle grandi, a parità di beta di mercato. Questo non dovrebbe succedere secondo il CAPM: se il mercato fosse il solo fattore di rischio rilevante, beta uguale dovrebbe significare rendimento atteso uguale.

La risposta dei ricercatori è stata: ci sono *altri* fattori di rischio sistematici — rischi che non puoi eliminare con la diversificazione e per cui il mercato ti paga un premio. Il modello Fama-French ha identificato i più importanti: dimensione (small vs. large cap), valore (value vs. growth), redditività e investimenti.

L'Arbitrage Pricing Theory (APT), sviluppata da Stephen Ross nel 1976, fornisce il fondamento teorico: in un mercato senza arbitraggio, il rendimento atteso di qualsiasi asset deve essere lineare nei suoi carichi fattoriali ($\beta$) moltiplicati per i premi di rischio di ciascun fattore. I modelli Fama-French sono un'implementazione empirica dell'APT.

Questi modelli hanno avuto un impatto pratico enorme: sono alla base degli ETF "smart beta" e delle strategie quantitative, e hanno ridefinito come misuriamo le performance dei fondi (un fondo che batte il mercato ma investe solo in small-cap value non ha necessariamente un gestore capace — ha semplicemente preso esposizione ai fattori).

## 2. Prerequisiti

- CAPM e concetto di beta
- Diversificazione e frontiera efficiente di Markowitz
- Alpha di Jensen e Security Market Line
- Regressione lineare OLS (per stimare i coefficienti fattoriali)
- Concetto di portafoglio long-short (zero-investment portfolio)

## 3. Teoria

### Modello a un fattore (CAPM come caso speciale)

Il CAPM può essere scritto come un modello a un fattore:

$$R_i - r_f = \alpha_i + \beta_i^{\text{MKT}}(R_m - r_f) + \varepsilon_i$$

dove $\varepsilon_i$ è l'errore idiosincratico con $E[\varepsilon_i]=0$ e $\text{Cov}(\varepsilon_i, R_m)=0$.

**Decomposizione della varianza:**

$$\sigma_i^2 = \underbrace{\beta_i^2\sigma_m^2}_{\text{sistematico}} + \underbrace{\sigma_{\varepsilon_i}^2}_{\text{idiosincratico}}$$

In equilibrio CAPM, $\alpha_i=0$ per tutti gli asset. Qualsiasi $\alpha_i \neq 0$ segnala un'anomalia che il modello non spiega.

### Arbitrage Pricing Theory (APT) — Ross (1976)

L'APT generalizza il CAPM a $k$ fattori di rischio sistematici:

$$E[R_i] = r_f + \beta_{i1}\lambda_1 + \beta_{i2}\lambda_2 + \cdots + \beta_{ik}\lambda_k$$

- $\beta_{ij}$: **loading** (carico fattoriale) dell'asset $i$ sul fattore $j$ — sensibilità del rendimento al fattore
- $\lambda_j$: **premio per il rischio** del fattore $j$ — rendimento extra per unità di esposizione al fattore

Il modello è derivato dall'assenza di arbitraggio: se due portafogli ben diversificati hanno lo stesso profilo di esposizione ai fattori, devono avere lo stesso rendimento atteso, altrimenti esisterebbe un'opportunità di arbitraggio a costo zero.

**Limiti dell'APT:** il modello non specifica quali sono i fattori né quanti ce ne sono — è una struttura teorica che lascia liberi i ricercatori di identificare empiricamente i fattori rilevanti.

### Modello di Fama-French a tre fattori (1993)

Eugene Fama e Kenneth French hanno identificato empiricamente tre fattori che spiegano la maggior parte della variazione cross-sezionale dei rendimenti azionari americani:

$$E[R_i] - r_f = \beta_i^{\text{MKT}}(R_m-r_f) + \beta_i^{\text{SMB}}\cdot\text{SMB} + \beta_i^{\text{HML}}\cdot\text{HML}$$

**MKT** ($R_m - r_f$): il fattore di mercato, identico al CAPM.

**SMB** (Small Minus Big): il rendimento di un portafoglio long small-cap e short large-cap. Cattura il **size premium**: le aziende piccole rendono in media più delle grandi. Premio storico: circa 2-3% annuo.

**HML** (High Minus Low book-to-market): rendimento di un portafoglio long azioni "value" (alto rapporto book value/market value) e short azioni "growth" (basso book/market). Cattura il **value premium**: le azioni value rendono in media più delle growth. Premio storico: circa 3-5% annuo.

**Interpretazione dei beta fattoriali:**

| $\beta^{\text{SMB}}$ | Interpretazione |
|---|---|
| $> 0$ | Esposizione alle small-cap: si comporta come le aziende piccole |
| $\approx 0$ | Neutro rispetto alla dimensione |
| $< 0$ | Esposizione alle large-cap |

| $\beta^{\text{HML}}$ | Interpretazione |
|---|---|
| $> 0$ | Azione value: alto book/market, tipicamente ciclica |
| $\approx 0$ | Neutro rispetto a value/growth |
| $< 0$ | Azione growth: basso book/market, azienda in forte crescita |

### Modello Carhart a quattro fattori (1997)

Mark Carhart aggiunge il fattore **momentum**:

$$E[R_i]-r_f = \beta^{\text{MKT}}(R_m-r_f) + \beta^{\text{SMB}}\cdot\text{SMB} + \beta^{\text{HML}}\cdot\text{HML} + \beta^{\text{MOM}}\cdot\text{MOM}$$

**MOM** (Momentum): rendimento di un portafoglio long nelle azioni che hanno performato meglio nei 12 mesi precedenti (escludendo l'ultimo mese) e short nelle peggiori. Premio storico: circa 7-8% annuo, ma con forti crash periodici.

Il momentum è l'anomalia più robusta: le azioni che sono salite tendono a continuare a salire nel breve periodo (3-12 mesi). La spiegazione teorica è dibattuta: underreaction alle notizie, herding degli investitori, o vero rischio?

### Modello Fama-French a cinque fattori (2015)

Fama e French estendono il modello a tre fattori aggiungendo:

$$E[R_i]-r_f = \beta^{\text{MKT}}\cdot\text{MKT} + \beta^{\text{SMB}}\cdot\text{SMB} + \beta^{\text{HML}}\cdot\text{HML} + \beta^{\text{RMW}}\cdot\text{RMW} + \beta^{\text{CMA}}\cdot\text{CMA}$$

**RMW** (Robust Minus Weak profitability): rendimento extra delle aziende con alta redditività operativa rispetto alle deboli. Le aziende profittevoli tendono a sovraperformare.

**CMA** (Conservative Minus Aggressive investment): rendimento extra delle aziende con investimenti conservativi rispetto alle aggressive. Le aziende che investono poco (e quindi distribuiscono più free cash flow) tendono a sovraperformare.

### Alpha vero vs. alpha apparente

Nei modelli multi-fattore, l'**alpha** viene definito come:

$$\alpha_i = E[R_i] - r_f - \sum_j \beta_{ij}\lambda_j$$

È il rendimento non spiegato dall'esposizione ai fattori noti. Un alpha positivo in un modello a 3 fattori può diventare zero aggiungendo altri fattori (es. momentum). Un alpha genuinamente positivo e persistente è estremamente raro e indica una vera capacità di selezione (stock picking).

## 4. Derivazioni

### Costruzione del fattore SMB

SMB è un portafoglio long-short costruito come segue:
1. Ogni anno, ordina tutte le azioni per capitalizzazione di mercato.
2. Definisci "small" il 30% inferiore, "big" il 30% superiore.
3. Costruisci i portafogli di small cap e big cap ponderati per capitalizzazione.
4. SMB$_t$ = rendimento mensile del portafoglio small - rendimento del portafoglio big.

$\text{SMB}_t = R_{\text{small},t} - R_{\text{big},t}$

La costruzione è analoga per HML (usando il rapporto book-to-market), RMW (usando la redditività) e CMA (usando il tasso di crescita degli investimenti).

### Stima dei beta fattoriali con OLS

Per stimare i beta fattoriali di un asset $i$, si esegue una regressione OLS su dati storici mensili:

$$R_{i,t} - r_{f,t} = \alpha_i + \beta_i^{\text{MKT}}(R_{m,t}-r_{f,t}) + \beta_i^{\text{SMB}}\cdot\text{SMB}_t + \beta_i^{\text{HML}}\cdot\text{HML}_t + \varepsilon_{i,t}$$

I beta stimati ($\hat{\beta}_i^{\text{MKT}}, \hat{\beta}_i^{\text{SMB}}, \hat{\beta}_i^{\text{HML}}$) indicano l'esposizione storica ai fattori. L'alpha $\hat{\alpha}_i$ è il rendimento anomalo non spiegato dai fattori.

### Relazione tra APT e Fama-French

Il modello Fama-French è un'implementazione dell'APT con tre fattori specifici identificati empiricamente. La differenza principale: nell'APT i fattori sono macroeconomici (sorprese d'inflazione, crescita industriale, spread creditizi), nel modello Fama-French sono portafogli "fattore" costruiti dai dati azionari stessi. Entrambi prevedono la stessa relazione lineare tra beta e rendimento atteso.

## 5. Esempi

**Esempio 1 — Rendimento atteso con modello Fama-French a 3 fattori**

$\beta^{\text{MKT}}=1.0$, $\beta^{\text{SMB}}=0.8$, $\beta^{\text{HML}}=0.3$. Premi storici: MKT$=6\%$, SMB$=2\%$, HML$=4\%$. $r_f=2\%$.

$$E[R_i] = 2 + 1.0 \cdot 6 + 0.8 \cdot 2 + 0.3 \cdot 4 = 2 + 6 + 1.6 + 1.2 = \mathbf{10.8\%}$$

Confronto CAPM: $2 + 1.0 \cdot 6 = 8\%$. Fama-French dà 2.8% in più perché cattura l'esposizione al rischio size e value, ignorati dal CAPM.

---

**Esempio 2 — Identificazione del tipo di asset dai beta fattoriali**

Un fondo ha: $\beta^{\text{MKT}}=0.95$, $\beta^{\text{SMB}}=-0.4$, $\beta^{\text{HML}}=-0.6$.

Interpretazione: beta SMB negativo → esposizione alle large-cap; beta HML negativo → azione growth (basso book/market). È probabilmente un fondo che investe in grandi aziende tecnologiche in crescita (come un indice NASDAQ).

---

**Esempio 3 — Confronto tra alpha CAPM e alpha Fama-French**

Un fondo ha rendimento annuo del 12%, $r_f=3\%$, $\beta^{\text{MKT}}=1.1$. MRP$=6\%$.

Alpha CAPM: $12\% - (3\% + 1.1 \cdot 6\%) = 12\% - 9.6\% = +2.4\%$

Aggiungendo $\beta^{\text{SMB}}=0.6$ (esposizione alle small-cap) e $\beta^{\text{HML}}=0.4$ (value):

Alpha FF3: $12\% - (3\% + 1.1 \cdot 6\% + 0.6 \cdot 2\% + 0.4 \cdot 4\%) = 12\% - (3+6.6+1.2+1.6)\% = 12\% - 12.4\% = -0.4\%$

L'alpha apparente del 2.4% scompare: il fondo stava semplicemente investendo in small-cap value, non aggiungendo valore genuino.

---

**Esempio 4 — Rischio sistematico con un fattore**

Asset: $\beta^{\text{MKT}}=1.2$, $\sigma_m=15\%$, $\sigma_\varepsilon=10\%$, rendimento specifico.

Rischio sistematico: $(1.2)^2 \cdot (0.15)^2 = 1.44 \cdot 0.0225 = 0.0324$ → $\sigma_{\text{sist}}=18\%$

Rischio totale: $\sqrt{0.0324 + 0.01} = \sqrt{0.0424} \approx 20.6\%$

Quota sistematica: $0.0324/0.0424 \approx 76.4\%$

---

**Esempio 5 — Rendimento atteso APT con 2 fattori macroeconomici**

Fattori: $F_1$ = crescita PIL inattesa ($\lambda_1=5\%$), $F_2$ = sorpresa d'inflazione ($\lambda_2=-3\%$).

Asset con $\beta_1=0.8$, $\beta_2=0.5$, $r_f=3\%$:

$$E[R_i] = 3\% + 0.8 \cdot 5\% + 0.5 \cdot (-3\%) = 3\% + 4\% - 1.5\% = \mathbf{5.5\%}$$

Il rendimento atteso è basso: l'asset è sensibile all'inflazione inattesa (che ha un premio negativo — le azioni sono una parziale copertura dall'inflazione, quindi non richiedono compensazione).

---

**Esempio 6 — Momentum factor**

Un'azione ha guadagnato il 35% negli ultimi 12 mesi (mese corrente escluso), mentre il mercato ha guadagnato il 10%. Il fondo ha $\beta^{\text{MOM}}=0.5$ e il premio MOM è dell'8%.

Contributo momentum al rendimento atteso: $0.5 \cdot 8\% = 4\%$

Questo 4% cattura il fatto che il fondo investe preferenzialmente in azioni che hanno già avuto buone performance — sfruttando il momentum, ma con il rischio di forti perdite durante i "crash del momentum" (es. 2009, quando il momentum ha perso il 50% in due mesi).

---

**Esempio 7 — Confronto modelli: quanta varianza spiegano?**

Dati tipici sulla capacità esplicativa dei modelli per i rendimenti azionari USA:

| Modello | $R^2$ medio cross-section |
|---|---|
| CAPM (1 fattore) | ~60-65% |
| Fama-French 3 fattori | ~80-85% |
| Carhart 4 fattori | ~83-88% |
| Fama-French 5 fattori | ~85-90% |

L'aggiunta di fattori migliora significativamente la spiegazione dei rendimenti, anche se diminuisce il rendimento di ciascun fattore aggiuntivo.

## 6. Grafico

```plot
{"fn":"0.02+beta*0.06","domain":[0,2.5],"yDomain":[0,0.20],"title":"APT: rendimento atteso con un solo fattore (come CAPM)","label1":"E[R] = rf + β·λ","color":"steelblue"}
```

## 7. Interattivo

```slider
{"fn":"0.02 + beta*0.06 + smb*0.02 + hml*0.04","domain":[0,2.5],"yDomain":[0,0.25],"params":[{"name":"smb","min":-0.5,"max":1,"step":0.1,"default":0},{"name":"hml","min":-0.5,"max":1,"step":0.1,"default":0}],"title":"Fama-French: effetto dei fattori SMB e HML sul rendimento atteso"}
```

## 8. Errori comuni

**Errore 1 — Confondere beta fattoriale e beta di mercato.**
In un modello multi-fattore, ci sono più beta: $\beta^{\text{MKT}}$, $\beta^{\text{SMB}}$, $\beta^{\text{HML}}$, ecc. Ognuno misura la sensibilità a un diverso fattore di rischio. Usare il solo $\beta^{\text{MKT}}$ e ignorare gli altri porta a valutazioni errate, specialmente per fondi small-cap value.

**Errore 2 — Interpretare l'SMB come "le small-cap rendono di più".**
SMB è un portafoglio long-short: rende positivo se le small-cap battono le large-cap, negativo nel caso opposto. Avere $\beta^{\text{SMB}} > 0$ significa essere esposti al rischio size — non garantisce un rendimento positivo ogni anno. Il size premium è negativo in molti decenni.

**Errore 3 — Credere che i fattori siano indipendenti.**
I fattori Fama-French hanno correlazioni non nulle, sebbene costruiti per minimizzarle. In periodi di crisi, le correlazioni aumentano. Un'analisi corretta deve considerare la matrice di covarianza tra i fattori.

**Errore 4 — Confondere value premium e aziende "di qualità".**
Le azioni value (alto book/market) non sono necessariamente "buone" aziende: spesso sono aziende in difficoltà, con bassa crescita attesa. Il value premium potrebbe essere compensazione per un rischio di distress, non per una migliore qualità. Confonderle con le "blue chip" è un errore concettuale grave.

**Errore 5 — Ignorare il data snooping nei modelli fattoriali.**
Con abbastanza dati e tentativi, è possibile trovare fattori che "funzionano" solo per coincidenza statistica. Il problema del **data mining** (o p-hacking) è serio nella finanza quantitativa. Fattori come il "January effect" o il "day of the week effect" sono spesso artefatti statistici che non sopravvivono out-of-sample.

**Errore 6 — Usare i premi storici senza considerare il loro declino.**
I premi fattoriali stimati su dati storici pre-2000 sono spesso più alti di quelli realizzati dopo. Questo perché (a) i premi erano parzialmente dovuti a mancanza d'informazione che è stata poi corretta, (b) l'afflusso di capitali nelle strategie fattoriali ha eroso il premio. Usare SMB$=3\%$ stimato negli anni '60-'90 per previsioni future è probabilmente ottimistico.

**Errore 7 — Interpretare alpha positivo come abilità del gestore senza verificare la significatività statistica.**
Con dati mensili su 5 anni (60 osservazioni), l'errore standard dell'alpha è circa 2-3% annui. Un alpha di +1.5% annuo è statisticamente indistinguibile da zero. Occorre almeno 10-15 anni di dati per rilevare con certezza un alpha genuino, ma i gestori cambiano nel tempo.

## 9. Applicazioni reali

**Smart beta e ETF fattoriali:** I modelli Fama-French hanno direttamente generato l'industria degli ETF "smart beta". Esistono ETF che replicano esplicitamente l'esposizione ai fattori value (es. iShares Value ETF), size (small-cap ETF), momentum e quality. Queste strategie hanno raccolto migliaia di miliardi di dollari, con l'obiettivo di catturare i premi fattoriali a costi molto bassi (spesso 0.1-0.3% annuo vs. 1-2% dei fondi attivi).

**Valutazione dei fondi di investimento (performance attribution):** Il modello a 4 fattori di Carhart è lo standard accademico per valutare se un gestore ha abilità genuina. Un fondo value che batte il mercato ma ha $\beta^{\text{HML}} > 0$ non ha necessariamente un gestore capace — ha semplicemente preso esposizione al value premium. Solo un alpha statisticamente significativo dopo tutti i fattori indica vera abilità.

**Risk management istituzionale:** I grandi fondi pensione e i sovereign wealth funds usano modelli multi-fattore per analizzare la loro esposizione ai diversi rischi. Se un fondo ha un alpha nullo ma $\beta^{\text{SMB}}=0.8$, sa che perderà di più del mercato durante le crisi delle small-cap (es. 2000-2002). Questo permette di hedgiare l'esposizione indesiderata.

**Finanza aziendale — stima del costo del capitale:** Alcune aziende piccole usano il modello Fama-French invece del CAPM per stimare il costo del capitale proprio, perché il CAPM sottostima sistematicamente il costo del capitale delle small-cap. Una piccola azienda con $\beta^{\text{SMB}}=0.9$ ha un costo del capitale circa 1.8% più alto di quanto indica il CAPM.

## 10. Riepilogo

| Concetto | Formula | Note |
|---|---|---|
| Modello a 1 fattore | $R_i = \alpha_i + \beta_i R_m + \varepsilon_i$ | CAPM come caso speciale |
| APT ($k$ fattori) | $E[R_i]=r_f+\sum_j \beta_{ij}\lambda_j$ | Base teorica dei modelli fattoriali |
| FF3 | $E[R_i]-r_f=\beta^{\text{MKT}}\cdot\text{MKT}+\beta^{\text{SMB}}\cdot\text{SMB}+\beta^{\text{HML}}\cdot\text{HML}$ | Fama-French 1993 |
| SMB | Long small-cap, short large-cap | Size premium: ~2-3% annuo |
| HML | Long value, short growth | Value premium: ~3-5% annuo |
| MOM | Long winners, short losers (12m-1) | Momentum: ~7-8% annuo, volatile |
| RMW | Long alta redditività, short bassa | Profitability factor (FF5) |
| CMA | Long investimenti conservativi, short aggressivi | Investment factor (FF5) |
| Alpha FF | $E[R_i]-r_f-\sum_j\beta_{ij}\lambda_j$ | Rendimento anomalo non spiegato |
| Data snooping | — | Rischio di fattori spurii su dati storici |

## 11. Esercizi

<details>
<summary>Esercizio 1: Rischio sistematico e idiosincratico</summary>

Asset con $\beta^{\text{MKT}}=1.2$, $\sigma_m=15\%$, $\sigma_\varepsilon=12\%$.

(a) Calcolare la varianza totale dell'asset e la sua deviazione standard.
(b) Calcolare la quota di rischio sistematico ($R^2$).
(c) Cosa significa $R^2 = 0.6$ per un investitore che vuole diversificare?

**Soluzione.**

(a) $\sigma_i^2 = (1.2)^2(0.15)^2 + (0.12)^2 = 0.0324 + 0.0144 = 0.0468$

$\sigma_i = \sqrt{0.0468} \approx 21.6\%$

(b) $R^2 = 0.0324/0.0468 = 69.2\%$

(c) Il 69.2% della variabilità è rischio sistematico (non eliminabile): anche in un portafoglio perfettamente diversificato, questa quota di rischio rimane. Solo il 30.8% è rischio idiosincratico che scompare con la diversificazione.

</details>

<details>
<summary>Esercizio 2: Rendimento atteso Fama-French 3 fattori</summary>

Azione con: $\beta^{\text{MKT}}=0.9$, $\beta^{\text{SMB}}=0.6$, $\beta^{\text{HML}}=-0.4$. Premi: MKT$=6\%$, SMB$=2\%$, HML$=4\%$. $r_f=2\%$.

(a) Calcolare $E[R_i]$ con il modello FF3.
(b) Calcolare $E[R_i]$ con il CAPM solo (ignorando SMB e HML).
(c) Interpretare la differenza e il tipo di azione.

**Soluzione.**

(a) $E[R_i] = 2 + 0.9 \cdot 6 + 0.6 \cdot 2 + (-0.4) \cdot 4 = 2 + 5.4 + 1.2 - 1.6 = \mathbf{7\%}$

(b) CAPM: $E[R_i] = 2 + 0.9 \cdot 6 = 7.4\%$

(c) Il FF3 dà un rendimento atteso *inferiore* al CAPM. L'effetto SMB positivo (+1.2%) è più che compensato dall'HML negativo (-1.6%): l'azione è growth (esposizione negativa al value premium) con una certa dimensione piccola. È tipicamente un'azienda tech di medie dimensioni in forte crescita.

</details>

<details>
<summary>Esercizio 3: APT con due fattori macroeconomici</summary>

Due fattori: $F_1$ = produzione industriale ($\lambda_1=4\%$), $F_2$ = inflazione inattesa ($\lambda_2=-2\%$).

Asset A: $\beta_{A1}=1.2$, $\beta_{A2}=0.3$. Asset B: $\beta_{B1}=0.5$, $\beta_{B2}=-0.8$. $r_f=3\%$.

(a) Calcolare $E[R_A]$ e $E[R_B]$.
(b) Quale asset è preferibile per un investitore che teme l'inflazione?

**Soluzione.**

(a) $E[R_A] = 3 + 1.2 \cdot 4 + 0.3 \cdot (-2) = 3 + 4.8 - 0.6 = \mathbf{7.2\%}$

$E[R_B] = 3 + 0.5 \cdot 4 + (-0.8) \cdot (-2) = 3 + 2 + 1.6 = \mathbf{6.6\%}$

(b) L'asset B ha $\beta_{B2} = -0.8$ (negativo): rende di più quando c'è inflazione inattesa (positiva su $-\lambda_2 = +2\%$). È una copertura naturale contro l'inflazione (come le materie prime o le utility con tariffe indicizzate). Per un investitore che teme l'inflazione, l'asset B è preferibile anche se ha un rendimento atteso marginalmente inferiore.

</details>

<details>
<summary>Esercizio 4: Alpha CAPM vs. Alpha Fama-French</summary>

Un fondo small-cap value ha rendimento storico del 14% annuo. $r_f=3\%$, MRP$=6\%$. Dati del fondo:

$\beta^{\text{MKT}}=1.05$, $\beta^{\text{SMB}}=0.7$, $\beta^{\text{HML}}=0.5$. Premi SMB$=2.5\%$, HML$=3.5\%$.

(a) Calcolare l'alpha con il CAPM.
(b) Calcolare l'alpha con il modello FF3.
(c) Il gestore ha aggiunto valore genuino?

**Soluzione.**

(a) Alpha CAPM $= 14\% - (3\% + 1.05 \cdot 6\%) = 14\% - 9.3\% = +4.7\%$

(b) Rendimento atteso FF3 $= 3 + 1.05 \cdot 6 + 0.7 \cdot 2.5 + 0.5 \cdot 3.5 = 3 + 6.3 + 1.75 + 1.75 = 12.8\%$

Alpha FF3 $= 14\% - 12.8\% = +1.2\%$

(c) La maggior parte dell'alpha CAPM (4.7%) era semplicemente compensazione per l'esposizione al rischio size e value (2.75% + 1.75% = 3.5%). L'alpha genuino dopo FF3 è solo 1.2%, che potrebbe non essere statisticamente significativo su pochi anni di dati.

</details>

<details>
<summary>Esercizio 5: Identificazione del profilo fattoriale</summary>

Quattro fondi con i seguenti beta Fama-French stimati:

| Fondo | $\beta^{\text{MKT}}$ | $\beta^{\text{SMB}}$ | $\beta^{\text{HML}}$ |
|---|---|---|---|
| X | 1.0 | -0.5 | -0.8 |
| Y | 0.9 | 0.7 | 0.6 |
| Z | 1.1 | 0.2 | -0.1 |
| W | 0.6 | -0.3 | 0.5 |

Identifica il tipo di strategia di ognuno.

**Soluzione.**

- **Fondo X**: large-cap growth (SMB negativo = large-cap, HML negativo = growth). Tipicamente: NASDAQ, aziende tech.
- **Fondo Y**: small-cap value (SMB positivo = small, HML positivo = value). Tipicamente: azioni cicliche, industriali piccole, deep value.
- **Fondo Z**: blend/mercato (SMB e HML quasi neutri). Si comporta come l'indice di mercato. Potrebbe essere un fondo indicizzato.
- **Fondo W**: large-cap value con basso rischio di mercato (beta basso, SMB negativo = large, HML positivo = value). Tipicamente: utility, consumer staples, finanziarie tradizionali.

</details>

<details>
<summary>Esercizio 6: Premio per il rischio e rendimento atteso FF5</summary>

Asset con: $\beta^{\text{MKT}}=1.1$, $\beta^{\text{SMB}}=0.4$, $\beta^{\text{HML}}=0.3$, $\beta^{\text{RMW}}=0.5$, $\beta^{\text{CMA}}=-0.2$.

Premi storici: MKT$=6\%$, SMB$=2\%$, HML$=3.5\%$, RMW$=3\%$, CMA$=2\%$. $r_f=2\%$.

Calcolare $E[R_i]$ con il modello FF5 e confrontare con FF3 e CAPM.

**Soluzione.**

CAPM: $2 + 1.1 \cdot 6 = 8.6\%$

FF3: $2 + 1.1 \cdot 6 + 0.4 \cdot 2 + 0.3 \cdot 3.5 = 8.6 + 0.8 + 1.05 = 10.45\%$

FF5: $10.45 + 0.5 \cdot 3 + (-0.2) \cdot 2 = 10.45 + 1.5 - 0.4 = \mathbf{11.55\%}$

Il rendimento atteso cresce aggiungendo fattori perché l'asset ha esposizioni positive alla redditività (RMW) — è un'azienda profittevole — e negativa agli investimenti (CMA) — investe aggressivamente, quindi CMA negativo riduce leggermente il rendimento atteso.

</details>

<details>
<summary>Esercizio 7: APT e arbitraggio</summary>

Due portafogli ben diversificati in un mondo APT con un solo fattore ($\lambda=5\%$, $r_f=3\%$):

| Portafoglio | $\beta$ | $E[R]$ |
|---|---|---|
| A | 1.2 | 9.5% |
| B | 0.8 | 8.0% |

(a) Verifica se esiste un'opportunità di arbitraggio. (b) Se sì, costruisci la strategia di arbitraggio.

**Soluzione.**

Rendimento APT previsto:
- A: $3 + 1.2 \cdot 5 = 9\%$ — osservato 9.5% → **sopra il fair value** (sottovalutato)
- B: $3 + 0.8 \cdot 5 = 7\%$ — osservato 8% → **sopra il fair value** (sottovalutato)

Differenza: A offre 0.5% di alpha, B offre 1% di alpha.

Strategia di arbitraggio: costruisci un portafoglio con $\beta=0$ e alpha positivo.

Portafoglio: long B ($+1$ unità, $\beta=0.8$), short A ($-1$ unità, $\beta=1.2$). Ma questo ha $\beta=-0.4$, non zero. Per azzerare il beta: aggiungi $0.4/5\% = 0.08$ unità di portafoglio di mercato.

In un mercato APT efficiente, queste opportunità vengono eliminate rapidamente dagli arbitraggisti.

</details>
