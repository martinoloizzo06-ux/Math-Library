---
id: statistica-04-intervalli-confidenza
subject: statistica
topic_it: Fondamenti di inferenza
topic_en: Foundations of inference
title_it: Intervalli di confidenza
title_en: Confidence intervals
level: purple
order: 4
source_book: "L. Wasserman, All of Statistics; Casella & Berger, Statistical Inference"
source_chapter: "Cap. 8 — Intervalli di confidenza"
---

## 1. Intuizione — stimare con onestà sull'incertezza

Supponiamo di misurare l'efficacia di un vaccino su 1000 persone e di trovare una riduzione del rischio del 70%. Sarebbe onesto dire "l'efficacia è esattamente 70%"? No: stiamo lavorando con un campione, e se ripetessimo lo studio otterremmo un numero diverso — forse 68%, forse 73%.

Un **intervallo di confidenza** (IC) quantifica questa incertezza: invece di dire "l'efficacia è 70%", diciamo "l'efficacia è tra 65% e 75%, con confidenza 95%". Questo è molto più informativo e onesto.

La parola "confidenza" ha un significato tecnico preciso, diverso da quello intuitivo. L'**interpretazione frequentista corretta** è: se costruissimo questo intervallo molte volte (su molti campioni diversi), il 95% degli intervalli ottenuti conterrebbe il vero valore del parametro. Non stiamo dicendo che c'è il 95% di probabilità che il vero valore stia *in questo specifico intervallo* — il vero valore è fisso, non aleatorio.

Come costruire questi intervalli? Tre metodi principali nella lezione: per la media con $\sigma$ nota (usando la distribuzione normale), per la media con $\sigma$ ignota (distribuzione $t$ di Student), per proporzioni (approssimazione normale) e per la varianza (distribuzione chi-quadrato).

## 2. Prerequisiti

- Distribuzione normale standard: quantili $z_\alpha = \Phi^{-1}(\alpha)$; $z_{0.025} = 1.96$ per IC al 95%
- Distribuzione $t$ di Student con $k$ gradi di libertà: coda più pesante della normale per $k$ piccolo
- Distribuzione chi-quadrato $\chi^2(k)$: somma di $k$ normali standard al quadrato
- Media campionaria $\bar{X}$ e sue proprietà: $E[\bar{X}]=\mu$, $\text{Var}(\bar{X})=\sigma^2/n$
- Varianza campionaria $S^2$ e distribuzione di $(n-1)S^2/\sigma^2 \sim \chi^2(n-1)$
- Teorema centrale del limite

## 3. Teoria

### Definizione formale

Un **intervallo di confidenza** al livello $1-\alpha$ per il parametro $\theta$ è un intervallo aleatorio $[L(\mathbf{X}), U(\mathbf{X})]$ (funzione del campione $\mathbf{X}$) tale che:

$$P_\theta(\theta \in [L(\mathbf{X}), U(\mathbf{X})]) \geq 1-\alpha \quad \text{per ogni } \theta$$

Il valore $1-\alpha$ si chiama **livello di confidenza** o **livello di copertura**. Il complementare $\alpha$ è il **livello di significatività**.

**Interpretazione corretta:** su un gran numero di esperimenti ripetuti, almeno una frazione $1-\alpha$ degli intervalli costruiti con questa procedura conterrà il vero $\theta$. Non si afferma nulla sulla probabilità che il singolo IC contenga $\theta$.

### IC per la media — $\sigma$ nota (distribuzione Z)

Quando $X_i \overset{\text{iid}}{\sim} \mathcal{N}(\mu, \sigma^2)$ con $\sigma$ nota, la statistica pivot è:

$$Z = \frac{\bar{X} - \mu}{\sigma/\sqrt{n}} \sim \mathcal{N}(0,1)$$

Si costruisce l'IC sfruttando questa distribuzione esatta:

$$P\!\left(-z_{\alpha/2} \leq \frac{\bar{X}-\mu}{\sigma/\sqrt{n}} \leq z_{\alpha/2}\right) = 1-\alpha$$

Risolvendo per $\mu$ (isolando $\mu$ al centro della disuguaglianza):

$$\text{IC}_{1-\alpha}(\mu) = \bar{X} \pm z_{\alpha/2} \frac{\sigma}{\sqrt{n}}$$

Valori comuni: $z_{0.025} = 1.96$ per $\alpha = 0.05$ (IC al 95%); $z_{0.005} = 2.576$ per $\alpha = 0.01$ (IC al 99%); $z_{0.05} = 1.645$ per $\alpha = 0.10$ (IC al 90%).

**Caso asintotico:** per $n$ grande e $\sigma$ ignota, per il TCL si sostituisce $\sigma$ con $S$:

$$\text{IC}_{1-\alpha}(\mu) \approx \bar{X} \pm z_{\alpha/2} \frac{S}{\sqrt{n}}$$

Questa approssimazione migliora con $n$; è accettabile per $n \geq 30$ con distribuzioni non troppo asimmetriche.

### IC per la media — $\sigma$ ignota (distribuzione t)

Quando $\sigma$ è ignota, si usa $S$ al posto di $\sigma$, ma la statistica risultante non è più normale standard — ha una distribuzione $t$ di Student con $n-1$ gradi di libertà:

$$T = \frac{\bar{X} - \mu}{S/\sqrt{n}} \sim t_{n-1}$$

Questo risultato esatto (non approssimato!) dipende dalla normalità dei dati e dall'indipendenza di $\bar{X}$ e $S^2$ (teorema di Fisher).

L'IC per $\mu$ con $\sigma$ ignota è:

$$\text{IC}_{1-\alpha}(\mu) = \bar{X} \pm t_{n-1,\,\alpha/2} \frac{S}{\sqrt{n}}$$

dove $t_{n-1,\alpha/2}$ è il quantile $1-\alpha/2$ della $t$ con $n-1$ g.d.l. Poiché la $t$ ha code più pesanti della normale, $t_{n-1,\alpha/2} > z_{\alpha/2}$, producendo intervalli più larghi — correttamente più cautelosi con meno informazione su $\sigma$.

Per $n$ grande ($n > 30$), $t_{n-1,\alpha/2} \approx z_{\alpha/2}$ e i due IC coincidono praticamente.

### IC per la proporzione

Per $X \sim \text{Bin}(n, p)$, la proporzione campionaria $\hat{p} = X/n$ stima $p$. Per $n$ grande (regola pratica: $np \geq 5$ e $n(1-p) \geq 5$):

$$\frac{\hat{p} - p}{\sqrt{p(1-p)/n}} \approx \mathcal{N}(0,1)$$

Sostituendo $p$ con $\hat{p}$ al denominatore:

$$\text{IC}_{1-\alpha}(p) = \hat{p} \pm z_{\alpha/2}\sqrt{\frac{\hat{p}(1-\hat{p})}{n}}$$

Questo è il **CI di Wald**. Per $\hat{p}$ vicino a 0 o 1, o $n$ piccolo, si preferisce il più accurato **IC di Wilson**:

$$\text{IC Wilson} = \frac{\hat{p} + z^2/(2n)}{1+z^2/n} \pm \frac{z\sqrt{\hat{p}(1-\hat{p})/n + z^2/(4n^2)}}{1+z^2/n}$$

dove $z = z_{\alpha/2}$.

### IC per la varianza (distribuzione chi-quadrato)

Quando $X_i \overset{\text{iid}}{\sim} \mathcal{N}(\mu, \sigma^2)$ con $\mu$ ignota:

$$\frac{(n-1)S^2}{\sigma^2} \sim \chi^2(n-1)$$

L'IC per $\sigma^2$ non è simmetrico (la $\chi^2$ non è simmetrica):

