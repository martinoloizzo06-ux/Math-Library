---
id: algebra-02-matrici
subject: algebra-lineare
topic_it: Fondamenti
topic_en: Foundations
title_it: Matrici e operazioni
title_en: Matrices and operations
level: blue
order: 2
source_book: "G. Strang, Introduction to Linear Algebra; MIT OCW 18.06"
source_chapter: "Cap. 1–2 — Matrici"
---

## 1. Intuizione — Perché le matrici?

Pensa a una rete stradale con 4 città. Vuoi sapere in quanti modi puoi andare dalla città $A$ alla città $D$ in esattamente 2 tappe. Se hai una tabella che dice quante strade dirette ci sono tra ogni coppia di città, la risposta si trova **moltiplicando la tabella per se stessa**. Quella tabella è una matrice.

Oppure pensa a un filtro fotografico: ogni pixel della foto di output dipende da una combinazione dei pixel vicini dell'input. L'operazione che trasforma tutta l'immagine si descrive come una **moltiplicazione matriciale**. Google, Netflix, ChatGPT — ogni sistema che "trasforma" dati in larga scala usa matrici.

La chiave concettuale è questa: una matrice non è solo una tabella di numeri. È una **trasformazione lineare** — una funzione che prende vettori e li porta in altri vettori in modo strutturato. Capire le matrici significa capire le trasformazioni dello spazio.

---

## 2. Prerequisiti

- Vettori in $\mathbb{R}^n$, operazioni di somma e scalare (lezione precedente)
- Prodotto scalare $\mathbf{u}\cdot\mathbf{v}$
- Somme e prodotti di numeri reali
- Nozione di funzione lineare $f(x) = ax$

---

## 3. Teoria

### Definizione formale

Una **matrice** $A$ di tipo $m \times n$ (si legge "$m$ per $n$") è una tabella rettangolare con $m$ righe e $n$ colonne, i cui elementi sono numeri reali:

$$A = \begin{pmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} & a_{m2} & \cdots & a_{mn} \end{pmatrix}$$

L'elemento in riga $i$ e colonna $j$ si denota $a_{ij}$ o $(A)_{ij}$. L'insieme delle matrici $m\times n$ reali si denota $\mathcal{M}_{m,n}(\mathbb{R})$ oppure $\mathbb{R}^{m\times n}$.

### Operazioni elementari

**Somma di matrici** (stessa dimensione):

$$(A+B)_{ij} = a_{ij} + b_{ij}$$

Si sommano gli elementi in posizione corrispondente.

**Moltiplicazione per uno scalare** $c \in \mathbb{R}$:

$$(cA)_{ij} = c\, a_{ij}$$

Tutti gli elementi vengono moltiplicati per $c$.

### Prodotto matriciale

Se $A \in \mathbb{R}^{m \times k}$ e $B \in \mathbb{R}^{k \times n}$ (le **dimensioni interne** devono coincidere), allora $AB \in \mathbb{R}^{m \times n}$ con:

$$(AB)_{ij} = \sum_{l=1}^{k} a_{il}\, b_{lj} = \text{(riga $i$ di $A$)} \cdot \text{(colonna $j$ di $B$)}$$

**Regola della dimensione:** $\underbrace{A}_{m\times k} \cdot \underbrace{B}_{k\times n} = \underbrace{C}_{m\times n}$

**Proprietà cruciale:** il prodotto matriciale è **non commutativo**: in generale $AB \neq BA$ (e spesso uno solo dei due è definito).

### Moltiplicazione matrice-vettore

Il caso particolare $A\mathbf{x}$ (con $\mathbf{x}\in\mathbb{R}^n$) ha due interpretazioni equivalenti:

**Vista "riga per colonna"** (meccanica): la $i$-esima componente del risultato è il prodotto scalare della $i$-esima riga di $A$ per $\mathbf{x}$.

**Vista "combinazione di colonne"** (concettuale e più profonda):

$$A\mathbf{x} = x_1\,\mathbf{a}_1 + x_2\,\mathbf{a}_2 + \cdots + x_n\,\mathbf{a}_n$$

dove $\mathbf{a}_j$ è la $j$-esima colonna di $A$. Il prodotto $A\mathbf{x}$ è una **combinazione lineare delle colonne di $A$** con coefficienti le componenti di $\mathbf{x}$.

