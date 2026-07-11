---
id: statistica-09-regressione-multipla
subject: statistica
topic_it: Regressione
topic_en: Regression
title_it: Regressione lineare multipla
title_en: Multiple linear regression
level: purple
order: 9
source_book: "L. Wasserman, All of Statistics; Casella & Berger, Statistical Inference"
source_chapter: "Cap. 13 — Regressione multipla"
stato: da-rielaborare
---

## 1. Intuizione — analogia concreta + perché si studia

Nella regressione semplice avevamo un solo predittore: la superficie per prevedere il prezzo di un appartamento. Ma nella realtà i prezzi dipendono da decine di fattori: il numero di camere, l'anno di costruzione, la distanza dal centro, il piano, la presenza di un garage. La regressione multipla generalizza la regressione semplice a $p$ predittori simultanei.

Il salto concettuale fondamentale è che i coefficienti in regressione multipla hanno un'interpretazione **parziale**: $\hat{\beta}_j$ misura l'effetto di $x_j$ su $y$ **a parità di tutti gli altri predittori**. Questo è cruciale perché isola l'effetto netto di ciascuna variabile, controllando per le altre. Per esempio, si può stimare l'effetto del fumo sulla salute tenendo costante l'età, il sesso, e l'attività fisica.

La forma matriciale del modello non è solo un'eleganza matematica: rende possibile la derivazione compatta degli stimatori, il calcolo efficiente con computer, e la generalizzazione a modelli sempre più complessi. La matrice del disegno $X$ e la formula $\hat{\boldsymbol{\beta}} = (X^TX)^{-1}X^T\mathbf{Y}$ sono tra le espressioni più frequentemente computate in tutta la scienza quantitativa.

La regressione multipla è la spina dorsale dei modelli econometrici, delle analisi cliniche multivariate, dei modelli predittivi in machine learning (la regressione lineare è spesso il primo benchmark da battere). Capire le sue proprietà — quando funziona, quando fallisce, come diagnosticare i problemi — è una competenza indispensabile per chiunque lavori con dati reali.

## 2. Prerequisiti

- Regressione lineare semplice (OLS, RSS, $R^2$, test t)
- Algebra lineare: matrici, prodotto matriciale, inversa, trasposta, rango, proiezione ortogonale
- Distribuzione normale multivariata
- Distribuzioni F e chi-quadrato
- Test di ipotesi: test t, livello di significatività, p-value

## 3. Teoria

### Il modello matriciale

Con $p$ predittori e $n$ osservazioni, il modello è:

$$\mathbf{Y} = X\boldsymbol{\beta} + \boldsymbol{\varepsilon}, \qquad \boldsymbol{\varepsilon} \sim \mathcal{N}(\mathbf{0}, \sigma^2 I_n)$$

dove:

- $\mathbf{Y} \in \mathbb{R}^n$: vettore delle risposte.
- $X \in \mathbb{R}^{n \times (p+1)}$: **matrice del disegno** (design matrix) — prima colonna di tutti 1 per l'intercetta, poi $p$ colonne per i predittori.
- $\boldsymbol{\beta} = (\beta_0, \beta_1, \ldots, \beta_p)^T \in \mathbb{R}^{p+1}$: vettore dei coefficienti da stimare.
- $\boldsymbol{\varepsilon} \in \mathbb{R}^n$: vettore degli errori — indipendenti, media zero, varianza $\sigma^2$ costante.

**Assunzioni classiche:**

1. **Linearità:** $E[\mathbf{Y}] = X\boldsymbol{\beta}$.
2. **Rango pieno:** $\text{rank}(X) = p+1$ — i predittori non sono linearmente dipendenti (no multicollinearità perfetta).
3. **Omoschedasticità:** $\text{Var}(\boldsymbol{\varepsilon}) = \sigma^2 I_n$.
4. **Normalità (per inferenza):** $\boldsymbol{\varepsilon} \sim \mathcal{N}(\mathbf{0}, \sigma^2 I_n)$.

### Stimatore OLS

