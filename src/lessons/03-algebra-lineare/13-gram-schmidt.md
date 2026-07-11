---
id: algebra-13-gram-schmidt
subject: algebra-lineare
topic_it: Ortogonalità
topic_en: Orthogonality
title_it: Processo di Gram-Schmidt e fattorizzazione QR
title_en: Gram-Schmidt process and QR factorization
level: blue
order: 13
source_book: "G. Strang, Introduction to Linear Algebra; MIT OCW 18.06"
source_chapter: "Cap. 4 — Gram-Schmidt"
stato: da-rielaborare
---

## 1. Intuizione

Le basi ortonormali sono le più comode in algebra lineare: per trovare le coordinate di un vettore basta fare prodotti scalari, nessuna inversione di matrice. Ma se ci vengono dati vettori qualunque (magari le colonne di una matrice proveniente da un problema fisico), come si costruisce una base ortonormale dallo stesso span?

Il processo di Gram-Schmidt risponde a questa domanda con un'idea semplice e potente: si procede vettore per vettore, sottraendo ogni volta la componente lungo le direzioni già ortogonalizzate. È come costruire un sistema di riferimento ortogonale in modo incrementale: prima si sceglie la prima direzione, poi si trova la direzione ortogonale alla prima nel piano dei primi due vettori, poi quella ortogonale al piano già costruito, e così via.

Il risultato equivale alla **fattorizzazione QR**: $A = QR$, dove $Q$ ha colonne ortonormali e $R$ è triangolare superiore. Questa fattorizzazione è numericamente più stabile della soluzione via equazioni normali $A^TA\hat{\mathbf{x}} = A^T\mathbf{b}$ ed è usata praticamente da tutti i software scientifici.

## 2. Prerequisiti

- Prodotto scalare interno e ortogonalità
- Norma indotta e normalizzazione: $\hat{\mathbf{v}} = \mathbf{v}/\lVert\mathbf{v}\rVert$
- Proiezione ortogonale su una retta: $\text{proj}_{\mathbf{q}}\mathbf{v} = \langle\mathbf{v},\mathbf{q}\rangle\mathbf{q}$ (per $\mathbf{q}$ unitario)
- Indipendenza lineare
- Matrici ortogonali: $Q^TQ = I$

## 3. Teoria

**Basi ortonormali.** Una base $\{\mathbf{q}_1,\ldots,\mathbf{q}_n\}$ è:
- **Ortogonale** se $\langle\mathbf{q}_i,\mathbf{q}_j\rangle = 0$ per $i\neq j$.
- **Ortonormale** se in più $\lVert\mathbf{q}_i\rVert = 1$ per ogni $i$.

Per una base ortonormale: $Q^TQ = I$ (dove $Q = [\mathbf{q}_1|\cdots|\mathbf{q}_n]$). Se $Q$ è quadrata, $Q^{-1} = Q^T$.

**Vantaggio computazionale.** Le coordinate di $\mathbf{v}$ nella base ortonormale $\{\mathbf{q}_i\}$ sono:

$$\mathbf{v} = \sum_{i=1}^n \langle\mathbf{q}_i,\mathbf{v}\rangle\,\mathbf{q}_i, \qquad c_i = \langle\mathbf{q}_i,\mathbf{v}\rangle$$

Nessuna inversione richiesta: le coordinate si calcolano con semplici prodotti scalari.

**Processo di Gram-Schmidt.** Dato un insieme LI $\{\mathbf{a}_1,\ldots,\mathbf{a}_k\}$, costruisce una base ortonormale dello stesso span.

**Passo 1:** Normalizzare il primo vettore:

$$\mathbf{q}_1 = \frac{\mathbf{a}_1}{\lVert\mathbf{a}_1\rVert}$$

**Passo 2:** Sottrarre la componente lungo $\mathbf{q}_1$, poi normalizzare:

$$\mathbf{e}_2 = \mathbf{a}_2 - \langle\mathbf{a}_2,\mathbf{q}_1\rangle\,\mathbf{q}_1, \qquad \mathbf{q}_2 = \frac{\mathbf{e}_2}{\lVert\mathbf{e}_2\rVert}$$

