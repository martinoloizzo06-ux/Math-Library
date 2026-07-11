---
id: statistica-06-test-t
subject: statistica
topic_it: Test di ipotesi
topic_en: Hypothesis testing
title_it: Test t (una e due campioni)
title_en: t-tests (one and two samples)
level: purple
order: 6
source_book: "L. Wasserman, All of Statistics; Casella & Berger, Statistical Inference"
source_chapter: "Cap. 10 — Test t"
stato: da-rielaborare
---

## 1. Intuizione — analogia concreta + perché si studia

Immagina di voler sapere se la temperatura media di un paziente è diversa dalla norma di 36.5°C. Misuri la temperatura per 10 giorni consecutivi, ottieni la media e vuoi sapere se la differenza osservata è reale o dovuta alla variabilità casuale delle misurazioni.

Il problema: **non conosci la variabilità della popolazione** — non sai quant'è $\sigma$. Tutto ciò che hai è la deviazione standard campionaria $S$, che è solo una stima di $\sigma$.

Il test $Z$ che abbiamo visto richiede $\sigma$ nota. Nella realtà quasi mai la conosciamo. William Sealy Gosset (che pubblicò sotto lo pseudonimo "Student" per non rivelare i segreti aziendali della Guinness Brewery) risolse questo problema nel 1908: sostituendo $\sigma$ con $S$, la statistica ha una distribuzione diversa dalla normale — la **distribuzione t di Student**.

La distribuzione t ha code più pesanti della normale: riflette l'incertezza aggiuntiva introdotta dall'aver stimato $\sigma$ dai dati stessi. Con campioni piccoli ($n < 30$) questa differenza è cruciale; con $n$ grande la t converge alla normale.

Il test t è forse il test statistico più utilizzato in assoluto: confronto di medie prima/dopo un trattamento, confronto tra due gruppi, validazione di specifiche industriali. Ogni ricercatore di biologia, medicina, psicologia o ingegneria lo usa regolarmente.

## 2. Prerequisiti

- Distribuzione normale e proprietà della media campionaria
- Test di ipotesi: $H_0$, $H_1$, errori tipo I e II, p-value (vedi lezione precedente)
- Distribuzione $t$ di Student e suoi gradi di libertà
- Stima della varianza: varianza campionaria $S^2 = \frac{1}{n-1}\sum(X_i - \bar{X})^2$
- Intervalli di confidenza per la media con $\sigma$ ignota

## 3. Teoria — definizioni precise e teoremi commentati

### Distribuzione t di Student

Se $X_1, \ldots, X_n \sim N(\mu, \sigma^2)$ iid, allora la statistica:

$$t = \frac{\bar{X} - \mu}{S/\sqrt{n}}$$

ha distribuzione **$t$ di Student con $n-1$ gradi di libertà**, indicata $t(n-1)$.

Dove:
- $\bar{X} = \frac{1}{n}\sum_{i=1}^n X_i$ è la media campionaria
- $S^2 = \frac{1}{n-1}\sum_{i=1}^n (X_i - \bar{X})^2$ è la varianza campionaria (corretta)
- $S/\sqrt{n}$ è l'**errore standard** della media

La distribuzione $t(\nu)$ è simmetrica attorno a 0, ma ha code più pesanti della $N(0,1)$. Al crescere di $\nu$, converge a $N(0,1)$: per $\nu \geq 30$ la differenza è trascurabile.

### Test t a un campione

**Scenario:** campione $X_1,\ldots,X_n$ da popolazione normale (o $n$ sufficientemente grande), $\sigma$ ignota.

**Ipotesi:** $H_0: \mu = \mu_0$ vs $H_1: \mu \neq \mu_0$ (o $>$, $<$).

**Statistica test:**
$$t_{\text{obs}} = \frac{\bar{X} - \mu_0}{S/\sqrt{n}} \sim t(n-1) \text{ sotto } H_0$$

**Regioni critiche** (livello $\alpha$):
- Bilaterale: $|t_{\text{obs}}| > t_{n-1, \alpha/2}$
- Unilaterale destra: $t_{\text{obs}} > t_{n-1, \alpha}$
- Unilaterale sinistra: $t_{\text{obs}} < -t_{n-1, \alpha}$

