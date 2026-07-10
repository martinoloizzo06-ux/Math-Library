---
id: statistica-12-bayesiana
subject: statistica
topic_it: Metodi avanzati
topic_en: Advanced methods
title_it: Inferenza bayesiana
title_en: Bayesian inference
level: purple
order: 12
source_book: "L. Wasserman, All of Statistics; Casella & Berger, Statistical Inference"
source_chapter: "Cap. 11 — Inferenza bayesiana"
---

## 1. Intuizione

Immagina di ricevere un messaggio sospetto via email. Prima di aprirlo, hai già una certa idea della probabilità che sia spam — diciamo il 30%, basata sull'esperienza generale. Poi guardi il mittente: è sconosciuto. Aggiorna la tua stima: forse 60%. Poi vedi l'oggetto: "Hai vinto un milione di euro!". Aggiorna ancora: forse 98%. Questo processo — partire da una credenza iniziale, osservare nuova evidenza, aggiornare la credenza — è esattamente ciò che fa la statistica bayesiana.

L'approccio **frequentista** (quello classico che hai già studiato) considera il parametro $\theta$ (ad esempio la probabilità che una moneta dia testa) come un numero fisso e sconosciuto. La probabilità descrive solo la frequenza relativa di eventi ripetibili. Non puoi dire "la probabilità che $\theta = 0.6$ è 0.3" — $\theta$ è fisso, non aleatorio.

L'approccio **bayesiano** capovolge questa visione: $\theta$ è trattato come una **variabile aleatoria** con una distribuzione di probabilità che riflette la nostra incertezza su di esso. Prima di vedere i dati, hai una credenza su $\theta$ (chiamata **prior**). Dopo aver osservato i dati, aggiornи la tua credenza usando il teorema di Bayes, ottenendo il **posterior**. Il posterior è la tua nuova visione del mondo, che combina quello che sapevi prima con quello che hai appena imparato.

Una terza analogia: la statistica frequentista è come un giudice che non ha mai sentito parlare dell'imputato prima del processo — deve basarsi solo sulle prove presentate. La statistica bayesiana è come un detective che porta in aula anche la conoscenza del contesto, dei precedenti, delle motivazioni plausibili — e le combina con le prove nuove. Nessuno dei due è "sbagliato"; sono filosofie diverse sull'uso dell'informazione.

Perché studiare l'inferenza bayesiana oggi? Perché con l'aumento dei dati e la complessità dei modelli, la capacità di incorporare conoscenza a priori è diventata cruciale. I modelli di machine learning, i filtri anti-spam, i sistemi di raccomandazione, la diagnosi medica e persino i modelli linguistici come quello che stai leggendo ora usano principi bayesiani al cuore.

## 2. Prerequisiti

- Probabilità condizionata: $P(A \mid B) = P(A \cap B) / P(B)$
- Teorema di Bayes: $P(A \mid B) = P(B \mid A) P(A) / P(B)$
- Distribuzione Beta, distribuzione Gamma, distribuzione Normale
- Verosimiglianza e stima MLE (massima verosimiglianza)
- Valore atteso e varianza di distribuzioni continue
- Concetto di intervallo di confidenza frequentista

## 3. Teoria

### 3.1 Il teorema di Bayes per l'inferenza

Sia $\theta$ il parametro di interesse e $\mathbf{x} = (x_1, \ldots, x_n)$ il campione osservato. Il **teorema di Bayes** applicato all'inferenza statistica è:

$$\pi(\theta \mid \mathbf{x}) = \frac{L(\theta; \mathbf{x})\, \pi(\theta)}{m(\mathbf{x})}$$

dove:
- $\pi(\theta)$ è il **prior** (distribuzione a priori): codifica la nostra conoscenza su $\theta$ prima di vedere i dati
- $L(\theta; \mathbf{x}) = f(\mathbf{x} \mid \theta)$ è la **verosimiglianza**: quanto sono probabili i dati osservati per ciascun valore di $\theta$
- $\pi(\theta \mid \mathbf{x})$ è il **posterior** (distribuzione a posteriori): la nostra credenza aggiornata su $\theta$ dopo aver visto i dati
- $m(\mathbf{x}) = \int L(\theta; \mathbf{x})\, \pi(\theta)\, d\theta$ è la **verosimiglianza marginale** o *evidence*: una costante di normalizzazione che non dipende da $\theta$

Poiché $m(\mathbf{x})$ è solo una costante, si scrive spesso in forma proporzionale:

$$\pi(\theta \mid \mathbf{x}) \propto L(\theta; \mathbf{x})\, \pi(\theta)$$