**Passo $j$ (generale):** Sottrarre le proiezioni su tutte le direzioni già costruite:

$$\mathbf{e}_j = \mathbf{a}_j - \sum_{i=1}^{j-1}\langle\mathbf{a}_j,\mathbf{q}_i\rangle\,\mathbf{q}_i, \qquad \mathbf{q}_j = \frac{\mathbf{e}_j}{\lVert\mathbf{e}_j\rVert}$$

Nota: se $\lVert\mathbf{e}_j\rVert = 0$, il vettore $\mathbf{a}_j$ è LI dagli altri e l'insieme non era LI.

**Fattorizzazione QR.** Il processo di Gram-Schmidt equivale a fattorizzare la matrice $A = [\mathbf{a}_1|\cdots|\mathbf{a}_k]$ come:

$$A = QR$$

dove:
- $Q = [\mathbf{q}_1|\cdots|\mathbf{q}_k]$ ha colonne ortonormali: $Q^TQ = I_k$.
- $R$ è triangolare superiore con elementi diagonali positivi ($r_{ii} = \lVert\mathbf{e}_i\rVert > 0$).

Gli elementi di $R$: $r_{ij} = \langle\mathbf{a}_j,\mathbf{q}_i\rangle$ per $i \leq j$.

**QR per minimi quadrati.** La soluzione di minimi quadrati tramite QR è:

$$A\hat{\mathbf{x}} = \mathbf{b} \implies QR\hat{\mathbf{x}} = \mathbf{b} \implies R\hat{\mathbf{x}} = Q^T\mathbf{b}$$

Questo sistema triangolare si risolve con la sostituzione all'indietro — molto più stabile numericamente di $(A^TA)^{-1}A^T\mathbf{b}$.

## 4. Derivazione

**Derivazione che $\mathbf{q}_1, \mathbf{q}_2$ sono ortogonali.**

Per costruzione:

$$\langle\mathbf{q}_1,\mathbf{e}_2\rangle = \langle\mathbf{q}_1,\mathbf{a}_2 - \langle\mathbf{a}_2,\mathbf{q}_1\rangle\mathbf{q}_1\rangle = \langle\mathbf{q}_1,\mathbf{a}_2\rangle - \langle\mathbf{a}_2,\mathbf{q}_1\rangle\underbrace{\langle\mathbf{q}_1,\mathbf{q}_1\rangle}_{=1} = 0$$

Quindi $\langle\mathbf{q}_1,\mathbf{e}_2\rangle = 0$, e poiché $\mathbf{q}_2 = \mathbf{e}_2/\lVert\mathbf{e}_2\rVert$, anche $\langle\mathbf{q}_1,\mathbf{q}_2\rangle = 0$. $\square$

**Derivazione della relazione $A = QR$.**

Riscrivendo la formula del passo $j$:

$$\mathbf{a}_j = \mathbf{e}_j + \sum_{i=1}^{j-1}\langle\mathbf{a}_j,\mathbf{q}_i\rangle\mathbf{q}_i = \lVert\mathbf{e}_j\rVert\mathbf{q}_j + \sum_{i=1}^{j-1}r_{ij}\mathbf{q}_i$$

Quindi $\mathbf{a}_j = \sum_{i=1}^{j} r_{ij}\mathbf{q}_i$ con $r_{ij} = \langle\mathbf{a}_j,\mathbf{q}_i\rangle$ per $i<j$ e $r_{jj} = \lVert\mathbf{e}_j\rVert$.

In forma matriciale: $A = QR$ con $R$ triangolare superiore. $\square$

## 5. Esempi

**Esempio 1 — Gram-Schmidt in $\mathbb{R}^2$.**

$\mathbf{a}_1 = (3,4)$, $\mathbf{a}_2 = (1,0)$.

**Passo 1:** $\mathbf{q}_1 = (3,4)/5 = (3/5, 4/5)$.

**Passo 2:** $\langle\mathbf{a}_2,\mathbf{q}_1\rangle = 1\cdot(3/5)+0\cdot(4/5) = 3/5$.

