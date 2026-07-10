---
id: algebra-08-determinanti
subject: algebra-lineare
topic_it: Spazi vettoriali
topic_en: Vector spaces
title_it: Determinanti
title_en: Determinants
level: blue
order: 8
source_book: "G. Strang, Introduction to Linear Algebra; MIT OCW 18.06"
source_chapter: "Cap. 5 — Determinanti"
---

## 1. Intuizione — Il "volume" di una trasformazione

Immagina di avere due vettori che formano i lati di un parallelogramma sul piano. Quanto è grande l'area di quel parallelogramma? La risposta è il **determinante** della matrice formata da quei due vettori. Ruoti il parallelogramma, cambia forma — l'area può aumentare, diminuire, o annullarsi se i due vettori diventano paralleli (parallelogramma "piatto").

Il determinante misura esattamente questo: **di quanto una trasformazione lineare scala i volumi**. Se $|\det(A)|=2$, la matrice $A$ raddoppia tutte le aree. Se $\det(A)=0$, la trasformazione "schiaccia" lo spazio in una dimensione inferiore (il parallelogramma diventa un segmento) — e questo corrisponde esattamente al fatto che $A$ non è invertibile.

Il segno di $\det(A)$ indica se la trasformazione preserva o inverte l'orientazione: come guardare un guanto sinistro che diventa un guanto destro riflettendolo allo specchio.

---

## 2. Prerequisiti

- Spazi vettoriali e sottospazi: span, nucleo.
- Matrici e sistemi lineari: eliminazione gaussiana, prodotto matriciale.
- Trasformazioni lineari: matrice associata, nucleo, immagine.
- Invertibilità di una matrice: condizioni necessarie e sufficienti.

---

## 3. Teoria — Definizioni formali

### Definizione assiomatica

Il **determinante** è l'unica funzione $\det\colon M_{n,n}(\mathbb{R})\to\mathbb{R}$ che soddisfa:

1. **Multilinearità per righe:** se si fissa tutte le righe tranne la $i$-esima, $\det$ è lineare in quella riga.
2. **Antisimmetria:** scambiare due righe cambia il segno di $\det$.
3. **Normalizzazione:** $\det(I_n)=1$.

Da questi tre assiomi discendono tutte le proprietà.

### Determinante $2\times 2$

$$\det\begin{pmatrix}a&b\\c&d\end{pmatrix} = ad - bc$$

Geometricamente: $\lvert ad-bc\rvert$ è l'area del parallelogramma generato dalle righe (o colonne).

### Determinante $3\times 3$ — Regola di Sarrus

$$\det\begin{pmatrix}a&b&c\\d&e&f\\g&h&i\end{pmatrix} = aei+bfg+cdh - ceg - afh - bdi$$

Mnemonico: somma dei prodotti sulle diagonali che scendono da sinistra, meno quelli che scendono da destra (dopo aver "allargato" la matrice con le prime due colonne).

### Sviluppo di Laplace

Per una matrice $n\times n$, sviluppando lungo la riga $i$:

$$\det(A) = \sum_{j=1}^n (-1)^{i+j}\,a_{ij}\,M_{ij}$$

dove $M_{ij}=\det(A_{ij})$ è il **minore** ($A_{ij}$ è la sottomatrice $(n-1)\times(n-1)$ ottenuta rimuovendo riga $i$ e colonna $j$). Il termine $C_{ij}=(-1)^{i+j}M_{ij}$ si chiama **cofattore**.

**Strategia:** sviluppare lungo la riga o colonna con più zeri — riduce il numero di calcoli.

### Proprietà fondamentali

| Proprietà | Formula |
| --- | --- |
| Prodotto | $\det(AB)=\det(A)\det(B)$ |
| Trasposta | $\det(A^T)=\det(A)$ |
| Inversa | $\det(A^{-1})=1/\det(A)$ (se $A$ invertibile) |
| Scalatura | $\det(cA)=c^n\det(A)$ per $A\in\mathbb{R}^{n\times n}$ |
| Scambio righe | $\det$ cambia segno |
| Riga nulla | $\det(A)=0$ |
| Righe uguali | $\det(A)=0$ |
| Triangolare | $\det=$ prodotto degli elementi diagonali |
| Invertibilità | $A$ invertibile $\iff$ $\det(A)\neq 0$ |

