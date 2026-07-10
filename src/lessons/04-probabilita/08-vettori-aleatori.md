---
id: probabilita-08-vettori-aleatori
subject: probabilita
topic_it: Variabili aleatorie
topic_en: Random variables
title_it: Vettori aleatori — covarianza e correlazione
title_en: Random vectors — covariance and correlation
level: blue
order: 8
source_book: "Blitzstein & Hwang, Introduction to Probability; MIT OCW 6.041"
source_chapter: "Cap. 7 — Distribuzione congiunta"
---

## 1. Intuizione

Immagina di misurare ogni giorno due grandezze: la temperatura esterna e il consumo di energia elettrica di una città. Entrambe sono variabili aleatorie, ma non sono indipendenti: nei giorni freddi si consuma di più per il riscaldamento. La temperatura e il consumo si "muovono insieme" in un certo modo.

I **vettori aleatori** sono la formalizzazione matematica di questa idea: più variabili aleatorie osservate contemporaneamente sullo stesso esperimento. Invece di studiare $X$ e $Y$ separatamente, analizziamo la loro distribuzione **congiunta**, che cattura ogni possibile relazione tra loro.

La **covarianza** misura come due variabili tendono a muoversi insieme: sale una quando sale l'altra (covarianza positiva), oppure si muovono in direzioni opposte (covarianza negativa). La **correlazione** è la versione adimensionale della covarianza, normalizzata tra $-1$ e $+1$, che permette di confrontare relazioni tra grandezze diverse.

Questi strumenti sono fondamentali in statistica, finanza (portafogli di asset), fisica (sistemi con più gradi di libertà), machine learning (feature correlate) e praticamente in ogni campo dove si osservano più grandezze contemporaneamente.

Il concetto chiave da non dimenticare: **correlazione zero non implica indipendenza**. Due variabili possono avere covarianza nulla pur essendo legate da una relazione non lineare. L'indipendenza è più forte della non-correlazione.

## 2. Prerequisiti

- Variabili aleatorie discrete e continue (lezione 01-variabili-aleatorie)
- Valore atteso e varianza (lezione 03-valore-atteso)
- Integrali doppi (per il caso continuo)
- Nozioni di base di algebra lineare (per la matrice di covarianza)

## 3. Teoria

### Distribuzione congiunta discreta

Siano $X$ e $Y$ variabili aleatorie discrete. La loro **funzione di massa di probabilità congiunta** è:

$$p_{X,Y}(x,y) = P(X=x,\, Y=y)$$

per tutte le coppie $(x,y)$ nel supporto. Deve soddisfare: $p_{X,Y}(x,y) \geq 0$ e $\sum_x \sum_y p_{X,Y}(x,y) = 1$.

Le **distribuzioni marginali** si ottengono sommando sull'altra variabile:

$$p_X(x) = \sum_y p_{X,Y}(x,y), \qquad p_Y(y) = \sum_x p_{X,Y}(x,y)$$

Questo è il principio della "marginalizzazione": per trovare la distribuzione di $X$ da sola, si somma su tutti i possibili valori di $Y$, "integrando via" $Y$.

### Distribuzione congiunta continua

Siano $X$ e $Y$ continue. La **densità congiunta** $f_{X,Y}(x,y)$ soddisfa:

$$f_{X,Y}(x,y) \geq 0, \qquad \iint_{\mathbb{R}^2} f_{X,Y}(x,y)\,dx\,dy = 1$$

La probabilità di un evento è l'integrale doppio sulla regione corrispondente:

$$P\!\left((X,Y)\in A\right) = \iint_A f_{X,Y}(x,y)\,dx\,dy$$

Le **densità marginali** si ottengono integrando:

$$f_X(x) = \int_{-\infty}^{+\infty} f_{X,Y}(x,y)\,dy, \qquad f_Y(y) = \int_{-\infty}^{+\infty} f_{X,Y}(x,y)\,dx$$

