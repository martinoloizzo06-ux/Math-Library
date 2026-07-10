---
id: econometria-08-panel
subject: econometria
topic_it: Dati panel
topic_en: Panel data
title_it: Modelli per dati panel — effetti fissi e casuali
title_en: Panel data models — fixed and random effects
level: purple
order: 8
source_book: "J.M. Wooldridge, Introductory Econometrics; B.E. Hansen, Econometrics"
source_chapter: "Cap. 13–14 — Dati panel"
---

## 1. Intuizione — analogia concreta e perché si studia

Immagina di voler capire se la formazione professionale aumenta la produttività dei lavoratori. Se confronti semplicemente i salari di chi ha fatto formazione con chi non l'ha fatta, rischi di trovare una correlazione positiva non perché la formazione funziona, ma perché le persone più motivate e capaci fanno sia formazione che hanno salari più alti — questa è la variabile omessa "abilità individuale".

I dati panel — dove si osservano le stesse $N$ unità (persone, imprese, paesi) per $T$ periodi consecutivi — permettono di risolvere esattamente questo problema. L'idea chiave è semplice: ogni individuo è il suo stesso gruppo di controllo. Se osservo Mario nel 2015, 2016, 2017 e 2018, posso confrontare come cambia il suo salario quando fa formazione, controllando automaticamente per tutte le sue caratteristiche fisse nel tempo — inclusa l'abilità non osservabile.

Questo è il cuore degli **effetti fissi**: eliminare matematicamente l'eterogeneità individuale non osservata sottraendo le medie temporali di ciascun individuo. Ciò che resta è solo la variazione "within" — come cambia ciascuna unità nel tempo — che non è contaminata dalle caratteristiche invarianti.

Gli **effetti casuali** assumono invece che l'eterogeneità individuale non osservata sia casuale e non correlata con i regressori — un'ipotesi forte, ma che permette di stimare l'effetto anche di variabili invarianti nel tempo come il genere o la nazione di nascita.

Scegliere tra effetti fissi e casuali è una delle decisioni più importanti nell'econometria applicata, e il **test di Hausman** fornisce la guida statistica per questa scelta.

## 2. Prerequisiti

- Regressione OLS: stima, proprietà, interpretazione
- Variabili dummy e loro uso in regressione
- Concetto di variabile omessa e bias da variabile omessa
- GLS (Generalized Least Squares): trasformazione del modello
- Distribuzione chi-quadro; test statistici di Wald
- Operatori di media, varianza e covarianza per variabili aleatorie

## 3. Teoria

### 3.1 Struttura dei dati panel

Un dataset panel ha osservazioni indicizzate per unità $i = 1, \ldots, N$ e periodo $t = 1, \ldots, T$.

**Panel bilanciato:** ogni unità è osservata in tutti i $T$ periodi (totale $NT$ osservazioni).
**Panel sbilanciato:** alcune unità hanno osservazioni mancanti in alcuni periodi ($T_i$ varia tra le unità).

Il modello generale è:

$$y_{it} = \alpha_i + \mathbf{x}_{it}'\boldsymbol\beta + u_{it}, \qquad i=1,\ldots,N, \quad t=1,\ldots,T$$

dove:
- $y_{it}$: variabile dipendente dell'unità $i$ al periodo $t$
- $\mathbf{x}_{it}$: vettore dei regressori (varianti nel tempo e/o costanti)
- $\alpha_i$: **effetto individuale non osservato** — cattura tutte le caratteristiche dell'unità $i$ che non variano nel tempo (abilità, posizione geografica, cultura aziendale, ecc.)
- $u_{it}$: errore idiosincratico (varia sia tra unità che nel tempo)

### 3.2 Modello a effetti fissi (FE)

Il modello FE tratta $\alpha_i$ come **parametro fisso** da stimare. Crucialmente, $\alpha_i$ può essere correlato con i regressori $\mathbf{x}_{it}$ — e questa è la situazione più comune in economia.

**Stimatore within (FE):** per eliminare $\alpha_i$, si sottraggono le medie individuali dal modello:

$$\bar y_i = \alpha_i + \bar{\mathbf{x}}_i'\boldsymbol\beta + \bar u_i$$

