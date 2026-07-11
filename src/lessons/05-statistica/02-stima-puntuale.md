---
id: statistica-02-stima-puntuale
subject: statistica
topic_it: Fondamenti di inferenza
topic_en: Foundations of inference
title_it: Stima puntuale — proprietà degli stimatori
title_en: Point estimation — properties of estimators
level: purple
order: 2
source_book: "L. Wasserman, All of Statistics; Casella & Berger, Statistical Inference"
source_chapter: "Cap. 6–7 — Stima puntuale"
stato: da-rielaborare
---

## 1. Intuizione — cosa significa stimare bene?

Supponiamo di voler misurare il peso medio di una popolazione usando un campione. Abbiamo tante scelte: usare la media campionaria $\bar{X}$, la mediana campionaria, la media dei valori estremi $(X_{(1)}+X_{(n)})/2$... Quale preferire? Come si giudica la "qualità" di uno stimatore?

Pensa a un bersaglio da tiro a segno. Un buon arciere colpisce il centro in media — non sistematicamente alto o basso (niente **distorsione**). Ma vuoi anche che i colpi siano raggruppati — poca dispersione (**bassa varianza**). Stimare un parametro è esattamente così: vuoi uno stimatore che in media centra il vero valore, con la minima variabilità possibile.

Un terzo requisito è la **consistenza**: con abbastanza dati, lo stimatore deve convergere al valore vero. È il minimo che ci si aspetta — uno stimatore che non migliora all'aumentare dei dati è inutile.

C'è però un trade-off: a volte uno stimatore leggermente distorto ha varianza molto più bassa, risultando più accurato in media (MSE minore). Questo "bias-variance trade-off" è centrale nel machine learning e nella statistica.

Infine, il limite di **Cramér-Rao** fissa il minimo di varianza raggiungibile da qualunque stimatore non distorto — è come il record del mondo: puoi avvicinarti, non puoi batterlo.

## 2. Prerequisiti

- Valore atteso, varianza e loro proprietà
- Distribuzione campionaria: concetto di statistica $T(X_1, \ldots, X_n)$
- Media campionaria $\bar{X}$ e sue proprietà ($E[\bar{X}]=\mu$, $\text{Var}(\bar{X})=\sigma^2/n$)
- Legge dei grandi numeri e convergenza in probabilità
- Log-verosimiglianza e derivazione (utile per informazione di Fisher)

## 3. Teoria

### Stimatore

Dato un campione $X_1, \ldots, X_n$ i.i.d. con distribuzione $f(x;\theta)$, uno **stimatore** di $\theta$ è qualsiasi statistica $\hat{\theta} = T(X_1, \ldots, X_n)$. Il valore assunto su un campione specifico $x_1, \ldots, x_n$ si chiama **stima** (minuscolo).

### Errore quadratico medio (MSE)

L'MSE è la misura complessiva di accuratezza più importante:

$$\text{MSE}(\hat{\theta}) = E[(\hat{\theta} - \theta)^2]$$

Si scompone in due componenti attraverso la seguente identità:

$$\text{MSE}(\hat{\theta}) = \text{Bias}(\hat{\theta})^2 + \text{Var}(\hat{\theta})$$

dove $\text{Bias}(\hat{\theta}) = E[\hat{\theta}] - \theta$ è la distorsione sistematica.

Questa scomposizione mostra che l'MSE dipende sia da quanto lo stimatore sbaglia in media (bias) sia da quanto varia da campione a campione (varianza).

### Non distorsione (unbiasedness)

$\hat{\theta}$ è **non distorto** (unbiased) se $E[\hat{\theta}] = \theta$ per ogni $\theta$ nel dominio dei parametri.

Esempi:
- $\bar{X}_n$ è non distorto per $\mu = E[X]$
- $S^2 = \frac{1}{n-1}\sum(X_i-\bar{X})^2$ è non distorto per $\sigma^2$
- L'MLE di $\sigma^2$ normale, $\hat{\sigma}^2 = \frac{1}{n}\sum(X_i-\bar{X})^2$, è **distorto** (bias $= -\sigma^2/n$)

La non distorsione è desiderabile ma non sufficiente: uno stimatore non distorto può avere varianza enorme, rendendolo inutile.

### Consistenza