ovvero: **posterior $\propto$ verosimiglianza $\times$ prior**.

### 3.2 Il prior

Il prior $\pi(\theta)$ rappresenta la nostra conoscenza o credenza su $\theta$ prima di osservare i dati. Esistono diverse tipologie:

**Prior informativo:** basato su studi precedenti, esperienza o teoria. Es: "da trial precedenti so che la proporzione di successi è circa 0.3", quindi uso $\text{Beta}(3, 7)$ come prior.

**Prior non informativo (o piatto):** esprime ignoranza totale. Es: $\pi(\theta) \propto 1$ (uniforme). Problema: la "uniformità" dipende dalla parametrizzazione — un prior uniforme su $\theta$ non è uniforme su $\theta^2$.

**Prior di Jeffreys:** prior non informativo invariante rispetto alle reparametrizzazioni, definito come $\pi(\theta) \propto \sqrt{I(\theta)}$ dove $I(\theta)$ è l'informazione di Fisher. Per il modello binomiale: $\pi(p) \propto p^{-1/2}(1-p)^{-1/2}$, cioè $\text{Beta}(1/2, 1/2)$.

**Prior coniugato:** il tipo più matematicamente trattabile, discusso nella prossima sezione.

### 3.3 Prior coniugati

Il prior $\pi(\theta)$ si dice **coniugato** per la verosimiglianza $L(\theta; \mathbf{x})$ se il posterior $\pi(\theta \mid \mathbf{x})$ appartiene alla stessa famiglia di distribuzioni del prior. Questo garantisce un aggiornamento in forma chiusa.

| Modello | Verosimiglianza | Prior coniugato | Posterior |
| --- | --- | --- | --- |
| Binomiale$(n, p)$ | $\binom{n}{x}p^x(1-p)^{n-x}$ | Beta$(\alpha, \beta)$ | Beta$(\alpha+x,\, \beta+n-x)$ |
| Poisson$(\lambda)$ | $e^{-n\lambda}\lambda^{\sum x_i}/\prod x_i!$ | Gamma$(\alpha, \beta)$ | Gamma$(\alpha+\sum x_i,\, \beta+n)$ |
| Normale$(\mu, \sigma^2)$, $\sigma^2$ noto | $\exp\!\left(-\tfrac{n(\bar{x}-\mu)^2}{2\sigma^2}\right)$ | $\mathcal{N}(\mu_0, \tau^2)$ | $\mathcal{N}(\mu_n, \tau_n^2)$ |
| Normale$(\mu, \sigma^2)$, $\mu$ noto | $\sigma^{-n}\exp(-\text{SQ}/2\sigma^2)$ | Inv-Gamma$(\alpha, \beta)$ | Inv-Gamma$(\alpha + n/2, \beta + \text{SQ}/2)$ |
| Esponenziale$(\lambda)$ | $\lambda^n e^{-\lambda \sum x_i}$ | Gamma$(\alpha, \beta)$ | Gamma$(\alpha+n,\, \beta+\sum x_i)$ |

**Caso Normale–Normale in dettaglio:**

Se $X_i \mid \mu \sim \mathcal{N}(\mu, \sigma^2)$ con $\sigma^2$ noto e $\mu \sim \mathcal{N}(\mu_0, \tau^2)$, il posterior è:

$$\mu \mid \mathbf{x} \sim \mathcal{N}(\mu_n, \tau_n^2)$$

dove:
$$\tau_n^2 = \left(\frac{1}{\tau^2} + \frac{n}{\sigma^2}\right)^{-1}, \qquad \mu_n = \tau_n^2\left(\frac{\mu_0}{\tau^2} + \frac{n\bar{x}}{\sigma^2}\right)$$

La media posteriore $\mu_n$ è una **media ponderata** tra il prior $\mu_0$ e i dati $\bar{x}$, con pesi proporzionali alle precisioni (inverse delle varianze).

### 3.4 Stimatori bayesiani

Dal posterior si possono derivare vari **stimatori puntuali** di $\theta$:

**MAP (Maximum A Posteriori):**
$$\hat\theta_{\text{MAP}} = \arg\max_\theta \pi(\theta \mid \mathbf{x})$$
È il valore di $\theta$ più probabile dato il posterior. Coincide con il MLE quando il prior è uniforme. Minimizza la perdita 0-1 (essere corretti o sbagliati).

**Media posteriore (Bayes estimator sotto perdita quadratica):**
$$\hat\theta_{\text{Bayes}} = E[\theta \mid \mathbf{x}] = \int \theta\, \pi(\theta \mid \mathbf{x})\, d\theta$$
Minimizza il **rischio bayesiano** sotto perdita quadratica $(\theta - \hat\theta)^2$. È lo stimatore bayesiano standard.