Sottraendo dall'equazione originale:

$$(y_{it} - \bar y_i) = (\mathbf{x}_{it} - \bar{\mathbf{x}}_i)'\boldsymbol\beta + (u_{it} - \bar u_i)$$

$$\ddot y_{it} = \ddot{\mathbf{x}}_{it}'\boldsymbol\beta + \ddot u_{it}$$

dove $\ddot y_{it} = y_{it} - \bar y_i$ denota la deviazione dalla media individuale. OLS su questa equazione trasformata dà lo **stimatore FE (within)**, che è BLUE sotto le ipotesi FE standard.

**Stimatore LSDV (Least Squares Dummy Variables):** equivalentemente, si includono $N-1$ variabili dummy individuali:

$$y_{it} = \sum_{i=1}^N \alpha_i d_{it}^i + \mathbf{x}_{it}'\boldsymbol\beta + u_{it}$$

FE within e LSDV danno le stesse stime di $\boldsymbol\beta$ (diverso per $\alpha_i$ ma equivalente in termini di $\hat{\boldsymbol\beta}$). LSDV diventa computazionalmente costoso per $N$ grande (migliaia di dummy).

**Vantaggi FE:** controlla per qualsiasi eterogeneità individuale invariante nel tempo — osservata o non osservata. Non richiede ipotesi sulla relazione tra $\alpha_i$ e $\mathbf{x}_{it}$.

**Svantaggio FE:** non identifica l'effetto di regressori invarianti nel tempo (genere, razza, paese di nascita) — vengono eliminati insieme a $\alpha_i$ dalla within transformation.

### 3.3 Modello a effetti casuali (RE)

Il modello RE tratta $\alpha_i$ come **variabile aleatoria** con:

$$\alpha_i \sim \mathcal{N}(0, \sigma_\alpha^2), \qquad \text{Cov}(\alpha_i, \mathbf{x}_{it}) = \mathbf{0} \quad \forall t$$

L'ipotesi cruciale è la **non correlazione** tra l'effetto individuale e i regressori. Definendo l'errore composito $v_{it} = \alpha_i + u_{it}$:

$$y_{it} = \mathbf{x}_{it}'\boldsymbol\beta + v_{it}$$

Il composito $v_{it}$ ha una struttura di correlazione speciale: $\text{Cov}(v_{it}, v_{is}) = \sigma_\alpha^2$ per $t \neq s$ — due osservazioni dello stesso individuo sono sempre correlate attraverso $\alpha_i$.

Lo stimatore RE è un **GLS (FGLS)** che tiene conto di questa struttura. La trasformazione quasi-within usa il parametro $\theta = 1 - \sqrt{\sigma_u^2/(T\sigma_\alpha^2 + \sigma_u^2)}$:

$$y_{it} - \theta\bar y_i = (\mathbf{x}_{it} - \theta\bar{\mathbf{x}}_i)'\boldsymbol\beta + (v_{it} - \theta\bar v_i)$$

RE è più efficiente di FE se l'ipotesi di non correlazione è vera (perché usa anche la variazione between, non solo within). Se l'ipotesi è falsa, RE è inconsistente.

### 3.4 Test di Hausman

Il test di Hausman confronta formalmente FE e RE:

$$H_0: \text{Cov}(\alpha_i, \mathbf{x}_{it}) = \mathbf{0} \quad \text{(RE è consistente)}$$
$$H_1: \text{Cov}(\alpha_i, \mathbf{x}_{it}) \neq \mathbf{0} \quad \text{(RE è inconsistente, FE è corretto)}$$

La statistica è:

$$H = (\hat{\boldsymbol\beta}_{FE} - \hat{\boldsymbol\beta}_{RE})'\left[\hat V_{FE} - \hat V_{RE}\right]^{-1}(\hat{\boldsymbol\beta}_{FE} - \hat{\boldsymbol\beta}_{RE}) \sim \chi^2(k)$$

dove $k$ è il numero di regressori varianti nel tempo.

**Intuizione:** se RE fosse corretto, FE e RE sarebbero entrambi consistenti ma FE meno efficiente — le stime dovrebbero essere simili. Se c'è correlazione ($H_1$), RE è distorto mentre FE no — le stime divergono sistematicamente.