$\hat{\theta}_n$ è **consistente** (debolmente) per $\theta$ se:

$$\hat{\theta}_n \xrightarrow{P} \theta \quad \text{per } n \to \infty$$

cioè per ogni $\varepsilon > 0$: $\lim_{n\to\infty} P(\lvert\hat{\theta}_n - \theta\rvert > \varepsilon) = 0$.

**Consistenza forte:** $\hat{\theta}_n \xrightarrow{q.c.} \theta$, ovvero $P(\lim_{n\to\infty}\hat{\theta}_n = \theta) = 1$. È una condizione più forte: la convergenza avviene quasi sicuramente su ogni realizzazione del campione.

**Condizione sufficiente per consistenza:** se $\text{Bias}(\hat{\theta}_n) \to 0$ e $\text{Var}(\hat{\theta}_n) \to 0$ per $n \to \infty$, allora $\hat{\theta}_n$ è consistente (segue dalla disuguaglianza di Chebyshev applicata a $\text{MSE} \to 0$).

### Efficienza e limite di Cramér-Rao

Tra tutti gli stimatori non distorti, quale ha varianza minima? Il **limite di Cramér-Rao** (CR) fissa un lower bound:

$$\text{Var}(\hat{\theta}) \geq \frac{1}{I_n(\theta)}$$

dove $I_n(\theta)$ è l'**informazione di Fisher** del campione di taglia $n$:

$$I_n(\theta) = n \cdot I_1(\theta), \quad I_1(\theta) = E\!\left[\left(\frac{\partial \ln f(X;\theta)}{\partial \theta}\right)^2\right]$$

La quantità $\frac{\partial \ln f(X;\theta)}{\partial \theta}$ si chiama **score** — la sua varianza è l'informazione di Fisher per una singola osservazione.

**Forma alternativa:** sotto condizioni di regolarità, $I_1(\theta) = -E\!\left[\dfrac{\partial^2 \ln f(X;\theta)}{\partial\theta^2}\right]$.

Uno stimatore non distorto che raggiunge il limite CR, cioè con $\text{Var}(\hat{\theta}) = 1/I_n(\theta)$, è detto **efficiente** (o UMVUE: Uniformly Minimum Variance Unbiased Estimator).

### UMVUE e teorema di Rao-Blackwell

Un **UMVUE** è lo stimatore non distorto a varianza minima uniformemente in $\theta$. Il teorema di **Rao-Blackwell** dice come costruirlo: se $\hat{\theta}$ è non distorto e $T$ è una statistica sufficiente, allora $\tilde{\theta} = E[\hat{\theta} \mid T]$ è non distorto con varianza $\leq$ quella di $\hat{\theta}$.

Una **statistica sufficiente** $T$ è una statistica che cattura tutta l'informazione sul parametro $\theta$ contenuta nel campione: la distribuzione condizionale del campione dato $T$ non dipende da $\theta$. Il **criterio di fattorizzazione** (Fisher-Neyman): $T$ è sufficiente se e solo se $L(\theta \mid \mathbf{x}) = g(T(\mathbf{x}), \theta) \cdot h(\mathbf{x})$.

### Trade-off bias-varianza

Per ridurre l'MSE non serve sempre eliminare il bias: a volte conviene introdurre un piccolo bias per ridurre molto la varianza.

Esempio: per stimare $\mu$ con campioni piccoli da distribuzioni con outlier, la **mediana campionaria** è distorta (per distribuzioni non simmetriche) ma ha varianza minore della media in presenza di heavy tails.

In regressione, la **ridge regression** introduce bias intenzionale riducendo la norma dei coefficienti, ottenendo MSE di previsione minore dell'OLS.

## 4. Derivazioni

### Scomposizione bias-varianza dell'MSE

$$\text{MSE}(\hat{\theta}) = E[(\hat{\theta}-\theta)^2] = E[(\hat{\theta} - E[\hat{\theta}] + E[\hat{\theta}] - \theta)^2]$$

Poniamo $b = E[\hat{\theta}] - \theta$ (bias) e $\varepsilon = \hat{\theta} - E[\hat{\theta}]$ (fluttuazione centrata):

$$= E[(\varepsilon + b)^2] = E[\varepsilon^2] + 2b\,E[\varepsilon] + b^2 = \text{Var}(\hat{\theta}) + 0 + \text{Bias}^2$$