$\mathbf{e}_2 = (1,0) - (3/5)(3/5,4/5) = (1,0)-(9/25,12/25) = (16/25,-12/25)$.

$\lVert\mathbf{e}_2\rVert = \sqrt{(256+144)/625} = \sqrt{400/625} = 20/25 = 4/5$.

$\mathbf{q}_2 = (16/25,-12/25)\cdot(5/4) = (4/5,-3/5)$.

Verifica: $\mathbf{q}_1\cdot\mathbf{q}_2 = 12/25-12/25 = 0$ ✓. $\lVert\mathbf{q}_2\rVert=\sqrt{16/25+9/25}=1$ ✓.

---

**Esempio 2 — Gram-Schmidt in $\mathbb{R}^3$.**

$\mathbf{a}_1 = (1,1,0)$, $\mathbf{a}_2 = (1,0,1)$, $\mathbf{a}_3 = (0,1,1)$.

**$\mathbf{q}_1$:** $\lVert\mathbf{a}_1\rVert=\sqrt{2}$. $\mathbf{q}_1 = (1/\sqrt{2}, 1/\sqrt{2}, 0)$.

**$\mathbf{q}_2$:** $\langle\mathbf{a}_2,\mathbf{q}_1\rangle = 1/\sqrt{2}$.

$\mathbf{e}_2 = (1,0,1)-(1/\sqrt{2})(1/\sqrt{2},1/\sqrt{2},0) = (1,0,1)-(1/2,1/2,0) = (1/2,-1/2,1)$.

$\lVert\mathbf{e}_2\rVert = \sqrt{1/4+1/4+1} = \sqrt{3/2}$.

$\mathbf{q}_2 = (1/2,-1/2,1)/\sqrt{3/2} = (1/\sqrt{6},-1/\sqrt{6},2/\sqrt{6})$.

**$\mathbf{q}_3$:** $\langle\mathbf{a}_3,\mathbf{q}_1\rangle = 1/\sqrt{2}$, $\langle\mathbf{a}_3,\mathbf{q}_2\rangle = -1/\sqrt{6}+2/\sqrt{6} = 1/\sqrt{6}$.

$\mathbf{e}_3 = (0,1,1) - (1/\sqrt{2})\mathbf{q}_1 - (1/\sqrt{6})\mathbf{q}_2$

$= (0,1,1)-(1/2,1/2,0)-(1/6,-1/6,2/6)$

$= (0-1/2-1/6, 1-1/2+1/6, 1-0-2/6) = (-2/3, 2/3, 2/3)$.

$\lVert\mathbf{e}_3\rVert = \sqrt{4/9+4/9+4/9} = 2/\sqrt{3}$.

$\mathbf{q}_3 = (-2/3,2/3,2/3)\cdot\sqrt{3}/2 = (-1/\sqrt{3}, 1/\sqrt{3}, 1/\sqrt{3})$.

---

**Esempio 3 — Fattorizzazione QR $2\times 2$.**

Da Esempio 1: $\mathbf{a}_1=(3,4)$, $\mathbf{a}_2=(1,0)$, $\mathbf{q}_1=(3/5,4/5)$, $\mathbf{q}_2=(4/5,-3/5)$.

$R$:
- $r_{11} = \lVert\mathbf{e}_1\rVert = 5$
- $r_{12} = \langle\mathbf{a}_2,\mathbf{q}_1\rangle = 3/5$
- $r_{22} = \lVert\mathbf{e}_2\rVert = 4/5$

$$Q = \begin{pmatrix}3/5&4/5\\4/5&-3/5\end{pmatrix}, \quad R = \begin{pmatrix}5&3/5\\0&4/5\end{pmatrix}$$

Verifica: $QR = \begin{pmatrix}3&1\\4&0\end{pmatrix} = A$ ✓.

---

**Esempio 4 — $R = Q^TA$.**

Dalla relazione $A = QR$ con $Q^TQ = I$: $Q^TA = Q^TQR = R$.

Quindi $R$ si calcola proiettando $A$ su $Q$. Le colonne di $R$ codificano le coordinate di ogni $\mathbf{a}_j$ nella base $\{\mathbf{q}_i\}$.

