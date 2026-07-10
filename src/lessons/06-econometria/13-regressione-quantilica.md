---
id: econometria-13-quantile
subject: econometria
topic_it: Modelli non lineari
topic_en: Non-linear models
title_it: Regressione quantilica
title_en: Quantile regression
level: purple
order: 13
source_book: "J.M. Wooldridge, Introductory Econometrics; B.E. Hansen, Econometrics"
source_chapter: "Cap. — Regressione quantilica"
---

## 1. Intuizione — analogia concreta + perché si studia

Immagina di analizzare i salari in un'azienda. La regressione OLS ti dice quanto vale **in media** un anno aggiuntivo di istruzione — ad esempio, +8% per tutti. Ma questa risposta è davvero completa? Un laureato che lavora come impiegato junior riceve lo stesso vantaggio di un laureato che diventa dirigente? Quasi certamente no.

La **regressione quantilica** risponde a una domanda più ricca: come varia l'effetto di $x$ su $y$ a seconda del punto della distribuzione in cui si trova $y$? Invece di stimare un solo coefficiente per la media, stima una curva di coefficienti $\hat\beta(\tau)$ per ogni quantile $\tau \in (0,1)$.

Pensa a una distribuzione dei prezzi delle case. Le ville di lusso e i monolocali obbediscono a dinamiche diverse: la prossimità al mare alza il prezzo molto di più per le prime che per i secondi. Con OLS ottieni un effetto medio che non descrive bene nessuno dei due gruppi. Con la regressione quantilica puoi stimare l'effetto separatamente per ogni "livello di lusso" (decile, quartile, percentile).

Un altro vantaggio cruciale è la **robustezza agli outlier**. La regressione della mediana ($\tau = 0.5$) minimizza la somma degli errori in valore assoluto — anche se un singolo dato assume un valore estremo, l'effetto sulla stima è limitato. OLS invece minimizza la somma dei quadrati: un singolo outlier al quadrato può dominare l'intera stima.

La regressione quantilica è diventata uno strumento fondamentale in economia del lavoro (diseguaglianza salariale), finanza (Value at Risk), medicina (crescita pediatrica per percentili) e qualunque campo in cui l'effetto medio nasconde eterogeneità importanti.

---

## 2. Prerequisiti

- Regressione OLS: stima, residui, interpretazione dei coefficienti
- Quantili e funzioni di distribuzione cumulativa (CDF)
- Ottimizzazione numerica di base (non serve la derivazione analitica)
- Inferenza statistica: standard error, intervalli di confidenza, test $t$
- (Opzionale) Bootstrap per i standard error (vedi lezione 14)

---

## 3. Teoria

### Il quantile condizionale

Il **$\tau$-esimo quantile condizionale** di $y$ dato $\mathbf{x}$ è il valore $q$ tale che:

$$P(y \leq q \mid \mathbf{x}) = \tau$$

In altre parole: il $\tau \cdot 100\%$ degli individui con caratteristiche $\mathbf{x}$ ha $y \leq q$.

- Per $\tau = 0.5$: è la mediana condizionale.
- Per $\tau = 0.1$: il decimo percentile condizionale (il 10% più basso).
- Per $\tau = 0.9$: il novantesimo percentile condizionale.

**Modello lineare quantilico:**

$$Q_\tau(y \mid \mathbf{x}) = \mathbf{x}' \boldsymbol\beta(\tau)$$

I coefficienti $\boldsymbol\beta(\tau)$ **dipendono da $\tau$**: un vettore di coefficienti diverso per ogni quantile. Questo è il cuore della regressione quantilica.

### La funzione di perdita check (check function)