Il termine misto è zero perché $E[\varepsilon] = E[\hat{\theta}] - E[\hat{\theta}] = 0$.

### Derivazione del limite di Cramér-Rao

Per uno stimatore non distorto $\hat{\theta}$, vale $E[\hat{\theta}] = \theta$. Derivando sotto il segno di integrale:

$$1 = \frac{\partial}{\partial\theta} \int \hat{\theta}(\mathbf{x}) f(\mathbf{x};\theta)\,d\mathbf{x} = \int \hat{\theta}(\mathbf{x}) \frac{\partial \ln f(\mathbf{x};\theta)}{\partial\theta} f(\mathbf{x};\theta)\,d\mathbf{x} = \text{Cov}(\hat{\theta},\, s(\mathbf{x};\theta))$$

dove $s(\mathbf{x};\theta) = \frac{\partial \ln f(\mathbf{x};\theta)}{\partial\theta}$ è lo score, con $E[s] = 0$. Per la disuguaglianza di Cauchy-Schwarz:

$$1 = \text{Cov}(\hat{\theta}, s)^2 \leq \text{Var}(\hat{\theta}) \cdot \text{Var}(s) = \text{Var}(\hat{\theta}) \cdot I_n(\theta)$$

Quindi $\text{Var}(\hat{\theta}) \geq 1/I_n(\theta)$. $\square$

## 5. Esempi

**Esempio 1 — MSE della media campionaria**

$\hat{\theta} = \bar{X}_n$ per $\mu$. Bias: $E[\bar{X}] - \mu = 0$. Varianza: $\sigma^2/n$.

$\text{MSE}(\bar{X}_n) = 0 + \sigma^2/n = \sigma^2/n$.

**Esempio 2 — Stimatore costante (illustra il bias)**

Consideriamo $\hat{\theta} = c$ (costante, non usa i dati). Bias $= c - \theta$, Varianza $= 0$.

$\text{MSE} = (c-\theta)^2$ — ottimo solo se $c = \theta$, ma non conosco $\theta$! Questo dimostra che varianza zero non è tutto.

**Esempio 3 — Informazione di Fisher per la Poisson**

$X \sim \text{Pois}(\lambda)$: $\ln f(x;\lambda) = x\ln\lambda - \lambda - \ln(x!)$

Score: $\frac{\partial \ln f}{\partial\lambda} = x/\lambda - 1$

$I_1(\lambda) = E\!\left[(X/\lambda - 1)^2\right] = \text{Var}(X/\lambda) = \text{Var}(X)/\lambda^2 = \lambda/\lambda^2 = 1/\lambda$

Per campione i.i.d. di taglia $n$: $I_n(\lambda) = n/\lambda$.

Limite CR: $\text{Var}(\hat{\lambda}) \geq \lambda/n$. Siccome $E[\bar{X}] = \lambda$ e $\text{Var}(\bar{X}) = \lambda/n$, la media campionaria **raggiunge** il limite CR — è efficiente!

**Esempio 4 — Informazione di Fisher per la normale ($\mu$ ignoto, $\sigma^2$ noto)**

$\ln f(x;\mu) = -\frac{1}{2}\ln(2\pi\sigma^2) - \frac{(x-\mu)^2}{2\sigma^2}$

Score: $\frac{\partial\ln f}{\partial\mu} = (x-\mu)/\sigma^2$

$I_1(\mu) = E\!\left[((X-\mu)/\sigma^2)^2\right] = \text{Var}(X)/\sigma^4 = 1/\sigma^2$

Limite CR: $\text{Var}(\hat{\mu}) \geq \sigma^2/n$. Anche qui, $\bar{X}$ raggiunge il limite — è efficiente.

**Esempio 5 — Trade-off bias-varianza**

Due stimatori di $\theta$:
- $\hat{\theta}_A$: bias $= 0$, varianza $= 10$, $\text{MSE} = 10$
- $\hat{\theta}_B$: bias $= 1$, varianza $= 5$, $\text{MSE} = 1 + 5 = 6$

Nonostante la distorsione, $\hat{\theta}_B$ è più accurato in termini di MSE.

**Esempio 6 — Consistenza di $\bar{X}$**