### Interpretazione geometrica

Per $A\in\mathbb{R}^{n\times n}$:

$$\lvert\det(A)\rvert = \text{volume del parallelepipedo generato dalle colonne (o righe) di }A$$

Il segno indica l'**orientazione**:
- $\det(A)>0$: l'orientazione è preservata (base "destra").
- $\det(A)<0$: l'orientazione è invertita (base "sinistra").
- $\det(A)=0$: le colonne sono LD, volume nullo (spazio "collassato").

### Regola di Cramer

Per $A\mathbf{x}=\mathbf{b}$ con $\det(A)\neq 0$:

$$x_j = \frac{\det(A_j)}{\det(A)}, \quad j=1,\ldots,n$$

dove $A_j$ si ottiene sostituendo la $j$-esima colonna di $A$ con $\mathbf{b}$.

Utile teoricamente e per sistemi piccoli ($2\times 2$, $3\times 3$); per sistemi grandi, l'eliminazione gaussiana è molto più efficiente.

### Matrice aggiunta e formula per l'inversa

$$A^{-1} = \frac{1}{\det(A)}\,\text{adj}(A), \quad (\text{adj}(A))_{ij} = C_{ji}$$

La matrice aggiunta $\text{adj}(A)$ è la trasposta della matrice dei cofattori.

---

## 4. Derivazione — Determinante $2\times 2$ dalla multilinearità

Partiamo dagli assiomi e ricaviamo $\det\begin{pmatrix}a&b\\c&d\end{pmatrix}$ da zero.

**Passo 1 — Scriviamo le righe come combinazioni lineari.**

$\mathbf{r}_1=(a,b)=a\,\mathbf{e}_1+b\,\mathbf{e}_2$ e $\mathbf{r}_2=(c,d)=c\,\mathbf{e}_1+d\,\mathbf{e}_2$.

**Passo 2 — Espandiamo usando la multilinearità.**

$$\det\begin{pmatrix}a&b\\c&d\end{pmatrix} = \det\begin{pmatrix}a\mathbf{e}_1+b\mathbf{e}_2\\c\mathbf{e}_1+d\mathbf{e}_2\end{pmatrix}$$

Applicando la linearità rispetto alla riga 1 (fissa riga 2):

$$= a\det\begin{pmatrix}\mathbf{e}_1\\c\mathbf{e}_1+d\mathbf{e}_2\end{pmatrix} + b\det\begin{pmatrix}\mathbf{e}_2\\c\mathbf{e}_1+d\mathbf{e}_2\end{pmatrix}$$

**Passo 3 — Espandiamo rispetto alla seconda riga.**

$$= ac\det\begin{pmatrix}\mathbf{e}_1\\\mathbf{e}_1\end{pmatrix}+ad\det\begin{pmatrix}\mathbf{e}_1\\\mathbf{e}_2\end{pmatrix}+bc\det\begin{pmatrix}\mathbf{e}_2\\\mathbf{e}_1\end{pmatrix}+bd\det\begin{pmatrix}\mathbf{e}_2\\\mathbf{e}_2\end{pmatrix}$$

**Passo 4 — Usiamo antisimmetria e normalizzazione.**

$\det\begin{pmatrix}\mathbf{e}_1\\\mathbf{e}_1\end{pmatrix}=0$ (righe uguali), $\det\begin{pmatrix}\mathbf{e}_2\\\mathbf{e}_2\end{pmatrix}=0$ (righe uguali).

$\det\begin{pmatrix}\mathbf{e}_1\\\mathbf{e}_2\end{pmatrix}=\det(I_2)=1$, $\det\begin{pmatrix}\mathbf{e}_2\\\mathbf{e}_1\end{pmatrix}=-\det\begin{pmatrix}\mathbf{e}_1\\\mathbf{e}_2\end{pmatrix}=-1$ (scambio righe).

