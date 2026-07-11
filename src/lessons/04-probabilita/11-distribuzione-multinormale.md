---
id: probabilita-11-multinormale
subject: probabilita
topic_it: Leggi dei grandi numeri
topic_en: Laws of large numbers
title_it: Distribuzione normale multivariata
title_en: Multivariate normal distribution
level: blue
order: 11
source_book: "Blitzstein & Hwang, Introduction to Probability; MIT OCW 6.041"
source_chapter: "Cap. 7 — Normale multivariata"
stato: da-rielaborare
---

## 1. Intuizione

La distribuzione normale univariata descrive una singola quantità incerta — l'altezza di una persona, il rendimento di un titolo. Ma il mondo reale è multidimensionale: l'altezza e il peso di una persona sono entrambi incerti e **correlati**. Il vettore (altezza, peso) segue una **distribuzione normale bivariata**. Il portafoglio finanziario di un investitore ha decine di titoli con rendimenti correlati tra loro: il vettore dei rendimenti segue una **distribuzione normale multivariata**.

Visualizza la normale bivariata come una "montagna gaussiana" sul piano $(x, y)$: da sopra sembra una serie di ellissi concentriche (le curve di livello), e la forma dell'ellisse dipende dalla correlazione $\rho$ tra le due variabili. Se $\rho = 0$ le ellissi sono cerchi (o ellissi allineate agli assi); se $\rho$ è grande le ellissi sono molto allungate diagonalmente — i due valori tendono a crescere insieme.

La distribuzione normale multivariata è la "regina" delle distribuzioni vettoriali per tre ragioni:
1. **Chiusura algebrica**: qualsiasi trasformazione lineare di un vettore gaussiano è ancora gaussiana
2. **Proprietà condizionali eleganti**: la distribuzione condizionale di un sottoinsieme di componenti dato un altro è ancora normale, con formule chiuse
3. **TCL multivariato**: somme di vettori i.i.d. convergono alla normale multivariata, proprio come nel caso scalare

La normale multivariata è fondamentale in statistica multivariata, reti neurali (le attivazioni di uno strato possono essere modellate come gaussiane), finanza quantitativa (il modello di Markowitz per il portafoglio ottimale), e in moltissimi algoritmi di machine learning come la Regressione Gaussiana di Processo.

## 2. Prerequisiti

- Distribuzione normale univariata $\mathcal{N}(\mu, \sigma^2)$
- Valore atteso e covarianza
- Vettori e matrici: prodotto, trasposta, determinante, inversa
- Matrice definita positiva
- Variabili aleatorie congiunte: densità congiunta, marginali, condizionali
- Correlazione $\rho$ tra due variabili aleatorie

## 3. Teoria

### Vettore gaussiano — definizione

**Definizione.** Un vettore casuale $\mathbf{X} = (X_1, \ldots, X_n)^T$ è detto **normale $n$-variato** (o gaussiano) con **vettore delle medie** $\boldsymbol{\mu} \in \mathbb{R}^n$ e **matrice di covarianza** $\Sigma \in \mathbb{R}^{n \times n}$, scritto $\mathbf{X} \sim \mathcal{N}_n(\boldsymbol{\mu}, \Sigma)$, se ogni combinazione lineare $\mathbf{a}^T \mathbf{X} = a_1 X_1 + \cdots + a_n X_n$ è normale (univariata) per ogni $\mathbf{a} \in \mathbb{R}^n$.

**Dove:** $\boldsymbol{\mu}_i = E[X_i]$ è la media dell'$i$-esima componente; $\Sigma_{ij} = \text{Cov}(X_i, X_j)$ è la covarianza tra le componenti $i$ e $j$; $\Sigma_{ii} = \text{Var}(X_i) = \sigma_i^2$.

La matrice $\Sigma$ è sempre **simmetrica** ($\Sigma = \Sigma^T$) e **semidefinita positiva** ($\mathbf{v}^T \Sigma \mathbf{v} \geq 0$ per ogni $\mathbf{v}$). Quando è **definita positiva** ($>$ invece di $\geq$), esiste la densità.

