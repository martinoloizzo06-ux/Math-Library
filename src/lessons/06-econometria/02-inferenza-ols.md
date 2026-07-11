---
id: econometria-02-inferenza
subject: econometria
topic_it: Regressione OLS
topic_en: OLS regression
title_it: Inferenza nella regressione OLS
title_en: Inference in OLS regression
level: purple
order: 2
source_book: "J.M. Wooldridge, Introductory Econometrics; B.E. Hansen, Econometrics"
source_chapter: "Cap. 3–4 — Inferenza OLS"
stato: da-rielaborare
---

## 1. Intuizione — dal coefficiente al test

Stimi un modello OLS e ottieni $\hat{\beta}_1 = 0.08$. Ma quanto puoi fidarti di questo numero? Forse è solo rumore statistico — con un campione diverso avresti ottenuto $-0.03$. L'inferenza statistica ti permette di rispondere: "Con che probabilità avremmo visto questo risultato se il vero $\beta_1$ fosse zero?"

L'idea fondamentale è che $\hat{\boldsymbol{\beta}}_{\text{OLS}}$ è una variabile aleatoria: dipende dal campione estratto. Se potessimo ripetere l'estrazione molte volte, otterremmo una distribuzione degli stimatori. Il test t sfrutta questa distribuzione per valutare ipotesi sui singoli coefficienti; il test F la usa per valutare ipotesi congiunte su più coefficienti contemporaneamente.

Sotto le assunzioni classiche (OLS.1–OLS.6), la distribuzione degli stimatori è esattamente normale — il che rende i test t ed F esatti per qualsiasi dimensione campionaria. Quando si rinuncia alla normalità degli errori (OLS.6), i test rimangono validi asintoticamente (per grandi $n$) grazie al Teorema Centrale del Limite.

Un punto critico spesso trascurato: i test t ed F standard sono validi **solo sotto omoschedasticità** (OLS.5). Se c'è eteroschedasticità, bisogna usare standard error robusti. Questa lezione spiega quando e come usare gli strumenti giusti.

## 2. Prerequisiti

- Modello CLRM e stimatore OLS in forma matriciale (lezione precedente)
- Distribuzioni: normale, $t$ di Student, $\chi^2$, $F$ di Fisher
- Concetti di test d'ipotesi: ipotesi nulla/alternativa, livello di significatività, p-value
- Intervalli di confidenza

## 3. Teoria — distribuzione degli stimatori e test

### Distribuzione degli stimatori OLS

Sotto OLS.1–OLS.6 (con normalità degli errori):

