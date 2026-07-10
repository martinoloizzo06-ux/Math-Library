---
id: statistica-05-test-ipotesi
subject: statistica
topic_it: Test di ipotesi
topic_en: Hypothesis testing
title_it: Test di ipotesi — concetti fondamentali
title_en: Hypothesis testing — fundamental concepts
level: purple
order: 5
source_book: "L. Wasserman, All of Statistics; Casella & Berger, Statistical Inference"
source_chapter: "Cap. 10 — Test di ipotesi"
---

## 1. Intuizione — analogia concreta + perché si studia

Immagina di essere un giudice in tribunale. Davanti a te hai un imputato: per la legge, è innocente fino a prova contraria. Il tuo compito non è stabilire la verità assoluta, ma decidere se le prove presentate sono abbastanza forti da rovesciare la presunzione di innocenza.

Il test di ipotesi funziona esattamente così. Partiamo da una posizione di default — l'**ipotesi nulla** $H_0$, che di solito afferma che "non c'è effetto", "non c'è differenza", "il parametro vale questo valore" — e raccogliamo dati. Se i dati sono sufficientemente incompatibili con $H_0$, la "rovesciamo" a favore dell'**ipotesi alternativa** $H_1$.

Perché questo approccio? Perché è il metodo più rigoroso per distinguere un segnale reale dal rumore casuale. Senza un framework formale, chiunque potrebbe guardare qualsiasi dataset e "trovare" un pattern. Il test di ipotesi ci obbliga a quantificare quanto improbabili siano i nostri dati sotto $H_0$ prima di trarre conclusioni.

Il test di ipotesi è lo strumento più usato nella ricerca scientifica: farmaci approvati, politiche pubbliche adottate, tecnologie validate — tutto passa attraverso questo meccanismo. Capirlo non è solo matematica: è capire come funziona la scienza empirica.

Una seconda analogia: pensa a un rilevatore di fumo. Ha una soglia: se il segnale supera quella soglia, suona l'allarme. Può sbagliare in due modi — suonare senza incendio (falso allarme) oppure non suonare durante un incendio (mancato rilevamento). Il test di ipotesi è questo rilevatore: dobbiamo scegliere la soglia in modo da bilanciare i due tipi di errore.

## 2. Prerequisiti

- Variabili casuali e distribuzioni (media, varianza, densità)
- Distribuzione normale standard $N(0,1)$ e sua tavola
- Concetto di stima: stimatore, bias, varianza dello stimatore
- Intervalli di confidenza (concetto di livello $1-\alpha$)
- Distribuzione $t$ di Student (per i test sui parametri)

## 3. Teoria — definizioni precise e teoremi commentati

### Struttura di un test

Un **test di ipotesi statistico** è una procedura per decidere, sulla base di un campione casuale, se accettare o rifiutare una congettura sul parametro $\theta$ della popolazione.

**Ipotesi nulla** $H_0$: l'affermazione che si vuole mettere alla prova; di solito è una condizione di uguaglianza, ad esempio $H_0: \theta = \theta_0$.

**Ipotesi alternativa** $H_1$ (o $H_a$): ciò che si vuole dimostrare se $H_0$ è falsa. Può essere:
- **Bilaterale:** $H_1: \theta \neq \theta_0$
- **Unilaterale destra:** $H_1: \theta > \theta_0$
- **Unilaterale sinistra:** $H_1: \theta < \theta_0$

**Statistica test** $T = T(X_1, \ldots, X_n)$: una funzione del campione la cui distribuzione sotto $H_0$ è completamente nota. Esempi: $Z = \frac{\bar{X} - \mu_0}{\sigma/\sqrt{n}}$ oppure $t = \frac{\bar{X} - \mu_0}{S/\sqrt{n}}$.

**Regione critica** $C$ (o regione di rifiuto): l'insieme dei valori di $T$ per cui si rifiuta $H_0$. Se $T_{\text{obs}} \in C$, rifiutiamo $H_0$.