### Distribuzione condizionale

La **densità condizionale** di $Y$ dato $X=x$ è:

$$f_{Y|X}(y|x) = \frac{f_{X,Y}(x,y)}{f_X(x)}, \quad \text{per } f_X(x) > 0$$

Questa è la generalizzazione continua di $P(B|A) = P(A\cap B)/P(A)$. Fissato il valore di $X$, $f_{Y|X}(\cdot|x)$ è una densità di probabilità valida in $y$.

Il **valore atteso condizionale** è:

$$E[Y|X=x] = \int_{-\infty}^{+\infty} y\, f_{Y|X}(y|x)\,dy$$

### Indipendenza

$X$ e $Y$ sono **indipendenti** se e solo se la densità congiunta fattorizza:

$$f_{X,Y}(x,y) = f_X(x)\cdot f_Y(y) \quad \text{per ogni } (x,y)$$

Nel caso discreto: $p_{X,Y}(x,y) = p_X(x)\cdot p_Y(y)$.

Equivalentemente, conoscere il valore di $X$ non cambia la distribuzione di $Y$: $f_{Y|X}(y|x) = f_Y(y)$.

### Covarianza

La **covarianza** di $X$ e $Y$ misura la loro variazione lineare congiunta:

$$\text{Cov}(X,Y) = E[(X - E[X])(Y - E[Y])]$$

La formula computazionale (più pratica) è:

$$\text{Cov}(X,Y) = E[XY] - E[X]\,E[Y]$$

dove $E[XY] = \int\!\int xy\, f_{X,Y}(x,y)\,dx\,dy$ nel caso continuo.

**Interpretazione:** se $X > E[X]$ tende a verificarsi insieme a $Y > E[Y]$, il prodotto $(X-E[X])(Y-E[Y])$ è spesso positivo, quindi la covarianza è positiva. Se si muovono in direzioni opposte, la covarianza è negativa.

**Proprietà fondamentali della covarianza:**

| Proprietà | Formula |
| --- | --- |
| Simmetria | $\text{Cov}(X,Y) = \text{Cov}(Y,X)$ |
| Auto-covarianza | $\text{Cov}(X,X) = \text{Var}(X)$ |
| Linearità | $\text{Cov}(aX+b,\, cY+d) = ac\,\text{Cov}(X,Y)$ |
| Bilinearità | $\text{Cov}(X+Z,\, Y) = \text{Cov}(X,Y) + \text{Cov}(Z,Y)$ |
| Indipendenza | $X \perp Y \Rightarrow \text{Cov}(X,Y) = 0$ (ma non viceversa!) |

### Correlazione

La **correlazione di Pearson** è la covarianza normalizzata:

$$\rho(X,Y) = \frac{\text{Cov}(X,Y)}{\sigma_X \sigma_Y}$$

dove $\sigma_X = \sqrt{\text{Var}(X)}$ e $\sigma_Y = \sqrt{\text{Var}(Y)}$ sono le deviazioni standard.

**Proprietà:**
- $\rho(X,Y) \in [-1, +1]$ (disuguaglianza di Cauchy-Schwarz)
- $\rho = +1$: relazione lineare perfettamente positiva ($Y = aX + b$ con $a > 0$)
- $\rho = -1$: relazione lineare perfettamente negativa ($Y = aX + b$ con $a < 0$)
- $\rho = 0$: $X$ e $Y$ sono **non correlate** (non implica indipendenza!)
- $\rho$ è invariante per trasformazioni lineari crescenti

### Varianza della somma

$$\text{Var}(X + Y) = \text{Var}(X) + \text{Var}(Y) + 2\,\text{Cov}(X,Y)$$

$$\text{Var}(aX + bY) = a^2\text{Var}(X) + b^2\text{Var}(Y) + 2ab\,\text{Cov}(X,Y)$$

Per $n$ variabili:

$$\text{Var}\!\left(\sum_{i=1}^n X_i\right) = \sum_{i=1}^n \text{Var}(X_i) + 2\sum_{i < j} \text{Cov}(X_i, X_j)$$

Se le $X_i$ sono indipendenti a coppie, tutti i termini di covarianza spariscono:

$$\text{Var}\!\left(\sum_{i=1}^n X_i\right) = \sum_{i=1}^n \text{Var}(X_i) \quad \text{(se indipendenti)}$$

### Matrice di covarianza

Per il vettore aleatorio $\mathbf{X} = (X_1, \ldots, X_n)^T$ con media $\boldsymbol{\mu} = E[\mathbf{X}]$, la **matrice di covarianza** è:

$$\Sigma = E\!\left[(\mathbf{X} - \boldsymbol{\mu})(\mathbf{X} - \boldsymbol{\mu})^T\right]$$

con elementi $\Sigma_{ij} = \text{Cov}(X_i, X_j)$. In particolare $\Sigma_{ii} = \text{Var}(X_i)$.

$\Sigma$ è **simmetrica** ($\Sigma = \Sigma^T$) e **semidefinita positiva** ($\mathbf{v}^T \Sigma \mathbf{v} \geq 0$ per ogni $\mathbf{v}$). Questa proprietà garantisce che le varianze di qualsiasi combinazione lineare siano non negative.

## 4. Derivazioni

### Derivazione della formula computazionale della covarianza

Si parte dalla definizione:

$$\text{Cov}(X,Y) = E[(X - \mu_X)(Y - \mu_Y)]$$

Espandendo il prodotto:

$$= E[XY - \mu_Y X - \mu_X Y + \mu_X \mu_Y]$$

Per linearità del valore atteso:

$$= E[XY] - \mu_Y E[X] - \mu_X E[Y] + \mu_X \mu_Y$$

Sostituendo $E[X] = \mu_X$ e $E[Y] = \mu_Y$:

$$= E[XY] - \mu_Y \mu_X - \mu_X \mu_Y + \mu_X \mu_Y = E[XY] - \mu_X \mu_Y$$

Quindi: $\text{Cov}(X,Y) = E[XY] - E[X]\,E[Y]$.

### Prova che $\rho \in [-1,1]$

Per qualsiasi $t \in \mathbb{R}$, la varianza di $X + tY$ è non negativa:

$$0 \leq \text{Var}(X + tY) = \text{Var}(X) + t^2\text{Var}(Y) + 2t\,\text{Cov}(X,Y)$$

Questo è un polinomio in $t$ sempre $\geq 0$, quindi il suo discriminante è $\leq 0$:

$$\Delta = 4\,\text{Cov}(X,Y)^2 - 4\,\text{Var}(X)\,\text{Var}(Y) \leq 0$$

Dunque $\text{Cov}(X,Y)^2 \leq \text{Var}(X)\,\text{Var}(Y) = \sigma_X^2 \sigma_Y^2$, da cui:

$$\lvert\text{Cov}(X,Y)\rvert \leq \sigma_X \sigma_Y \quad \Rightarrow \quad \lvert\rho\rvert \leq 1$$

### Perché indipendenza implica covarianza zero

Se $X$ e $Y$ sono indipendenti, allora per qualsiasi funzioni $g$ e $h$:

$$E[g(X)\,h(Y)] = E[g(X)]\cdot E[h(Y)]$$

Applicando con $g(x) = x$ e $h(y) = y$:

$$E[XY] = E[X]\cdot E[Y] \quad \Rightarrow \quad \text{Cov}(X,Y) = 0$$

## 5. Esempi

**Esempio 1 — Distribuzione congiunta discreta semplice**

$X$ e $Y$ con la seguente tabella congiunta:

| $X \backslash Y$ | 0 | 1 |
| --- | --- | --- |
| 0 | 0.3 | 0.2 |
| 1 | 0.1 | 0.4 |