OLS minimizza la perdita quadratica $\sum (y_i - \mathbf{x}_i' \boldsymbol\beta)^2$, che tratta gli errori positivi e negativi simmetricamente.

La regressione quantilica minimizza la **funzione check** (o perdita asimmetrica):

$$\rho_\tau(u) = u \cdot (\tau - \mathbf{1}\{u < 0\})$$

Esplicitamente:

$$\rho_\tau(u) = \begin{cases} \tau \cdot u & \text{se } u \geq 0 \\ (1 - \tau) \cdot (-u) & \text{se } u < 0 \end{cases}$$

**Perché questa funzione?** Per $\tau = 0.7$, gli errori positivi (sottostimare $y$) costano $0.7 \cdot u$, mentre gli errori negativi (sovrastimare) costano solo $0.3 \cdot u$. Il minimo si raggiunge quando il 70% dei residui è negativo — cioè quando la stima è al 70° percentile.

### Lo stimatore QR

$$\hat{\boldsymbol\beta}(\tau) = \arg\min_{\boldsymbol\beta} \sum_{i=1}^n \rho_\tau(y_i - \mathbf{x}_i' \boldsymbol\beta)$$

Questa è un problema di **programmazione lineare** (non quadratica), risolvibile con algoritmi simplex o di punto interno. Il problema non ha soluzione chiusa in forma matriciale come OLS.

**Caso speciale $\tau = 0.5$ — Regressione LAD:**

$$\rho_{0.5}(u) = \frac{|u|}{2}$$

Minimizzare $\sum \rho_{0.5}(u_i)$ equivale a minimizzare $\sum |u_i|$ — la **Least Absolute Deviations (LAD)**, o regressione della mediana.

### Proprietà principali

**Consistenza:** $\hat\beta(\tau) \to \beta(\tau)$ in probabilità se il modello è corretto.

**Normalità asintotica:**

$$\sqrt{n}(\hat\beta(\tau) - \beta(\tau)) \xrightarrow{d} \mathcal{N}(0, \Omega(\tau))$$

dove $\Omega(\tau) = \tau(1-\tau) \cdot [f_u(0 \mid \mathbf{x})]^{-2} \cdot (\mathbf{X}'\mathbf{X}/n)^{-1}$, con $f_u(0 \mid \mathbf{x})$ la densità dei residui valutata in zero.

**Equivarianza:** se trasformi $y$ con una funzione monotona $h$, il quantile si trasforma allo stesso modo: $Q_\tau(h(y) \mid \mathbf{x}) = h(Q_\tau(y \mid \mathbf{x}))$.

**Robustezza:** il punto di breakdown della regressione della mediana è 50% — può resistere fino al 50% di dati corrotti.

### Inferenza

I **standard error** della regressione quantilica si ottengono tipicamente con:

1. **Formula di Koenker-Bassett:** richiede una stima non parametrica di $f_u(0 \mid \mathbf{x})$ (la densità degli errori in zero) — delicata nella pratica.
2. **Bootstrap** (consigliato): ricampiona le osservazioni e ricalcola $\hat\beta(\tau)$ per ogni campione bootstrap. Vedi lezione 14.
3. **Sandwich estimator:** analogia con gli HC standard error di OLS.

---

## 4. Derivazioni

### Caso scalare: perché il minimo della check function è il quantile

**Teorema:** Per una variabile casuale $Y$, il minimizzatore di $E[\rho_\tau(Y - q)]$ rispetto a $q$ è il $\tau$-esimo quantile di $Y$.

**Dimostrazione:**

$$E[\rho_\tau(Y - q)] = \tau \int_q^\infty (y - q) dF(y) + (1-\tau) \int_{-\infty}^q (q - y) dF(y)$$

Derivando rispetto a $q$ e ponendo uguale a zero:

$$\frac{d}{dq} E[\rho_\tau(Y - q)] = -\tau (1 - F(q)) + (1-\tau) F(q) = F(q) - \tau$$

La condizione del primo ordine $F(q) = \tau$ implica che $q$ è il $\tau$-esimo quantile. ✓

### Equivalenza LAD e mediana

Per $\tau = 0.5$:

$$\rho_{0.5}(u) = 0.5 \cdot u \cdot (0.5 - \mathbf{1}\{u < 0\})$$

Se $u \geq 0$: $\rho_{0.5}(u) = 0.5 \cdot u$.
Se $u < 0$: $\rho_{0.5}(u) = 0.5 \cdot (-u) = 0.5 \cdot \lvert u \rvert$.

In ogni caso $\rho_{0.5}(u) = \frac{\lvert u \rvert}{2}$, quindi minimizzare $\sum \rho_{0.5}(u_i)$ equivale a minimizzare $\sum \lvert u_i \rvert$.

### Eterogeneità degli effetti

Se il modello vero è $y = \mathbf{x}'\boldsymbol\beta + \sigma(\mathbf{x}) \cdot \varepsilon$ con $\varepsilon$ standard e $\sigma(\mathbf{x})$ eteroschedastico, allora:

$$Q_\tau(y \mid \mathbf{x}) = \mathbf{x}'\boldsymbol\beta + \sigma(\mathbf{x}) \cdot Q_\tau(\varepsilon)$$

Il coefficiente quantilico $\beta_j(\tau) = \beta_j + \frac{\partial \sigma(\mathbf{x})}{\partial x_j} Q_\tau(\varepsilon)$ varia con $\tau$ catturando l'eterogeneità.

---

## 5. Esempi

**Esempio 1 — Mediana vs. media con un outlier**

Dati: $y = (1, 2, 3, 4, 100)$, $x = (1, 2, 3, 4, 5)$.

OLS stima: $\hat{y} = -13.4 + 14.2x$ (dominata dall'outlier $y_5 = 100$).

LAD ($\tau = 0.5$): ignora quasi completamente l'outlier e produce $\hat{y} \approx -1 + x$ — molto più vicina alla tendenza degli altri 4 punti.

---

**Esempio 2 — Check function per $\tau = 0.3$**

Calcola $\rho_{0.3}(u)$ per $u = 2$ e $u = -2$.

$u = 2 > 0$: $\rho_{0.3}(2) = 0.3 \times 2 = 0.6$.

$u = -2 < 0$: $\rho_{0.3}(-2) = (1 - 0.3) \times 2 = 0.7 \times 2 = 1.4$.

Gli errori negativi (sovrastimare) costano di più: ha senso, perché al 30° percentile vogliamo che la nostra stima sia superata dal 70% dei dati — sovrastimare è più costoso.

---

**Esempio 3 — Interpretazione dei coefficienti quantilici**

Regressione dei salari orari su anni di istruzione:

| $\tau$ | $\hat\beta_1(\tau)$ | Interpretazione |
| --- | --- | --- |
| 0.10 | 0.04 | +4% per ogni anno al 10° percentile |
| 0.25 | 0.06 | +6% per ogni anno al 25° percentile |
| 0.50 | 0.08 | +8% per ogni anno alla mediana |
| 0.75 | 0.10 | +10% per ogni anno al 75° percentile |
| 0.90 | 0.13 | +13% per ogni anno al 90° percentile |

L'istruzione ha effetti crescenti verso i percentili alti: chi era già nella coda alta dei salari beneficia di più.

---

**Esempio 4 — Effetto dell'istruzione sulla disuguaglianza**

Se $\hat\beta_1(0.9) > \hat\beta_1(0.1)$, l'istruzione **aumenta** la disuguaglianza salariale: allarga il divario tra top e bottom earners. Se $\hat\beta_1(0.9) < \hat\beta_1(0.1)$, l'istruzione **comprime** la distribuzione. Un'analisi OLS non potrebbe rivelare questo pattern.

---

**Esempio 5 — Prezzi delle case**

Regressione del prezzo su superficie (m²):

- $\tau = 0.1$ (case economiche): $\hat\beta = 1200 €/m²$
- $\tau = 0.5$ (mediana): $\hat\beta = 2500 €/m²$
- $\tau = 0.9$ (case di lusso): $\hat\beta = 6000 €/m²$

La superficie vale 5 volte di più per una villa che per un appartamento di fascia bassa — un'informazione invisibile alla media OLS.

---

**Esempio 6 — Confidence band quantilica**

Se stimi $Q_{0.5}(y \mid x=10) = 45$ con IC 95% = [38, 52], significa: la mediana di $y$ per individui con $x=10$ è stimata in 45, con un range di plausibilità da 38 a 52.

---

**Esempio 7 — Confronto OLS e QR sotto omoschedasticità**

Se $\varepsilon \sim \mathcal{N}(0, \sigma^2)$, i coefficienti quantilici sono:

$$\beta(\tau) = \beta_{OLS} + \sigma \cdot z_\tau \cdot 0 = \beta_{OLS}$$

dove l'intercetta varia ma i coefficienti delle covariate restano costanti. Quando OLS è corretto e gli errori sono normali, tutti i coefficienti $\hat\beta_j(\tau)$ dovrebbero essere simili tra quantili diversi.

---

## 6. Grafico

```plot
{"fn":"x*0.5","domain":[-4,4],"yDomain":[-3,3],"title":"Mediana (τ=0.5) vs. OLS — caso con outlier","label1":"Mediana (τ=0.5)","fn2":"0.5*x+0.3","label2":"OLS","color":"steelblue","color2":"crimson"}
```

---

## 7. Interattivo

```slider
{"fn":"tau*x*1.5+(1-tau)*x*0.5","domain":[-4,4],"yDomain":[-5,5],"params":[{"name":"tau","min":0.1,"max":0.9,"step":0.05,"default":0.5}],"title":"Retta di regressione al quantile τ"}
```

*Sposta il cursore per vedere come cambia la pendenza stimata al variare del quantile $\tau$. Per $\tau = 0.5$ si ottiene la regressione della mediana; per $\tau > 0.5$ la retta si avvicina ai valori alti della distribuzione.*

---

## 8. Errori comuni

**Errore 1 — Confondere quantile condizionale e incondizionale.**
$Q_\tau(y \mid \mathbf{x})$ è il quantile della distribuzione di $y$ *data una certa* $\mathbf{x}$. Non è il $\tau$-esimo percentile della distribuzione marginale di $y$. Se $\mathbf{x}$ è l'età, $Q_{0.9}(salario \mid età=40)$ è il 90° percentile dei salari dei quarantenni — non il 90° percentile di tutti i salari.

**Errore 2 — Interpretare i coefficienti come la regressione OLS.**
$\hat\beta_1(\tau)$ non è "l'effetto medio di $x_1$ su $y$". È l'effetto di $x_1$ sul $\tau$-esimo quantile condizionale. Dire "$\hat\beta_1(0.9) = 5$" significa: un aumento unitario di $x_1$ sposta il 90° percentile di $y$ di 5 unità — non la media.

**Errore 3 — Usare $R^2$ standard per valutare la regressione quantilica.**
L'$R^2$ ordinario non ha significato diretto per la QR. Usa invece il **pseudo-$R^2$ di Koenker-Machado**: $1 - \hat{V}_\tau / \tilde{V}_\tau$, dove $\hat{V}_\tau$ è il valore minimo della funzione obiettivo del modello stimato e $\tilde{V}_\tau$ quello del modello con solo costante.

**Errore 4 — Aspettarsi che i coefficienti siano monotoni in $\tau$.**
In linea di principio, i quantili condizionali sono non decrescenti in $\tau$ (per costruzione), ma le stime possono attraversarsi (quantile crossing) per via dell'errore campionario. Se $\hat Q_{0.3}(y \mid x) > \hat Q_{0.7}(y \mid x)$ per certi valori di $x$, si parla di attraversamento dei quantili — un problema numerico, non teorico.

**Errore 5 — Credere che la QR non richieda assunzioni.**
La QR non richiede normalità degli errori né omoschedasticità per la stima dei coefficienti, ma per l'inferenza (standard error, test) richiede assunzioni sulla regolarità della distribuzione degli errori (densità positiva in zero). Il bootstrap allenta queste assunzioni ma non le elimina del tutto.

**Errore 6 — Dimenticare che i SE analitici richiedono la stima della densità.**
La formula di Koenker-Bassett per i SE dipende da $f_u(0 \mid \mathbf{x})$ — la densità degli errori in zero. Questa deve essere stimata non parametricamente, il che introduce bandwidth selection. Il bootstrap è spesso preferito proprio per evitare questa stima.

**Errore 7 — Interpretare il plotregressor quantilico come una "banda di confidenza" per i dati.**
Il grafico di $\hat Q_\tau(y \mid \mathbf{x})$ al variare di $\tau$ mostra i quantili **condizionali** stimati, non i percentili dei dati osservati attorno alla retta OLS. Sono concetti diversi.

---

## 9. Applicazioni reali

**Economia del lavoro e disuguaglianza salariale.** La regressione quantilica è lo strumento standard per studiare come la globalizzazione, l'automazione o le politiche di welfare hanno colpito diversamente i lavoratori a bassa e alta remunerazione. Il celebre studio di Buchinsky (1994) ha mostrato che l'istruzione universitaria aumenta molto di più i salari al top della distribuzione che al bottom.

**Finanza e gestione del rischio.** Il Value at Risk (VaR) al 95% è precisamente $Q_{0.05}$ della distribuzione dei rendimenti. La regressione quantilica permette di stimare il VaR condizionato alle caratteristiche di mercato (volatilità attuale, spread creditizi) senza fare ipotesi sulla distribuzione.

**Medicina e pediatria.** Le tavole di crescita (peso e altezza di bambini per età) sono esempi classici di quantili condizionali stimati. L'OMS pubblica i centili di crescita basandosi su regressioni quantiliche su campioni globali.

**Prezzi immobiliari ed edonici.** I mercati immobiliari sono fortemente eterogenei: l'effetto di un giardino, di una stazione vicina o di una scuola di qualità varia enormemente tra abitazioni economiche e di lusso. La regressione quantilica cattura questi effetti eterogeni che l'analisi edonistica OLS standard nasconde.

---

## 10. Riepilogo

| Concetto | Formula | Note |
| --- | --- | --- |
| Quantile condizionale | $Q_\tau(y \mid \mathbf{x}) = \mathbf{x}'\boldsymbol\beta(\tau)$ | Diversi coefficienti per ogni $\tau$ |
| Funzione check | $\rho_\tau(u) = u(\tau - \mathbf{1}\{u<0\})$ | Perdita asimmetrica |
| Stimatore QR | $\arg\min \sum \rho_\tau(y_i - \mathbf{x}_i'\boldsymbol\beta)$ | Programmazione lineare |
| Caso $\tau=0.5$ | $\min \sum \lvert u_i \rvert$ | Regressione LAD (mediana) |
| Robustezza | Breakdown 50% per mediana | Insensibile agli outlier in $y$ |
| Eterogeneità | $\hat\beta_j(\tau)$ varia con $\tau$ | Effetti diversi nei quantili |
| Standard error | Bootstrap o formula KB | Stima della densità necessaria |
| Pseudo-$R^2$ | $1 - \hat{V}_\tau/\tilde{V}_\tau$ | Koenker-Machado |

---

## 11. Esercizi

<details>
<summary>Esercizio 1: Interpretazione dei coefficienti quantilici</summary>

Regressione quantilica dei salari su anni di istruzione: $\hat\beta_1(0.1) = 0.05$, $\hat\beta_1(0.5) = 0.08$, $\hat\beta_1(0.9) = 0.12$. Interpretare ciascun coefficiente e cosa ci dicono sulla disuguaglianza.

**Soluzione completa:**

$\hat\beta_1(0.1) = 0.05$: per chi si trova al 10° percentile della distribuzione salariale condizionale, un anno aggiuntivo di istruzione è associato a un aumento del 5% del salario.

$\hat\beta_1(0.5) = 0.08$: per chi è alla mediana, un anno aggiuntivo vale l'8%.

$\hat\beta_1(0.9) = 0.12$: per chi è al 90° percentile, il rendimento dell'istruzione è del 12%.

Poiché $\hat\beta_1(\tau)$ cresce con $\tau$, l'istruzione **aumenta la disuguaglianza salariale**: chi era già nella parte alta della distribuzione beneficia di più di ogni anno di studio aggiuntivo. Un'analisi OLS avrebbe riportato solo la media (circa 8%) senza rivelare questo pattern.

</details>

<details>
<summary>Esercizio 2: Calcolo della funzione check</summary>

Calcola $\rho_\tau(u)$ per i seguenti casi: (a) $\tau=0.7$, $u=3$; (b) $\tau=0.7$, $u=-3$; (c) $\tau=0.3$, $u=3$; (d) $\tau=0.3$, $u=-3$.

**Soluzione completa:**

(a) $u=3>0$: $\rho_{0.7}(3) = 0.7 \times 3 = 2.1$

(b) $u=-3<0$: $\rho_{0.7}(-3) = (1-0.7) \times 3 = 0.3 \times 3 = 0.9$

(c) $u=3>0$: $\rho_{0.3}(3) = 0.3 \times 3 = 0.9$

(d) $u=-3<0$: $\rho_{0.3}(-3) = (1-0.3) \times 3 = 0.7 \times 3 = 2.1$

Nota la simmetria: la perdita per $\tau=0.7$ con $u=3$ coincide con quella per $\tau=0.3$ con $u=-3$. Quando $\tau>0.5$, gli errori positivi (sottostima) costano di più: ha senso perché al 70° percentile vogliamo superare il 70% dei dati, quindi sottostimare è più "grave".

</details>

<details>
<summary>Esercizio 3: Equivalenza LAD e somma dei valori assoluti</summary>

Verifica che minimizzare $\sum_{i=1}^n \rho_{0.5}(u_i)$ equivale a minimizzare $\sum_{i=1}^n \lvert u_i \rvert$.

**Soluzione completa:**

Per qualsiasi $u$:
- Se $u \geq 0$: $\rho_{0.5}(u) = 0.5 \cdot u = 0.5 \lvert u \rvert$
- Se $u < 0$: $\rho_{0.5}(u) = (1-0.5)(-u) = 0.5 \lvert u \rvert$

Quindi $\rho_{0.5}(u) = \frac{\lvert u \rvert}{2}$ per ogni $u \in \mathbb{R}$.

Di conseguenza:
$$\sum_{i=1}^n \rho_{0.5}(u_i) = \frac{1}{2} \sum_{i=1}^n \lvert u_i \rvert$$

Moltiplicare per la costante $\frac{1}{2}$ non cambia l'argmin, quindi minimizzare $\sum \rho_{0.5}(u_i)$ equivale a minimizzare $\sum \lvert u_i \rvert$. ✓

</details>

<details>
<summary>Esercizio 4: Robustezza agli outlier</summary>

Dati: $y = (2, 3, 4, 5, 200)$, $x = (1, 2, 3, 4, 5)$. Discuti perché la regressione della mediana è preferibile a OLS in questo caso.

**Soluzione completa:**

OLS minimizza $\sum (y_i - \hat\alpha - \hat\beta x_i)^2$. L'outlier $(x_5, y_5) = (5, 200)$ contribuisce con $(200 - \hat\alpha - 5\hat\beta)^2$, un termine enorme che domina la minimizzazione. La retta OLS sarà "tirata" fortemente verso quel punto, producendo stime molto diverse dalla tendenza dei dati "normali" (1,2), (2,3), (3,4), (4,5).

La regressione LAD minimizza $\sum \lvert y_i - \hat\alpha - \hat\beta x_i \rvert$. L'outlier contribuisce solo con $\lvert 200 - \hat\alpha - 5\hat\beta \rvert$, senza quadrare. La sua influenza è limitata; la stima sarà vicina alla linea che descrive gli altri 4 punti.

Il breakdown point della mediana è 50%: anche se il 49% dei dati fossero outlier estremi, la stima resterebbe consistente. L'OLS ha breakdown point 0: un singolo outlier lontano può trascinare la stima verso di sé in modo illimitato.

</details>

<details>
<summary>Esercizio 5: QR vs. OLS sotto omoschedasticità</summary>

Se il modello vero è $y = 2 + 3x + \varepsilon$ con $\varepsilon \sim \mathcal{N}(0, 1)$, cosa ci aspettiamo dai coefficienti $\hat\beta_1(\tau)$ per diversi quantili?

**Soluzione completa:**

Sotto normalità degli errori con varianza costante (omoschedasticità), il $\tau$-esimo quantile condizionale è:

$$Q_\tau(y \mid x) = (2 + z_\tau) + 3x$$

dove $z_\tau = \Phi^{-1}(\tau)$ è il $\tau$-esimo quantile standard normale.

La pendenza è sempre 3 indipendentemente da $\tau$! Solo l'intercetta cambia: $\hat\alpha(\tau) \approx 2 + z_\tau$.

Per $\tau = 0.1$: $z_{0.1} \approx -1.28$, intercetta $\approx 0.72$, pendenza $= 3$.
Per $\tau = 0.5$: $z_{0.5} = 0$, intercetta $= 2$, pendenza $= 3$.
Per $\tau = 0.9$: $z_{0.9} \approx 1.28$, intercetta $\approx 3.28$, pendenza $= 3$.

Conclusione: quando OLS è corretto e gli errori sono omoschedastici e normali, tutti i coefficienti quantilici delle covariate dovrebbero essere simili tra loro. Se variano molto, è segnale di eteroschedasticità o di effetti eterogenei non catturati da OLS.

</details>

<details>
<summary>Esercizio 6: Crossing dei quantili</summary>

Cosa significa "quantile crossing" e perché è un problema?

**Soluzione completa:**

Il **quantile crossing** si verifica quando le rette di regressione quantilica stimate si intersecano o si scambiano di ordine: $\hat Q_{\tau_1}(y \mid x) > \hat Q_{\tau_2}(y \mid x)$ per certi $x$, nonostante $\tau_1 < \tau_2$.

Teoricamente è impossibile: i quantili sono non decrescenti in $\tau$ per costruzione. Se $\tau_1 < \tau_2$, allora $Q_{\tau_1}(y \mid x) \leq Q_{\tau_2}(y \mid x)$ sempre.

In pratica si verifica perché:
1. Ogni quantile è stimato **separatamente**, senza vincoli che impongano la monotonia.
2. Con campioni piccoli, l'errore campionario può portare a stime "incrociate" in parti della distribuzione di $x$ con pochi dati.

Soluzioni: (i) regolarizzazione con vincoli di monotonia (regressione quantilica monotona); (ii) usare i quantili solo nell'intervallo "centrale" di $x$ dove i dati sono abbondanti.

</details>

<details>
<summary>Esercizio 7: Applicazione al Value at Risk</summary>

Un portafoglio ha rendimenti giornalieri. Spiega come stimare il VaR al 95% usando la regressione quantilica condizionata alla volatilità di mercato $x$ (indice VIX).

**Soluzione completa:**

Il VaR al 95% è il 5° percentile della distribuzione dei rendimenti (perdita massima con probabilità 95%). Con la regressione quantilica:

1. Modello: $Q_{0.05}(r_t \mid VIX_t) = \beta_0(0.05) + \beta_1(0.05) \cdot VIX_t$

2. Stima: minimizza $\sum \rho_{0.05}(r_t - \hat\beta_0 - \hat\beta_1 VIX_t)$.

3. Previsione: per $VIX_{t+1}$ previsto, il VaR condizionato è $\hat Q_{0.05}(r_{t+1} \mid VIX_{t+1})$.

Questo approccio cattura il fatto che nei giorni di alta volatilità (VIX alto), le perdite potenziali sono maggiori — cosa che un VaR storico fisso non può fare. È il fondamento dei modelli **Conditional Autoregressive Value at Risk (CAViaR)** di Engle ed Manganelli (2004).

</details>