$$\text{IC}_{1-\alpha}(\sigma^2) = \left[\frac{(n-1)S^2}{\chi^2_{n-1,\,\alpha/2}},\; \frac{(n-1)S^2}{\chi^2_{n-1,\,1-\alpha/2}}\right]$$

dove $\chi^2_{n-1,\alpha/2}$ è il quantile $\alpha/2$ della chi-quadrato con $n-1$ g.d.l.

Per l'IC su $\sigma$: prendere le radici degli estremi dell'IC su $\sigma^2$.

### Ampiezza e dimensione campionaria

L'ampiezza dell'IC per la media con $\sigma$ nota è $2 z_{\alpha/2}\sigma/\sqrt{n}$.

Per ottenere un'ampiezza massima $2e$ (errore massimo ammissibile $= e$):

$$n \geq \left(\frac{z_{\alpha/2}\,\sigma}{e}\right)^2$$

Se $\sigma$ non è nota a priori, si può stimarla da un piccolo studio pilota, o usare il range osservato diviso 4 (approssimazione rozza per distribuzioni approssimativamente normali).

## 4. Derivazioni

### Derivazione dell'IC per $\mu$ con $\sigma$ nota

Partiamo dalla pivot $Z = (\bar{X}-\mu)/(\sigma/\sqrt{n}) \sim \mathcal{N}(0,1)$.

$P(-z_{\alpha/2} \leq Z \leq z_{\alpha/2}) = 1-\alpha$

Sostituendo la definizione di $Z$:

$P\!\left(-z_{\alpha/2} \leq \frac{\bar{X}-\mu}{\sigma/\sqrt{n}} \leq z_{\alpha/2}\right) = 1-\alpha$

Moltiplichiamo per $\sigma/\sqrt{n} > 0$ (non cambia il verso):

$P\!\left(-z_{\alpha/2}\frac{\sigma}{\sqrt{n}} \leq \bar{X}-\mu \leq z_{\alpha/2}\frac{\sigma}{\sqrt{n}}\right) = 1-\alpha$

Sottraiamo $\bar{X}$ e moltiplichiamo per $-1$ (cambia il verso):

$P\!\left(\bar{X} - z_{\alpha/2}\frac{\sigma}{\sqrt{n}} \leq \mu \leq \bar{X} + z_{\alpha/2}\frac{\sigma}{\sqrt{n}}\right) = 1-\alpha$ $\square$

### Derivazione della distribuzione t di Student

$T = \frac{\bar{X}-\mu}{S/\sqrt{n}} = \frac{(\bar{X}-\mu)/(\sigma/\sqrt{n})}{S/\sigma} = \frac{Z}{\sqrt{W/(n-1)}}$

dove $Z = (\bar{X}-\mu)/(\sigma/\sqrt{n}) \sim \mathcal{N}(0,1)$ e $W = (n-1)S^2/\sigma^2 \sim \chi^2(n-1)$.

Per il teorema di Fisher, $Z$ e $W$ sono indipendenti. Per definizione, il rapporto di una normale standard per la radice di una chi-quadrato divisa i suoi g.d.l. è una $t$ di Student:

$$T = \frac{Z}{\sqrt{W/(n-1)}} \sim t_{n-1}$$ $\square$

## 5. Esempi

**Esempio 1 — IC al 95% con $\sigma$ nota**

Altezze di $n = 36$ studenti: $\bar{x} = 172$ cm. Si sa che $\sigma = 10$ cm.

$\text{SE} = 10/\sqrt{36} = 10/6 \approx 1.667$ cm

IC 95%: $172 \pm 1.96 \times 1.667 = 172 \pm 3.27 = [168.73,\; 175.27]$ cm

**Esempio 2 — IC al 95% con $\sigma$ ignota**

$n = 16$, $\bar{x} = 50$ kg, $s = 8$ kg. Con $t_{15,\,0.025} = 2.131$:

$\text{IC} = 50 \pm 2.131 \times 8/\sqrt{16} = 50 \pm 2.131 \times 2 = 50 \pm 4.262 = [45.74,\; 54.26]$

**Esempio 3 — Confronto IC normale vs IC t**

Stesso campione ($n=16$, $\bar{x}=50$, $s=8$) ma con IC "normale" errato:

IC (errato, usa $z$): $50 \pm 1.96 \times 2 = [46.08,\; 53.92]$

IC (corretto, usa $t_{15}$): $[45.74,\; 54.26]$

L'IC corretto è più ampio di circa 0.35 cm per lato — il prezzo di non conoscere $\sigma$.

**Esempio 4 — IC per proporzione**

Sondaggio di $n = 400$ persone, $x = 220$ favorevoli. $\hat{p} = 0.55$.

$\text{SE} = \sqrt{0.55 \times 0.45 / 400} = \sqrt{0.000619} \approx 0.02488$

IC 95%: $0.55 \pm 1.96 \times 0.02488 = 0.55 \pm 0.0487 = [0.501,\; 0.599]$

**Esempio 5 — IC per varianza**

$n = 21$ osservazioni, $s^2 = 4.5$. Costruire IC 95% per $\sigma^2$.

$\chi^2_{20,\,0.025} = 9.591$, $\chi^2_{20,\,0.975} = 34.170$

$\text{IC} = \left[\frac{20 \times 4.5}{34.170},\; \frac{20 \times 4.5}{9.591}\right] = \left[\frac{90}{34.170},\; \frac{90}{9.591}\right] = [2.634,\; 9.383]$

IC per $\sigma$: $[\sqrt{2.634},\; \sqrt{9.383}] = [1.623,\; 3.063]$

**Esempio 6 — Determinazione della dimensione campionaria**

Stimare il reddito medio con errore massimo $\pm 200$ euro e confidenza 95%. Si stima $\sigma \approx 2000$ euro.

$n \geq (z_{0.025} \times \sigma / e)^2 = (1.96 \times 2000 / 200)^2 = (19.6)^2 = 384.16$

Servono almeno $n = 385$ osservazioni.

**Esempio 7 — IC al 99% e confronto con 95%**

Stesso campione dell'Esempio 2 ($n=16$, $\bar{x}=50$, $s=8$) ma al 99%: $t_{15,\,0.005} = 2.947$.

IC 99%: $50 \pm 2.947 \times 2 = 50 \pm 5.894 = [44.11,\; 55.89]$

Confronto: IC 95% ha ampiezza 8.52; IC 99% ha ampiezza 11.79 — più confidenza $\Rightarrow$ intervallo più largo.

**Esempio 8 — Validità del TCL per proporzioni**

Campione: $n = 50$, $\hat{p} = 0.06$. Verificare la condizione $np \geq 5$.

$n\hat{p} = 50 \times 0.06 = 3 < 5$: la condizione NON è soddisfatta. L'IC di Wald non è affidabile; usare IC di Wilson o IC esatto (Clopper-Pearson).

## 6. Grafico

```plot
{"fn":"Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)","domain":[-4,4],"yDomain":[0,0.5],"title":"Distribuzione N(0,1): area 95% nell'IC [-1.96, 1.96]","label1":"φ(z)"}
```

## 7. Interattivo

```slider
{"fn":"(1+x*x/(n-1))<0?0:Math.pow(1+x*x/(n-1),-(n)/2)*Math.exp(0.5*(function(k){var l=0;for(var i=1;i<=k;i++){l+=Math.log(i);}return l;})(n-1)-0.5*(function(k){var l=0;for(var i=1;i<=k;i++){l+=Math.log(i);}return l;})(Math.floor((n-1)/2))-0.5*Math.log(Math.PI*(n-1)))(0)","domain":[-4,4],"yDomain":[0,0.5],"params":[{"name":"n","min":2,"max":100,"step":1,"default":5}],"title":"Distribuzione t con n-1 gradi di libertà — converge a N(0,1) per n grande"}
```