### Matrici speciali

| Tipo | Definizione | Proprietà |
| --- | --- | --- |
| Identità $I_n$ | $a_{ii}=1$, $a_{ij}=0$ per $i\neq j$ | $AI = IA = A$ per ogni $A$ |
| Nulla $O$ | $a_{ij}=0$ per ogni $i,j$ | $A+O = A$ |
| Diagonale | $a_{ij}=0$ per $i\neq j$ | Prodotto = prodotto degli elementi diagonali |
| Triangolare sup. | $a_{ij}=0$ per $i>j$ | Gauss porta a questa forma |
| Triangolare inf. | $a_{ij}=0$ per $i<j$ | Utile in fattorizzazione LU |
| Simmetrica | $A^T = A$ | $a_{ij} = a_{ji}$ per ogni $i,j$ |
| Antisimmetrica | $A^T = -A$ | $a_{ij} = -a_{ji}$, diagonale = 0 |

### Trasposta

La **trasposta** $A^T$ di una matrice $m\times n$ è la matrice $n\times m$ ottenuta scambiando righe e colonne:

$$(A^T)_{ij} = a_{ji}$$

**Proprietà:**
- $(A^T)^T = A$
- $(A+B)^T = A^T + B^T$
- $(cA)^T = c\,A^T$
- $(AB)^T = B^T A^T$ — **attenzione all'ordine invertito**

### Matrice inversa

Una matrice quadrata $A \in \mathbb{R}^{n\times n}$ è **invertibile** (o non singolare) se esiste $A^{-1}$ tale che:

$$A A^{-1} = A^{-1} A = I_n$$

L'inversa, quando esiste, è **unica**. Per le matrici $2\times 2$:

$$A = \begin{pmatrix}a&b\\c&d\end{pmatrix} \implies A^{-1} = \frac{1}{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}$$

Il numero $\det(A) = ad-bc$ deve essere $\neq 0$.

---

## 4. Derivazione — Perché $(AB)^T = B^T A^T$?

Vogliamo provare che la trasposta di un prodotto è il prodotto delle trasposte in ordine inverso. Partiamo dalla definizione di trasposta e di prodotto.

Sia $C = AB$, con $A \in \mathbb{R}^{m\times k}$ e $B \in \mathbb{R}^{k\times n}$. Allora $C \in \mathbb{R}^{m\times n}$ e $C^T \in \mathbb{R}^{n\times m}$.

Per definizione di prodotto:

$$(C)_{ij} = (AB)_{ij} = \sum_{l=1}^k a_{il}\, b_{lj}$$

Trasponendo:

$$(C^T)_{ij} = (C)_{ji} = (AB)_{ji} = \sum_{l=1}^k a_{jl}\, b_{li}$$

Ora calcoliamo $B^T A^T$. Abbiamo $B^T \in \mathbb{R}^{n\times k}$ e $A^T \in \mathbb{R}^{k\times m}$, quindi $B^T A^T \in \mathbb{R}^{n\times m}$.

$$(B^T A^T)_{ij} = \sum_{l=1}^k (B^T)_{il}\,(A^T)_{lj} = \sum_{l=1}^k b_{li}\, a_{jl}$$

Poiché la moltiplicazione tra scalari è commutativa ($b_{li}\,a_{jl} = a_{jl}\,b_{li}$):

$$(B^T A^T)_{ij} = \sum_{l=1}^k a_{jl}\, b_{li} = (C^T)_{ij}$$

Quindi $C^T = B^T A^T$, cioè $(AB)^T = B^T A^T$. $\square$

La regola dell'"ordine invertito" rispecchia il fatto che trasporre è come "guardare la trasformazione al contrario".

---

## 5. Esempi

**Esempio 1 — Prodotto di matrici $2\times2$**

$$A = \begin{pmatrix}1&2\\3&4\end{pmatrix}, \quad B = \begin{pmatrix}0&1\\1&0\end{pmatrix}$$

$$AB = \begin{pmatrix}1\cdot0+2\cdot1 & 1\cdot1+2\cdot0\\3\cdot0+4\cdot1 & 3\cdot1+4\cdot0\end{pmatrix} = \begin{pmatrix}2&1\\4&3\end{pmatrix}$$

