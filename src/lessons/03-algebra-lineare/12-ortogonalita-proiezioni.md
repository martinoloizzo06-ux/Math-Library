---
id: algebra-12-ortogonalita-proiezioni
subject: algebra-lineare
topic_it: Ortogonalità
topic_en: Orthogonality
title_it: Ortogonalità e proiezioni ortogonali
title_en: Orthogonality and orthogonal projections
level: blue
order: 12
source_book: "G. Strang, Introduction to Linear Algebra; MIT OCW 18.06"
source_chapter: "Cap. 4 — Proiezioni"
stato: da-rielaborare
---

## 1. Intuizione

Immagina di proiettare la tua ombra sul pavimento alla luce del sole verticale: l'ombra è la proiezione ortogonale del tuo corpo sul piano del pavimento. Il vettore dal tuo piede alla punta della tua testa, meno il vettore dalla tua ombra alla punta, è perpendicolare al pavimento — cioè ortogonale al piano.

Questo è esattamente il concetto di proiezione ortogonale: dato un vettore $\mathbf{b}$ e un sottospazio $W$, trovare il vettore $\hat{\mathbf{b}} \in W$ più vicino a $\mathbf{b}$. La differenza $\mathbf{b} - \hat{\mathbf{b}}$ è ortogonale all'intero sottospazio.

L'applicazione più importante: se il sistema $A\mathbf{x} = \mathbf{b}$ non ha soluzione (perché $\mathbf{b}$ non sta nella colonna di $A$), la proiezione ortogonale di $\mathbf{b}$ su $C(A)$ dà la **migliore approssimazione possibile** — il metodo dei minimi quadrati, fondamentale in statistica e ingegneria.

## 2. Prerequisiti

- Prodotto scalare interno e ortogonalità
- Sottospazi vettoriali e loro dimensione
- I quattro sottospazi fondamentali di una matrice
- Sistemi lineari e loro soluzione
- Trasposte: $(AB)^T = B^TA^T$

## 3. Teoria

**Complemento ortogonale.** Il **complemento ortogonale** di un sottospazio $W \subseteq V$ è:

$$W^\perp = \{\mathbf{v} \in V : \langle\mathbf{v},\mathbf{w}\rangle = 0 \;\forall\mathbf{w}\in W\}$$

$W^\perp$ è un sottospazio e vale la decomposizione diretta ortogonale:

$$V = W \oplus W^\perp, \qquad \dim(W) + \dim(W^\perp) = \dim(V)$$

**I quattro sottospazi fondamentali di Strang.** Per $A \in \mathbb{R}^{m\times n}$:

$$C(A)^\perp = N(A^T), \qquad C(A^T)^\perp = N(A)$$

$$\mathbb{R}^n = C(A^T) \oplus N(A), \qquad \mathbb{R}^m = C(A) \oplus N(A^T)$$

**Proiezione su una retta.** Per $W = \text{span}\{\mathbf{a}\}$, la proiezione ortogonale di $\mathbf{b}$ su $W$ è:

$$\hat{\mathbf{b}} = \frac{\langle\mathbf{a},\mathbf{b}\rangle}{\lVert\mathbf{a}\rVert^2}\mathbf{a} = \frac{\mathbf{a}^T\mathbf{b}}{\mathbf{a}^T\mathbf{a}}\mathbf{a}$$

Il residuo $\mathbf{e} = \mathbf{b} - \hat{\mathbf{b}}$ è ortogonale a $\mathbf{a}$: $\mathbf{a}^T(\mathbf{b}-\hat{\mathbf{b}}) = 0$.

**Matrice di proiezione su una retta.** La proiezione si scrive come:

$$\hat{\mathbf{b}} = P_\mathbf{a}\mathbf{b}, \qquad P_\mathbf{a} = \frac{\mathbf{a}\mathbf{a}^T}{\mathbf{a}^T\mathbf{a}}$$

**Proiezione su $C(A)$.** Se le colonne di $A$ sono linearmente indipendenti, la proiezione ortogonale di $\mathbf{b}$ sul sottospazio colonna di $A$ è:

$$\hat{\mathbf{b}} = A\hat{\mathbf{x}}, \qquad \hat{\mathbf{x}} = (A^TA)^{-1}A^T\mathbf{b}$$

La **matrice di proiezione** è:

$$P = A(A^TA)^{-1}A^T$$

**Proprietà fondamentali di $P$.**
- $P^2 = P$ (**idempotente**): proiettare due volte è uguale a proiettare una volta.
- $P^T = P$ (**simmetrica**).
- Gli autovalori di $P$ sono solo 0 e 1 (1 su $C(A)$, 0 su $C(A)^\perp$).
- $I - P$ è la matrice di proiezione sul complemento ortogonale $C(A)^\perp$.

**Minimi quadrati.** Se $A\mathbf{x} = \mathbf{b}$ non ha soluzioni, il vettore $\hat{\mathbf{x}}$ che minimizza $\lVert A\mathbf{x}-\mathbf{b}\rVert^2$ soddisfa le **equazioni normali**:

$$A^TA\hat{\mathbf{x}} = A^T\mathbf{b}$$

La soluzione $\hat{\mathbf{x}} = (A^TA)^{-1}A^T\mathbf{b}$ esiste unica se $A$ ha colonne LI (cioè $A^TA$ è invertibile).

## 4. Derivazione

**Derivazione della formula di proiezione su $C(A)$.**

La proiezione $\hat{\mathbf{b}} = A\hat{\mathbf{x}}$ deve soddisfare: il residuo $\mathbf{e} = \mathbf{b} - A\hat{\mathbf{x}}$ è ortogonale a tutte le colonne di $A$, cioè a ogni $\mathbf{a}_j = A\mathbf{e}_j$:

$$\mathbf{a}_j^T(\mathbf{b} - A\hat{\mathbf{x}}) = 0 \quad \text{per ogni } j$$

In forma matriciale (impilando tutti i $\mathbf{a}_j^T$):

$$A^T(\mathbf{b} - A\hat{\mathbf{x}}) = \mathbf{0} \implies A^TA\hat{\mathbf{x}} = A^T\mathbf{b}$$

Se $A$ ha colonne LI, $A^TA$ è invertibile (si dimostra: $\ker(A^TA) = \ker(A)$), quindi:

$$\hat{\mathbf{x}} = (A^TA)^{-1}A^T\mathbf{b}, \qquad P = A(A^TA)^{-1}A^T \quad \square$$

**Verifica di $P^2 = P$.**

$$P^2 = [A(A^TA)^{-1}A^T][A(A^TA)^{-1}A^T] = A(A^TA)^{-1}[\underbrace{A^TA}_{=A^TA}](A^TA)^{-1}A^T = A(A^TA)^{-1}A^T = P \quad \square$$

## 5. Esempi

**Esempio 1 — Proiezione su una retta in $\mathbb{R}^3$.**

Proiettare $\mathbf{b}=(1,1,1)$ sulla retta $\mathbf{a}=(1,2,2)$.

$$\hat{\mathbf{b}} = \frac{\mathbf{a}^T\mathbf{b}}{\mathbf{a}^T\mathbf{a}}\mathbf{a} = \frac{1+2+2}{1+4+4}(1,2,2) = \frac{5}{9}(1,2,2) = \left(\frac{5}{9},\frac{10}{9},\frac{10}{9}\right)$$

Residuo: $\mathbf{e} = (1,1,1) - (5/9,10/9,10/9) = (4/9,-1/9,-1/9)$.

Verifica: $\mathbf{a}^T\mathbf{e} = 4/9 - 2/9 - 2/9 = 0$ ✓.

---

**Esempio 2 — Matrice di proiezione $1\times 1$.**

Proiettare su $\mathbf{a} = (1,1)^T$.

$$P = \frac{\mathbf{a}\mathbf{a}^T}{\mathbf{a}^T\mathbf{a}} = \frac{1}{2}\begin{pmatrix}1\\1\end{pmatrix}(1\;1) = \frac{1}{2}\begin{pmatrix}1&1\\1&1\end{pmatrix}$$

Verifica: $P^2 = \frac{1}{4}\begin{pmatrix}2&2\\2&2\end{pmatrix} = P$ ✓. $P^T = P$ ✓.