## 8. Errori comuni

**Errore 1 — Interpretare l'IC come probabilità sul parametro.** L'affermazione "c'è il 95% di probabilità che $\mu$ sia in $[45, 55]$" è **sbagliata** nella statistica frequentista. Il parametro $\mu$ è fisso (non aleatorio), quindi o è nell'intervallo o non lo è. Il 95% si riferisce alla procedura: se la ripetiamo molte volte su molti campioni, il 95% degli IC costruiti conterrà $\mu$.

**Errore 2 — Usare la distribuzione normale invece della t con campioni piccoli.** Se $n < 30$ e $\sigma$ è ignota, usare $z_{\alpha/2}$ invece di $t_{n-1,\alpha/2}$ sottostima l'incertezza. L'errore è piccolo per $n > 50$, ma significativo per $n = 5, 10, 15$.

**Errore 3 — Confondere SE e ampiezza dell'IC.** Lo standard error è $\sigma/\sqrt{n}$. L'ampiezza semi-dell'IC è $z_{\alpha/2} \times \text{SE}$ — è il SE moltiplicato per un fattore che dipende dal livello di confidenza. Aumentare il livello da 95% a 99% non cambia SE, ma allunga l'IC.

**Errore 4 — Interpretare l'IC al 95% come IC del 95% dei dati.** L'IC per $\mu$ contiene il valore medio, non i singoli dati. Il 95% dei **dati** individuale sta nell'intervallo $[\mu \pm 1.96\sigma]$, che è molto più largo dell'IC per la media (che cresce come $1/\sqrt{n}$).

**Errore 5 — Usare l'IC di Wald per proporzioni vicine a 0 o 1.** Con $\hat{p} = 0.02$ o $n$ piccolo, l'IC di Wald può dare estremi negativi o superiori a 1, che sono privi di senso. Si usa l'IC di Wilson che è sempre in $[0,1]$.

**Errore 6 — Dimenticare che l'IC per $\sigma^2$ è asimmetrico.** La distribuzione $\chi^2$ non è simmetrica, quindi gli IC per $\sigma^2$ non hanno la forma $s^2 \pm c$. Gli estremi si ottengono dividendo $(n-1)s^2$ per i quantili $\chi^2_{\alpha/2}$ e $\chi^2_{1-\alpha/2}$, che sono diversi.

**Errore 7 — Credere che IC più stretto sia sempre meglio.** Un IC più stretto con basso livello (es. 80%) è meno affidabile di uno più largo al 95%. La larghezza va sempre letta insieme al livello di confidenza. Ridurre l'ampiezza mantenendo il livello richiede più dati, non "furbizia" nella costruzione.

## 9. Applicazioni reali

**Sperimentazione farmaceutica.** I trial clinici riportano obbligatoriamente IC per i parametri di efficacia (riduzione del rischio, hazard ratio). La FDA richiede che l'IC al 95% per l'efficacia non includa 0 (o 1 per i rapporti) per approvare un farmaco.

**Sondaggi e elezioni.** I sondaggi politici dichiarano "margine di errore ±3% con confidenza 95%". Questo corrisponde a IC per la proporzione: con $n \approx 1000$, $\text{SE} = \sqrt{0.25/1000} \approx 0.016$ e $z_{0.025} \times 0.016 \approx 0.031$.

**Metrologia (misurazioni fisiche).** Il BIPM (Ufficio internazionale dei pesi e misure) standardizza la comunicazione delle misure con "incertezza espansa $U$ con livello di confidenza del 95%" — essenzialmente un IC per la misura del mesurarando.

**Ricerca riproducibile.** La crisi della riproducibilità in psicologia e biologia è parzialmente dovuta alla cattiva interpretazione dell'IC (e dei p-value). Studi con IC larghi (campioni piccoli) venivano pubblicati se l'IC escludeva 0, ma poi non si replicavano perché la stima era troppo imprecisa.

