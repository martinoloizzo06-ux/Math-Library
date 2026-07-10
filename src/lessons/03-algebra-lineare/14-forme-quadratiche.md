---
id: algebra-14-forme-quadratiche
subject: algebra-lineare
topic_it: Autovalori e diagonalizzazione
topic_en: Eigenvalues and diagonalization
title_it: Matrici simmetriche e forme quadratiche
title_en: Symmetric matrices and quadratic forms
level: blue
order: 14
source_book: "G. Strang, Introduction to Linear Algebra; MIT OCW 18.06"
source_chapter: "Cap. 6–7 — Matrici simmetriche"
---

## 1. Intuizione

Immagina di stare in montagna e di chiederti: "Questa posizione è un picco, una valle, o un passo di montagna?" La risposta dipende da come il terreno curva intorno a te in ogni direzione. Se il terreno sale in tutte le direzioni, sei in una valle (minimo locale). Se scende in tutte le direzioni, sei su un picco (massimo locale). Se sale in alcune direzioni e scende in altre, sei su un passo — quello che in matematica chiamiamo punto di sella.

Le **forme quadratiche** formalizzano esattamente questo problema. Una forma quadratica è una funzione che prende un vettore $\mathbf{x}$ e restituisce uno scalare $Q(\mathbf{x}) = \mathbf{x}^T A \mathbf{x}$: pensa a essa come a una "superficie" nello spazio dei parametri. La domanda "questa superficie curva sempre verso l'alto?" diventa la domanda "la matrice $A$ è definita positiva?"

Il **teorema spettrale** dice che qualsiasi matrice simmetrica può essere "ruotata" in un sistema di coordinate in cui diventa diagonale — e in quel sistema la forma quadratica diventa una semplice somma di quadrati pesati. Gli autovalori di $A$ sono esattamente i "pesi": se tutti positivi, la forma è sempre positiva; se alcuni negativi, la forma può diventare negativa.

Questo non è solo matematica astratta. L'Hessiano di una funzione di più variabili è una matrice simmetrica. La definitezza dell'Hessiano determina se un punto critico è un minimo, un massimo o un punto di sella — cuore di ogni algoritmo di ottimizzazione, dal machine learning all'ingegneria strutturale.

In economia, le forme quadratiche compaiono come funzioni di utilità quadratica e come approssimazioni locali di funzioni di costo. In geometria descrivono le coniche (ellissi, parabole, iperboli) e le quadriche (sfere, ellissoidi, iperboloidi) in $\mathbb{R}^n$.

## 2. Prerequisiti