Minimizziamo $\text{RSS} = \lVert \mathbf{Y} - X\boldsymbol{\beta} \rVert^2 = (\mathbf{Y} - X\boldsymbol{\beta})^T(\mathbf{Y} - X\boldsymbol{\beta})$.

La condizione del primo ordine $\partial\text{RSS}/\partial\boldsymbol{\beta} = 0$ dà le equazioni normali: $X^TX\hat{\boldsymbol{\beta}} = X^T\mathbf{Y}$.

Se $X^TX$ è invertibile (rango pieno):

$$\hat{\boldsymbol{\beta}} = (X^TX)^{-1}X^T\mathbf{Y}$$

**Proprietà:**

- $E[\hat{\boldsymbol{\beta}}] = \boldsymbol{\beta}$ (non distorsione, sotto assunzioni 1-2).
- $\text{Cov}(\hat{\boldsymbol{\beta}}) = \sigma^2(X^TX)^{-1}$.
- Gauss-Markov: $\hat{\boldsymbol{\beta}}$ è BLUE tra tutti gli stimatori lineari non distorti.

### La matrice cappello (hat matrix)

I valori fittati sono:

$$\hat{\mathbf{Y}} = X\hat{\boldsymbol{\beta}} = X(X^TX)^{-1}X^T\mathbf{Y} = H\mathbf{Y}$$

dove $H = X(X^TX)^{-1}X^T$ è la **hat matrix** (matrice cappello). $H$ è una proiezione ortogonale sullo spazio colonna di $X$: $H^2 = H$ (idempotente), $H^T = H$ (simmetrica). I residui sono $\hat{\boldsymbol{\varepsilon}} = (I-H)\mathbf{Y}$.

### Stima di $\sigma^2$

$$\hat{\sigma}^2 = s_e^2 = \frac{\text{RSS}}{n-p-1} = \frac{\lVert \mathbf{Y} - \hat{\mathbf{Y}} \rVert^2}{n-p-1}$$

Il denominatore è $n-p-1$ (gradi di libertà residui): $n$ osservazioni meno $p+1$ parametri stimati.

### Test F globale

Testa se **almeno uno** dei predittori è utile: $H_0: \beta_1 = \beta_2 = \cdots = \beta_p = 0$.

$$F = \frac{\text{ESS}/p}{\text{RSS}/(n-p-1)} \sim F(p,\, n-p-1) \quad \text{sotto } H_0$$

Se $F$ è grande, si rifiuta $H_0$: il modello spiega significativamente la variabilità.

### Test t sul singolo coefficiente

Testa se il $j$-esimo predittore è utile a parità degli altri: $H_0: \beta_j = 0$.

$$t_j = \frac{\hat{\beta}_j}{\text{SE}(\hat{\beta}_j)} \sim t(n-p-1) \quad \text{sotto } H_0$$

dove $\text{SE}(\hat{\beta}_j) = s_e \sqrt{[(X^TX)^{-1}]_{jj}}$ (radice del $j$-esimo elemento diagonale di $s_e^2(X^TX)^{-1}$).

### $R^2$ aggiustato

Il $R^2$ ordinario non decresce mai aggiungendo predittori (anche inutili). Il $R^2$ aggiustato penalizza la complessità:

$$R^2_{\text{adj}} = 1 - \frac{\text{RSS}/(n-p-1)}{\text{TSS}/(n-1)}$$

Cresce solo se il nuovo predittore aggiunto riduce abbastanza RSS da compensare la perdita di un grado di libertà.

### Multicollinearità

Se i predittori sono fortemente correlati tra loro, $X^TX$ è quasi singolare: il suo determinante è vicino a zero, l'inversa è numericamente instabile. Le conseguenze sono:

- Gli errori standard di $\hat{\boldsymbol{\beta}}$ diventano molto grandi.
- I coefficienti cambiano drasticamente se si aggiunge o rimuove un predittore.
- I test t diventano inaffidabili.

**Diagnostica — VIF (Variance Inflation Factor):**

$$\text{VIF}_j = \frac{1}{1 - R_j^2}$$

dove $R_j^2$ è il $R^2$ della regressione di $X_j$ su tutti gli altri predittori. VIF $> 10$ indica multicollinearità grave; VIF $> 5$ è un segnale di attenzione.

