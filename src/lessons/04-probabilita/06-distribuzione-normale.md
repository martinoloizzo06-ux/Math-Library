---
id: probabilita-06-normale
subject: probabilita
topic_it: Variabili aleatorie
topic_en: Random variables
title_it: Distribuzione normale (gaussiana)
title_en: Normal (Gaussian) distribution
level: blue
order: 6
source_book: "Blitzstein & Hwang, Introduction to Probability; MIT OCW 6.041; Ross, Probability Models"
source_chapter: "Cap. 5 — Distribuzione normale"
---

## 1. Intuizione e motivazione — perché la gaussiana è ovunque?

Entra in un'aula con 200 studenti e misura l'altezza di ognuno. Se fai un istogramma, otterrai qualcosa di simile a una **campana simmetrica**: molte persone vicino alla media, pochissime agli estremi. Questo profilo è la distribuzione normale.

Ma perché si trova ovunque? La risposta sta nel **Teorema Centrale del Limite** (che vedrai nella lezione 10): ogni volta che sommi molte variabili aleatorie indipendenti — anche molto diverse tra loro — la somma si avvicina sempre di più a una distribuzione normale. Le altezze dipendono da decine di geni e fattori ambientali: la loro somma converge alla gaussiana. Lo stesso vale per errori di misura, rendimenti azionari giornalieri, fluttuazioni del segnale in telecomunicazioni, distribuzioni di IQ.

La normale è il modello di default per qualsiasi fenomeno che risulta da tante piccole cause indipendenti. È al centro della statistica inferenziale (test $t$, intervalli di confidenza), del machine learning (regressione, Bayesian methods) e della finanza quantitativa (modello Black-Scholes).

---

## 2. Prerequisiti

- **Variabili aleatorie continue** (Probabilità, lezione 5): densità $f_X$, CDF $F_X$
- **Valore atteso e varianza** di variabili continue (Probabilità, lezione 5):
  $E[X] = \int_{-\infty}^{+\infty} x\,f_X(x)\,dx$ e $\mathrm{Var}(X) = E[X^2] - (E[X])^2$
- **Funzione di distribuzione cumulativa** (CDF): $F_X(x) = P(X \leq x)$
- **Probabilità condizionata** (Probabilità, lezione 2): utile per capire la standardizzazione

---

## 3. Definizione — la densità di probabilità

Una variabile aleatoria $X$ ha distribuzione **normale** (o **gaussiana**) con media $\mu$ e varianza $\sigma^2 > 0$, e scriviamo $X \sim \mathcal{N}(\mu, \sigma^2)$, se la sua densità di probabilità è:

$$\boxed{f_X(x) = \frac{1}{\sigma\sqrt{2\pi}} \exp\!\left(-\frac{(x-\mu)^2}{2\sigma^2}\right), \qquad x \in \mathbb{R}}$$

**Spiegazione simbolo per simbolo:**

- $f_X(x)$ — la densità valutata in $x$: non è una probabilità, ma la "concentrazione" di probabilità attorno ad $x$. La probabilità si ottiene integrando: $P(a \leq X \leq b) = \int_a^b f_X(x)\,dx$.
- $\sigma$ — la **deviazione standard** (radice quadrata della varianza $\sigma^2$): misura la dispersione. Nota: la deviazione standard si usa (non la varianza) perché ha le stesse unità di misura di $X$.
- $\sqrt{2\pi}$ — la costante di normalizzazione che garantisce che l'area sotto la curva sia esattamente 1.
- $\exp(\cdot) = e^{(\cdot)}$ — la funzione esponenziale, sempre positiva.
- $(x-\mu)^2$ — la **distanza quadratica** dal centro $\mu$: cresce con il quadrato della distanza dal centro, rendendo la gaussiana decadere molto velocemente.
- $2\sigma^2$ — scala il decadimento: $\sigma$ grande → curva larga e bassa; $\sigma$ piccolo → curva stretta e alta.