**Mediana posteriore (Bayes estimator sotto perdita assoluta):**
$$\hat\theta_{\text{med}} = \text{mediana della distribuzione posteriore}$$
Minimizza la perdita assoluta $\lvert \theta - \hat\theta \rvert$. Più robusta agli outlier nella distribuzione posteriore.

### 3.5 Intervalli di credibilità

Un **intervallo di credibilità** (o credible interval) al $(1-\alpha)\%$ è un insieme $C$ tale che:
$$P(\theta \in C \mid \mathbf{x}) = 1 - \alpha$$

**Differenza fondamentale dagli IC frequentisti:** nell'approccio bayesiano, $\theta$ è aleatorio — possiamo davvero dire "la probabilità che $\theta$ sia in $[a,b]$ è 0.95". Nell'approccio frequentista, $\theta$ è fisso e l'intervallo è aleatorio: il 95% degli intervalli costruiti con il metodo dato conterrà $\theta$.

**HPD (Highest Posterior Density) interval:** il più comune tipo di intervallo di credibilità; è il sottoinsieme più piccolo del dominio di $\theta$ che contiene probabilità posteriore $1-\alpha$. Per distribuzioni unimodali simmetriche, coincide con l'intervallo equi-code.

### 3.6 Confronto Bayesiano vs. Frequentista (MLE)

| Aspetto | Frequentista (MLE) | Bayesiano |
| --- | --- | --- |
| $\theta$ è... | Fisso e sconosciuto | Variabile aleatoria |
| Usa info a priori? | No | Sì (prior) |
| Stima puntuale | MLE $\hat\theta_{\text{MLE}}$ | MAP o media posteriore |
| Intervallo | IC (frequentista) | Credible interval |
| Interpretazione IC | 95% degli IC conterrà $\theta$ | $P(\theta \in [a,b] \mid \mathbf{x}) = 0.95$ |
| Grande $n$ | MLE ottimale (C–R) | Posterior $\to$ MLE (Bernstein–von Mises) |
| Piccolo $n$ | Può essere instabile | Prior regolarizza la stima |

Per $n \to \infty$, il **teorema di Bernstein–von Mises** garantisce che il posterior si concentra attorno al vero $\theta$ e converge alla distribuzione del MLE, indipendentemente dal prior scelto (purché ragionevole). In pratica: con molti dati, frequentisti e bayesiani concordano.

## 4. Derivazioni

### Derivazione del posterior Beta–Binomiale

Supponiamo $X \mid p \sim \text{Binomiale}(n, p)$ e $p \sim \text{Beta}(\alpha, \beta)$.

La verosimiglianza è:
$$L(p; x) = \binom{n}{x} p^x (1-p)^{n-x} \propto p^x (1-p)^{n-x}$$

Il prior è:
$$\pi(p) \propto p^{\alpha-1}(1-p)^{\beta-1}$$

Moltiplicando (e raccogliendo solo i fattori che dipendono da $p$):
$$\pi(p \mid x) \propto p^x(1-p)^{n-x} \cdot p^{\alpha-1}(1-p)^{\beta-1} = p^{(\alpha+x)-1}(1-p)^{(\beta+n-x)-1}$$

Questa è la forma kernel di una distribuzione $\text{Beta}(\alpha+x, \beta+n-x)$. Dunque:
$$p \mid x \sim \text{Beta}(\alpha + x,\; \beta + n - x)$$

La media posteriore è:
$$E[p \mid x] = \frac{\alpha + x}{\alpha + \beta + n}$$

che si può riscrivere come media pesata tra il prior e il MLE:
$$E[p \mid x] = \underbrace{\frac{\alpha+\beta}{\alpha+\beta+n}}_{\text{peso al prior}} \cdot \underbrace{\frac{\alpha}{\alpha+\beta}}_{\text{media prior}} + \underbrace{\frac{n}{\alpha+\beta+n}}_{\text{peso ai dati}} \cdot \underbrace{\frac{x}{n}}_{\text{MLE}}$$

Al crescere di $n$, il peso ai dati domina e la stima bayesiana converge al MLE.

### Derivazione MAP per il modello Normale–Normale

Con $\mu \mid \mathbf{x} \sim \mathcal{N}(\mu_n, \tau_n^2)$, il MAP coincide con la media posteriore $\mu_n$ (perché la Normale è simmetrica e unimodale). Si può verificare:

$$\mu_n = \frac{\mu_0/\tau^2 + n\bar{x}/\sigma^2}{1/\tau^2 + n/\sigma^2}$$