**Rimedi:** eliminare variabili ridondanti, combinare predittori correlati in un indice composito, usare regressione ridge (che aggiunge una penalizzazione $\lambda \lVert \boldsymbol{\beta} \rVert^2$ alla funzione obiettivo).

## 4. Derivazioni

### Derivazione della formula OLS in forma matriciale

$\text{RSS} = (\mathbf{Y} - X\boldsymbol{\beta})^T(\mathbf{Y} - X\boldsymbol{\beta}) = \mathbf{Y}^T\mathbf{Y} - 2\boldsymbol{\beta}^TX^T\mathbf{Y} + \boldsymbol{\beta}^TX^TX\boldsymbol{\beta}$.

Derivando rispetto a $\boldsymbol{\beta}$ e uguagliando a zero:

$$\frac{\partial \text{RSS}}{\partial \boldsymbol{\beta}} = -2X^T\mathbf{Y} + 2X^TX\boldsymbol{\beta} = \mathbf{0}$$

Quindi $X^TX\hat{\boldsymbol{\beta}} = X^T\mathbf{Y}$. Se $X^TX$ è invertibile, $\hat{\boldsymbol{\beta}} = (X^TX)^{-1}X^T\mathbf{Y}$.

Interpretazione geometrica: $\hat{\mathbf{Y}} = H\mathbf{Y}$ è la proiezione ortogonale di $\mathbf{Y}$ sullo spazio colonna di $X$. I residui $\hat{\boldsymbol{\varepsilon}} = \mathbf{Y} - \hat{\mathbf{Y}}$ sono ortogonali a ogni colonna di $X$: $X^T\hat{\boldsymbol{\varepsilon}} = \mathbf{0}$.

### Derivazione di $R^2_{\text{adj}}$

Notare che $\text{RSS}/(n-p-1) = \hat{\sigma}^2$ e $\text{TSS}/(n-1) = s_y^2$ (varianza campionaria di $y$). Quindi:

$$R^2_{\text{adj}} = 1 - \frac{\hat{\sigma}^2}{s_y^2}$$

Aggiungere un predittore inutile riduce di poco RSS ma perde un grado di libertà, aumentando $\hat{\sigma}^2$: $R^2_{\text{adj}}$ può diminuire.

## 5. Esempi

**Esempio 1 — Interpretazione "a parità di altri regressori"**

Modello: $\hat{y} = 5 + 3x_1 - 2x_2$ (voto = 5 + 3·ore studio - 2·ore TV).

- $\hat{\beta}_1 = 3$: a parità di ore di TV ($x_2$ fisso), un'ora in più di studio è associata in media a 3 punti in più nel voto.
- $\hat{\beta}_2 = -2$: a parità di ore di studio ($x_1$ fisso), un'ora in più di TV è associata in media a 2 punti in meno nel voto.

L'interpretazione parziale è fondamentale: non possiamo dire "3 punti per ogni ora di studio" senza specificare "a parità di ore di TV".

---

**Esempio 2 — Calcolo $R^2$ aggiustato**

Modello A ($p = 2$, $n = 30$): $R^2 = 0.80$.
Modello B ($p = 5$, $n = 30$): $R^2 = 0.82$.

$R^2_{\text{adj}}$ (A) $= 1 - \dfrac{0.20 \times 29}{27} = 1 - 0.215 = 0.785$.

$R^2_{\text{adj}}$ (B) $= 1 - \dfrac{0.18 \times 29}{24} = 1 - 0.218 = 0.782$.

Nonostante il modello B abbia $R^2$ più alto, il $R^2_{\text{adj}}$ è marginalmente inferiore: i 3 predittori aggiuntivi non giustificano la complessità aggiunta.

---

**Esempio 3 — Test F globale**

$n = 50$, $p = 3$, RSS $= 40$, TSS $= 100$.

ESS $= 60$, $R^2 = 0.60$.

$F = \dfrac{60/3}{40/46} = \dfrac{20}{0.869} \approx 23.0 \sim F(3, 46)$.