**Parametri:**
$$E[X] = \mu \qquad \mathrm{Var}(X) = \sigma^2 \qquad \mathrm{Dev.std}(X) = \sigma$$

Il parametro $\mu$ controlla la **posizione** (il centro della campana), $\sigma$ controlla la **forma** (larghezza).

---

## 4. Grafico interattivo — esplora μ e σ

Sposta i cursori per vedere come $\mu$ trasla la campana e $\sigma$ la dilata o restringe. Le tre aree shaded mostrano le probabilità entro 1σ, 2σ e 3σ dalla media.

```normalbell
{
  "mu_default": 0,
  "sigma_default": 1,
  "title": "Distribuzione Normale N(μ, σ²) — muovi gli slider"
}
```

**Osservazioni chiave:**
- Aumentare $\sigma$: la curva si appiattisce e si allarga (conservando l'area totale = 1)
- Diminuire $\sigma$: la curva diventa più stretta e più alta
- Variare $\mu$: la curva trasla orizzontalmente senza cambiare forma
- Le aree entro $\pm k\sigma$ **non cambiano** al variare di $\mu$ e $\sigma$: sono sempre circa 68%, 95%, 99.7%

---

## 5. Perché la costante è $\frac{1}{\sigma\sqrt{2\pi}}$?

Ogni densità deve soddisfare $\int_{-\infty}^{+\infty} f_X(x)\,dx = 1$ (la probabilità totale è 1).

Per $\mu = 0$, $\sigma = 1$, dobbiamo verificare:

$$\int_{-\infty}^{+\infty} e^{-x^2/2}\,dx = \sqrt{2\pi}$$

Questo è il famoso **integrale di Gauss**. Il trucco per calcolarlo: eleva al quadrato e passa in coordinate polari.

Sia $I = \int_{-\infty}^{+\infty} e^{-x^2/2}\,dx$. Allora:

$$I^2 = \left(\int_{-\infty}^{+\infty} e^{-x^2/2}\,dx\right)\!\left(\int_{-\infty}^{+\infty} e^{-y^2/2}\,dy\right) = \int\!\int_{\mathbb{R}^2} e^{-(x^2+y^2)/2}\,dx\,dy$$

Passando a coordinate polari $(r, \theta)$ con $x^2 + y^2 = r^2$:

$$I^2 = \int_0^{2\pi}\int_0^{+\infty} e^{-r^2/2}\,r\,dr\,d\theta = 2\pi \int_0^{+\infty} r\,e^{-r^2/2}\,dr$$

Sia $u = r^2/2$, $du = r\,dr$:

$$I^2 = 2\pi \int_0^{+\infty} e^{-u}\,du = 2\pi \cdot 1 = 2\pi$$

Quindi $I = \sqrt{2\pi}$, e la costante di normalizzazione è $\frac{1}{\sqrt{2\pi}}$ (oppure $\frac{1}{\sigma\sqrt{2\pi}}$ nel caso generale dopo sostituzione $z = (x-\mu)/\sigma$).

---

## 6. La normale standard $Z \sim \mathcal{N}(0,1)$

Il caso speciale con $\mu = 0$ e $\sigma^2 = 1$ si chiama **normale standard** e si denota $Z \sim \mathcal{N}(0,1)$.

La sua densità è:
$$\phi(z) = \frac{1}{\sqrt{2\pi}}\,e^{-z^2/2}$$

La sua CDF è:
$$\Phi(z) = P(Z \leq z) = \int_{-\infty}^z \phi(t)\,dt$$

$\Phi(z)$ **non ha forma chiusa** in termini di funzioni elementari. I valori si trovano con tavole numeriche o con il computer. Valori importanti:

| $z$ | $\Phi(z)$ | Interpretazione |
|-----|-----------|-----------------|
| −3 | 0.0013 | 0.13% di probabilità a sinistra di −3σ |
| −2 | 0.0228 | 2.28% |
| −1 | 0.1587 | 15.87% |
| 0 | 0.5000 | 50% (la distribuzione è simmetrica) |
| 1 | 0.8413 | 84.13% |
| 2 | 0.9772 | 97.72% |
| 3 | 0.9987 | 99.87% |

**Simmetria:** per ogni $z$, $\Phi(-z) = 1 - \Phi(z)$. Questo dimezza il numero di valori da ricordare: se sai $\Phi(1.96) = 0.975$, sai subito $\Phi(-1.96) = 0.025$.

---

## 7. Standardizzazione — come usare la tavola su qualsiasi normale

Se $X \sim \mathcal{N}(\mu, \sigma^2)$, allora la variabile:

$$Z = \frac{X - \mu}{\sigma}$$

ha distribuzione $Z \sim \mathcal{N}(0,1)$.

**Spiegazione:** sottraiamo $\mu$ per traslare il centro a 0, poi dividiamo per $\sigma$ per scalare la dispersione a 1. Questa operazione si chiama **standardizzazione** o **z-score**.

**Come calcolare $P(a \leq X \leq b)$:**

$$P(a \leq X \leq b) = P\!\left(\frac{a-\mu}{\sigma} \leq Z \leq \frac{b-\mu}{\sigma}\right) = \Phi\!\left(\frac{b-\mu}{\sigma}\right) - \Phi\!\left(\frac{a-\mu}{\sigma}\right)$$

**Procedura passo per passo:**

1. Standardizza gli estremi: $z_a = \dfrac{a-\mu}{\sigma}$, $z_b = \dfrac{b-\mu}{\sigma}$
2. Cerca i valori di $\Phi$ nella tavola (o calcoli): $\Phi(z_b)$ e $\Phi(z_a)$
3. La probabilità è $\Phi(z_b) - \Phi(z_a)$

---

## 8. Regola empirica 68–95–99.7

Per qualsiasi distribuzione $X \sim \mathcal{N}(\mu, \sigma^2)$:

$$P(\mu - \sigma \leq X \leq \mu + \sigma) \approx 68.27\%$$

$$P(\mu - 2\sigma \leq X \leq \mu + 2\sigma) \approx 95.45\%$$

$$P(\mu - 3\sigma \leq X \leq \mu + 3\sigma) \approx 99.73\%$$

Queste percentuali si verificano con la standardizzazione: $P(|X-\mu| \leq k\sigma) = P(|Z| \leq k) = 2\Phi(k) - 1$.

**Come usarla:** se sai che un fenomeno è normale con $\mu = 170$ cm e $\sigma = 8$ cm (altezze), allora circa il 95% delle persone è alto tra $170 - 16 = 154$ cm e $170 + 16 = 186$ cm.

Valori importanti per la pratica statistica: $\Phi(1.645) \approx 0.95$ (usato nei test al 5%), $\Phi(1.96) \approx 0.975$ (intervallo di confidenza al 95%), $\Phi(2.576) \approx 0.995$ (al 99%).

---

## 9. Proprietà della distribuzione normale

**Simmetria:** $f_X(\mu + t) = f_X(\mu - t)$ per ogni $t$. La densità è simmetrica attorno a $\mu$.

Conseguenza: $P(X > \mu + t) = P(X < \mu - t)$ e $E[X] = $ mediana $= $ moda $= \mu$.

**Stabilità per trasformazioni lineari:** se $X \sim \mathcal{N}(\mu, \sigma^2)$ e $a, b \in \mathbb{R}$ con $a \neq 0$:

$$aX + b \sim \mathcal{N}(a\mu + b,\; a^2\sigma^2)$$

Caso particolare: $Z = \frac{X-\mu}{\sigma} = \frac{1}{\sigma}X - \frac{\mu}{\sigma} \sim \mathcal{N}(0, 1)$ — questa è la standardizzazione.

**Stabilità per somme indipendenti:** se $X_i \sim \mathcal{N}(\mu_i, \sigma_i^2)$ **indipendenti** per $i = 1, \ldots, n$:

$$\sum_{i=1}^n X_i \sim \mathcal{N}\!\left(\sum_{i=1}^n \mu_i,\; \sum_{i=1}^n \sigma_i^2\right)$$

Cioè la somma di normali indipendenti è ancora normale, con media = somma delle medie e varianza = somma delle varianze. Questo rende la normale eccezionalmente trattabile nei calcoli.

**Moment generating function (MGF):** $M_X(t) = E[e^{tX}] = e^{\mu t + \sigma^2 t^2/2}$. Da essa si ricavano media e varianza derivando rispetto a $t$ e valutando in $t=0$.

**Coda pesante?** No. La normale ha **code leggere**: la densità decade come $e^{-x^2}$ (molto rapidamente). Questo la rende inadatta per modellare eventi estremi (code "fat" come in finanza): per quello si usano distribuzioni $t$ di Student o Pareto.

---

## 10. Errori comuni

**Errore 1 — Confondere $\sigma$ e $\sigma^2$ nella notazione.**
$\mathcal{N}(\mu, \sigma^2)$ usa la **varianza**. Ma molti software (es. Python scipy) vogliono $\sigma$ (la deviazione standard). Controlla sempre cosa si aspetta la funzione: `scipy.stats.norm(loc=mu, scale=sigma)` vuole $\sigma$, non $\sigma^2$.

**Errore 2 — Applicare $\Phi$ alla varianza invece che alla deviazione standard.**
$z = \dfrac{X - \mu}{\sigma}$, non $\dfrac{X - \mu}{\sigma^2}$. Si divide per la deviazione standard, non per la varianza.

**Errore 3 — Supporre che qualsiasi dato sia normale.**
La normale è giustificata quando i dati risultano dalla somma di molti fattori indipendenti. Per dati con molti valori estremi (rendimenti finanziari, dimensione dei file internet), assume code più pesanti (distribuzioni $t$ o Pareto). Verifica sempre con QQ-plot o test di normalità.

**Errore 4 — Dimenticare la simmetria.**
$P(Z > 1.5) = 1 - \Phi(1.5)$, non $\Phi(1.5)$ direttamente. $P(Z < -1.5) = \Phi(-1.5) = 1 - \Phi(1.5)$.

**Errore 5 — Sommare varianze per trovare la varianza della differenza.**
$\mathrm{Var}(X - Y) = \mathrm{Var}(X) + \mathrm{Var}(Y)$ (se $X$ e $Y$ sono indipendenti): le varianze si **sommano** anche per la differenza. Solo le medie si sottraggono: $E[X-Y] = \mu_X - \mu_Y$.

---

## 11. Applicazioni reali

**Fisica e ingegneria — errori di misura.** Ogni misura fisica è affetta da piccoli errori casuali (vibrazioni, precisione strumentale, arrotondamenti). Per il TCL, la somma di questi errori è normale. Il metodo dei minimi quadrati in statistica si basa sull'assunzione che i residui siano $\mathcal{N}(0, \sigma^2)$.

**Statistica inferenziale.** Test $t$ di Student, ANOVA, regressione lineare OLS — tutti assumono normalità degli errori (o si giustificano per grandi campioni via CLT). Gli intervalli di confidenza hanno la forma $\hat{\mu} \pm z_{\alpha/2} \frac{\sigma}{\sqrt{n}}$ dove $z_{\alpha/2}$ è un quantile della normale standard.

**Finanza — modello Black-Scholes.** Assume che i log-rendimenti siano normali: $\ln(S_{t+\Delta t}/S_t) \sim \mathcal{N}(\mu \Delta t, \sigma^2 \Delta t)$. Questo porta alla formula di Black-Scholes per il prezzo delle opzioni, uno dei risultati più influenti della finanza matematica.

**Neuroscienze — attività neuronale.** I potenziali d'azione nelle reti neurali biologiche seguono distribuzioni approssimativamente normali in molte condizioni sperimentali. La statistica della normale è usata per modellare i segnali EEG e fMRI.

---

## 12. Riepilogo

| Concetto | Formula |
|----------|---------|
| Densità | $f_X(x) = \frac{1}{\sigma\sqrt{2\pi}}e^{-\frac{(x-\mu)^2}{2\sigma^2}}$ |
| Parametri | $E[X] = \mu$, $\mathrm{Var}(X) = \sigma^2$ |
| Standardizzazione | $Z = \frac{X-\mu}{\sigma} \sim \mathcal{N}(0,1)$ |
| Probabilità | $P(a \leq X \leq b) = \Phi\!\left(\frac{b-\mu}{\sigma}\right) - \Phi\!\left(\frac{a-\mu}{\sigma}\right)$ |
| Simmetria CDF | $\Phi(-z) = 1 - \Phi(z)$ |
| Regola empirica | 68% / 95% / 99.7% entro 1σ / 2σ / 3σ |
| Somma di normali | $\sum X_i \sim \mathcal{N}(\sum\mu_i, \sum\sigma_i^2)$ |
| Trasformazione lineare | $aX+b \sim \mathcal{N}(a\mu+b, a^2\sigma^2)$ |

---

## Esercizi

<details>
<summary>Esercizio 1 — Applicazione diretta della regola empirica</summary>

I pesi di un lotto di oggetti prodotti da una macchina seguono una distribuzione $\mathcal{N}(500\text{ g},\; 25\text{ g}^2)$.

(a) Qual è la probabilità che un oggetto pesi tra 495 g e 505 g?

(b) Quanti oggetti su 10.000 si aspettano fuori dall'intervallo $[485, 515]$?

**Soluzione.**

$\mu = 500$ g, $\sigma = \sqrt{25} = 5$ g.

**(a)** L'intervallo $[495, 505] = [500 - 5,\; 500 + 5] = [\mu - \sigma,\; \mu + \sigma]$.

Per la regola empirica: $P(495 \leq X \leq 505) \approx 68.27\%$.

**(b)** $[485, 515] = [\mu - 3\sigma,\; \mu + 3\sigma]$. Probabilità dentro l'intervallo ≈ 99.73%.

Probabilità fuori: $1 - 0.9973 = 0.0027$. Su 10.000 oggetti: $10\,000 \times 0.0027 = \mathbf{27}$ oggetti.

</details>

<details>
<summary>Esercizio 2 — Calcolo con standardizzazione</summary>

$X \sim \mathcal{N}(100, 225)$ (cioè $\mu = 100$, $\sigma = 15$). Calcola $P(X > 130)$.

**Soluzione.**

Standardizziamo: $z = \dfrac{130 - 100}{15} = \dfrac{30}{15} = 2$.

$$P(X > 130) = P(Z > 2) = 1 - \Phi(2) = 1 - 0.9772 = \mathbf{0.0228} \approx 2.28\%$$

Cioè solo il 2.28% dei valori supera 130, coerente con la regola dei 2σ.

</details>

<details>
<summary>Esercizio 3 — Probabilità di un intervallo</summary>

I voti ad un esame seguono $\mathcal{N}(70, 100)$ ($\mu = 70$, $\sigma = 10$).

(a) $P(60 \leq X \leq 80)$ = ?

(b) $P(X > 85)$ = ?

**Soluzione.**

**(a)** $z_1 = \dfrac{60-70}{10} = -1$, $z_2 = \dfrac{80-70}{10} = 1$.

$$P(60 \leq X \leq 80) = \Phi(1) - \Phi(-1) = 0.8413 - 0.1587 = \mathbf{0.6827} \approx 68.3\%$$

Conferma la regola dell'1σ.

**(b)** $z = \dfrac{85-70}{10} = 1.5$.

$$P(X > 85) = 1 - \Phi(1.5) = 1 - 0.9332 = \mathbf{0.0668} \approx 6.7\%$$

Circa il 6.7% degli studenti supera 85.

</details>

<details>
<summary>Esercizio 4 — Trasformazione lineare</summary>

$X \sim \mathcal{N}(3, 4)$. Trova la distribuzione di $Y = 2X - 1$ e calcola $P(Y > 7)$.

**Soluzione.**

Per la stabilità delle normali: $Y = 2X - 1 \sim \mathcal{N}(2 \cdot 3 - 1,\; 2^2 \cdot 4) = \mathcal{N}(5, 16)$.

Quindi $\mu_Y = 5$, $\sigma_Y = 4$.

$P(Y > 7) = P\!\left(Z > \dfrac{7-5}{4}\right) = P(Z > 0.5) = 1 - \Phi(0.5) = 1 - 0.6915 = \mathbf{0.3085}$.

</details>

<details>
<summary>Esercizio 5 — Somma di normali indipendenti</summary>

Il tempo di attesa allo sportello A è $T_A \sim \mathcal{N}(5, 4)$ minuti e allo sportello B è $T_B \sim \mathcal{N}(8, 9)$ minuti, indipendenti. Trova la distribuzione del tempo totale $T = T_A + T_B$ e calcola $P(T \leq 15)$.

**Soluzione.**

$T = T_A + T_B \sim \mathcal{N}(5+8,\; 4+9) = \mathcal{N}(13,\; 13)$.

$\sigma_T = \sqrt{13} \approx 3.606$.

$$P(T \leq 15) = P\!\left(Z \leq \frac{15-13}{\sqrt{13}}\right) = \Phi\!\left(\frac{2}{\sqrt{13}}\right) = \Phi(0.555) \approx 0.7107$$

Circa il 71% delle volte il tempo totale è inferiore a 15 minuti.

</details>

<details>
<summary>Esercizio 6 — Quantile: trovare il valore dato la probabilità</summary>

$X \sim \mathcal{N}(50, 100)$. Trova il valore $x_0$ tale che $P(X \leq x_0) = 0.90$.

**Soluzione.**

Dobbiamo trovare $x_0$ tale che $\Phi\!\left(\dfrac{x_0 - 50}{10}\right) = 0.90$.

Dalla tavola della normale standard: $\Phi(z) = 0.90 \Rightarrow z \approx 1.282$.

Quindi: $\dfrac{x_0 - 50}{10} = 1.282 \Rightarrow x_0 = 50 + 10 \times 1.282 = \mathbf{62.82}$.

Il 90° percentile della distribuzione è $x_0 \approx 62.82$.

</details>

<details>
<summary>Esercizio 7 — Differenza di normali e applicazione reale</summary>

Il peso netto di una confezione di pasta è $X \sim \mathcal{N}(500, 9)$ g. Il peso della confezione vuota è $B \sim \mathcal{N}(30, 1)$ g, indipendente da $X$. Il peso totale è $W = X + B$.

(a) Trova la distribuzione di $W$.

(b) Una normativa impone che il peso totale non superi 540 g nel 99% dei casi. Il processo produttivo è a norma?

**Soluzione.**

**(a)** $W = X + B \sim \mathcal{N}(500+30,\; 9+1) = \mathcal{N}(530, 10)$. Quindi $\sigma_W = \sqrt{10} \approx 3.162$ g.

**(b)** Vogliamo $P(W \leq 540) \geq 0.99$.

$z = \dfrac{540-530}{\sqrt{10}} = \dfrac{10}{3.162} \approx 3.162$.

$\Phi(3.162) \approx 0.9992 > 0.99$. ✓ Il processo è a norma: meno dell'1% delle confezioni supera 540 g.

</details>