---

### Densità della normale $n$-variata

Se $\Sigma$ è definita positiva (invertibile), la densità congiunta di $\mathbf{X} \sim \mathcal{N}_n(\boldsymbol{\mu}, \Sigma)$ è:

$$f(\mathbf{x}) = \frac{1}{(2\pi)^{n/2} \lvert \Sigma \rvert^{1/2}} \exp\!\left(-\frac{1}{2} (\mathbf{x} - \boldsymbol{\mu})^T \Sigma^{-1} (\mathbf{x} - \boldsymbol{\mu})\right)$$

**Dove:** $\lvert \Sigma \rvert = \det(\Sigma)$ è il determinante della matrice di covarianza; $\Sigma^{-1}$ è l'inversa; $(\mathbf{x} - \boldsymbol{\mu})^T \Sigma^{-1} (\mathbf{x} - \boldsymbol{\mu})$ è la **distanza di Mahalanobis** al quadrato, che generalizza $((x-\mu)/\sigma)^2$ al caso multivariato.

**Forma esponenziale.** La quantità $Q(\mathbf{x}) = (\mathbf{x} - \boldsymbol{\mu})^T \Sigma^{-1} (\mathbf{x} - \boldsymbol{\mu})$ è una forma quadratica. Le curve di livello $Q(\mathbf{x}) = c$ sono **ellissoidi** centrati in $\boldsymbol{\mu}$, i cui assi sono determinati dagli autovettori di $\Sigma$ e le lunghezze degli assi sono proporzionali alle radici quadrate degli autovalori.

---

### Normale bivariata

Il caso $n=2$ è particolarmente importante. Con $\mathbf{X} = (X, Y)^T$:

$$\boldsymbol{\mu} = \begin{pmatrix}\mu_X \\ \mu_Y\end{pmatrix}, \qquad \Sigma = \begin{pmatrix}\sigma_X^2 & \rho\sigma_X\sigma_Y \\ \rho\sigma_X\sigma_Y & \sigma_Y^2\end{pmatrix}$$

**Dove:** $\mu_X = E[X]$, $\mu_Y = E[Y]$; $\sigma_X^2 = \text{Var}(X)$, $\sigma_Y^2 = \text{Var}(Y)$; $\rho = \text{Corr}(X, Y) = \text{Cov}(X,Y)/(\sigma_X \sigma_Y) \in [-1, 1]$.

$\det(\Sigma) = \sigma_X^2 \sigma_Y^2 - \rho^2 \sigma_X^2 \sigma_Y^2 = \sigma_X^2 \sigma_Y^2 (1 - \rho^2)$

La densità congiunta è:

$$f(x,y) = \frac{1}{2\pi\sigma_X\sigma_Y\sqrt{1-\rho^2}} \exp\!\left(-\frac{1}{2(1-\rho^2)}\left[\frac{(x-\mu_X)^2}{\sigma_X^2} - \frac{2\rho(x-\mu_X)(y-\mu_Y)}{\sigma_X\sigma_Y} + \frac{(y-\mu_Y)^2}{\sigma_Y^2}\right]\right)$$

**Forma delle curve di livello:** ellissi inclinate di un angolo che dipende da $\rho$. Per $\rho = 0$: ellissi allineate agli assi. Per $\rho \to \pm 1$: ellissi sempre più allungate lungo la diagonale.

---

### Distribuzioni marginali

**Teorema.** Se $\mathbf{X} \sim \mathcal{N}_n(\boldsymbol{\mu}, \Sigma)$, allora ogni sottoinsieme di componenti è ancora normale multivariata con i parametri corrispondenti.

In particolare, per la normale bivariata:

$$X \sim \mathcal{N}(\mu_X, \sigma_X^2), \qquad Y \sim \mathcal{N}(\mu_Y, \sigma_Y^2)$$