Marginali: $p_X(0) = 0.5$, $p_X(1) = 0.5$; $p_Y(0) = 0.4$, $p_Y(1) = 0.6$.

$E[X] = 0.5$, $E[Y] = 0.6$, $E[XY] = 1\cdot 1 \cdot 0.4 = 0.4$.

$\text{Cov}(X,Y) = 0.4 - 0.5 \cdot 0.6 = 0.4 - 0.3 = 0.1$.

---

**Esempio 2 — Covarianza nulla con dipendenza**

$X \sim \text{Unif}(-1,1)$, $Y = X^2$.

$E[X] = 0$ (per simmetria). $E[X^3] = 0$ (funzione dispari su $[-1,1]$).

$E[XY] = E[X \cdot X^2] = E[X^3] = 0$.

$\text{Cov}(X,Y) = 0 - 0 \cdot E[Y] = 0$.

Eppure $Y$ dipende perfettamente da $X$! Questo mostra che **correlazione zero non implica indipendenza**.

---

**Esempio 3 — Varianza della somma**

$\text{Var}(X) = 4$, $\text{Var}(Y) = 9$, $\text{Cov}(X,Y) = 3$.

$\text{Var}(2X - Y) = 4\text{Var}(X) + \text{Var}(Y) - 4\text{Cov}(X,Y) = 16 + 9 - 12 = 13$.

---

**Esempio 4 — Calcolo correlazione**

$\text{Var}(X) = 1$, $\text{Var}(Y) = 4$, $\text{Cov}(X,Y) = 1$.

$\rho = \dfrac{1}{\sqrt{1}\cdot\sqrt{4}} = \dfrac{1}{2} = 0.5$.

Correlazione moderatamente positiva.

---

**Esempio 5 — Densità congiunta uniforme su quadrato**

$(X,Y) \sim \text{Unif}([0,1]^2)$: $f_{X,Y}(x,y) = 1$ su $[0,1]^2$.

Marginali: $f_X(x) = \int_0^1 1\,dy = 1$, quindi $X \sim \text{Unif}(0,1)$, e analogamente $Y$.

$E[XY] = \int_0^1\!\int_0^1 xy\,dx\,dy = \left(\int_0^1 x\,dx\right)\!\left(\int_0^1 y\,dy\right) = \dfrac{1}{2}\cdot\dfrac{1}{2} = \dfrac{1}{4}$.

$E[X] = E[Y] = \dfrac{1}{2}$, quindi $\text{Cov}(X,Y) = \dfrac{1}{4} - \dfrac{1}{4} = 0$.

$X$ e $Y$ sono indipendenti (la congiunta fattorizza), quindi la covarianza è zero — coerente.

---

**Esempio 6 — Densità congiunta su triangolo**

$f_{X,Y}(x,y) = 2$ su $\{0 \leq x \leq y \leq 1\}$, zero altrove.

Marginali: $f_X(x) = \int_x^1 2\,dy = 2(1-x)$ per $x \in [0,1]$.

$E[X] = \int_0^1 2x(1-x)\,dx = 2\left[\dfrac{x^2}{2} - \dfrac{x^3}{3}\right]_0^1 = 2\cdot\dfrac{1}{6} = \dfrac{1}{3}$.

Per simmetria del problema: $f_Y(y) = 2y$, $E[Y] = \dfrac{2}{3}$.

$E[XY] = \int_0^1\!\int_0^y 2xy\,dx\,dy = \int_0^1 y^3\,dy = \dfrac{1}{4}$.

$\text{Cov}(X,Y) = \dfrac{1}{4} - \dfrac{1}{3}\cdot\dfrac{2}{3} = \dfrac{1}{4} - \dfrac{2}{9} = \dfrac{9-8}{36} = \dfrac{1}{36} \approx 0.028$.

---

**Esempio 7 — Portfolio di due asset**