Interpretazione: $1/\tau^2$ è la **precisione del prior**, $n/\sigma^2$ è la **precisione dei dati**. La media posteriore è la media pesata per le precisioni.

## 5. Esempi

**Esempio 1 — Moneta con prior Beta(2,2)**

Lancio una moneta 10 volte e osservo $x = 7$ teste. Prior: $p \sim \text{Beta}(2, 2)$ (moderata preferenza per $p$ centrale).

Posterior: $p \mid x \sim \text{Beta}(2+7, 2+3) = \text{Beta}(9, 5)$.

Media posteriore: $E[p \mid x] = 9/14 \approx 0.643$.

MAP: per Beta$(\alpha, \beta)$, MAP $= (\alpha-1)/(\alpha+\beta-2) = 8/12 \approx 0.667$.

MLE: $\hat{p}_{\text{MLE}} = 7/10 = 0.70$.

Il prior $\text{Beta}(2,2)$ ha media $0.5$, quindi tira la stima bayesiana verso il centro rispetto al MLE.

---

**Esempio 2 — Prior non informativo e convergenza al MLE**

Stessa situazione, ma $p \sim \text{Beta}(1, 1)$ (prior uniforme).

Posterior: $\text{Beta}(8, 4)$. Media posteriore $= 8/12 \approx 0.667$. MAP $= 7/10 = 0.70$ = MLE.

Con prior uniforme, il MAP coincide col MLE. La media posteriore è $(x+1)/(n+2) = 8/12$ — nota come **stima di Laplace**.

---

**Esempio 3 — Aggiornamento sequenziale**

Prima osservazione: $x_1 = 1$ testa su 1 lancio. Prior: $\text{Beta}(1,1)$.

Dopo il primo aggiornamento: $\text{Beta}(2, 1)$ — posterior intermedio.

Seconda osservazione: $x_2 = 0$ teste su 1 lancio.

Aggiornamento del posterior intermedio: $\text{Beta}(2+0, 1+1) = \text{Beta}(2, 2)$.

Risultato finale uguale a partire dal prior e usare entrambe le osservazioni insieme ($x=1$, $n=2$): $\text{Beta}(1+1, 1+1) = \text{Beta}(2,2)$. L'aggiornamento bayesiano è **sequenziale e coerente**.

---

**Esempio 4 — Modello Poisson–Gamma**

Numero di clienti per ora in un negozio: $x_1=5, x_2=3, x_3=7, x_4=4, x_5=6$ (n=5 ore). Prior: $\lambda \sim \text{Gamma}(2, 1)$ (media prior = 2 clienti/ora).

Posterior: $\lambda \mid \mathbf{x} \sim \text{Gamma}(2 + 25, 1 + 5) = \text{Gamma}(27, 6)$.

Media posteriore: $27/6 = 4.5$ clienti/ora.

MLE: $\bar{x} = 25/5 = 5.0$ clienti/ora.

Il prior informativo (media = 2) attira la stima verso il basso rispetto ai dati osservati.

---

**Esempio 5 — Intervallo di credibilità Beta**

Posterior: $p \mid x \sim \text{Beta}(9, 5)$. L'intervallo di credibilità al 95% si trova cercando $[a, b]$ tale che $P(a \leq p \leq b \mid x) = 0.95$.

Per la distribuzione $\text{Beta}(9, 5)$, il 2.5° percentile è circa $0.402$ e il 97.5° è circa $0.873$. Dunque l'IC di credibilità al 95% è $[0.402, 0.873]$.

Confronto con IC frequentista (Wald): $0.7 \pm 1.96\sqrt{0.7 \cdot 0.3/10} \approx [0.416, 0.984]$. L'IC bayesiano è più stretto grazie al prior.

---

**Esempio 6 — Modello Normale–Normale**

Altezze di adulti: $\sigma^2 = 100$ (noto, $\sigma = 10$ cm). Prior: $\mu \sim \mathcal{N}(170, 25)$ (media 170 cm, sd 5 cm). Campione di $n = 20$: $\bar{x} = 174$ cm.

$$\tau_n^2 = \left(\frac{1}{25} + \frac{20}{100}\right)^{-1} = \left(0.04 + 0.20\right)^{-1} = \frac{1}{0.24} \approx 4.17$$

$$\mu_n = 4.17 \left(\frac{170}{25} + \frac{20 \cdot 174}{100}\right) = 4.17(6.8 + 34.8) = 4.17 \cdot 41.6 \approx 173.5$$

Posterior: $\mu \mid \mathbf{x} \sim \mathcal{N}(173.5, 4.17)$, sd posteriore $\approx 2.04$ cm.