**Attenzione importante:** il viceversa è falso. Se $X \sim \mathcal{N}(\mu_X, \sigma_X^2)$ e $Y \sim \mathcal{N}(\mu_Y, \sigma_Y^2)$, non è detto che $(X, Y)$ sia normale bivariata.

---

### Indipendenza e incorrelazione

**Teorema (unicità per gaussiane).** Se $(X, Y)$ è normale bivariata:

$$X \perp Y \iff \rho = 0 \iff \text{Cov}(X, Y) = 0$$

Questo è notevole: in generale, incorrelazione non implica indipendenza. Per le gaussiane **sì**. Questo vale solo quando il vettore intero $(X,Y)$ è gaussiano congiuntamente — non basta che le marginali siano normali.

---

### Distribuzione condizionale

Se $(X, Y) \sim \mathcal{N}_2(\boldsymbol{\mu}, \Sigma)$ con i parametri sopra, allora:

$$X \mid Y = y \sim \mathcal{N}\!\left(\mu_{X \mid y},\; \sigma^2_{X \mid Y}\right)$$

con:

$$\mu_{X \mid y} = \mu_X + \rho \frac{\sigma_X}{\sigma_Y}(y - \mu_Y)$$

$$\sigma^2_{X \mid Y} = \sigma_X^2(1 - \rho^2)$$

**Interpretazioni:**
- La media condizionale è lineare in $y$: ogni unità di scarto di $Y$ dalla sua media sposta la media condizionale di $X$ di $\rho \sigma_X / \sigma_Y$ unità.
- La varianza condizionale $\sigma_X^2(1-\rho^2)$ non dipende da $y$ — è costante. Questo fenomeno si chiama **omoschedasticità condizionale**.
- Per $\rho = \pm 1$: la varianza condizionale è zero ($X$ è determinata da $Y$). Per $\rho = 0$: la varianza condizionale è uguale alla marginale ($Y$ non dà informazioni su $X$).

---

### Trasformazioni lineari

**Teorema.** Se $\mathbf{X} \sim \mathcal{N}_n(\boldsymbol{\mu}, \Sigma)$ e $A \in \mathbb{R}^{m \times n}$, $\mathbf{b} \in \mathbb{R}^m$:

$$\mathbf{Y} = A\mathbf{X} + \mathbf{b} \sim \mathcal{N}_m(A\boldsymbol{\mu} + \mathbf{b},\; A\Sigma A^T)$$

**Dove:** $A\boldsymbol{\mu} + \mathbf{b}$ è il nuovo vettore delle medie; $A\Sigma A^T$ è la nuova matrice di covarianza (ottenuta propagando le incertezze attraverso la trasformazione lineare $A$).

Questo teorema è estremamente potente: garantisce che la classe delle distribuzioni gaussiane multivariate è **chiusa rispetto alle trasformazioni lineari**.

---

### Caso generale $n$-variato

Per la forma generale $\mathbf{X} \sim \mathcal{N}_n(\boldsymbol{\mu}, \Sigma)$, se partizioniamo il vettore in due blocchi:

$$\mathbf{X} = \begin{pmatrix}\mathbf{X}_1 \\ \mathbf{X}_2\end{pmatrix}, \quad \boldsymbol{\mu} = \begin{pmatrix}\boldsymbol{\mu}_1 \\ \boldsymbol{\mu}_2\end{pmatrix}, \quad \Sigma = \begin{pmatrix}\Sigma_{11} & \Sigma_{12} \\ \Sigma_{21} & \Sigma_{22}\end{pmatrix}$$

La distribuzione condizionale è:

$$\mathbf{X}_1 \mid \mathbf{X}_2 = \mathbf{x}_2 \sim \mathcal{N}\!\left(\boldsymbol{\mu}_1 + \Sigma_{12}\Sigma_{22}^{-1}(\mathbf{x}_2 - \boldsymbol{\mu}_2),\; \Sigma_{11} - \Sigma_{12}\Sigma_{22}^{-1}\Sigma_{21}\right)$$