Asset $A$ con rendimento $X$: $E[X] = 0.10$, $\sigma_X = 0.20$.
Asset $B$ con rendimento $Y$: $E[Y] = 0.08$, $\sigma_Y = 0.15$, $\rho(X,Y) = 0.3$.

Portfolio equi-pesato $P = \dfrac{X+Y}{2}$:

$E[P] = \dfrac{0.10 + 0.08}{2} = 0.09$.

$\text{Cov}(X,Y) = 0.3 \cdot 0.20 \cdot 0.15 = 0.009$.

$\text{Var}(P) = \dfrac{1}{4}(0.04 + 0.0225 + 2 \cdot 0.009) = \dfrac{1}{4}(0.0805) = 0.020125$.

$\sigma_P \approx 0.142 < \min(0.20, 0.15)$: la diversificazione riduce il rischio!

## 6. Grafico

```plot
{"fn":"Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)","domain":[-4,4],"yDomain":[0,0.5],"title":"Densità marginale N(0,1) — proiezione della congiunta","label1":"f(x)","color":"steelblue"}
```

## 7. Interattivo

Esplora come la correlazione $\rho$ influenza la forma della distribuzione congiunta proiettata. Al variare di $\rho$ si vede come la "nuvola" di punti si allunga lungo la diagonale ($\rho > 0$) o anti-diagonale ($\rho < 0$).

```slider
{"fn":"Math.exp(-x*x/2)/Math.sqrt(2*Math.PI) * (1 + rho * x * 0.5)","domain":[-3,3],"yDomain":[-0.05,0.55],"params":[{"name":"rho","min":-0.9,"max":0.9,"step":0.1,"default":0}],"title":"Effetto della correlazione ρ sulla densità marginale modificata"}
```

## 8. Errori comuni

**Errore 1 — Confondere correlazione zero con indipendenza.**
$\rho(X,Y) = 0$ significa solo che non c'è relazione *lineare*. $X$ e $Y$ possono essere legate da relazioni quadratiche, periodiche o qualsiasi altra forma non lineare. L'esempio canonico è $Y = X^2$ con $X$ simmetrica: correlazione zero ma dipendenza funzionale perfetta.

**Errore 2 — Dimenticare il termine $2\text{Cov}(X,Y)$ nella varianza della somma.**
$\text{Var}(X+Y) \neq \text{Var}(X) + \text{Var}(Y)$ in generale. Il termine di covarianza vale zero solo se $X$ e $Y$ sono non correlate (ad esempio se sono indipendenti). Omettere questo termine è un errore molto frequente.

**Errore 3 — Usare $\text{Cov}(aX, bY) = ab\,\text{Cov}(X,Y)$ ma sbagliare con $\text{Var}(aX)$.**
Si ricordi: $\text{Var}(aX) = a^2 \text{Var}(X)$ (il quadrato!), mentre $\text{Cov}(aX,Y) = a\,\text{Cov}(X,Y)$ (solo il primo fattore, lineare). Confondere le due formule porta a errori sistematici.

**Errore 4 — Pensare che la densità marginale si ottenga "tagliando" la congiunta.**
La densità marginale $f_X(x)$ non è $f_{X,Y}(x, 0)$ o il valore della congiunta in qualche punto specifico di $y$: è l'integrale di $f_{X,Y}(x,y)$ su tutti i valori di $y$. Si "somma" su $Y$, non si fissa.

**Errore 5 — Invertire la formula della densità condizionale.**
$f_{Y|X}(y|x) = f_{X,Y}(x,y) / f_X(x)$: si divide per la marginale della variabile condizionante ($X$), non di $Y$. Scrivere $f_{X,Y}(x,y) / f_Y(y)$ darebbe invece $f_{X|Y}(x|y)$, che è la distribuzione di $X$ dato $Y=y$.