Per la LGN, $\bar{X}_n \xrightarrow{P} \mu$. Alternativa: $\text{MSE}(\bar{X}_n) = \sigma^2/n \to 0$, quindi $\bar{X}_n$ è consistente (per la disuguaglianza di Chebyshev, convergenza in probabilità segue da MSE $\to 0$).

**Esempio 7 — Statistica sufficiente per la normale**

Per $X_i \sim \mathcal{N}(\mu, 1)$, la verosimiglianza si fattorizza come:

$$L(\mu;\mathbf{x}) = \exp\!\left(-\frac{n}{2}(\bar{x}-\mu)^2\right) \cdot \exp\!\left(-\frac{1}{2}\sum x_i^2\right)$$

Il primo fattore dipende dai dati solo attraverso $\bar{x}$, il secondo non dipende da $\mu$. Quindi $T = \bar{X}$ è sufficiente per $\mu$. Per Rao-Blackwell, qualsiasi stima può essere migliorata condizionando su $\bar{X}$.

## 6. Grafico

```plot
{"fn":"Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)","domain":[-4,4],"yDomain":[0,0.5],"title":"Distribuzione di uno stimatore non distorto efficiente (N(0,1) standardizzata)","label1":"distribuzione stimatore"}
```

## 7. Interattivo

```slider
{"fn":"Math.exp(-x*x*n/2)*Math.sqrt(n)/Math.sqrt(2*Math.PI)","domain":[-4,4],"yDomain":[0,3],"params":[{"name":"n","min":1,"max":50,"step":1,"default":1}],"title":"Concentrazione della distribuzione di √n·(θ̂-θ) al crescere di n — consistenza"}
```

## 8. Errori comuni

**Errore 1 — Credere che non distorto sia sempre meglio.** Un estimatore non distorto con varianza enorme può essere molto peggiore (in termini di MSE) di uno distorto ma con bassa varianza. La non distorsione è una proprietà desiderabile, non un requisito assoluto.

**Errore 2 — Confondere bias e varianza.** Il bias è l'errore sistematico ($E[\hat{\theta}] - \theta$); la varianza è la dispersione delle stime da campione a campione. Sono ortogonali nella scomposizione dell'MSE. Un bias grande non implica varianza grande, e viceversa.

**Errore 3 — Pensare che il limite di CR valga sempre.** Il limite CR richiede condizioni di regolarità (la derivata rispetto a $\theta$ deve poter passare sotto il segno di integrale). Per distribuzioni come la Uniforme($0,\theta$), il CR non si applica: il supporto dipende da $\theta$.

**Errore 4 — Confondere consistenza forte e debole.** La convergenza quasi certa ($\xrightarrow{q.c.}$) è più forte della convergenza in probabilità ($\xrightarrow{P}$). Ogni sequenza q.c. convergente converge anche in probabilità, ma non viceversa. La LGN forte afferma q.c., la legge debole afferma solo in probabilità.

**Errore 5 — Pensare che l'UMVUE esista sempre.** Non tutti i problemi di stima hanno un UMVUE. Esistenza e unicità richiedono strutture particolari (famiglia esponenziale, statistica sufficiente completa). In molti casi pratici si usano stimatori sub-ottimali come l'MLE.

**Errore 6 — Usare $S = \sqrt{S^2}$ come stimatore non distorto di $\sigma$.** Anche se $S^2$ è non distorto per $\sigma^2$, per la concavità di $\sqrt{\cdot}$ si ha $E[S] < \sqrt{E[S^2]} = \sigma$ — $S$ è distorto per $\sigma$! La correzione esatta dipende dalla distribuzione.

**Errore 7 — Interpretare $1/I_n(\theta)$ come varianza garantita.** Il CR è un lower bound sulla varianza degli stimatori non distorti, non un valore garantito. Molti stimatori non raggiungono questo limite (sono "inefficienti"), pochi lo raggiungono esattamente.

## 9. Applicazioni reali

**Diagnostica medica.** La sensibilità e specificità di un test diagnostico vengono stimate da campioni di pazienti. L'intervallo di confidenza sulla sensibilità sfrutta le proprietà dello stimatore (non distorsione, SE) per comunicare l'incertezza della stima.

**Fisica delle particelle.** Stimare la massa di un bosone da migliaia di collisioni richiede stimatori efficienti: ogni miglioramento nella varianza equivale a risparmiare enormi quantità di tempo macchina al CERN.