---

**Esempio 5 — Minimi quadrati via QR.**

Per $A = \begin{pmatrix}1&0\\1&1\\1&2\end{pmatrix}$, $\mathbf{b}=(1,2,2)^T$, usando la fattorizzazione QR (calcolata da software):

$Q^T\mathbf{b}$ e $R\hat{\mathbf{x}} = Q^T\mathbf{b}$ si risolvono con la sostituzione all'indietro, dando $\hat{\mathbf{x}} = (2/3, 1)^T$ — lo stesso risultato dell'Esempio 3 della lezione precedente, ma calcolato in modo più stabile.

---

**Esempio 6 — Basi di Fourier discrete.**

Le funzioni $\mathbf{q}_k = (\cos(k\cdot 0), \cos(k\cdot\pi/2), \cos(k\cdot\pi))^T/\lVert\cdot\rVert$ formano una famiglia ortogonale: il processo di Gram-Schmidt applicato alle potenze $1, x, x^2$ nello spazio dei polinomi con prodotto scalare $L^2[0,1]$ genera i polinomi di Legendre spostati.

---

**Esempio 7 — Instabilità numerica di Gram-Schmidt classico.**

Il processo di Gram-Schmidt standard può perdere ortogonalità per vettori quasi dipendenti: errori in virgola mobile si accumulano. La variante **modificata** (MGS) sottrae le proiezioni una alla volta, aggiornando il vettore residuo ad ogni passo:

Per il passo 3, invece di $\mathbf{e}_3 = \mathbf{a}_3 - \langle\mathbf{a}_3,\mathbf{q}_1\rangle\mathbf{q}_1 - \langle\mathbf{a}_3,\mathbf{q}_2\rangle\mathbf{q}_2$, si calcola prima $\mathbf{e}_3' = \mathbf{a}_3 - \langle\mathbf{a}_3,\mathbf{q}_1\rangle\mathbf{q}_1$, poi $\mathbf{e}_3 = \mathbf{e}_3' - \langle\mathbf{e}_3',\mathbf{q}_2\rangle\mathbf{q}_2$. Matematicamente equivalente, numericamente più stabile.

---

**Esempio 8 — Matrici di Householder per QR.**

Il metodo di Householder costruisce la QR in modo più stabile del Gram-Schmidt: ad ogni passo si applicano riflessioni ortogonali $H_j = I - 2\mathbf{u}_j\mathbf{u}_j^T$ che azzerano le entrate sotto la diagonale. In MATLAB/NumPy, `qr(A)` usa questo metodo. Il costo computazionale è $O(mn^2 - n^3/3)$ operazioni.

## 6. Grafico

```plot
{"title":"Gram-Schmidt: vettore originale e componente ortogonalizzata","fn":"x","fn2":"-x+2","domain":[-1,3],"yDomain":[-1,3],"label1":"direzione q₁","label2":"direzione ortogonale q₂"}
```

## 7. Slider interattivo

```slider
{"title":"Angolo tra vettori prima e dopo l'ortogonalizzazione","fn":"Math.cos(a*x)","domain":[0,6.28],"yDomain":[-1.5,1.5],"pname":"a","pmin":1,"pmax":4,"pdefault":1,"pstep":1,"plabel":"frequenza della base ortonormale","label1":"elemento base cos(nx)"}
```

## 8. Errori comuni

**Errore 1 — Non sottrarre le proiezioni su tutti i vettori precedenti.** Al passo $j$, si deve sottrarre la proiezione su $\mathbf{q}_1, \mathbf{q}_2, \ldots, \mathbf{q}_{j-1}$: saltarne anche uno solo rompe l'ortogonalità. Un controllo è calcolare $Q^TQ$ e verificare che sia $I$.

**Errore 2 — Usare i vettori $\mathbf{a}_i$ invece di $\mathbf{q}_i$ nelle proiezioni.** Al passo $j$, le proiezioni vanno fatte sui vettori $\mathbf{q}_i$ già normalizzati, non su $\mathbf{a}_i$. La formula con $\mathbf{q}_i$ unitari è $\langle\mathbf{a}_j,\mathbf{q}_i\rangle\mathbf{q}_i$ (senza dividere per $\lVert\mathbf{q}_i\rVert^2$ perché è già 1).

