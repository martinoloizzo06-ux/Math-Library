---
id: probabilita-14-dist-continue
subject: probabilita
topic_it: Variabili aleatorie
topic_en: Random variables
title_it: Distribuzioni continue notevoli
title_en: Common continuous distributions
level: blue
order: 14
source_book: "Blitzstein & Hwang, Introduction to Probability; MIT OCW 6.041"
source_chapter: "Cap. 5–6 — Distribuzioni continue"
---

## 1. Intuizione

La distribuzione normale è la più famosa, ma il mondo probabilistico è ricco di altre famiglie di distribuzioni continue, ciascuna nata per modellare fenomeni specifici.

Pensa al tempo di attesa prima di un guasto: non può essere negativo, è continuo, e i guasti brevi sono più probabili di quelli lunghissimi. Questo è il dominio della distribuzione **Esponenziale** (e della sua generalizzazione, la **Gamma**). Pensa invece a una proporzione — come la frequenza di successo in un esperimento — che vive tra 0 e 1: ecco la distribuzione **Beta**. Quando vuoi costruire test statistici per confrontare varianze o medie di campioni piccoli, entrai nel territorio di **Chi-quadro**, **t di Student** e **F di Fisher**.

Queste distribuzioni non sono capricci matematici: sono legate tra loro da relazioni profonde. La Chi-quadro è una Gamma speciale; la t di Student nasce dal rapporto tra una normale e una radice di Chi-quadro; la F è il rapporto di due Chi-quadro normalizzate. Comprendere questa rete di relazioni ti permette di muoverti fluidamente nella statistica inferenziale.

Un punto chiave: molte di queste distribuzioni dipendono da **parametri** che ne cambiano la forma, la posizione e la concentrazione. Imparare a riconoscere quale distribuzione usare in quale contesto è una competenza fondamentale per ogni statistico.

## 2. Prerequisiti

- Distribuzione normale $\mathcal{N}(\mu, \sigma^2)$ (lezione 06-distribuzione-normale)
- Funzione Gamma: $\Gamma(n) = (n-1)!$ per $n$ intero, $\Gamma(1/2) = \sqrt{\pi}$
- Valore atteso e varianza (lezione 03-valore-atteso)
- Nozioni di base di test di ipotesi (per contestualizzare t e F)
- Integrali impropri (per verificare che le densità integrino a 1)

## 3. Teoria

### Distribuzione Uniforme $\text{Unif}(a,b)$

La più semplice distribuzione continua: probabilità costante su un intervallo.

$$f_X(x) = \frac{1}{b-a}, \quad a \leq x \leq b; \qquad 0 \text{ altrove}$$

$$E[X] = \frac{a+b}{2}, \qquad \text{Var}(X) = \frac{(b-a)^2}{12}$$

La CDF è lineare: $F_X(x) = \dfrac{x-a}{b-a}$ per $x \in [a,b]$.