$$BA = \begin{pmatrix}0\cdot1+1\cdot3 & 0\cdot2+1\cdot4\\1\cdot1+0\cdot3 & 1\cdot2+0\cdot4\end{pmatrix} = \begin{pmatrix}3&4\\1&2\end{pmatrix}$$

$AB \neq BA$: il prodotto **non è commutativo**. ✓

---

**Esempio 2 — Matrice-vettore come combinazione di colonne**

$$A = \begin{pmatrix}1&3\\2&4\end{pmatrix}, \quad \mathbf{x} = \begin{pmatrix}2\\-1\end{pmatrix}$$

$$A\mathbf{x} = 2\begin{pmatrix}1\\2\end{pmatrix} + (-1)\begin{pmatrix}3\\4\end{pmatrix} = \begin{pmatrix}2\\4\end{pmatrix} + \begin{pmatrix}-3\\-4\end{pmatrix} = \begin{pmatrix}-1\\0\end{pmatrix}$$

Interpretazione: il punto $(2,-1)$ specifica i coefficienti con cui combinare le colonne di $A$.

---

**Esempio 3 — Prodotto di matrici non quadrate**

$$A = \begin{pmatrix}1&2&3\\4&5&6\end{pmatrix}_{2\times3}, \quad B = \begin{pmatrix}7&8\\9&10\\11&12\end{pmatrix}_{3\times2}$$

$AB$ è $2\times 2$:

$$AB = \begin{pmatrix}1\cdot7+2\cdot9+3\cdot11 & 1\cdot8+2\cdot10+3\cdot12\\4\cdot7+5\cdot9+6\cdot11 & 4\cdot8+5\cdot10+6\cdot12\end{pmatrix} = \begin{pmatrix}58&64\\139&154\end{pmatrix}$$

$BA$ è $3\times3$ (un prodotto diverso — dimensioni diverse!).

---

**Esempio 4 — Trasposta e simmetria**

$$A = \begin{pmatrix}1&2&3\\4&5&6\end{pmatrix}, \quad A^T = \begin{pmatrix}1&4\\2&5\\3&6\end{pmatrix}$$

La matrice $AA^T$ è sempre simmetrica: $(AA^T)^T = (A^T)^TA^T = AA^T$. ✓

$$AA^T = \begin{pmatrix}1&2&3\\4&5&6\end{pmatrix}\begin{pmatrix}1&4\\2&5\\3&6\end{pmatrix} = \begin{pmatrix}14&32\\32&77\end{pmatrix}$$

Verifica: $14=14$, $32=32$, $77=77$ sulla diagonale e simmetria fuori. ✓

---

**Esempio 5 — Inversa di una matrice $2\times2$**

$$A = \begin{pmatrix}2&1\\5&3\end{pmatrix}$$

$\det(A) = 2\cdot3 - 1\cdot5 = 6-5 = 1 \neq 0 \implies$ invertibile.

$$A^{-1} = \frac{1}{1}\begin{pmatrix}3&-1\\-5&2\end{pmatrix} = \begin{pmatrix}3&-1\\-5&2\end{pmatrix}$$

Verifica: $AA^{-1} = \begin{pmatrix}2\cdot3+1\cdot(-5) & 2\cdot(-1)+1\cdot2\\5\cdot3+3\cdot(-5) & 5\cdot(-1)+3\cdot2\end{pmatrix} = \begin{pmatrix}1&0\\0&1\end{pmatrix}$ ✓

---

**Esempio 6 — Matrice singolare (non invertibile)**

$$A = \begin{pmatrix}1&2\\2&4\end{pmatrix}$$

$\det(A) = 1\cdot4 - 2\cdot2 = 0 \implies$ **non invertibile**.

La seconda riga è il doppio della prima. Il sistema $A\mathbf{x}=\mathbf{b}$ non ha sempre soluzione unica.

---

**Esempio 7 — Potenza di una matrice**

$$A = \begin{pmatrix}0&1\\1&0\end{pmatrix}$$