**Regola decisionale:** dato il valore osservato della statistica test $T_{\text{obs}}$:
- Se $T_{\text{obs}} \in C$: **rifiutare** $H_0$ (i dati sono incompatibili con $H_0$)
- Se $T_{\text{obs}} \notin C$: **non rifiutare** $H_0$ (i dati non forniscono abbastanza evidenza contro $H_0$)

Nota: "non rifiutare $H_0$" non significa "accettare $H_0$". Significa solo che non abbiamo abbastanza prove per escluderla.

### Errori e livello del test

Nel prendere una decisione, possiamo sbagliare in due modi:

| | $H_0$ vera | $H_0$ falsa |
| --- | --- | --- |
| Non rifiutare $H_0$ | Decisione corretta (probabilità $1-\alpha$) | Errore tipo II (probabilità $\beta$) |
| Rifiutare $H_0$ | Errore tipo I (probabilità $\alpha$) | Decisione corretta (probabilità $1-\beta$) |

**Errore tipo I** ($\alpha$): rifiutare $H_0$ quando è vera — un falso positivo. La probabilità di questo errore si chiama **livello di significatività** o **taglia del test**:
$$\alpha = P(\text{rifiutare } H_0 \mid H_0 \text{ vera}) = P(T \in C \mid H_0)$$

**Errore tipo II** ($\beta$): non rifiutare $H_0$ quando è falsa — un falso negativo:
$$\beta = P(\text{non rifiutare } H_0 \mid H_1 \text{ vera}) = P(T \notin C \mid H_1)$$

**Potenza del test**: la probabilità di rifiutare correttamente $H_0$ quando è falsa:
$$\text{Potenza} = 1 - \beta = P(\text{rifiutare } H_0 \mid H_1 \text{ vera})$$

Il livello $\alpha$ viene fissato **prima** di raccogliere i dati (tipicamente 0.05 o 0.01). Poi si costruisce la regione critica in modo che la probabilità di errore tipo I sia esattamente $\alpha$.

### p-value

Il **p-value** (o valore p) è la probabilità, assumendo $H_0$ vera, di osservare una statistica test almeno altrettanto estrema di quella osservata:

$$p\text{-value} = P_{H_0}(T \geq T_{\text{obs}})$$

Per test bilaterale: $p\text{-value} = 2 \cdot P_{H_0}(T \geq |T_{\text{obs}}|)$.

**Regola decisionale con p-value:** rifiutare $H_0$ se e solo se $p\text{-value} \leq \alpha$.

Il p-value è equivalente alla regione critica: fornisce la stessa decisione, ma dà anche una misura continua dell'evidenza contro $H_0$. Più piccolo è il p-value, più forte è l'evidenza contro $H_0$.

### Lemma di Neyman-Pearson

Per testare $H_0: \theta = \theta_0$ contro $H_1: \theta = \theta_1$ (ipotesi semplici), il **test più potente** di livello $\alpha$ è il **test del rapporto di verosimiglianza**: rifiutare $H_0$ quando

$$\Lambda = \frac{L(\theta_1 \mid \mathbf{x})}{L(\theta_0 \mid \mathbf{x})} > k_\alpha$$

dove $k_\alpha$ è scelto in modo che $P(\Lambda > k_\alpha \mid H_0) = \alpha$.

Questo teorema garantisce che, tra tutti i test di livello $\alpha$, quello basato sul rapporto di verosimiglianza massimizza la potenza contro $H_1$. È il fondamento teorico di moltissimi test pratici.

### Test UMP (Uniformly Most Powerful)

Un test si dice **UMP** se è il più potente contro ogni $\theta \in \Theta_1$ simultaneamente. Esiste in situazioni semplici (famiglie esponenziali con test unilaterali). Per test bilaterali in generale non esiste un UMP.

### Funzione di potenza