$$\hat{\boldsymbol{\beta}} \mid X \sim \mathcal{N}\!\left(\boldsymbol{\beta},\ \sigma^2(X'X)^{-1}\right)$$

Ogni singolo coefficiente:
$$\hat{\beta}_j \mid X \sim \mathcal{N}\!\left(\beta_j,\ \sigma^2 [(X'X)^{-1}]_{jj}\right)$$

La varianza di $\hat{\beta}_j$ dipende da tre fattori:
$$\text{Var}(\hat{\beta}_j \mid X) = \frac{\sigma^2}{\text{SST}_j(1 - R_j^2)}$$

dove:
- $\sigma^2$ è la varianza dell'errore — più rumore nel modello, meno precisi gli stimatori
- $\text{SST}_j = \sum_{i=1}^n (x_{ji} - \bar{x}_j)^2$ è la variabilità totale del regressore $j$ — più varia il regressore, più informativo per stimare $\beta_j$
- $R_j^2$ è il coefficiente di determinazione della regressione di $x_j$ sugli altri regressori — misura la multicollinearità: più alto $R_j^2$, meno informazione unica porta $x_j$, più grande lo standard error

**Standard error stimato:**
$$\text{SE}(\hat{\beta}_j) = \frac{\hat{\sigma}}{\sqrt{\text{SST}_j(1 - R_j^2)}}$$

con $\hat{\sigma} = \sqrt{\hat{\sigma}^2} = \sqrt{\text{RSS}/(n-k-1)}$.

### Test t sul singolo coefficiente

Per testare $H_0: \beta_j = \beta_j^0$ contro $H_1: \beta_j \neq \beta_j^0$ (test bilaterale):

$$t_j = \frac{\hat{\beta}_j - \beta_j^0}{\text{SE}(\hat{\beta}_j)} \sim t(n-k-1) \quad \text{sotto } H_0$$

La distribuzione $t$ ha $n-k-1$ gradi di libertà perché $\hat{\sigma}^2$ è stimato (introduce incertezza aggiuntiva). Per $n$ grande, $t(n-k-1) \approx \mathcal{N}(0,1)$ e la regola pratica $|t| > 1.96$ indica significatività al 5%.

**Caso più comune:** $H_0: \beta_j = 0$ (il regressore $j$ non ha effetto su $y$):
$$t_j = \frac{\hat{\beta}_j}{\text{SE}(\hat{\beta}_j)}$$

**Intervallo di confidenza al $(1-\alpha)$ %:**
$$\hat{\beta}_j \pm t_{n-k-1,\, \alpha/2} \cdot \text{SE}(\hat{\beta}_j)$$

dove $t_{n-k-1,\alpha/2}$ è il quantile $\alpha/2$ della $t$ con $n-k-1$ gradi di libertà (es. per $n$ grande, $t_{0.025} \approx 1.96$).

### Test F per restrizioni lineari

Per testare $q$ restrizioni lineari simultanee sui parametri, es. $H_0: R\boldsymbol{\beta} = \mathbf{r}$ con $R \in \mathbb{R}^{q \times (k+1)}$:

$$F = \frac{(\text{RSS}_r - \text{RSS}_u)/q}{\text{RSS}_u/(n-k-1)} \sim F(q, n-k-1) \quad \text{sotto } H_0$$

dove:
- $\text{RSS}_r$ è la somma dei quadrati residui del modello **ristretto** (con $H_0$ imposta)
- $\text{RSS}_u$ è quella del modello **non ristretto**
- $q$ è il numero di restrizioni

**Test F sulla significatività globale:** $H_0: \beta_1 = \beta_2 = \cdots = \beta_k = 0$ (tutti i coefficienti tranne l'intercetta sono zero). $q = k$ restrizioni, il modello ristretto è $y = \beta_0 + u$. In questo caso:

$$F = \frac{R^2/k}{(1-R^2)/(n-k-1)}$$

### Standard error robusti (HC)

Quando OLS.5 è violata (eteroschedasticità), gli SE classici sono distorti. La soluzione è usare la **stima della matrice di covarianza HC (Heteroskedasticity-Consistent)** proposta da White (1980):

$$\hat{V}_{\text{HC0}}(\hat{\boldsymbol{\beta}}) = (X'X)^{-1}\left(\sum_{i=1}^n \hat{u}_i^2 \mathbf{x}_i\mathbf{x}_i'\right)(X'X)^{-1}$$

Sostituisce $\sigma^2(X'X)^{-1}$ con una stima che non richiede omoschedasticità. Varianti comuni: HC1 (correzione per gradi di libertà), HC2, HC3 (più affidabili con campioni piccoli).

Con SE robusti, i test t e F rimangono validi asintoticamente anche con eteroschedasticità — ma non con campioni piccoli.

### Distribuzioni asintotiche senza OLS.6

Senza assumere normalità degli errori, per $n \to \infty$:

$$\sqrt{n}(\hat{\boldsymbol{\beta}} - \boldsymbol{\beta}) \xrightarrow{d} \mathcal{N}(\mathbf{0},\ \sigma^2 Q^{-1})$$

dove $Q = \text{plim}\frac{X'X}{n} = E[\mathbf{x}_i\mathbf{x}_i']$. I test t ed F standard sono validi asintoticamente.

## 4. Derivazioni — dalla normale allo stimatore t

**Da $\hat{\boldsymbol{\beta}}$ normale a statistica $t$:**

Sotto OLS.1–OLS.6: $\hat{\beta}_j \sim \mathcal{N}(\beta_j, \sigma^2[(X'X)^{-1}]_{jj})$, quindi:
$$Z = \frac{\hat{\beta}_j - \beta_j}{\sigma\sqrt{[(X'X)^{-1}]_{jj}}} \sim \mathcal{N}(0,1)$$

Ma $\sigma$ è ignoto. Sostituendo con $\hat{\sigma}$, si dimostra che $\hat{\sigma}^2(n-k-1)/\sigma^2 \sim \chi^2(n-k-1)$ e che è indipendente da $\hat{\boldsymbol{\beta}}$ (condizionato a $X$). Per definizione di distribuzione $t$:
$$t_j = \frac{Z}{\sqrt{\chi^2(n-k-1)/(n-k-1)}} = \frac{\hat{\beta}_j - \beta_j}{\text{SE}(\hat{\beta}_j)} \sim t(n-k-1)$$

**Relazione tra F e t:** Un test F con $q=1$ restrizione è equivalente al quadrato del test t: $F_{1,n-k-1} = t_{n-k-1}^2$ (test bilaterale). La statistica F generalizza il test t a ipotesi multiple simultanee.

## 5. Esempi

**Esempio 1 — Test t di base**

$\hat{\beta}_1 = 0.5$, $\text{SE}(\hat{\beta}_1) = 0.2$, $n = 100$, $k = 3$. Gradi di libertà: $96$.

$t = 0.5/0.2 = 2.5$. Valore critico $t_{96,0.025} \approx 1.984$.

Poiché $2.5 > 1.984$: rifiuto $H_0: \beta_1 = 0$ al 5%. P-value $\approx 2 \cdot P(T_{96} > 2.5) \approx 0.014$.

IC al 95%: $0.5 \pm 1.984 \cdot 0.2 = 0.5 \pm 0.397 = [0.103,\ 0.897]$.

**Esempio 2 — Test t unilaterale**

Si vuole testare $H_0: \beta_{\text{istruzione}} = 0$ vs $H_1: \beta_{\text{istruzione}} > 0$ (l'istruzione ha effetto positivo). $\hat{\beta} = 0.07$, $\text{SE} = 0.04$, $n = 200$, $k = 5$.

$t = 0.07/0.04 = 1.75$. Per test unilaterale al 5%: valore critico $t_{194,0.05} \approx 1.653$.

$1.75 > 1.653$: rifiuto $H_0$. L'istruzione è significativamente positiva al 5% (test unilaterale). Nota: per test bilaterale ($\alpha=5\%$) non avremmo rifiutato ($t_{194,0.025} \approx 1.972$).

**Esempio 3 — Test F di significatività globale**

$R^2 = 0.42$, $n = 50$, $k = 4$. $H_0: \beta_1 = \beta_2 = \beta_3 = \beta_4 = 0$.

$$F = \frac{0.42/4}{0.58/45} = \frac{0.105}{0.0129} \approx 8.14$$

Valore critico $F_{4,45,0.05} \approx 2.58$. Poiché $8.14 \gg 2.58$: rifiuto $H_0$. Almeno un regressore è significativo.

**Esempio 4 — Test F su restrizioni**

Modello: $y = \beta_0 + \beta_1 x_1 + \beta_2 x_2 + \beta_3 x_3 + u$, $n = 100$.

Testare $H_0: \beta_2 = 0, \beta_3 = 0$ (i regressori 2 e 3 sono irrilevanti). $q = 2$.

$\text{RSS}_u = 80$ (modello completo con 4 parametri, gdl $= 96$).
$\text{RSS}_r = 92$ (modello con solo $x_1$, gdl $= 98$).

$$F = \frac{(92 - 80)/2}{80/96} = \frac{6}{0.833} \approx 7.2$$

Valore critico $F_{2,96,0.05} \approx 3.09$. Poiché $7.2 > 3.09$: rifiuto $H_0$. Almeno uno tra $\beta_2$ e $\beta_3$ è non zero.

**Esempio 5 — Effetto della multicollinearità sugli SE**

Modello: $y = \beta_0 + \beta_1 x_1 + \beta_2 x_2 + u$ con $n = 100$.

Scenario A: $\text{Corr}(x_1, x_2) = 0.3$ → $R_1^2 = 0.09$ → $\text{SE}(\hat{\beta}_1) \propto 1/\sqrt{1 - 0.09} = 1/0.954$.
Scenario B: $\text{Corr}(x_1, x_2) = 0.95$ → $R_1^2 = 0.9025$ → $\text{SE}(\hat{\beta}_1) \propto 1/\sqrt{1 - 0.9025} = 1/0.312$.

Il SE nel scenario B è $0.954/0.312 \approx 3.06$ volte più grande dello scenario A. La multicollinearità alta gonfia enormemente gli standard error.

**Esempio 6 — SE robusti vs classici**

Output OLS con eteroschedasticità:

| Variabile | $\hat{\beta}$ | SE classico | t classico | SE robusto HC3 | t robusto |
| --- | --- | --- | --- | --- | --- |
| istruzione | 0.09 | 0.025 | 3.60 | 0.041 | 2.20 |
| esperienza | 0.04 | 0.018 | 2.22 | 0.031 | 1.29 |

Con SE robusti, il coefficiente dell'istruzione rimane significativo (t=2.20 > 1.96) ma quello dell'esperienza non lo è più (t=1.29 < 1.96). I SE classici sottostimavano l'incertezza a causa dell'eteroschedasticità.

**Esempio 7 — Intervallo di confidenza e interpretazione**

$\hat{\beta}_{\text{istruzione}} = 0.08$, $\text{SE} = 0.02$, IC 95%: $[0.04, 0.12]$.

Interpretazione: con il 95% di probabilità (in senso frequentista — se ripetessimo il campionamento infinite volte, il 95% degli IC conterrebbe il vero $\beta$) il vero effetto percentuale dell'istruzione sul salario è compreso tra 4% e 12%. L'IC è abbastanza stretto da essere economicamente interessante: esclude effetti trascurabili (< 4%) ed effetti enormi (> 12%).

## 6. Grafico

```plot
{"fn":"2*x+0.5","domain":[-3,3],"yDomain":[-6,7],"title":"Distribuzione degli stimatori OLS — incertezza stimata","label1":"Retta stimata","color":"steelblue"}
```

## 7. Interattivo

```slider
{"fn":"Math.exp(-0.5*Math.pow((x-mu)/sigma,2))/(sigma*Math.sqrt(2*Math.PI))","domain":[-5,5],"yDomain":[0,0.8],"params":[{"name":"mu","min":-3,"max":3,"step":0.1,"default":0},{"name":"sigma","min":0.3,"max":2,"step":0.1,"default":1}],"title":"Distribuzione dello stimatore OLS: media μ e SE σ"}
```

## 8. Errori comuni

**Errore 1 — Confondere p-value con probabilità che $H_0$ sia vera.**
Il p-value è $P(\text{dati estremi come quelli osservati} \mid H_0 \text{ vera})$, non $P(H_0 \text{ vera} \mid \text{dati})$. Un p-value di 0.03 non significa che c'è il 3% di probabilità che $\beta = 0$. Significa che, *se* $\beta = 0$, avremmo osservato un $t$ così estremo solo nel 3% dei campioni.

**Errore 2 — Usare SE classici in presenza di eteroschedasticità.**
I SE classici assumono $\text{Var}(\mathbf{u} \mid X) = \sigma^2 I$. Con eteroschedasticità sono distorti — possono essere troppo piccoli (gonfiando i t) o troppo grandi. Oggi la prassi standard è sempre usare SE robusti (HC3) nei dati cross-section.

**Errore 3 — Credere che significatività statistica implichi rilevanza economica.**
Con $n = 10000$, anche un effetto minuscolo ($\hat{\beta} = 0.001$) può essere statisticamente significativo ($t > 2$). Bisogna sempre valutare la grandezza economica del coefficiente, non solo la significatività.

**Errore 4 — Interpretare male i test unilaterali.**
Un test unilaterale al 5% usa valore critico $z_{0.05} \approx 1.645$, non $z_{0.025} \approx 1.96$ (bilaterale). Se si usa 1.96 per un test unilaterale, si è effettivamente al 2.5%, non al 5%. L'ipotesi alternativa deve essere specificata *prima* di vedere i dati.

**Errore 5 — Applicare il test F classico con eteroschedasticità.**
Il test F classico su $q$ restrizioni è valido solo sotto omoschedasticità. Con eteroschedasticità bisogna usare il test di Wald robusto: $W = (R\hat{\boldsymbol{\beta}} - \mathbf{r})'\left[R\hat{V}_{\text{HC}}(\hat{\boldsymbol{\beta}})R'\right]^{-1}(R\hat{\boldsymbol{\beta}} - \mathbf{r}) \sim \chi^2(q)$ asintoticamente.

**Errore 6 — Confondere $R^2$ con la qualità del test.**
Un modello con $R^2 = 0.10$ può avere coefficienti molto precisi (piccoli SE) e test t molto significativi — specialmente con grandi campioni. Viceversa, $R^2 = 0.90$ non garantisce coefficienti significativi (es. con pochi dati o alta multicollinearità).

**Errore 7 — Non aggiustare per confronti multipli.**
Se si testano 20 coefficienti al 5% ciascuno, ci si aspetta 1 falso positivo anche se tutti i $\beta = 0$. Con molti test simultanei bisogna considerare correzioni (Bonferroni, Holm) o procedure di controllo del False Discovery Rate.

## 9. Applicazioni reali

**Test sulla struttura salariale per genere.** In un modello $\ln(\text{salario}) = \beta_0 + \beta_1 D_{\text{maschio}} + \boldsymbol{x}'\boldsymbol{\gamma} + u$, il test $H_0: \beta_1 = 0$ verifica se c'è un differenziale salariale di genere significativo controllando per caratteristiche osservabili. La significatività economica ($\hat{\beta}_1 \approx 0.12$ = 12%) è altrettanto importante della significatività statistica.

**Test di significatività congiunta delle stagionalità.** In modelli di serie storiche con dummy trimestrali $Q_1, Q_2, Q_3$, il test F congiunto $H_0: \beta_{Q_1} = \beta_{Q_2} = \beta_{Q_3} = 0$ verifica se la stagionalità è statisticamente significativa. Con $n$ grande, ogni singolo test t potrebbe essere borderline ma il test F congiunto può essere molto significativo.

**IC per elasticità della domanda.** In modelli log-log di domanda, l'IC per $\beta_{\text{prezzo}}$ (elasticità) dice non solo se è significativamente negativa, ma anche se è compatibile con domanda elastica ($|\beta| > 1$) o anelastica ($|\beta| < 1$) — informazione cruciale per politiche di pricing.

**Test di stabilità strutturale (Chow test).** Si divide il campione (es. pre/post crisi) e si testa $H_0: \boldsymbol{\beta}_1 = \boldsymbol{\beta}_2$ (stessi parametri nei due sottocampioni). Questo è un test F su $k+1$ restrizioni. Se significativo, il modello stimato sull'intero campione maschera un'instabilità strutturale.

## 10. Riepilogo

| Concetto | Formula | Note |
| --- | --- | --- |
| Distribuzione $\hat{\boldsymbol{\beta}}$ (OLS.6) | $\mathcal{N}(\boldsymbol{\beta}, \sigma^2(X'X)^{-1})$ | Esatta con normalità errori |
| Varianza $\hat{\beta}_j$ | $\sigma^2/[\text{SST}_j(1-R_j^2)]$ | Cala con variabilità e indipendenza regressori |
| SE stimato | $\hat{\sigma}/\sqrt{\text{SST}_j(1-R_j^2)}$ | Basato su $\hat{\sigma}^2 = \text{RSS}/(n-k-1)$ |
| Test t | $t = (\hat{\beta}_j - \beta_j^0)/\text{SE}(\hat{\beta}_j) \sim t(n-k-1)$ | Sotto $H_0$ e OLS.6 |
| IC $(1-\alpha)$% | $\hat{\beta}_j \pm t_{n-k-1,\alpha/2} \cdot \text{SE}(\hat{\beta}_j)$ | Valido sotto OLS.1–OLS.6 |
| Test F | $F = [(\text{RSS}_r-\text{RSS}_u)/q]/[\text{RSS}_u/(n-k-1)] \sim F(q,n-k-1)$ | Per $q$ restrizioni lineari |
| F globale | $F = [R^2/k]/[(1-R^2)/(n-k-1)]$ | $H_0$: tutti $\beta_j = 0$ (escl. intercetta) |
| SE robusti HC | $(X'X)^{-1}(\sum \hat{u}_i^2 \mathbf{x}_i\mathbf{x}_i')(X'X)^{-1}$ | Validi asintoticamente con eteroschedasticità |

## 11. Esercizi

<details>
<summary>Esercizio 1: Test t e decisione</summary>

Modello: $y = \beta_0 + \beta_1 x_1 + \beta_2 x_2 + u$, $n = 50$, $k = 2$.

Risultati: $\hat{\beta}_1 = 1.2$, $\text{SE}(\hat{\beta}_1) = 0.45$; $\hat{\beta}_2 = -0.3$, $\text{SE}(\hat{\beta}_2) = 0.22$.

(a) Calcolare le statistiche t per $H_0: \beta_1 = 0$ e $H_0: \beta_2 = 0$.
(b) Quali sono significativi al 5% (test bilaterale)?
(c) Costruire l'IC al 95% per $\beta_1$.

**Soluzione:**

Gradi di libertà: $n - k - 1 = 47$. Valore critico $t_{47,0.025} \approx 2.012$.

(a) $t_1 = 1.2/0.45 \approx 2.67$; $t_2 = -0.3/0.22 \approx -1.36$.

(b) $|t_1| = 2.67 > 2.012$: $\beta_1$ significativo al 5%. $|t_2| = 1.36 < 2.012$: $\beta_2$ non significativo al 5%.

(c) IC 95% per $\beta_1$: $1.2 \pm 2.012 \cdot 0.45 = 1.2 \pm 0.905 = [0.295,\ 2.105]$. L'IC non contiene 0 (coerente con il rifiuto di $H_0$).

</details>

<details>
<summary>Esercizio 2: Test F su restrizioni</summary>

Modello non ristretto: $y = \beta_0 + \beta_1 x_1 + \beta_2 x_2 + \beta_3 x_3 + u$, $n = 80$, RSS$_u = 120$.

Testare $H_0: \beta_2 = \beta_3 = 0$. Modello ristretto RSS$_r = 145$.

(a) Calcolare la statistica $F$.
(b) Qual è la distribuzione nulla?
(c) Il test rifiuta a $\alpha = 0.05$? (Valore critico $F_{2,76,0.05} \approx 3.12$.)

**Soluzione:**

(a) $q = 2$ restrizioni, gdl denominatore $= 80 - 3 - 1 = 76$.

$$F = \frac{(145 - 120)/2}{120/76} = \frac{12.5}{1.579} \approx 7.92$$

(b) Sotto $H_0$ e OLS.1–OLS.6: $F \sim F(2, 76)$.

(c) $7.92 > 3.12$: rifiuto $H_0$ al 5%. I regressori $x_2$ e $x_3$ sono congiuntamente significativi.

</details>

<details>
<summary>Esercizio 3: Effetti della multicollinearità</summary>

In un modello con 3 regressori, il regressore $x_1$ ha $R_1^2 = 0.64$ (in regressione sugli altri regressori).

Con $\hat{\sigma} = 2$ e $\text{SST}_1 = 100$:

(a) Calcolare $\text{SE}(\hat{\beta}_1)$.
(b) Cosa succederebbe se $R_1^2$ aumentasse a $0.96$?
(c) Perché la multicollinearità non viola Gauss-Markov?

**Soluzione:**

(a) $\text{SE}(\hat{\beta}_1) = \hat{\sigma}/\sqrt{\text{SST}_1(1-R_1^2)} = 2/\sqrt{100 \cdot (1-0.64)} = 2/\sqrt{36} = 2/6 \approx 0.333$.

(b) Con $R_1^2 = 0.96$: $\text{SE} = 2/\sqrt{100 \cdot 0.04} = 2/\sqrt{4} = 2/2 = 1.00$. Il SE è triplicato! Il t-ratio si riduce di un fattore 3, rendendo molto meno probabile la significatività.

(c) La multicollinearità *imperfetta* (nessun regressore è esatta combinazione lineare degli altri) non viola OLS.3. Le assunzioni OLS.1–OLS.5 sono soddisfatte, quindi OLS è ancora BLUE — ma BLUE con SE grandi. Il problema è che l'informazione nel campione non è sufficiente per stimare con precisione tutti i coefficienti separatamente.

</details>

<details>
<summary>Esercizio 4: SE robusti e eteroschedasticità</summary>

Output di una regressione del reddito su istruzione ed età:

| Variabile | $\hat{\beta}$ | SE classico | SE robusto HC3 |
| --- | --- | --- | --- |
| istruzione | 0.12 | 0.030 | 0.052 |
| età | 0.008 | 0.004 | 0.003 |

(a) Calcolare i t-ratio con SE classici e SE robusti per entrambi i regressori.
(b) Le conclusioni sui test cambiano?
(c) Quale stima preferiresti in presenza di eteroschedasticità?

**Soluzione:**

(a) Istruzione: $t_{\text{classico}} = 0.12/0.030 = 4.0$; $t_{\text{robusto}} = 0.12/0.052 = 2.31$. Età: $t_{\text{classico}} = 0.008/0.004 = 2.0$; $t_{\text{robusto}} = 0.008/0.003 = 2.67$.

(b) Con $n$ grande, valore critico $\approx 1.96$. Istruzione: significativa in entrambi i casi ($4.0 > 1.96$ e $2.31 > 1.96$). Età: con SE classico borderline ($t = 2.0 \approx 1.96$); con SE robusto più chiaramente significativa ($t = 2.67$). In questo caso l'eteroschedasticità gonfiava il SE dell'età (non lo sottostimava). Le conclusioni non cambiano ma la confidenza nel risultato sì.

(c) Con eteroschedasticità, i SE robusti HC3 sono preferibili: non fanno assunzioni sulla struttura di $\text{Var}(u_i)$ e sono validi asintoticamente per qualsiasi forma di eteroschedasticità. Il costo è che con campioni piccoli possono essere imprecisi.

</details>

<details>
<summary>Esercizio 5: Significatività statistica vs economica</summary>

Modello con $n = 50000$ osservazioni. $\hat{\beta}_{\text{istruzione}} = 0.0005$, $\text{SE} = 0.0002$.

(a) Il coefficiente è statisticamente significativo al 5%?
(b) È economicamente rilevante? (L'istruzione è misurata in anni, il reddito in migliaia di euro.)
(c) Cosa insegna questo esempio?

**Soluzione:**

(a) $t = 0.0005/0.0002 = 2.5 > 1.96$: sì, statisticamente significativo al 5%.

(b) L'effetto stimato è di 0.5 euro per anno di istruzione aggiuntivo (0.0005 × 1000). Un anno in più di istruzione vale 50 centesimi di reddito mensile? Economicamente irrilevante.

(c) Con campioni grandi, la significatività statistica è quasi automatica — anche effetti microscopici diventano "significativi". Bisogna sempre chiedersi: *quanto grande* è l'effetto (magnitudo economica), non solo *se* è diverso da zero. La significatività statistica non implica rilevanza pratica.

</details>

<details>
<summary>Esercizio 6: Intervallo di confidenza e decisione di policy</summary>

Stai valutando un programma di formazione professionale. Modello: $\Delta\ln(\text{salario}) = \beta_0 + \beta_1 D_{\text{trattamento}} + u$.

Risultati (con SE robusti): $\hat{\beta}_1 = 0.15$, $\text{SE} = 0.07$, $n = 300$.

(a) Calcolare IC al 95%.
(b) L'IC contiene zero? Cosa implica per il test $H_0: \beta_1 = 0$?
(c) Il programma è "cost-effective" se aumenta il salario di almeno 10%. Cosa dice l'IC?

**Soluzione:**

(a) Valore critico $t_{297,0.025} \approx 1.968$. IC 95%: $0.15 \pm 1.968 \cdot 0.07 = 0.15 \pm 0.138 = [0.012,\ 0.288]$.

(b) L'IC non contiene zero → rifiuto $H_0: \beta_1 = 0$ al 5%. Il trattamento ha un effetto positivo statisticamente significativo.

(c) La soglia è $\beta_1 = 0.10$ (10%). L'IC 95% è $[0.012, 0.288]$: contiene valori sia sotto che sopra 0.10. Non possiamo escludere con il 95% di confidenza che l'effetto sia inferiore al 10% (il limite inferiore è 1.2%). Per una decisione di policy conservativa, potrebbe servire un campione più grande per stimare $\beta_1$ con maggiore precisione.

</details>