La matrice $\Sigma_{11} - \Sigma_{12}\Sigma_{22}^{-1}\Sigma_{21}$ è il **complemento di Schur** di $\Sigma_{22}$ in $\Sigma$.

## 4. Derivazioni

### Come si ottiene la formula condizionale

Per la normale bivariata, si parte dalla densità congiunta $f(x,y)$ e si divide per la marginale $f_Y(y)$:

$$f_{X \mid Y}(x \mid y) = \frac{f(x,y)}{f_Y(y)}$$

La marginale $f_Y(y)$ è $\mathcal{N}(\mu_Y, \sigma_Y^2)$. Facendo i calcoli algebrici (completamento del quadrato nella forma quadratica al denominatore dell'esponente), si ottiene:

$$f_{X \mid Y}(x \mid y) \propto \exp\!\left(-\frac{(x - \mu_{X|y})^2}{2\sigma^2_{X|Y}}\right)$$

con $\mu_{X|y}$ e $\sigma^2_{X|Y}$ come sopra. Il completamento del quadrato è il passaggio tecnico chiave che mostra che la forma funzionale in $x$ è ancora un esponenziale di un quadratico — cioè ancora una gaussiana.

### Perché indipendenza $\iff$ incorrelazione per gaussiane

Se $\rho = 0$, la densità congiunta fattorizza:

$$f(x,y) = \frac{1}{2\pi\sigma_X\sigma_Y} \exp\!\left(-\frac{(x-\mu_X)^2}{2\sigma_X^2} - \frac{(y-\mu_Y)^2}{2\sigma_Y^2}\right) = f_X(x) \cdot f_Y(y)$$

cioè la densità congiunta è il prodotto delle marginali — definizione di indipendenza. Questo fallisce se le marginali sono normali ma il vettore non è congiuntamente gaussiano.

## 5. Esempi

**Esempio 1 (marginali semplici).** $(X, Y) \sim \mathcal{N}_2\!\left(\begin{pmatrix}3\\5\end{pmatrix}, \begin{pmatrix}4&2\\2&9\end{pmatrix}\right)$.

Trovare le distribuzioni marginali e la correlazione.

$X \sim \mathcal{N}(3, 4)$ (media 3, varianza 4).
$Y \sim \mathcal{N}(5, 9)$ (media 5, varianza 9).
$\text{Cov}(X,Y) = 2$, $\sigma_X = 2$, $\sigma_Y = 3$.
$\rho = \text{Cov}(X,Y)/(\sigma_X\sigma_Y) = 2/(2\times3) = 1/3 \approx 0.333$.

**Esempio 2 (distribuzione condizionale).** Nell'esempio 1, trovare $X \mid Y = 8$.

$$\mu_{X \mid 8} = 3 + \frac{1}{3} \cdot \frac{2}{3}(8-5) = 3 + \frac{2}{9} \times 3 = 3 + \frac{2}{3} \approx 3.667$$

$$\sigma^2_{X \mid Y} = 4\left(1 - \frac{1}{9}\right) = 4 \times \frac{8}{9} = \frac{32}{9} \approx 3.556$$

$X \mid Y = 8 \sim \mathcal{N}(3.667,\; 3.556)$.

**Esempio 3 (trasformazione lineare — somma/differenza).** $\mathbf{X} \sim \mathcal{N}_2(\mathbf{0}, I_2)$ (normale standard bivariata). Trovare la distribuzione di $Y_1 = X_1 + X_2$, $Y_2 = X_1 - X_2$.

$\mathbf{Y} = A\mathbf{X}$ con $A = \begin{pmatrix}1&1\\1&-1\end{pmatrix}$.

$E[\mathbf{Y}] = A \cdot \mathbf{0} = \mathbf{0}$.

$\text{Cov}(\mathbf{Y}) = A I_2 A^T = A A^T = \begin{pmatrix}2&0\\0&2\end{pmatrix} = 2I_2$.

Quindi $\mathbf{Y} \sim \mathcal{N}_2(\mathbf{0}, 2I_2)$: $Y_1$ e $Y_2$ sono indipendenti, ciascuno $\sim \mathcal{N}(0, 2)$.

**Esempio 4 (incorrelazione $\neq$ indipendenza — controesempio).** Siano $Z \sim \mathcal{N}(0,1)$ e $W = Z^2 \cdot V$ dove $V = \pm 1$ con probabilità $1/2$ ciascuno, indipendente da $Z$. Allora $W \sim \mathcal{N}(0,1)$ e $\text{Cov}(Z,W) = 0$, ma $Z$ e $W$ non sono indipendenti (conoscere $\lvert Z \rvert$ dà informazioni su $\lvert W \rvert$). La coppia $(Z, W)$ **non è gaussiana bivariata**.

**Esempio 5 (portafoglio finanziario).** Due titoli hanno rendimenti $(R_1, R_2) \sim \mathcal{N}_2(\boldsymbol{\mu}, \Sigma)$ con $\boldsymbol{\mu} = (0.08, 0.12)^T$ e $\Sigma = \begin{pmatrix}0.04 & 0.018 \\ 0.018 & 0.09\end{pmatrix}$.

Il portafoglio con pesi $w_1 = 0.6$, $w_2 = 0.4$ ha rendimento $R_p = 0.6 R_1 + 0.4 R_2 = \mathbf{w}^T \mathbf{R}$.

$E[R_p] = 0.6 \times 0.08 + 0.4 \times 0.12 = 0.048 + 0.048 = 0.096$.

$\text{Var}(R_p) = \mathbf{w}^T \Sigma \mathbf{w} = 0.36 \times 0.04 + 2 \times 0.6 \times 0.4 \times 0.018 + 0.16 \times 0.09 = 0.0144 + 0.00864 + 0.0144 = 0.03744$.

$R_p \sim \mathcal{N}(0.096, 0.03744)$.

**Esempio 6 (distribuzione condizionale su rendimento).** Con i dati dell'esempio 5, sapendo che $R_2 = 0.15$, qual è la distribuzione condizionale di $R_1$?

$\rho = 0.018/(\sqrt{0.04}\sqrt{0.09}) = 0.018/0.06 = 0.3$.

$$\mu_{R_1 \mid R_2=0.15} = 0.08 + 0.3 \cdot \frac{0.2}{0.3}(0.15 - 0.12) = 0.08 + 0.2 \times 0.03 = 0.086$$

$$\sigma^2_{R_1 \mid R_2} = 0.04(1 - 0.09) = 0.04 \times 0.91 = 0.0364$$

$R_1 \mid R_2 = 0.15 \sim \mathcal{N}(0.086, 0.0364)$.

**Esempio 7 (normale 3-variata — marginalizzazione).** $\mathbf{X} \sim \mathcal{N}_3(\mathbf{0}, \Sigma)$ con $\Sigma = \begin{pmatrix}1&0.5&0.2\\0.5&1&0.3\\0.2&0.3&1\end{pmatrix}$.

La distribuzione di $(X_1, X_2)$: si estraggono i blocchi corrispondenti.

$(X_1, X_2) \sim \mathcal{N}_2\!\left(\begin{pmatrix}0\\0\end{pmatrix}, \begin{pmatrix}1&0.5\\0.5&1\end{pmatrix}\right)$.

## 6. Grafico

```plot
{"fn":"Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)","domain":[-4,4],"yDomain":[0,0.45],"title":"Marginale della normale bivariata (proiezione su un asse)","label1":"φ(x) — N(0,1)"}
```

## 7. Interattivo

```slider
{"fn":"Math.exp(-x*x/(2*(1-rho*rho)))/(Math.sqrt(2*Math.PI*(1-rho*rho)))","domain":[-4,4],"yDomain":[0,0.7],"params":[{"name":"rho","min":-0.95,"max":0.95,"step":0.05,"default":0}],"title":"Varianza condizionale X|Y=0: al crescere di |ρ| la distribuzione si concentra"}
```

## 8. Errori comuni

**Errore 1: credere che normali marginali $\Rightarrow$ gaussiana bivariata.** Se $X$ e $Y$ hanno distribuzioni marginali normali, non è detto che il vettore $(X,Y)$ sia gaussiano bivariato. Il controesempio dell'Esempio 4 lo mostra: ci vogliono normali marginali e una struttura di dipendenza gaussiana.

**Errore 2: interpretare $\rho = 0$ come indipendenza in generale.** L'equivalenza incorrelazione $\iff$ indipendenza vale solo per vettori gaussiani. Per distribuzioni non gaussiane, incorrelazione non implica indipendenza. Questo è un errore comune nei corsi di statistica.

**Errore 3: confondere $\Sigma$ (matrice di covarianza) con la matrice di correlazione.** La matrice di correlazione ha 1 sulla diagonale e $\rho_{ij}$ fuori diagonale; $\Sigma$ ha $\sigma_i^2$ sulla diagonale e $\sigma_i \sigma_j \rho_{ij}$ fuori diagonale. Sono la stessa struttura ma con diversa normalizzazione.

**Errore 4: dimenticare che $\Sigma$ deve essere definita positiva.** Se $\Sigma$ è solo semidefinita positiva (determinante zero), la normale non ha densità nel senso usuale — la distribuzione è concentrata su un sottospazio lineare. In pratica, questo indica che alcune variabili sono combinazioni lineari esatte delle altre.

**Errore 5: sbagliare la formula della varianza condizionale.** La varianza condizionale $\sigma^2_{X|Y} = \sigma_X^2(1-\rho^2)$ **non dipende da $y$** — è costante. Un errore comune è pensare che dipenda dal valore osservato $y$. Dipende solo da $\rho$.

**Errore 6: errore nella formula della trasformazione.** Per $\mathbf{Y} = A\mathbf{X}$, la nuova covarianza è $A\Sigma A^T$ (non $A^T \Sigma A$ né $A\Sigma^T A^T$). L'ordine delle trasposizioni è importante.

**Errore 7: usare la normale multivariata senza verificare $\Sigma$ definita positiva.** In pratica (es. finanza con molti titoli correlati) può capitare che la matrice di covarianza stimata dai dati abbia autovalori negativi per errori numerici. Bisogna sempre verificare che tutti gli autovalori di $\Sigma$ siano positivi prima di usarla.

## 9. Applicazioni reali

**Finanza quantitativa — portafoglio di Markowitz.** La teoria moderna del portafoglio assume che i rendimenti degli asset seguano una distribuzione normale multivariata. La frontiera efficiente, che massimizza il rendimento atteso per ogni livello di varianza, si calcola minimizzando $\mathbf{w}^T \Sigma \mathbf{w}$ soggetto a $\mathbf{w}^T \boldsymbol{\mu} = r$ — un problema di ottimizzazione quadratica che dipende interamente dalla struttura gaussiana.

**Machine learning — Gaussian Process Regression.** I processi gaussiani estendono la normale multivariata a infiniti punti: la distribuzione congiunta di valori di una funzione in qualsiasi insieme finito di punti è gaussiana. Questo permette regressione non parametrica bayesiana con intervalli di confidenza calcolati in forma chiusa, sfruttando le formule di condizionamento gaussiano.

**Analisi dei componenti principali (PCA).** La PCA sfrutta la struttura della matrice di covarianza di una distribuzione normale multivariata. Gli autovettori di $\Sigma$ sono le direzioni di massima varianza (componenti principali); gli autovalori sono le varianze lungo tali direzioni. La PCA è ottimale per riduzioni dimensionali di dati gaussiani.

**Analisi degli errori sperimentali.** In fisica e ingegneria, gli errori su misurazioni multiple correlate si propagano usando la formula $\text{Cov}(\mathbf{Y}) = A\Sigma A^T$ per la trasformazione lineare. La distribuzione degli errori propagati è gaussiana se i dati originali sono gaussiani, permettendo di costruire ellissoidi di confidenza per set di misurazioni.

## 10. Riepilogo

| Concetto | Formula | Note |
| --- | --- | --- |
| Densità $n$-variata | $f(\mathbf{x}) = \frac{1}{(2\pi)^{n/2}\lvert\Sigma\rvert^{1/2}} e^{-\frac{1}{2}(\mathbf{x}-\boldsymbol{\mu})^T\Sigma^{-1}(\mathbf{x}-\boldsymbol{\mu})}$ | $\Sigma$ def. positiva |
| Marginali | $X_i \sim \mathcal{N}(\mu_i, \sigma_i^2)$ | Ogni componente è normale |
| Trasformazione lineare | $A\mathbf{X}+\mathbf{b} \sim \mathcal{N}(A\boldsymbol{\mu}+\mathbf{b},\;A\Sigma A^T)$ | Chiusura per trasf. lineari |
| Media condizionale | $\mu_{X\mid y} = \mu_X + \rho\frac{\sigma_X}{\sigma_Y}(y-\mu_Y)$ | Lineare in $y$ |
| Varianza condizionale | $\sigma^2_{X\mid Y} = \sigma_X^2(1-\rho^2)$ | Non dipende da $y$ |
| Indipendenza | $X \perp Y \iff \rho = 0$ (solo per gaussiane) | Non vale in generale |
| Distanza di Mahalanobis | $d^2(\mathbf{x}) = (\mathbf{x}-\boldsymbol{\mu})^T\Sigma^{-1}(\mathbf{x}-\boldsymbol{\mu})$ | Generalizza $((x-\mu)/\sigma)^2$ |

## 11. Esercizi

<details>
<summary>Esercizio 1: identificare i parametri</summary>

$(X, Y) \sim \mathcal{N}_2\!\left(\begin{pmatrix}1\\2\end{pmatrix}, \begin{pmatrix}4&1\\1&9\end{pmatrix}\right)$.

Trovare: medie, varianze, covarianza, correlazione, distribuzioni marginali.

**Soluzione.**

$\mu_X = 1$, $\mu_Y = 2$.

$\sigma_X^2 = 4$, $\sigma_Y^2 = 9$, quindi $\sigma_X = 2$, $\sigma_Y = 3$.

$\text{Cov}(X,Y) = 1$.

$\rho = 1/(2 \times 3) = 1/6 \approx 0.167$.

Marginali: $X \sim \mathcal{N}(1, 4)$, $Y \sim \mathcal{N}(2, 9)$.

</details>

<details>
<summary>Esercizio 2: distribuzione condizionale</summary>

Con i dati dell'Esercizio 1, trovare la distribuzione di $X \mid Y = 5$.

**Soluzione.**

$\mu_{X\mid 5} = 1 + \frac{1}{6} \cdot \frac{2}{3}(5-2) = 1 + \frac{1}{6} \cdot 2 = 1 + \frac{1}{3} \approx 1.333$.

$\sigma^2_{X\mid Y} = 4\left(1 - \frac{1}{36}\right) = 4 \cdot \frac{35}{36} = \frac{35}{9} \approx 3.889$.

$X \mid Y=5 \sim \mathcal{N}(4/3, 35/9)$.

</details>

<details>
<summary>Esercizio 3: alta correlazione</summary>

$(X, Y) \sim \mathcal{N}_2((0,0)^T, \Sigma)$ con $\sigma_X = \sigma_Y = 1$ e $\rho = 0.8$. Trovare $X \mid Y = 1$.

**Soluzione.**

$\mu_{X\mid 1} = 0 + 0.8 \cdot \frac{1}{1}(1-0) = 0.8$.

$\sigma^2_{X\mid Y} = 1 \cdot (1 - 0.64) = 0.36$.

$X \mid Y=1 \sim \mathcal{N}(0.8, 0.36)$.

Con $\rho = 0.8$, conoscere $Y=1$ sposta la media di $X$ da 0 a 0.8 e riduce la varianza da 1 a 0.36.

</details>

<details>
<summary>Esercizio 4: trasformazione lineare</summary>

$\mathbf{X} \sim \mathcal{N}_2((1,2)^T, \begin{pmatrix}4&1\\1&9\end{pmatrix})$. Trovare la distribuzione di $Z = 2X_1 - X_2 + 3$.

**Soluzione.**

$A = (2, -1)$, $\mathbf{b} = 3$ (scalare).

$E[Z] = 2 \times 1 - 1 \times 2 + 3 = 2 - 2 + 3 = 3$.

$\text{Var}(Z) = A\Sigma A^T = (2,-1)\begin{pmatrix}4&1\\1&9\end{pmatrix}\begin{pmatrix}2\\-1\end{pmatrix}$.

Passo 1: $(2,-1)\begin{pmatrix}4&1\\1&9\end{pmatrix} = (8-1, 2-9) = (7,-7)$.

Passo 2: $(7,-7)\begin{pmatrix}2\\-1\end{pmatrix} = 14 + 7 = 21$.

$Z \sim \mathcal{N}(3, 21)$.

</details>

<details>
<summary>Esercizio 5: probabilità dalla marginale</summary>

Con $(X,Y) \sim \mathcal{N}_2((0,0)^T, I_2)$ (normali standard indipendenti), calcolare $P(X+Y > 2)$.

**Soluzione.**

$W = X+Y$. Trasformazione lineare: $A = (1,1)$.

$E[W] = 0$, $\text{Var}(W) = (1,1)I_2(1,1)^T = 2$.

$W \sim \mathcal{N}(0,2)$, $\sigma_W = \sqrt{2}$.

$$P(X+Y > 2) = P\!\left(Z > \frac{2-0}{\sqrt{2}}\right) = 1 - \Phi(\sqrt{2}) \approx 1 - \Phi(1.414) \approx 1 - 0.9213 \approx 7.9\%$$

</details>

<details>
<summary>Esercizio 6: determinare $\rho$ da una condizione</summary>

$(X,Y) \sim \mathcal{N}_2((0,0)^T, \Sigma)$ con $\sigma_X = \sigma_Y = 2$. Si sa che $\text{Var}(X \mid Y) = 3$. Trovare $\rho$.

**Soluzione.**

$\sigma^2_{X\mid Y} = \sigma_X^2(1-\rho^2) = 4(1-\rho^2) = 3$.

$1-\rho^2 = 3/4 \implies \rho^2 = 1/4 \implies \rho = \pm 1/2$.

</details>

<details>
<summary>Esercizio 7: normale 3-variata — distribuzione condizionale</summary>

$\mathbf{X} = (X_1, X_2, X_3)^T \sim \mathcal{N}_3(\mathbf{0}, \Sigma)$ con

$$\Sigma = \begin{pmatrix}4&2&0\\2&9&3\\0&3&1\end{pmatrix}$$

Trovare la distribuzione di $X_1 \mid X_2 = 3$.

**Soluzione.**

Usiamo le formule per la partizione $\mathbf{X}_1 = X_1$, $\mathbf{X}_2 = X_2$.

$\Sigma_{11} = 4$ (varianza di $X_1$).
$\Sigma_{12} = 2$ (covarianza $X_1, X_2$).
$\Sigma_{22} = 9$ (varianza di $X_2$).

(Nota: ignoriamo $X_3$ nella partizione — stiamo condizionando solo su $X_2$.)

$$\mu_{1\mid 2} = 0 + 2 \cdot \frac{1}{9}(3-0) = \frac{6}{9} = \frac{2}{3}$$

$$\sigma^2_{1\mid 2} = 4 - 2 \cdot \frac{1}{9} \cdot 2 = 4 - \frac{4}{9} = \frac{32}{9}$$

$X_1 \mid X_2 = 3 \sim \mathcal{N}(2/3, 32/9)$.

</details>