La **funzione di potenza** $\pi(\theta) = P_\theta(T \in C)$ descrive la probabilità di rifiutare $H_0$ al variare del vero valore del parametro $\theta$:
- Per $\theta \in \Theta_0$ (sotto $H_0$): $\pi(\theta) \leq \alpha$ (vogliamo bassa)
- Per $\theta \in \Theta_1$ (sotto $H_1$): $\pi(\theta)$ grande (vogliamo alta)

La funzione di potenza ideale vale $\alpha$ su $\Theta_0$ e 1 su $\Theta_1$.

## 4. Derivazioni — passaggi algebrici commentati

### Costruzione della regione critica per test Z bilaterale

Vogliamo testare $H_0: \mu = \mu_0$ con $\sigma$ nota, campione $X_1, \ldots, X_n \sim N(\mu, \sigma^2)$.

Sotto $H_0$, la statistica:
$$Z = \frac{\bar{X} - \mu_0}{\sigma / \sqrt{n}} \sim N(0,1)$$

Vogliamo $P(Z \in C \mid H_0) = \alpha$. Dato che il test è bilaterale, la regione critica è simmetrica:
$$C = \{z : |z| > z_{\alpha/2}\}$$

dove $z_{\alpha/2}$ è il quantile $1 - \alpha/2$ della distribuzione $N(0,1)$.

**Verifica:** $P(|Z| > z_{\alpha/2}) = P(Z > z_{\alpha/2}) + P(Z < -z_{\alpha/2}) = \alpha/2 + \alpha/2 = \alpha$. Corretto.

### Derivazione del p-value per test Z

Osserviamo $Z_{\text{obs}} = z_0$. Il p-value per test bilaterale è:
$$p = P(|Z| > |z_0| \mid H_0) = 2 \cdot P(Z > |z_0|) = 2(1 - \Phi(|z_0|))$$

dove $\Phi$ è la funzione di distribuzione cumulativa della $N(0,1)$.

**Equivalenza:** rifiutiamo $H_0$ se $p \leq \alpha$, ossia $2(1-\Phi(|z_0|)) \leq \alpha$, ossia $\Phi(|z_0|) \geq 1 - \alpha/2$, ossia $|z_0| \geq z_{\alpha/2}$. Questa è esattamente la condizione $z_0 \in C$. Le due procedure sono equivalenti.

### Trade-off $\alpha$-$\beta$ per campione fisso

Per un test $Z$ a un campione con $\sigma$ nota, $n$ fissato e $H_1: \mu = \mu_1 > \mu_0$:
$$\beta = P\left(Z \leq z_\alpha \mid \mu = \mu_1\right) = \Phi\left(z_\alpha - \frac{\mu_1 - \mu_0}{\sigma/\sqrt{n}}\right)$$

- Diminuendo $\alpha$ (soglia più severa), $z_\alpha$ aumenta, quindi $\beta$ aumenta.
- Aumentando $n$, il termine $\frac{\mu_1 - \mu_0}{\sigma/\sqrt{n}}$ aumenta, quindi $\beta$ diminuisce.
- Più grande è l'effetto $\mu_1 - \mu_0$, più piccolo è $\beta$ (test più potente).

## 5. Esempi — da facile a difficile

### Esempio 1 — Decisione tramite regione critica

Un campione di $n=36$ misurazioni ha media $\bar{x}=102$. La varianza è nota: $\sigma^2=144$. Testare $H_0: \mu=100$ vs $H_1: \mu \neq 100$ a $\alpha=0.05$.

$$Z_{\text{obs}} = \frac{102 - 100}{12/\sqrt{36}} = \frac{2}{2} = 1.00$$

Valore critico: $z_{0.025} = 1.96$. Poiché $1.00 < 1.96$: **non rifiutare** $H_0$.

### Esempio 2 — Calcolo del p-value

Stesso scenario dell'Esempio 1.

$$p\text{-value} = 2(1 - \Phi(1.00)) = 2(1 - 0.8413) = 2 \cdot 0.1587 = 0.317$$

