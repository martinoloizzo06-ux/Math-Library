---
id: algebra-05-spazi-vettoriali
subject: algebra-lineare
topic_it: Spazi vettoriali
topic_en: Vector spaces
title_it: Spazi vettoriali e sottospazi
title_en: Vector spaces and subspaces
level: blue
order: 5
source_book: "G. Strang, Introduction to Linear Algebra; MIT OCW 18.06"
source_chapter: "Cap. 3 — Spazi vettoriali"
---

## 1. Intuizione — Il mondo dei vettori che "restano nel loro mondo"

Immagina un tavolo da biliardo. Ogni volta che colpisci una palla, essa si muove sul piano del tavolo. Puoi combinare movimenti in qualsiasi modo — spostarti di 3 cm verso destra, poi di 5 cm in avanti, poi tornare indietro — ma la palla non salterà mai fuori dal tavolo (a meno di errori grossolani). Il tavolo è un **spazio chiuso** rispetto a queste operazioni.

Uno **spazio vettoriale** è esattamente questa idea resa rigorosa: un insieme di oggetti (vettori, funzioni, polinomi, matrici…) che puoi sommare e scalare liberamente senza mai "uscire" dall'insieme. È un universo autosufficiente per l'algebra lineare.

Ogni volta che in fisica, informatica o economia scrivi $\mathbf{u} + \mathbf{v}$ o $c\,\mathbf{v}$, stai implicitamente usando la struttura di uno spazio vettoriale. Capire questo concetto apre le porte a tutto ciò che segue: basi, dimensioni, trasformazioni, autovalori.

---

## 2. Prerequisiti

Prima di procedere è utile avere familiarità con:

- Vettori in $\mathbb{R}^n$: somma componente per componente, prodotto per scalare.
- Sistemi lineari e matrici: operazioni elementari su righe.
- Nozione di insieme e funzione.

---

## 3. Teoria — Definizioni formali

### Spazio vettoriale

Un **spazio vettoriale** su $\mathbb{R}$ è una coppia $(V, +, \cdot)$ dove $V$ è un insieme non vuoto, $+\colon V\times V\to V$ è la somma e $\cdot\colon \mathbb{R}\times V\to V$ è il prodotto scalare, che soddisfano gli 8 assiomi:

| # | Assioma | Formula |
| --- | --- | --- |
| 1 | Chiusura rispetto alla somma | $\mathbf{u}+\mathbf{v}\in V$ |
| 2 | Commutatività | $\mathbf{u}+\mathbf{v}=\mathbf{v}+\mathbf{u}$ |
| 3 | Associatività | $(\mathbf{u}+\mathbf{v})+\mathbf{w}=\mathbf{u}+(\mathbf{v}+\mathbf{w})$ |
| 4 | Elemento neutro | $\exists\,\mathbf{0}\in V:\mathbf{v}+\mathbf{0}=\mathbf{v}$ |
| 5 | Inverso additivo | $\exists\,{-\mathbf{v}}:\mathbf{v}+(-\mathbf{v})=\mathbf{0}$ |
| 6 | Chiusura rispetto allo scalare | $c\,\mathbf{v}\in V$ per ogni $c\in\mathbb{R}$ |
| 7 | Distributività (scalare su vettori) | $c(\mathbf{u}+\mathbf{v})=c\mathbf{u}+c\mathbf{v}$ |
| 8 | Elemento unità | $1\cdot\mathbf{v}=\mathbf{v}$ |

Gli assiomi 1–5 riguardano la struttura additiva (gruppo abeliano); gli assiomi 6–8 l'interazione con i reali.

**Esempi canonici:**

- $\mathbb{R}^n$: vettori colonna con somma e scalatura standard.
- $M_{m,n}(\mathbb{R})$: matrici $m\times n$ reali.
- $P_n$: polinomi di grado $\leq n$ (la somma di due polinomi di grado $\leq n$ ha ancora grado $\leq n$).
- $C[a,b]$: funzioni continue su $[a,b]$ (somma e moltiplicazione puntuale).