## 10. Riepilogo

| Concetto | Formula | Note |
| --- | --- | --- |
| IC per $\mu$ ($\sigma$ nota) | $\bar{X} \pm z_{\alpha/2}\,\sigma/\sqrt{n}$ | Esatto se $X_i \sim \mathcal{N}$; TCL se $n$ grande |
| IC per $\mu$ ($\sigma$ ignota) | $\bar{X} \pm t_{n-1,\alpha/2}\,S/\sqrt{n}$ | Esatto se $X_i \sim \mathcal{N}$; usa $t$ non $z$ |
| IC per proporzione $p$ | $\hat{p} \pm z_{\alpha/2}\sqrt{\hat{p}(1-\hat{p})/n}$ | Approssimato; valido se $n\hat{p}\geq 5$ |
| IC per $\sigma^2$ | $[(n-1)S^2/\chi^2_{\alpha/2},\;(n-1)S^2/\chi^2_{1-\alpha/2}]$ | Asimmetrico; esatto se $X_i \sim \mathcal{N}$ |
| Ampiezza IC (media) | $2\,z_{\alpha/2}\,\sigma/\sqrt{n}$ | Dimezza con quadruplo campione |
| $n$ minimo | $(z_{\alpha/2}\,\sigma/e)^2$ | Per errore massimo $e$ |
| Livelli comuni | $z_{0.025}=1.96$, $z_{0.005}=2.576$ | IC 95% e 99% rispettivamente |

## 11. Esercizi

<details>
<summary>Esercizio 1: IC al 95% con σ nota</summary>

Peso di $n = 25$ pacchi: $\bar{x} = 500$ g. Si sa che $\sigma = 15$ g. Costruire IC al 95% per il peso medio.

**Soluzione.**

$\text{SE} = 15/\sqrt{25} = 15/5 = 3$ g

IC 95%: $500 \pm 1.96 \times 3 = 500 \pm 5.88 = [494.12,\; 505.88]$ g

</details>

<details>
<summary>Esercizio 2: IC al 95% con σ ignota</summary>

$n = 10$ misurazioni di velocità: $\bar{x} = 98$ km/h, $s = 5$ km/h. Costruire IC al 95%.

**Soluzione.**

$t_{9,\,0.025} = 2.262$ (dalla tavola della $t$ con 9 g.d.l.).

$\text{IC} = 98 \pm 2.262 \times 5/\sqrt{10} = 98 \pm 2.262 \times 1.581 = 98 \pm 3.576 = [94.42,\; 101.58]$ km/h

</details>

<details>
<summary>Esercizio 3: IC per proporzione</summary>

In un campione di $n = 200$ studenti, $x = 150$ hanno il computer. Costruire IC al 90% per $p$.

**Soluzione.**

$\hat{p} = 150/200 = 0.75$. $z_{0.05} = 1.645$.

Verifica: $n\hat{p} = 150 \geq 5$ e $n(1-\hat{p}) = 50 \geq 5$. OK.

$\text{SE} = \sqrt{0.75 \times 0.25 / 200} = \sqrt{0.0009375} \approx 0.03062$

IC 90%: $0.75 \pm 1.645 \times 0.03062 = 0.75 \pm 0.0504 = [0.700,\; 0.800]$

</details>

<details>
<summary>Esercizio 4: IC per varianza</summary>

$n = 11$ osservazioni da distribuzione normale, $s = 3$. Costruire IC al 95% per $\sigma^2$.

**Soluzione.**

$s^2 = 9$, $(n-1) = 10$.

$\chi^2_{10,\,0.025} = 3.247$, $\chi^2_{10,\,0.975} = 20.483$.

IC per $\sigma^2$: $\left[\frac{10\times 9}{20.483},\; \frac{10\times 9}{3.247}\right] = \left[\frac{90}{20.483},\; \frac{90}{3.247}\right] = [4.394,\; 27.717]$