Poiché $0.317 > 0.05$: **non rifiutare** $H_0$. La stessa conclusione dell'Esempio 1.

### Esempio 3 — Test unilaterale

Stessa situazione, ma $H_1: \mu > 100$. Calcolo p-value unilaterale:

$$p\text{-value} = P(Z > 1.00) = 1 - \Phi(1.00) = 0.1587$$

Valore critico unilaterale: $z_{0.05} = 1.645$. Poiché $1.00 < 1.645$ (e $p = 0.159 > 0.05$): **non rifiutare** $H_0$.

### Esempio 4 — Evidenza forte

$n=100$, $\bar{x}=103$, $\sigma=12$. $H_0: \mu=100$ vs $H_1: \mu \neq 100$.

$$Z_{\text{obs}} = \frac{103-100}{12/10} = \frac{3}{1.2} = 2.5$$

$p\text{-value} = 2(1 - \Phi(2.5)) = 2 \cdot 0.0062 = 0.0124 < 0.05$.

**Rifiutare** $H_0$ al livello 5%. Non al livello 1% (poiché $0.0124 > 0.01$).

### Esempio 5 — Calcolo della potenza

Test $H_0: \mu=0$ vs $H_1: \mu=1$, $\sigma=2$, $n=25$, $\alpha=0.05$ (test bilaterale).

$$\text{Potenza} = P\left(\left|\frac{\bar{X}-0}{2/5}\right| > 1.96 \,\bigg|\, \mu=1\right)$$

Sotto $H_1$: $\bar{X} \sim N(1, 4/25)$, quindi $Z = \frac{\bar{X}}{2/5}$ ha media $1/(2/5) = 2.5$ e varianza 1.

$$\text{Potenza} = P(Z > 1.96 - 2.5) + P(Z < -1.96 - 2.5)$$
$$= P(Z > -0.54) + P(Z < -4.46)$$
$$\approx \Phi(0.54) + 0 \approx 0.705$$

La potenza è circa 70%: con $n=25$ e un effetto di 1 unità, riusciamo a rilevarlo nel 70% dei casi.

### Esempio 6 — Dimensione campionaria

Vogliamo potenza $\geq 0.80$ per rilevare $\mu = 1$ (con $\mu_0=0$, $\sigma=2$, $\alpha=0.05$).

Formula approssimata per test bilaterale:

$$n \approx \left(\frac{(z_{\alpha/2} + z_\beta) \sigma}{\mu_1 - \mu_0}\right)^2 = \left(\frac{(1.96 + 0.842) \cdot 2}{1}\right)^2 = (5.604)^2 \approx 31.4$$

Occorrono almeno $n=32$ osservazioni.

### Esempio 7 — Interpretazione in contesto reale

Uno studio afferma che un nuovo farmaco riduce la pressione arteriosa di $\mu_1 = 5$ mmHg rispetto al placebo ($\mu_0 = 0$), con p-value $= 0.03$.

Significato: assumendo nessun effetto ($H_0$), i dati osservati si verificherebbero solo nel 3% dei casi. Questo non significa che il farmaco "funziona con probabilità 97%": significa che se il farmaco non avesse effetto, i nostri dati sarebbero molto insoliti.

Importante: significatività statistica non implica rilevanza clinica. Un effetto di 0.5 mmHg potrebbe essere statisticamente significativo con $n=10000$ ma clinicamente irrilevante.

## 6. Grafico

```plot
{"fn":"Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)","domain":[-4,4],"yDomain":[0,0.5],"title":"Regione di rigetto α=0.05, test bilaterale","label1":"N(0,1)","fn2":"(Math.abs(x)>1.96)?Math.exp(-x*x/2)/Math.sqrt(2*Math.PI):null","label2":"Regione rigetto (α=0.05)","color":"steelblue","color2":"crimson"}
```

## 7. Interattivo

