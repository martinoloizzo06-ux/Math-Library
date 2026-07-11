---
id: finanza-05-capm
subject: finanza
topic_it: Teoria del portafoglio
topic_en: Portfolio theory
title_it: Capital Asset Pricing Model (CAPM)
title_en: Capital Asset Pricing Model (CAPM)
level: purple
order: 5
source_book: "Bodie, Kane & Marcus, Investments; J.C. Hull, Options, Futures and Other Derivatives"
source_chapter: "Cap. 9 — CAPM"
stato: da-rielaborare
---

## 1. Intuizione — perché il CAPM è rivoluzionario

Immagina di dover decidere quanto rendimento esigere da un'azione rischiosa. La risposta intuitiva è: "più è rischiosa, più voglio guadagnare." Ma cosa significa esattamente "rischiosa"? Il CAPM risponde con una precisione matematica che ha rivoluzionato la finanza negli anni '60: il rischio che il mercato remunera non è la volatilità totale dell'azione, ma solo la sua **covarianza con il mercato**.

Perché questa distinzione è fondamentale? Perché il rischio specifico di un'azienda — un cattivo trimestre, un CEO che si dimette, una causa legale — può essere eliminato semplicemente diversificando il portafoglio. Se possiedi 50 azioni di settori diversi, i rischi idiosincratici si compensano a vicenda. Ciò che non puoi eliminare è il rischio sistematico: la recessione economica che trascina giù tutto il mercato. Ed è solo per questo rischio che il mercato ti paga un premio.

L'analogia è quella dell'assicurazione: una compagnia assicurativa non si preoccupa se un singolo cliente ha un incidente (rischio diversificabile), ma si preoccupa se tutti i clienti hanno incidenti nello stesso giorno (rischio sistematico, come un terremoto). Allo stesso modo, gli investitori richiedono un compenso solo per il rischio che non possono eliminare con la diversificazione.

Il CAPM, sviluppato indipendentemente da William Sharpe (1964), John Lintner (1965) e Jan Mossin (1966), formalizza questa intuizione in una singola equazione elegante. È il punto di partenza di quasi tutti i modelli di pricing degli asset e, nonostante i suoi limiti empirici, rimane lo strumento concettuale più importante della finanza moderna.

Studiare il CAPM significa imparare a ragionare in termini di rischio-rendimento in modo rigoroso: un'abilità essenziale per la gestione di portafogli, la valutazione di aziende (WACC), e l'analisi degli investimenti.

## 2. Prerequisiti

- Rendimento atteso e varianza di un portafoglio
- Covarianza e correlazione tra asset finanziari
- Frontiera efficiente di Markowitz e portafoglio tangente
- Concetto di tasso privo di rischio (risk-free rate)
- Calcolo delle medie ponderate

## 3. Teoria

### Assunzioni del modello

Il CAPM è derivato sotto un insieme di assunzioni semplificatrici:

1. **Investitori media-varianza efficienti**: ogni investitore massimizza il rendimento atteso a parità di varianza.
2. **Aspettative omogenee**: tutti gli investitori concordano sulle stime di rendimenti attesi, varianze e covarianze.
3. **Orizzonte temporale unico**: tutti investono per lo stesso periodo.
4. **Asset privo di rischio**: esiste un asset con rendimento certo $r_f$ al quale tutti possono prestare e prendere a prestito.
5. **Mercato perfetto**: nessun costo di transazione, nessuna imposta, tutti gli asset sono perfettamente divisibili e negoziabili.
6. **Mercato in equilibrio**: domanda uguale all'offerta per ogni asset.

### Il portafoglio di mercato

Sotto queste assunzioni, tutti gli investitori detengono la stessa combinazione rischiosa: il **portafoglio di mercato** $M$, che contiene tutti gli asset rischiosi ponderati per la loro capitalizzazione di mercato. La **Capital Market Line (CML)** descrive le combinazioni efficienti di $r_f$ e $M$:

$$E[R_p] = r_f + \frac{E[R_m] - r_f}{\sigma_m} \cdot \sigma_p$$

Il rapporto $\dfrac{E[R_m] - r_f}{\sigma_m}$ è lo **Sharpe ratio del mercato** — la pendenza della CML. La CML vale solo per i portafogli efficienti (combinazioni di $r_f$ e $M$).

### La formula del CAPM

Per i singoli asset (o portafogli non necessariamente efficienti), il CAPM afferma:

$$\boxed{E[R_i] = r_f + \beta_i \left(E[R_m] - r_f\right)}$$

- $E[R_i]$: rendimento atteso dell'asset $i$
- $r_f$: tasso privo di rischio (tasso sui Bund tedeschi o T-Bill USA)
- $E[R_m] - r_f$: **market risk premium (MRP)** — rendimento extra del mercato rispetto al risk-free
- $\beta_i$: **beta** dell'asset — misura del rischio sistematico

### Il coefficiente Beta

Il beta è definito come:

$$\beta_i = \frac{\text{Cov}(R_i, R_m)}{\text{Var}(R_m)} = \frac{\sigma_{im}}{\sigma_m^2}$$

- $\sigma_{im} = \text{Cov}(R_i, R_m)$: covarianza tra i rendimenti dell'asset $i$ e del mercato
- $\sigma_m^2$: varianza del mercato

**Interpretazione del beta:**

| Valore di $\beta$ | Significato |
|---|---|
| $\beta = 0$ | Asset privo di rischio sistematico (es. T-Bill) |
| $0 < \beta < 1$ | Asset **difensivo** — meno volatile del mercato (es. utility, farmaceutica) |
| $\beta = 1$ | Asset che si muove esattamente come il mercato |
| $\beta > 1$ | Asset **aggressivo** — amplifica i movimenti del mercato (es. tech, ciclici) |
| $\beta < 0$ | Asset che si muove in direzione opposta al mercato (rarissimo; es. oro in certi periodi) |

### Security Market Line (SML)

La **Security Market Line** rappresenta il CAPM graficamente nello spazio $(\beta, E[R])$. Tutti gli asset in equilibrio si trovano sulla SML. La SML ha:

- Intercetta: $r_f$ (il rendimento dell'asset con $\beta=0$)
- Pendenza: $E[R_m] - r_f$ (il market risk premium)

### Alpha di Jensen

Se un asset si trova fuori dalla SML, ha un **alpha di Jensen** diverso da zero:

$$\alpha_i = E[R_i] - \left[r_f + \beta_i(E[R_m] - r_f)\right]$$

- $\alpha_i > 0$: l'asset **sovraperforma** rispetto al rischio assunto → sottovalutato, conveniente da acquistare
- $\alpha_i < 0$: l'asset **sottoperforma** → sopravvalutato, meglio venderlo
- $\alpha_i = 0$: l'asset è correttamente prezzato, sta sulla SML

In un mercato efficiente, tutti gli alpha dovrebbero essere zero: nessun gestore dovrebbe riuscire a generare alpha positivo in modo persistente.

### Beta del portafoglio

Il beta di un portafoglio è la **media ponderata** dei beta dei singoli asset:

$$\beta_p = \sum_{i=1}^n w_i \beta_i$$

dove $w_i$ è il peso dell'asset $i$ nel portafoglio ($\sum w_i = 1$). Questa linearità è una proprietà fondamentale del beta e del CAPM.

### Differenza tra CML e SML

| Caratteristica | CML | SML |
|---|---|---|
| Asse X | $\sigma_p$ (deviazione standard) | $\beta_i$ (rischio sistematico) |
| Asset validi | Solo portafogli efficienti | Tutti gli asset e portafogli |
| Uso pratico | Scelta dell'allocazione ottimale | Pricing degli asset |

## 4. Derivazioni

### Derivazione del CAPM dalla CML

In equilibrio, il portafoglio di mercato $M$ è efficiente. Considera un portafoglio che investe una quota $\alpha$ nell'asset $i$ e $(1-\alpha)$ in $M$. Il rendimento atteso e la deviazione standard di questo portafoglio sono:

$$E[R_p] = \alpha E[R_i] + (1-\alpha)E[R_m]$$

$$\sigma_p = \sqrt{\alpha^2\sigma_i^2 + (1-\alpha)^2\sigma_m^2 + 2\alpha(1-\alpha)\sigma_{im}}$$

La condizione di equilibrio impone che la pendenza del luogo di asset $i$ nello spazio $(\sigma, E[R])$ al punto $\alpha=0$ sia uguale alla pendenza della CML:

$$\frac{\partial E[R_p]/\partial\alpha}{\partial\sigma_p/\partial\alpha}\bigg|_{\alpha=0} = \frac{E[R_m]-r_f}{\sigma_m}$$

Calcolando le derivate e valutandole in $\alpha=0$:

$$\frac{\partial E[R_p]}{\partial\alpha}\bigg|_{\alpha=0} = E[R_i] - E[R_m]$$

$$\frac{\partial\sigma_p}{\partial\alpha}\bigg|_{\alpha=0} = \frac{\sigma_{im} - \sigma_m^2}{\sigma_m}$$

Uguagliando alla pendenza della CML e risolvendo per $E[R_i]$:

$$\frac{E[R_i]-E[R_m]}{\frac{\sigma_{im}-\sigma_m^2}{\sigma_m}} = \frac{E[R_m]-r_f}{\sigma_m}$$

$$(E[R_i]-E[R_m])\sigma_m = (E[R_m]-r_f)\frac{\sigma_{im}-\sigma_m^2}{\sigma_m} \cdot \sigma_m$$

$$E[R_i] = r_f + \frac{\sigma_{im}}{\sigma_m^2}(E[R_m]-r_f) = r_f + \beta_i(E[R_m]-r_f) \quad \square$$

### Decomposizione del rischio

Il modello a un fattore dell'equazione di rendimento implica:

$$R_i = \alpha_i + \beta_i R_m + \varepsilon_i$$

dove $\varepsilon_i$ è il termine di errore con $E[\varepsilon_i]=0$ e $\text{Cov}(\varepsilon_i, R_m)=0$. La varianza totale dell'asset si decompone in:

$$\sigma_i^2 = \underbrace{\beta_i^2 \sigma_m^2}_{\text{rischio sistematico}} + \underbrace{\sigma_{\varepsilon_i}^2}_{\text{rischio idiosincratico}}$$

Il rischio sistematico è correlato con il mercato e **non eliminabile** con la diversificazione. Il rischio idiosincratico è specifico dell'azienda e **eliminabile** con la diversificazione.

Il **coefficiente di determinazione** $R^2$ misura la quota di varianza spiegata dal mercato:

$$R^2 = \frac{\beta_i^2\sigma_m^2}{\sigma_i^2}$$

## 5. Esempi

**Esempio 1 — Calcolo del rendimento atteso**

$r_f = 3\%$, $E[R_m] = 9\%$ (MRP $= 6\%$), $\beta_i = 1.2$.

$$E[R_i] = 3\% + 1.2 \cdot 6\% = 3\% + 7.2\% = \mathbf{10.2\%}$$

Un investitore razionale esigerà almeno il 10.2% da questo asset per compensare il rischio sistematico assunto.

---

**Esempio 2 — Alpha di Jensen e valutazione**

Un'azione ha rendimento storico medio del $14\%$, $r_f = 3\%$, $\beta = 1.5$, MRP $= 6\%$.

$E[R]_{\text{CAPM}} = 3 + 1.5 \cdot 6 = 12\%$

$\alpha = 14\% - 12\% = +2\%$

L'azione ha un alpha positivo: ha reso il $2\%$ in più di quanto previsto dal CAPM dato il suo rischio. Se ci aspettiamo che questo alpha persista, l'azione è **sottovalutata** e conviene acquistarla.

---

**Esempio 3 — Beta del portafoglio**

Portafoglio con tre asset:

| Asset | Peso $w_i$ | Beta $\beta_i$ |
|---|---|---|
| Azione tech | 40% | 1.8 |
| Utility | 35% | 0.5 |
| Farmaceutica | 25% | 0.7 |

$$\beta_p = 0.40 \cdot 1.8 + 0.35 \cdot 0.5 + 0.25 \cdot 0.7 = 0.72 + 0.175 + 0.175 = \mathbf{1.07}$$

Il portafoglio ha un beta leggermente superiore a 1: si comporta come il mercato ma con una leggera amplificazione.

---

**Esempio 4 — Decomposizione del rischio**

Asset con $\beta = 1.2$, $\sigma_m = 15\%$, $\sigma_i = 25\%$.

Rischio sistematico: $\beta^2\sigma_m^2 = 1.44 \cdot 0.0225 = 0.0324$ → $\sigma_{\text{sist}} = 18\%$

Rischio idiosincratico: $\sigma_\varepsilon^2 = 0.0625 - 0.0324 = 0.0301$ → $\sigma_\varepsilon = 17.3\%$

$R^2 = 0.0324/0.0625 = 51.8\%$: il mercato spiega circa la metà della variabilità dell'asset.

---

**Esempio 5 — CAPM per il WACC**

Un'azienda ha: $r_f = 2\%$, MRP $= 5.5\%$, $\beta_{\text{equity}} = 1.3$.

Costo del capitale proprio: $r_e = 2\% + 1.3 \cdot 5.5\% = 9.15\%$

Questo valore viene usato come tasso di sconto dei flussi di cassa per gli azionisti nel calcolo del DCF.

---

**Esempio 6 — Portafoglio con asset privo di rischio**

$60\%$ in portafoglio rischioso con $\beta_p = 1.1$, $40\%$ in T-Bill ($\beta=0$):

$$\beta_{\text{totale}} = 0.60 \cdot 1.1 + 0.40 \cdot 0 = 0.66$$

$$E[R] = r_f + 0.66 \cdot (E[R_m]-r_f) = 2\% + 0.66 \cdot 5.5\% = 5.63\%$$

---

**Esempio 7 — Verifica se un asset è sopravvalutato**

Azienda XYZ: prezzo attuale $€100$, prezzo atteso tra 1 anno $€107$, nessun dividendo. $r_f=2\%$, MRP$=6\%$, $\beta=0.8$.

Rendimento atteso XYZ: $r_{\text{XYZ}} = (107-100)/100 = 7\%$

Rendimento richiesto CAPM: $2\% + 0.8 \cdot 6\% = 6.8\%$

$\alpha = 7\% - 6.8\% = +0.2\%$ — leggermente sottovalutata. Se il prezzo fosse $€106$, $r=6\% < 6.8\%$ → sopravvalutata.

## 6. Grafico

```plot
{"fn":"0.03+beta*0.06","domain":[0,2.5],"yDomain":[0,0.20],"title":"Security Market Line (CAPM)","label1":"E[R] = rf + β·MRP","color":"steelblue"}
```

## 7. Interattivo

```slider
{"fn":"rf + beta*(0.06)","domain":[0,2.5],"yDomain":[-0.05,0.25],"params":[{"name":"rf","min":0.00,"max":0.08,"step":0.005,"default":0.03},{"name":"beta","min":0,"max":2.5,"step":0.1,"default":1}],"title":"CAPM: effetto di rf sul rendimento atteso"}
```

## 8. Errori comuni

**Errore 1 — Confondere rischio totale e rischio sistematico.**
Il CAPM remunera solo il rischio sistematico (beta), non la volatilità totale ($\sigma$). Un asset molto volatile ma con bassa correlazione con il mercato ha un beta basso e un rendimento atteso basso. Il rischio idiosincratico non viene compensato perché può essere eliminato con la diversificazione.

**Errore 2 — Usare la volatilità storica al posto del beta.**
Alcuni studenti confondono la deviazione standard del titolo ($\sigma_i$) con il beta. Il beta si calcola come $\sigma_{im}/\sigma_m^2$ e dipende dalla *covarianza* con il mercato, non dalla varianza del titolo. Due titoli con la stessa volatilità possono avere beta molto diversi.

**Errore 3 — Interpretare il beta come costante nel tempo.**
Il beta viene spesso stimato su dati storici con regressione OLS, ma non è costante: cambia con la struttura finanziaria dell'azienda, il settore e il ciclo economico. Il beta storico è una stima del beta futuro, non una certezza.

**Errore 4 — Dimenticare che la CML vale solo per portafogli efficienti.**
La CML descrive combinazioni di $r_f$ e del portafoglio di mercato $M$. Per un singolo asset o un portafoglio non sulla frontiera efficiente, si usa la SML (che usa $\beta$ sull'asse X, non $\sigma$). Confondere i due grafici è un errore frequente.

**Errore 5 — Calcolare l'MRP come $E[R_m]$ invece di $E[R_m]-r_f$.**
Il market risk premium è il *premio* rispetto al risk-free, non il rendimento assoluto del mercato. Se il mercato rende il 9% e $r_f=3\%$, l'MRP è 6%, non 9%. Inserire il 9% nella formula CAPM porta a un rendimento atteso fortemente sovrastimato.

**Errore 6 — Usare il beta sbagliato per calcolare il WACC.**
Nel WACC si usa il beta dell'equity (levered beta $\beta_L$). Se l'azienda ha debito, il beta equity è diverso dal beta unlevered ($\beta_U$, quello dell'attivo). La relazione è: $\beta_L = \beta_U(1 + (1-t)D/E)$, dove $t$ è l'aliquota fiscale e $D/E$ è il rapporto debito/equity.

**Errore 7 — Credere che alpha positivo garantisca un buon investimento.**
L'alpha di Jensen misura la sovraperformance *rispetto al modello CAPM*. Se il modello è sbagliato (e il CAPM empiricamente lo è spesso), l'alpha può essere positivo perché il modello sottostima il rischio, non perché l'asset sia genuinamente sottovalutato. I modelli multi-fattore (Fama-French) correggono in parte questo problema.

## 9. Applicazioni reali

**Stima del costo del capitale (WACC):** Il CAPM è lo strumento standard per calcolare il costo del capitale proprio nelle valutazioni DCF di aziende. Investment banker e analisti usano il CAPM quasi universalmente, nonostante le critiche teoriche. Un'azienda con $\beta=1.5$, $r_f=3\%$, MRP$=5.5\%$ ha $r_e=11.25\%$, che diventa il tasso di sconto per i flussi di cassa agli azionisti.

**Valutazione dei fondi di investimento:** L'alpha di Jensen è il metro standard per valutare se un gestore di fondi aggiunge valore rispetto a un indice passivo. Un fondo con alpha positivo e statisticamente significativo è raro: la maggior parte dei fondi attivi ha alpha negativo dopo le commissioni, il che ha alimentato l'industria degli ETF passivi.

**Gestione del rischio di portafoglio:** Il beta viene usato per costruire portafogli con il profilo rischio-rendimento desiderato. Un investitore ribassista può ridurre il beta del portafoglio acquistando asset difensivi (utility, consumer staples) o titoli con beta negativo. Un investitore rialzista può aumentare il beta con asset ciclici o tecnologici.

**Benchmark e performance attribution:** I fondi istituzionali usano il CAPM per decomporre la performance in alpha (abilità del gestore) e beta (esposizione al mercato). Un fondo che ha reso il 15% quando il mercato è salito del 14% e $\beta=1$ ha un alpha quasi nullo: ha "cavalcato" il mercato senza aggiungere valore.

## 10. Riepilogo

| Concetto | Formula | Note |
|---|---|---|
| CAPM | $E[R_i]=r_f+\beta_i(E[R_m]-r_f)$ | Equazione fondamentale |
| Beta | $\beta_i=\sigma_{im}/\sigma_m^2$ | Misura il rischio sistematico |
| SML | Retta nello spazio $(\beta, E[R])$ | Tutti gli asset in equilibrio vi giacciono |
| CML | $E[R_p]=r_f+\frac{E[R_m]-r_f}{\sigma_m}\sigma_p$ | Solo portafogli efficienti |
| Alpha di Jensen | $\alpha_i=E[R_i]-[r_f+\beta_i(E[R_m]-r_f)]$ | Misura la sovraperformance |
| Beta portafoglio | $\beta_p=\sum w_i\beta_i$ | Media ponderata dei beta |
| Rischio sistematico | $\beta_i^2\sigma_m^2$ | Non eliminabile con diversificazione |
| Rischio idiosincratico | $\sigma_{\varepsilon_i}^2$ | Eliminabile con diversificazione |
| $R^2$ | $\beta_i^2\sigma_m^2/\sigma_i^2$ | Quota di varianza spiegata dal mercato |

## 11. Esercizi

<details>
<summary>Esercizio 1: Calcolo base CAPM</summary>

$r_f=2.5\%$, $E[R_m]=8.5\%$ (MRP$=6\%$), $\beta_i=1.3$.

Calcolare il rendimento atteso richiesto dall'asset secondo il CAPM.

**Soluzione.**

$$E[R_i] = 2.5\% + 1.3 \cdot 6\% = 2.5\% + 7.8\% = \mathbf{10.3\%}$$

Interpretazione: un investitore razionale esige almeno il 10.3% da questo asset per essere compensato del rischio sistematico assunto. Se l'asset offre meno, sarà sopravvalutato.

</details>

<details>
<summary>Esercizio 2: Alpha di Jensen e decisione di investimento</summary>

Un fondo azionario ha: rendimento storico annuo $13\%$, $\beta=1.2$, $r_f=3\%$, MRP$=6\%$.

(a) Calcolare il rendimento atteso CAPM. (b) Calcolare l'alpha. (c) Il fondo è un buon investimento rispetto a un ETF passivo?

**Soluzione.**

(a) $E[R]_{\text{CAPM}} = 3 + 1.2 \cdot 6 = 10.2\%$

(b) $\alpha = 13\% - 10.2\% = +2.8\%$

(c) L'alpha è positivo: il fondo ha reso il 2.8% in più di quanto previsto dal CAPM dato il suo rischio. Sembra un buon investimento, ma occorre verificare: (i) l'alpha è statisticamente significativo? (ii) è al netto delle commissioni? (iii) il CAPM è il modello giusto o sottostima il rischio effettivo?

</details>

<details>
<summary>Esercizio 3: Beta del portafoglio</summary>

Portafoglio: 30% in asset A ($\beta_A=0.6$), 50% in asset B ($\beta_B=1.4$), 20% in T-Bill ($\beta=0$).

(a) Calcolare $\beta_p$. (b) Calcolare $E[R_p]$ con $r_f=2\%$, MRP$=6\%$.

**Soluzione.**

(a) $\beta_p = 0.30 \cdot 0.6 + 0.50 \cdot 1.4 + 0.20 \cdot 0 = 0.18 + 0.70 + 0 = \mathbf{0.88}$

(b) $E[R_p] = 2\% + 0.88 \cdot 6\% = 2\% + 5.28\% = \mathbf{7.28\%}$

Il portafoglio è leggermente difensivo (beta < 1): in media, se il mercato sale del 10%, questo portafoglio sale circa dell'8.8%.

</details>

<details>
<summary>Esercizio 4: Decomposizione del rischio</summary>

Azione con $\beta=1.5$, $\sigma_m=18\%$, $\sigma_i=35\%$.

(a) Calcolare il rischio sistematico e idiosincratico. (b) Calcolare $R^2$. (c) Interpretare il risultato.

**Soluzione.**

(a) Rischio sistematico: $\beta^2\sigma_m^2 = 2.25 \cdot 0.0324 = 0.0729$ → $\sigma_{\text{sist}} = 27\%$

Rischio idiosincratico: $\sigma_\varepsilon^2 = (0.35)^2 - 0.0729 = 0.1225 - 0.0729 = 0.0496$ → $\sigma_\varepsilon = 22.3\%$

(b) $R^2 = 0.0729/0.1225 = 59.5\%$

(c) Il 59.5% della variabilità dell'azione è spiegata dal mercato; il 40.5% è rischio idiosincratico eliminabile con diversificazione. Un portafoglio ben diversificato eliminerebbe quel 40.5%.

</details>

<details>
<summary>Esercizio 5: Verifica pricing su SML</summary>

Tre asset con le seguenti caratteristiche. $r_f=3\%$, MRP$=5\%$.

| Asset | $\beta$ | $E[R]$ osservato |
|---|---|---|
| A | 0.8 | 8.5% |
| B | 1.2 | 9.0% |
| C | 1.5 | 10.5% |

Per ciascun asset: è sulla SML, sopra o sotto? È sopra o sottovalutato?

**Soluzione.**

Rendimento CAPM: $r_f + \beta \cdot 5\%$

- Asset A: CAPM $= 3 + 0.8 \cdot 5 = 7\%$. Osservato $= 8.5\%$. $\alpha = +1.5\%$ → **sopra la SML → sottovalutato**
- Asset B: CAPM $= 3 + 1.2 \cdot 5 = 9\%$. Osservato $= 9\%$. $\alpha = 0\%$ → **sulla SML → correttamente valutato**
- Asset C: CAPM $= 3 + 1.5 \cdot 5 = 10.5\%$. Osservato $= 10.5\%$. $\alpha = 0\%$ → **sulla SML → correttamente valutato**

</details>

<details>
<summary>Esercizio 6: CAPM per il costo del capitale</summary>

Azienda manifatturiera: $\beta_{\text{equity}}=0.9$, $r_f=2\%$, MRP$=5.5\%$. Il debito ha un costo $r_d=4\%$ (al lordo delle imposte). Struttura finanziaria: $D/(D+E)=30\%$, aliquota fiscale $t=25\%$.

Calcolare il WACC.

**Soluzione.**

Costo del capitale proprio (CAPM): $r_e = 2\% + 0.9 \cdot 5.5\% = 6.95\%$

Costo del debito al netto delle imposte: $r_d(1-t) = 4\% \cdot 0.75 = 3\%$

WACC $= 0.70 \cdot 6.95\% + 0.30 \cdot 3\% = 4.865\% + 0.9\% = \mathbf{5.765\%}$

Questo è il tasso di sconto da usare nei DCF per valutare i progetti dell'azienda.

</details>

<details>
<summary>Esercizio 7: Test empirico del CAPM</summary>

In un campione storico di 20 anni, il portafoglio di mercato ha reso in media il $10\%$ con $r_f=4\%$ (MRP$=6\%$). Il ricercatore stima la SML con una regressione e trova: intercetta $=2\%$, pendenza $=4\%$.

Come interpretare questi risultati rispetto alle previsioni del CAPM?

**Soluzione.**

Il CAPM prevede: intercetta $= r_f = 4\%$, pendenza $= \text{MRP} = 6\%$.

Trovato empiricamente: intercetta $=2\% < 4\%$, pendenza $=4\% < 6\%$.

Questo è un tipico risultato empirico (Black, Jensen e Scholes, 1972): la SML empirica è **più piatta** di quanto previsto dal CAPM. I titoli con basso beta hanno rendimenti storici più alti del previsto, e i titoli ad alto beta hanno rendimenti più bassi del previsto. Questa è una delle principali critiche empiriche al CAPM e ha motivato lo sviluppo dei modelli multi-fattore.

</details>