MLE: $\bar{x} = 174$ cm. Il prior ha spostato leggermente la stima verso 170.

IC di credibilità al 95%: $173.5 \pm 1.96 \cdot 2.04 \approx [169.5, 177.5]$.

---

**Esempio 7 — MAP vs. media posteriore con prior asimmetrico**

Posterior: $p \sim \text{Beta}(2, 10)$ (fortemente asimmetrica verso sinistra).

Media: $2/12 \approx 0.167$. MAP: $(2-1)/(12-2) = 1/10 = 0.10$. Mediana: circa $0.155$.

Differiscono perché la distribuzione è asimmetrica. La **media** è lo stimatore ottimale sotto perdita quadratica, il **MAP** è lo stimatore "più probabile", la **mediana** è ottimale sotto perdita assoluta.

---

**Esempio 8 — Confronto con MLE per piccoli campioni**

Lanci di moneta, $n=3$, $x=3$ teste. MLE: $\hat{p} = 1.0$ (assurdo per un prior ragionevole). Prior: $\text{Beta}(2, 2)$. Posterior: $\text{Beta}(5, 2)$. Media posteriore: $5/7 \approx 0.714$. Molto più ragionevole.

Con piccoli campioni, il prior bayesiano funge da **regolarizzatore** che impedisce stime estreme.

## 6. Grafico

```plot
{"fn":"Math.pow(x,8)*Math.pow(1-x,4)/0.000722","domain":[0,1],"yDomain":[0,4],"title":"Prior Beta(2,2) vs Posterior Beta(9,5)","label1":"Prior Beta(2,2) × 10","fn2":"Math.pow(x,8)*Math.pow(1-x,4)/0.000722","label2":"Posterior Beta(9,5)","color":"steelblue","color2":"crimson"}
```

## 7. Interattivo

```slider
{"fn":"Math.exp(-Math.pow(x-mu,2)/(2*sigma*sigma))/(sigma*Math.sqrt(2*Math.PI))","domain":[-5,5],"yDomain":[0,1.5],"params":[{"name":"mu","min":-3,"max":3,"step":0.1,"default":0},{"name":"sigma","min":0.1,"max":2,"step":0.1,"default":1}],"title":"Distribuzione posteriore Normale — varia media (μ) e precisione (σ) al variare dei dati"}
```

Quando $\sigma$ diminuisce, il posterior diventa più stretto: più dati osservati $\Rightarrow$ meno incertezza su $\theta$. Quando $\mu$ si sposta, vedi come la stima puntuale del parametro si aggiorna.

## 8. Errori comuni

**Errore 1 — Confondere prior e posterior.**
Il prior $\pi(\theta)$ è la credenza *prima* dei dati; il posterior $\pi(\theta \mid \mathbf{x})$ è la credenza *dopo*. Dire "il prior dice che $\theta$ è 0.6" dopo aver visto i dati è un errore concettuale grave.

**Errore 2 — Interpretare l'IC di credibilità come un IC frequentista.**
L'IC di credibilità al 95% significa $P(\theta \in [a,b] \mid \mathbf{x}) = 0.95$ — $\theta$ è aleatorio nel contesto bayesiano. L'IC frequentista al 95% non permette questa affermazione: è l'*intervallo* ad essere aleatorio, non $\theta$.

**Errore 3 — Pensare che il prior uniforme sia "neutro" o "obiettivo".**
Un prior uniforme su $p$ non è uniforme su $\log(p/(1-p))$ (la logit). La "non informatività" dipende dalla parametrizzazione. Il prior di Jeffreys risolve questo problema tramite l'invarianza per reparametrizzazione.

**Errore 4 — Dimenticare che il posterior dipende dal prior.**
Con dati abbondanti, l'influenza del prior diminuisce. Ma con pochi dati, la scelta del prior è cruciale. Due ricercatori con prior diversi raggiungeranno conclusioni diverse — questo è intenzionale nel framework bayesiano, ma va comunicato chiaramente.

**Errore 5 — Usare MAP come se fosse sempre uguale alla media posteriore.**
MAP e media posteriore coincidono solo per distribuzioni simmetriche (es. Normale). Per distribuzioni asimmetriche (Beta, Gamma, log-Normale), possono differire sostanzialmente. La media posteriore è lo stimatore ottimale sotto perdita quadratica.

**Errore 6 — Credere che l'approccio bayesiano richieda sempre calcolo numerico.**
Quando si usano prior coniugati, il posterior ha forma chiusa. Per modelli complessi senza coniugazione, si usano metodi MCMC (Markov Chain Monte Carlo) o approssimazioni variazionali — ma non è sempre necessario.

