---
id: probabilita-10-tcl
subject: probabilita
topic_it: Leggi dei grandi numeri
topic_en: Laws of large numbers
title_it: Teorema centrale del limite
title_en: Central limit theorem
level: blue
order: 10
source_book: "Blitzstein & Hwang, Introduction to Probability; MIT OCW 6.041"
source_chapter: "Cap. 9 — Teorema centrale del limite"
stato: da-rielaborare
---

## 1. Intuizione

Perché le altezze delle persone seguono una distribuzione a campana? Perché gli errori di misura hanno forma gaussiana? Perché i rendimenti finanziari aggregati mensili sembrano normali? La risposta è il **Teorema Centrale del Limite (TCL)**: uno dei risultati più profondi e sorprendenti di tutta la matematica.

Il TCL dice questo: prendi qualsiasi variabile aleatoria — con qualsiasi distribuzione, discreta o continua, asimmetrica o multimodale. Somma molte copie indipendenti di essa. La somma (opportunamente standardizzata) diventa sempre più simile a una normale, indipendentemente dalla forma originale. La distribuzione normale non è "speciale" perché Dio l'ha scelta — emerge inevitabilmente come attrattore universale delle somme di variabili i.i.d.

Immagina di lanciare $n$ dadi e sommarne i valori. Con $n=1$ ottieni la distribuzione uniforme discreta. Con $n=2$ ottieni una distribuzione triangolare. Con $n=10$ la distribuzione della somma è già quasi indistinguibile da una campana. Con $n=30$ è praticamente gaussiana.

Il TCL ha una versione quantitativa notevole: il **Teorema di Berry-Esseen** misura quanto velocemente avviene questa convergenza — e la risposta è $O(1/\sqrt{n})$. Questo permette di sapere per ogni $n$ finito quanto è buona l'approssimazione normale.

In pratica, il TCL è il motore di quasi tutta la statistica inferenziale: intervalli di confidenza, test t, test chi-quadro, regressione — tutti si basano sull'approssimazione normale fornita dal TCL.

## 2. Prerequisiti

- Variabili aleatorie, distribuzione, densità
- Valore atteso e varianza; linearità del valore atteso
- Distribuzione normale $\mathcal{N}(\mu, \sigma^2)$ e funzione $\Phi$
- Funzione caratteristica (per la dimostrazione formale)
- Legge Debole dei Grandi Numeri (lezione precedente)
- Variabili i.i.d. (indipendenti e identicamente distribuite)

## 3. Teoria

### Enunciato del TCL

**Teorema Centrale del Limite.** Siano $X_1, X_2, \ldots$ variabili aleatorie **i.i.d.** con:

$$E[X_i] = \mu, \qquad \text{Var}(X_i) = \sigma^2 \in (0, \infty)$$

Sia $S_n = X_1 + \cdots + X_n$ la somma e $\bar{X}_n = S_n/n$ la media campionaria. La somma **standardizzata**:

$$Z_n = \frac{S_n - n\mu}{\sigma\sqrt{n}} = \frac{\bar{X}_n - \mu}{\sigma/\sqrt{n}}$$

converge in distribuzione alla normale standard:

$$Z_n \xrightarrow{d} \mathcal{N}(0,1)$$

**Cosa significa "converge in distribuzione":** per ogni $z \in \mathbb{R}$:

$$\lim_{n \to \infty} P(Z_n \leq z) = \Phi(z) = \int_{-\infty}^z \frac{1}{\sqrt{2\pi}} e^{-t^2/2} \, dt$$

**Forma pratica del TCL.** Per $n$ sufficientemente grande:

$$\bar{X}_n \approx \mathcal{N}\!\left(\mu, \frac{\sigma^2}{n}\right), \qquad S_n \approx \mathcal{N}(n\mu, n\sigma^2)$$

---

### Approssimazione normale della binomiale

Se $X \sim \text{Bin}(n, p)$, possiamo scrivere $X = X_1 + \cdots + X_n$ con $X_i \sim \text{Bernoulli}(p)$ i.i.d.

