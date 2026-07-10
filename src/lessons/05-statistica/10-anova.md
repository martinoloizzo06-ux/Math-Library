---
id: statistica-10-anova
subject: statistica
topic_it: Regressione
topic_en: Regression
title_it: ANOVA (analisi della varianza)
title_en: ANOVA (analysis of variance)
level: purple
order: 10
source_book: "L. Wasserman, All of Statistics; Casella & Berger, Statistical Inference"
source_chapter: "Cap. 12 — ANOVA"
---

## 1. Intuizione — analogia concreta + perché si studia

Supponi di voler confrontare l'efficacia di tre diete diverse su un campione di 60 persone: 20 per dieta. Dopo tre mesi misuri la perdita di peso di ciascuno. La domanda è: le tre diete producono effetti **diversi** in media, o le differenze osservate sono solo frutto del caso?

Il primo impulso sarebbe fare tre test t a coppie (Dieta A vs B, A vs C, B vs C). Il problema è che ogni test ha una probabilità $\alpha$ di falso positivo; con tre test al 5%, la probabilità di almeno un errore di tipo I supera il 14%. Con 10 gruppi ci sarebbero 45 confronti e il problema diventerebbe critico.

L'**ANOVA** (ANalysis Of VAriance) risolve questo problema con un unico test che confronta simultaneamente tutte le medie dei gruppi. Il nome sembra contraddittorio — analizziamo la varianza per testare le medie — ma è preciso: l'idea chiave è decomporre la variabilità totale dei dati in due componenti: la variabilità **tra** i gruppi (dovuta alle differenze reali tra le medie) e la variabilità **entro** i gruppi (dovuta alla variazione casuale all'interno di ogni gruppo). Se la variabilità tra gruppi è grande rispetto a quella entro i gruppi, è probabile che le medie siano davvero diverse.

La statistica F — il rapporto tra queste due componenti — formalizza questo confronto. L'ANOVA è generalizzabile a due o più fattori (ANOVA a due vie, ANOVA mixed, ecc.) ed è equivalente alla regressione lineare multipla con predittori categoriali. È lo strumento standard in psicologia sperimentale, in agronomia (confronto di varietà di colture), in farmacologia (confronto di dosaggi), e nei test A/B nei prodotti digitali.

## 2. Prerequisiti

- Statistica descrittiva: media campionaria, varianza campionaria
- Distribuzione normale e distribuzioni campionarie
- Test t di Student a due campioni
- Distribuzione F di Fisher-Snedecor
- Concetto di gradi di libertà
- Regressione lineare (utile per la connessione con ANOVA)

## 3. Teoria

### ANOVA a una via (one-way)

**Scopo:** confrontare le medie di $k$ gruppi indipendenti.

**Modello:** per il gruppo $i$ ($i = 1, \ldots, k$) e l'osservazione $j$ ($j = 1, \ldots, n_i$):

$$Y_{ij} = \mu_i + \varepsilon_{ij}, \qquad \varepsilon_{ij} \sim \mathcal{N}(0, \sigma^2) \text{ i.i.d.}$$

dove $\mu_i$ è la media del gruppo $i$ e $\sigma^2$ è la varianza comune (omoschedasticità).

Forma alternativa (effetti): $Y_{ij} = \mu + \alpha_i + \varepsilon_{ij}$, dove $\mu$ è la media globale e $\alpha_i$ è l'effetto del gruppo $i$ (con $\sum n_i \alpha_i = 0$).

**Ipotesi:** $H_0: \mu_1 = \mu_2 = \cdots = \mu_k$ vs $H_1$: almeno una coppia di medie è diversa.

**Assunzioni:**

1. **Normalità:** $Y_{ij} \sim \mathcal{N}(\mu_i, \sigma^2)$ in ogni gruppo.
2. **Omoschedasticità:** varianza $\sigma^2$ uguale per tutti i gruppi.
3. **Indipendenza:** le osservazioni sono indipendenti, anche tra gruppi.

### Scomposizione della varianza

Notazione: $n = \sum_{i=1}^k n_i$ (totale osservazioni), $\bar{y} = \frac{1}{n}\sum_{ij} y_{ij}$ (media globale), $\bar{y}_i = \frac{1}{n_i}\sum_j y_{ij}$ (media del gruppo $i$).

Identità di scomposizione:

$$\underbrace{\sum_{i=1}^{k}\sum_{j=1}^{n_i}(y_{ij}-\bar{y})^2}_{\text{TSS}} = \underbrace{\sum_{i=1}^{k}n_i(\bar{y}_i-\bar{y})^2}_{\text{SSA}} + \underbrace{\sum_{i=1}^{k}\sum_{j=1}^{n_i}(y_{ij}-\bar{y}_i)^2}_{\text{SSE}}$$

- **TSS** (Total Sum of Squares): variabilità totale ($n-1$ gradi di libertà).
- **SSA** (Sum of Squares Among groups): variabilità **tra** i gruppi ($k-1$ gradi di libertà).
- **SSE** (Sum of Squares Error / Within): variabilità **entro** i gruppi ($n-k$ gradi di libertà).

### Tavola ANOVA

| Sorgente | SS | df | MS | F |
| --- | --- | --- | --- | --- |
| Tra gruppi (Among) | SSA | $k-1$ | MSA = SSA/$(k-1)$ | MSA/MSE |
| Entro gruppi (Error) | SSE | $n-k$ | MSE = SSE/$(n-k)$ | |
| Totale | TSS | $n-1$ | | |

**Statistica test:** $F = \text{MSA}/\text{MSE} \sim F(k-1, n-k)$ sotto $H_0$.

**Intuizione:** MSA stima $\sigma^2$ più la variabilità tra le medie; MSE stima solo $\sigma^2$. Se $H_0$ è vera, MSA $\approx$ MSE e $F \approx 1$. Se $H_0$ è falsa, MSA $\gg$ MSE e $F$ è grande.

### Test post-hoc (confronti multipli)

Se il test F rifiuta $H_0$, sappiamo che almeno una coppia di medie differisce — ma non quale. I test post-hoc identificano le coppie specifiche, controllando per il problema dei confronti multipli.

**Test di Tukey (HSD — Honest Significant Difference):** costruisce intervalli di confidenza simultanei per tutte le coppie $(\mu_i - \mu_j)$, controllando l'errore di famiglia (probabilità di almeno un falso positivo) al livello $\alpha$. Il valore critico usa la distribuzione studentized range.

**Correzione di Bonferroni:** divide $\alpha$ per il numero di confronti $m = \binom{k}{2}$: ogni test è fatto al livello $\alpha/m$. È più conservativo di Tukey ma universalmente applicabile.

**Test di Scheffé:** controlla per tutti i possibili contrasti lineari tra medie (non solo coppie). Molto conservativo, usato quando i confronti non erano pianificati a priori.

### ANOVA a due vie (two-way)

Con due fattori $A$ (a $a$ livelli) e $B$ (a $b$ livelli):

$$Y_{ijk} = \mu + \alpha_i + \beta_j + (\alpha\beta)_{ij} + \varepsilon_{ijk}$$

- $\alpha_i$: effetto principale del fattore A.
- $\beta_j$: effetto principale del fattore B.
- $(\alpha\beta)_{ij}$: termine di **interazione** tra A e B.

L'interazione è presente quando l'effetto di A dipende dal livello di B (e viceversa). Per esempio: un farmaco che funziona meglio sulle donne che sugli uomini (interazione farmaco-sesso).

Scomposizione: TSS = SS(A) + SS(B) + SS(AB) + SSE, ognuno con i propri gradi di libertà e test F.

## 4. Derivazioni

### Derivazione della scomposizione TSS = SSA + SSE

$$y_{ij} - \bar{y} = (y_{ij} - \bar{y}_i) + (\bar{y}_i - \bar{y})$$

Elevando al quadrato e sommando su tutti gli $i,j$:

$$\sum_{ij}(y_{ij}-\bar{y})^2 = \sum_{ij}(y_{ij}-\bar{y}_i)^2 + \sum_{ij}(\bar{y}_i-\bar{y})^2 + 2\sum_{ij}(y_{ij}-\bar{y}_i)(\bar{y}_i-\bar{y})$$

Il termine misto è zero: $\sum_j(y_{ij}-\bar{y}_i) = 0$ per ogni $i$ (i residui si sommano a zero all'interno di ogni gruppo). Quindi:

$$\text{TSS} = \text{SSE} + \underbrace{\sum_i n_i(\bar{y}_i-\bar{y})^2}_{\text{SSA}}$$

### Distribuzione di F sotto $H_0$

Sotto $H_0$ e normalità degli errori: SSE/$\sigma^2 \sim \chi^2(n-k)$ e SSA/$\sigma^2 \sim \chi^2(k-1)$ (indipendenti). Quindi:

$$F = \frac{\text{SSA}/(k-1)}{\text{SSE}/(n-k)} = \frac{\chi^2(k-1)/(k-1)}{\chi^2(n-k)/(n-k)} \sim F(k-1, n-k)$$

Sotto $H_1$ (medie diverse), il numeratore è inflato dall'effetto tra gruppi: $F$ segue una distribuzione $F$ non centrale, con valore atteso $> 1$.

## 5. Esempi

**Esempio 1 — ANOVA a una via completa**

Tre gruppi ($n_1 = n_2 = n_3 = 5$), medie $\bar{y}_1 = 10$, $\bar{y}_2 = 12$, $\bar{y}_3 = 14$, media globale $\bar{y} = 12$. SSE $= 30$.

SSA $= 5(10-12)^2 + 5(12-12)^2 + 5(14-12)^2 = 5 \cdot 4 + 0 + 5 \cdot 4 = 40$.

| Sorgente | SS | df | MS | F |
| --- | --- | --- | --- | --- |
| Tra | 40 | 2 | 20 | 8.00 |
| Entro | 30 | 12 | 2.5 | |
| Totale | 70 | 14 | | |

Valore critico $F_{2,12,0.05} = 3.89$. Poiché $F = 8 > 3.89$, si **rifiuta** $H_0$: le medie dei tre gruppi sono significativamente diverse.

---

**Esempio 2 — Perché non fare più test t**

Con $k = 5$ gruppi, ci sono $\binom{5}{2} = 10$ confronti a coppie. Ogni test a livello $\alpha = 0.05$ ha una probabilità di falso positivo del 5%. La probabilità di almeno un errore di tipo I è $1 - (1-0.05)^{10} = 1 - 0.599 = 40.1\%$. Con 10 test separati, quasi la metà delle volte si sbaglia almeno una volta. L'ANOVA controlla globalmente l'errore al livello $\alpha$ in un unico test.

---

**Esempio 3 — Test post-hoc di Tukey**

Con $k = 3$, $n_i = 5$, MSE $= 2.5$, $\bar{y}_1 = 10$, $\bar{y}_2 = 12$, $\bar{y}_3 = 14$.

La differenza standard per Tukey: $\text{SE}_{\text{diff}} = \sqrt{\text{MSE}(1/n_1 + 1/n_2)} = \sqrt{2.5 \cdot 0.4} = 1$.

Valore critico per Tukey ($k=3$, $\nu=12$, $\alpha=0.05$): $q_{0.05}(3,12) \approx 3.77$. Quindi HSD $= 3.77 \times 1 = 3.77$.

Differenze: $\lvert\bar{y}_1 - \bar{y}_2\rvert = 2 < 3.77$ (non significativa). $\lvert\bar{y}_1 - \bar{y}_3\rvert = 4 > 3.77$ (significativa). $\lvert\bar{y}_2 - \bar{y}_3\rvert = 2 < 3.77$ (non significativa).

Solo la coppia (gruppo 1, gruppo 3) differisce significativamente dopo la correzione per confronti multipli.

---

**Esempio 4 — Verifica dell'omoschedasticità**

Tre gruppi con deviazioni standard campionarie: $s_1 = 3$, $s_2 = 4$, $s_3 = 10$.

Rapporto $s_{\max}/s_{\min} = 10/3 = 3.3 > 2$: possibile violazione dell'omoschedasticità. Bisogna eseguire il test di Levene o di Bartlett prima di procedere con l'ANOVA.

---

**Esempio 5 — ANOVA a due vie con interazione**

Fattore A: tipo di farmaco (F1, F2); Fattore B: sesso (M, F). La risposta è riduzione della pressione (mmHg).

| | Maschi | Femmine |
| --- | --- | --- |
| Farmaco F1 | 10 | 20 |
| Farmaco F2 | 15 | 15 |

Effetto principale A (media F1 vs F2): $(10+20)/2 = 15$ vs $(15+15)/2 = 15$ → nessuna differenza media tra farmaci.

Ma guardando per sesso: F1 funziona meglio sulle femmine (20 vs 10), F2 funziona ugualmente (15 vs 15). C'è una chiara **interazione**: l'effetto del farmaco dipende dal sesso. Presentare solo gli effetti principali sarebbe fuorviante.

---

**Esempio 6 — Collegamento con la regressione**

L'ANOVA a una via con $k$ gruppi è equivalente a una regressione lineare multipla con $k-1$ variabili dummy (indicatrici). Per $k = 3$: $D_1 = 1$ se gruppo 1 altrimenti 0; $D_2 = 1$ se gruppo 2 altrimenti 0.

Il modello $Y_{ij} = \beta_0 + \beta_1 D_1 + \beta_2 D_2 + \varepsilon_{ij}$ dà esattamente lo stesso test F dell'ANOVA: $\beta_0 = \mu_3$ (intercetta = media gruppo di riferimento), $\beta_1 = \mu_1 - \mu_3$, $\beta_2 = \mu_2 - \mu_3$.

---

**Esempio 7 — Potenza del test**

Con $k = 3$, $n = 5$ per gruppo, $\sigma = 2$, le medie vere sono $\mu_1 = 8$, $\mu_2 = 10$, $\mu_3 = 12$.

Il parametro di non centralità è $\lambda = \frac{\sum n_i(\mu_i - \mu)^2}{\sigma^2} = \frac{5(4+0+4)}{4} = 10$.

Con $\lambda = 10$ e distribuzione $F$ non centrale con $(2, 12)$ gradi di libertà, la potenza (al 5%) è circa 75%: il test rifiuta $H_0$ nel 75% dei casi quando le medie differiscono di 2 unità con deviazione standard 2.

---

**Esempio 8 — Analisi dei residui in ANOVA**

Dopo aver stimato l'ANOVA, si calcola il residuo $\hat{\varepsilon}_{ij} = y_{ij} - \bar{y}_i$. Il Q-Q plot dei residui valuta la normalità. Il box plot dei residui per gruppo valuta l'omoschedasticità. Se il box plot mostra ampiezza molto diversa tra gruppi, l'assunzione è violata: occorre trasformare i dati (es. $\log Y$) o usare l'ANOVA di Welch (che non assume varianze uguali).

## 6. Grafico

```plot
{"fn":"Math.exp(-0.5*Math.pow(x-1,2))*3+Math.exp(-0.5*Math.pow(x+1,2))*2","domain":[-5,5],"yDomain":[0,4],"title":"Distribuzioni di tre gruppi — medie diverse","label1":"Densità combinata","color":"steelblue"}
```

## 7. Interattivo

```slider
{"fn":"Math.exp(-0.5*Math.pow((x-a)/b,2))/(b*Math.sqrt(2*Math.PI))*3","domain":[-6,6],"yDomain":[0,2],"params":[{"name":"a","min":-3,"max":3,"step":0.5,"default":0},{"name":"b","min":0.5,"max":3,"step":0.1,"default":1}],"title":"Distribuzione normale: sposta la media (a) e cambia la deviazione standard (b)"}
```

## 8. Errori comuni

**Errore 1 — Fare confronti a coppie senza correzione dopo un ANOVA non significativo.**
Se il test F globale non rifiuta $H_0$, non si dovrebbero fare confronti a coppie post-hoc. Cercare differenze significative tra singole coppie dopo un test F non significativo è "p-hacking" — se si fanno abbastanza confronti, qualcosa risulterà significativo per caso.

**Errore 2 — Ignorare le assunzioni di normalità e omoschedasticità.**
L'ANOVA classica assume normalità degli errori e varianza comune. Con campioni piccoli e distribuzioni molto asimmetriche, il test F non è affidabile. Con varianze molto diverse tra gruppi, gli errori di tipo I si gonfiano. Verificare sempre le assunzioni con test diagnostici e grafici.

**Errore 3 — Confondere ANOVA significativa con differenza pratica.**
Con $n$ grande, anche differenze minuscole tra medie (es. 0.1 su una scala 0-100) risultano statisticamente significative. L'effect size (es. $\eta^2 = \text{SSA}/\text{TSS}$) misura la rilevanza pratica.

**Errore 4 — Non pianificare i confronti post-hoc prima di vedere i dati.**
I confronti pianificati a priori (planned contrasts) sono più potenti dei test post-hoc. Se un confronto specifico era di interesse prima di raccogliere i dati (es. "farmaco A vs controllo"), va analizzato separatamente con un test più potente, non con Tukey o Scheffé.

**Errore 5 — Presentare solo gli effetti principali quando c'è interazione significativa.**
In ANOVA a due vie, se l'interazione AB è significativa, gli effetti principali vanno interpretati con cautela — dipendono dal livello dell'altro fattore. Bisogna presentare i dati disaggregati per combinazione di livelli, non solo le medie marginali.

**Errore 6 — Usare ANOVA ripetuta quando le osservazioni sono dipendenti.**
Se le stesse persone sono misurate in $k$ condizioni diverse (disegno within-subject), le osservazioni non sono indipendenti. Bisogna usare l'ANOVA a misure ripetute, che corregge per la correlazione intra-soggetto. Ignorare la dipendenza gonfia l'MSE e riduce la potenza.

**Errore 7 — Credere che ANOVA e regressione multipla siano procedure diverse.**
Sono matematicamente equivalenti. ANOVA è regressione con predittori categoriali codificati come dummy. La comprensione di questa equivalenza semplifica l'analisi di disegni complessi (ANCOVA, modelli misti) e permette di usare i software di regressione per tutto.

## 9. Applicazioni reali

**Psicologia sperimentale:** confronto di tre metodi di apprendimento (visivo, auditivo, cinestetico) su un campione di studenti. L'ANOVA verifica se il metodo influenza il punteggio al test finale, controllando per variabilità individuale.

**Agronomia:** confronto di quattro varietà di grano su parcelle sperimentali. L'ANOVA a due vie (varietà × tipo di suolo) distingue l'effetto della varietà, dell'ambiente, e dell'interazione — fondamentale per raccomandare la varietà giusta per ogni terreno.

**Farmacologia clinica:** trial clinico con tre dosaggi di un farmaco più placebo. L'ANOVA verifica se esiste un effetto dose-risposta; il trend lineare del dosaggio può essere testato con un contrasto polinomiale.

**Ingegneria della qualità:** in un processo manifatturiero, confronto di cinque macchine produttrici su variabilità dimensionale del prodotto. L'ANOVA identifica se la macchina influenza la qualità e quale/i macchine producono fuori specifica.

## 10. Riepilogo

| Concetto | Formula | Note |
| --- | --- | --- |
| Modello one-way | $Y_{ij} = \mu_i + \varepsilon_{ij}$ | $\varepsilon_{ij} \sim \mathcal{N}(0,\sigma^2)$ i.i.d. |
| Scomposizione | TSS = SSA + SSE | Identità algebrica esatta |
| SSA (tra) | $\sum_i n_i(\bar{y}_i - \bar{y})^2$ | $k-1$ gradi di libertà |
| SSE (entro) | $\sum_{ij}(y_{ij} - \bar{y}_i)^2$ | $n-k$ gradi di libertà |
| Statistica F | MSA/MSE $\sim F(k-1, n-k)$ | Sotto $H_0$ e assunzioni |
| Stima $\sigma^2$ | MSE = SSE/$(n-k)$ | Non distorto per $\sigma^2$ |
| Effect size | $\eta^2 = \text{SSA}/\text{TSS}$ | Proporzione varianza spiegata |
| Post-hoc Tukey | HSD $= q_\alpha \sqrt{\text{MSE}/n}$ | Controlla errore di famiglia |
| VIF Bonferroni | $\alpha/\binom{k}{2}$ per ogni test | Più conservativo di Tukey |
| Two-way | TSS = SS(A)+SS(B)+SS(AB)+SSE | Interazione cruciale |

## 11. Esercizi

<details>
<summary>Esercizio 1: Tavola ANOVA completa</summary>

Quattro gruppi ($n_i = 6$ per gruppo), $\bar{y}_1 = 5$, $\bar{y}_2 = 8$, $\bar{y}_3 = 6$, $\bar{y}_4 = 9$, $\bar{y} = 7$. SSE $= 60$.

Costruire la tavola ANOVA e testare $H_0$ a $\alpha = 0.05$.

**Soluzione:**

SSA $= 6[(5-7)^2 + (8-7)^2 + (6-7)^2 + (9-7)^2] = 6[4+1+1+4] = 60$.

$n = 24$, df(A) $= 3$, df(E) $= 20$.

MSA $= 60/3 = 20$, MSE $= 60/20 = 3$, $F = 20/3 = 6.67$.

Valore critico $F_{3,20,0.05} \approx 3.10$. Poiché $6.67 > 3.10$, si **rifiuta** $H_0$: le medie non sono tutte uguali ($p < 0.05$).

</details>

<details>
<summary>Esercizio 2: Perché ANOVA controlla meglio l'errore di tipo I</summary>

Confrontare due strategie per testare $k = 6$ gruppi: (a) 15 test t a coppie con $\alpha = 0.05$; (b) un test F globale ANOVA con $\alpha = 0.05$.

**Soluzione:**

(a) Probabilità di almeno un falso positivo: $1 - (0.95)^{15} \approx 1 - 0.463 = 0.537$. Con 15 test indipendenti al 5%, sbaglio il 54% delle volte.

(b) Il test F globale controlla esattamente l'errore di tipo I al 5%: la probabilità di rifiutare $H_0$ quando è vera è esattamente 0.05.

Conclusione: la molteplicità dei test gonfia drammaticamente l'errore. L'ANOVA è la strategia corretta per il confronto simultaneo di medie.

</details>

<details>
<summary>Esercizio 3: Calcolo di η² e interpretazione</summary>

$k = 3$, $n = 30$, SSA $= 80$, SSE $= 120$. Calcolare $\eta^2$ e interpretarlo.

**Soluzione:**

TSS $= 80 + 120 = 200$. $\eta^2 = 80/200 = 0.40$.

Il 40% della variabilità totale dei dati è spiegata dall'appartenenza al gruppo. Secondo le convenzioni di Cohen, $\eta^2 = 0.40$ è un effetto molto grande (grande $\geq 0.14$). Il test F: MSA $= 80/2 = 40$, MSE $= 120/27 = 4.44$, $F = 9.0 \sim F(2,27)$. Con $F_{2,27,0.05} \approx 3.35$, si rifiuta $H_0$.

</details>

<details>
<summary>Esercizio 4: Verifica assunzioni ANOVA</summary>

In un esperimento con 3 gruppi ($n_i = 10$), le deviazioni standard campionarie sono $s_1 = 2$, $s_2 = 2.5$, $s_3 = 8$. Cosa suggerisce questo risultato?

**Soluzione:**

Il rapporto $s_{\max}/s_{\min} = 8/2 = 4 > 2$: c'è un forte segnale di eteroschedasticità. L'ANOVA classica non è appropriata.

Alternative: (1) trasformazione logaritmica di $Y$ se i valori sono positivi e asimmetrici; (2) ANOVA di Welch, che non assume $\sigma_i^2$ uguale; (3) test non parametrico di Kruskal-Wallis. Prima di scegliere, eseguire il test di Levene (robusto agli outlier) o di Bartlett (più sensibile ma richiede normalità).

</details>

<details>
<summary>Esercizio 5: Test post-hoc con Bonferroni</summary>

ANOVA a una via con $k = 4$ gruppi, rifiuto di $H_0$. Si vogliono fare confronti a coppie usando Bonferroni a livello $\alpha = 0.05$.

Qual è il livello di ciascun test? Quanti confronti ci sono?

**Soluzione:**

$m = \binom{4}{2} = 6$ confronti a coppie.

Bonferroni: livello corretto per ogni test = $\alpha/m = 0.05/6 \approx 0.0083$.

Ogni test t di confronto tra due medie viene dichiarato significativo solo se $p < 0.0083$. Questo garantisce che la probabilità di almeno un falso positivo sull'insieme dei 6 test non superi il 5%.

</details>

<details>
<summary>Esercizio 6: ANOVA a due vie — riconoscere l'interazione</summary>

Disegno 2×2: Fattore A (metodo: M1, M2), Fattore B (livello: base, avanzato). Medie:

| | Base | Avanzato |
| --- | --- | --- |
| M1 | 70 | 80 |
| M2 | 80 | 82 |

Calcolare gli effetti principali e discutere l'interazione.

**Soluzione:**

Effetto principale A: media M1 $= 75$, media M2 $= 81$ → M2 superiore di 6 punti in media.

Effetto principale B: media Base $= 75$, media Avanzato $= 81$ → livello avanzato superiore di 6 punti in media.

Interazione: differenza M2-M1 al livello Base $= 10$; al livello Avanzato $= 2$. Le differenze sono molto diverse: c'è interazione. M2 è molto migliore di M1 per i livelli base, ma quasi equivalente per i livelli avanzati. Presentare solo gli effetti principali sarebbe fuorviante.

</details>

<details>
<summary>Esercizio 7: ANOVA come regressione con dummy</summary>

Trascrivi l'ANOVA a una via con $k = 3$ gruppi come modello di regressione lineare multipla. Quali sono le variabili dummy? Come si interpretano i coefficienti?

**Soluzione:**

Definire: $D_1 = 1$ se gruppo 1, altrimenti 0; $D_2 = 1$ se gruppo 2, altrimenti 0. Il gruppo 3 è il riferimento.

Modello: $Y = \beta_0 + \beta_1 D_1 + \beta_2 D_2 + \varepsilon$.

$\hat{\beta}_0 = \bar{y}_3$ (media del gruppo di riferimento), $\hat{\beta}_1 = \bar{y}_1 - \bar{y}_3$ (differenza media gruppo 1 vs 3), $\hat{\beta}_2 = \bar{y}_2 - \bar{y}_3$.

Il test F globale della regressione ($H_0: \beta_1 = \beta_2 = 0$) è identico al test F dell'ANOVA. I due approcci sono perfettamente equivalenti.

</details>

<details>
<summary>Esercizio 8: Interpretare il p-value dell'ANOVA</summary>

ANOVA con $k = 5$ gruppi, $n = 50$, $F = 3.20$, $p\text{-value} = 0.019$. Come interpretare?

**Soluzione:**

$p = 0.019 < 0.05$: si rifiuta $H_0$ al livello 5%. Le medie dei 5 gruppi non sono tutte uguali.

Interpretazione: se $H_0$ fosse vera (tutte le medie uguali), osservare un $F \geq 3.20$ sarebbe possibile solo nel 1.9% dei casi per pura variabilità campionaria. Con i dati osservati, l'evidenza contro $H_0$ è abbastanza forte da essere statisticamente convincente al livello scelto.

Passo successivo: test post-hoc per identificare quali coppie differiscono significativamente, controllando per confronti multipli.

</details>