dove $t_{\nu, p}$ indica il quantile $1-p$ della distribuzione $t(\nu)$.

**p-value:**
- Bilaterale: $p = 2 P(T_{n-1} > |t_{\text{obs}}|)$
- Unilaterale destra: $p = P(T_{n-1} > t_{\text{obs}})$
- Unilaterale sinistra: $p = P(T_{n-1} < t_{\text{obs}})$

**Intervallo di confidenza** equivalente ($1-\alpha$):
$$\bar{X} \pm t_{n-1,\alpha/2} \cdot \frac{S}{\sqrt{n}}$$

Si rifiuta $H_0: \mu = \mu_0$ se e solo se $\mu_0$ è fuori dall'intervallo di confidenza.

### Test t a due campioni indipendenti

**Scenario:** due gruppi indipendenti $X_{11},\ldots,X_{1n_1}$ da $N(\mu_1,\sigma_1^2)$ e $X_{21},\ldots,X_{2n_2}$ da $N(\mu_2,\sigma_2^2)$.

**Ipotesi:** $H_0: \mu_1 = \mu_2$ vs $H_1: \mu_1 \neq \mu_2$.

#### Varianze uguali ($\sigma_1^2 = \sigma_2^2 = \sigma^2$) — test t pooled

Stimatore pooled della varianza comune:
$$S_p^2 = \frac{(n_1-1)S_1^2 + (n_2-1)S_2^2}{n_1+n_2-2}$$

Questo è una media pesata di $S_1^2$ e $S_2^2$, con pesi proporzionali ai gradi di libertà.

Statistica test:
$$t = \frac{\bar{X}_1 - \bar{X}_2}{S_p\sqrt{1/n_1 + 1/n_2}} \sim t(n_1+n_2-2) \text{ sotto } H_0$$

#### Varianze diverse — test di Welch (raccomandato nella pratica)

$$t_W = \frac{\bar{X}_1 - \bar{X}_2}{\sqrt{S_1^2/n_1 + S_2^2/n_2}} \approx t(\nu)$$

I gradi di libertà $\nu$ si calcolano con la **formula di Satterthwaite**:

$$\nu = \frac{(S_1^2/n_1 + S_2^2/n_2)^2}{\dfrac{(S_1^2/n_1)^2}{n_1-1} + \dfrac{(S_2^2/n_2)^2}{n_2-1}}$$

$\nu$ in generale non è intero: si arrotonda verso il basso. Il test di Welch è robusto anche se le varianze sono uguali, quindi è spesso preferito nella pratica.

### Test t a coppie (paired t-test)

**Scenario:** $n$ coppie di osservazioni $(X_{1i}, X_{2i})$, tipicamente la stessa unità sperimentale misurata due volte (prima/dopo trattamento).

**Idea:** le due osservazioni sono correlate, quindi non possiamo usare il test a due campioni indipendenti. Definiamo le differenze:

$$D_i = X_{1i} - X_{2i}, \quad i = 1, \ldots, n$$

e applichiamo il **test t a un campione** a $D_1, \ldots, D_n$ con $H_0: \mu_D = 0$.

$$t = \frac{\bar{D}}{S_D/\sqrt{n}} \sim t(n-1) \text{ sotto } H_0$$

dove $\bar{D} = \frac{1}{n}\sum D_i$ e $S_D^2 = \frac{1}{n-1}\sum(D_i - \bar{D})^2$.

Il test a coppie è **più potente** del test a due campioni indipendenti quando le coppie sono correlate, perché elimina la variabilità tra unità sperimentali.

## 4. Derivazioni — passaggi algebrici commentati

### Perché $n-1$ gradi di libertà?

Con $n$ osservazioni e media campionaria $\bar{X}$ fissata, solo $n-1$ differenze $(X_i - \bar{X})$ sono "libere": la $n$-esima è determinata dalle altre perché $\sum(X_i - \bar{X}) = 0$. Ecco perché $S^2$ ha $n-1$ al denominatore (stimatore non distorto) e la statistica $t$ ha $n-1$ gradi di libertà.