Poiché $E[X_i] = p$ e $\text{Var}(X_i) = p(1-p)$, il TCL dà:

$$\frac{X - np}{\sqrt{np(1-p)}} \xrightarrow{d} \mathcal{N}(0,1)$$

**Regola pratica:** l'approssimazione è accurata quando $np \geq 5$ e $n(1-p) \geq 5$.

**Correzione di continuità.** Poiché $X$ è discreta ma la normale è continua, si migliora l'approssimazione aggiungendo $\pm 0.5$:

$$P(X \leq k) \approx \Phi\!\left(\frac{k + 0.5 - np}{\sqrt{np(1-p)}}\right)$$

$$P(X \geq k) \approx 1 - \Phi\!\left(\frac{k - 0.5 - np}{\sqrt{np(1-p)}}\right)$$

$$P(a \leq X \leq b) \approx \Phi\!\left(\frac{b + 0.5 - np}{\sqrt{np(1-p)}}\right) - \Phi\!\left(\frac{a - 0.5 - np}{\sqrt{np(1-p)}}\right)$$

---

### Funzioni caratteristiche e dimostrazione (traccia)

La **funzione caratteristica** di $X$ è $\varphi_X(t) = E[e^{itX}]$, con $i = \sqrt{-1}$.

Proprietà chiave:
- $\varphi_{X+Y}(t) = \varphi_X(t) \cdot \varphi_Y(t)$ se $X, Y$ indipendenti
- La funzione caratteristica determina univocamente la distribuzione
- La convergenza puntuale di $\varphi_{X_n}(t) \to \varphi_X(t)$ implica $X_n \xrightarrow{d} X$

**Sketch della dimostrazione TCL:**

1. Standardizziamo: $Y_i = (X_i - \mu)/\sigma$. Allora $E[Y_i] = 0$, $E[Y_i^2] = 1$.
2. $Z_n = \frac{1}{\sqrt{n}} \sum_{i=1}^n Y_i$, con funzione caratteristica $\varphi_{Z_n}(t) = \left[\varphi_Y\!\left(\frac{t}{\sqrt{n}}\right)\right]^n$.
3. Espansione di Taylor di $\varphi_Y$ intorno a 0:
$$\varphi_Y(s) = 1 + is \cdot E[Y] - \frac{s^2}{2} E[Y^2] + O(s^3) = 1 - \frac{s^2}{2} + O(s^3)$$
4. Sostituendo $s = t/\sqrt{n}$:
$$\varphi_{Z_n}(t) = \left[1 - \frac{t^2}{2n} + O(n^{-3/2})\right]^n \to e^{-t^2/2}$$
5. $e^{-t^2/2}$ è la funzione caratteristica di $\mathcal{N}(0,1)$. $\square$

---

### Teorema di Berry-Esseen

**Teorema (Berry-Esseen).** Sotto le ipotesi del TCL, con la condizione aggiuntiva $E[\lvert X_i - \mu \rvert^3] = \rho < \infty$:

$$\sup_z \left| P(Z_n \leq z) - \Phi(z) \right| \leq \frac{C \rho}{\sigma^3 \sqrt{n}}$$

dove $C \leq 0.4748$ (costante universale, il valore esatto è ancora oggetto di ricerca).

**Interpretazione:** l'errore massimo nell'approssimazione normale è proporzionale al terzo momento assoluto centrato diviso per $\sigma^3 \sqrt{n}$. Quindi:
- L'errore va a zero come $1/\sqrt{n}$
- Distribuzioni più simmetriche e con code più leggere hanno convergenza più rapida
- Distribuzioni molto asimmetriche o con code pesanti (grande $\rho/\sigma^3$) convergono più lentamente

**Esempio.** Per Bernoulli($p$): $\rho = p(1-p)\lvert 1-2p \rvert$, $\sigma^3 = [p(1-p)]^{3/2}$. L'errore è $O(1/\sqrt{n})$ con costante che peggiora per $p$ vicino a 0 o 1.

## 4. Derivazioni

### Derivazione della varianza di $Z_n$