**Errore 7 — Confondere verosimiglianza e probabilità.**
$L(\theta; x) = f(x \mid \theta)$ è una funzione di $\theta$ per $x$ fissato. Non è una distribuzione di probabilità su $\theta$: $\int L(\theta; x)\, d\theta$ non è necessariamente 1. Solo $\pi(\theta \mid x)$ è una vera distribuzione su $\theta$.

## 9. Applicazioni reali

**Diagnostica medica:** il teorema di Bayes è fondamentale per interpretare i test diagnostici. La probabilità post-test (posterior) dipende dalla sensibilità e specificità del test (verosimiglianza) e dalla prevalenza della malattia nella popolazione (prior). Un test positivo per una malattia rara non implica necessariamente alta probabilità di essere malati — il prior (prevalenza bassa) conta moltissimo.

**Machine learning e reti neurali:** la regolarizzazione L2 (ridge) usata nell'addestramento di reti neurali equivale ad assumere un prior Gaussiano sui pesi. La tecnica di Dropout può essere interpretata come approssimazione bayesiana. Le reti neurali bayesiane producono distribuzioni sull'output invece di stime puntuali, permettendo la quantificazione dell'incertezza.

**Filtri spam e classificatori naïve Bayes:** il filtro spam classifica un'email come spam usando $P(\text{spam} \mid \text{parole}) \propto P(\text{parole} \mid \text{spam}) \cdot P(\text{spam})$, dove $P(\text{spam})$ è il prior (frequenza storica di spam) e $P(\text{parole} \mid \text{spam})$ è la verosimiglianza. L'aggiornamento è continuo: più il filtro vede spam, meglio si calibra.

**A/B testing bayesiano:** invece di aspettare un numero prefissato di osservazioni (come nel test frequentista), l'A/B testing bayesiano aggiorna continuamente la probabilità che la variante A sia migliore della B. Permette di fermare l'esperimento non appena si raggiunge certezza sufficiente, riducendo i costi.

## 10. Riepilogo

| Concetto | Formula | Note |
| --- | --- | --- |
| Posterior | $\pi(\theta \mid \mathbf{x}) \propto L(\theta; \mathbf{x})\,\pi(\theta)$ | Prior × Verosimiglianza (a meno di costante) |
| Beta–Binomiale | $\text{Beta}(\alpha+x,\, \beta+n-x)$ | Aggiornamento delle pseudo-osservazioni |
| Media posteriore Beta | $(\alpha+x)/(\alpha+\beta+n)$ | Media pesata tra prior e MLE |
| MAP Beta | $(\alpha+x-1)/(\alpha+\beta+n-2)$ | Moda del posterior |
| Normale–Normale | $\mu_n = \tau_n^2(\mu_0/\tau^2 + n\bar{x}/\sigma^2)$ | Media pesata per precisioni |
| Precisione posteriore | $1/\tau_n^2 = 1/\tau^2 + n/\sigma^2$ | Le precisioni si sommano |
| Stima MAP | $\arg\max \pi(\theta \mid \mathbf{x})$ | Coincide con MLE se prior uniforme |
| Media posteriore | $E[\theta \mid \mathbf{x}]$ | Ottimale sotto perdita quadratica |
| Credible interval | $P(\theta \in [a,b] \mid \mathbf{x}) = 0.95$ | $\theta$ è aleatorio nel senso bayesiano |

## 11. Esercizi

<details>
<summary>Esercizio 1: Aggiornamento Beta–Binomiale (base)</summary>

Un ricercatore studia la proporzione $p$ di adulti che leggono un quotidiano. Il suo prior è $p \sim \text{Beta}(3, 7)$ (basato su studi precedenti che suggerivano $p \approx 0.3$). Raccoglie un campione di $n = 20$ persone e osserva $x = 10$ lettori.

a) Trova la distribuzione posterior.
b) Calcola la media posteriore e il MAP.
c) Confronta con il MLE.

**Soluzione:**

a) $p \mid x \sim \text{Beta}(3+10, 7+10) = \text{Beta}(13, 17)$.

b) Media posteriore: $13/30 \approx 0.433$. MAP: $(13-1)/(30-2) = 12/28 \approx 0.429$.

c) MLE: $10/20 = 0.50$. Il prior (media 0.3) ha spostato la stima verso il basso rispetto al MLE. Con $n=20$, il prior $\text{Beta}(3,7)$ (equivalente a 10 pseudo-osservazioni) ha ancora un peso rilevante.

</details>

<details>
<summary>Esercizio 2: Prior non informativo e stima di Laplace</summary>