Valore critico $F_{3,46,0.05} \approx 2.81$. Poiché $23.0 \gg 2.81$, si **rifiuta** $H_0$: almeno un predittore è significativo.

---

**Esempio 4 — VIF e multicollinearità**

In un modello con $p = 3$ predittori, regressiamo $X_1$ su $X_2$ e $X_3$: otteniamo $R_1^2 = 0.95$.

$\text{VIF}_1 = 1/(1-0.95) = 20$.

VIF $= 20 \gg 10$: multicollinearità grave. La stima di $\hat{\beta}_1$ è molto instabile — anche piccole variazioni nei dati o nel modello cambiano drasticamente il coefficiente.

---

**Esempio 5 — Confronto tra test F e test t**

Il test F globale rifiuta $H_0$ (almeno un $\beta_j \neq 0$). Poi i test t individuali mostrano che solo $\hat{\beta}_2$ è significativo ($p < 0.01$), mentre $\hat{\beta}_1$ e $\hat{\beta}_3$ non lo sono. È possibile? Sì — ma in presenza di multicollinearità i test t possono fallire anche quando il predittore è rilevante (gli SE sono inflati). Il test F è più robusto alla multicollinearità.

---

**Esempio 6 — Hat matrix e leverage**

Il $j$-esimo elemento diagonale $h_{jj}$ di $H$ si chiama **leverage** dell'osservazione $j$: misura quanto l'osservazione $j$ influenza la propria predizione. $h_{jj} \in [1/n, 1]$; si considerano ad alto leverage le osservazioni con $h_{jj} > 2(p+1)/n$. Osservazioni ad alto leverage vanno controllate — possono distorcere fortemente la stima.

---

**Esempio 7 — Selezione del modello con $R^2_{\text{adj}}$**

Quattro modelli annidati su $n = 100$ osservazioni:

| Modello | $p$ | RSS | $R^2$ | $R^2_{\text{adj}}$ |
| --- | --- | --- | --- | --- |
| M1 | 1 | 80 | 0.60 | 0.596 |
| M2 | 2 | 60 | 0.70 | 0.694 |
| M3 | 3 | 55 | 0.725 | 0.716 |
| M4 | 4 | 54 | 0.730 | 0.717 |

Tra M3 e M4, il quarto predittore aggiunge quasi nulla ($\Delta R^2 = 0.005$) e il $R^2_{\text{adj}}$ aumenta di soli 0.001: M3 è preferibile per parsimonia.

---

**Esempio 8 — Stima OLS a mano con p=1 (verifica della formula matriciale)**

Con $n = 3$ osservazioni: $(x_1, y_1) = (1, 2)$, $(x_2, y_2) = (2, 3)$, $(x_3, y_3) = (3, 5)$.

$X = \begin{pmatrix}1&1\\1&2\\1&3\end{pmatrix}$, $\mathbf{Y} = \begin{pmatrix}2\\3\\5\end{pmatrix}$.

$X^TX = \begin{pmatrix}3&6\\6&14\end{pmatrix}$, $X^T\mathbf{Y} = \begin{pmatrix}10\\23\end{pmatrix}$.

$(X^TX)^{-1} = \frac{1}{6}\begin{pmatrix}14&-6\\-6&3\end{pmatrix}$.

$\hat{\boldsymbol{\beta}} = (X^TX)^{-1}X^T\mathbf{Y} = \frac{1}{6}\begin{pmatrix}14\cdot10 - 6\cdot23\\-6\cdot10 + 3\cdot23\end{pmatrix} = \frac{1}{6}\begin{pmatrix}2\\9\end{pmatrix} = \begin{pmatrix}1/3\\3/2\end{pmatrix}$.

Retta: $\hat{y} = 0.333 + 1.5x$ — stessa che si ottiene con la formula scalare.

## 6. Grafico

```plot
{"fn":"0.5*x+1","domain":[-3,3],"yDomain":[-2,4],"title":"Retta di regressione (proiezione OLS)","label1":"ŷ = β̂₀ + β̂₁x","color":"steelblue"}
```

## 7. Interattivo