Formalmente: $\frac{(n-1)S^2}{\sigma^2} \sim \chi^2(n-1)$ e $\bar{X}$ e $S^2$ sono indipendenti (per la normale). Quindi:

$$t = \frac{\bar{X}-\mu}{\sigma/\sqrt{n}} \cdot \frac{1}{\sqrt{\chi^2(n-1)/(n-1)}} = \frac{N(0,1)}{\sqrt{\chi^2(n-1)/(n-1)}} \sim t(n-1)$$

Questa è la definizione stessa della distribuzione $t$.

### Derivazione di $S_p^2$

Con $\sigma_1^2 = \sigma_2^2 = \sigma^2$, abbiamo due stime indipendenti di $\sigma^2$:
- $S_1^2$: basata su $n_1-1$ gradi di libertà, quindi $(n_1-1)S_1^2/\sigma^2 \sim \chi^2(n_1-1)$
- $S_2^2$: basata su $n_2-1$ gradi di libertà, quindi $(n_2-1)S_2^2/\sigma^2 \sim \chi^2(n_2-1)$

Sommiamo: $\frac{(n_1-1)S_1^2 + (n_2-1)S_2^2}{\sigma^2} \sim \chi^2(n_1+n_2-2)$, che porta al denominatore $n_1+n_2-2$ in $S_p^2$.

### Formula di Satterthwaite — intuizione

Quando le varianze sono diverse, la statistica $t_W$ non ha esattamente una distribuzione t, ma si approssima a $t(\nu)$. La formula di Satterthwaite determina il $\nu$ ottimale eguagliando i momenti di secondo ordine. Il risultato è quasi sempre un numero non intero, compreso tra $\min(n_1-1, n_2-1)$ e $n_1+n_2-2$.

## 5. Esempi — da facile a difficile

### Esempio 1 — Test t a un campione, conclusione di non rifiuto

$n = 25$, $\bar{x} = 52$, $s = 10$. Testare $H_0: \mu = 50$ vs $H_1: \mu > 50$ a $\alpha = 0.05$.

$$t_{\text{obs}} = \frac{52-50}{10/\sqrt{25}} = \frac{2}{2} = 1.00$$

Valore critico: $t_{24, 0.05} = 1.711$ (unilaterale). Poiché $1.00 < 1.711$: **non rifiutare** $H_0$.

p-value $= P(T_{24} > 1.00) \approx 0.163 > 0.05$. Confermato.

### Esempio 2 — Test t a un campione, rifiuto

$n = 16$, $\bar{x} = 53.5$, $s = 8$. Testare $H_0: \mu = 50$ vs $H_1: \mu \neq 50$ a $\alpha = 0.05$.

$$t_{\text{obs}} = \frac{53.5-50}{8/4} = \frac{3.5}{2} = 1.75$$

Valore critico: $t_{15, 0.025} = 2.131$. Poiché $1.75 < 2.131$: **non rifiutare** $H_0$.

Ma se $n = 16$ e $\bar{x} = 55$: $t = \frac{5}{2} = 2.50 > 2.131$. **Rifiutare** $H_0$.

### Esempio 3 — Intervallo di confidenza equivalente

Stessa situazione: $n=16$, $\bar{x}=53.5$, $s=8$. IC al 95%:

$$53.5 \pm 2.131 \cdot \frac{8}{4} = 53.5 \pm 4.26 = (49.24,\ 57.76)$$

Poiché $\mu_0 = 50$ è dentro l'intervallo, non rifiutiamo $H_0$. Coerente con il test.

### Esempio 4 — Due campioni indipendenti con varianze uguali

Gruppo A: $n_1=10$, $\bar{x}_1=65$, $s_1=8$. Gruppo B: $n_2=12$, $\bar{x}_2=60$, $s_2=7$. Testare $H_0: \mu_1=\mu_2$ a $\alpha=0.05$.

$$S_p^2 = \frac{9 \cdot 64 + 11 \cdot 49}{20} = \frac{576+539}{20} = \frac{1115}{20} = 55.75, \quad S_p \approx 7.467$$

$$t = \frac{65-60}{7.467\sqrt{1/10+1/12}} = \frac{5}{7.467 \cdot 0.4282} \approx \frac{5}{3.198} \approx 1.564$$