Lanci $n = 5$ volte una moneta e osservi $x = 4$ teste. Usa prior uniforme $p \sim \text{Beta}(1,1)$.

a) Trova il posterior.
b) Calcola media posteriore (stima di Laplace), MAP e MLE.
c) Cosa succede se $x = 5$?

**Soluzione:**

a) $p \mid x \sim \text{Beta}(1+4, 1+1) = \text{Beta}(5, 2)$.

b) Media posteriore (Laplace): $(4+1)/(5+2) = 5/7 \approx 0.714$. MAP: $(5-1)/(7-2) = 4/5 = 0.80 =$ MLE.

c) Se $x=5$ (tutte teste): MLE $= 1.0$ (estremo). Posterior: $\text{Beta}(6,1)$. Media posteriore: $6/7 \approx 0.857$ — molto più ragionevole. Il prior uniforme impedisce la stima assurda $\hat{p} = 1$.

</details>

<details>
<summary>Esercizio 3: Aggiornamento sequenziale</summary>

Lanci una moneta con prior $\text{Beta}(2, 2)$. Osservi in sequenza: testa, testa, croce, testa.

Mostra l'aggiornamento passo per passo e verifica che il risultato finale sia uguale all'aggiornamento in blocco.

**Soluzione:**

Prior: $\text{Beta}(2, 2)$.

Dopo 1° lancio (testa): $\text{Beta}(2+1, 2+0) = \text{Beta}(3, 2)$.
Dopo 2° lancio (testa): $\text{Beta}(3+1, 2+0) = \text{Beta}(4, 2)$.
Dopo 3° lancio (croce): $\text{Beta}(4+0, 2+1) = \text{Beta}(4, 3)$.
Dopo 4° lancio (testa): $\text{Beta}(4+1, 3+0) = \text{Beta}(5, 3)$.

Aggiornamento in blocco: $n=4$, $x=3$ teste. $\text{Beta}(2+3, 2+1) = \text{Beta}(5, 3)$. Identico. L'aggiornamento bayesiano è commutativo e associativo nell'ordine delle osservazioni (data exchangeability).

</details>

<details>
<summary>Esercizio 4: Modello Poisson–Gamma</summary>

Numero di guasti al giorno in una fabbrica: $x_1=2, x_2=0, x_3=1, x_4=3, x_5=1, x_6=2$ (6 giorni). Prior dell'ingegnere: $\lambda \sim \text{Gamma}(4, 2)$ (media a priori = 2 guasti/giorno).

a) Trova il posterior.
b) Calcola la media posteriore e confronta con il MLE.
c) Costruisci un intervallo di credibilità approssimato al 95% usando la simmetria della Gamma per grandi parametri.

**Soluzione:**

a) $\sum x_i = 2+0+1+3+1+2 = 9$, $n=6$. Posterior: $\lambda \mid \mathbf{x} \sim \text{Gamma}(4+9, 2+6) = \text{Gamma}(13, 8)$.

b) Media posteriore: $13/8 = 1.625$ guasti/giorno. MLE: $\bar{x} = 9/6 = 1.5$. Il prior (media 2) ha alzato leggermente la stima rispetto al MLE.

c) Per Gamma$(13, 8)$, la varianza è $13/64 \approx 0.203$, sd $\approx 0.450$. Con l'approssimazione Normale (valida per grandi parametri): IC $\approx 1.625 \pm 1.96 \cdot 0.450 \approx [0.74, 2.51]$.

</details>

<details>
<summary>Esercizio 5: Modello Normale–Normale</summary>

Il QI di una popolazione ha $\sigma^2 = 225$ (noto). Un ricercatore ha prior $\mu \sim \mathcal{N}(100, 100)$ (sd prior = 10). Campione di $n=9$ soggetti: $\bar{x} = 108$.

a) Trova precisione e media posteriore.
b) Calcola l'IC di credibilità al 95%.
c) Come cambia il posterior se $n=100$?

**Soluzione:**

a) $1/\tau_n^2 = 1/100 + 9/225 = 0.01 + 0.04 = 0.05$. $\tau_n^2 = 20$, sd posteriore $\approx 4.47$.

$\mu_n = 20\,(100/100 + 9 \cdot 108/225) = 20\,(1 + 4.32) = 20 \cdot 5.32 = 106.4$.

b) IC 95%: $106.4 \pm 1.96 \cdot 4.47 \approx [97.6, 115.2]$.

c) Con $n=100$: $1/\tau_n^2 = 0.01 + 100/225 \approx 0.454$. $\tau_n^2 \approx 2.20$, sd $\approx 1.48$. $\mu_n \approx 2.20\,(1 + 100 \cdot 108/225) \approx 107.9$. Il prior quasi scompare: la stima converge al MLE $\bar{x} = 108$.