**Errore 6 — Credere che la matrice di covarianza possa avere determinante negativo.**
$\Sigma$ è semidefinita positiva, quindi tutti gli autovalori sono $\geq 0$ e il determinante è $\geq 0$. Un determinante negativo nella matrice di covarianza è impossibile e indica un errore di calcolo.

**Errore 7 — Trattare la covarianza come adimensionale.**
La covarianza ha le unità di misura di $[X] \times [Y]$ (ad esempio, euro $\times$ km se $X$ è un prezzo e $Y$ una distanza). Solo la correlazione $\rho$ è adimensionale. Quando si confrontano relazioni tra grandezze diverse, usare $\rho$, non $\text{Cov}$.

## 9. Applicazioni reali

**Finanza — Teoria del portafoglio di Markowitz.**
La matrice di covarianza dei rendimenti degli asset è il cuore dell'ottimizzazione di portafoglio. Combinando asset con bassa correlazione tra loro si riduce il rischio complessivo (varianza del portafoglio) senza sacrificare il rendimento atteso. La diversificazione è matematicamente giustificata dalla formula $\text{Var}(\sum X_i)$ con covarianze.

**Machine learning — Riduzione della dimensionalità (PCA).**
L'Analisi delle Componenti Principali (PCA) si basa sulla matrice di covarianza delle feature. Si diagonalizza $\Sigma$ per trovare le direzioni di massima varianza (autovettori con autovalori più grandi), eliminando le ridondanze dovute a feature altamente correlate.

**Meteorologia — Previsioni multivariate.**
Temperatura, pressione e umidità sono variabili correlate. I modelli meteorologici usano distribuzioni congiunte per fare previsioni coerenti: se prevedo alta temperatura, devo prevedere bassa umidità relativa coerentemente con la covarianza osservata storicamente.

**Biostatistica — Studi epidemiologici.**
La correlazione tra fattori di rischio (fumo, età, BMI) e outcome (pressione arteriosa, rischio cardiaco) quantifica le associazioni. Una correlazione alta non implica causalità, ma guida l'analisi statistica e l'identificazione di confounders.

## 10. Riepilogo

| Concetto | Formula | Note |
| --- | --- | --- |
| Densità marginale | $f_X(x) = \int f_{X,Y}(x,y)\,dy$ | Integra via $Y$ |
| Densità condizionale | $f_{Y\lvert X}(y\lvert x) = f_{X,Y}(x,y)/f_X(x)$ | Divide per la marginale di $X$ |
| Indipendenza | $f_{X,Y}(x,y) = f_X(x)f_Y(y)$ | Fattorizzazione della congiunta |
| Covarianza (def.) | $E[(X-\mu_X)(Y-\mu_Y)]$ | Misura co-variazione lineare |
| Covarianza (calcolo) | $E[XY] - E[X]E[Y]$ | Formula più pratica |
| Correlazione | $\rho = \text{Cov}(X,Y)/(\sigma_X\sigma_Y)$ | Adimensionale, in $[-1,1]$ |
| Var della somma | $\text{Var}(X+Y) = \text{Var}(X)+\text{Var}(Y)+2\text{Cov}$ | Include il termine misto |
| Matrice di covarianza | $\Sigma_{ij} = \text{Cov}(X_i,X_j)$ | Simmetrica e SDP |

## 11. Esercizi

<details>
<summary>Esercizio 1: Covarianza da tabella</summary>

Siano $X$ e $Y$ con distribuzione congiunta:

| $X \backslash Y$ | 1 | 2 | 3 |
| --- | --- | --- | --- |
| 0 | 0.1 | 0.2 | 0.1 |
| 1 | 0.1 | 0.3 | 0.2 |

Calcolare $E[X]$, $E[Y]$, $E[XY]$ e $\text{Cov}(X,Y)$.

**Soluzione:**

Marginale di $X$: $p_X(0) = 0.4$, $p_X(1) = 0.6$.  
Marginale di $Y$: $p_Y(1) = 0.2$, $p_Y(2) = 0.5$, $p_Y(3) = 0.3$.