**Finanza quantitativa.** Stimare la volatilità $\sigma$ di un asset da rendimenti giornalieri usa la deviazione standard campionaria. La scelta del divisore ($n$ vs $n-1$) ha impatto su stime di rischio come il VaR.

**Machine learning.** Il ridge regressor introduce bias per ridurre la varianza dei coefficienti di regressione, migliorando la previsione su dati nuovi rispetto all'OLS non distorto — applicazione pratica del trade-off bias-varianza.

## 10. Riepilogo

| Concetto | Formula | Note |
| --- | --- | --- |
| MSE | $\text{MSE}(\hat{\theta}) = \text{Bias}^2 + \text{Var}(\hat{\theta})$ | Misura totale di accuratezza |
| Bias | $\text{Bias}(\hat{\theta}) = E[\hat{\theta}] - \theta$ | Zero per stimatori non distorti |
| Non distorsione | $E[\hat{\theta}] = \theta$ | Desiderabile, non sempre sufficiente |
| Consistenza debole | $\hat{\theta}_n \xrightarrow{P} \theta$ | Condizione minima di qualità |
| Consistenza forte | $\hat{\theta}_n \xrightarrow{q.c.} \theta$ | Più forte; garantita da LGN forte |
| Informazione di Fisher | $I(\theta) = E[(\partial\ln f/\partial\theta)^2]$ | Per una singola osservazione |
| Limite di Cramér-Rao | $\text{Var}(\hat{\theta}) \geq 1/(n\,I(\theta))$ | Lower bound per stimatori non distorti |
| UMVUE | Stimatore non distorto a varianza minima | Costruito via Rao-Blackwell |
| Sufficienza | $L(\theta;\mathbf{x}) = g(T,\theta)\cdot h(\mathbf{x})$ | Criterio di fattorizzazione |

## 11. Esercizi

<details>
<summary>Esercizio 1: Calcolo di MSE per la media campionaria</summary>

$X_i \overset{\text{iid}}{\sim} f$ con $E[X]=5$ e $\text{Var}(X)=16$. Calcolare $\text{MSE}(\bar{X}_{16})$.

**Soluzione.**

$\text{Bias}(\bar{X}) = E[\bar{X}] - 5 = 5 - 5 = 0$.

$\text{Var}(\bar{X}_{16}) = 16/16 = 1$.

$\text{MSE} = 0 + 1 = 1$.

</details>

<details>
<summary>Esercizio 2: Informazione di Fisher per la Bernoulli</summary>

$X \sim \text{Bern}(p)$. Calcolare $I_1(p)$ e il limite CR per $n$ osservazioni.

**Soluzione.**

$\ln f(x;p) = x\ln p + (1-x)\ln(1-p)$.

Score: $\frac{\partial\ln f}{\partial p} = x/p - (1-x)/(1-p)$.

$I_1(p) = E\!\left[\left(\frac{X}{p} - \frac{1-X}{1-p}\right)^2\right]$.

Usiamo la formula alternativa: $\frac{\partial^2\ln f}{\partial p^2} = -x/p^2 - (1-x)/(1-p)^2$.

$I_1(p) = -E\!\left[\frac{\partial^2\ln f}{\partial p^2}\right] = E[X]/p^2 + E[1-X]/(1-p)^2 = 1/p + 1/(1-p) = \frac{1}{p(1-p)}$.

Limite CR: $\text{Var}(\hat{p}) \geq p(1-p)/n$.

La proporzione campionaria $\hat{p} = \bar{X}$ raggiunge esattamente questo limite: $\text{Var}(\hat{p}) = p(1-p)/n$. Quindi è efficiente.

</details>

<details>
<summary>Esercizio 3: Confronto MSE tra due stimatori</summary>

Si vogliono stimare $\theta$ con due stimatori: $\hat{\theta}_A$ (bias=0, varianza=9) e $\hat{\theta}_B$ (bias=2, varianza=2). Quale preferiresti?

**Soluzione.**

$\text{MSE}(\hat{\theta}_A) = 0^2 + 9 = 9$.

$\text{MSE}(\hat{\theta}_B) = 2^2 + 2 = 6$.