Valore critico: $t_{20, 0.025} = 2.086$. Poiché $1.564 < 2.086$: **non rifiutare** $H_0$.

### Esempio 5 — Test di Welch

Gruppo A: $n_1=8$, $\bar{x}_1=100$, $s_1=20$. Gruppo B: $n_2=10$, $\bar{x}_2=85$, $s_2=5$. Le varianze sembrano molto diverse: usiamo Welch.

$$t_W = \frac{100-85}{\sqrt{400/8+25/10}} = \frac{15}{\sqrt{50+2.5}} = \frac{15}{\sqrt{52.5}} \approx \frac{15}{7.246} \approx 2.070$$

Gradi di libertà di Satterthwaite:
$$\nu = \frac{(50+2.5)^2}{\frac{50^2}{7}+\frac{2.5^2}{9}} = \frac{2756.25}{\frac{2500}{7}+\frac{6.25}{9}} = \frac{2756.25}{357.14+0.694} \approx \frac{2756.25}{357.83} \approx 7.70 \approx 7$$

Valore critico: $t_{7,0.025} = 2.365$. Poiché $2.070 < 2.365$: **non rifiutare** $H_0$ (appena sotto soglia).

### Esempio 6 — Test a coppie

Pressioni arteriose (mmHg) di 6 pazienti prima e dopo trattamento:

| Paziente | Prima | Dopo | $D_i$ |
| --- | --- | --- | --- |
| 1 | 145 | 140 | -5 |
| 2 | 138 | 135 | -3 |
| 3 | 152 | 152 | 0 |
| 4 | 160 | 153 | -7 |
| 5 | 141 | 143 | +2 |
| 6 | 148 | 144 | -4 |

$\bar{d} = (-5-3+0-7+2-4)/6 = -17/6 \approx -2.833$

$s_D = \sqrt{\frac{\sum(D_i-\bar{d})^2}{5}}$. I termini $(D_i - \bar{d})^2$: $(-2.167)^2, (-0.167)^2, (2.833)^2, (-4.167)^2, (4.833)^2, (-1.167)^2 = 4.695, 0.028, 8.026, 17.364, 23.358, 1.362$. Somma $= 54.833$. $s_D = \sqrt{54.833/5} = \sqrt{10.967} \approx 3.312$.

$$t = \frac{-2.833}{3.312/\sqrt{6}} = \frac{-2.833}{1.352} \approx -2.096$$

Valore critico $t_{5,0.05} = 2.015$ (unilaterale, $H_1: \mu_D < 0$). Poiché $|-2.096| > 2.015$: **rifiutare** $H_0$. Il trattamento riduce significativamente la pressione.

### Esempio 7 — Confronto paired vs. due campioni indipendenti

Con gli stessi dati dell'Esempio 6, se avessimo ignorato l'accoppiamento e usato il test a due campioni indipendenti:

"Prima": $\bar{x}_1 = 147.33$, $s_1 \approx 7.74$. "Dopo": $\bar{x}_2 = 144.50$, $s_2 \approx 6.54$.

$$S_p^2 = \frac{5 \cdot 59.87 + 5 \cdot 42.7}{10} = 51.28, \quad S_p \approx 7.16$$

$$t = \frac{147.33-144.50}{7.16\sqrt{2/6}} = \frac{2.83}{4.13} \approx 0.685$$

Con $t_{10,0.05} = 1.812$: **non rifiutare** $H_0$! Il test a coppie è molto più potente perché elimina la variabilità inter-individuale.

## 6. Grafico

```plot
{"fn":"(1+x*x/10)**(-(10+1)/2)/Math.sqrt(10*3.14159)*Math.exp(Math.log(Math.exp(Math.lgamma((10+1)/2))-Math.log(Math.exp(Math.lgamma(10/2)))))","domain":[-4,4],"yDomain":[0,0.45],"title":"Distribuzione t(10) vs N(0,1) — code più pesanti","label1":"t(10)","fn2":"Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)","label2":"N(0,1)","color":"steelblue","color2":"crimson"}
```

## 7. Interattivo