### Sottospazio vettoriale

Un sottoinsieme $W\subseteq V$ è un **sottospazio** di $V$ se e solo se:

$$\mathbf{0}\in W, \quad \mathbf{u}+\mathbf{v}\in W \;\forall\,\mathbf{u},\mathbf{v}\in W, \quad c\,\mathbf{v}\in W \;\forall\,c\in\mathbb{R},\,\mathbf{v}\in W$$

Equivalentemente (criterio compatto): $W$ è un sottospazio se e solo se è chiuso rispetto alle combinazioni lineari:

$$\alpha\,\mathbf{u}+\beta\,\mathbf{v}\in W \quad \forall\,\mathbf{u},\mathbf{v}\in W,\;\alpha,\beta\in\mathbb{R}$$

Il vettore zero deve sempre appartenere a $W$: se $\mathbf{0}\notin W$, si conclude immediatamente che $W$ non è un sottospazio.

### Span (involucro lineare)

Dato un insieme finito $S=\{\mathbf{v}_1,\ldots,\mathbf{v}_k\}\subseteq V$, lo **span** di $S$ è:

$$\text{span}(S) = \left\{\,\sum_{i=1}^k c_i\,\mathbf{v}_i \;:\; c_i\in\mathbb{R}\,\right\}$$

**Teorema.** $\text{span}(S)$ è sempre un sottospazio di $V$, ed è il più piccolo sottospazio che contiene $S$.

### I quattro sottospazi fondamentali di una matrice

Per $A\in\mathbb{R}^{m\times n}$:

| Sottospazio | Simbolo | Dove vive | Definizione |
| --- | --- | --- | --- |
| Spazio delle colonne | $C(A)$ | $\mathbb{R}^m$ | $\{A\mathbf{x}:\mathbf{x}\in\mathbb{R}^n\}$ = span delle colonne |
| Spazio delle righe | $C(A^T)$ | $\mathbb{R}^n$ | span delle righe di $A$ |
| Nucleo (kernel) | $N(A)$ | $\mathbb{R}^n$ | $\{\mathbf{x}:A\mathbf{x}=\mathbf{0}\}$ |
| Nucleo sinistro | $N(A^T)$ | $\mathbb{R}^m$ | $\{\mathbf{y}:A^T\mathbf{y}=\mathbf{0}\}$ |

Questi quattro sottospazi sono intrecciati dal Teorema Fondamentale dell'Algebra Lineare (Strang): $C(A)\perp N(A^T)$ e $C(A^T)\perp N(A)$.

---

## 4. Derivazione — Il nucleo è un sottospazio

**Teorema.** Per ogni matrice $A\in\mathbb{R}^{m\times n}$, il nucleo $N(A)=\{\mathbf{x}\in\mathbb{R}^n: A\mathbf{x}=\mathbf{0}\}$ è un sottospazio di $\mathbb{R}^n$.

**Dimostrazione passo per passo.**

**Passo 1 — L'elemento neutro appartiene a $N(A)$.**

$$A\,\mathbf{0} = \mathbf{0} \quad \Rightarrow \quad \mathbf{0}\in N(A). \checkmark$$

**Passo 2 — Chiusura rispetto alla somma.**

Siano $\mathbf{x}_1, \mathbf{x}_2\in N(A)$, cioè $A\mathbf{x}_1=\mathbf{0}$ e $A\mathbf{x}_2=\mathbf{0}$.

$$A(\mathbf{x}_1+\mathbf{x}_2) = A\mathbf{x}_1 + A\mathbf{x}_2 = \mathbf{0}+\mathbf{0} = \mathbf{0}$$

Quindi $\mathbf{x}_1+\mathbf{x}_2\in N(A)$. $\checkmark$

**Passo 3 — Chiusura rispetto allo scalare.**