```slider
{"fn":"a*x+b","domain":[-5,5],"yDomain":[-10,10],"params":[{"name":"a","min":-3,"max":3,"step":0.1,"default":1},{"name":"b","min":-5,"max":5,"step":0.5,"default":0}],"title":"Effetto parziale: ŷ = a·x + b (a parità degli altri regressori)"}
```

## 8. Errori comuni

**Errore 1 — Interpretare i coefficienti senza la clausola "a parità di altri regressori".**
In regressione multipla, $\hat{\beta}_j$ non è l'effetto grezzo di $x_j$ su $y$, ma l'effetto controllato per tutti gli altri predittori. Dire "$x_1$ aumenta $y$ di $\hat{\beta}_1$ unità" è incompleto e spesso fuorviante senza specificare il condizionamento.

**Errore 2 — Aggiungere predittori per alzare $R^2$.**
$R^2$ aumenta sempre all'aggiunta di nuovi predittori, anche rumore puro. Questo porta all'overfitting. Usare sempre $R^2_{\text{adj}}$ o criteri di selezione (AIC, BIC) per confrontare modelli con diverso numero di predittori.

**Errore 3 — Ignorare la multicollinearità.**
SE gonfiati e coefficienti instabili non sono evidenti guardando solo $R^2$ o il test F (che può essere significativo anche con multicollinearità grave). Calcolare sempre i VIF prima di interpretare i singoli coefficienti.

**Errore 4 — Confondere significatività statistica e rilevanza pratica.**
Con $n$ grande, coefficienti minuscoli possono risultare statisticamente significativi ($p < 0.001$) senza avere alcun significato pratico. Guardare la dimensione dell'effetto ($\hat{\beta}_j$ in unità interpretabili) non solo il p-value.

**Errore 5 — Trascurare la diagnostica dei residui.**
Come nella regressione semplice, i grafici dei residui vanno sempre esaminati. Residui con pattern sistematici (trend, eteroschedasticità, outlier) segnalano che il modello non è adeguato, anche se $R^2$ è alto.

**Errore 6 — Pensare che il test F e i test t siano equivalenti.**
Il test F globale testa tutti i predittori insieme; i test t testano ogni predittore separatamente. Con multicollinearità, i test t possono essere non significativi anche quando il test F lo è: i predittori si "rubano" varianza a vicenda. La scelta tra modelli deve tener conto di entrambi.

**Errore 7 — Usare $(X^TX)^{-1}$ quando $X^TX$ è quasi singolare.**
Se la matrice non è invertibile (multicollinearità perfetta) o quasi singolare, la formula OLS produce risultati numericamente inaffidabili. Verificare sempre il numero condizionale di $X^TX$ o usare la fattorizzazione QR per la stima.

## 9. Applicazioni reali

**Econometria:** il modello di Mincer per i salari stima il log-salario in funzione di anni di istruzione, anni di esperienza e esperienza al quadrato ($p = 3$). Questo modello, stimato su milioni di individui, fornisce stime del "rendimento dell'istruzione" (circa 8-10% per anno aggiuntivo nei paesi OCSE).

**Epidemiologia:** gli studi di coorte stimano il rischio di malattia controllando per decine di covariate (età, sesso, fumo, pressione, BMI). La regressione multipla permette di isolare l'effetto di un singolo fattore di rischio dalle variabili confondenti.

**Scienze climatiche:** la temperatura media globale è modellata come funzione lineare di concentrazione di CO₂, irradianza solare, emissioni di aerosol, e oscillazioni oceaniche. Il coefficiente di CO₂ stimato è la "sensibilità climatica" rispetto alle emissioni.

**Machine learning:** la regressione lineare multipla con $p$ molto grande (es. $p > n$) richiede regolarizzazione (Lasso, Ridge). Il Lasso aggiunge una penalizzazione $\lambda \sum \lvert \beta_j \rvert$ che azzera automaticamente i coefficienti dei predittori irrilevanti — è la versione moderna della selezione delle variabili.

## 10. Riepilogo