**Passo 5 — Risultato.**

$$\det\begin{pmatrix}a&b\\c&d\end{pmatrix} = ad\cdot 1 + bc\cdot(-1) = ad-bc \quad \blacksquare$$

---

## 5. Esempi

**Esempio 1 — Determinante $2\times 2$.**

$A=\begin{pmatrix}3&1\\2&4\end{pmatrix}$. $\det(A)=3\cdot 4-1\cdot 2=12-2=10$.

Area del parallelogramma generato da $(3,2)$ e $(1,4)$: $\lvert 10\rvert=10$ unità quadrate.

**Esempio 2 — Determinante nullo e dipendenza lineare.**

$A=\begin{pmatrix}1&2\\3&6\end{pmatrix}$. $\det(A)=6-6=0$. La seconda riga è $3\times$ la prima: le righe sono LD, $A$ non è invertibile.

**Esempio 3 — Determinante $3\times 3$ con Sarrus.**

$$A=\begin{pmatrix}2&1&3\\0&-1&2\\1&0&1\end{pmatrix}$$

Diagonali positive: $2\cdot(-1)\cdot 1+1\cdot 2\cdot 1+3\cdot 0\cdot 0=-2+2+0=0$.

Diagonali negative: $3\cdot(-1)\cdot 1+2\cdot 2\cdot 2+1\cdot 0\cdot 1=-3+8+0=5$. Nota: queste sono $c\cdot e\cdot g$, $f\cdot h\cdot a$, ecc.

Ricalcoliamo con Sarrus correttamente: $aei+bfg+cdh-(ceg+afh+bdi)$:

$= 2(-1)(1)+1(2)(1)+3(0)(0)-(3(-1)(1)+2(2)(0)+1(0)(1))$

$= (-2+2+0)-(-3+0+0) = 0-(-3) = 3$.

**Esempio 4 — Sviluppo di Laplace lungo una colonna con zeri.**

$$\det\begin{pmatrix}1&2&3\\0&4&5\\0&0&6\end{pmatrix}$$

Matrice triangolare: $\det = 1\cdot 4\cdot 6 = 24$. (Prodotto della diagonale principale.)

**Esempio 5 — Invertibilità al variare di un parametro.**

$A=\begin{pmatrix}k&1\\2&k\end{pmatrix}$. $\det(A)=k^2-2$. Invertibile sse $k^2\neq 2$, cioè $k\neq\pm\sqrt{2}$.

**Esempio 6 — Proprietà del prodotto.**

$A=\begin{pmatrix}2&1\\0&3\end{pmatrix}$, $B=\begin{pmatrix}1&-1\\1&2\end{pmatrix}$.

$\det(A)=6$, $\det(B)=3$. $\det(AB)=\det(A)\det(B)=18$.

Verifica: $AB=\begin{pmatrix}3&0\\3&6\end{pmatrix}$, $\det(AB)=18-0=18$ ✓.

**Esempio 7 — Regola di Cramer.**

$\begin{cases}2x+y=5\\x-y=1\end{cases}$.

$A=\begin{pmatrix}2&1\\1&-1\end{pmatrix}$, $\det A=-3$.

$A_1=\begin{pmatrix}5&1\\1&-1\end{pmatrix}$, $\det A_1=-6$. $x=(-6)/(-3)=2$.

$A_2=\begin{pmatrix}2&5\\1&1\end{pmatrix}$, $\det A_2=-3$. $y=(-3)/(-3)=1$.

Soluzione: $(2,1)$. Verifica: $4+1=5$ ✓, $2-1=1$ ✓.

**Esempio 8 — Inversa con aggiunta.**

$A=\begin{pmatrix}2&1\\5&3\end{pmatrix}$, $\det A=6-5=1$.

$\text{adj}(A)=\begin{pmatrix}3&-1\\-5&2\end{pmatrix}$ (cofattori trasposti).