Sia $\mathbf{x}\in N(A)$ e $c\in\mathbb{R}$.

$$A(c\,\mathbf{x}) = c\,(A\mathbf{x}) = c\,\mathbf{0} = \mathbf{0}$$

Quindi $c\,\mathbf{x}\in N(A)$. $\checkmark$

Tutti e tre i criteri sono soddisfatti: $N(A)$ è un sottospazio. $\blacksquare$

**Nota:** la stessa tecnica vale per lo spazio delle colonne. $C(A) = \{A\mathbf{x}: \mathbf{x}\in\mathbb{R}^n\}$ è chiuso: $A\mathbf{x}_1 + A\mathbf{x}_2 = A(\mathbf{x}_1+\mathbf{x}_2)\in C(A)$.

---

## 5. Esempi

**Esempio 1 — $\mathbb{R}^2$ come spazio vettoriale.**

$V=\mathbb{R}^2$. Scegli $\mathbf{u}=(3,1)$ e $\mathbf{v}=(-1,4)$. Allora $\mathbf{u}+\mathbf{v}=(2,5)\in\mathbb{R}^2$ e $3\mathbf{u}=(9,3)\in\mathbb{R}^2$. Tutti gli 8 assiomi si verificano facilmente componente per componente.

**Esempio 2 — Retta $y=-x$ come sottospazio di $\mathbb{R}^2$.**