$E[X] = 0 \cdot 0.4 + 1 \cdot 0.6 = 0.6$.  
$E[Y] = 1 \cdot 0.2 + 2 \cdot 0.5 + 3 \cdot 0.3 = 0.2 + 1.0 + 0.9 = 2.1$.

$E[XY] = \sum_{x,y} xy\, p(x,y) = 0 + 0 + 0 + 1\cdot1\cdot0.1 + 1\cdot2\cdot0.3 + 1\cdot3\cdot0.2 = 0.1 + 0.6 + 0.6 = 1.3$.

$\text{Cov}(X,Y) = 1.3 - 0.6 \cdot 2.1 = 1.3 - 1.26 = 0.04$.

Covarianza positiva: al crescere di $X$ tende a crescere anche $Y$.

</details>

<details>
<summary>Esercizio 2: Correlazione e varianza della somma</summary>

$\text{Var}(X) = 9$, $\text{Var}(Y) = 16$, $\rho(X,Y) = -0.5$.

(a) Trovare $\text{Cov}(X,Y)$.  
(b) Calcolare $\text{Var}(X + Y)$ e $\text{Var}(X - Y)$.  
(c) Quale delle due ha varianza minore, e perché?

**Soluzione:**

(a) $\text{Cov}(X,Y) = \rho \sigma_X \sigma_Y = -0.5 \cdot 3 \cdot 4 = -6$.

(b) $\text{Var}(X+Y) = 9 + 16 + 2(-6) = 13$.  
$\text{Var}(X-Y) = 9 + 16 - 2(-6) = 37$.

(c) $X+Y$ ha varianza minore. Con $\rho < 0$, le due variabili tendono a compensarsi: quando $X$ è grande, $Y$ tende ad essere piccola, e la loro somma è più stabile. La differenza $X-Y$ invece amplifica le fluttuazioni.

</details>

<details>
<summary>Esercizio 3: Indipendenza vs non-correlazione</summary>

$X \sim \text{Unif}(-1,1)$, $Y = X^2$.

(a) Mostrare che $\text{Cov}(X,Y) = 0$.  
(b) $X$ e $Y$ sono indipendenti?  
(c) Qual è la densità condizionale $f_{Y|X}(y|x)$?

**Soluzione:**

(a) $E[X] = 0$ (simmetria). $E[XY] = E[X^3] = \int_{-1}^1 x^3 \cdot \frac{1}{2}\,dx = 0$ (integranda dispari su intervallo simmetrico). Quindi $\text{Cov}(X,Y) = 0$.

(b) No. Se fossero indipendenti, conoscere $X = 0.5$ non direbbe nulla su $Y$. Ma $Y = X^2$ è determinato da $X$: $X = 0.5 \Rightarrow Y = 0.25$ con certezza. La dipendenza è funzionale, non lineare.

(c) Dato $X = x$, il valore $Y = x^2$ è certo: $f_{Y|X}(y|x) = \delta(y - x^2)$ (massa puntuale in $y = x^2$).

</details>

<details>
<summary>Esercizio 4: Calcolo su densità congiunta</summary>

$(X,Y)$ con densità $f_{X,Y}(x,y) = 6x$ su $0 \leq x \leq y \leq 1$, zero altrove.

Calcolare: (a) $f_X(x)$, (b) $f_Y(y)$, (c) $\text{Cov}(X,Y)$.

**Soluzione:**

(a) $f_X(x) = \int_x^1 6x\,dy = 6x(1-x)$ per $x \in [0,1]$.

(b) $f_Y(y) = \int_0^y 6x\,dx = 3y^2$ per $y \in [0,1]$.

(c) $E[X] = \int_0^1 x \cdot 6x(1-x)\,dx = 6\int_0^1(x^2-x^3)\,dx = 6(1/3 - 1/4) = 1/2$.