```slider
{"fn":"Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)","domain":[-5,5],"yDomain":[0,0.5],"params":[{"name":"df","min":1,"max":30,"step":1,"default":5}],"title":"Distribuzione t al variare dei gradi di libertà ν"}
```

## 8. Errori comuni

**Errore 1 — Usare il test Z quando σ non è nota.**
Sostituire $\sigma$ con $S$ nella statistica Z non è corretto: la distribuzione risultante non è $N(0,1)$ ma $t(n-1)$, con code più pesanti. Con campioni piccoli ($n<30$) questo porta a p-value sottostimati e falsi positivi in eccesso.

**Errore 2 — Usare il test a due campioni indipendenti per dati appaiati.**
Se le osservazioni sono appaiate (stessa persona prima/dopo, esperimenti in coppia), il test a due campioni tratta una correlazione come se non esistesse, perdendo potenza. Come visto nell'Esempio 7, si può arrivare a conclusioni opposte.

**Errore 3 — Assumere uguale varianza senza verificare.**
Il test pooled richiede $\sigma_1^2 \approx \sigma_2^2$. Se le varianze sono molto diverse (rapporto > 4:1), il test pooled è distorto. Preferire il test di Welch, che funziona in entrambi i casi.

**Errore 4 — Confondere errore standard e deviazione standard.**
$S$ è la deviazione standard del campione (misura la variabilità dei singoli dati). $S/\sqrt{n}$ è l'errore standard della media (misura quanto oscilla $\bar{X}$). La statistica t usa l'errore standard, non $S$ direttamente.

**Errore 5 — Ignorare la normalità per campioni molto piccoli.**
Con $n < 10$, il test t richiede che i dati vengano da una distribuzione approssimativamente normale. Con dati molto asimmetrici o con outlier, considera il test di Wilcoxon (alternativa non parametrica).

**Errore 6 — Gradi di libertà errati nel test a due campioni.**
Per il test pooled i gradi di libertà sono $n_1+n_2-2$ (non $n_1+n_2-1$ né $n_1+n_2$). Per il test di Welch si usa la formula di Satterthwaite. Usare gradi di libertà sbagliati altera il valore critico.

**Errore 7 — Confondere test unilaterale e bilaterale.**
Il test unilaterale ha valori critici più piccoli (è più "facile" da rifiutare in una direzione). Scegliere il tipo di test dopo aver visto i dati è una forma di p-hacking. Il tipo di test deve essere pre-specificato in base alla domanda scientifica.

## 9. Applicazioni reali

**Farmacologia clinica:** per confrontare l'efficacia di un farmaco rispetto al placebo, si misurano i valori (pressione, glicemia, ecc.) sugli stessi pazienti prima e dopo (paired t-test) oppure su due gruppi distinti (two-sample t-test). L'FDA richiede almeno due trial clinici con risultati significativi prima dell'approvazione.

**Controllo qualità manifatturiero:** un'azienda automotive testa se la resistenza media di un componente (es. cintura di sicurezza) soddisfa le specifiche. Con $n=20$ campioni dalla linea di produzione, il test t a un campione verifica $H_0: \mu = \mu_{\text{spec}}$.

**Psicologia sperimentale:** per testare se un intervento cognitivo migliora la memoria, si somministra un test di memoria prima e dopo il training ai partecipanti. Il paired t-test verifica se la differenza media è significativamente diversa da zero.

**Finanza:** un analista confronta i rendimenti medi di due strategie di investimento su periodi storici indipendenti, usando il test t a due campioni per decidere se una strategia è genuinamente superiore o se la differenza è accidentale.

## 10. Riepilogo

| Tipo di test | Statistica | Gradi di libertà | Quando usarlo |
| --- | --- | --- | --- |
| t a un campione | $t = \frac{\bar{X}-\mu_0}{S/\sqrt{n}}$ | $n-1$ | Media di un gruppo vs. valore fisso, $\sigma$ ignota |
| t due campioni (pooled) | $t = \frac{\bar{X}_1-\bar{X}_2}{S_p\sqrt{1/n_1+1/n_2}}$ | $n_1+n_2-2$ | Due gruppi indipendenti, $\sigma_1 \approx \sigma_2$ |
| t di Welch | $t_W = \frac{\bar{X}_1-\bar{X}_2}{\sqrt{S_1^2/n_1+S_2^2/n_2}}$ | Formula Satterthwaite | Due gruppi indipendenti, varianze diverse |
| t a coppie | $t = \frac{\bar{D}}{S_D/\sqrt{n}}$ | $n-1$ | Coppie correlate (prima/dopo) |

