---
id: statistica-03-mle-momenti
subject: statistica
topic_it: Fondamenti di inferenza
topic_en: Foundations of inference
title_it: Massima verosimiglianza e metodo dei momenti
title_en: Maximum likelihood and method of moments
level: purple
order: 3
source_book: "L. Wasserman, All of Statistics; Casella & Berger, Statistical Inference"
source_chapter: "Cap. 9 — MLE"
---

## 1. Intuizione — quale parametro rende i dati più plausibili?

Immagina di aver osservato 8 teste su 10 lanci di una moneta. Qual è il valore di $p$ (probabilità di testa) che rende questi dati il più plausibile possibile? Intuitivamente, $p = 0.8$: è il valore che massimizza la probabilità di ottenere esattamente quello che abbiamo visto.

Questo è il principio della **massima verosimiglianza** (Maximum Likelihood Estimation, MLE): scegliere il parametro che massimizza la probabilità (o densità) di osservare i dati che abbiamo effettivamente osservato.

L'idea è elegante e potente: non stiamo dicendo che $\theta = 0.8$ è necessariamente il vero valore, ma che è il valore più "compatibile" con le osservazioni. La **funzione di verosimiglianza** $L(\theta)$ misura questa compatibilità per ogni $\theta$: è la probabilità dei dati osservati vista come funzione del parametro, non dei dati.

Il **metodo dei momenti** è un approccio più diretto e meno elegante: eguaglia i momenti teorici (funzioni di $\theta$) ai momenti campionari (calcolati dai dati), poi risolve per $\theta$. È spesso più semplice da calcolare, ma generalmente meno efficiente dell'MLE.

La scelta tra i due dipende dal contesto: l'MLE è asintoticamente ottimale (raggiunge il limite CR), ma il metodo dei momenti può essere più robusto e computazionalmente trattabile per modelli complessi.

## 2. Prerequisiti