| Concetto | Formula | Note |
| --- | --- | --- |
| Modello | $\mathbf{Y} = X\boldsymbol{\beta} + \boldsymbol{\varepsilon}$ | $X \in \mathbb{R}^{n \times (p+1)}$, prima colonna = 1 |
| Stimatore OLS | $\hat{\boldsymbol{\beta}} = (X^TX)^{-1}X^T\mathbf{Y}$ | Richiede $X^TX$ invertibile |
| Covarianza OLS | $\text{Cov}(\hat{\boldsymbol{\beta}}) = \sigma^2(X^TX)^{-1}$ | Sotto omoschedasticità |
| Hat matrix | $H = X(X^TX)^{-1}X^T$ | Proiezione ortogonale; $H^2=H$ |
| Valori fittati | $\hat{\mathbf{Y}} = H\mathbf{Y}$ | Ortogonali ai residui |
| Stima $\sigma^2$ | $s_e^2 = \text{RSS}/(n-p-1)$ | $n-p-1$ gradi di libertà |
| Test F globale | $F = \text{(ESS/p)}/\text{(RSS}/(n-p-1)) \sim F(p, n-p-1)$ | $H_0$: tutti $\beta_j = 0$ |
| Test t singolo | $t_j = \hat{\beta}_j/\text{SE}(\hat{\beta}_j) \sim t(n-p-1)$ | $H_0$: $\beta_j = 0$ |
| $R^2$ aggiustato | $R^2_{\text{adj}} = 1 - \frac{\text{RSS}/(n-p-1)}{\text{TSS}/(n-1)}$ | Non cresce necessariamente con $p$ |
| VIF | $\text{VIF}_j = 1/(1-R_j^2)$ | $> 10$ indica multicollinearità grave |

## 11. Esercizi

<details>
<summary>Esercizio 1: Interpretazione coefficienti multipli</summary>

Modello stimato: $\hat{y} = 10 + 4x_1 + 3x_2 - 1.5x_3$, dove $y$ = rendimento accademico, $x_1$ = ore di studio settimanali, $x_2$ = ore di sonno, $x_3$ = ore di social media.

Interpretare $\hat{\beta}_2 = 3$ e $\hat{\beta}_3 = -1.5$.

**Soluzione:**

$\hat{\beta}_2 = 3$: a parità di ore di studio ($x_1$) e di social media ($x_3$), un'ora di sonno in più è associata in media a 3 punti in più nel rendimento.

$\hat{\beta}_3 = -1.5$: a parità di ore di studio e di sonno, un'ora in più sui social media è associata in media a 1.5 punti in meno. L'interpretazione parziale isola l'effetto di ciascuna variabile dalle altre.

</details>

<details>
<summary>Esercizio 2: Calcolo e confronto di R² aggiustato</summary>

$n = 50$. Modello A ($p=1$): RSS $= 80$. Modello B ($p=4$): RSS $= 70$. TSS $= 200$.

Calcolare $R^2$ e $R^2_{\text{adj}}$ per entrambi. Quale preferire?

**Soluzione:**

$R^2$(A) $= 1 - 80/200 = 0.60$. $R^2_{\text{adj}}$(A) $= 1 - \frac{80/48}{200/49} = 1 - \frac{1.667}{4.082} = 1 - 0.408 = 0.592$.

$R^2$(B) $= 1 - 70/200 = 0.65$. $R^2_{\text{adj}}$(B) $= 1 - \frac{70/45}{200/49} = 1 - \frac{1.556}{4.082} = 1 - 0.381 = 0.619$.

$R^2_{\text{adj}}$(B) $> R^2_{\text{adj}}$(A): i 3 predittori aggiuntivi del modello B contribuiscono abbastanza da giustificare la complessità. Preferire B.

</details>

<details>
<summary>Esercizio 3: Test F globale</summary>

$n = 40$, $p = 4$, RSS $= 60$, TSS $= 150$. Testare $H_0: \beta_1 = \beta_2 = \beta_3 = \beta_4 = 0$ a $\alpha = 0.05$.

**Soluzione:**

ESS $= 90$. $F = \dfrac{90/4}{60/35} = \dfrac{22.5}{1.714} \approx 13.12 \sim F(4, 35)$.