$W=\{(x,-x):x\in\mathbb{R}\}$. Verifica: $(0,0)\in W$ ✓; $(a,-a)+(b,-b)=(a+b,-(a+b))\in W$ ✓; $c(a,-a)=(ca,-ca)\in W$ ✓. Quindi $W$ è un sottospazio di dimensione 1 (una retta per l'origine).

**Esempio 3 — Retta $y=1-x$ non è un sottospazio.**

$W=\{(x,1-x):x\in\mathbb{R}\}$. Il vettore zero: $(0,0)$ richiederebbe $1-0=0$, falso. Quindi $\mathbf{0}\notin W$: $W$ non è un sottospazio, nonostante sia una retta.

**Esempio 4 — Piano $z=0$ come sottospazio di $\mathbb{R}^3$.**

$W=\{(x,y,0):x,y\in\mathbb{R}\}$. È $\text{span}\{(1,0,0),(0,1,0)\}$, quindi certamente un sottospazio. Ha dimensione 2.

**Esempio 5 — Nucleo di una matrice.**

$A=\begin{pmatrix}1 & 2\\ 2 & 4\end{pmatrix}$. Il sistema $A\mathbf{x}=\mathbf{0}$ dà $x_1+2x_2=0$, cioè $x_1=-2x_2$. Variabile libera $x_2=t$:

$$N(A) = \text{span}\left\{\begin{pmatrix}-2\\1\end{pmatrix}\right\}$$

È una retta per l'origine in $\mathbb{R}^2$.

**Esempio 6 — Spazio delle colonne.**

Per $A$ dell'esempio 5, $C(A)=\text{span}\left\{\begin{pmatrix}1\\2\end{pmatrix},\begin{pmatrix}2\\4\end{pmatrix}\right\}$. Ma $(2,4)^T = 2(1,2)^T$, quindi $C(A)=\text{span}\left\{\begin{pmatrix}1\\2\end{pmatrix}\right\}$: una retta in $\mathbb{R}^2$.

**Esempio 7 — Polinomi come spazio vettoriale.**

$V=P_2=\{a_0+a_1 x+a_2 x^2: a_i\in\mathbb{R}\}$. Somma: $(1+x)+(x+x^2)=1+2x+x^2\in P_2$ ✓. Scalatura: $3(1+x)=3+3x\in P_2$ ✓. Dimensione: 3 (base $\{1, x, x^2\}$).

**Esempio 8 — Un sottoinsieme che non è sottospazio per mancanza di chiusura.**

$W=\{(x,y)\in\mathbb{R}^2: x\geq 0, y\geq 0\}$ (primo quadrante). Contiene $\mathbf{0}$ ✓ e la somma ✓, ma se $(1,1)\in W$ allora $(-1)(-1,1)=(1,-1)\notin W$. Non è chiuso rispetto agli scalari negativi: non è un sottospazio.

---

## 6. Grafico — Sottospazi in $\mathbb{R}^2$

```plot
{"title":"Sottospazi di ℝ²: retta y = -x (W) e retta y = 2x","fn":"(-1)*x","fn2":"2*x","domain":[-3,3],"yDomain":[-4,4],"label1":"W: y = -x","label2":"U: y = 2x"}
```

Le due rette passano entrambe per l'origine: sono sottospazi 1-dimensionali di $\mathbb{R}^2$. Una retta che non passa per l'origine non è un sottospazio.

---

## 7. Slider — Span di un vettore scalato

```slider
{"title":"Span di v = (1,2): al variare di c, c·v percorre una retta","fn":"2*a*x/x","domain":[-3,3],"yDomain":[-6,6],"pname":"a","pmin":-3,"pmax":3,"pdefault":1,"pstep":0.1,"plabel":"scalare c","label1":"y = 2c (componente y di c·v)"}
```

Muovi lo slider: il punto $c\cdot(1,2)=(c,2c)$ si sposta lungo la retta $y=2x$. Qualunque valore di $c$ tu scelga, rimani sempre sulla stessa retta — lo span non "esce" mai da essa.

---

## 8. Errori comuni

**Errore 1 — Dimenticare che il vettore zero deve appartenere al sottospazio.**
La condizione $\mathbf{0}\in W$ è la prima da verificare. Se $W=\{(x,y):x+y=1\}$ non contiene $(0,0)$, basta questo per escludere che sia un sottospazio.

**Errore 2 — Confondere "chiuso rispetto alla somma" con "la somma è zero".**
"Chiuso" significa che $\mathbf{u}+\mathbf{v}$ appartiene ancora a $W$, non che vale zero.

**Errore 3 — Pensare che ogni sottoinsieme di uno spazio vettoriale sia un sottospazio.**
Il primo quadrante $\{(x,y):x\geq 0,y\geq 0\}$ è un sottoinsieme di $\mathbb{R}^2$ ma non è un sottospazio (non chiuso per scalari negativi).

**Errore 4 — Confondere $\text{span}$ con l'insieme dei generatori.**
$\text{span}\{(1,0),(0,1)\}$ non è solo quei due vettori: è tutto $\mathbb{R}^2$, che è infinito.

**Errore 5 — Pensare che l'intersezione di sottospazi non sia un sottospazio.**
L'intersezione $W_1\cap W_2$ è sempre un sottospazio (si verifica applicando i criteri: se $\mathbf{u},\mathbf{v}\in W_1\cap W_2$, allora la somma e lo scalare appartengono sia a $W_1$ sia a $W_2$, quindi all'intersezione).

**Errore 6 — Credere che l'unione di due sottospazi sia sempre un sottospazio.**
$W_1=\{(x,0)\}$ e $W_2=\{(0,y)\}$ sono sottospazi, ma $(1,0)+(0,1)=(1,1)$ non appartiene né a $W_1$ né a $W_2$: l'unione non è chiusa rispetto alla somma.

---

## 9. Applicazioni reali

**Segnali e filtri digitali.** Nell'elaborazione del segnale, l'insieme dei segnali periodici con frequenza fissa è uno spazio vettoriale. Sommare due segnali sinusoidali della stessa frequenza dà ancora un segnale della stessa frequenza. I filtri lineari sfruttano questa struttura: il segnale filtrato è la proiezione del segnale originale su un sottospazio.