$E[Z_n] = \frac{E[S_n] - n\mu}{\sigma\sqrt{n}} = \frac{n\mu - n\mu}{\sigma\sqrt{n}} = 0$ ✓

$\text{Var}(Z_n) = \frac{\text{Var}(S_n)}{\sigma^2 n} = \frac{n\sigma^2}{\sigma^2 n} = 1$ ✓

Quindi $Z_n$ ha sempre media 0 e varianza 1, qualunque sia $n$. Il TCL dice che la **forma** della distribuzione converge alla normale, non solo media e varianza.

### Perché la forma converge alla normale

Intuitivamente: la somma di $n$ variabili i.i.d. include effetti "indipendenti e piccoli" (ognuna contribuisce $1/\sqrt{n}$ dell'effetto totale). La normale emerge come l'unica distribuzione stabile rispetto a questa operazione di somma e normalizzazione — è il punto fisso della trasformazione "somma di $n$ copie, normalizza".

Formalmente: la normale è l'unico attrattore stabile per somme di variabili con varianza finita nella topologia della convergenza in distribuzione.

## 5. Esempi

**Esempio 1 (TCL base — lanci di dado).** Si lanciano 36 dadi. Calcolare approssimativamente $P(S_{36} \geq 140)$.

Per un dado: $\mu = 3.5$, $\sigma^2 = 35/12 \approx 2.917$.

$S_{36} \approx \mathcal{N}(36 \times 3.5,\; 36 \times 35/12) = \mathcal{N}(126, 105)$.

$\sigma_S = \sqrt{105} \approx 10.25$.

$$P(S_{36} \geq 140) \approx 1 - \Phi\!\left(\frac{140 - 126}{10.25}\right) = 1 - \Phi(1.366) \approx 1 - 0.914 = 8.6\%$$

**Esempio 2 (TCL — monete).** 400 lanci di moneta equilibrata. $P(180 \leq X \leq 220)$?

$X \sim \text{Bin}(400, 0.5)$: $\mu = 200$, $\sigma = \sqrt{400 \times 0.5 \times 0.5} = 10$.

$$P(180 \leq X \leq 220) = P\!\left(\frac{180-200}{10} \leq Z \leq \frac{220-200}{10}\right) = P(-2 \leq Z \leq 2) = 2\Phi(2) - 1 \approx 95.4\%$$

**Esempio 3 (correzione di continuità).** $X \sim \text{Bin}(100, 0.4)$. Calcolare $P(X \leq 35)$ con correzione di continuità.

$\mu = 40$, $\sigma = \sqrt{100 \times 0.4 \times 0.6} = \sqrt{24} \approx 4.899$.

$$P(X \leq 35) \approx \Phi\!\left(\frac{35.5 - 40}{4.899}\right) = \Phi(-0.918) \approx 0.179 = 17.9\%$$

Senza correzione: $\Phi\!\left(\frac{35-40}{4.899}\right) = \Phi(-1.021) \approx 15.4\%$. La correzione di continuità dà un risultato più accurato.

**Esempio 4 (somma VA generiche).** $X_1, \ldots, X_{100}$ i.i.d. con $E[X_i] = 2$, $\text{Var}(X_i) = 9$. Calcolare $P(S_{100} \geq 225)$.

$E[S_{100}] = 200$, $\text{Var}(S_{100}) = 900$, $\sigma_S = 30$.

$$P(S_{100} \geq 225) \approx 1 - \Phi\!\left(\frac{225-200}{30}\right) = 1 - \Phi(0.833) \approx 1 - 0.7977 \approx 20.2\%$$

**Esempio 5 (componenti difettosi).** Una fabbrica produce pezzi difettosi con $p = 5\%$. Su 200 pezzi, $P(X > 15)$?

$\mu = 10$, $\sigma = \sqrt{200 \times 0.05 \times 0.95} \approx 3.082$.

Con correzione di continuità ($X > 15$ diventa $X \geq 15.5$):

$$P(X > 15) \approx 1 - \Phi\!\left(\frac{15.5-10}{3.082}\right) = 1 - \Phi(1.785) \approx 1 - 0.963 \approx 3.7\%$$

**Esempio 6 (Berry-Esseen applicata).** Per $X_i \sim \text{Bernoulli}(0.5)$: $\mu = 0.5$, $\sigma^2 = 0.25$, $\rho = E[\lvert X-0.5 \rvert^3] = 0.5 \times 0.125 + 0.5 \times 0.125 = 0.125$.

Errore Berry-Esseen: $\leq 0.4748 \times 0.125 / (0.125 \sqrt{n}) = 0.4748/\sqrt{n}$.

Con $n = 100$: errore $\leq 0.0475$ — l'approssimazione è buona al $5\%$.

**Esempio 7 (intervallo di confidenza).** $X_1, \ldots, X_n$ i.i.d. con $\mu$ e $\sigma^2$ noti. Costruire un intervallo che contenga $\mu$ al 95%.

Per il TCL: $Z_n = (\bar{X}_n - \mu)/(\sigma/\sqrt{n}) \approx \mathcal{N}(0,1)$.

$P(-1.96 \leq Z_n \leq 1.96) \approx 0.95$, quindi:

$$P\!\left(\bar{X}_n - 1.96\frac{\sigma}{\sqrt{n}} \leq \mu \leq \bar{X}_n + 1.96\frac{\sigma}{\sqrt{n}}\right) \approx 95\%$$

L'intervallo di confidenza al 95% è $\bar{X}_n \pm 1.96 \sigma/\sqrt{n}$.

## 6. Grafico

```plot
{"fn":"Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)","domain":[-4,4],"yDomain":[0,0.45],"title":"Distribuzione limite del TCL: N(0,1)","label1":"φ(z)"}
```

## 7. Interattivo

```slider
{"fn":"Math.exp(-x*x/(2*(1/n)))/(Math.sqrt(2*Math.PI*(1/n)))","domain":[-3,3],"yDomain":[0,2.5],"params":[{"name":"n","min":1,"max":50,"step":1,"default":1}],"title":"Convergenza TCL: densità di X̄_n al crescere di n (μ=0, σ²=1)"}
```

## 8. Errori comuni

**Errore 1: applicare il TCL con $n$ troppo piccolo.** Il TCL è un risultato asintotico ($n \to \infty$). Per distribuzioni simmetriche basta $n \geq 20$-$30$, ma per distribuzioni molto asimmetriche o con code pesanti può servire $n > 100$. Non esiste una soglia universale magica.

**Errore 2: dimenticare di standardizzare.** Il TCL dice che $Z_n = (\bar{X}_n - \mu)/(\sigma/\sqrt{n})$ è circa normale standard $\mathcal{N}(0,1)$. La media campionaria $\bar{X}_n$ da sola ha distribuzione $\mathcal{N}(\mu, \sigma^2/n)$, non $\mathcal{N}(0,1)$. Bisogna sottrarre la media e dividere per l'errore standard.

**Errore 3: omettere la correzione di continuità per variabili discrete.** Quando si approssima una distribuzione discreta (binomiale, Poisson) con la normale, la correzione di continuità $\pm 0.5$ può migliorare l'accuratezza dal 5-10% al 1-2%. Dimenticarla porta a errori sistematici.

**Errore 4: usare il TCL senza indipendenza.** Il TCL classico richiede variabili i.i.d. (o almeno debolmente dipendenti). Se le $X_i$ sono fortemente correlate (es. dati di serie storiche), la convergenza alla normale può non avvenire o avvenire a velocità diversa.

**Errore 5: confondere convergenza in distribuzione con convergenza quasi certa.** $Z_n \xrightarrow{d} \mathcal{N}(0,1)$ non significa che ogni realizzazione di $Z_n$ si avvicini a un valore normale fissato. La convergenza in distribuzione è la convergenza delle CDF, non delle realizzazioni.

**Errore 6: applicare il TCL quando la varianza è infinita.** Se $\text{Var}(X_i) = \infty$ (es. distribuzione di Cauchy o Pareto con esponente $\leq 2$), il TCL classico non vale. Esistono versioni generalizzate (teorema del limite centrale generalizzato) che portano a distribuzioni stabili di Lévy, non alla normale.

**Errore 7: non verificare le condizioni di Berry-Esseen.** Berry-Esseen richiede il terzo momento finito. Se le variabili hanno code molto pesanti ($E[\lvert X \rvert^3] = \infty$), il limite $O(1/\sqrt{n})$ non vale e l'approssimazione può essere pessima anche per $n$ grande.

## 9. Applicazioni reali

**Statistica inferenziale.** Il TCL è il motore degli intervalli di confidenza e dei test di ipotesi classici. Il test $t$ di Student, l'intervallo di confidenza per la media, il test chi-quadro — tutti sfruttano il fatto che statistiche campionarie standardizzate sono approssimativamente normali per $n$ grande.

**Ingegneria e controllo qualità.** Le carte di controllo Shewhart (usate nel controllo di processo) si basano sul TCL: i limiti di controllo a $\pm 3\sigma$ dal centro sfruttano la convergenza della media campionaria alla normale per individuare processi fuori controllo.

**Finanza — Value at Risk.** I modelli di rischio finanziario aggregano migliaia di piccole variazioni di prezzo. Il TCL giustifica l'approssimazione normale per rendimenti aggregati su brevi finestre temporali, usata nei modelli VaR per stimare le perdite massime attese.

**Machine learning e ottimizzazione stocastica.** L'algoritmo SGD (Stochastic Gradient Descent) somma gradienti su mini-batch. Per mini-batch grandi, la distribuzione del gradiente è approssimativamente normale per il TCL, il che ha implicazioni per le garanzie di convergenza e la scelta del learning rate.

## 10. Riepilogo

| Concetto | Formula | Note |
| --- | --- | --- |
| TCL — standardizzazione | $Z_n = (S_n - n\mu)/(\sigma\sqrt{n})$ | $Z_n \xrightarrow{d} \mathcal{N}(0,1)$ |
| Forma pratica | $\bar{X}_n \approx \mathcal{N}(\mu, \sigma^2/n)$ | Per $n$ "grande" |
| Somma appross. | $S_n \approx \mathcal{N}(n\mu, n\sigma^2)$ | Stessa informazione |
| Appross. binomiale | $(X - np)/\sqrt{np(1-p)} \approx \mathcal{N}(0,1)$ | Se $np \geq 5$, $n(1-p) \geq 5$ |
| Correzione continuità | $P(X \leq k) \approx \Phi((k+0.5-np)/\sigma)$ | Per VA discrete |
| Berry-Esseen | $\sup_z \lvert P(Z_n \leq z) - \Phi(z) \rvert \leq C\rho/(\sigma^3\sqrt{n})$ | Velocità $O(1/\sqrt{n})$ |
| IC al 95% | $\bar{X}_n \pm 1.96\,\sigma/\sqrt{n}$ | Dal TCL + $z_{0.975} = 1.96$ |

## 11. Esercizi

<details>
<summary>Esercizio 1: TCL — tempo di produzione</summary>

Una macchina produce pezzi con tempo medio 5 minuti e deviazione standard 1.5 minuti. Calcolare la probabilità che 100 pezzi richiedano in totale più di 520 minuti.

**Soluzione.**

$S_{100}$ = tempo totale. $E[S_{100}] = 500$, $\text{Var}(S_{100}) = 100 \times 2.25 = 225$, $\sigma_S = 15$.

$$P(S_{100} > 520) \approx 1 - \Phi\!\left(\frac{520-500}{15}\right) = 1 - \Phi(1.333) \approx 1 - 0.9088 \approx 9.1\%$$

</details>

<details>
<summary>Esercizio 2: approssimazione binomiale</summary>

Un quiz ha 200 domande vero/falso. Rispondendo a caso, qual è la probabilità di ottenere almeno 115 risposte corrette?

**Soluzione.**

$X \sim \text{Bin}(200, 0.5)$: $\mu = 100$, $\sigma = \sqrt{50} \approx 7.071$.

Con correzione di continuità ($X \geq 115$ diventa $X \geq 114.5$):

$$P(X \geq 115) \approx 1 - \Phi\!\left(\frac{114.5-100}{7.071}\right) = 1 - \Phi(2.051) \approx 1 - 0.9799 \approx 2\%$$

</details>

<details>
<summary>Esercizio 3: TCL — somma di esponenziali</summary>

$X_1, \ldots, X_{50}$ i.i.d. con distribuzione Esponenziale di parametro $\lambda = 1$ (quindi $\mu = 1$, $\sigma^2 = 1$). Calcolare $P(S_{50} \leq 45)$.

**Soluzione.**

$S_{50} \approx \mathcal{N}(50, 50)$, $\sigma_S = \sqrt{50} \approx 7.071$.

$$P(S_{50} \leq 45) \approx \Phi\!\left(\frac{45-50}{7.071}\right) = \Phi(-0.707) \approx 0.240 = 24\%$$

</details>

<details>
<summary>Esercizio 4: intervallo di confidenza al 99%</summary>

Un campione di $n = 64$ osservazioni dà $\bar{X} = 12.5$. Si sa che $\sigma = 4$. Costruire un intervallo di confidenza al 99% per $\mu$.

**Soluzione.**

Per il 99%, $z_{0.995} = 2.576$.

Errore standard: $\sigma/\sqrt{n} = 4/8 = 0.5$.

$$IC_{99\%}: \bar{X} \pm 2.576 \times 0.5 = 12.5 \pm 1.288 = [11.21,\; 13.79]$$

</details>

<details>
<summary>Esercizio 5: Berry-Esseen — Bernoulli</summary>

Per $X_i \sim \text{Bernoulli}(0.1)$, stimare l'errore massimo dell'approssimazione normale con $n = 100$.

**Soluzione.**

$\mu = 0.1$, $\sigma^2 = 0.09$, $\sigma = 0.3$.

$\rho = E[\lvert X - 0.1 \rvert^3] = 0.9 \times (0.1)^3 + 0.1 \times (0.9)^3 = 0.9 \times 0.001 + 0.1 \times 0.729 = 0.0009 + 0.0729 = 0.0738$.

Errore Berry-Esseen: $\leq \frac{0.4748 \times 0.0738}{(0.3)^3 \times \sqrt{100}} = \frac{0.03504}{0.027 \times 10} = \frac{0.03504}{0.27} \approx 0.13$.

Errore fino al 13% — la convergenza è lenta perché $p = 0.1$ è molto asimmetrico.

</details>

<details>
<summary>Esercizio 6: sondaggio politico</summary>

Un candidato ha il 52% dei consensi nella popolazione. Quante persone bisogna intervistare perché la proporzione campionaria sia nel range $[0.48, 0.56]$ con probabilità almeno 95%?

**Soluzione.**

$\hat{p} \approx \mathcal{N}(p, p(1-p)/n)$ con $p = 0.52$.

$\text{Var}(\hat{p}) = 0.52 \times 0.48/n = 0.2496/n$.

$P(\lvert \hat{p} - 0.52 \rvert \leq 0.04) \geq 0.95$: serve $0.04/(\sqrt{0.2496/n}) \geq 1.96$.

$$\frac{0.04}{\sqrt{0.2496/n}} \geq 1.96 \implies \sqrt{n} \geq \frac{1.96 \sqrt{0.2496}}{0.04} = \frac{1.96 \times 0.4996}{0.04} = 24.48$$

$n \geq 599$. Servono almeno 599 intervistati.

</details>

<details>
<summary>Esercizio 7: CLT per Poisson</summary>

$X \sim \text{Poisson}(100)$. Approssimare $P(90 \leq X \leq 110)$.

**Soluzione.**

Per Poisson($\lambda$): $\mu = \lambda = 100$, $\sigma = \sqrt{\lambda} = 10$.

Con correzione di continuità:

$$P(90 \leq X \leq 110) \approx \Phi\!\left(\frac{110.5-100}{10}\right) - \Phi\!\left(\frac{89.5-100}{10}\right) = \Phi(1.05) - \Phi(-1.05)$$

$= 2\Phi(1.05) - 1 \approx 2 \times 0.8531 - 1 \approx 70.6\%$

</details>