$P(1,0)^T = (1/2,1/2)^T$: il vettore $(1,0)$ viene proiettato sulla retta $y=x$. ✓

---

**Esempio 3 — Minimi quadrati: retta di regressione.**

Trovare la retta $y = a + bx$ che meglio approssima $(0,1),(1,2),(2,2)$.

$$A = \begin{pmatrix}1&0\\1&1\\1&2\end{pmatrix}, \quad \mathbf{b} = \begin{pmatrix}1\\2\\2\end{pmatrix}$$

$$A^TA = \begin{pmatrix}3&3\\3&5\end{pmatrix}, \quad A^T\mathbf{b} = \begin{pmatrix}5\\7\end{pmatrix}$$

Sistema: $3a+3b=5$, $3a+5b=7$. Sottraendo: $2b=2$, $b=1$, $a=2/3$.

Retta: $y = 2/3 + x$.

Residuo: $\mathbf{e} = \mathbf{b} - A\hat{\mathbf{x}} = (1,2,2)^T - (2/3,5/3,8/3)^T = (1/3,1/3,-2/3)^T$.

$\lVert\mathbf{e}\rVert^2 = 1/9+1/9+4/9 = 6/9 = 2/3$.

---

**Esempio 4 — Proiezione su un piano.**

Proiettare $\mathbf{b}=(0,0,1)$ sul piano $z=0$ in $\mathbb{R}^3$.

Il piano ha base $\mathbf{a}_1=(1,0,0)$, $\mathbf{a}_2=(0,1,0)$. Matrice $A = [\mathbf{a}_1|\mathbf{a}_2] = \begin{pmatrix}1&0\\0&1\\0&0\end{pmatrix}$.

$$A^TA = I_2, \quad P = A(A^TA)^{-1}A^T = AA^T = \begin{pmatrix}1&0&0\\0&1&0\\0&0&0\end{pmatrix}$$