$A^2 = A\cdot A = \begin{pmatrix}0\cdot0+1\cdot1 & 0\cdot1+1\cdot0\\1\cdot0+0\cdot1 & 1\cdot1+0\cdot0\end{pmatrix} = \begin{pmatrix}1&0\\0&1\end{pmatrix} = I_2$

Quindi $A^2 = I$ — la matrice è la sua propria inversa! (Matrice involutoria.)

---

**Esempio 8 — Matrice come trasformazione**

La matrice $R_{90°} = \begin{pmatrix}0&-1\\1&0\end{pmatrix}$ rappresenta la rotazione di $90°$ antioraria.

Applicata a $\mathbf{v} = (1, 0)$: $R_{90°}\mathbf{v} = \begin{pmatrix}0\\1\end{pmatrix}$ — il versore $\mathbf{i}$ va nel versore $\mathbf{j}$.

Applicata a $\mathbf{v} = (3, -2)$: $R_{90°}\mathbf{v} = \begin{pmatrix}2\\3\end{pmatrix}$ — ogni vettore ruota di $90°$.

---

## 6. Grafico

```plot
{"title":"Trasformazione lineare: riflessione rispetto all'asse x","fn":"x","fn2":"-x","domain":[-3,3],"yDomain":[-3,3],"label1":"y=x (direzione originale)","label2":"y=-x (direzione riflessa)"}
```

---

## 7. Interattivo — Rotazione di una retta

```slider
{"title":"Retta ruotata dalla matrice di rotazione","fn":"Math.tan(a)*x","domain":[-4,4],"yDomain":[-4,4],"pname":"a","pmin":0,"pmax":1.5,"pdefault":0,"pstep":0.05,"plabel":"θ (rad)","label1":"retta ruotata"}
```

---

## 8. Errori comuni

**Errore 1 — Invertire l'ordine nel prodotto.**
$AB \neq BA$ in generale. Quando scrivi $(AB)\mathbf{x}$ non puoi riordinare come $A(B\mathbf{x})$ senza attención — anche se in realtà l'associatività lo permette: $(AB)\mathbf{x} = A(B\mathbf{x})$. Ma $AB \neq BA$.

**Errore 2 — Sommare matrici di dimensioni diverse.**
$A_{2\times3} + B_{3\times2}$ non è definita. Solo matrici con le **stesse dimensioni** si sommano.

**Errore 3 — Confondere la condizione per il prodotto.**
Il prodotto $AB$ richiede che il numero di **colonne di $A$** sia uguale al numero di **righe di $B$**. È la dimensione interna che deve combaciare.

**Errore 4 — Pensare che $(AB)^{-1} = A^{-1}B^{-1}$.**
La formula corretta è $(AB)^{-1} = B^{-1}A^{-1}$ (ordine invertito), esattamente come per la trasposta.

**Errore 5 — Credere che $AB = 0 \implies A=0$ o $B=0$.**
Falso per le matrici! Esempio: $\begin{pmatrix}1&1\\-1&-1\end{pmatrix}\begin{pmatrix}1&1\\-1&-1\end{pmatrix} = \begin{pmatrix}0&0\\0&0\end{pmatrix}$, ma nessuna delle due è la matrice nulla.

**Errore 6 — Trasporre dimenticando l'inversione dell'ordine.**
$(ABC)^T = C^T B^T A^T$ — ogni volta si inverte l'ordine.

**Errore 7 — Calcolare l'inversa di una matrice singolare.**
Se $\det(A) = 0$, l'inversa non esiste. Verificare sempre il determinante prima.

---

## 9. Applicazioni reali

**Grafica al computer e animazioni 3D.** Ogni frame di un videogioco applica matrici di trasformazione a milioni di vertici: rotazioni, scalature, proiezioni prospettiche. Una catena di trasformazioni diventa un'unica moltiplicazione di matrici $4\times4$ (coordonate omogenee). La GPU esegue miliardi di queste moltiplicazioni al secondo.

**Reti neurali artificiali.** Ogni "strato" (layer) di una rete neurale è essenzialmente una moltiplicazione matrice-vettore seguita da una funzione non lineare. Allenare GPT-4 ha richiesto di ottimizzare miliardi di parametri in matrici enormi. Il forward pass di un'inferenza di ChatGPT è una catena di moltiplicazioni matriciali.