$E[Y] = \int_0^1 y \cdot 3y^2\,dy = 3/4$.

$E[XY] = \int_0^1\!\int_x^1 xy \cdot 6x\,dy\,dx = 6\int_0^1 x^2\left[\frac{y^2}{2}\right]_x^1 dx = 3\int_0^1 x^2(1-x^2)\,dx = 3(1/3 - 1/5) = 2/5$.

$\text{Cov}(X,Y) = 2/5 - (1/2)(3/4) = 2/5 - 3/8 = 16/40 - 15/40 = 1/40$.

</details>

<details>
<summary>Esercizio 5: Matrice di covarianza</summary>

$X_1, X_2, X_3$ con $\text{Var}(X_i) = 1$ per ogni $i$, $\text{Cov}(X_1,X_2) = 0.5$, $\text{Cov}(X_1,X_3) = 0.3$, $\text{Cov}(X_2,X_3) = -0.2$.

(a) Scrivere la matrice di covarianza $\Sigma$.  
(b) Calcolare $\text{Var}(X_1 + X_2 + X_3)$.

**Soluzione:**

(a) $\Sigma = \begin{pmatrix} 1 & 0.5 & 0.3 \\ 0.5 & 1 & -0.2 \\ 0.3 & -0.2 & 1 \end{pmatrix}$.

(b) $\text{Var}(X_1+X_2+X_3) = 1+1+1 + 2(0.5 + 0.3 - 0.2) = 3 + 2(0.6) = 3 + 1.2 = 4.2$.

</details>

<details>
<summary>Esercizio 6: Portfolio e rischio</summary>

Due azioni con: $\sigma_A = 0.30$, $\sigma_B = 0.20$, $\rho_{AB} = -0.4$.

Trovare il peso $w$ in $A$ (e $1-w$ in $B$) che **minimizza** la varianza del portfolio $P = wA + (1-w)B$.

**Soluzione:**

$\text{Var}(P) = w^2\sigma_A^2 + (1-w)^2\sigma_B^2 + 2w(1-w)\rho_{AB}\sigma_A\sigma_B$

$= 0.09w^2 + 0.04(1-w)^2 + 2w(1-w)(-0.4)(0.30)(0.20)$

$= 0.09w^2 + 0.04(1-w)^2 - 0.048w(1-w)$

Derivando rispetto a $w$ e ponendo uguale a zero:

$\frac{d}{dw}\text{Var}(P) = 0.18w - 0.08(1-w) - 0.048(1-2w) = 0$

$0.18w - 0.08 + 0.08w - 0.048 + 0.096w = 0$

$0.356w = 0.128 \Rightarrow w \approx 0.36$.

Peso ottimale: $36\%$ in $A$ e $64\%$ in $B$.

</details>

<details>
<summary>Esercizio 7: Distribuzione condizionale</summary>

$(X,Y)$ con densità congiunta $f_{X,Y}(x,y) = e^{-y}$ per $0 \leq x \leq y$, zero altrove.

(a) Trovare $f_X(x)$ e $f_Y(y)$.  
(b) Trovare $f_{X|Y}(x|y)$.  
(c) Calcolare $E[X|Y=y]$.

**Soluzione:**

(a) $f_X(x) = \int_x^\infty e^{-y}\,dy = e^{-x}$ per $x \geq 0$.

$f_Y(y) = \int_0^y e^{-y}\,dx = ye^{-y}$ per $y \geq 0$.

(b) $f_{X|Y}(x|y) = \dfrac{e^{-y}}{ye^{-y}} = \dfrac{1}{y}$ per $0 \leq x \leq y$.

Quindi dato $Y=y$, $X \sim \text{Unif}(0,y)$. Ha senso: $X$ è posizionata uniformemente tra $0$ e $y$.

(c) $E[X|Y=y] = \dfrac{y}{2}$ (media della distribuzione uniforme su $[0,y]$).

</details>