$\hat{\theta}_B$ ha MSE minore nonostante la distorsione: preferibile se il criterio è l'MSE. Se invece vogliamo garantire correttezza sistematica (es. stime ufficiali), $\hat{\theta}_A$ potrebbe essere preferito per trasparenza.

</details>

<details>
<summary>Esercizio 4: Consistenza di $S^2$</summary>

Dimostrare che $S^2 = \frac{1}{n-1}\sum(X_i-\bar{X})^2$ è consistente per $\sigma^2$.

**Soluzione.**

Abbiamo $E[S^2] = \sigma^2$ (non distorto) e $\text{Var}(S^2) \to 0$ per $n\to\infty$ (si può dimostrare che $\text{Var}(S^2) = \frac{1}{n}[\mu_4 - \frac{n-3}{n-1}\sigma^4]$ dove $\mu_4$ è il 4° momento centrato, che va a 0 con $n$).

Poiché $\text{MSE}(S^2) = 0 + \text{Var}(S^2) \to 0$, per la disuguaglianza di Chebyshev $S^2 \xrightarrow{P} \sigma^2$.

</details>

<details>
<summary>Esercizio 5: Statistica sufficiente per la Bernoulli</summary>

$X_1, \ldots, X_n \overset{\text{iid}}{\sim} \text{Bern}(p)$. Trovare una statistica sufficiente per $p$.

**Soluzione.**

La verosimiglianza è:

$L(p;\mathbf{x}) = \prod_{i=1}^n p^{x_i}(1-p)^{1-x_i} = p^{\sum x_i}(1-p)^{n-\sum x_i}$

Fattorizzazione: $g(T,p) = p^T(1-p)^{n-T}$ con $T = \sum x_i$, $h(\mathbf{x}) = 1$.

Per il criterio di Fisher-Neyman, $T = \sum_{i=1}^n X_i$ (o equivalentemente $\bar{X}$) è sufficiente per $p$.

</details>

<details>
<summary>Esercizio 6: Informazione di Fisher per la distribuzione esponenziale</summary>

$X \sim \text{Exp}(\lambda)$, $f(x;\lambda) = \lambda e^{-\lambda x}$. Trovare $I_1(\lambda)$ e verificare che $\bar{X}$ è efficiente per $1/\lambda$.

**Soluzione.**

$\ln f(x;\lambda) = \ln\lambda - \lambda x$.

$\frac{\partial\ln f}{\partial\lambda} = 1/\lambda - x$.

$I_1(\lambda) = E[(1/\lambda - X)^2] = \text{Var}(X) = 1/\lambda^2$.

Stimatore di $1/\lambda$: $\hat{\mu} = \bar{X}$, non distorto ($E[\bar{X}] = 1/\lambda$), con $\text{Var}(\bar{X}) = 1/(n\lambda^2)$.

Limite CR per $g(\lambda) = 1/\lambda$: usando la formula per funzioni, $[g'(\lambda)]^2/I_n(\lambda) = (1/\lambda^2)^2/(n/\lambda^2) = 1/(n\lambda^2)$.

$\bar{X}$ raggiunge esattamente il limite: è efficiente per $1/\lambda$.

</details>

<details>
<summary>Esercizio 7: Costruzione dello stimatore Rao-Blackwell</summary>

$X_1, X_2 \overset{\text{iid}}{\sim} \text{Bern}(p)$. Lo stimatore naïve $\hat{p} = X_1$ (usa solo il primo dato) è non distorto. Migliorarlo via Rao-Blackwell usando $T = X_1 + X_2$.

**Soluzione.**

$T = X_1 + X_2 \in \{0,1,2\}$. Calcoliamo $\tilde{p} = E[X_1 \mid T]$.

$E[X_1 \mid T=0] = P(X_1=1 \mid X_1+X_2=0) = 0$.

$E[X_1 \mid T=1] = P(X_1=1 \mid X_1+X_2=1) = \frac{p(1-p)}{2p(1-p)} = 1/2$.

$E[X_1 \mid T=2] = P(X_1=1 \mid X_1+X_2=2) = 1$.

Quindi $\tilde{p} = T/2 = (X_1+X_2)/2 = \bar{X}_2$, che ha varianza $p(1-p)/2 < p(1-p)$ (varianza di $X_1$). Rao-Blackwell ha recuperato la stima ottimale.

</details>