```slider
{"fn":"Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)","domain":[-4,4],"yDomain":[0,0.5],"params":[{"name":"alpha","min":0.01,"max":0.20,"step":0.01,"default":0.05}],"title":"Soglia critica z_{α/2} al variare di α"}
```

## 8. Errori comuni

**Errore 1 — Confondere p-value con probabilità che $H_0$ sia vera.**
Il p-value non è $P(H_0 \mid \text{dati})$. È $P(\text{dati come questi o più estremi} \mid H_0)$. Per calcolare $P(H_0 \mid \text{dati})$ servirebbe un approccio bayesiano con probabilità a priori.

**Errore 2 — "Non rifiutare" = "accettare" $H_0$.**
Se non abbiamo rifiutato $H_0$, non significa che $H_0$ sia vera. Significa solo che non abbiamo abbastanza evidenza per escluderla. Potrebbe essere che il campione fosse troppo piccolo (potenza bassa).

**Errore 3 — Significatività statistica = rilevanza pratica.**
Con $n$ molto grande, anche differenze minuscole diventano statisticamente significative. Un effetto con $p=0.001$ potrebbe essere inutile in pratica. Sempre affiancare la dimensione dell'effetto (effect size, es. Cohen's $d$).

**Errore 4 — Guardare i dati prima di formulare $H_0$.**
Se formulo $H_0$ dopo aver visto i dati, posso sceglierla in modo che venga rifiutata. Le ipotesi devono essere formulate **prima** di raccogliere i dati (pre-registration).

**Errore 5 — Usare test unilaterale perché "più facile da rifiutare".**
Il test unilaterale è appropriato solo se c'è una ragione scientifica pre-specificata per cui l'effetto può andare solo in una direzione. Scegliere il tipo di test dopo aver visto i dati è p-hacking.

**Errore 6 — Ignorare il multiple testing.**
Se esegui 20 test indipendenti con $\alpha=0.05$, in media 1 risulterà significativo per puro caso. Usa correzioni come Bonferroni ($\alpha/m$) quando esegui $m$ test.

**Errore 7 — Confondere $\alpha$ e $\beta$.**
$\alpha$ è la probabilità di errore tipo I (falso positivo), $\beta$ quella di errore tipo II (falso negativo). La potenza è $1-\beta$, non $1-\alpha$.

## 9. Applicazioni reali

**Sperimentazione clinica:** prima che un farmaco venga approvato, deve superare trial clinici dove si testa $H_0$: "il farmaco non è più efficace del placebo". Solo con $p < 0.05$ (o più severo) si procede all'approvazione regolatoria.

**Controllo qualità industriale:** una fabbrica testa se il diametro medio dei pezzi prodotti corrisponde alle specifiche ($H_0: \mu = \mu_{\text{spec}}$). Se $H_0$ viene rifiutata, la linea di produzione viene fermata per manutenzione.

**A/B testing nel web:** le aziende tech (Google, Facebook) eseguono continuamente test su interfacce utente: $H_0$ "la versione A e la versione B hanno uguale tasso di conversione". Il test di ipotesi decide quale versione adottare.

**Astrofisica:** la scoperta del bosone di Higgs nel 2012 è stata dichiarata a $5\sigma$ di significatività, equivalente a $p \approx 3 \times 10^{-7}$ — lo standard più severo nella fisica delle particelle per distinguere scoperte da fluttuazioni casuali.

## 10. Riepilogo