**Decisione:** se $H > \chi^2_{k,\alpha}$, rigettare $H_0$ e usare FE. Altrimenti, preferire RE (più efficiente).

### 3.5 Stimatore first-difference (FD)

Un'alternativa a FE è l'operatore di prima differenza: invece di sottrarre le medie individuali, si sottrae l'osservazione al periodo precedente:

$$\Delta y_{it} = \Delta\mathbf{x}_{it}'\boldsymbol\beta + \Delta u_{it}$$

dove $\Delta y_{it} = y_{it} - y_{i,t-1}$.

La prima differenza elimina $\alpha_i$ esattamente come FE. **Con $T=2$**, FD e FE sono identici. Per $T > 2$, differiscono perché trattano diversamente la struttura di covarianza degli errori:

- FD è preferito se $u_{it}$ segue un **random walk** ($\Delta u_{it}$ è i.i.d.)
- FE è preferito se $u_{it}$ è **i.i.d.** (serialmente non correlato)

## 4. Derivazioni

### 4.1 La matrice di proiezione within

Definiamo la matrice di deviazioni dalle medie individuali $\mathbf{M} = \mathbf{I} - \mathbf{B}$, dove $\mathbf{B}$ è la matrice che proietta sulle medie di gruppo ("between matrix"). Allora:

$$\hat{\boldsymbol\beta}_{FE} = (\mathbf{X}'\mathbf{M}\mathbf{X})^{-1}\mathbf{X}'\mathbf{M}\mathbf{y}$$

$\mathbf{M}$ è idempotente: $\mathbf{M}\mathbf{M} = \mathbf{M}$. Questo garantisce che la trasformazione within elimina completamente gli effetti fissi.

### 4.2 Decomposizione della variazione totale

In un panel, la variazione totale di $y_{it}$ si decompone in:

$$\underbrace{\sum_i \sum_t (y_{it} - \bar{\bar y})^2}_{\text{Totale}} = \underbrace{\sum_i T_i (\bar y_i - \bar{\bar y})^2}_{\text{Between}} + \underbrace{\sum_i \sum_t (y_{it} - \bar y_i)^2}_{\text{Within}}$$

- **FE usa solo la variazione within** (variazione di $y_{it}$ intorno alla media individuale $\bar y_i$)
- **RE usa sia within che between** (variazione della media individuale $\bar y_i$ intorno alla media generale $\bar{\bar y}$)
- Lo stimatore **between** usa solo la variazione between e stima come le medie individuali si relazionano ai regressori medi

### 4.3 Trasformazione quasi-within del RE

Il parametro $\theta$ nel RE si ricava minimizzando la varianza del composito trasformato. Definendo $\sigma_v^2 = \text{Var}(v_{it}) = \sigma_\alpha^2 + \sigma_u^2$ e $\text{Cov}(v_{it},v_{is}) = \sigma_\alpha^2$, la matrice di varianza del vettore $\mathbf{v}_i = (v_{i1}, \ldots, v_{iT})'$ è:

$$\Omega_i = \sigma_u^2 \mathbf{I}_T + \sigma_\alpha^2 \boldsymbol\iota\boldsymbol\iota'$$

dove $\boldsymbol\iota$ è il vettore di uni. L'inversa si ottiene con la formula di Sherman-Morrison:

$$\Omega_i^{-1} = \frac{1}{\sigma_u^2}\left[\mathbf{I}_T - \frac{\sigma_\alpha^2}{T\sigma_\alpha^2 + \sigma_u^2}\boldsymbol\iota\boldsymbol\iota'\right]$$

Pre-moltiplicando per $\Omega_i^{-1/2}$ si ottiene la trasformazione quasi-within con $\theta = 1 - \sigma_u/\sqrt{T\sigma_\alpha^2 + \sigma_u^2}$.

## 5. Esempi

**Esempio 1 (base) — La within transformation**

3 individui, 2 periodi:

| $i$ | $t$ | $y_{it}$ | $x_{it}$ | $\bar y_i$ | $\bar x_i$ | $\ddot y_{it}$ | $\ddot x_{it}$ |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 1 | 10 | 2 | 11 | 3 | -1 | -1 |
| 1 | 2 | 12 | 4 | 11 | 3 | +1 | +1 |
| 2 | 1 | 6 | 1 | 7 | 1.5 | -1 | -0.5 |
| 2 | 2 | 8 | 2 | 7 | 1.5 | +1 | +0.5 |
| 3 | 1 | 15 | 5 | 16 | 5.5 | -1 | -0.5 |
| 3 | 2 | 17 | 6 | 16 | 5.5 | +1 | +0.5 |

OLS su $\ddot y_{it} = \beta \ddot x_{it}$: $\hat\beta_{FE} = \sum \ddot y \ddot x / \sum \ddot x^2 = ((-1)(-1) + (1)(1) + \ldots)/(1+1+0.25+0.25+0.25+0.25) = 6/3 = 2$.

---

**Esempio 2 — Effetti fissi vs between**

Studio sul reddito e consumo di 500 famiglie per 5 anni. L'effetto FE (variazione within) stima: "quando il reddito di una famiglia aumenta di 1000€ nel tempo, il consumo aumenta di X€". L'effetto between stima: "le famiglie con reddito medio più alto consumano mediamente X€ in più". I due effetti possono divergere se ci sono effetti di ricchezza permanente.

---

**Esempio 3 — Test di Hausman applicato**

Studio sull'effetto dell'istruzione sui salari (panel di lavoratori):

| | $\hat\beta_{FE}$ | $\hat\beta_{RE}$ | Differenza |
| --- | --- | --- | --- |
| Anni istruzione | 0.04 | 0.08 | -0.04 |
| Esperienza | 0.02 | 0.025 | -0.005 |

La differenza sistematica suggerisce correlazione tra $\alpha_i$ (abilità) e l'istruzione. Il test di Hausman dà $H = 18.4 > \chi^2_{2,0.05} = 5.99$: rigettare RE, usare FE.

Interpretazione economica: persone con maggiore abilità fanno sia più istruzione che hanno salari più alti — l'RE confonde i due effetti, sovrastimando il rendimento dell'istruzione.

---

**Esempio 4 — Variabili invarianti nel tempo**

Panel di lavoratori per 10 anni con variabile "genere" (binaria, invariante). Con FE: il genere non può essere stimato — viene eliminato dalla within transformation (le donne rimangono donne per tutti i 10 anni).

Con RE (se l'ipotesi di non correlazione è difendibile): si stima il coefficiente del genere. Ma se l'abilità non osservata è correlata con il genere (es. donne con abilità simili vengono indirizzate verso lavori meno pagati), RE è distorto.

Alternativa: approccio di Hausman-Taylor, che strumentalizza le variabili invarianti nel tempo usando la variazione within delle altre variabili.

---

**Esempio 5 — FE vs FD con T=2**

Con $T=2$, la trasformazione FD è: $\Delta y_i = y_{i2} - y_{i1} = \beta \Delta x_i + \Delta u_i$.

La trasformazione FE within è: $\ddot y_{it} = y_{it} - \bar y_i$, che per $T=2$ dà $\ddot y_{i1} = y_{i1} - (y_{i1}+y_{i2})/2 = -\Delta y_i/2$ e $\ddot y_{i2} = \Delta y_i/2$.

OLS sulla prima differenza e OLS within danno lo stesso $\hat\beta$. Per $T>2$, le due trasformazioni non coincidono più.

---

**Esempio 6 — LSDV vs within: confronto computazionale**

Con $N = 10.000$ imprese e $T = 5$ anni, il dataset ha 50.000 osservazioni. LSDV richiederebbe 9.999 variabili dummy — computazionalmente impraticabile. La trasformazione within richiede solo di sottrare le medie individuali: operazione immediata, a prescindere da $N$.

In pratica, tutti i software (Stata, R, Python) implementano FE tramite la trasformazione within, non tramite LSDV.

---

**Esempio 7 — Panel sbilanciato**

Studio sull'accesso al credito di 200 PMI italiane: alcune falliscono durante il periodo di osservazione (2010-2020), quindi il panel è sbilanciato ($T_i$ varia tra 1 e 11 anni).

Con FE, la within transformation usa le medie individuali $\bar y_i = \frac{1}{T_i}\sum_{t=1}^{T_i} y_{it}$, adattandosi naturalmente al panel sbilanciato. L'attenzione va posta al **survivorship bias**: se le imprese che falliscono hanno caratteristiche sistematiche, il campione sopravvissuto non è rappresentativo.

## 6. Grafico

```plot
{"fn":"0.4*x+3","fn2":"0.4*x+1","domain":[0,6],"yDomain":[0,7],"title":"FE: stessa pendenza β per unità diverse (intercette diverse = α_i)","label1":"Unità A (α=3)","label2":"Unità B (α=1)","color":"steelblue"}
```

## 7. Interattivo

```slider
{"fn":"beta*x + 2 + 0.5*Math.sin(x*0.5)","domain":[0,10],"yDomain":[-1,8],"params":[{"name":"beta","min":-1,"max":2,"step":0.05,"default":0.4}],"title":"Effetto within β — variare il coefficiente del regressore (con effetto individuale fisso)"}
```

## 8. Errori comuni

**Errore 1 — Usare RE quando c'è correlazione tra effetti e regressori.** Questo è l'errore più grave nell'econometria panel. Se l'effetto individuale $\alpha_i$ è correlato con $\mathbf{x}_{it}$ (caso tipico: abilità individuale correlata con istruzione, efficienza aziendale correlata con spesa in R&D), RE è inconsistente. L'output del test di Hausman va sempre verificato prima di scegliere tra FE e RE.

**Errore 2 — Trattare i dati panel come cross-section pooled senza controllare per eterogeneità non osservata.** Stimare OLS su tutto il panel senza effetti fissi o casuali equivale a ignorare $\alpha_i$ — che finisce nell'errore, creando correlazione con i regressori se Cov$(\alpha_i, \mathbf{x}_{it}) \neq 0$. Lo stimatore pooled OLS è allora inconsistente.

**Errore 3 — Aspettarsi che FE stimi l'effetto di variabili invarianti nel tempo.** Il genere, la razza, il paese di nascita, la regione di localizzazione dell'impresa: tutte queste variabili vengono "mangiate" dalla within transformation. Se sono gli effetti di interesse, FE non è il metodo giusto (usare RE, Hausman-Taylor, o identificazione da variazione geografica nel tempo).

**Errore 4 — Dimenticare di correggere gli errori standard in FE.** Gli errori standard standard in FE assumono errori $u_{it}$ i.i.d. Non tengono conto di eteroschedasticità o autocorrelazione seriale (comune nei panel). Si dovrebbero sempre usare errori standard **clusterizzati** a livello individuale (o a livello del cluster rilevante), che sono robusti a qualsiasi forma di eteroschedasticità e autocorrelazione within-unit.

**Errore 5 — Confondere la variazione between e la variazione within.** Con un panel di paesi (N=30, T=20), FE identifica l'effetto di variabili che cambiano nel tempo all'interno dello stesso paese (es. politiche fiscali). La variazione between (confronto tra paesi diversi) non è usata da FE. Se l'effetto di interesse è cross-sectional (es. istituzioni persistenti), FE non può stimarlo.

**Errore 6 — Ignorare il survivorship bias nei panel non bilanciati.** Se le unità "escono" dal panel per una ragione correlata con la variabile di interesse (es. imprese che falliscono perché non produttive), il panel diventa non casualmente bilanciato. L'analisi delle ragioni dell'attrition è essenziale prima di procedere con la stima.

**Errore 7 — Non testare l'ipotesi di Hausman prima di scegliere.** Alcuni ricercatori scelgono FE "per sicurezza" senza mai testare se RE sarebbe valido. Ma FE è meno efficiente di RE quando l'ipotesi di non correlazione è soddisfatta. Il test di Hausman va eseguito sistematicamente: se non rigetta, RE è preferibile.

## 9. Applicazioni reali

**Econometria del lavoro — rendimento dell'istruzione.** I panel di lavoratori (es. NLSY negli USA, SHIW in Italia) permettono di stimare il rendimento dell'istruzione controllando per l'abilità individuale non osservata. Con FE, si sfrutta la variazione nell'istruzione all'interno dello stesso individuo nel tempo (corsi di aggiornamento, lauree part-time), eliminando il bias da abilità. Card (1995) e Angrist-Krueger (1991) discutono come combinare panel FE con variabili strumentali per affrontare problemi residui di endogeneità.

**Valutazione di politiche pubbliche — effetti delle leggi.** Il classico "difference-in-differences" (DiD) è un caso speciale di FE panel: si confronta la variazione nel tempo tra unità trattate e di controllo. Dube, Lester e Reich (2010) usano FE di contee confinanti per stimare l'effetto del salario minimo sull'occupazione, controlando per shock geografici locali usando solo la variazione within tra le coppie di contee.

**Economia aziendale — performance delle imprese.** Con panel di imprese quotate, FE controlla per la "qualità del management" e altri fattori fissi aziendali non osservabili. Uno studio tipico potrebbe stimare l'effetto dell'indebitamento sulla produttività: l'effetto within (stessa impresa in anni diversi con diverso leverage) è privo di bias da caratteristiche aziendali persistenti.

**Macroeconomia internazionale — convergenza del reddito.** Studi sulla convergenza tra paesi usano panel di 100-150 paesi per 40 anni (Penn World Tables). FE con effetti fissi di paese elimina le differenze strutturali persistenti tra paesi (istituzioni, cultura), identificando l'effetto della crescita del capitale e del commercio sulla crescita del PIL solo dalla variazione nel tempo all'interno di ciascun paese.

## 10. Riepilogo

| Concetto | Formula / Regola | Note |
| --- | --- | --- |
| Modello panel | $y_{it} = \alpha_i + \mathbf{x}_{it}'\boldsymbol\beta + u_{it}$ | $\alpha_i$: eterogeneità individuale |
| Within transform. (FE) | $\ddot y_{it} = y_{it} - \bar y_i$ | Elimina $\alpha_i$ qualunque sia |
| LSDV | Dummy per ogni unità $i$ | Equivalente a FE; costoso per N grande |
| Effetti casuali (RE) | $v_{it} = \alpha_i + u_{it}$, $\alpha_i \perp \mathbf{x}_{it}$ | Più efficiente se ipotesi valida |
| Quasi-within RE | $y_{it} - \theta\bar y_i$, $\theta = 1-\sigma_u/\sqrt{T\sigma_\alpha^2+\sigma_u^2}$ | GLS; $\theta \in [0,1)$ |
| Test di Hausman | $H \sim \chi^2(k)$, $H_0$: RE consistente | Rigettare $\to$ usare FE |
| First-difference | $\Delta y_{it} = \Delta\mathbf{x}_{it}'\boldsymbol\beta + \Delta u_{it}$ | $\equiv$ FE con $T=2$ |
| SE clusterizzati | Robusti a eteroschedasticità + AC within | Sempre raccomandati con panel |
| Variabili invarianti | Non identificabili con FE | Usare RE o Hausman-Taylor |

## 11. Esercizi

<details>
<summary>Esercizio 1: La within transformation passo-passo</summary>

Panel: $N=2$ individui, $T=3$ periodi.

| $i$ | $t$ | $y_{it}$ | $x_{it}$ |
| --- | --- | --- | --- |
| 1 | 1 | 5 | 2 |
| 1 | 2 | 7 | 3 |
| 1 | 3 | 9 | 4 |
| 2 | 1 | 2 | 1 |
| 2 | 2 | 4 | 2 |
| 2 | 3 | 6 | 3 |

(a) Calcola le medie individuali $\bar y_1$, $\bar y_2$, $\bar x_1$, $\bar x_2$.
(b) Calcola le deviazioni dalla media ($\ddot y_{it}$, $\ddot x_{it}$).
(c) Stima $\hat\beta_{FE}$ tramite OLS sulle deviazioni.

**Soluzione.**

(a) $\bar y_1 = (5+7+9)/3 = 7$, $\bar y_2 = (2+4+6)/3 = 4$. $\bar x_1 = 3$, $\bar x_2 = 2$.

(b) Deviazioni: $\ddot y = (-2, 0, +2, -2, 0, +2)$, $\ddot x = (-1, 0, +1, -1, 0, +1)$.

(c) $\hat\beta_{FE} = \dfrac{\sum \ddot y_{it} \ddot x_{it}}{\sum \ddot x_{it}^2} = \dfrac{(-2)(-1)+0+2\cdot1+(-2)(-1)+0+2\cdot1}{1+0+1+1+0+1} = \dfrac{8}{4} = 2$

Un'unità aggiuntiva di $x$ aumenta $y$ di 2 unità (variazione within).

</details>

<details>
<summary>Esercizio 2: Test di Hausman</summary>

Studio sull'effetto delle spese in R&D sulla produttività di 200 imprese per 8 anni. Risultati:

- $\hat\beta_{FE}^{R\&D} = 0.12$, $\hat\sigma_{FE}^2 = 0.04$
- $\hat\beta_{RE}^{R\&D} = 0.19$, $\hat\sigma_{RE}^2 = 0.025$

(a) Calcola la statistica di Hausman (per il solo coefficiente di R&D).
(b) Interpreta il risultato al 5% (valore critico $\chi^2_{1,0.05} = 3.84$).

**Soluzione.**

(a) $H = \dfrac{(0.12-0.19)^2}{0.04-0.025} = \dfrac{(-0.07)^2}{0.015} = \dfrac{0.0049}{0.015} \approx 0.327$

(b) $H = 0.327 < 3.84 = \chi^2_{1,0.05}$: non rigetto $H_0$ (RE). 

Non c'è evidenza statistica di correlazione tra gli effetti fissi e le spese in R&D. Si può usare RE, che è più efficiente di FE.

Nota: la differenza $\hat\beta_{FE} - \hat\beta_{RE} = 0.07$ potrebbe sembrare economicamente rilevante, ma statisticamente non è distinguibile dallo zero dati i rispettivi errori standard.

</details>

<details>
<summary>Esercizio 3: FE vs FD con T=3</summary>

Panel di 100 paesi, $T=3$. L'errore $u_{it}$ segue un random walk: $u_{it} = u_{i,t-1} + \varepsilon_{it}$.

Quale stimatore — FE within o first-difference — è più efficiente? Perché?

**Soluzione.**

**First-difference è preferibile** quando $u_{it}$ segue un random walk.

**Ragione:** Se $u_{it} = u_{i,t-1} + \varepsilon_{it}$, allora $\Delta u_{it} = \varepsilon_{it}$ è i.i.d. — l'ipotesi classica per OLS è soddisfatta dopo la prima differenza, quindi FD è BLUE.

Con la trasformazione within del FE, l'errore trasformato è $\ddot u_{it} = u_{it} - \bar u_i$, che non è i.i.d. se $u_{it}$ ha un random walk — rimane autocorrelata. FE è quindi meno efficiente di FD in questo caso.

Regola pratica: testare l'autocorrelazione nei residui del FD. Se i residui FD non sono autocorrelati, FD è appropriato.

</details>

<details>
<summary>Esercizio 4: Variabili invarianti nel tempo</summary>

Panel di lavoratori per 10 anni. Si vuole stimare l'effetto su salario di: (a) anni di istruzione (varia nel tempo per alcuni lavoratori), (b) genere (invariante), (c) regione di nascita (invariante).

Per ciascuna variabile, specifica se FE la può stimare e come si potrebbe procedere in alternativa.

**Soluzione.**

**(a) Istruzione:** FE la stima utilizzando la variazione within di coloro che conseguono titoli di studio durante il periodo di osservazione. $\hat\beta_{istruzione}^{FE}$ è consistente anche se l'istruzione è correlata con l'abilità individuale.

**(b) Genere:** FE non può stimare il coefficiente del genere — viene eliminato dalla within transformation insieme all'effetto individuale $\alpha_i$. Alternativa: modello RE (se ipotesi di non correlazione è difendibile), stimatore di Mundlak (aggiungere le medie individuali dei regressori varianti nel tempo al modello RE), o Hausman-Taylor (strumentalizzare le variabili invarianti).

**(c) Regione di nascita:** stesso problema del genere — FE non la stima. Se si vuole identificare l'effetto delle caratteristiche regionali, si possono aggiungere interazioni regione×anno (varianti nel tempo) o usare approcci di variabili strumentali basati sulla variazione cross-regionale.

</details>

<details>
<summary>Esercizio 5: Errori standard clusterizzati</summary>

Panel di 50 paesi, 20 anni. Un ricercatore stima un modello FE e riporta t-stat molto alti per quasi tutti i coefficienti. Cosa potrebbe andare storto?

**Soluzione.**

**Problema probabile:** gli errori standard non sono clusterizzati a livello di paese.

Con dati panel di paesi, i residui $u_{it}$ per lo stesso paese in anni diversi sono quasi certamente autocorrelati (le condizioni economiche si propagano nel tempo). Se il ricercatore usa errori standard "classici" che assumono indipendenza di $u_{it}$, sottostima la varianza degli stimatori — da cui t-stat gonfiati.

**Soluzione:** usare errori standard clusterizzati a livello di paese. Il cluster-robust sandwich consente qualsiasi forma di correlazione all'interno del cluster (paese), ma assume indipendenza tra cluster (paesi) diversi.

Con $N=50$ cluster, gli errori clusterizzati potrebbero essere 2-4 volte più grandi degli errori OLS classici, abbassando significativamente le t-stat. Con solo $N=50$ cluster, si raccomanda correzione small-sample (Stata: `vce(cluster id), small`).

</details>

<details>
<summary>Esercizio 6: Difference-in-differences come FE</summary>

Uno studio vuole valutare l'effetto di una riforma fiscale (2018) sull'investimento di imprese. Ci sono 100 imprese "trattate" e 150 "di controllo", osservate nel 2017 e 2019.

Scrivi il modello panel FE corrispondente al DiD e identifica i coefficienti.

**Soluzione.**

Il modello DiD panel FE è:

$$y_{it} = \alpha_i + \delta_t + \beta \cdot (Trattato_i \times Post_t) + u_{it}$$

dove:
- $\alpha_i$: effetti fissi aziendali (catturano le differenze persistenti tra imprese)
- $\delta_t$: effetti fissi temporali (dummy 2019, cattura la tendenza comune)
- $Trattato_i$: dummy = 1 per imprese trattate (invariante nel tempo, eliminata da $\alpha_i$)
- $Post_t$: dummy = 1 per il 2019 (collineare con $\delta_t$, non serve aggiungerla separatamente)
- $Trattato_i \times Post_t$: interazione, varia sia tra unità che nel tempo → $\hat\beta$ è l'**effetto causale** della riforma (stimatore DiD)

La stima FE su questo panel 2-periodi è identica alla first-difference, e $\hat\beta = (\bar y_{trattati,POST} - \bar y_{trattati,PRE}) - (\bar y_{controllo,POST} - \bar y_{controllo,PRE})$.

</details>

<details>
<summary>Esercizio 7: Scegliere tra FE, RE e pooled OLS</summary>

Descrivi un flowchart decisionale per scegliere tra pooled OLS, RE e FE in un'analisi panel.

**Soluzione.**

**Passo 1 — Testare se gli effetti individuali esistono (pooled OLS vs RE):**
Test LM di Breusch-Pagan: $H_0: \sigma_\alpha^2 = 0$ (nessun effetto individuale). Se rigetti $H_0$, ci sono effetti individuali significativi → usare RE o FE.

Se non rigetti: pooled OLS è sufficiente (gli effetti individuali non aggiungono informazione rilevante).

**Passo 2 — Testare se FE o RE (dato che ci sono effetti individuali):**
Test di Hausman: $H_0: \text{Cov}(\alpha_i, \mathbf{x}_{it}) = 0$.
- Se rigetti $H_0$: usare **FE** (RE è inconsistente per correlazione tra effetti e regressori).
- Se non rigetti: usare **RE** (più efficiente di FE se l'ipotesi è valida).

**Passo 3 — Diagnostica aggiuntiva:**
- Clusterizzare sempre gli SE a livello di unità con FE.
- Testare autocorrelazione seriale nei residui (test di Wooldridge per panel).
- Verificare eteroschedasticità cross-sectional con test di Wald modificato.

</details>