$A^{-1}=\frac{1}{1}\begin{pmatrix}3&-1\\-5&2\end{pmatrix}$. Verifica: $AA^{-1}=\begin{pmatrix}2\cdot3+1\cdot(-5)&2(-1)+1\cdot2\\5\cdot3+3(-5)&5(-1)+3\cdot2\end{pmatrix}=\begin{pmatrix}1&0\\0&1\end{pmatrix}$ ✓.

---

## 6. Grafico — Parallelogramma e area come determinante

```plot
{"title":"Le due rette y=2x e y=0.5x: i vettori (1,2) e (2,1) e il loro det","fn":"2*x","fn2":"0.5*x","domain":[-3,3],"yDomain":[-4,4],"label1":"y = 2x (vettore v₁)","label2":"y = 0.5x (vettore v₂)"}
```

I vettori $\mathbf{v}_1=(1,2)$ e $\mathbf{v}_2=(2,1)$ giacciono sulle rette $y=2x$ e $y=0.5x$. Il determinante $\det\begin{pmatrix}1&2\\2&1\end{pmatrix}=1-4=-3$: l'area del parallelogramma è $\lvert{-3}\rvert=3$. Il segno negativo indica che l'orientazione è invertita rispetto alla canonica.

---

## 7. Slider — Determinante come scala dell'area

```slider
{"title":"Effetto di k sul determinante: det = k·d (riga scalata)","fn":"a*x","domain":[-3,3],"yDomain":[-9,9],"pname":"a","pmin":-3,"pmax":3,"pdefault":1,"pstep":0.1,"plabel":"scalare k","label1":"y = k·x (riga scalata)"}
```