**Errore 3 — Normalizzare prima di sottrarre.** L'ordine è fondamentale: prima si sottrae la proiezione, ottenendo $\mathbf{e}_j$, poi si normalizza. Normalizzare $\mathbf{a}_j$ prima non produce lo stesso risultato.

**Errore 4 — Confondere $Q^TQ = I$ con $QQ^T = I$.** Per $Q$ rettangolare ($m\times n$ con $m>n$), $Q^TQ = I_n$ (identità $n\times n$), ma $QQ^T \neq I_m$. Solo per $Q$ quadrata vale $Q^{-1} = Q^T$.

**Errore 5 — Pensare che la fattorizzazione QR sia unica.** $A = QR$ non è unica in generale (il segno delle colonne di $Q$ e righe di $R$ può essere cambiato). Per renderla unica si richiede $r_{ii} > 0$, cioè la diagonale di $R$ è positiva.

**Errore 6 — Calcolare $R = Q^TA$ senza verificare.** Se Gram-Schmidt è stato applicato con errori, la verifica $QR = A$ colonna per colonna rivela subito il problema.

**Errore 7 — Sottovalutare l'instabilità numerica del Gram-Schmidt classico.** Per matrici mal condizionate (quasi-singolari), il Gram-Schmidt classico perde ortogonalità rapidamente. In applicazioni numeriche, si usa sempre Gram-Schmidt modificato o la fattorizzazione di Householder.

## 9. Applicazioni reali

**Algoritmo QR per il calcolo degli autovalori.** Il metodo delle iterazioni QR — lo standard industriale per il calcolo degli autovalori — fattorizza iterativamente $A_k = Q_kR_k$ e poi aggiorna $A_{k+1} = R_kQ_k$. Si dimostra che $A_k$ converge (sotto ipotesi mild) a una matrice triangolare superiore con gli autovalori sulla diagonale. La convergenza è quadratica con lo shift di Wilkinson. Questo algoritmo, integrato nelle librerie LAPACK e BLAS, è alla base di MATLAB, NumPy/SciPy e di ogni software scientifico che calcola autovalori.

**Segnali e polinomi ortogonali.** I polinomi di Legendre $P_0, P_1, P_2, \ldots$ si ottengono applicando Gram-Schmidt alle potenze $1, x, x^2, \ldots$ con il prodotto scalare $L^2([-1,1])$. Analogamente, i polinomi di Chebyshev provengono da un prodotto scalare pesato $w(x)=1/\sqrt{1-x^2}$. Questi sistemi ortonormali permettono di espandere funzioni arbitrarie in serie di polinomi ortogonali — usato nell'integrazione numerica (quadratura di Gauss), nella risoluzione di equazioni differenziali e nell'approssimazione di funzioni.

**Compressione e codifica senza perdita.** In numerosi codec audio/video (Dolby, AAC, H.264), il segnale viene proiettato su un sistema di vettori ortogonali (versione discreta della trasformata coseno). La fattorizzazione QR garantisce che le proiezioni siano efficienti e numericamente stabili: i coefficienti di Fourier discreti possono essere quantizzati e compressi senza che errori di arrotondamento si propaghino all'intera ricostruzione.

## 10. Riepilogo

| Concetto | Formula |
| --- | --- |
| Base ortonormale | $\langle\mathbf{q}_i,\mathbf{q}_j\rangle = \delta_{ij}$, $Q^TQ = I$ |
| Coordinate | $c_i = \langle\mathbf{q}_i,\mathbf{v}\rangle$ |
| Passo Gram-Schmidt | $\mathbf{e}_j = \mathbf{a}_j - \sum_{i<j}\langle\mathbf{a}_j,\mathbf{q}_i\rangle\mathbf{q}_i$, $\mathbf{q}_j = \mathbf{e}_j/\lVert\mathbf{e}_j\rVert$ |
| Fattorizzazione QR | $A = QR$, $Q^TQ=I$, $R$ triangolare superiore |
| Elementi di $R$ | $r_{ij} = \langle\mathbf{a}_j,\mathbf{q}_i\rangle$ per $i\leq j$ |
| Recupero di $R$ | $R = Q^TA$ |
| Minimi quadrati via QR | $R\hat{\mathbf{x}} = Q^T\mathbf{b}$ |
| Versione numericamente stabile | Gram-Schmidt modificato o Householder |

