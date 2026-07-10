---
id: econometria-03-eteroschedasticita
subject: econometria
topic_it: Violazioni del CLRM
topic_en: CLRM violations
title_it: Eteroschedasticità
title_en: Heteroskedasticity
level: purple
order: 3
source_book: "J.M. Wooldridge, Introductory Econometrics; B.E. Hansen, Econometrics"
source_chapter: "Cap. 8 — Eteroschedasticità"
---

## 1. Intuizione — la varianza non è sempre costante

Immagina di modellare il reddito in funzione dell'istruzione. Per le persone con pochi anni di studio, i redditi sono concentrati in un range ristretto (tutti vicini al salario minimo). Per i laureati, invece, c'è enorme variabilità: alcuni guadagnano 30.000€, altri 300.000€. La "dispersione" degli errori cresce con il livello di istruzione.

Questo fenomeno si chiama **eteroschedasticità** (dal greco: *etero* = diverso, *skedastikos* = dispersione). È la violazione dell'assunzione OLS.5 che richiede varianza *costante* (omoschedasticità) degli errori.

L'eteroschedasticità è estremamente comune nei dati economici, specialmente in dati cross-section: dati di famiglie (le famiglie ricche hanno consumo più variabile), dati di imprese (le imprese grandi hanno profitti più variabili), dati finanziari (la volatilità varia nel tempo). Riconoscerla e correggerla è una competenza fondamentale dell'econometrista applicato.

Il punto cruciale: l'eteroschedasticità **non distorce i coefficienti OLS** (la stima puntuale di $\hat{\boldsymbol{\beta}}$ rimane corretta), ma **invalida gli standard error classici** e quindi tutti i test t ed F. Ignorarla porta a conclusioni sbagliate sull'inferenza — non sui valori stimati.

## 2. Prerequisiti

- Assunzioni CLRM (in particolare OLS.4 ed OLS.5)
- Stimatore OLS e sue proprietà (lezioni precedenti)
- Concetto di test $\chi^2$ e di statistica LM (Lagrange Multiplier)
- Distribuzioni asintotiche e legge dei grandi numeri

## 3. Teoria — definizione, conseguenze, test e correzioni

### Definizione formale

**Omoschedasticità (OLS.5):** $\text{Var}(u_i \mid \mathbf{x}_i) = \sigma^2$ — la varianza dell'errore è la stessa per ogni osservazione, indipendentemente dai valori dei regressori.