Muovi $k$: scala la prima riga di $A=\begin{pmatrix}k&0\\0&1\end{pmatrix}$ modifica il det da $k$ a $k$. Per $k=0$ le righe diventano LD (retta collassa sull'asse $x$), det $=0$. Per $k<0$ l'orientazione si inverte.

---

## 8. Errori comuni

**Errore 1 — Confondere $\det(A+B)$ con $\det(A)+\det(B)$.**
Il determinante NON è lineare sulla somma di matrici intere: $\det(A+B)\neq\det(A)+\det(B)$. È multilineare rispetto alle righe (una alla volta), non alla matrice globale.

**Errore 2 — Sbagliare il segno nello sviluppo di Laplace.**
Il fattore $(-1)^{i+j}$ è fondamentale: le posizioni (1,1), (1,3), (2,2), (3,1), (3,3) hanno segno $+$; le posizioni (1,2), (2,1), (2,3), (3,2) hanno segno $-$ (scacchiera).

**Errore 3 — Applicare la regola di Sarrus a matrici $4\times 4$.**
La regola di Sarrus funziona solo per $3\times 3$. Per dimensioni maggiori servono lo sviluppo di Laplace o la riduzione a scalini.

**Errore 4 — Dimenticare che $\det(cA)=c^n\det(A)$, non $c\cdot\det(A)$.**
Se $A$ è $3\times 3$ e $c=2$, allora $\det(2A)=2^3\det(A)=8\det(A)$.

**Errore 5 — Credere che $\det(A)\neq 0$ implichi $\det(A)=1$.**
$\det(A)\neq 0$ significa solo che $A$ è invertibile; il valore numerico del det può essere qualsiasi reale non nullo. $\det(A)=1$ vale per le matrici di rotazione e per il gruppo speciale $SL(n)$.

**Errore 6 — Invertire l'ordine dei cofattori nell'aggiunta.**
$(\text{adj}(A))_{ij}=C_{ji}$ (attenzione: $ji$, non $ij$). La matrice aggiunta è la **trasposta** della matrice dei cofattori.

---

## 9. Applicazioni reali

**Computer grafica — trasformazioni e orientazione.** Ogni frame di un videogioco o di un motore 3D coinvolge matrici di trasformazione. Il segno del determinante di una matrice di trasformazione indica se la geometria viene "capovolta" (come in uno specchio): grafici che mostrano l'interno di un oggetto invece dell'esterno sono spesso causati da una matrice con $\det<0$ quando ci si aspetta $\det>0$. Il valore assoluto controlla il fattore di scala volumetrico.

**Calcolo integrale multivariato — Jacobiano.** Quando si cambia variabile in un integrale doppio o triplo, il fattore di correzione è $|\det(J)|$, dove $J$ è la matrice Jacobiana della trasformazione. Passando a coordinate polari: $dx\,dy = r\,dr\,d\theta$, perché il Jacobiano della trasformazione $(r,\theta)\to(r\cos\theta,r\sin\theta)$ ha determinante $r$. Senza questo fattore, l'integrale sarebbe sbagliato.

**Meccanica classica e termodinamica.** Il teorema di Liouville afferma che il flusso di un sistema hamiltoniano preserva il volume nello spazio delle fasi: il determinante della matrice di evoluzione (matrice di trasferimento simplettica) è sempre 1. Questa proprietà — $\det=1$ per ogni tempo — è profondamente legata alla conservazione dell'energia e all'assenza di dissipazione.

---

## 10. Riepilogo

| Concetto | Formula | Nota |
| --- | --- | --- |
| Det $2\times 2$ | $ad-bc$ | Area del parallelogramma |
| Det $3\times 3$ | Sarrus o Laplace | Sarrus solo per $3\times 3$ |
| Laplace (riga $i$) | $\sum_j (-1)^{i+j}a_{ij}M_{ij}$ | Scegli riga/col. con più zeri |
| Prodotto | $\det(AB)=\det A\cdot\det B$ | Utile per composizioni |
| Scalatura | $\det(cA)=c^n\det A$ | Esponente $n$ = dimensione |
| Invertibilità | $A$ inv. $\iff$ $\det A\neq 0$ | Criterio fondamentale |
| Geometria | $\lvert\det A\rvert$ = volume | Segno = orientazione |
| Cramer | $x_j=\det(A_j)/\det(A)$ | Solo per sistemi piccoli |
| Inversa | $A^{-1}=\text{adj}(A)/\det(A)$ | $(\text{adj})_{ij}=C_{ji}$ |

---

## 11. Esercizi

<details><summary>Esercizio 1 — Det 3×3 con Laplace</summary>

**Testo.** Calcolare $\det\begin{pmatrix}2&1&3\\0&-1&2\\1&0&1\end{pmatrix}$ sviluppando lungo la prima colonna.

**Soluzione:**

$$= 2\cdot(-1)^{1+1}\det\begin{pmatrix}-1&2\\0&1\end{pmatrix}+0\cdot(\ldots)+1\cdot(-1)^{3+1}\det\begin{pmatrix}1&3\\-1&2\end{pmatrix}$$

$$= 2\cdot(1)\cdot(-1-0)+1\cdot(1)\cdot(2+3) = 2(-1)+5 = \mathbf{3}$$

</details>

<details><summary>Esercizio 2 — Invertibilità parametrica</summary>

**Testo.** Per quali valori di $t$ la matrice $A=\begin{pmatrix}t&2&0\\1&t&0\\0&0&3\end{pmatrix}$ non è invertibile?

**Soluzione:**

Sviluppo lungo la terza colonna (o la terza riga — ha un solo elemento non nullo):

$\det(A)=3\cdot\det\begin{pmatrix}t&2\\1&t\end{pmatrix}=3(t^2-2)$.

$A$ non invertibile sse $t^2-2=0$, cioè $t=\pm\sqrt{2}$.

</details>

<details><summary>Esercizio 3 — Proprietà del determinante</summary>

**Testo.** Sapendo che $\det(A)=5$ e $\det(B)=3$ con $A,B\in\mathbb{R}^{3\times 3}$, calcolare: (a) $\det(AB)$, (b) $\det(2A)$, (c) $\det(A^{-1}B)$.

**Soluzione:**

(a) $\det(AB)=\det(A)\det(B)=15$.

(b) $\det(2A)=2^3\det(A)=8\cdot5=40$.

(c) $\det(A^{-1}B)=\det(A^{-1})\det(B)=\frac{1}{5}\cdot3=\frac{3}{5}$.

</details>

<details><summary>Esercizio 4 — Regola di Cramer</summary>

**Testo.** Risolvere con Cramer: $\begin{cases}x+2y=7\\ 3x-y=1\end{cases}$.

**Soluzione:**

$A=\begin{pmatrix}1&2\\3&-1\end{pmatrix}$, $\det A=-1-6=-7$.

$A_1=\begin{pmatrix}7&2\\1&-1\end{pmatrix}$, $\det A_1=-7-2=-9$. $x=\frac{-9}{-7}=\frac{9}{7}$.

$A_2=\begin{pmatrix}1&7\\3&1\end{pmatrix}$, $\det A_2=1-21=-20$. $y=\frac{-20}{-7}=\frac{20}{7}$.

Verifica: $\frac{9}{7}+2\cdot\frac{20}{7}=\frac{9+40}{7}=7$ ✓; $3\cdot\frac{9}{7}-\frac{20}{7}=\frac{27-20}{7}=1$ ✓.

</details>

<details><summary>Esercizio 5 — Matrice inversa con aggiunta</summary>

**Testo.** Calcolare $A^{-1}$ per $A=\begin{pmatrix}1&2\\3&7\end{pmatrix}$ usando la formula con l'aggiunta.

**Soluzione:**

$\det A=7-6=1$.

Cofattori: $C_{11}=7$, $C_{12}=-3$, $C_{21}=-2$, $C_{22}=1$.

$\text{adj}(A)=\begin{pmatrix}C_{11}&C_{21}\\C_{12}&C_{22}\end{pmatrix}=\begin{pmatrix}7&-2\\-3&1\end{pmatrix}$.

$A^{-1}=\frac{1}{1}\begin{pmatrix}7&-2\\-3&1\end{pmatrix}$.

Verifica: $\begin{pmatrix}1&2\\3&7\end{pmatrix}\begin{pmatrix}7&-2\\-3&1\end{pmatrix}=\begin{pmatrix}7-6&-2+2\\21-21&-6+7\end{pmatrix}=I$ ✓.

</details>

<details><summary>Esercizio 6 — Area con determinante</summary>

**Testo.** Calcolare l'area del triangolo con vertici $P=(1,2)$, $Q=(4,3)$, $R=(2,6)$.

**Soluzione:**

I lati dal vertice $P$: $\mathbf{u}=Q-P=(3,1)$, $\mathbf{v}=R-P=(1,4)$.

Area del parallelogramma: $\lvert\det\begin{pmatrix}3&1\\1&4\end{pmatrix}\rvert=\lvert 12-1\rvert=11$.

Area del triangolo: $\frac{11}{2}=5.5$ unità quadrate.

</details>

<details><summary>Esercizio 7 — Det di matrice a blocchi</summary>

**Testo.** Calcolare $\det(A)$ per $A=\begin{pmatrix}2&0&0&0\\1&3&0&0\\4&2&1&0\\1&0&2&5\end{pmatrix}$.

**Soluzione:**

$A$ è triangolare inferiore: il determinante è il prodotto degli elementi sulla diagonale principale.

$\det(A)=2\cdot3\cdot1\cdot5=30$.

</details>

<details><summary>Esercizio 8 — Determinante e volume in ℝ³</summary>

**Testo.** Trovare il volume del parallelepipedo generato da $\mathbf{a}=(1,0,2)$, $\mathbf{b}=(0,1,1)$, $\mathbf{c}=(1,1,0)$.

**Soluzione:**

$$\det\begin{pmatrix}1&0&2\\0&1&1\\1&1&0\end{pmatrix}$$

Sviluppo lungo la prima riga:

$= 1\cdot\det\begin{pmatrix}1&1\\1&0\end{pmatrix}-0+2\cdot\det\begin{pmatrix}0&1\\1&1\end{pmatrix}$

$= 1(0-1)+2(0-1) = -1-2 = -3$.

Volume $= \lvert{-3}\rvert = 3$ unità cubiche. Il segno negativo indica che i tre vettori formano un sistema mancino.

</details>