- Autovalori e autovettori: $A\mathbf{v} = \lambda\mathbf{v}$
- Diagonalizzazione: $A = P\Lambda P^{-1}$
- Prodotto scalare e ortogonalità di vettori
- Matrice ortogonale: $Q^TQ = I$, cioè $Q^{-1} = Q^T$
- Derivate parziali e gradiente (per applicazione all'ottimizzazione)
- Minori di una matrice (per il criterio di Sylvester)

## 3. Teoria

### Teorema spettrale

**Teorema (Spettrale).** Ogni matrice simmetrica $A = A^T \in \mathbb{R}^{n \times n}$ è ortogonalmente diagonalizzabile:

$$A = Q\Lambda Q^T$$

dove $Q \in \mathbb{R}^{n \times n}$ è **ortogonale** ($Q^T Q = Q Q^T = I$, cioè $Q^{-1} = Q^T$) e $\Lambda = \text{diag}(\lambda_1, \ldots, \lambda_n)$ contiene gli autovalori reali.

Le colonne di $Q$ sono gli autovettori di $A$, scelti **ortonormali**: $\|\mathbf{q}_i\| = 1$ e $\mathbf{q}_i \cdot \mathbf{q}_j = 0$ per $i \neq j$.

**Proprietà fondamentali delle matrici simmetriche:**
- Tutti gli autovalori sono **reali** (anche se $A$ ha entrate reali).
- Autovettori corrispondenti ad **autovalori distinti** sono **ortogonali**.
- Se un autovalore ha molteplicità $k$, il suo autospazio ha dimensione $k$ (la molteplicità geometrica eguaglia sempre quella algebrica per matrici simmetriche).
- La norma di Frobenius si esprime tramite gli autovalori: $\|A\|_F^2 = \sum_{i=1}^n \lambda_i^2$.

### Forme quadratiche

**Definizione.** Una **forma quadratica** in $n$ variabili è una funzione:

$$Q(\mathbf{x}) = \mathbf{x}^T A \mathbf{x} = \sum_{i=1}^n \sum_{j=1}^n a_{ij} x_i x_j$$

dove $A \in \mathbb{R}^{n\times n}$ è simmetrica ($A = A^T$). I termini con $i = j$ danno i quadrati puri $a_{ii}x_i^2$; i termini con $i \neq j$ danno i termini misti $2a_{ij}x_i x_j$ (per simmetria, $a_{ij} = a_{ji}$).

**Osservazione.** Data una qualunque espressione quadratica, possiamo sempre scriverla con una matrice simmetrica: se $B$ non è simmetrica, si usa $A = (B + B^T)/2$ (la parte simmetrica di $B$), ottenendo lo stesso valore $\mathbf{x}^T B \mathbf{x} = \mathbf{x}^T A \mathbf{x}$.

**Esempio in $\mathbb{R}^2$:** $Q(x,y) = 5x^2 + 4xy + 2y^2$ corrisponde a:

$$A = \begin{pmatrix}5 & 2 \\ 2 & 2\end{pmatrix}$$

(il coefficiente del termine misto $4xy$ si divide tra $a_{12} = a_{21} = 2$).

### Classificazione per definitezza

Una matrice simmetrica $A$ (e la sua forma quadratica $Q(\mathbf{x}) = \mathbf{x}^T A \mathbf{x}$) si classifica in base al segno degli autovalori:

| Tipo | Condizione sugli autovalori | Significato |
| --- | --- | --- |
| Definita positiva (DP) | tutti $\lambda_i > 0$ | $Q(\mathbf{x}) > 0$ per ogni $\mathbf{x} \neq \mathbf{0}$ |
| Semidefinita positiva (SDP) | tutti $\lambda_i \geq 0$ | $Q(\mathbf{x}) \geq 0$ per ogni $\mathbf{x}$ |
| Definita negativa (DN) | tutti $\lambda_i < 0$ | $Q(\mathbf{x}) < 0$ per ogni $\mathbf{x} \neq \mathbf{0}$ |
| Semidefinita negativa (SDN) | tutti $\lambda_i \leq 0$ | $Q(\mathbf{x}) \leq 0$ per ogni $\mathbf{x}$ |
| Indefinita | autovalori di segno misto | $Q$ può essere sia positiva che negativa |

### Criterio di Sylvester (minori principali)

**Definizione.** Il **minore principale di testa** di ordine $k$ (denotato $D_k$) è il determinante della sottomatrice $k \times k$ formata dalle prime $k$ righe e $k$ colonne di $A$.

**Teorema di Sylvester.** $A$ è definita positiva $\iff$ tutti i minori principali di testa sono positivi:

$$D_1 > 0, \quad D_2 > 0, \quad \ldots, \quad D_n > 0$$

Per una matrice $2\times 2$: $A = \begin{pmatrix}a&b\\b&c\end{pmatrix}$ è DP $\iff$ $a > 0$ e $ac - b^2 > 0$.

### Applicazione all'ottimizzazione

Data $f: \mathbb{R}^n \to \mathbb{R}$ con derivate seconde continue. In un punto critico $\mathbf{x}^*$ (dove $\nabla f(\mathbf{x}^*) = \mathbf{0}$), la matrice **Hessiana** è:

$$H_{ij} = \frac{\partial^2 f}{\partial x_i \partial x_j}\bigg|_{\mathbf{x}^*}$$

L'Hessiano è sempre simmetrico (teorema di Schwarz). La sua definitezza determina la natura del punto critico:

- $H$ **definita positiva** $\Rightarrow$ $\mathbf{x}^*$ è un **minimo locale**.
- $H$ **definita negativa** $\Rightarrow$ $\mathbf{x}^*$ è un **massimo locale**.
- $H$ **indefinita** $\Rightarrow$ $\mathbf{x}^*$ è un **punto di sella**.
- $H$ **semidefinita** $\Rightarrow$ il test è inconcludente (servono ordini superiori).

### Forma canonica

Cambiando base con la sostituzione $\mathbf{x} = Q\mathbf{y}$ (dove $Q$ è la matrice ortogonale del teorema spettrale):

$$Q(\mathbf{x}) = \mathbf{x}^T A \mathbf{x} = (Q\mathbf{y})^T A (Q\mathbf{y}) = \mathbf{y}^T Q^T A Q \mathbf{y} = \mathbf{y}^T \Lambda \mathbf{y} = \sum_{i=1}^n \lambda_i y_i^2$$

Questa è la **forma canonica** (o principale) della forma quadratica: una somma pura di quadrati pesati dagli autovalori. La definitezza si legge immediatamente dai segni dei $\lambda_i$.

## 4. Derivazioni

### Dimostrazione che autovalori di matrici simmetriche sono reali

Sia $\lambda \in \mathbb{C}$ e $\mathbf{v} \in \mathbb{C}^n$ autovettore di $A$ (reale simmetrica): $A\mathbf{v} = \lambda\mathbf{v}$.

Moltiplichiamo a sinistra per $\bar{\mathbf{v}}^T$ (coniugato trasposto):

$$\bar{\mathbf{v}}^T A \mathbf{v} = \lambda \bar{\mathbf{v}}^T \mathbf{v} = \lambda \|\mathbf{v}\|^2 \quad (*)$$

Ora prendiamo il coniugato coniugato trasposto di $(*)$: poiché $A$ è reale e simmetrica, $\bar{A} = A$ e $A^T = A$, quindi $(\bar{\mathbf{v}}^T A \mathbf{v})$ è reale e uguale a $\bar{\lambda}\|\mathbf{v}\|^2$.

Dunque $\lambda\|\mathbf{v}\|^2 = \bar{\lambda}\|\mathbf{v}\|^2$. Poiché $\|\mathbf{v}\|^2 > 0$, otteniamo $\lambda = \bar{\lambda}$, cioè $\lambda \in \mathbb{R}$. $\square$

### Dimostrazione che autovettori di autovalori distinti sono ortogonali

Siano $\lambda \neq \mu$ autovalori con autovettori $\mathbf{u}$, $\mathbf{v}$.

$$\lambda(\mathbf{u}^T\mathbf{v}) = (A\mathbf{u})^T\mathbf{v} = \mathbf{u}^T A^T \mathbf{v} = \mathbf{u}^T A\mathbf{v} = \mu(\mathbf{u}^T\mathbf{v})$$

Quindi $(\lambda - \mu)(\mathbf{u}^T\mathbf{v}) = 0$. Poiché $\lambda \neq \mu$, segue $\mathbf{u}^T\mathbf{v} = 0$. $\square$

### Equivalenza definitezza positiva e autovalori positivi

**($\Rightarrow$)** Se $A$ è DP, per ogni autovettore $\mathbf{v}$: $0 < \mathbf{v}^T A \mathbf{v} = \mathbf{v}^T(\lambda\mathbf{v}) = \lambda\|\mathbf{v}\|^2$, quindi $\lambda > 0$.

**($\Leftarrow$)** Se tutti $\lambda_i > 0$, per ogni $\mathbf{x} \neq \mathbf{0}$, scrivendo $\mathbf{x} = Q\mathbf{y}$ (con $\mathbf{y} \neq \mathbf{0}$):

$$\mathbf{x}^T A \mathbf{x} = \sum_{i=1}^n \lambda_i y_i^2 \geq \lambda_{\min} \sum_{i=1}^n y_i^2 = \lambda_{\min}\|\mathbf{y}\|^2 > 0 \quad \square$$

## 5. Esempi

**Esempio 1 — Identificare la matrice di una forma quadratica.**

Data $Q(x,y,z) = x^2 + 6xy + 2y^2 - 4yz + z^2$.

I coefficienti diagonali danno $a_{11}=1$, $a_{22}=2$, $a_{33}=1$. Il termine $6xy$ dà $a_{12}=a_{21}=3$ (coefficiente diviso per 2). Il termine $-4yz$ dà $a_{23}=a_{32}=-2$. Nessun termine $xz$, quindi $a_{13}=a_{31}=0$.

$$A = \begin{pmatrix}1&3&0\\3&2&-2\\0&-2&1\end{pmatrix}$$

---

**Esempio 2 — Classificazione per autovalori.**

$$A = \begin{pmatrix}2&1\\1&2\end{pmatrix}$$

$p(\lambda) = (\lambda-2)^2 - 1 = (\lambda-1)(\lambda-3)$. Autovalori: $\lambda_1 = 1 > 0$, $\lambda_2 = 3 > 0$.

$A$ è **definita positiva**. La forma quadratica $Q(x,y) = 2x^2 + 2xy + 2y^2 > 0$ per $(x,y) \neq (0,0)$.

Forma canonica: $Q = y_1^2 + 3y_2^2$ (con la rotazione degli autovettori).

---

**Esempio 3 — Classificazione per criterio di Sylvester.**

$$A = \begin{pmatrix}3&-1&0\\-1&2&-1\\0&-1&4\end{pmatrix}$$

$D_1 = 3 > 0$.

$D_2 = \det\begin{pmatrix}3&-1\\-1&2\end{pmatrix} = 6 - 1 = 5 > 0$.

$D_3 = \det(A) = 3(8-1) + 1(-4-0) = 21 - 4 = 17 > 0$.

Tutti i minori positivi $\Rightarrow$ $A$ è **definita positiva**.

---

**Esempio 4 — Matrice indefinita e punto di sella.**

$$A = \begin{pmatrix}1&2\\2&-3\end{pmatrix}$$

$\det(A) = -3 - 4 = -7 < 0$. Poiché $\det(A) = \lambda_1\lambda_2 < 0$, i due autovalori hanno **segni opposti**.

$A$ è **indefinita**: lungo certi vettori $Q > 0$, lungo altri $Q < 0$. Geometricamente: la superficie $z = \mathbf{x}^T A \mathbf{x}$ è un iperboloide (sella).

---

**Esempio 5 — Hessiano e classificazione di punti critici.**

$f(x,y) = x^3 + y^3 - 3xy$. Punti critici: $\nabla f = (3x^2 - 3y, 3y^2 - 3x) = \mathbf{0}$.

Da $x^2 = y$ e $y^2 = x$: $x^4 = x$, cioè $x(x^3-1)=0$. Soluzioni: $(0,0)$ e $(1,1)$.

Hessiano: $H = \begin{pmatrix}6x & -3\\-3 & 6y\end{pmatrix}$.

**In $(0,0)$:** $H = \begin{pmatrix}0&-3\\-3&0\end{pmatrix}$. Autovalori: $\pm 3$. $H$ indefinita $\Rightarrow$ **punto di sella**.

**In $(1,1)$:** $H = \begin{pmatrix}6&-3\\-3&6\end{pmatrix}$. $D_1 = 6 > 0$, $D_2 = 36-9 = 27 > 0$. $H$ DP $\Rightarrow$ **minimo locale**.

---

**Esempio 6 — Decomposizione spettrale completa.**

$$A = \begin{pmatrix}3&1\\1&3\end{pmatrix}$$

Autovalori: $p(\lambda) = (\lambda-3)^2 - 1 = (\lambda-2)(\lambda-4)$, quindi $\lambda_1=2$, $\lambda_2=4$.

Per $\lambda_1=2$: $(A-2I)\mathbf{v}=\mathbf{0}$: $\mathbf{v}_1 = (1,-1)/\sqrt{2}$.

Per $\lambda_2=4$: $\mathbf{v}_2 = (1,1)/\sqrt{2}$.

$$Q = \frac{1}{\sqrt{2}}\begin{pmatrix}1&1\\-1&1\end{pmatrix}, \quad \Lambda = \begin{pmatrix}2&0\\0&4\end{pmatrix}$$

Verifica: $Q^T A Q = \Lambda$? La colonna 1 di $Q^T A$ è $Q^T \cdot A\mathbf{q}_1 = Q^T(2\mathbf{q}_1) = 2\mathbf{e}_1$. ✓

Forma quadratica: $Q(x,y) = 3x^2 + 2xy + 3y^2$. Forma canonica: $2y_1^2 + 4y_2^2$.

---

**Esempio 7 — Semidefinita positiva e rango.**

$$A = \begin{pmatrix}1&-1\\-1&1\end{pmatrix}$$

$\det(A) = 1-1 = 0$: autovalore $\lambda = 0$. $\text{tr}(A) = 2$: secondo autovalore $\lambda = 2 > 0$.

$A$ è **semidefinita positiva** (un autovalore zero, l'altro positivo).

$Q(x,y) = x^2 - 2xy + y^2 = (x-y)^2 \geq 0$, e si annulla quando $x = y$: il nucleo di $A$ è span$(1,1)$.

---

**Esempio 8 — Coniche tramite forme quadratiche.**

L'equazione $5x^2 - 4xy + 2y^2 = 1$ è una conica. La matrice è $A = \begin{pmatrix}5&-2\\-2&2\end{pmatrix}$.

$p(\lambda) = \lambda^2 - 7\lambda + 6 = (\lambda-1)(\lambda-6)$. Autovalori: $\lambda_1=1$, $\lambda_2=6$, entrambi positivi.

In coordinate principali: $y_1^2 + 6y_2^2 = 1$, che è un'**ellisse** con semiassi $1$ e $1/\sqrt{6}$.

## 6. Grafico

```plot
{"title":"Forma quadratica Q(x,y)=y₁²+3y₂² in coord. principali (livelli)","fn":"Math.sqrt(Math.max(0, (1 - 3*x*x)))","fn2":"-Math.sqrt(Math.max(0, (1 - 3*x*x)))","domain":[-1.1,1.1],"yDomain":[-1.1,1.1],"label1":"ellisse Q=1 (arco sup)","label2":"ellisse Q=1 (arco inf)","color":"steelblue","color2":"steelblue"}
```

## 7. Interattivo

```slider
{"title":"Forma quadratica Q(x,y)=λ₁x²+λ₂y² — cambia l'autovalore λ₁","fn":"Math.sqrt(Math.max(0,(1 - a*x*x)))","fn2":"-Math.sqrt(Math.max(0,(1 - a*x*x)))","domain":[-2,2],"yDomain":[-2,2],"params":[{"name":"a","min":0.1,"max":5,"step":0.1,"default":1}],"title":"Livello Q=1: varia λ₁ (λ₂=1 fisso)"}
```

## 8. Errori comuni

**Errore 1 — Confondere la forma quadratica con la matrice.** $Q(\mathbf{x}) = \mathbf{x}^T A \mathbf{x}$ è uno scalare (una funzione), non una matrice. La matrice $A$ è lo strumento per calcolare la forma quadratica, non la forma quadratica stessa.

**Errore 2 — Non simmetrizzare la matrice.** Se la matrice $B$ non è simmetrica, la forma quadratica $\mathbf{x}^T B \mathbf{x}$ è identica a $\mathbf{x}^T A \mathbf{x}$ dove $A = (B+B^T)/2$. Applicare il test di definitezza alla matrice non simmetrica $B$ porta a conclusioni errate.

**Errore 3 — Sbagliare i coefficienti dei termini misti.** Il termine $6xy$ nella forma quadratica dà $a_{12} = a_{21} = 3$ (metà del coefficiente!), non $6$. Ogni termine misto $c_{ij}x_ix_j$ contribuisce $a_{ij} = a_{ji} = c_{ij}/2$.

**Errore 4 — Applicare Sylvester a matrici non simmetriche.** Il criterio dei minori principali di testa funziona solo per matrici simmetriche (o hermitiane). Per matrici generali, non vale.

**Errore 5 — Concludere DP da $\det(A) > 0$ in dimensione $> 2$.** In dimensione 3, $\det(A) > 0$ non implica definitezza positiva (es.: $A = \text{diag}(-1,-1,-1)$ ha $\det(A)=-1 < 0$, ma $A=\text{diag}(-2,-3,1)$ ha $\det(A)=6>0$ ed è indefinita). Serve controllare tutti i minori principali $D_1, D_2, \ldots, D_n$.

**Errore 6 — Confondere definitezza dell'Hessiano con minimo globale.** L'Hessiano DP in un punto critico garantisce solo un **minimo locale**. Per il minimo globale serve analisi più approfondita (unicità del punto critico, convessità globale, ecc.).

**Errore 7 — Dimenticare che $Q^T = Q^{-1}$ per matrici ortogonali.** Il teorema spettrale afferma $A = Q\Lambda Q^T$ (non $Q\Lambda Q^{-1}$): per matrici ortogonali, l'inversa coincide con la trasposta. Questo semplifica enormemente i calcoli.

**Errore 8 — Trascurare il caso semidefinito.** Una matrice con almeno un autovalore zero è semidefinita (non definita). In questo caso il test dell'Hessiano è inconcludente: il punto critico potrebbe essere un minimo, un massimo o un punto di sella.

## 9. Applicazioni reali

**Ottimizzazione in machine learning.** In ogni algoritmo di machine learning basato su gradiente discendente, la convergenza dipende dalla curvatura della funzione di perdita. La matrice Hessiana (o la sua approssimazione, come la matrice di Fisher) deve essere definita positiva affinché il minimo locale sia ben definito. L'**numero di condizionamento** $\kappa = \lambda_{\max}/\lambda_{\min}$ della Hessiana determina quanto lenta è la convergenza: un numero di condizionamento elevato significa che il gradiente discendente "zig-zaga" nelle direzioni di curvatura piccola. I metodi di secondo ordine (Newton, BFGS) sfruttano esplicitamente la Hessiana per correggere questo problema.

**Geometria delle coniche e delle quadriche.** In geometria analitica, ogni conica (in $\mathbb{R}^2$) o quadrica (in $\mathbb{R}^3$) si scrive nella forma $\mathbf{x}^T A \mathbf{x} + \mathbf{b}^T \mathbf{x} = c$. La classificazione (ellisse, iperbole, parabola; ellissoide, iperboloide, paraboloide) dipende dalla definitezza di $A$: DP dà un'ellisse/ellissoide, indefinita dà iperbole/iperboloide, semidefinita dà parabola/paraboloide o degenera. Il teorema spettrale permette di eliminare i termini misti ruotando gli assi in modo che $A$ diventi diagonale — la rotazione corrispondente agli autovettori.

**Meccanica dei continui e tensore degli sforzi.** In ingegneria strutturale, lo **stato di sforzo** in un punto di un materiale è descritto da un tensore simmetrico $\boldsymbol{\sigma}$ (la matrice degli sforzi di Cauchy). Gli autovalori di $\boldsymbol{\sigma}$ sono gli **sforzi principali** — le intensità di trazione o compressione nelle direzioni preferenziali. Gli autovettori sono le **direzioni principali**: piani su cui non agiscono sforzi di taglio. Questo permette di verificare se un materiale è in pericolo di snervamento (usando criteri come Von Mises, che dipende proprio dagli autovalori del tensore degli sforzi).

**Portfolio optimization in finanza.** Nella teoria del portfolio di Markowitz, la **matrice di covarianza** dei rendimenti degli asset è simmetrica e semidefinita positiva. La varianza di un portfolio con pesi $\mathbf{w}$ è $\sigma^2 = \mathbf{w}^T \Sigma \mathbf{w}$ — una forma quadratica. Minimizzare il rischio (varianza) a parità di rendimento atteso porta a un problema di ottimizzazione quadratica vincolata. La definitezza positiva della matrice di covarianza garantisce l'unicità della soluzione ottima.

## 10. Riepilogo

| Concetto | Formula / Condizione | Note |
| --- | --- | --- |
| Teorema spettrale | $A = Q\Lambda Q^T$ | $A$ simmetrica, $Q$ ortogonale |
| Autovalori di $A$ simmetrica | tutti reali | anche se $A$ reale |
| Autovettori di autov. distinti | ortogonali | $\mathbf{u}_i \cdot \mathbf{u}_j = 0$ |
| Forma quadratica | $Q(\mathbf{x}) = \mathbf{x}^T A \mathbf{x}$ | scalare |
| Definitezza positiva (DP) | tutti $\lambda_i > 0$ | $Q(\mathbf{x}) > 0$ per $\mathbf{x}\neq\mathbf{0}$ |
| Semidefinita positiva | tutti $\lambda_i \geq 0$ | almeno un $\lambda = 0$ |
| Indefinita | segni misti | $Q$ può cambiare segno |
| Criterio Sylvester | tutti $D_k > 0$ | equivalente a DP |
| Forma canonica | $\sum \lambda_i y_i^2$ | con sostituzione $\mathbf{x}=Q\mathbf{y}$ |
| Hessiano DP | minimo locale | in punto critico |
| Hessiano DN | massimo locale | in punto critico |
| Hessiano indefinito | punto di sella | in punto critico |

## 11. Esercizi

<details>
<summary>Esercizio 1 — Identificare la matrice di una forma quadratica</summary>

Trovare la matrice simmetrica $A$ della forma quadratica $Q(x,y) = 3x^2 - 8xy + 5y^2$.

**Soluzione:**

I termini quadratici puri: $a_{11} = 3$, $a_{22} = 5$.

Il termine misto $-8xy$: $a_{12} = a_{21} = -8/2 = -4$.

$$A = \begin{pmatrix}3 & -4 \\ -4 & 5\end{pmatrix}$$

Verifica: $\mathbf{x}^T A \mathbf{x} = 3x^2 + (-4)xy + (-4)xy + 5y^2 = 3x^2 - 8xy + 5y^2$ ✓.

</details>

<details>
<summary>Esercizio 2 — Classificazione per autovalori</summary>

Classificare la definitezza di $A = \begin{pmatrix}4 & 2 \\ 2 & 1\end{pmatrix}$.

**Soluzione:**

$p(\lambda) = (4-\lambda)(1-\lambda) - 4 = \lambda^2 - 5\lambda = \lambda(\lambda-5)$.

Autovalori: $\lambda_1 = 0$, $\lambda_2 = 5$.

Un autovalore è zero, l'altro positivo $\Rightarrow$ $A$ è **semidefinita positiva**.

Forma quadratica: $Q(x,y) = 4x^2 + 4xy + y^2 = (2x+y)^2 \geq 0$, e si annulla per $y = -2x$.

</details>

<details>
<summary>Esercizio 3 — Criterio di Sylvester</summary>

Usare il criterio di Sylvester per classificare $A = \begin{pmatrix}2 & -1 & 0 \\ -1 & 2 & -1 \\ 0 & -1 & 2\end{pmatrix}$.

**Soluzione:**

$D_1 = 2 > 0$.

$D_2 = \det\begin{pmatrix}2&-1\\-1&2\end{pmatrix} = 4-1 = 3 > 0$.

$D_3 = \det(A)$: sviluppando lungo la prima riga:
$D_3 = 2(4-1) - (-1)(-2-0) = 6 - 2 = 4 > 0$.

Tutti i minori positivi $\Rightarrow$ $A$ è **definita positiva**.

</details>

<details>
<summary>Esercizio 4 — Decomposizione spettrale</summary>

Trovare $Q$ e $\Lambda$ per $A = \begin{pmatrix}5 & 3 \\ 3 & 5\end{pmatrix}$ e verificare $A = Q\Lambda Q^T$.

**Soluzione:**

$p(\lambda) = (\lambda-5)^2 - 9 = (\lambda-2)(\lambda-8)$.

Per $\lambda_1=2$: $(A-2I)\mathbf{v}=\mathbf{0}$: $3v_1+3v_2=0$, autovettore $\mathbf{q}_1=(1,-1)/\sqrt{2}$.

Per $\lambda_2=8$: autovettore $\mathbf{q}_2=(1,1)/\sqrt{2}$.

$$Q = \frac{1}{\sqrt{2}}\begin{pmatrix}1&1\\-1&1\end{pmatrix}, \quad \Lambda = \begin{pmatrix}2&0\\0&8\end{pmatrix}$$

Verifica: $Q\Lambda Q^T = \frac{1}{2}\begin{pmatrix}1&1\\-1&1\end{pmatrix}\begin{pmatrix}2&0\\0&8\end{pmatrix}\begin{pmatrix}1&-1\\1&1\end{pmatrix} = \frac{1}{2}\begin{pmatrix}10&6\\6&10\end{pmatrix} = \begin{pmatrix}5&3\\3&5\end{pmatrix}$ ✓.

</details>

<details>
<summary>Esercizio 5 — Classificazione di punti critici con l'Hessiano</summary>

Trovare e classificare i punti critici di $f(x,y) = x^2 + xy + y^2 - 3x$.

**Soluzione:**

$\nabla f = (2x + y - 3, \; x + 2y) = \mathbf{0}$.

Da $x + 2y = 0$: $x = -2y$. Sostituendo: $-4y + y - 3 = 0 \Rightarrow y = -1$, $x = 2$.

Unico punto critico: $(2, -1)$.

Hessiano: $H = \begin{pmatrix}2&1\\1&2\end{pmatrix}$ (costante, non dipende dal punto).

$D_1 = 2 > 0$, $D_2 = 4-1 = 3 > 0$. $H$ è **DP** $\Rightarrow$ $(2,-1)$ è un **minimo globale**.

$f(2,-1) = 4 - 2 + 1 - 6 = -3$.

</details>

<details>
<summary>Esercizio 6 — Matrice indefinita</summary>

Mostrare che $A = \begin{pmatrix}2 & 3 \\ 3 & -5\end{pmatrix}$ è indefinita e trovare direzioni in cui $Q > 0$ e $Q < 0$.

**Soluzione:**

$\det(A) = -10 - 9 = -19 < 0 \Rightarrow$ autovalori di segno opposto $\Rightarrow$ **indefinita**.

Per $\mathbf{x} = (1,0)$: $Q = 2 > 0$ (direzione dell'asse $x$).

Per $\mathbf{x} = (0,1)$: $Q = -5 < 0$ (direzione dell'asse $y$).

La forma quadratica può dunque assumere valori sia positivi che negativi.

</details>

<details>
<summary>Esercizio 7 — Forma quadratica e conica</summary>

Classificare la conica $2x^2 + 4xy + 5y^2 = 6$ e trovare i semiassi.

**Soluzione:**

Matrice: $A = \begin{pmatrix}2&2\\2&5\end{pmatrix}$.

$p(\lambda) = \lambda^2 - 7\lambda + 6 = (\lambda-1)(\lambda-6)$. Autovalori: $\lambda_1 = 1$, $\lambda_2 = 6$.

Entrambi positivi $\Rightarrow$ $A$ è **DP** $\Rightarrow$ conica è un'**ellisse**.

In coordinate principali: $y_1^2 + 6y_2^2 = 6$, cioè $\dfrac{y_1^2}{6} + \dfrac{y_2^2}{1} = 1$.

Semiassi: $a = \sqrt{6}$ e $b = 1$.

</details>

<details>
<summary>Esercizio 8 — Forma canonica</summary>

Portare $Q(x,y) = 3x^2 + 2\sqrt{3}xy + y^2$ in forma canonica.

**Soluzione:**

Matrice: $A = \begin{pmatrix}3&\sqrt{3}\\\sqrt{3}&1\end{pmatrix}$.

$p(\lambda) = (3-\lambda)(1-\lambda) - 3 = \lambda^2 - 4\lambda = \lambda(\lambda-4)$.

Autovalori: $\lambda_1 = 0$, $\lambda_2 = 4$.

Forma canonica: $Q = 0\cdot y_1^2 + 4y_2^2 = 4y_2^2$.

$A$ è **semidefinita positiva**: la forma quadratica è un quadrato puro in $y_2$.

</details>