**Machine learning.** In regressione lineare, l'insieme di tutte le predizioni possibili $\hat{\mathbf{y}}=X\boldsymbol{\beta}$ (al variare di $\boldsymbol{\beta}$) è esattamente lo spazio delle colonne $C(X)$. La soluzione ai minimi quadrati è la proiezione ortogonale di $\mathbf{y}$ su $C(X)$. Comprendere questo sottospazio è comprendere cosa il modello può e non può predire.

**Meccanica quantistica.** Lo stato di un sistema quantistico è un vettore in uno spazio (di Hilbert, generalizzazione infinito-dimensionale). Il principio di sovrapposizione — che stati distinti possono combinarsi — è precisamente la struttura lineare dello spazio vettoriale. I sottospazi corrispondono agli "osservabili" e alle misure.

---

## 10. Riepilogo

| Concetto | Definizione chiave | Esempio in $\mathbb{R}^3$ |
| --- | --- | --- |
| Spazio vettoriale | Insieme chiuso per somma e scalatura, con 8 assiomi | $\mathbb{R}^3$ stesso |
| Sottospazio | Sottoinsieme con $\mathbf{0}$, chiuso per somma e scalatura | Piano $z=0$ |
| Span | Tutte le combinazioni lineari di vettori dati | Span di $(1,0,0),(0,1,0)$ = piano $z=0$ |
| Spazio delle colonne | $C(A)=\{A\mathbf{x}\}$ | Varia con $A$ |
| Nucleo | $N(A)=\{A\mathbf{x}=\mathbf{0}\}$ | Varia con $A$ |
| Non-sottospazio | Non contiene $\mathbf{0}$, o non chiuso | $\{x+y=1\}$, primo quadrante |

---

## 11. Esercizi

<details><summary>Esercizio 1 — Verifica sottospazio: retta omogenea</summary>

**Testo.** Verificare se $W=\{(x,y)\in\mathbb{R}^2: 3x-2y=0\}$ è un sottospazio di $\mathbb{R}^2$.

**Soluzione:**

Passo 1 — Zero: $3(0)-2(0)=0$ ✓.

Passo 2 — Somma: se $3x_1-2y_1=0$ e $3x_2-2y_2=0$, allora $3(x_1+x_2)-2(y_1+y_2)=0+0=0$ ✓.

Passo 3 — Scalatura: se $3x-2y=0$ e $c\in\mathbb{R}$, allora $3(cx)-2(cy)=c(3x-2y)=0$ ✓.

$W$ è un sottospazio. È la retta $y=\tfrac{3}{2}x$, che passa per l'origine.

</details>

<details><summary>Esercizio 2 — Non è un sottospazio</summary>

**Testo.** L'insieme $W=\{(x,y)\in\mathbb{R}^2: x^2+y^2\leq 1\}$ (disco unitario) è un sottospazio?

**Soluzione:**

Il vettore zero appartiene a $W$: $0^2+0^2=0\leq 1$ ✓.

Ma consideriamo $(1,0)\in W$ e $c=3$: $c(1,0)=(3,0)$ e $9+0=9>1$, quindi $(3,0)\notin W$.

$W$ non è chiuso rispetto alla scalatura: non è un sottospazio.

</details>

<details><summary>Esercizio 3 — Span in ℝ³</summary>

**Testo.** Determinare $\text{span}\{(1,1,0),(0,1,1)\}$ in $\mathbb{R}^3$.

**Soluzione:**

Ogni elemento dello span ha forma $a(1,1,0)+b(0,1,1)=(a,\,a+b,\,b)$.