## 11. Esercizi

<details>
<summary>Esercizio 1: Test t a un campione — valore limite</summary>

Un produttore afferma che i bulloni hanno diametro medio $\mu_0 = 20$ mm. Un controllo di qualità su $n=9$ bulloni dà $\bar{x}=20.6$ mm e $s=1.2$ mm. Testare $H_0: \mu=20$ vs $H_1: \mu \neq 20$ a $\alpha=0.05$.

**Soluzione.**

$$t_{\text{obs}} = \frac{20.6-20}{1.2/\sqrt{9}} = \frac{0.6}{0.4} = 1.50$$

Valore critico: $t_{8, 0.025} = 2.306$. Poiché $1.50 < 2.306$: **non rifiutare** $H_0$.

p-value $\approx 0.172 > 0.05$. Non c'è evidenza sufficiente che il diametro medio sia diverso da 20 mm.

</details>

<details>
<summary>Esercizio 2: Test t a un campione unilaterale</summary>

Un espresso "normale" ha 30 mg di caffeina. Un nuovo blend speciale viene testato su $n=16$ tazze: $\bar{x}=32.5$ mg, $s=4$ mg. C'è evidenza che il nuovo blend abbia più caffeina? ($\alpha=0.05$)

**Soluzione.**

$H_0: \mu=30$ vs $H_1: \mu>30$ (unilaterale destra).

$$t_{\text{obs}} = \frac{32.5-30}{4/4} = \frac{2.5}{1} = 2.50$$

Valore critico: $t_{15, 0.05} = 1.753$. Poiché $2.50 > 1.753$: **rifiutare** $H_0$.

p-value $= P(T_{15} > 2.50) \approx 0.012 < 0.05$. Sì, c'è evidenza significativa che il nuovo blend abbia più caffeina.

</details>

<details>
<summary>Esercizio 3: Intervallo di confidenza e test</summary>

$n=25$, $\bar{x}=48$, $s=10$. Costruire l'IC al 95% per $\mu$ e usarlo per testare $H_0: \mu=50$.

**Soluzione.**

$$\text{IC}_{95\%} = 48 \pm t_{24,0.025} \cdot \frac{10}{\sqrt{25}} = 48 \pm 2.064 \cdot 2 = 48 \pm 4.128 = (43.87,\ 52.13)$$

Poiché $\mu_0 = 50$ è **dentro** l'intervallo $(43.87, 52.13)$: **non rifiutare** $H_0$ al livello 5%.

</details>

<details>
<summary>Esercizio 4: Due campioni indipendenti — pooled</summary>

Punteggi di un test per due classi: Classe A ($n_1=15$, $\bar{x}_1=72$, $s_1=9$) e Classe B ($n_2=12$, $\bar{x}_2=68$, $s_2=10$). Testare se c'è differenza significativa ($\alpha=0.05$), assumendo uguale varianza.

**Soluzione.**

$$S_p^2 = \frac{14 \cdot 81 + 11 \cdot 100}{25} = \frac{1134+1100}{25} = \frac{2234}{25} = 89.36, \quad S_p = 9.453$$

$$t = \frac{72-68}{9.453\sqrt{1/15+1/12}} = \frac{4}{9.453 \cdot 0.3727} = \frac{4}{3.523} \approx 1.135$$

Valore critico: $t_{25,0.025} = 2.060$. Poiché $1.135 < 2.060$: **non rifiutare** $H_0$.

Non c'è evidenza significativa di differenza tra le due classi.

</details>

<details>
<summary>Esercizio 5: Test di Welch</summary>

Tempi di reazione (ms) di due gruppi: Esperto ($n_1=8$, $\bar{x}_1=250$, $s_1=20$) e Novizio ($n_2=10$, $\bar{x}_2=310$, $s_2=60$). Le varianze sono molto diverse — usare il test di Welch a $\alpha=0.01$.