</details>

<details>
<summary>Esercizio 6: Interpretazione degli intervalli</summary>

Un laboratorio costruisce un IC frequentista al 95% per $\mu$: $[45.2, 52.8]$. Un collega dice "c'è una probabilità del 95% che $\mu$ sia tra 45.2 e 52.8".

a) Questa affermazione è corretta nell'approccio frequentista? Perché?
b) In quale approccio sarebbe corretta (e a quali condizioni)?

**Soluzione:**

a) **No**, non è corretta nell'approccio frequentista. In questo paradigma, $\mu$ è un numero fisso (sconosciuto). L'IC costruito è anch'esso un numero fisso (calcolato dal campione). Non si può assegnare probabilità all'evento "$\mu \in [45.2, 52.8]$" perché non c'è aleatività: o $\mu$ è nell'intervallo (con certezza) o non lo è (con certezza). La frase corretta è: "se ripetessimo l'esperimento infinite volte, il 95% degli intervalli costruiti con questo metodo conterrebbe il vero $\mu$".

b) La frase è **corretta nell'approccio bayesiano**, dove $\mu$ è trattato come una variabile aleatoria. Un intervallo di credibilità al 95% soddisfa per costruzione $P(\mu \in [a,b] \mid \mathbf{x}) = 0.95$. Tuttavia, il valore numerico dell'intervallo dipende dal prior scelto, quindi due ricercatori con prior diversi potrebbero ottenere intervalli diversi.

</details>

<details>
<summary>Esercizio 7: Diagnostica medica e Bayes</summary>

Un test per una malattia rara ha sensibilità 99% (probabilità di positivo se malato) e specificità 95% (probabilità di negativo se sano). La prevalenza della malattia è 0.1% (1 persona su 1000).

a) Usando il teorema di Bayes, calcola la probabilità di essere malati dato un test positivo.
b) Perché questo risultato è spesso sorprendente per i medici?

**Soluzione:**

a) Prior: $P(M) = 0.001$, $P(\bar{M}) = 0.999$.

Verosimiglianza: $P(+ \mid M) = 0.99$ (sensibilità), $P(+ \mid \bar{M}) = 0.05$ (1 − specificità).

Evidenza: $P(+) = P(+ \mid M)P(M) + P(+ \mid \bar{M})P(\bar{M}) = 0.99 \cdot 0.001 + 0.05 \cdot 0.999 = 0.000990 + 0.049950 = 0.05094$.

Posterior: $P(M \mid +) = \frac{0.99 \cdot 0.001}{0.05094} \approx 0.0194 \approx 1.94\%$.

b) Nonostante un test eccellente (99% sensibilità, 95% specificità), la probabilità di essere malati dopo un test positivo è meno del 2%. Il motivo è il prior estremamente basso (prevalenza 0.1%): la maggior parte dei positivi sono **falsi positivi** tra i sani (che sono il 99.9% della popolazione). Questo è l'**effetto base rate neglect** — ignorare il prior porta a sovrastimare drasticamente il rischio. La lezione bayesiana è che il prior (prevalenza) conta quanto la qualità del test.

</details>

<details>
<summary>Esercizio 8: MAP vs. media posteriore</summary>

Il posterior di $\theta$ è distribuito come $\text{Beta}(2, 8)$.

a) Calcola media posteriore, MAP e mediana (approssimata).
b) Sotto quale funzione di perdita ciascuno è ottimale?
c) Quale useresti se le conseguenze di sovrastimare $\theta$ sono molto più gravi di quelle di sottostimarlo?

**Soluzione:**

a) $\text{Beta}(2, 8)$: media $= 2/10 = 0.2$. MAP $= (2-1)/(10-2) = 1/8 = 0.125$. Mediana $\approx 0.177$ (la Beta$(2,8)$ è asimmetrica destra, mediana tra MAP e media).

b) Media posteriore: ottimale sotto **perdita quadratica** $(\theta - \hat\theta)^2$. MAP: ottimale sotto **perdita 0-1** (punto esatto o errore). Mediana: ottimale sotto **perdita assoluta** $\lvert\theta - \hat\theta\rvert$.

c) Se sovrastimare è molto costoso, conviene usare uno stimatore **conservativo** (basso). La mediana o il MAP sarebbero più prudenti della media posteriore, perché entrambi producono stime più basse della media per questa distribuzione asimmetrica. In alternativa, si potrebbe usare una **funzione di perdita asimmetrica** (perdita linare-esponenziale) che penalizza maggiormente le sovrastime.

</details>