| Concetto | Formula / Definizione | Note |
| --- | --- | --- |
| Ipotesi nulla | $H_0: \theta = \theta_0$ | Posizione di default |
| Ipotesi alternativa | $H_1: \theta \neq \theta_0$ (o $>$, $<$) | Ciò che si vuole dimostrare |
| Statistica test | $T = T(X_1,\ldots,X_n)$ | Distribuzione nota sotto $H_0$ |
| Livello $\alpha$ | $P(\text{rifiutare }H_0 \mid H_0\text{ vera})$ | Tipicamente 0.05 o 0.01 |
| Errore tipo II | $\beta = P(\text{non rif. }H_0 \mid H_1\text{ vera})$ | Falso negativo |
| Potenza | $1 - \beta$ | Alta è meglio |
| p-value | $P_{H_0}(T \geq T_{\text{obs}})$ | Rifiuto se $p \leq \alpha$ |
| Test bilaterale | $H_1: \theta \neq \theta_0$ | Regione critica su entrambe le code |
| Test unilaterale | $H_1: \theta > \theta_0$ | Regione critica su una coda |
| Neyman-Pearson | Rapporto di verosimiglianza massimizza potenza | Per ipotesi semplici |

## 11. Esercizi

<details>
<summary>Esercizio 1: Interpretazione del p-value</summary>

Un test dà $p = 0.03$. Con $\alpha = 0.05$, cosa si conclude? E con $\alpha = 0.01$?

**Soluzione.**

Con $\alpha = 0.05$: poiché $p = 0.03 < 0.05$, si **rifiuta** $H_0$. Risultato statisticamente significativo al 5%.

Con $\alpha = 0.01$: poiché $p = 0.03 > 0.01$, **non si rifiuta** $H_0$. Lo stesso dato porta a conclusioni diverse a seconda del livello di significatività scelto, il che sottolinea l'importanza di fissarlo prima di raccogliere i dati.

</details>

<details>
<summary>Esercizio 2: Errori tipo I e II nel contesto giuridico</summary>

Un tribunale testa $H_0$: "l'imputato è innocente" vs $H_1$: "l'imputato è colpevole". Descrivere errori tipo I e II e quale è più grave in questo contesto.

**Soluzione.**

- **Errore tipo I** ($\alpha$): rifiutare $H_0$ quando è vera → condannare un innocente (falso positivo).
- **Errore tipo II** ($\beta$): non rifiutare $H_0$ quando è falsa → assolvere un colpevole (falso negativo).

Nel sistema giuridico anglosassone, il principio "beyond reasonable doubt" mira a minimizzare l'errore tipo I: è preferibile assolvere un colpevole piuttosto che condannare un innocente. Quindi $\alpha$ è tenuto molto basso, a costo di aumentare $\beta$.

</details>

<details>
<summary>Esercizio 3: Trade-off α-β e dimensione campionaria</summary>

Spiega il trade-off tra $\alpha$ e $\beta$ e come si può ridurre entrambi simultaneamente.

**Soluzione.**

Per un test con statistica e campione fissati, ridurre $\alpha$ (soglia più severa, valore critico più alto) sposta la regione di rifiuto più in là, riducendo la probabilità di rifiutare erroneamente $H_0$ ma aumentando anche $\beta$ (più difficile rifiutare anche quando $H_1$ è vera). Viceversa, aumentare $\alpha$ diminuisce $\beta$.

L'unico modo per ridurre entrambi $\alpha$ e $\beta$ simultaneamente è **aumentare la dimensione campionaria $n$**: più dati migliorano la precisione della stima e rendono la statistica test più sensibile alle differenze reali.

</details>

<details>
<summary>Esercizio 4: Test Z completo</summary>

Una macchina dovrebbe produrre viti con diametro medio $\mu_0 = 10$ mm. Un controllo su $n = 64$ viti dà $\bar{x} = 10.3$ mm. La deviazione standard è nota: $\sigma = 1.2$ mm. Testare $H_0: \mu = 10$ vs $H_1: \mu \neq 10$ a $\alpha = 0.05$.

**Soluzione.**

Statistica test: $Z = \frac{10.3 - 10}{1.2/\sqrt{64}} = \frac{0.3}{0.15} = 2.0$

Valore critico: $z_{0.025} = 1.96$. Poiché $|2.0| = 2.0 > 1.96$: **rifiutare** $H_0$.