**Soluzione.**

$$t_W = \frac{250-310}{\sqrt{400/8+3600/10}} = \frac{-60}{\sqrt{50+360}} = \frac{-60}{\sqrt{410}} \approx \frac{-60}{20.25} \approx -2.963$$

$$\nu = \frac{(50+360)^2}{\frac{50^2}{7}+\frac{360^2}{9}} = \frac{168100}{\frac{2500}{7}+\frac{129600}{9}} = \frac{168100}{357.14+14400} \approx \frac{168100}{14757} \approx 11.39 \approx 11$$

Valore critico: $t_{11,0.005} = 3.106$. Poiché $|-2.963| < 3.106$: **non rifiutare** $H_0$ a $\alpha=0.01$.

A $\alpha=0.05$ ($t_{11,0.025}=2.201$): $2.963 > 2.201$, rifiuteremmo $H_0$.

</details>

<details>
<summary>Esercizio 6: Paired t-test completo</summary>

Un programma di fitness viene valutato misurando l'indice di massa corporea (BMI) di 8 partecipanti prima e dopo 3 mesi. Differenze $D_i = \text{Prima} - \text{Dopo}$: $1.2, 0.8, 2.1, 1.5, 0.3, 1.8, 1.0, 0.5$.

Testare se il programma riduce il BMI a $\alpha=0.05$.

**Soluzione.**

$\bar{d} = (1.2+0.8+2.1+1.5+0.3+1.8+1.0+0.5)/8 = 9.2/8 = 1.15$

$s_D$: varianze $(D_i-\bar{d})^2$: $0.0025, 0.1225, 0.9025, 0.1225, 0.7225, 0.4225, 0.0225, 0.4225$. Somma $= 2.84$. $s_D = \sqrt{2.84/7} = \sqrt{0.4057} \approx 0.637$.

$$t = \frac{1.15}{0.637/\sqrt{8}} = \frac{1.15}{0.225} \approx 5.11$$

$H_1: \mu_D > 0$. Valore critico: $t_{7,0.05}=1.895$. Poiché $5.11 \gg 1.895$: **rifiutare** $H_0$.

Il programma riduce significativamente il BMI ($p \approx 0.001$).

</details>

<details>
<summary>Esercizio 7: Potenza del test t</summary>

Test t a un campione: $n=20$, $\sigma \approx s = 15$ (ipotizzato), $\alpha=0.05$ bilaterale. Qual è la potenza approssimata contro $H_1: \mu = \mu_0 + 8$?

**Soluzione.**

Approssimando $t(19) \approx N(0,1)$ per semplicità:

$$\delta = \frac{8}{15/\sqrt{20}} = \frac{8}{3.354} \approx 2.385$$

$$\text{Potenza} \approx \Phi(\delta - z_{0.025}) + \Phi(-\delta - z_{0.025})$$
$$= \Phi(2.385 - 1.96) + \Phi(-2.385 - 1.96)$$
$$= \Phi(0.425) + \Phi(-4.345)$$
$$\approx 0.665 + 0 \approx 0.665$$

La potenza è circa 66.5%: per aumentarla all'80%, occorrerebbero circa $n=28$ soggetti.

</details>

<details>
<summary>Esercizio 8: Scegliere il test corretto</summary>

Descrivi quale tipo di test t usare in ciascun caso:

a) Confronto tra altezza media degli studenti maschi di due scuole diverse.
b) Verifica che la velocità media delle auto su un'autostrada sia 130 km/h (limite).
c) Confronto del colesterolo di 15 pazienti prima e dopo una dieta.

**Soluzione.**

a) **Due campioni indipendenti** (pooled o Welch): i due gruppi sono composti da persone diverse, non c'è accoppiamento naturale.

b) **Un campione**: si confronta la media campionaria con un valore fisso di riferimento ($\mu_0 = 130$).

c) **Paired t-test**: gli stessi 15 pazienti vengono misurati due volte. Le misurazioni sono correlate (la costituzione genetica di ogni paziente rimane la stessa).

</details>