- Funzione di densità/PMF $f(x;\theta)$ e sue proprietà
- Derivazione e ricerca di massimi: condizioni del primo e secondo ordine
- Logaritmo naturale e sue proprietà (log trasforma prodotti in somme)
- Informazione di Fisher (dalla lezione sulla stima puntuale)
- Valore atteso e momenti: $E[X^k]$ per $k = 1, 2, \ldots$
- Teorema centrale del limite (per le proprietà asintotiche dell'MLE)

## 3. Teoria

### Funzione di verosimiglianza

Dati $x_1, \ldots, x_n$ osservati, la **funzione di verosimiglianza** è:

$$L(\theta) = L(\theta; x_1, \ldots, x_n) = \prod_{i=1}^n f(x_i; \theta)$$

Per dati i.i.d., la probabilità congiunta si fattorizza nel prodotto delle probabilità marginali. $L(\theta)$ non è una funzione di probabilità in $\theta$ — non integra a 1 in $\theta$ — è semplicemente la densità congiunta vista come funzione del parametro.

**Log-verosimiglianza:** lavorare con il logaritmo è matematicamente equivalente (il log è monotono crescente) e computazionalmente preferibile perché trasforma i prodotti in somme:

$$\ell(\theta) = \ln L(\theta) = \sum_{i=1}^n \ln f(x_i; \theta)$$

Massimizzare $L(\theta)$ è equivalente a massimizzare $\ell(\theta)$.

### Stimatore di massima verosimiglianza (MLE)

$$\hat{\theta}_{\text{MLE}} = \arg\max_\theta L(\theta) = \arg\max_\theta \ell(\theta)$$

**Procedura generale:**
1. Scrivere $\ell(\theta) = \sum_{i=1}^n \ln f(x_i;\theta)$
2. Derivare rispetto a $\theta$ e porre uguale a zero: $\frac{\partial\ell}{\partial\theta} = 0$ (**equazione di verosimiglianza** o **equazione di score**)
3. Verificare che sia un massimo (non un minimo): $\frac{\partial^2\ell}{\partial\theta^2} < 0$ nel punto trovato
4. Verificare i punti di frontiera del dominio di $\theta$ se rilevanti

Per $k$ parametri: sistema di $k$ equazioni $\frac{\partial\ell}{\partial\theta_j} = 0$ per $j = 1, \ldots, k$.

### Proprietà dell'MLE

L'MLE ha proprietà ottimali asintotiche (per $n$ grande):

**Consistenza:** $\hat{\theta}_{\text{MLE}} \xrightarrow{P} \theta_0$ (il vero valore) sotto condizioni di regolarità.

**Normalità asintotica:** per $n$ grande:

$$\sqrt{n}(\hat{\theta}_{\text{MLE}} - \theta_0) \xrightarrow{d} \mathcal{N}(0, 1/I_1(\theta_0))$$

Equivalentemente: $\hat{\theta}_{\text{MLE}} \approx \mathcal{N}(\theta_0, 1/(n I_1(\theta_0)))$ per $n$ grande.

**Efficienza asintotica:** la varianza asintotica $1/(nI_1(\theta_0))$ raggiunge il limite di Cramér-Rao — l'MLE è asintoticamente efficiente tra tutti gli stimatori consistenti.

**Invarianza:** se $g$ è una funzione biunivoca (o anche solo continua in senso ampio), allora:

$$\widehat{g(\theta)}_{\text{MLE}} = g(\hat{\theta}_{\text{MLE}})$$

Questo è potentissimo: per stimare $\sigma = \sqrt{\sigma^2}$ con MLE, basta prendere la radice dell'MLE di $\sigma^2$.

### Score e informazione di Fisher osservata

Lo **score** è la derivata della log-verosimiglianza:

$$s(\theta; \mathbf{x}) = \frac{\partial \ell(\theta)}{\partial\theta} = \sum_{i=1}^n \frac{\partial \ln f(x_i;\theta)}{\partial\theta}$$

L'**informazione di Fisher osservata** (calcolata dal campione, non dal valore atteso) è:

$$\mathcal{I}(\hat{\theta}) = -\frac{\partial^2 \ell(\theta)}{\partial\theta^2}\bigg|_{\theta=\hat{\theta}}$$

Si usa per stimare la varianza asintotica dell'MLE: $\widehat{\text{Var}}(\hat{\theta}) \approx 1/\mathcal{I}(\hat{\theta})$.

### Metodo dei momenti (MOM)

Il **momento teorico di ordine $k$** è $\mu_k(\theta) = E[X^k]$ — dipende da $\theta$.

Il **momento campionario di ordine $k$** è $\hat{\mu}_k = \frac{1}{n}\sum_{i=1}^n X_i^k$ — calcolato dai dati.

Per stimare $k$ parametri, si uguagliano i momenti teorici ai campionari per $j = 1, \ldots, k$:

$$\mu_j(\theta_1, \ldots, \theta_k) = \hat{\mu}_j, \quad j = 1, \ldots, k$$

Si risolve il sistema per $(\theta_1, \ldots, \theta_k)$.

**Vantaggi del MOM:** semplice, non richiede calcoli complessi di log-verosimiglianza, spesso porta a formule chiuse.

**Svantaggi:** generalmente meno efficiente dell'MLE; può produrre stime fuori dal dominio del parametro in casi patologici.

## 4. Derivazioni

### MLE per la distribuzione normale

$X_i \sim \mathcal{N}(\mu, \sigma^2)$, entrambi ignoti. La log-verosimiglianza è:

$$\ell(\mu,\sigma^2) = -\frac{n}{2}\ln(2\pi) - \frac{n}{2}\ln\sigma^2 - \frac{1}{2\sigma^2}\sum_{i=1}^n(x_i-\mu)^2$$

**Per $\mu$:** $\frac{\partial\ell}{\partial\mu} = \frac{1}{\sigma^2}\sum_{i=1}^n(x_i-\mu) = 0 \Rightarrow \hat{\mu} = \bar{x}$

**Per $\sigma^2$:** $\frac{\partial\ell}{\partial\sigma^2} = -\frac{n}{2\sigma^2} + \frac{1}{2(\sigma^2)^2}\sum(x_i-\mu)^2 = 0$

Sostituendo $\hat{\mu} = \bar{x}$: $\hat{\sigma}^2 = \frac{1}{n}\sum_{i=1}^n(x_i-\bar{x})^2$

Nota: $\hat{\sigma}^2_{\text{MLE}}$ divide per $n$, non $n-1$ — è **distorto** (bias $= -\sigma^2/n$). L'MLE non garantisce non distorsione!

### MLE per la distribuzione di Poisson

$X_i \sim \text{Pois}(\lambda)$: $\ln f(x;\lambda) = x\ln\lambda - \lambda - \ln(x!)$

$$\ell(\lambda) = \left(\sum_{i=1}^n x_i\right)\ln\lambda - n\lambda - \sum_{i=1}^n\ln(x_i!)$$

$$\frac{\partial\ell}{\partial\lambda} = \frac{\sum x_i}{\lambda} - n = 0 \Rightarrow \hat{\lambda} = \bar{x}$$

La media campionaria è l'MLE per $\lambda$, e in questo caso è anche non distorta.

### MOM per la distribuzione Gamma

$X \sim \text{Gamma}(\alpha, \beta)$ con $E[X] = \alpha/\beta$ e $\text{Var}(X) = \alpha/\beta^2$.

Equazioni dei momenti:
- $\mu_1(\alpha,\beta) = \alpha/\beta = \bar{x}$
- $\mu_2(\alpha,\beta) - \mu_1^2 = \alpha/\beta^2 = s^2$ (usando varianza = momento 2 centrato)

Risolvendo: $\hat{\beta} = \bar{x}/s^2$ e $\hat{\alpha} = \bar{x}^2/s^2$.

## 5. Esempi

**Esempio 1 — MLE per la Bernoulli (moneta)**

$X_1, \ldots, X_n \overset{\text{iid}}{\sim} \text{Bern}(p)$, osserviamo $k$ successi su $n$.

$\ell(p) = k\ln p + (n-k)\ln(1-p)$

$\frac{\partial\ell}{\partial p} = k/p - (n-k)/(1-p) = 0 \Rightarrow k(1-p) = (n-k)p \Rightarrow \hat{p} = k/n$

La proporzione campionaria è l'MLE: $\hat{p} = 8/10 = 0.8$ per 8 teste su 10.

**Esempio 2 — MLE per la distribuzione esponenziale**

$X_i \sim \text{Exp}(\lambda)$: $\ln f(x;\lambda) = \ln\lambda - \lambda x$

$\ell(\lambda) = n\ln\lambda - \lambda\sum_{i=1}^n x_i$

$\frac{\partial\ell}{\partial\lambda} = n/\lambda - \sum x_i = 0 \Rightarrow \hat{\lambda} = n/\sum x_i = 1/\bar{x}$

Per invarianza, l'MLE del tempo medio (= $1/\lambda$) è $\hat{E}[X] = \bar{x}$.

**Esempio 3 — MLE per la Normale (solo $\mu$, $\sigma$ nota)**

$\ell(\mu) = -\frac{1}{2\sigma^2}\sum(x_i-\mu)^2 + \text{const}$

Massimizzare $\ell$ equivale a minimizzare $\sum(x_i-\mu)^2$ — l'MLE coincide con la stima ai minimi quadrati: $\hat{\mu} = \bar{x}$.

**Esempio 4 — MLE per distribuzione uniforme: caso non regolare**

$X_i \sim U(0,\theta)$: $L(\theta) = 1/\theta^n$ se $\theta \geq \max_i x_i$, altrimenti 0.

$L(\theta)$ è decrescente in $\theta$, quindi si massimizza al valore minimo possibile: $\hat{\theta} = X_{(n)} = \max_i X_i$.

Nota: questo è un caso in cui l'equazione di score $\partial\ell/\partial\theta = 0$ **non** trova il massimo — il massimo è su un bordo del dominio!

**Esempio 5 — MOM per la distribuzione Binomiale**

$X \sim \text{Bin}(n_0, p)$ con $n_0$ noto, $p$ ignoto.

Momento teorico: $E[X] = n_0 p$.

Equazione MOM: $n_0 p = \bar{x} \Rightarrow \hat{p}_{\text{MOM}} = \bar{x}/n_0$.

In questo caso MOM e MLE coincidono.

**Esempio 6 — Confronto MLE vs MOM per la Gamma**

Campione: $2.1, 3.4, 1.8, 4.2, 2.9$. $\bar{x} = 14.4/5 = 2.88$. $s^2 = \sum(x_i-\bar{x})^2/4 \approx 0.877$.

MOM: $\hat{\beta} = 2.88/0.877 \approx 3.29$, $\hat{\alpha} = 2.88^2/0.877 \approx 9.46$.

MLE: richiede soluzione numerica dell'equazione $\ln\hat{\alpha} - \psi(\hat{\alpha}) = \ln\bar{x} - \overline{\ln x}$ (dove $\psi$ è la funzione digamma). Le stime MOM servono come punto iniziale per l'algoritmo numerico.

**Esempio 7 — Invarianza dell'MLE**

Se $X_i \sim \mathcal{N}(\mu, \sigma^2)$ con MLE $\hat{\sigma}^2 = \frac{1}{n}\sum(x_i-\bar{x})^2$, per invarianza:

$\hat{\sigma}_{\text{MLE}} = \sqrt{\hat{\sigma}^2} = \sqrt{\frac{1}{n}\sum(x_i-\bar{x})^2}$

E per $P(X > c) = 1 - \Phi((c-\mu)/\sigma)$, l'MLE è $1 - \Phi((c-\hat{\mu})/\hat{\sigma})$.

**Esempio 8 — Normalità asintotica dell'MLE per Poisson**

$\hat{\lambda} = \bar{X}$ con $I_1(\lambda) = 1/\lambda$. Distribuzione asintotica:

$\sqrt{n}(\hat{\lambda} - \lambda) \xrightarrow{d} \mathcal{N}(0, \lambda)$

Per $n = 100$, $\hat{\lambda} = 3.2$ osservato: $\hat{\text{SE}} = \sqrt{\hat{\lambda}/n} = \sqrt{3.2/100} = 0.179$.

## 6. Grafico

```plot
{"fn":"Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)","domain":[-4,4],"yDomain":[0,0.5],"title":"Distribuzione asintotica dell'MLE — converge a N(0, 1/I(θ))","label1":"densità N(0,1)"}
```

## 7. Interattivo

```slider
{"fn":"Math.pow(x,p)*Math.exp(-x)/((p>0)?1:0.001)","domain":[0,10],"yDomain":[0,0.4],"params":[{"name":"p","min":0.5,"max":5,"step":0.1,"default":2}],"title":"Log-verosimiglianza della Gamma al variare di α (forma della curva)"}
```

## 8. Errori comuni

**Errore 1 — Confondere verosimiglianza e probabilità.** $L(\theta; \mathbf{x})$ non è la probabilità che $\theta$ sia vero — $\theta$ è fisso nella statistica frequentista, non è una variabile aleatoria. $L(\theta)$ misura la compatibilità dei dati con il valore $\theta$, non la probabilità di $\theta$.

**Errore 2 — Dimenticare di verificare che sia un massimo e non un minimo.** L'equazione $\partial\ell/\partial\theta = 0$ trova punti critici. Occorre verificare $\partial^2\ell/\partial\theta^2 < 0$ al punto trovato. Per distribuzioni multiparametriche, la matrice hessiana deve essere negativa definita.

**Errore 3 — Credere che l'MLE sia sempre non distorto.** L'MLE è asintoticamente non distorto, ma per $n$ finito può essere distorto. Esempio classico: $\hat{\sigma}^2_{\text{MLE}} = \frac{1}{n}\sum(X_i-\bar{X})^2$ ha bias $-\sigma^2/n$.

**Errore 4 — Non usare la log-verosimiglianza.** Lavorare con $L(\theta) = \prod f(x_i;\theta)$ porta a prodotti di molti numeri piccoli, con rischi di underflow numerico e calcoli più complessi. Si usa sempre $\ell = \ln L$.

**Errore 5 — Applicare l'equazione di score nei casi non regolari.** Per $U(0,\theta)$, $\text{Gamma}(1,\theta)$ con supporto dipendente da $\theta$, e altri casi non regolari, il massimo può essere sul bordo del dominio e non si trova ponendo la derivata a zero. Bisogna analizzare il comportamento globale di $L(\theta)$.

**Errore 6 — Confondere l'invarianza dell'MLE con la non distorsione di $g(\hat{\theta})$.** $g(\hat{\theta}_{\text{MLE}})$ è l'MLE di $g(\theta)$, ma non è necessariamente non distorto. Per funzioni concave, $E[g(\hat{\theta})] \leq g(E[\hat{\theta}]) \approx g(\theta)$ (disuguaglianza di Jensen): il bias può essere negativo.

**Errore 7 — Preferire sempre MOM a MLE per semplicità.** Il MOM è più semplice da calcolare, ma l'MLE è asintoticamente più efficiente (varianza minore per $n$ grande). Per campioni piccoli entrambi sono approssimativi, ma l'MLE sfrutta meglio l'informazione nel campione.

## 9. Applicazioni reali

**Modelli di sopravvivenza in medicina.** La distribuzione esponenziale o Weibull modella i tempi di sopravvivenza di pazienti. L'MLE stima il tasso di rischio $\lambda$, inclusa la sua incertezza (standard error asintotico $\approx \hat{\lambda}/\sqrt{n}$), fondamentale per valutare l'efficacia di una terapia.

**Reti neurali e deep learning.** L'addestramento di reti neurali tramite minimizzazione della cross-entropy è equivalente alla massimizzazione della log-verosimiglianza per modelli di classificazione. Il gradiente della log-verosimiglianza è il gradiente usato dalla backpropagation.

**Genetica delle popolazioni.** Stimare le frequenze alleliche da sequenziamenti genomici usa l'MLE. La log-verosimiglianza si massimizza considerando sia i dati osservati che la struttura della popolazione (algoritmo EM per dati mancanti).

**Assicurazioni e risk management.** Stimare i parametri di distribuzioni a coda pesante (Pareto, distribuzione di valore estremo) per modellare perdite rare usa l'MLE, spesso con la distribuzione asintotica per costruire intervalli di confidenza sui quantili.

## 10. Riepilogo

| Concetto | Formula | Note |
| --- | --- | --- |
| Verosimiglianza | $L(\theta) = \prod_{i=1}^n f(x_i;\theta)$ | Funzione di $\theta$, non dei dati |
| Log-verosimiglianza | $\ell(\theta) = \sum_{i=1}^n \ln f(x_i;\theta)$ | Sempre usare $\ell$, non $L$ |
| MLE | $\hat{\theta} = \arg\max_\theta \ell(\theta)$ | Soluzione dell'equazione di score |
| Equazione di score | $\partial\ell/\partial\theta = 0$ | Condizione necessaria (non sufficiente) |
| Consistenza MLE | $\hat{\theta} \xrightarrow{P} \theta_0$ | Sotto condizioni di regolarità |
| Normalità asintotica | $\sqrt{n}(\hat{\theta}-\theta_0) \xrightarrow{d} \mathcal{N}(0, 1/I_1(\theta_0))$ | Per $n$ grande |
| Invarianza | $\widehat{g(\theta)} = g(\hat{\theta})$ | Proprietà fondamentale dell'MLE |
| Metodo dei momenti | $E[X^j](\theta) = \frac{1}{n}\sum X_i^j$ | Semplice ma meno efficiente |
| MLE Normale ($\mu$) | $\hat{\mu} = \bar{x}$ | Non distorto |
| MLE Normale ($\sigma^2$) | $\hat{\sigma}^2 = \frac{1}{n}\sum(x_i-\bar{x})^2$ | Distorto (bias $= -\sigma^2/n$) |
| MLE Poisson | $\hat{\lambda} = \bar{x}$ | Non distorto ed efficiente |

## 11. Esercizi

<details>
<summary>Esercizio 1: MLE per la distribuzione Bernoulli</summary>

$n = 20$ lanci di una moneta, $k = 13$ teste. Trovare $\hat{p}_{\text{MLE}}$ e il suo standard error asintotico.

**Soluzione.**

$\hat{p} = k/n = 13/20 = 0.65$.

Informazione di Fisher: $I_1(p) = 1/(p(1-p))$. Per $n = 20$: $I_{20}(p) = 20/(p(1-p))$.

$\widehat{\text{SE}} = \sqrt{\hat{p}(1-\hat{p})/n} = \sqrt{0.65\cdot0.35/20} = \sqrt{0.01138} \approx 0.107$

</details>

<details>
<summary>Esercizio 2: MLE per la distribuzione esponenziale</summary>

Tempi di attesa in minuti: $1.2, 3.5, 0.8, 2.1, 4.7$. Trovare $\hat{\lambda}_{\text{MLE}}$.

**Soluzione.**

$\bar{x} = (1.2+3.5+0.8+2.1+4.7)/5 = 12.3/5 = 2.46$

$\hat{\lambda}_{\text{MLE}} = 1/\bar{x} = 1/2.46 \approx 0.407$

Il tempo medio stimato è $1/\hat{\lambda} = 2.46$ minuti.

$\hat{\text{SE}} = \hat{\lambda}/\sqrt{n} = 0.407/\sqrt{5} \approx 0.182$

</details>

<details>
<summary>Esercizio 3: MLE per la Normale con entrambi i parametri ignoti</summary>

Campione: $4, 6, 8, 10, 12$. Trovare $\hat{\mu}_{\text{MLE}}$ e $\hat{\sigma}^2_{\text{MLE}}$.

**Soluzione.**

$\hat{\mu} = \bar{x} = 40/5 = 8$

$\hat{\sigma}^2 = \frac{1}{n}\sum(x_i-\bar{x})^2 = \frac{1}{5}[(16+4+0+4+16)] = 40/5 = 8$

Nota: la varianza campionaria corretta sarebbe $S^2 = 40/4 = 10$. L'MLE è distorto: $E[\hat{\sigma}^2] = (4/5)\sigma^2 = 8$ quando il vero $\sigma^2 = 10$.

</details>

<details>
<summary>Esercizio 4: MLE per la distribuzione di Pareto</summary>

$X \sim \text{Pareto}(\alpha, x_{\min})$ con $x_{\min}$ noto, $\alpha$ ignoto: $f(x;\alpha) = \alpha x_{\min}^\alpha / x^{\alpha+1}$ per $x \geq x_{\min}$.

**Soluzione.**

$\ln f(x;\alpha) = \ln\alpha + \alpha\ln x_{\min} - (\alpha+1)\ln x$

$\ell(\alpha) = n\ln\alpha + n\alpha\ln x_{\min} - (\alpha+1)\sum_{i=1}^n \ln x_i$

$\frac{\partial\ell}{\partial\alpha} = n/\alpha + n\ln x_{\min} - \sum\ln x_i = 0$

$\hat{\alpha} = \frac{n}{\sum_{i=1}^n \ln(x_i/x_{\min})}$

</details>

<details>
<summary>Esercizio 5: MOM per la distribuzione Beta</summary>

$X \sim \text{Beta}(\alpha, \beta)$ con $E[X] = \alpha/(\alpha+\beta)$ e $\text{Var}(X) = \alpha\beta/((\alpha+\beta)^2(\alpha+\beta+1))$.

Campione con $\bar{x} = 0.4$, $s^2 = 0.05$. Trovare $\hat{\alpha}$ e $\hat{\beta}$ con MOM.

**Soluzione.**

Poniamo $m = \bar{x} = 0.4$ e $v = s^2 = 0.05$.

Da $E[X] = m$: $\alpha/(\alpha+\beta) = 0.4$.

Da $\text{Var}(X) = v$: $\alpha\beta/((\alpha+\beta)^2(\alpha+\beta+1)) = 0.05$.

Sia $s = \alpha+\beta$. Allora $\alpha = ms = 0.4s$ e $\beta = (1-m)s = 0.6s$.

$v = m(1-m)/(s+1) = 0.24/(s+1) = 0.05 \Rightarrow s+1 = 4.8 \Rightarrow s = 3.8$

$\hat{\alpha} = 0.4 \times 3.8 = 1.52$, $\hat{\beta} = 0.6 \times 3.8 = 2.28$

</details>

<details>
<summary>Esercizio 6: Invarianza dell'MLE</summary>

Da un campione normale, $\hat{\mu} = 100$ e $\hat{\sigma}^2 = 25$ (MLE). Trovare l'MLE di $P(X > 105)$.

**Soluzione.**

Per invarianza: $\hat{P}(X > 105) = 1 - \Phi\!\left(\frac{105 - \hat{\mu}}{\hat{\sigma}}\right) = 1 - \Phi\!\left(\frac{105-100}{5}\right) = 1 - \Phi(1) \approx 1 - 0.841 = 0.159$

</details>

<details>
<summary>Esercizio 7: Confronto MLE e MOM per distribuzione Gamma</summary>

$X_i \sim \text{Gamma}(\alpha, \beta)$. Con $\bar{x} = 3$ e $s^2 = 1.5$:

(a) Trovare stime MOM di $\alpha$ e $\beta$.
(b) L'MLE di $\lambda = E[X] = \alpha/\beta$ è diverso dalla stima MOM?

**Soluzione.**

(a) MOM: $\hat{\beta} = \bar{x}/s^2 = 3/1.5 = 2$ e $\hat{\alpha} = \bar{x}^2/s^2 = 9/1.5 = 6$.

(b) Per invarianza, l'MLE di $E[X] = \alpha/\beta$ è $\hat{\alpha}_{\text{MLE}}/\hat{\beta}_{\text{MLE}}$. Le stime MLE richiedono soluzione numerica, ma in questo caso $E[X] = \alpha/\beta$ può anche essere stimato direttamente: per il metodo dei momenti di primo ordine, $E[X] = \bar{x} = 3$, che coincide con $\hat{\alpha}_{\text{MOM}}/\hat{\beta}_{\text{MOM}} = 6/2 = 3$. L'MLE di $E[X]$ sarà $\bar{x} = 3$ anche in questo caso.

</details>

<details>
<summary>Esercizio 8: Log-verosimiglianza profilata</summary>

$X_i \sim \mathcal{N}(\mu, \sigma^2)$ con entrambi ignoti. La log-verosimiglianza profilata in $\mu$ è $\ell_P(\mu) = \max_{\sigma^2} \ell(\mu,\sigma^2)$. Derivarla.

**Soluzione.**

Per ogni $\mu$ fissato, l'MLE di $\sigma^2$ è $\hat{\sigma}^2(\mu) = \frac{1}{n}\sum(x_i-\mu)^2$.

Sostituendo:

$\ell_P(\mu) = -\frac{n}{2}\ln\!\left(\frac{2\pi}{n}\sum(x_i-\mu)^2\right) - \frac{n}{2}$

Massimizzare $\ell_P(\mu)$ equivale a minimizzare $\sum(x_i-\mu)^2$, da cui $\hat{\mu} = \bar{x}$.

</details>