IC per $\sigma$: $[\sqrt{4.394},\; \sqrt{27.717}] = [2.096,\; 5.265]$

</details>

<details>
<summary>Esercizio 5: Dimensione campionaria per IC su proporzione</summary>

Quante persone servono per stimare la proporzione di fumatori con margine di errore $\pm 2\%$ al 95%, se non si ha informazione a priori su $p$?

**Soluzione.**

Senza informazione a priori, $p(1-p)$ è massimizzato per $p = 0.5$: $p(1-p) = 0.25$.

$n \geq \left(\frac{z_{\alpha/2}}{e}\right)^2 p(1-p) = \left(\frac{1.96}{0.02}\right)^2 \times 0.25 = 9604 \times 0.25 = 2401$

Servono almeno 2401 persone.

</details>

<details>
<summary>Esercizio 6: Confronto IC al 90%, 95%, 99%</summary>

$n = 9$, $\bar{x} = 20$, $s = 3$. Costruire IC al 90%, 95% e 99% per $\mu$.

**Soluzione.**

$\text{SE} = 3/\sqrt{9} = 1$.

$t_{8,\,0.05} = 1.860$ (IC 90%): IC $= [18.14,\; 21.86]$, ampiezza $= 3.72$

$t_{8,\,0.025} = 2.306$ (IC 95%): IC $= [17.69,\; 22.31]$, ampiezza $= 4.61$

$t_{8,\,0.005} = 3.355$ (IC 99%): IC $= [16.64,\; 23.35]$, ampiezza $= 6.71$

Più alta la confidenza, più largo l'intervallo.

</details>

<details>
<summary>Esercizio 7: Interpretazione corretta dell'IC</summary>

Si costruisce un IC al 95% e si ottiene $[42, 58]$. Quale affermazione è corretta?

(a) C'è il 95% di probabilità che $\mu$ sia in $[42, 58]$.
(b) Se riPetessi l'esperimento 100 volte, circa 95 degli IC costruiti conterrebbero $\mu$.
(c) Il 95% dei dati è compreso tra 42 e 58.
(d) $\mu$ è sicuramente in $[42, 58]$.

**Soluzione.**

La risposta corretta è **(b)**.

(a) è sbagliata: $\mu$ è fisso, non ha probabilità di essere in un intervallo.
(c) è sbagliata: l'IC riguarda la media $\mu$, non i singoli dati.
(d) è sbagliata: l'IC potrebbe non contenere $\mu$ (succede con probabilità $\alpha = 5\%$).

</details>

<details>
<summary>Esercizio 8: IC per differenza di medie (due campioni indipendenti)</summary>

Gruppo A: $n_A = 20$, $\bar{x}_A = 85$, $s_A = 12$. Gruppo B: $n_B = 25$, $\bar{x}_B = 78$, $s_B = 10$. Costruire IC al 95% per $\mu_A - \mu_B$ assumendo varianze uguali.

**Soluzione.**

Varianza pooled: $s_p^2 = \frac{(n_A-1)s_A^2 + (n_B-1)s_B^2}{n_A+n_B-2} = \frac{19\times144 + 24\times100}{43} = \frac{2736+2400}{43} = \frac{5136}{43} \approx 119.44$

$s_p \approx 10.93$

$\text{SE}_{\bar{x}_A - \bar{x}_B} = s_p\sqrt{1/n_A + 1/n_B} = 10.93\sqrt{1/20+1/25} = 10.93\sqrt{0.09} = 10.93 \times 0.3 = 3.279$

Gradi di libertà: $n_A + n_B - 2 = 43$. $t_{43,\,0.025} \approx 2.017$.

IC: $(85-78) \pm 2.017 \times 3.279 = 7 \pm 6.614 = [0.386,\; 13.614]$

L'IC non include 0: c'è evidenza (al 95%) che le medie siano diverse.

</details>