$P\mathbf{b} = (0,0,0)^T$. ✓ (il vettore $(0,0,1)$ è ortogonale al piano $z=0$, la sua proiezione è l'origine).

---

**Esempio 5 — Complemento ortogonale.**

In $\mathbb{R}^3$, $W = \text{span}\{(1,0,1),(0,1,1)\}$.

$W^\perp$ è il nucleo di $A^T$ dove $A = [(1,0,1)^T|(0,1,1)^T]$.

$(A^T)\mathbf{v} = 0$: $v_1+v_3=0$ e $v_2+v_3=0$. Soluzione parametrica: $\mathbf{v} = t(-1,-1,1)$.

$W^\perp = \text{span}\{(-1,-1,1)\}$. $\dim(W) + \dim(W^\perp) = 2+1 = 3 = \dim(\mathbb{R}^3)$ ✓.

---

**Esempio 6 — Regressione lineare quadratica.**

Adattare $y = a + bx + cx^2$ ai punti $(0,1),(1,1),(2,3),(-1,0)$.

$$A = \begin{pmatrix}1&0&0\\1&1&1\\1&2&4\\1&-1&1\end{pmatrix}, \quad \mathbf{b} = \begin{pmatrix}1\\1\\3\\0\end{pmatrix}$$

$A^TA = \begin{pmatrix}4&2&6\\2&6&6\\6&6&18\end{pmatrix}$, $A^T\mathbf{b} = \begin{pmatrix}5\\7\\12\end{pmatrix}$.

La soluzione delle equazioni normali dà la parabola di miglior fit.

---

**Esempio 7 — Proiezione e autovalori.**

Per $P = \begin{pmatrix}1/2&1/2\\1/2&1/2\end{pmatrix}$, trovare gli autovalori.

$p(\lambda) = \lambda^2 - \text{tr}(P)\lambda + \det(P) = \lambda^2 - \lambda + 0 = \lambda(\lambda-1)$.

Autovalori: $\lambda = 0$ e $\lambda = 1$. Come atteso: una matrice di proiezione ha solo autovalori 0 e 1.

---

**Esempio 8 — Quattro sottospazi fondamentali.**

Per $A = \begin{pmatrix}1&2\\2&4\end{pmatrix}$:

$C(A) = \text{span}\{(1,2)^T\}$ (rango 1).
$N(A)$: $x+2y=0$, $N(A) = \text{span}\{(2,-1)^T\}$.
$C(A^T) = \text{span}\{(1,2)^T\}$ (stesso di $C(A)$ perché $A$ è simmetrica).
$N(A^T) = \text{span}\{(2,-1)^T\}$.

Verifica: $C(A^T)\perp N(A)$: $(1,2)\cdot(2,-1) = 2-2=0$ ✓.

## 6. Grafico

```plot
{"title":"Proiezione su retta: componente parallela e perpendicolare","fn":"0.5*x","fn2":"Math.abs(x)","domain":[-3,3],"yDomain":[-2,3],"label1":"retta y=x/2 (sottospazio)","label2":"norma del residuo"}
```

## 7. Slider interattivo

```slider
{"title":"Proiezione ortogonale: variazione dell'angolo della retta","fn":"Math.tan(a)*x","domain":[-3,3],"yDomain":[-3,3],"pname":"a","pmin":0.1,"pmax":1.4,"pdefault":0.5,"pstep":0.1,"plabel":"angolo retta (rad)","label1":"retta di proiezione"}
```

## 8. Errori comuni

**Errore 1 — Dimenticare che le colonne di $A$ devono essere LI.** La formula $P = A(A^TA)^{-1}A^T$ richiede che $A^TA$ sia invertibile, il che accade solo se $A$ ha colonne LI. Se le colonne sono dipendenti, $A^TA$ è singolare e si deve usare la pseudoinversa.

**Errore 2 — Confondere $\hat{\mathbf{x}}$ con $\hat{\mathbf{b}}$.** Le equazioni normali danno $\hat{\mathbf{x}} = (A^TA)^{-1}A^T\mathbf{b}$ — le coordinate nella base delle colonne di $A$. La proiezione vettoriale è $\hat{\mathbf{b}} = A\hat{\mathbf{x}}$.

**Errore 3 — Pensare che $P = A^T(AA^T)^{-1}A$ sia la stessa matrice.** Le due formule danno matrici di proiezione su spazi diversi: $A(A^TA)^{-1}A^T$ proietta su $C(A)$ in $\mathbb{R}^m$, mentre $A^T(AA^T)^{-1}A$ proietta su $C(A^T)$ in $\mathbb{R}^n$.

**Errore 4 — Non verificare $P^2=P$ dopo il calcolo.** La proprietà idempotente $P^2=P$ è una verifica rapida della correttezza. Se non vale, c'è un errore nel calcolo.

**Errore 5 — Credere che $\lVert\hat{\mathbf{b}}\rVert \leq \lVert\mathbf{b}\rVert$ sia sempre un'uguaglianza.** La proiezione accorcia o conserva la lunghezza, ma la eguaglia solo se $\mathbf{b}$ è già nel sottospazio.

**Errore 6 — Sbagliare le equazioni normali.** Le equazioni normali sono $A^TA\hat{\mathbf{x}} = A^T\mathbf{b}$, non $A\hat{\mathbf{x}} = \mathbf{b}$ (che non ha soluzione se $\mathbf{b}\notin C(A)$).

**Errore 7 — Confondere $I-P$ con $P^{-1}$.** $I-P$ è la proiezione sul complemento ortogonale, non l'inversa di $P$. Le matrici di proiezione (non triviali) non sono invertibili: $\det P = 0$ (autovalore 0 con molteplicità $n - \text{rango}(A)$).

## 9. Applicazioni reali

**Regressione lineare e statistica.** La regressione lineare $\hat{\mathbf{y}} = X\hat{\boldsymbol{\beta}}$ è esattamente la proiezione ortogonale del vettore delle risposte $\mathbf{y}$ sul sottospazio colonna della matrice di design $X$. Le stime ai minimi quadrati $\hat{\boldsymbol{\beta}} = (X^TX)^{-1}X^T\mathbf{y}$ minimizzano la somma dei quadrati dei residui. Il teorema di Gauss-Markov afferma che, tra tutti gli stimatori lineari non distorti, il metodo dei minimi quadrati ha la varianza minima. Ogni software statistico risolve queste equazioni normali (di solito tramite fattorizzazione QR per stabilità numerica).

**Elaborazione del segnale e filtraggio.** Il filtro di Wiener, usato nella rimozione di rumore da segnali audio e immagini, è una proiezione ortogonale nello spazio $L^2$: trovare il segnale "pulito" $\hat{s}$ che minimizza l'energia del rumore $\lVert y - \hat{s}\rVert^2$ su una famiglia di segnali ammissibili. Nelle telecomunicazioni, il decodificatore di un canale AWGN (Additive White Gaussian Noise) è una proiezione ortogonale: proietta il segnale ricevuto sul sottospazio delle parole di codice, e sceglie quella più vicina.

**Computer grafica e rendering.** La proiezione prospettica di una scena 3D su un piano 2D è fondamentalmente una proiezione lineare. Le trasformazioni di viewport, il clipping di poligoni e la rimozione delle superfici nascoste si basano su proiezioni ortogonali e prospettiche. Nel ray tracing, il calcolo dell'illuminazione di una superficie richiede di proiettare il vettore luce sul piano tangente alla superficie per separare le componenti diffuse e speculari.

## 10. Riepilogo

| Concetto | Formula |
| --- | --- |
| Complemento ortogonale | $W^\perp = \{\mathbf{v}: \langle\mathbf{v},\mathbf{w}\rangle=0\;\forall\mathbf{w}\in W\}$ |
| Dimensioni | $\dim W + \dim W^\perp = \dim V$ |
| Proiezione su retta $\mathbf{a}$ | $\hat{\mathbf{b}} = \frac{\mathbf{a}^T\mathbf{b}}{\mathbf{a}^T\mathbf{a}}\mathbf{a}$ |
| Matrice di proiezione su $C(A)$ | $P = A(A^TA)^{-1}A^T$ |
| Idempotente | $P^2 = P$ |
| Simmetria | $P^T = P$ |
| Autovalori di $P$ | solo 0 e 1 |
| Equazioni normali | $A^TA\hat{\mathbf{x}} = A^T\mathbf{b}$ |
| Soluzione minimi quadrati | $\hat{\mathbf{x}} = (A^TA)^{-1}A^T\mathbf{b}$ |
| Quattro sottospazi | $C(A)^\perp = N(A^T)$, $C(A^T)^\perp = N(A)$ |

## 11. Esercizi

<details>
<summary>Esercizio 1 — Proiezione su una retta in $\mathbb{R}^3$</summary>

Proiettare $\mathbf{b}=(1,1,1)$ sulla retta $\mathbf{a}=(1,2,2)$ e calcolare la distanza $\lVert\mathbf{b}-\hat{\mathbf{b}}\rVert$.

**Soluzione:**

$\hat{\mathbf{b}} = \frac{5}{9}(1,2,2) = (5/9, 10/9, 10/9)$.

$\mathbf{e} = (4/9, -1/9, -1/9)$.

$\lVert\mathbf{e}\rVert = \sqrt{16/81+1/81+1/81} = \sqrt{18/81} = \sqrt{2}/3$.

</details>

<details>
<summary>Esercizio 2 — Matrice di proiezione</summary>

Trovare la matrice di proiezione su $C(A)$ per $A = \begin{pmatrix}1\\1\end{pmatrix}$.

**Soluzione:**

$A^TA = (1\;1)\begin{pmatrix}1\\1\end{pmatrix} = 2$.

$P = \frac{1}{2}\begin{pmatrix}1\\1\end{pmatrix}(1\;1) = \frac{1}{2}\begin{pmatrix}1&1\\1&1\end{pmatrix}$.

Verifica: $P^2 = \frac{1}{4}\begin{pmatrix}2&2\\2&2\end{pmatrix} = P$ ✓. $P^T = P$ ✓.

</details>

<details>
<summary>Esercizio 3 — Minimi quadrati</summary>

Trovare la retta $y=a+bx$ che meglio approssima i punti $(0,1),(1,2),(2,2)$.

**Soluzione:**

$A = \begin{pmatrix}1&0\\1&1\\1&2\end{pmatrix}$, $\mathbf{b}=(1,2,2)^T$.

$A^TA=\begin{pmatrix}3&3\\3&5\end{pmatrix}$, $A^T\mathbf{b}=(5,7)^T$.

Sistema: $3a+3b=5$, $3a+5b=7$ $\Rightarrow$ $b=1$, $a=2/3$.

Retta: $y=2/3+x$.

</details>

<details>
<summary>Esercizio 4 — Complemento ortogonale</summary>

Trovare $W^\perp$ per $W = \text{span}\{(1,2,3)\}$ in $\mathbb{R}^3$.

**Soluzione:**

$W^\perp = \{\mathbf{v}: v_1+2v_2+3v_3=0\}$: un piano in $\mathbb{R}^3$.

Una base: $\{(-2,1,0), (-3,0,1)\}$ (due parametri liberi).

$\dim(W)+\dim(W^\perp) = 1+2 = 3$ ✓.

</details>

<details>
<summary>Esercizio 5 — Verifica idempotenza</summary>

Verificare che $P = \begin{pmatrix}1&0\\0&0\end{pmatrix}$ è una matrice di proiezione e descrivere geometricamente.

**Soluzione:**

$P^2 = P$ ✓ (calcolo diretto). $P^T = P$ ✓.

$P$ proietta su $\text{span}\{(1,0)\}$ (asse $x$): $P(a,b)^T = (a,0)^T$. La seconda componente viene "eliminata". Autovalori: 1 (su $x$) e 0 (su $y$).

</details>

<details>
<summary>Esercizio 6 — Proiezione su piano</summary>

Proiettare $\mathbf{b}=(1,2,3)$ sul piano $x+y+z=0$ in $\mathbb{R}^3$.

**Soluzione:**

Il piano ha normale $\mathbf{n}=(1,1,1)$. La proiezione è:

$$\hat{\mathbf{b}} = \mathbf{b} - \frac{\mathbf{n}^T\mathbf{b}}{\lVert\mathbf{n}\rVert^2}\mathbf{n} = (1,2,3) - \frac{6}{3}(1,1,1) = (1,2,3)-(2,2,2) = (-1,0,1)$$

Verifica: $(-1)+0+1=0$ (appartiene al piano) ✓. $(\mathbf{b}-\hat{\mathbf{b}}) = (2,2,2) = 2(1,1,1) \parallel \mathbf{n}$ ✓.

</details>

<details>
<summary>Esercizio 7 — Quattro sottospazi</summary>

Per $A = \begin{pmatrix}1&2&3\\2&4&6\end{pmatrix}$ (rango 1), descrivere i quattro sottospazi.

**Soluzione:**

$C(A) = \text{span}\{(1,2)^T\}$ in $\mathbb{R}^2$, dim 1.

$N(A^T)$: sistema $A^T\mathbf{v}=0$ con $\mathbf{v}\in\mathbb{R}^2$: $v_1+2v_2=0$. $N(A^T) = \text{span}\{(2,-1)^T\}$, dim 1.

$C(A^T) = \text{span}\{(1,2,3)^T\}$ in $\mathbb{R}^3$, dim 1.

$N(A)$: $x+2y+3z=0$. Base: $\{(-2,1,0),(-3,0,1)\}$, dim 2.

Verifica: $1+1=2=\dim(\mathbb{R}^2)$ ✓, $1+2=3=\dim(\mathbb{R}^3)$ ✓.

</details>

<details>
<summary>Esercizio 8 — Regressione quadratica</summary>

Trovare la parabola $y=a+bx+cx^2$ che minimizza i residui per i punti $(-1,2),(0,1),(1,2)$.

**Soluzione:**

$A = \begin{pmatrix}1&-1&1\\1&0&0\\1&1&1\end{pmatrix}$, $\mathbf{b}=(2,1,2)^T$.

$A^TA = \begin{pmatrix}3&0&2\\0&2&0\\2&0&2\end{pmatrix}$, $A^T\mathbf{b} = (5,0,4)^T$.

Dal sistema: $2b=0 \Rightarrow b=0$. $3a+2c=5$ e $2a+2c=4 \Rightarrow a=1$, $c=1$.

Parabola: $y=1+x^2$. Residuo: tutti i punti cadono esattamente sulla parabola!

</details>