Poniamo $x=a$, $y=a+b$, $z=b$: allora $y=x+z$. Lo span è il piano $\{(x,y,z): y=x+z\}$, un sottospazio 2-dimensionale di $\mathbb{R}^3$ (passa per l'origine con equazione $x-y+z=0$).

</details>

<details><summary>Esercizio 4 — Nucleo di una matrice</summary>

**Testo.** Trovare $N(A)$ per $A=\begin{pmatrix}1&-1&2\\2&-2&4\end{pmatrix}$.

**Soluzione:**

La seconda riga è $2\times$ la prima. Unica equazione: $x_1-x_2+2x_3=0$, cioè $x_1=x_2-2x_3$.

Variabili libere: $x_2=s$, $x_3=t$. Allora $x_1=s-2t$.

$$N(A) = s\begin{pmatrix}1\\1\\0\end{pmatrix}+t\begin{pmatrix}-2\\0\\1\end{pmatrix}, \quad s,t\in\mathbb{R}$$

$N(A)$ è un piano (sottospazio 2-dimensionale) in $\mathbb{R}^3$.

</details>

<details><summary>Esercizio 5 — Spazio delle colonne</summary>

**Testo.** Descrivere $C(A)$ per $A=\begin{pmatrix}1&2&3\\0&1&1\end{pmatrix}$.

**Soluzione:**

Le colonne di $A$ sono $\mathbf{c}_1=(1,0)^T$, $\mathbf{c}_2=(2,1)^T$, $\mathbf{c}_3=(3,1)^T$. Verifichiamo se $\mathbf{c}_3$ è combinazione di $\mathbf{c}_1$ e $\mathbf{c}_2$: $\mathbf{c}_3=\mathbf{c}_1+\mathbf{c}_2$ ✓.

$C(A)=\text{span}\{(1,0)^T,(2,1)^T\}$. Questi due vettori non sono proporzionali, quindi $C(A)=\mathbb{R}^2$.

</details>

<details><summary>Esercizio 6 — Polinomi come sottospazio</summary>

**Testo.** Verificare che $P_2\subseteq P_3$ è un sottospazio di $P_3$.

**Soluzione:**

$P_2$ = polinomi di grado $\leq 2$; $P_3$ = polinomi di grado $\leq 3$.

Zero: il polinomio nullo ha grado $-\infty < 2$: appartiene a $P_2$ ✓.

Somma: se $p,q\in P_2$ (grado $\leq 2$), allora $p+q$ ha grado $\leq 2$, quindi $p+q\in P_2$ ✓.

Scalatura: se $p\in P_2$ e $c\in\mathbb{R}$, allora $cp$ ha grado $\leq 2$ ✓.

$P_2$ è un sottospazio di $P_3$.

</details>

<details><summary>Esercizio 7 — Intersezione di sottospazi</summary>

**Testo.** Dati $W_1=\{(x,y,z): x+y=0\}$ e $W_2=\{(x,y,z): y+z=0\}$, trovare $W_1\cap W_2$.

**Soluzione:**

$W_1\cap W_2 = \{(x,y,z): x+y=0 \text{ e } y+z=0\}$.

Da $x+y=0$: $x=-y$. Da $y+z=0$: $z=-y$. Variabile libera $y=t$:

$$W_1\cap W_2 = \text{span}\{(-1,1,-1)\}$$

È una retta per l'origine in $\mathbb{R}^3$: un sottospazio 1-dimensionale.

</details>

<details><summary>Esercizio 8 — Unione di sottospazi</summary>

**Testo.** Dimostrare che $W_1\cup W_2$ con $W_1=\{(x,0):x\in\mathbb{R}\}$ e $W_2=\{(0,y):y\in\mathbb{R}\}$ non è un sottospazio di $\mathbb{R}^2$.

**Soluzione:**

$W_1$ (asse $x$) e $W_2$ (asse $y$) sono entrambi sottospazi.

Consideriamo $(1,0)\in W_1\subseteq W_1\cup W_2$ e $(0,1)\in W_2\subseteq W_1\cup W_2$.

La loro somma $(1,1)$ non appartiene a $W_1$ (perché $1\neq 0$) né a $W_2$ (perché $1\neq 0$): $(1,1)\notin W_1\cup W_2$.

$W_1\cup W_2$ non è chiuso rispetto alla somma: non è un sottospazio.

</details>