**Uso principale:** modellare ignoranza completa su un intervallo; generazione di numeri casuali (tutti i generatori si basano sull'Uniforme).

### Distribuzione Esponenziale $\text{Exp}(\lambda)$

Modella il tempo di attesa tra eventi in un processo di Poisson con tasso $\lambda$.

$$f_X(x) = \lambda e^{-\lambda x}, \quad x \geq 0$$

$$E[X] = \frac{1}{\lambda}, \qquad \text{Var}(X) = \frac{1}{\lambda^2}$$

La CDF è: $F_X(x) = 1 - e^{-\lambda x}$.

**Proprietà fondamentale — assenza di memoria:**

$$P(X > s+t \mid X > s) = P(X > t) \quad \text{per ogni } s,t \geq 0$$

Questo significa che l'attesa passata non influenza l'attesa futura: è la versione continua della geometrica. Un componente elettronico con vita esponenziale è "sempre nuovo".

### Distribuzione Gamma $\text{Gamma}(\alpha, \beta)$

Generalizzazione dell'Esponenziale: $\alpha$ controllo la **forma** (shape), $\beta$ il **tasso** (rate).

$$f_X(x) = \frac{\beta^\alpha x^{\alpha-1} e^{-\beta x}}{\Gamma(\alpha)}, \quad x > 0$$

dove $\Gamma(\alpha) = \int_0^\infty t^{\alpha-1} e^{-t}\,dt$ è la funzione Gamma.

$$E[X] = \frac{\alpha}{\beta}, \qquad \text{Var}(X) = \frac{\alpha}{\beta^2}$$

**Casi speciali importanti:**
- $\text{Gamma}(1, \beta) = \text{Exp}(\beta)$
- $\text{Gamma}(n, \beta)$ = somma di $n$ variabili $\text{Exp}(\beta)$ indipendenti
- $\text{Gamma}(n/2, 1/2) = \chi^2(n)$

**Uso:** tempi di attesa cumulativi, durate di processi, inferenza bayesiana.

### Distribuzione Beta $\text{Beta}(\alpha, \beta)$

Distribuzione su $[0,1]$, flessibilissima per modellare proporzioni e probabilità.

$$f_X(x) = \frac{x^{\alpha-1}(1-x)^{\beta-1}}{B(\alpha,\beta)}, \quad 0 \leq x \leq 1$$

dove la **funzione Beta** è $B(\alpha,\beta) = \dfrac{\Gamma(\alpha)\Gamma(\beta)}{\Gamma(\alpha+\beta)}$.

$$E[X] = \frac{\alpha}{\alpha+\beta}, \qquad \text{Var}(X) = \frac{\alpha\beta}{(\alpha+\beta)^2(\alpha+\beta+1)}$$

**Forme particolari al variare dei parametri:**

| $\alpha, \beta$ | Forma della densità |
| --- | --- |
| $\alpha = \beta = 1$ | Uniforme su $[0,1]$ |
| $\alpha = \beta > 1$ | Campana simmetrica in 0.5 |
| $\alpha < 1, \beta < 1$ | Forma a U (concentrata agli estremi) |
| $\alpha > 1, \beta < 1$ | Asimmetrica verso 1 |
| $\alpha < 1, \beta > 1$ | Asimmetrica verso 0 |

**Uso principale:** prior coniugato per la proporzione in un modello Binomiale (inferenza bayesiana). Se $X \sim \text{Beta}(\alpha,\beta)$ è il prior sulla probabilità di successo $p$, e si osservano $k$ successi su $n$ prove, il posterior è $\text{Beta}(\alpha+k, \beta+n-k)$.

### Distribuzione Chi-quadro $\chi^2(n)$

Definita come somma di quadrati di normali standard indipendenti:

$$X = Z_1^2 + Z_2^2 + \cdots + Z_n^2, \qquad Z_i \sim \mathcal{N}(0,1) \text{ i.i.d.}$$

dove $n$ è il numero di **gradi di libertà**.

$$E[X] = n, \qquad \text{Var}(X) = 2n$$

La densità è quella di una $\text{Gamma}(n/2, 1/2)$:

$$f_X(x) = \frac{x^{n/2-1} e^{-x/2}}{2^{n/2} \Gamma(n/2)}, \quad x > 0$$

Per $n$ grande: $\chi^2(n) \approx \mathcal{N}(n, 2n)$.

**Uso principale:** test di bontà di adattamento ($\chi^2$ di Pearson), intervalli di confidenza per la varianza di una popolazione normale, test di indipendenza nelle tabelle di contingenza.

### Distribuzione t di Student $t(n)$

Nasce quando si stima la media di una popolazione normale con varianza ignota.

**Definizione costruttiva:** se $Z \sim \mathcal{N}(0,1)$ e $X \sim \chi^2(n)$ indipendenti:

$$T = \frac{Z}{\sqrt{X/n}} \sim t(n)$$

$$E[T] = 0 \; (n > 1), \qquad \text{Var}(T) = \frac{n}{n-2} \; (n > 2)$$

**Densità:**

$$f_T(t) = \frac{\Gamma\!\left(\frac{n+1}{2}\right)}{\sqrt{n\pi}\,\Gamma\!\left(\frac{n}{2}\right)} \left(1 + \frac{t^2}{n}\right)^{-\frac{n+1}{2}}$$

**Proprietà chiave:**
- Code più pesanti della normale (più probabilità agli estremi)
- Per $n \to \infty$: $t(n) \to \mathcal{N}(0,1)$
- Per $n = 1$: distribuzione di Cauchy (senza media!)
- **Uso:** test $t$ di Student per confrontare medie con varianza ignota; intervalli di confidenza per $\mu$ con campioni piccoli

### Distribuzione F di Fisher-Snedecor $F(m,n)$

Rapporto di due Chi-quadro normalizzate:

$$F = \frac{X_1/m}{X_2/n}, \qquad X_1 \sim \chi^2(m),\; X_2 \sim \chi^2(n) \text{ indipendenti}$$

$$E[F] = \frac{n}{n-2} \; (n > 2), \qquad \text{Var}(F) = \frac{2n^2(m+n-2)}{m(n-2)^2(n-4)} \; (n > 4)$$

**Uso principale:** test di uguaglianza di varianze ($H_0: \sigma_1^2 = \sigma_2^2$) e analisi della varianza (ANOVA). In ANOVA, la statistica $F$ è il rapporto tra varianza tra i gruppi e varianza entro i gruppi.

## 4. Derivazioni

### Valor medio della Gamma

$$E[X] = \int_0^\infty x \cdot \frac{\beta^\alpha x^{\alpha-1} e^{-\beta x}}{\Gamma(\alpha)}\,dx = \frac{\beta^\alpha}{\Gamma(\alpha)} \int_0^\infty x^\alpha e^{-\beta x}\,dx$$

Con la sostituzione $u = \beta x$, $du = \beta\,dx$:

$$= \frac{\beta^\alpha}{\Gamma(\alpha)} \cdot \frac{1}{\beta^{\alpha+1}} \int_0^\infty u^\alpha e^{-u}\,du = \frac{1}{\beta} \cdot \frac{\Gamma(\alpha+1)}{\Gamma(\alpha)} = \frac{\alpha}{\beta}$$

poiché $\Gamma(\alpha+1) = \alpha\,\Gamma(\alpha)$.

### Media della Beta

$$E[X] = \int_0^1 x \cdot \frac{x^{\alpha-1}(1-x)^{\beta-1}}{B(\alpha,\beta)}\,dx = \frac{1}{B(\alpha,\beta)} \int_0^1 x^\alpha (1-x)^{\beta-1}\,dx$$

Il nuovo integrale è $B(\alpha+1, \beta)$:

$$E[X] = \frac{B(\alpha+1,\beta)}{B(\alpha,\beta)} = \frac{\Gamma(\alpha+1)\Gamma(\beta)/\Gamma(\alpha+\beta+1)}{\Gamma(\alpha)\Gamma(\beta)/\Gamma(\alpha+\beta)} = \frac{\alpha\Gamma(\alpha)}{\Gamma(\alpha)} \cdot \frac{\Gamma(\alpha+\beta)}{\Gamma(\alpha+\beta+1)} = \frac{\alpha}{\alpha+\beta}$$

### Proprietà della mancanza di memoria dell'Esponenziale

$$P(X > s+t \mid X > s) = \frac{P(X > s+t)}{P(X > s)} = \frac{e^{-\lambda(s+t)}}{e^{-\lambda s}} = e^{-\lambda t} = P(X > t)$$

La CDF "resetta" ogni volta: il processo non ricorda il passato. È l'unica distribuzione continua con questa proprietà.

### Perché la varianza della t(n) cresce al diminuire di n

La varianza $n/(n-2)$ tende a $+\infty$ per $n \to 2^+$ e non esiste per $n \leq 2$. Questo riflette le code sempre più pesanti: per $n$ piccolo c'è molta probabilità lontano da zero. Per $n = 1$ (Cauchy) neanche il valor medio esiste.

## 5. Esempi

**Esempio 1 — Esponenziale: tempo di attesa**

Un call center riceve una chiamata ogni 5 minuti in media. Il tempo di attesa $X \sim \text{Exp}(1/5)$ (tasso $\lambda = 1/5$).

$P(X > 10) = e^{-10/5} = e^{-2} \approx 0.135$.

$P(5 < X < 15) = e^{-1} - e^{-3} \approx 0.368 - 0.050 = 0.318$.

---

**Esempio 2 — Assenza di memoria**

Un componente ha vita $\sim \text{Exp}(\lambda)$. Dato che ha già funzionato 100 ore, qual è la probabilità che duri altre 50 ore?

Per la proprietà di assenza di memoria: $P(X > 150 \mid X > 100) = P(X > 50) = e^{-50\lambda}$.

La risposta è la stessa di un componente nuovo. Un componente esponenziale non "invecchia".

---

**Esempio 3 — Gamma come somma di esponenziali**

$X_1, X_2, X_3 \sim \text{Exp}(2)$ i.i.d. (tempo di servizio di tre clienti, tasso 2 clienti/ora).

$S = X_1 + X_2 + X_3 \sim \text{Gamma}(3, 2)$.

$E[S] = 3/2 = 1.5$ ore, $\text{Var}(S) = 3/4$.

---

**Esempio 4 — Beta come prior bayesiano**

Prima di un esperimento, si crede che la probabilità $p$ di successo sia vicina a $0.5$, con incertezza. Si sceglie $p \sim \text{Beta}(5,5)$: $E[p] = 0.5$, $\text{Var}(p) = 25/(100 \cdot 11) \approx 0.023$.

Si osservano $k=7$ successi su $n=10$ prove. Il posterior è $\text{Beta}(5+7, 5+3) = \text{Beta}(12, 8)$.

$E[p \mid \text{dati}] = 12/20 = 0.6$. Il prior "tira" la stima verso 0.5.

---

**Esempio 5 — Chi-quadro: test di varianza**

Campione di $n=25$ osservazioni da $\mathcal{N}(\mu, \sigma^2)$. La varianza campionaria è $S^2 = 4.2$.

La statistica $\chi^2 = \dfrac{(n-1)S^2}{\sigma_0^2} = \dfrac{24 \cdot 4.2}{4} = 25.2$ segue $\chi^2(24)$ sotto $H_0: \sigma^2 = 4$.

Dalla tavola: $\chi^2_{0.95}(24) = 36.4 > 25.2$. Non si rifiuta $H_0$.

---

**Esempio 6 — t di Student: intervallo di confidenza**

Campione di $n=16$ misurazioni: $\bar{X} = 23.5$, $S = 2.4$.

Intervallo di confidenza al 95% per $\mu$:

$\bar{X} \pm t_{0.025}(15) \cdot \dfrac{S}{\sqrt{n}} = 23.5 \pm 2.131 \cdot \dfrac{2.4}{4} = 23.5 \pm 1.279$.

IC: $(22.22, 24.78)$.

Con la normale si userebbe $z_{0.025} = 1.96$: la $t$ dà un intervallo più largo per tenere conto dell'incertezza su $\sigma$.

---

**Esempio 7 — F di Fisher: confronto di varianze**

Due gruppi: gruppo A ($n_A = 11$, $S_A^2 = 15$) e gruppo B ($n_B = 16$, $S_B^2 = 8$).

$F = S_A^2 / S_B^2 = 15/8 = 1.875$ con $(10, 15)$ gradi di libertà.

Dalla tavola: $F_{0.05}(10, 15) = 2.54 > 1.875$. Non si rifiuta $H_0: \sigma_A^2 = \sigma_B^2$.

## 6. Grafico

```plot
{"fn":"Math.exp(-x)/1","fn2":"x > 0 ? Math.pow(x,1)*Math.exp(-x) : 0","domain":[0,6],"yDomain":[-0.05,1.1],"title":"Esponenziale(1) e Gamma(2,1)","label1":"Exp(1)","label2":"Gamma(2,1)","color":"steelblue"}
```

## 7. Interattivo

Esplora la distribuzione Gamma al variare del parametro di forma $\alpha$ (con $\beta = 1$ fisso). Per $\alpha = 1$ ottieni l'Esponenziale; aumentando $\alpha$ la distribuzione si "allontana da zero" e diventa più simmetrica.

```slider
{"fn":"alpha > 0 && x > 0 ? Math.pow(x, alpha - 1) * Math.exp(-x) / (alpha > 1 ? (alpha-1) : 1) : 0","domain":[0,12],"yDomain":[-0.05,1.1],"params":[{"name":"alpha","min":1,"max":5,"step":0.5,"default":1}],"title":"Forma della Gamma(α, 1) al variare di α"}
```

## 8. Errori comuni

**Errore 1 — Confondere i parametri della Gamma: forma vs tasso vs scala.**
La distribuzione Gamma ha due parametri. In alcuni testi si usa la **scala** $\theta = 1/\beta$ invece del tasso $\beta$: $E[X] = \alpha/\beta = \alpha\theta$. In R, `dgamma(x, shape=alpha, rate=beta)` o `dgamma(x, shape=alpha, scale=theta)`. Controllare sempre la convenzione usata: sbagliare il parametro cambia completamente i calcoli.

**Errore 2 — Usare la normale invece della t con campioni piccoli.**
Quando $\sigma^2$ è ignota e il campione è piccolo ($n < 30$), si deve usare la $t(n-1)$ e non la $\mathcal{N}(0,1)$. La $t$ ha code più pesanti e produce intervalli di confidenza più larghi, onesti sull'incertezza aggiuntiva. Con $n \geq 30$ l'approssimazione normale è accettabile.

**Errore 3 — Pensare che la Chi-quadro sia simmetrica.**
La $\chi^2(n)$ è asimmetrica a destra (skewed right): ha una coda lunga verso valori grandi. Solo per $n$ molto grande si approssima con la normale. I quantili sono diversi nei due lati: $\chi^2_{0.025}(n) \neq n - \text{qualcosa}$ e $\chi^2_{0.975}(n) \neq n + \text{stessa cosa}$.

**Errore 4 — Applicare l'assenza di memoria alla distribuzione Gamma.**
L'assenza di memoria vale solo per l'Esponenziale (che è $\text{Gamma}(1,\beta)$). Per $\alpha > 1$, la Gamma **ha memoria**: il tempo già trascorso cambia la distribuzione del tempo residuo. Un componente con vita Gamma "invecchia".

**Errore 5 — Invertire numeratore e denominatore nella F.**
$F(m,n)$ ha il Chi-quadro con $m$ gradi di libertà al numeratore e quello con $n$ al denominatore. Invertirli dà una distribuzione $F(n,m)$ diversa. Nei test statistici, la statistica $F = \text{MS}_{\text{trattamento}} / \text{MS}_{\text{errore}}$: il termine di trattamento va al numeratore.

**Errore 6 — Dimenticare che $\chi^2(n) = \text{Gamma}(n/2, 1/2)$.**
Quando si calcolano medie e varianze della Chi-quadro, si può usare direttamente la formula della Gamma: $E[\chi^2(n)] = (n/2)/(1/2) = n$ e $\text{Var}[\chi^2(n)] = (n/2)/(1/2)^2 = 2n$. Non è necessario integrare direttamente la densità della $\chi^2$.

**Errore 7 — Usare la Beta con $\alpha$ o $\beta$ negativi o zero.**
La densità Beta richiede $\alpha > 0$ e $\beta > 0$ per essere ben definita (integrabile). Con $\alpha = 0$ o $\beta = 0$ la funzione $\Gamma(0)$ diverge. Per $\alpha < 1$ o $\beta < 1$ la densità diverge agli estremi (ma rimane integrabile, quindi è valida): questo dà la forma a U.

## 9. Applicazioni reali

**Ingegneria affidabilistica — distribuzione Esponenziale e Weibull.**
Il tempo di vita dei componenti elettronici segue spesso una Esponenziale (componenti senza usura) o una distribuzione di Weibull (generalizzazione della Gamma per modellare l'invecchiamento). La scelta dipende da se il tasso di guasto è costante (Esponenziale) o crescente nel tempo (Weibull con $k > 1$).

**Inferenza bayesiana — distribuzioni Beta e Gamma come prior coniugati.**
La Beta è il prior coniugato per la Binomiale: se il prior su $p$ è $\text{Beta}(\alpha,\beta)$ e si osservano $k$ successi su $n$ prove, il posterior è $\text{Beta}(\alpha+k, \beta+n-k)$. La Gamma è il prior coniugato per il tasso di una Poisson. Queste famiglie rendono l'aggiornamento bayesiano computazionalmente trattabile.

**Statistica medica — t di Student e F in trial clinici.**
Ogni confronto tra la media del gruppo trattato e quella del gruppo controllo in un trial clinico usa la $t$ di Student (o la variante di Welch per varianze diverse). L'ANOVA per confrontare più di due gruppi usa la distribuzione F. Quasi tutta la statistica medica classica è costruita su queste distribuzioni.

**Econometria — distribuzione t e F nei modelli di regressione.**
Nella regressione lineare, i test sui coefficienti ($H_0: \beta_j = 0$) usano la $t$ con $n-k-1$ gradi di libertà. Il test F globale del modello ($H_0$: tutti i coefficienti sono zero) usa la distribuzione $F(k, n-k-1)$. Queste distribuzioni sono presenti in ogni output di regressione (p-value, F-statistic).

## 10. Riepilogo

| Distribuzione | Parametri | Media | Varianza | Uso principale |
| --- | --- | --- | --- | --- |
| Unif$(a,b)$ | $a < b$ | $(a+b)/2$ | $(b-a)^2/12$ | Ignoranza uniforme, generazione RNG |
| Exp$(\lambda)$ | $\lambda > 0$ | $1/\lambda$ | $1/\lambda^2$ | Tempi di attesa, vite senza usura |
| Gamma$(\alpha,\beta)$ | $\alpha,\beta > 0$ | $\alpha/\beta$ | $\alpha/\beta^2$ | Somme di exp., prior per Poisson |
| Beta$(\alpha,\beta)$ | $\alpha,\beta > 0$ | $\alpha/(\alpha+\beta)$ | Formula complessa | Proporzioni, prior per Binomiale |
| $\chi^2(n)$ | $n \geq 1$ (intero) | $n$ | $2n$ | Test su varianze, bontà di adattamento |
| $t(n)$ | $n \geq 1$ (intero) | $0$ (se $n>1$) | $n/(n-2)$ (se $n>2$) | Test su medie con $\sigma$ ignota |
| $F(m,n)$ | $m,n \geq 1$ | $n/(n-2)$ (se $n>2$) | Formula complessa | ANOVA, test su varianze |

## 11. Esercizi

<details>
<summary>Esercizio 1: Esponenziale e assenza di memoria</summary>

La durata di una lampadina è $X \sim \text{Exp}(1/1000)$ ore (vita media 1000 ore).

(a) Calcolare $P(X > 1500)$.  
(b) Data la lampadina già accesa per 500 ore, calcolare $P(X > 1500 \mid X > 500)$.  
(c) Calcolare il tempo mediano di vita.

**Soluzione:**

(a) $P(X > 1500) = e^{-1500/1000} = e^{-1.5} \approx 0.223$.

(b) Per assenza di memoria: $P(X > 1500 \mid X > 500) = P(X > 1000) = e^{-1} \approx 0.368$.

(c) Il mediano $m$ soddisfa $P(X > m) = 0.5$: $e^{-m/1000} = 0.5$, quindi $m = 1000 \ln 2 \approx 693$ ore. Il mediano è inferiore alla media (distribuzione asimmetrica a destra).

</details>

<details>
<summary>Esercizio 2: Gamma — somma di esponenziali</summary>

Un sistema ha 4 componenti in serie. Ogni componente ha vita $\sim \text{Exp}(3)$ (tasso 3 guasti/anno), indipendenti.

(a) Qual è la distribuzione del tempo totale prima che tutti e 4 si guastino?  
(b) Calcolare $E[S]$ e $\text{Var}(S)$.  
(c) Calcolare $P(S > 2)$.

**Soluzione:**

(a) $S = X_1+X_2+X_3+X_4 \sim \text{Gamma}(4, 3)$.

(b) $E[S] = 4/3 \approx 1.33$ anni. $\text{Var}(S) = 4/9 \approx 0.44$.

(c) Usare il fatto che $3S \sim \text{Gamma}(4,1)$, equivalente a $\chi^2(8)/2$. $P(S>2) = P(3S > 6)$. Con $W = 2\cdot 3S = 6S \sim \chi^2(8)$: $P(S>2) = P(\chi^2(8) > 12) \approx 0.151$ (dalla tavola).

</details>

<details>
<summary>Esercizio 3: Beta — inferenza bayesiana</summary>

Si vuole stimare la proporzione $p$ di difettosi in un lotto. Prior: $p \sim \text{Beta}(2,8)$ (si crede che circa il 20% siano difettosi).

(a) Calcolare $E[p]$ e $\text{Var}(p)$ a priori.  
(b) Si esaminano 20 pezzi e se ne trovano 6 difettosi. Trovare il posterior.  
(c) Calcolare $E[p \mid \text{dati}]$.

**Soluzione:**

(a) $E[p] = 2/(2+8) = 0.2$. $\text{Var}(p) = 2\cdot8/(10^2\cdot11) = 16/1100 \approx 0.0145$.

(b) Posterior: $\text{Beta}(2+6, 8+14) = \text{Beta}(8, 22)$.

(c) $E[p \mid \text{dati}] = 8/(8+22) = 8/30 \approx 0.267$.

Il posterior "bilancia" il prior (20%) con la frequenza campionaria (30%), spostando la stima verso il 26.7%. Con più dati, il prior conta sempre meno.

</details>

<details>
<summary>Esercizio 4: Chi-quadro — intervallo di confidenza per varianza</summary>

Un campione di $n=20$ misurazioni produce $S^2 = 5.8$. Assumendo popolazione normale, trovare un IC al 95% per $\sigma^2$.

**Soluzione:**

La statistica $\chi^2 = (n-1)S^2/\sigma^2 \sim \chi^2(19)$.

I quantili al 2.5% e 97.5% di $\chi^2(19)$ sono $\chi^2_{0.025}(19) = 8.907$ e $\chi^2_{0.975}(19) = 32.852$.

L'IC per $\sigma^2$ è:

$$\left(\frac{(n-1)S^2}{\chi^2_{0.975}},\ \frac{(n-1)S^2}{\chi^2_{0.025}}\right) = \left(\frac{19\cdot5.8}{32.852},\ \frac{19\cdot5.8}{8.907}\right) = (3.35,\ 12.38)$$

</details>

<details>
<summary>Esercizio 5: t di Student — test sulla media</summary>

Un campione di $n=10$ studenti ha voto medio $\bar{X} = 27.3$ e deviazione standard campionaria $S = 2.1$. Testare $H_0: \mu = 28$ contro $H_1: \mu \neq 28$ al livello $\alpha = 0.05$.

**Soluzione:**

Statistica $t = \dfrac{\bar{X} - \mu_0}{S/\sqrt{n}} = \dfrac{27.3 - 28}{2.1/\sqrt{10}} = \dfrac{-0.7}{0.664} \approx -1.054$.

Il valore critico è $t_{0.025}(9) = 2.262$.

Poiché $\lvert t \rvert = 1.054 < 2.262$, **non si rifiuta $H_0$**.

Non c'è evidenza sufficiente che la media sia diversa da 28 al livello 5%.

</details>

<details>
<summary>Esercizio 6: F di Fisher — confronto di varianze</summary>

Campione A: $n_A=21$, $S_A^2=12$. Campione B: $n_B=31$, $S_B^2=5$. Testare $H_0: \sigma_A^2 = \sigma_B^2$ al 5%.

**Soluzione:**

$F = S_A^2/S_B^2 = 12/5 = 2.4$ con gradi di libertà $(20, 30)$.

Il valore critico $F_{0.025}(20,30) \approx 2.20$ (dalla tavola a due code).

Poiché $F = 2.4 > 2.20$, **si rifiuta $H_0$**: le varianze sono significativamente diverse al 5%.

</details>

<details>
<summary>Esercizio 7: Relazioni tra distribuzioni</summary>

Siano $Z \sim \mathcal{N}(0,1)$ e $V \sim \chi^2(5)$, indipendenti. Definire $T = Z/\sqrt{V/5}$.

(a) Qual è la distribuzione di $T$?  
(b) Calcolare $E[T]$ e $\text{Var}(T)$.  
(c) Definire invece $W = Z^2/(V/5)$. Qual è la distribuzione di $W$?

**Soluzione:**

(a) $T = Z/\sqrt{V/5} \sim t(5)$ per definizione della distribuzione t di Student.

(b) $E[T] = 0$ (per $n=5 > 1$). $\text{Var}(T) = 5/(5-2) = 5/3 \approx 1.667$.

(c) $W = T^2 = Z^2/(V/5)$. Poiché $Z^2 \sim \chi^2(1)$ e $V \sim \chi^2(5)$, si ha:

$$W = \frac{Z^2/1}{V/5} \sim F(1,5)$$

Il quadrato di una t con $n$ gradi di libertà è una F con $(1,n)$ gradi di libertà.

</details>

<details>
<summary>Esercizio 8: Distribuzione Uniforme — funzione di variabile aleatoria</summary>

$U \sim \text{Unif}(0,1)$. Definire $X = -\ln(U)/\lambda$ per $\lambda > 0$.

(a) Trovare la distribuzione di $X$.  
(b) Questo risultato ha un'applicazione pratica: quale?

**Soluzione:**

(a) $P(X \leq x) = P(-\ln U/\lambda \leq x) = P(\ln U \geq -\lambda x) = P(U \geq e^{-\lambda x}) = 1 - e^{-\lambda x}$ per $x \geq 0$.

Questa è la CDF di $\text{Exp}(\lambda)$. Quindi $X \sim \text{Exp}(\lambda)$.

(b) Questo è il **metodo della trasformazione inversa** per generare variabili esponenziali: basta generare $U \sim \text{Unif}(0,1)$ (che tutti i computer sanno fare) e applicare la trasformazione $X = -\ln(U)/\lambda$ per ottenere una variabile esponenziale. Si generalizza a qualsiasi distribuzione con CDF invertibile.

</details>