Valore critico $F_{4,35,0.05} \approx 2.64$. Poiché $13.12 \gg 2.64$, si **rifiuta** $H_0$ con $p < 0.001$: almeno un predittore ha un effetto significativo.

</details>

<details>
<summary>Esercizio 4: Diagnosi della multicollinearità con VIF</summary>

In un modello con 3 predittori, reggredendo $X_2$ su $X_1$ e $X_3$ si ottiene $R_2^2 = 0.92$. Reggredendo $X_1$ su $X_2$ e $X_3$: $R_1^2 = 0.40$. Reggredendo $X_3$ su $X_1$ e $X_2$: $R_3^2 = 0.60$.

Calcolare VIF e identificare eventuali problemi.

**Soluzione:**

$\text{VIF}_1 = 1/0.60 \approx 1.67$. $\text{VIF}_2 = 1/0.08 = 12.5$. $\text{VIF}_3 = 1/0.40 = 2.50$.

$X_2$ ha VIF $= 12.5 > 10$: multicollinearità grave. La stima di $\hat{\beta}_2$ è instabile. $X_1$ e $X_3$ sono accettabili.

Rimedio: esaminare la correlazione tra $X_2$ e gli altri predittori, e valutare se rimuovere $X_2$ o sostituirla con una combinazione lineare degli altri.

</details>

<details>
<summary>Esercizio 5: Hat matrix e leverage</summary>

Con $n = 20$ e $p = 2$, la soglia di leverage è $2(p+1)/n = 6/20 = 0.30$. Un'osservazione ha $h_{jj} = 0.45$. Cosa implica?

**Soluzione:**

$h_{jj} = 0.45 > 0.30$: l'osservazione è ad alto leverage — si trova lontano dalla massa dei dati nello spazio delle variabili esplicative. Questo non significa che sia un outlier nei valori di $Y$, ma che ha un forte potenziale di influenzare la stima di $\hat{\boldsymbol{\beta}}$.

Occorre verificare la distanza di Cook ($D_j$) per capire se l'osservazione è effettivamente influente sulla stima.

</details>

<details>
<summary>Esercizio 6: Stima OLS matriciale con p=2</summary>

Con $n = 4$ osservazioni: $\mathbf{Y} = (3, 5, 4, 6)^T$, $x_1 = (1, 2, 1, 2)^T$, $x_2 = (1, 1, 2, 2)^T$.

$X = \begin{pmatrix}1&1&1\\1&2&1\\1&1&2\\1&2&2\end{pmatrix}$. Calcolare $X^TX$.

**Soluzione:**

$X^TX = \begin{pmatrix}4&6&6\\6&10&8\\6&8&10\end{pmatrix}$, $X^T\mathbf{Y} = \begin{pmatrix}18\\28\\27\end{pmatrix}$.

Risolvendo il sistema lineare $X^TX\hat{\boldsymbol{\beta}} = X^T\mathbf{Y}$ (es. con eliminazione gaussiana): $\hat{\beta}_0 = 1$, $\hat{\beta}_1 = 1$, $\hat{\beta}_2 = 0.75$.

Modello: $\hat{y} = 1 + x_1 + 0.75x_2$.

</details>

<details>
<summary>Esercizio 7: Paradosso di Simpson e regressione multipla</summary>

In una classe, la correlazione grezza tra ore di studio e voto è negativa ($\hat{\rho} = -0.2$). Ma una volta controllata per la difficoltà del corso frequentato, la correlazione parziale diventa positiva. Spiegare il paradosso.

**Soluzione:**

Questo è il paradosso di Simpson: una correlazione grezza può avere segno opposto alla correlazione parziale per effetto di una variabile confondente.

Qui la difficoltà del corso è una variabile confondente: gli studenti dei corsi più difficili studiano di più (quindi alta correlazione studio-difficoltà) ma prendono voti peggiori (difficoltà-voto negativa). Senza controllare per la difficoltà, l'effetto negativo della difficoltà viene attribuito erroneamente allo studio.

In regressione multipla, $\hat{\beta}_{\text{studio}}$ controlla per la difficoltà e recupera l'effetto positivo dello studio sul voto.

</details>