**Statistica multivariata e analisi dei dati.** La matrice di covarianza $\Sigma$ descrive come variano congiuntamente le variabili di un dataset. La PCA (Principal Component Analysis), usata per ridurre la dimensionalità dei dati, decompone questa matrice. La regressione lineare multivariata risolve il sistema $X^TX\boldsymbol{\beta} = X^T\mathbf{y}$ — tutto in forma matriciale.

---

## 10. Riepilogo

| Operazione | Simbolo | Dimensioni | Commutativa? |
| --- | --- | --- | --- |
| Somma | $A+B$ | $m\times n + m\times n \to m\times n$ | Sì |
| Scalare | $cA$ | scalare $\times\, m\times n \to m\times n$ | — |
| Prodotto | $AB$ | $m\times k \cdot k\times n \to m\times n$ | No |
| Trasposta | $A^T$ | $m\times n \to n\times m$ | — |
| Inversa | $A^{-1}$ | $n\times n \to n\times n$ | Solo sq. non sing. |

| Proprietà | Formula |
| --- | --- |
| Associatività prodotto | $(AB)C = A(BC)$ |
| Distributività | $A(B+C) = AB+AC$ |
| Trasposta del prodotto | $(AB)^T = B^T A^T$ |
| Inversa del prodotto | $(AB)^{-1} = B^{-1}A^{-1}$ |
| $AA^T$ è simmetrica | $(AA^T)^T = AA^T$ |

---

## 11. Esercizi

<details>
<summary>Esercizio 1 — Prodotto di matrici 2×2</summary>

Calcolare $AB$ e $BA$ per:

$$A = \begin{pmatrix}2&-1\\0&3\end{pmatrix}, \quad B = \begin{pmatrix}1&4\\2&-1\end{pmatrix}$$

**Soluzione:**

$$AB = \begin{pmatrix}2\cdot1+(-1)\cdot2 & 2\cdot4+(-1)\cdot(-1)\\0\cdot1+3\cdot2 & 0\cdot4+3\cdot(-1)\end{pmatrix} = \begin{pmatrix}0&9\\6&-3\end{pmatrix}$$

$$BA = \begin{pmatrix}1\cdot2+4\cdot0 & 1\cdot(-1)+4\cdot3\\2\cdot2+(-1)\cdot0 & 2\cdot(-1)+(-1)\cdot3\end{pmatrix} = \begin{pmatrix}2&11\\4&-5\end{pmatrix}$$

$AB \neq BA$ ✓

</details>

<details>
<summary>Esercizio 2 — Matrice-vettore come combinazione di colonne</summary>

Interpretare $A\mathbf{x}$ come combinazione lineare di colonne per:

$$A = \begin{pmatrix}3&-1&2\\1&0&4\\2&1&-1\end{pmatrix}, \quad \mathbf{x} = \begin{pmatrix}1\\2\\-1\end{pmatrix}$$

**Soluzione:**

$$A\mathbf{x} = 1\begin{pmatrix}3\\1\\2\end{pmatrix} + 2\begin{pmatrix}-1\\0\\1\end{pmatrix} + (-1)\begin{pmatrix}2\\4\\-1\end{pmatrix} = \begin{pmatrix}3-2-2\\1+0-4\\2+2+1\end{pmatrix} = \begin{pmatrix}-1\\-3\\5\end{pmatrix}$$

</details>

<details>
<summary>Esercizio 3 — Inversa di una matrice 2×2</summary>

Trovare l'inversa di $A = \begin{pmatrix}3&2\\7&5\end{pmatrix}$ e verificare.

**Soluzione:**

$\det(A) = 3\cdot5 - 2\cdot7 = 15-14 = 1$

$$A^{-1} = \begin{pmatrix}5&-2\\-7&3\end{pmatrix}$$

Verifica:

$$AA^{-1} = \begin{pmatrix}15-14 & -6+6\\35-35 & -14+15\end{pmatrix} = \begin{pmatrix}1&0\\0&1\end{pmatrix} \checkmark$$

</details>

<details>
<summary>Esercizio 4 — Proprietà della trasposta</summary>

Dati $A = \begin{pmatrix}1&2\\3&4\\5&6\end{pmatrix}$ e $B = \begin{pmatrix}1&0\\0&1\end{pmatrix}$, verificare $(AB)^T = B^T A^T$.