## 11. Esercizi

<details>
<summary>Esercizio 1 — Gram-Schmidt in $\mathbb{R}^2$</summary>

Applicare Gram-Schmidt a $\mathbf{a}_1=(3,4)$, $\mathbf{a}_2=(1,0)$.

**Soluzione:**

$\mathbf{q}_1=(3/5,4/5)$.

$\mathbf{e}_2=(1,0)-(3/5)(3/5,4/5)=(16/25,-12/25)$, $\lVert\mathbf{e}_2\rVert=4/5$.

$\mathbf{q}_2=(4/5,-3/5)$.

Verifica: $\mathbf{q}_1\cdot\mathbf{q}_2=12/25-12/25=0$ ✓.

</details>

<details>
<summary>Esercizio 2 — Gram-Schmidt in $\mathbb{R}^3$</summary>

Ortonormalizzare $\mathbf{a}_1=(1,1,0)$, $\mathbf{a}_2=(1,0,1)$, $\mathbf{a}_3=(0,1,1)$.

**Soluzione:**

$\mathbf{q}_1=(1/\sqrt{2},1/\sqrt{2},0)$.

$\mathbf{q}_2=(1/\sqrt{6},-1/\sqrt{6},2/\sqrt{6})$.

$\mathbf{q}_3=(-1/\sqrt{3},1/\sqrt{3},1/\sqrt{3})$.

(Calcolo dettagliato nella sezione Esempi.) Verifica: $Q^TQ = I_3$ ✓.

</details>

<details>
<summary>Esercizio 3 — Fattorizzazione QR e verifica</summary>

Fattorizzare $A=\begin{pmatrix}1&1\\1&0\\0&1\end{pmatrix}$ tramite Gram-Schmidt e verificare $A=QR$.

**Soluzione:**

$\mathbf{a}_1=(1,1,0)^T$: $\mathbf{q}_1=(1,1,0)^T/\sqrt{2}$.

$\langle\mathbf{a}_2,\mathbf{q}_1\rangle = (1\cdot1+0\cdot1+1\cdot0)/\sqrt{2} = 1/\sqrt{2}$.

$\mathbf{e}_2=(1,0,1)^T-(1/2,1/2,0)^T=(1/2,-1/2,1)^T$, $\lVert\mathbf{e}_2\rVert=\sqrt{3/2}$.

$\mathbf{q}_2=(1,-1,2)^T/\sqrt{6}$.

$R = \begin{pmatrix}\sqrt{2}&1/\sqrt{2}\\0&\sqrt{3/2}\end{pmatrix}$.

Verifica: $QR=A$ ✓.

</details>

<details>
<summary>Esercizio 4 — $R = Q^TA$</summary>

Verificare che $R = Q^TA$ nell'Esercizio 3.

**Soluzione:**

$Q^T\mathbf{a}_1 = [\langle\mathbf{a}_1,\mathbf{q}_1\rangle, \langle\mathbf{a}_1,\mathbf{q}_2\rangle]^T = [\sqrt{2}, 0]^T$ (colonna 1 di $R$).

$Q^T\mathbf{a}_2 = [\langle\mathbf{a}_2,\mathbf{q}_1\rangle, \langle\mathbf{a}_2,\mathbf{q}_2\rangle]^T = [1/\sqrt{2}, \sqrt{3/2}]^T$ (colonna 2 di $R$). ✓

</details>

<details>
<summary>Esercizio 5 — Minimi quadrati via QR</summary>

Risolvere il sistema ai minimi quadrati $A\hat{\mathbf{x}}\approx\mathbf{b}$ con $A=\begin{pmatrix}1&0\\1&1\\1&2\end{pmatrix}$, $\mathbf{b}=(1,2,2)^T$ tramite QR.