**Eteroschedasticità:** $\text{Var}(u_i \mid \mathbf{x}_i) = \sigma_i^2$ — la varianza varia da osservazione a osservazione (dipende da $\mathbf{x}_i$ o dall'indice $i$).

In forma matriciale, con eteroschedasticità:
$$\text{Var}(\mathbf{u} \mid X) = \Omega = \text{diag}(\sigma_1^2, \sigma_2^2, \ldots, \sigma_n^2) \neq \sigma^2 I_n$$

### Conseguenze sull'OLS

**La stima puntuale è ancora corretta:** $E[\hat{\boldsymbol{\beta}}_{\text{OLS}} \mid X] = \boldsymbol{\beta}$ (perché non dipende da OLS.5 ma solo da OLS.4). Anche la consistenza è preservata.

**OLS non è più BLUE:** Con $\Omega \neq \sigma^2 I$, il teorema di Gauss-Markov non si applica. Lo stimatore GLS ($\tilde{\boldsymbol{\beta}} = (X'\Omega^{-1}X)^{-1}X'\Omega^{-1}\mathbf{y}$) ha varianza minore di OLS.

**Gli SE classici sono distorti:** La formula $\hat{V}_{\text{classico}} = \hat{\sigma}^2(X'X)^{-1}$ assume $\Omega = \sigma^2 I$ — con eteroschedasticità è sbagliata. I test t ed F basati su questi SE non sono validi.

**La vera varianza di OLS con eteroschedasticità:**
$$\text{Var}(\hat{\boldsymbol{\beta}}_{\text{OLS}} \mid X) = (X'X)^{-1}X'\Omega X(X'X)^{-1}$$

Questa è la **formula sandwich** (o Eicker-White). Si noti che non coincide con $\sigma^2(X'X)^{-1}$.

### Rilevamento grafico

Il metodo più immediato: dopo aver stimato l'OLS, fare un grafico dei **residui quadratici** $\hat{u}_i^2$ contro i valori fitted $\hat{y}_i$ o contro i singoli regressori $x_{ji}$.

- Se il grafico mostra un pattern (es. i residui crescono con $\hat{y}$, o hanno forma a imbuto): probabile eteroschedasticità.
- Se i residui sono dispersi casualmente attorno a una banda costante: indizio di omoschedasticità.

### Test di Breusch-Pagan (1979)

**Procedura:**
1. Stimare il modello originale $y = X\boldsymbol{\beta} + u$ con OLS, ottenendo residui $\hat{u}_i$.
2. Stimare la regressione ausiliaria: $\hat{u}_i^2 = \delta_0 + \delta_1 x_{1i} + \cdots + \delta_k x_{ki} + \eta_i$.
3. Calcolare la statistica LM:

$$LM = n \cdot R^2_{\text{aux}} \xrightarrow{d} \chi^2(k) \quad \text{sotto } H_0: \sigma_i^2 = \sigma^2 \text{ per ogni } i$$

dove $R^2_{\text{aux}}$ è il $R^2$ della regressione ausiliaria.

**$H_0$:** omoschedasticità (la varianza dell'errore non dipende dai regressori). Se $LM > \chi^2_{k,\alpha}$: rifiuto $H_0$.

**Limite:** il test BP ha potenza ridotta se la forma di eteroschedasticità non è lineare nei regressori originali.

### Test di White (1980)

Come il BP, ma la regressione ausiliaria include anche i **quadrati** e i **prodotti incrociati** dei regressori:

$$\hat{u}_i^2 = \delta_0 + \sum_j \delta_j x_{ji} + \sum_j \delta_{jj} x_{ji}^2 + \sum_{j<l} \delta_{jl} x_{ji}x_{li} + \eta_i$$

Il numero di regressori aggiuntivi è $k + k(k+1)/2$. La statistica $LM = nR^2_{\text{aux}} \sim \chi^2(p)$ dove $p$ è il numero di termini aggiuntivi inclusi.

**Vantaggio:** più potente del BP perché cattura forme non lineari di eteroschedasticità. **Svantaggio:** con molti regressori, il numero di termini quadratici/incrociati diventa molto grande, riducendo i gradi di libertà.

### Correzione: Standard Error Robusti (HC)

La soluzione più semplice e diffusa: non cambiare lo stimatore OLS ma correggere gli SE usando la stima della matrice sandwich:

$$\hat{V}_{\text{HC0}} = (X'X)^{-1}\left(\sum_{i=1}^n \hat{u}_i^2 \mathbf{x}_i\mathbf{x}_i'\right)(X'X)^{-1}$$

Varianti con correzione per campioni finiti:
- **HC1:** $\frac{n}{n-k-1} \hat{V}_{\text{HC0}}$ (correzione df)
- **HC2:** sostituisce $\hat{u}_i^2$ con $\hat{u}_i^2/(1-h_{ii})$ dove $h_{ii}$ è il leverage
- **HC3:** $\hat{u}_i^2/(1-h_{ii})^2$ — preferita in campioni piccoli, più conservativa

**Pratica moderna:** usare sempre HC3 in dati cross-section come procedura di default.

### Correzione: Weighted Least Squares (WLS)

Se la forma di eteroschedasticità è **nota**: $\text{Var}(u_i) = \sigma^2 h(\mathbf{x}_i)$ per qualche funzione nota $h$, allora il GLS coincide con WLS: pesare ogni osservazione per $w_i = 1/h(\mathbf{x}_i)$.

WLS minimizza:
$$\sum_{i=1}^n w_i (y_i - \mathbf{x}_i'\boldsymbol{\beta})^2 = \sum_{i=1}^n \frac{(y_i - \mathbf{x}_i'\boldsymbol{\beta})^2}{h(\mathbf{x}_i)}$$

Equivalente a moltiplicare il modello per $1/\sqrt{h(\mathbf{x}_i)}$ e stimare con OLS standard.

**WLS è BLUE** sotto la corretta specificazione di $h$. Se $h$ è specificata erroneamente, WLS può essere meno efficiente di OLS con SE robusti.

### Correzione: Feasible GLS (FGLS)

Quando $h(\mathbf{x}_i)$ non è nota, la si stima dai dati:
1. Stimare OLS, ottenere $\hat{u}_i$.
2. Stimare $\ln\hat{u}_i^2 = \mathbf{x}_i'\boldsymbol{\gamma} + v_i$ (regressione log-lineare dei residui quadratici sui regressori).
3. Usare $\hat{h}_i = e^{\mathbf{x}_i'\hat{\boldsymbol{\gamma}}}$ come pesi per WLS.

FGLS è asintoticamente equivalente a GLS (se il modello per $h$ è corretto) ma introduce incertezza nella stima di $h$.

## 4. Derivazioni — perché gli SE classici sono distorti

Sotto eteroschedasticità, $\text{Var}(\hat{\boldsymbol{\beta}} \mid X) = (X'X)^{-1}X'\Omega X(X'X)^{-1}$, non $\sigma^2(X'X)^{-1}$.

Gli SE classici stimano $\hat{\sigma}^2(X'X)^{-1}$ dove $\hat{\sigma}^2 = \text{RSS}/(n-k-1)$.

**Esempio di distorsione:** Supponiamo $k=1$, $\sigma_i^2 = \sigma^2 x_i^2$ (la varianza cresce col quadrato del regressore).

La vera varianza di $\hat{\beta}_1$ è proporzionale a $\sum \sigma_i^2 (x_i - \bar{x})^2 / (\sum(x_i-\bar{x})^2)^2 = \sigma^2 \sum x_i^2(x_i-\bar{x})^2/(\sum(x_i-\bar{x})^2)^2$, mentre la formula classica usa $\sigma^2/\sum(x_i-\bar{x})^2$. Questi due possono differire sostanzialmente.

## 5. Esempi

**Esempio 1 — Eteroschedasticità in un modello di consumo**

Modello: $\text{Consumo}_i = \beta_0 + \beta_1 \text{Reddito}_i + u_i$.

Dati ipotetica: per famiglie con reddito < 20k€, $\hat{\sigma}_i \approx 1000$€. Per famiglie con reddito > 80k€, $\hat{\sigma}_i \approx 15000$€. Il grafico dei $\hat{u}_i^2$ vs $\hat{y}_i$ mostra chiaramente un pattern a imbuto crescente.

Questo è eteroschedasticità classica: la variabilità del consumo cresce con il reddito, perché le famiglie ricche hanno maggiore discrezionalità nelle scelte di consumo.

**Esempio 2 — Test Breusch-Pagan**

Modello: $y = \beta_0 + \beta_1 x_1 + \beta_2 x_2 + u$, $n = 150$, $k = 2$.

Regressione ausiliaria $\hat{u}_i^2$ su $x_1, x_2$: $R^2 = 0.09$.

$LM = 150 \cdot 0.09 = 13.5$. Valore critico $\chi^2_{2,0.05} = 5.99$.

$13.5 > 5.99$: rifiuto $H_0$ di omoschedasticità al 5% (p-value $\approx 0.001$).

**Esempio 3 — Test di White**

Stesso modello, $k=2$ → termini aggiuntivi nel test White: $x_1^2, x_2^2, x_1 x_2$ (3 termini, totale 5 regressori + intercetta). $R^2_{\text{aux}} = 0.12$, $p = 5$ (5 regressori escl. intercetta in regressione ausiliaria).

$LM = 150 \cdot 0.12 = 18$. Valore critico $\chi^2_{5,0.05} = 11.07$.

$18 > 11.07$: rifiuto $H_0$. Il test White cattura eteroschedasticità non lineare che il BP potrebbe aver mancato.

**Esempio 4 — Confronto SE classici vs HC3**

| Variabile | $\hat{\beta}$ | SE classico | t classico | SE HC3 | t robusto |
| --- | --- | --- | --- | --- | --- |
| reddito | 0.45 | 0.08 | 5.63 | 0.15 | 3.00 |
| età | 0.02 | 0.01 | 2.00 | 0.008 | 2.50 |
| costante | 1.20 | 0.30 | 4.00 | 0.38 | 3.16 |

Variabile "reddito": SE classico sottostima l'incertezza (SE robusto quasi doppio). Variabile "età": SE classico sovrastima l'incertezza. Le conclusioni qualitative (tutti significativi) non cambiano, ma la magnitudine dell'incertezza è diversa.

**Esempio 5 — WLS quando σ²ᵢ è nota**

Modello: $\text{profitto}_i = \beta_0 + \beta_1 \text{fatturato}_i + u_i$ con $\text{Var}(u_i) = \sigma^2 \text{fatturato}_i$.

Pesi WLS: $w_i = 1/\text{fatturato}_i$. Moltiplicando il modello per $1/\sqrt{\text{fatturato}_i}$:

$$\frac{\text{profitto}_i}{\sqrt{\text{fatturato}_i}} = \beta_0 \frac{1}{\sqrt{\text{fatturato}_i}} + \beta_1 \sqrt{\text{fatturato}_i} + \frac{u_i}{\sqrt{\text{fatturato}_i}}$$

Il termine $u_i/\sqrt{\text{fatturato}_i}$ ha varianza $\sigma^2$ — omoschedastico. OLS applicato al modello trasformato è BLUE.

**Esempio 6 — FGLS in pratica**

1. OLS di $\text{consumo}$ su $\text{reddito}$: residui $\hat{u}_i$.
2. Regressione log: $\ln\hat{u}_i^2 = \gamma_0 + \gamma_1 \text{reddito}_i$. Stima: $\hat{\gamma}_0 = 2.1$, $\hat{\gamma}_1 = 0.003$.
3. Pesi stimati: $\hat{h}_i = e^{2.1 + 0.003 \cdot \text{reddito}_i}$.
4. WLS con pesi $w_i = 1/\hat{h}_i$.

Il FGLS è asintoticamente più efficiente di OLS con SE robusti, ma dipende dalla corretta specificazione di $h$.

**Esempio 7 — Eteroschedasticità e grandezza del campione**

Con $n = 30$: i test BP e White hanno poca potenza. Anche con forte eteroschedasticità, potremmo non rifiutare $H_0$ — **assenza di evidenza non è evidenza di assenza**.

Con $n = 5000$: anche eteroschedasticità modesta viene rilevata. Gli SE classici e robusti differiscono poco in proporzione, ma il test BP ha p-value minuscolo.

Lezione: con campioni grandi, usare sempre SE robusti come precauzione. Con campioni piccoli, la scelta tra SE classici e robusti può fare differenza.

## 6. Grafico

```plot
{"fn":"0.5*x+0.3","domain":[-3,3],"yDomain":[-3,4],"title":"Regressione OLS — eteroschedasticità aumenta la dispersione dei residui","label1":"Retta OLS","color":"steelblue"}
```

## 7. Interattivo

```slider
{"fn":"beta0+beta1*x","domain":[-5,5],"yDomain":[-10,10],"params":[{"name":"beta0","min":-5,"max":5,"step":0.5,"default":0},{"name":"beta1","min":-3,"max":3,"step":0.1,"default":1}],"title":"WLS: variando i pesi — effetto dei regressori"}
```

## 8. Errori comuni

**Errore 1 — Credere che l'eteroschedasticità distorca i coefficienti OLS.**
L'eteroschedasticità viola OLS.5, non OLS.4. La distorsione di OLS dipende da OLS.4 (esogeneità). Quindi $\hat{\boldsymbol{\beta}}_{\text{OLS}}$ è non distorto e consistente anche con eteroschedasticità — il problema è negli SE, non nei coefficienti.

**Errore 2 — Non fare il test di eteroschedasticità e usare SE classici per default.**
Nei dati cross-section economici, l'eteroschedasticità è la norma, non l'eccezione. La prassi moderna è usare sempre SE robusti (HC3) nei dati cross-section, indipendentemente dal risultato dei test. I test servono a capire la gravità del problema, non a decidere se usare SE robusti.

**Errore 3 — Usare il test BP come unico test.**
Il BP testa solo forme lineari di eteroschedasticità. Se $\text{Var}(u_i) = \sigma^2 x_i^2$ (quadratica), il BP potrebbe non rilevarlo mentre il test di White sì. In pratica: fare entrambi i test.

**Errore 4 — Applicare WLS con pesi sbagliati.**
WLS è ottimale solo se la struttura di $\sigma_i^2$ è specificata correttamente. Se si usa $w_i = 1/x_i$ quando in realtà $\text{Var}(u_i) = \sigma^2 x_i^2$ (quindi i pesi corretti sarebbero $1/x_i^2$), il WLS non è BLUE e può essere addirittura meno efficiente di OLS con SE robusti.

**Errore 5 — Ignorare l'eteroschedasticità nei modelli probit/logit.**
Nei modelli binari, l'eteroschedasticità distorce i coefficienti (non solo gli SE), perché la verosimiglianza dipende dalla struttura degli errori. Non è sufficiente usare SE robusti: bisogna specificare il modello correttamente.

**Errore 6 — Confondere eteroschedasticità con autocorrelazione.**
Eteroschedasticità: $\text{Var}(u_i) = \sigma_i^2 \neq \sigma^2$ (varianza non costante). Autocorrelazione: $\text{Cov}(u_i, u_j) \neq 0$ (errori correlati tra osservazioni diverse). Sono violazioni distinte di OLS.5, richiedono diagnosi e correzioni diverse.

**Errore 7 — Interpretare i test BP/White come definitivi.**
Un p-value non significativo nel test BP non prova l'omoschedasticità — il test potrebbe semplicemente mancare di potenza (campione piccolo, forma di eteroschedasticità non catturata). Usare sempre l'analisi grafica dei residui in parallelo ai test formali.

## 9. Applicazioni reali

**Dati di consumo familiare (SHIW, Banca d'Italia).** Nei dati dell'indagine sui bilanci delle famiglie italiane, la variabilità del consumo cresce chiaramente con il reddito. Usare SE classici in questi dati porta a sottostimare l'incertezza per le famiglie ad alto reddito. La prassi standard è usare HC3 o WLS con pesi proporzionali al reddito.

**Mercati finanziari e volatilità condizionale.** La varianza degli errori nei rendimenti azionari non è costante nel tempo (volatility clustering): periodi di alta volatilità si alternano a periodi di bassa volatilità. Questo richiede modelli specifici (ARCH/GARCH) piuttosto che semplici SE robusti — gli HAC standard error non catturano la struttura della volatilità condizionale.

**Dati di imprese cross-section.** In studi sulla produttività delle imprese, le grandi imprese tendono ad avere residui più variabili. Test di White tipicamente rifiutano l'omoschedasticità. La soluzione standard è usare SE robusti o WLS con pesi inversamente proporzionali alla dimensione dell'impresa.

**Modelli di rischio di credito.** In modelli che spiegano la probabilità di insolvenza o lo spread creditizio in funzione di leverage, dimensione, settore: l'eteroschedasticità è comune perché le imprese più rischiose hanno spread più variabili. Gli SE classici sottostimano l'incertezza per queste imprese.

## 10. Riepilogo

| Concetto | Formula / Procedura | Note |
| --- | --- | --- |
| Eteroschedasticità | $\text{Var}(u_i \mid \mathbf{x}_i) = \sigma_i^2 \neq \sigma^2$ | Viola OLS.5, non OLS.4 |
| Effetto su OLS | $\hat{\boldsymbol{\beta}}$ non distorto; SE classici distorti | OLS non è BLUE |
| Vera varianza OLS | $(X'X)^{-1}X'\Omega X(X'X)^{-1}$ | Formula sandwich |
| Test Breusch-Pagan | $LM = nR^2_{\text{aux}} \sim \chi^2(k)$ | Aux: $\hat{u}_i^2$ su $X$ |
| Test di White | $LM = nR^2_{\text{aux}} \sim \chi^2(p)$ | Aux: $\hat{u}_i^2$ su $X, X^2, XX'$ |
| SE robusti HC0 | $(X'X)^{-1}(\sum\hat{u}_i^2\mathbf{x}_i\mathbf{x}_i')(X'X)^{-1}$ | Preferire HC3 in pratica |
| WLS | Pesare per $w_i = 1/\sigma_i^2$ | BLUE se $\sigma_i^2$ nota |
| FGLS | Stimare $\sigma_i^2$ dai dati, poi WLS | Asintoticamente ottimale |

## 11. Esercizi

<details>
<summary>Esercizio 1: Conseguenze dell'eteroschedasticità</summary>

Un modello OLS di reddito su istruzione ed esperienza dà: $\hat{\beta}_{\text{istruzione}} = 0.08$, $t_{\text{classico}} = 4.2$, $p_{\text{classico}} = 0.0001$.

Con SE robusti HC3: $t_{\text{robusto}} = 1.5$, $p_{\text{robusto}} = 0.13$.

(a) Il coefficiente $\hat{\beta} = 0.08$ è corretto o distorto dall'eteroschedasticità?
(b) Quale test è valido?
(c) Quale conclusione si trae sulla significatività di $\beta_{\text{istruzione}}$?

**Soluzione:**

(a) $\hat{\beta} = 0.08$ è **non distorto**: l'eteroschedasticità viola OLS.5 ma non OLS.4. La stima puntuale è corretta, solo l'incertezza intorno ad essa è mal stimata dai SE classici.

(b) Il test con **SE robusti HC3** è valido asintoticamente anche con eteroschedasticità. Il test classico assume $\text{Var}(u_i) = \sigma^2$ — assunzione violata. Il t classico è quindi non valido e il suo p-value è fuorviante.

(c) Con SE robusti: $t = 1.5$, $p = 0.13 > 0.05$. Non si rifiuta $H_0: \beta_{\text{istruzione}} = 0$ al 5%. L'istruzione **non è statisticamente significativa** una volta corretti per l'eteroschedasticità. L'apparente significatività con SE classici era spuriamente gonfiata.

</details>

<details>
<summary>Esercizio 2: Test Breusch-Pagan</summary>

Modello: $\ln(\text{consumo}) = \beta_0 + \beta_1 \ln(\text{reddito}) + \beta_2 \text{età} + u$.

$n = 200$, $k = 2$. Dopo OLS, si regredisce $\hat{u}_i^2$ su $\ln(\text{reddito})_i$ e $\text{età}_i$: $R^2_{\text{aux}} = 0.11$.

(a) Calcolare la statistica LM.
(b) Qual è la distribuzione nulla?
(c) Rifiutare $H_0$ a $\alpha = 0.01$? (Valore critico $\chi^2_{2,0.01} = 9.21$.)

**Soluzione:**

(a) $LM = n \cdot R^2_{\text{aux}} = 200 \cdot 0.11 = 22$.

(b) Sotto $H_0$ (omoschedasticità) e per $n$ grande: $LM \sim \chi^2(k) = \chi^2(2)$.

(c) $22 > 9.21$: rifiuto $H_0$ all'1%. Forte evidenza di eteroschedasticità. La varianza dei residui dipende significativamente dal reddito e/o dall'età.

</details>

<details>
<summary>Esercizio 3: WLS con forma nota</summary>

Modello: $y_i = \beta_0 + \beta_1 x_i + u_i$ con $\text{Var}(u_i) = \sigma^2 x_i^2$ (la varianza cresce col quadrato di $x$).

(a) Quali pesi WLS usare?
(b) Scrivere il modello trasformato su cui applicare OLS standard.
(c) Come interpreteresti l'eventuale significatività di $\beta_1$ nel modello trasformato?

**Soluzione:**

(a) Pesi $w_i = 1/\sigma_i^2 = 1/(\sigma^2 x_i^2) \propto 1/x_i^2$. Divisore di normalizzazione: $\sqrt{w_i} = 1/\lvert x_i \rvert$.

(b) Moltiplicare il modello per $1/\lvert x_i \rvert$:

$$\frac{y_i}{\lvert x_i \rvert} = \beta_0 \cdot \frac{1}{\lvert x_i \rvert} + \beta_1 \cdot \text{sign}(x_i) + \frac{u_i}{\lvert x_i \rvert}$$

Il termine trasformato $u_i/\lvert x_i \rvert$ ha varianza $\sigma^2 x_i^2/x_i^2 = \sigma^2$ — omoschedastico. OLS su questo modello è BLUE.

(c) La significatività di $\beta_1$ nel modello trasformato ha la stessa interpretazione: $\beta_1$ misura l'effetto unitario di $x$ su $y$. WLS recupera efficienza rispetto a OLS, ma l'interpretazione economica del coefficiente non cambia.

</details>

<details>
<summary>Esercizio 4: Test di White</summary>

Modello: $y = \beta_0 + \beta_1 x_1 + \beta_2 x_2 + u$, $n = 100$.

Test di White: regressione ausiliaria di $\hat{u}^2$ su $x_1, x_2, x_1^2, x_2^2, x_1 x_2$: $R^2_{\text{aux}} = 0.18$.

(a) Quante restrizioni nel test White?
(b) Calcolare la statistica e il p-value approssimato.
(c) Confrontare con un BP che dà $LM_{\text{BP}} = 6$ (con $\chi^2_2$). Cosa si può concludere?

**Soluzione:**

(a) I termini aggiuntivi rispetto all'intercetta sono: $x_1, x_2$ (2) + $x_1^2, x_2^2$ (2) + $x_1 x_2$ (1) = 5 regressori. Quindi $p = 5$.

(b) $LM_{\text{White}} = 100 \cdot 0.18 = 18$. Distribuzione: $\chi^2(5)$, valore critico al 5%: $\chi^2_{5,0.05} = 11.07$. $18 > 11.07$: rifiuto $H_0$. P-value $< 0.005$.

(c) BP dà $LM = 6$, $\chi^2_{2,0.05} = 5.99$: borderline al 5% (appena significativo). White dà $LM = 18$: chiaramente significativo. Il confronto suggerisce che l'eteroschedasticità è di **forma non lineare** (quadratica o con interazioni): la parte quadratica/interazione catturata dal White ma non dal BP è quella più importante. Usare SE robusti è obbligatorio.

</details>

<details>
<summary>Esercizio 5: FGLS step-by-step</summary>

Dati: $n = 50$. OLS di $y$ su $x$: residui $\hat{u}_i$. Si vuole stimare un FGLS ipotizzando $\ln\sigma_i^2 = \gamma_0 + \gamma_1 x_i$.

(a) Descrivere i passi del FGLS.
(b) Se $\hat{\gamma}_0 = 1.0$ e $\hat{\gamma}_1 = 0.4$, qual è il peso WLS per $x_i = 3$?
(c) Quali vantaggi ha FGLS rispetto agli SE robusti?

**Soluzione:**

(a) Passi FGLS:
1. OLS di $y$ su $x$ → residui $\hat{u}_i$.
2. Regressione ausiliaria: $\ln\hat{u}_i^2 = \gamma_0 + \gamma_1 x_i$ via OLS → $\hat{\gamma}_0, \hat{\gamma}_1$.
3. Calcola $\hat{\sigma}_i^2 = e^{\hat{\gamma}_0 + \hat{\gamma}_1 x_i}$ per ogni $i$.
4. WLS con pesi $w_i = 1/\hat{\sigma}_i^2$.

(b) Per $x_i = 3$: $\hat{\sigma}_3^2 = e^{1.0 + 0.4 \cdot 3} = e^{2.2} \approx 9.03$. Peso: $w_3 = 1/9.03 \approx 0.111$.

(c) FGLS è **asintoticamente più efficiente** di OLS con SE robusti: sfrutta la struttura stimata di $\sigma_i^2$ per pesare le osservazioni, mentre SE robusti usano OLS (non pesato) e correggono solo l'inferenza. Svantaggio: FGLS dipende dalla corretta specificazione del modello per $\sigma_i^2$; se sbagliata, può essere meno efficiente di OLS+HC.

</details>

<details>
<summary>Esercizio 6: Analisi grafica dei residui</summary>

Hai stimato un modello OLS e prodotto 3 grafici dei residui:
- Grafico A: $\hat{u}_i^2$ vs $\hat{y}_i$ mostra una nuvola orizzontale senza pattern.
- Grafico B: $\hat{u}_i^2$ vs $x_1$ mostra una tendenza crescente (forma a imbuto).
- Grafico C: $\hat{u}_i^2$ vs $x_2$ mostra una forma a U (residui grandi sia per $x_2$ piccolo che grande).

(a) Quale grafico suggerisce omoschedasticità?
(b) Per i grafici B e C, quale test (BP o White) è più adatto?
(c) Come correggeresti in ciascun caso?

**Soluzione:**

(a) **Grafico A** è compatibile con omoschedasticità: nessun pattern sistematico nella dispersione dei residui.

(b) **Grafico B** (tendenza lineare crescente): il BP è adatto, testa se $\text{Var}(u_i)$ è funzione lineare dei regressori. **Grafico C** (forma a U, cioè quadratica): il BP mancherebbe questo pattern non lineare; il **Test di White** è più adatto perché include i termini quadratici $x_2^2$.

(c) Correzione per B: WLS con pesi $w_i \propto 1/x_{1i}$ (se si stima che $\sigma_i^2 \propto x_{1i}$), oppure SE robusti HC3. Correzione per C: la forma a U suggerisce $\sigma_i^2 = \sigma^2(a + bx_{2i}^2)$; si può applicare FGLS stimando questo modello per $\sigma_i^2$, oppure — più semplicemente — usare SE robusti HC3.

</details>

<details>
<summary>Esercizio 7: Confronto tra OLS, WLS e SE robusti</summary>

Tre economisti stimano lo stesso modello $y = \beta_0 + \beta_1 x + u$ (con eteroschedasticità nota $\sigma_i^2 = x_i$):

- Economista A: OLS con SE classici → $\hat{\beta}_1 = 2.1$, SE $= 0.20$, $t = 10.5$.
- Economista B: OLS con SE robusti HC3 → $\hat{\beta}_1 = 2.1$, SE $= 0.31$, $t = 6.8$.
- Economista C: WLS con pesi $w_i = 1/x_i$ → $\tilde{\beta}_1 = 2.0$, SE $= 0.18$, $t = 11.1$.

(a) Chi ha i coefficienti corretti?
(b) Chi ha l'inferenza valida?
(c) Chi è più efficiente?

**Soluzione:**

(a) I **coefficienti di A e B sono identici** ($\hat{\beta}_1 = 2.1$) — entrambi usano OLS. Il WLS di C dà $\tilde{\beta}_1 = 2.0$, che differisce leggermente (WLS pesa diversamente le osservazioni). Tutti e tre i coefficienti sono **non distorti** (OLS.4 è soddisfatta per tutti).

(b) A ha **SE classici invalidi** (assumono omoschedasticità, violata). B ha **SE robusti validi** asintoticamente. C ha **SE basati sulla corretta struttura di $\sigma_i^2$** — validi ed efficienti.

(c) C (WLS) è il **più efficiente**: con la struttura corretta di $\sigma_i^2$, WLS è BLUE e ha SE minimi. Il SE di C (0.18) è minore di quello di B (0.31). A ha un SE più piccolo (0.20) di B, ma è **distorto verso il basso** (sottostima l'incertezza) — non è comparabile. Tra stimatori validi, WLS (C) batte OLS+HC (B).

</details>