p-value: $p = 2(1 - \Phi(2.0)) = 2 \cdot 0.0228 = 0.0456 < 0.05$. Confermato.

Conclusione: c'è evidenza significativa che il diametro medio non sia 10 mm. La macchina potrebbe necessitare di ricalibrazione.

</details>

<details>
<summary>Esercizio 5: Calcolo della potenza</summary>

Stesso scenario dell'Esercizio 4. Calcola la potenza del test contro $H_1: \mu = 10.5$ mm.

**Soluzione.**

La potenza è $P(\text{rifiutare }H_0 \mid \mu = 10.5)$.

Sotto $\mu = 10.5$: $Z = \frac{\bar{X} - 10}{0.15}$ ha media $\frac{10.5-10}{0.15} = 3.33$.

Potenza $= P(Z > 1.96 - 3.33) + P(Z < -1.96 - 3.33)$
$= P(Z > -1.37) + P(Z < -5.29)$
$= \Phi(1.37) + 0 \approx 0.915$

La potenza è circa 91.5%: molto buona per rilevare uno scostamento di 0.5 mm.

</details>

<details>
<summary>Esercizio 6: Significatività vs rilevanza pratica</summary>

Un'azienda testa se un nuovo layout del sito aumenta il tasso di clic. Con $n = 500\,000$ visitatori, trova $p = 0.0001$ e un incremento assoluto del tasso di clic dello 0.01% (da 2.00% a 2.01%). Cosa concludi?

**Soluzione.**

Il risultato è **statisticamente significativo** ($p < 0.05$): con un campione enorme, anche differenze infinitesime diventano rilevabili.

Tuttavia, un incremento dello 0.01% è **praticamente irrilevante**: se ogni clic vale 0.10€, su 500.000 visitatori il guadagno è $500.000 \times 0.0001 \times 0.10 = 5€$ — probabilmente meno del costo di implementazione del nuovo layout.

Lezione: sempre calcolare la **dimensione dell'effetto** (effect size) accanto alla significatività statistica.

</details>

<details>
<summary>Esercizio 7: Multiple testing</summary>

Un ricercatore esegue 20 test indipendenti con $\alpha = 0.05$ ciascuno. Quanti risultati falsi positivi si aspetta in media? Come correggere?

**Soluzione.**

Ogni test ha probabilità $\alpha = 0.05$ di dare un falso positivo sotto $H_0$. Con 20 test:

Numero atteso di falsi positivi $= 20 \times 0.05 = 1$.

Probabilità di almeno un falso positivo $= 1 - (1-0.05)^{20} = 1 - 0.358 = 0.642$ — quasi il 65%!

**Correzione di Bonferroni:** usare $\alpha' = \alpha/m = 0.05/20 = 0.0025$ per ciascun test. In questo modo la probabilità di errore tipo I familiare è controllata a 0.05.

</details>

<details>
<summary>Esercizio 8: Lemma di Neyman-Pearson</summary>

$X \sim N(\mu, 1)$. Testare $H_0: \mu = 0$ vs $H_1: \mu = 1$ con un'osservazione. Trovare il test più potente di livello $\alpha = 0.05$.

**Soluzione.**

Il rapporto di verosimiglianza è:
$$\Lambda = \frac{f(x; \mu=1)}{f(x; \mu=0)} = \frac{e^{-(x-1)^2/2}}{e^{-x^2/2}} = e^{x - 1/2}$$

$\Lambda > k$ equivale a $x > k' = \frac{1}{2} + \ln k$. Quindi il test ha la forma: rifiutare $H_0$ se $X > c$.

Livello: $P(X > c \mid \mu=0) = 1 - \Phi(c) = 0.05 \Rightarrow c = 1.645$.

Potenza: $P(X > 1.645 \mid \mu=1) = 1 - \Phi(0.645) = 1 - 0.740 = 0.260$.

Il test UMP unilaterale è quindi: rifiutare $H_0$ se $X > 1.645$.

</details>