**Soluzione:**

Fattorizzazione QR di $A$ (via Gram-Schmidt):

$\mathbf{q}_1 = (1,1,1)^T/\sqrt{3}$, $\mathbf{q}_2 = (-1,0,1)^T/\sqrt{2}$ (dopo ortogonalizzazione).

$Q^T\mathbf{b} = (\langle\mathbf{b},\mathbf{q}_1\rangle, \langle\mathbf{b},\mathbf{q}_2\rangle)^T = (5/\sqrt{3}, 1/\sqrt{2})^T$.

$R\hat{\mathbf{x}} = Q^T\mathbf{b}$ triangolare: si risolve con back substitution.

Risultato: $\hat{\mathbf{x}} = (2/3, 1)^T$ (stessa risposta dell'Esempio 3 della lezione 12).

</details>

<details>
<summary>Esercizio 6 — Ortonormalizzazione in uno spazio di polinomi</summary>

Applicare Gram-Schmidt a $\{1, x\}$ su $[0,1]$ con $\langle f,g\rangle = \int_0^1 f(x)g(x)\,dx$.

**Soluzione:**

$\lVert 1\rVert^2 = \int_0^1 1\,dx = 1$. $\mathbf{q}_1(x) = 1$.

$\langle x,1\rangle = \int_0^1 x\,dx = 1/2$. $\mathbf{e}_2(x) = x - (1/2)\cdot 1 = x-1/2$.

$\lVert\mathbf{e}_2\rVert^2 = \int_0^1(x-1/2)^2\,dx = [x^3/3-x^2/2+x/4]_0^1 = 1/12$.

$\mathbf{q}_2(x) = (x-1/2)/\sqrt{1/12} = 2\sqrt{3}(x-1/2)$.

Verifica: $\langle\mathbf{q}_1,\mathbf{q}_2\rangle = \int_0^1 2\sqrt{3}(x-1/2)\,dx = 2\sqrt{3}[x^2/2-x/2]_0^1 = 2\sqrt{3}\cdot 0 = 0$ ✓.

</details>

<details>
<summary>Esercizio 7 — Verifica di base ortonormale</summary>

Verificare che $\mathbf{q}_1=(3/5,4/5)$, $\mathbf{q}_2=(4/5,-3/5)$ formano una base ortonormale di $\mathbb{R}^2$.

**Soluzione:**

Ortogonalità: $\mathbf{q}_1\cdot\mathbf{q}_2 = 12/25-12/25 = 0$ ✓.

Normalità: $\lVert\mathbf{q}_1\rVert=\sqrt{9/25+16/25}=1$ ✓. $\lVert\mathbf{q}_2\rVert=\sqrt{16/25+9/25}=1$ ✓.

$Q = \begin{pmatrix}3/5&4/5\\4/5&-3/5\end{pmatrix}$: $\det(Q) = -9/25-16/25 = -1$. Matrice ortogonale con $\det=-1$ (riflessione).

$Q^TQ = I_2$ ✓. $QQ^T = I_2$ ✓ (perché $Q$ è quadrata).

</details>

<details>
<summary>Esercizio 8 — Vettori quasi-dipendenti</summary>

Applicare Gram-Schmidt a $\mathbf{a}_1=(1,0)$, $\mathbf{a}_2=(1,\epsilon)$ con $\epsilon=10^{-8}$.

**Soluzione:**

$\mathbf{q}_1=(1,0)$.

$\langle\mathbf{a}_2,\mathbf{q}_1\rangle = 1$. $\mathbf{e}_2=(1,\epsilon)-(1)(1,0)=(0,\epsilon)$.

$\lVert\mathbf{e}_2\rVert=\epsilon$. $\mathbf{q}_2=(0,1)$.

Matematicamente corretto! Ma con $\epsilon=10^{-8}$ in virgola mobile, il calcolo $(1,\epsilon)-(1,0)=(0,\epsilon)$ richiede cancellazione catastrofica: la componente $0$ potrebbe non essere esattamente 0. Gram-Schmidt modificato è più stabile in questo scenario.

</details>