**Soluzione:**

$AB = A \cdot I_2 = A = \begin{pmatrix}1&2\\3&4\\5&6\end{pmatrix}$

$(AB)^T = A^T = \begin{pmatrix}1&3&5\\2&4&6\end{pmatrix}$

$B^T A^T = I_2 \cdot A^T = A^T = \begin{pmatrix}1&3&5\\2&4&6\end{pmatrix}$ ✓

</details>

<details>
<summary>Esercizio 5 — Decomposizione simmetrica e antisimmetrica</summary>

Ogni matrice quadrata $A$ si può scrivere come somma di una matrice simmetrica e una antisimmetrica. Trovare tale decomposizione per $A = \begin{pmatrix}1&3\\-1&2\end{pmatrix}$.

**Soluzione:**

Parte simmetrica: $S = \frac{1}{2}(A+A^T)$

$A^T = \begin{pmatrix}1&-1\\3&2\end{pmatrix}$, $A+A^T = \begin{pmatrix}2&2\\2&4\end{pmatrix}$, $S = \begin{pmatrix}1&1\\1&2\end{pmatrix}$

Parte antisimmetrica: $K = \frac{1}{2}(A-A^T)$

$A-A^T = \begin{pmatrix}0&4\\-4&0\end{pmatrix}$, $K = \begin{pmatrix}0&2\\-2&0\end{pmatrix}$

Verifica: $S + K = \begin{pmatrix}1&3\\-1&2\end{pmatrix} = A$ ✓

</details>

<details>
<summary>Esercizio 6 — Potenza di matrice</summary>

Calcolare $A^3$ per $A = \begin{pmatrix}1&1\\0&1\end{pmatrix}$ (matrice di shear).

**Soluzione:**

$$A^2 = \begin{pmatrix}1&1\\0&1\end{pmatrix}\begin{pmatrix}1&1\\0&1\end{pmatrix} = \begin{pmatrix}1&2\\0&1\end{pmatrix}$$

$$A^3 = A^2 \cdot A = \begin{pmatrix}1&2\\0&1\end{pmatrix}\begin{pmatrix}1&1\\0&1\end{pmatrix} = \begin{pmatrix}1&3\\0&1\end{pmatrix}$$

Pattern: $A^n = \begin{pmatrix}1&n\\0&1\end{pmatrix}$. Questa matrice rappresenta una "trasla" (shear) lungo l'asse $x$.

</details>

<details>
<summary>Esercizio 7 — Matrice di rotazione</summary>

La matrice di rotazione di angolo $\theta$ è $R_\theta = \begin{pmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{pmatrix}$. Verificare che $R_\theta R_\phi = R_{\theta+\phi}$.

**Soluzione:**

$$R_\theta R_\phi = \begin{pmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{pmatrix}\begin{pmatrix}\cos\phi&-\sin\phi\\\sin\phi&\cos\phi\end{pmatrix}$$

Elemento $(1,1)$: $\cos\theta\cos\phi - \sin\theta\sin\phi = \cos(\theta+\phi)$ (addizione)

Elemento $(1,2)$: $-\cos\theta\sin\phi - \sin\theta\cos\phi = -\sin(\theta+\phi)$

Elemento $(2,1)$: $\sin\theta\cos\phi + \cos\theta\sin\phi = \sin(\theta+\phi)$

Elemento $(2,2)$: $-\sin\theta\sin\phi + \cos\theta\cos\phi = \cos(\theta+\phi)$

Quindi $R_\theta R_\phi = R_{\theta+\phi}$. Il prodotto di rotazioni è una rotazione! ✓

</details>

<details>
<summary>Esercizio 8 — Matrice singolare e determinante</summary>

Per quale valore di $k$ la matrice $A = \begin{pmatrix}k&2\\3&6\end{pmatrix}$ è singolare?

**Soluzione:**

$A$ è singolare $\iff \det(A) = 0$

$\det(A) = 6k - 6 = 0 \implies k = 1$

Per $k=1$: le righe $(1,2)$ e $(3,6) = 3\cdot(1,2)$ sono proporzionali — la matrice ha rango 1.

</details>
