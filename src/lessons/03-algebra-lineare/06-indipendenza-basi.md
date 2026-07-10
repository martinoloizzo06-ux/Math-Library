---
id: algebra-06-indipendenza-basi
subject: algebra-lineare
topic_it: Spazi vettoriali
topic_en: Vector spaces
title_it: Indipendenza lineare, basi e dimensione
title_en: Linear independence, bases, and dimension
level: blue
order: 6
source_book: "G. Strang, Introduction to Linear Algebra; MIT OCW 18.06"
source_chapter: "Cap. 3 — Basi e dimensione"
---

## 1. Intuizione — Le informazioni non ridondanti

Immagina di descrivere una posizione in una città usando tre indicazioni: "nord", "est" e "nord-est". La terza indicazione (nord-est) è ridondante: puoi ottenerla combinando le prime due. Un sistema di navigazione intelligente userebbe solo le direzioni davvero indipendenti — quelle che non si possono ricavare dalle altre.

Questo è il concetto di **indipendenza lineare**: un insieme di vettori è indipendente se nessuno di essi è "spiegabile" come combinazione degli altri. Una **base** è esattamente un insieme minimo di vettori indipendenti che basta per descrivere l'intero spazio — il kit essenziale, senza ridondanze.

La **dimensione** di uno spazio è semplicemente il numero di elementi di qualsiasi base: è un numero invariante, non dipende dalla scelta della base. Questa è una delle affermazioni più potenti dell'algebra lineare.

---

## 2. Prerequisiti

- Spazi vettoriali e sottospazi (lezione precedente): definizione, span, nucleo.
- Combinazioni lineari: $c_1\mathbf{v}_1+\cdots+c_k\mathbf{v}_k$.
- Eliminazione gaussiana: riduzione a scalini, pivot e variabili libere.
- Rango di una matrice: numero di pivot dopo la riduzione.

---

## 3. Teoria — Definizioni formali

### Indipendenza lineare

I vettori $\mathbf{v}_1,\ldots,\mathbf{v}_k\in V$ sono **linearmente indipendenti (LI)** se l'unica soluzione di

$$c_1\mathbf{v}_1+c_2\mathbf{v}_2+\cdots+c_k\mathbf{v}_k = \mathbf{0}$$

è la soluzione banale $c_1=c_2=\cdots=c_k=0$.

Sono **linearmente dipendenti (LD)** se esiste una soluzione non banale: almeno un $c_i\neq 0$, il che significa che $\mathbf{v}_i$ può essere scritto come combinazione lineare degli altri.

**Criterio matriciale.** Disponiamo i vettori come colonne di $A\in\mathbb{R}^{m\times k}$. Allora:

$$\mathbf{v}_1,\ldots,\mathbf{v}_k \text{ sono LI} \iff N(A)=\{\mathbf{0}\} \iff \text{rk}(A)=k$$

### Base

Una **base** di $V$ è un insieme $\mathcal{B}=\{\mathbf{b}_1,\ldots,\mathbf{b}_n\}$ tale che:

1. I vettori sono linearmente indipendenti.
2. Generano $V$: ogni $\mathbf{v}\in V$ si scrive come combinazione lineare di $\mathcal{B}$.

**Equivalenze:** sono basi di $V$ (di dimensione $n$) esattamente gli insiemi di $n$ vettori che soddisfano una delle seguenti condizioni equivalenti:

| Condizione | Significato |
| --- | --- |
| LI e generatori | Definizione diretta |
| LI con $n$ elementi | Automaticamente generano $V$ |
| Generatori con $n$ elementi | Automaticamente LI |
| Nucleo banale e immagine piena della matrice associata | Criterio matriciale |

**Base canonica di $\mathbb{R}^n$:**

$$\mathbf{e}_1=\begin{pmatrix}1\\0\\\vdots\\0\end{pmatrix}, \quad \mathbf{e}_2=\begin{pmatrix}0\\1\\\vdots\\0\end{pmatrix}, \quad \ldots, \quad \mathbf{e}_n=\begin{pmatrix}0\\0\\\vdots\\1\end{pmatrix}$$

### Dimensione

**Teorema fondamentale.** Tutte le basi di uno spazio vettoriale $V$ hanno lo stesso numero di elementi. Questo numero è la **dimensione** $\dim(V)$.

$$\dim(\mathbb{R}^n)=n, \quad \dim(P_n)=n+1, \quad \dim(M_{m,n})=m\cdot n$$

**Teorema di esistenza della base.** Ogni spazio vettoriale finitamente generato ha una base (ottenibile estraendo un sottoinsieme LI massimale da un insieme di generatori).

### Coordinate

In una base $\mathcal{B}=\{\mathbf{b}_1,\ldots,\mathbf{b}_n\}$, ogni $\mathbf{w}\in V$ si scrive in modo **unico**:

$$\mathbf{w} = c_1\mathbf{b}_1+c_2\mathbf{b}_2+\cdots+c_n\mathbf{b}_n$$

I coefficienti $[\mathbf{w}]_{\mathcal{B}}=(c_1,\ldots,c_n)$ sono le **coordinate di $\mathbf{w}$ rispetto a $\mathcal{B}$**. L'unicità è garantita dall'indipendenza lineare.

### Rango e teorema rango-nullità

Per una matrice $A\in\mathbb{R}^{m\times n}$:

$$\text{rk}(A) = \dim(C(A)) = \dim(C(A^T))$$

$$\dim(N(A)) = n - \text{rk}(A) \quad \text{(nullità)}$$

$$\boxed{\text{rk}(A) + \dim(N(A)) = n}$$

---

## 4. Derivazione — Unicità della dimensione

**Teorema.** Se $\mathcal{B}=\{\mathbf{b}_1,\ldots,\mathbf{b}_n\}$ è una base di $V$ e $\mathcal{C}=\{\mathbf{c}_1,\ldots,\mathbf{c}_m\}$ è un'altra base, allora $m=n$.

**Dimostrazione (sketch per scambio).**

**Passo 1.** Poiché $\mathcal{B}$ è una base, genera $V$: possiamo scrivere ogni $\mathbf{c}_j=\sum_i a_{ij}\mathbf{b}_i$.

**Passo 2.** Supponiamo $m>n$. I vettori $\mathbf{c}_1,\ldots,\mathbf{c}_m$ sono $m$ combinazioni lineari di $n<m$ vettori. Il sistema $\sum_j \lambda_j\mathbf{c}_j=\mathbf{0}$ ha $m$ incognite e si riduce a $n$ equazioni: poiché $m>n$, esiste una soluzione non banale, contraddicendo l'indipendenza di $\mathcal{C}$.

**Passo 3.** Per simmetria, $n>m$ porta allo stesso assurdo con $\mathcal{B}$ e $\mathcal{C}$ scambiate.

**Conclusione.** $m=n$. $\blacksquare$

**Corollario pratico:** in $\mathbb{R}^n$
- $k>n$ vettori sono sempre LD.
- $k<n$ vettori non possono generare $\mathbb{R}^n$.
- Esattamente $n$ vettori LI formano una base di $\mathbb{R}^n$.

---

## 5. Esempi

**Esempio 1 — LI in $\mathbb{R}^2$.**

$(1,2)$ e $(3,1)$: formiamo $A=\begin{pmatrix}1&3\\2&1\end{pmatrix}$. $\det(A)=1-6=-5\neq 0$, quindi $\text{rk}(A)=2$: i vettori sono LI e formano una base di $\mathbb{R}^2$.

**Esempio 2 — LD in $\mathbb{R}^2$.**

$(2,4)$ e $(1,2)$: $(2,4)=2(1,2)$. Dipendenza immediata. Il sistema $c_1(2,4)+c_2(1,2)=\mathbf{0}$ ha soluzione $c_1=1,c_2=-2$: non banale.

**Esempio 3 — Verifica LI con eliminazione gaussiana.**

Vettori $(1,2,0)$, $(0,1,3)$, $(1,0,-6)$ in $\mathbb{R}^3$:

$$A=\begin{pmatrix}1&2&0\\0&1&3\\1&0&-6\end{pmatrix} \xrightarrow{R_3-R_1} \begin{pmatrix}1&2&0\\0&1&3\\0&-2&-6\end{pmatrix} \xrightarrow{R_3+2R_2} \begin{pmatrix}1&2&0\\0&1&3\\0&0&0\end{pmatrix}$$

Solo 2 pivot su 3 colonne: $\text{rk}(A)=2<3$, i vettori sono **LD**. Il terzo è $\mathbf{v}_3=\mathbf{v}_1-2\mathbf{v}_2$ (si ricava da $N(A)$).

**Esempio 4 — Base di un piano in $\mathbb{R}^3$.**

Il piano $x+y+z=0$ ha equazione omogenea: $x=-y-z$. Variabili libere $y=s$, $z=t$:

$$\mathbf{v}=(-y-z,y,z)=s(-1,1,0)+t(-1,0,1)$$

Base: $\{(-1,1,0),(-1,0,1)\}$, dimensione 2. Verifica LI: i due vettori non sono proporzionali ✓.

**Esempio 5 — Nucleo e sua base.**

$A=\begin{pmatrix}1&1&2\\2&2&4\end{pmatrix}$. Riduzione: $R_2-2R_1\to(0,0,0)$. Unica equazione: $x_1+x_2+2x_3=0$. Variabili libere $x_2=s$, $x_3=t$: $x_1=-s-2t$.

$$N(A)=\text{span}\left\{\begin{pmatrix}-1\\1\\0\end{pmatrix},\begin{pmatrix}-2\\0\\1\end{pmatrix}\right\}, \quad \dim(N(A))=2=3-1 \checkmark$$

**Esempio 6 — Coordinate rispetto a una base non canonica.**

Base $\mathcal{B}=\{(2,1),(1,1)\}$ in $\mathbb{R}^2$. Trovare le coordinate di $(5,1)$.

$c_1(2,1)+c_2(1,1)=(5,1)$ dà il sistema $2c_1+c_2=5$, $c_1+c_2=1$. Sottraendo: $c_1=4$, $c_2=-3$.

$[(5,1)]_{\mathcal{B}}=(4,-3)$. Verifica: $4(2,1)+(-3)(1,1)=(8-3,4-3)=(5,1)$ ✓.

**Esempio 7 — Base di $P_2$.**

$\{1,x,x^2\}$ è la base canonica di $P_2$. Verifica: $c_0\cdot 1+c_1\cdot x+c_2\cdot x^2=0$ per ogni $x$ implica $c_0=c_1=c_2=0$ ✓. Generano $P_2$ ✓. Quindi $\dim(P_2)=3$.

**Esempio 8 — Rango e nullità.**

$A=\begin{pmatrix}1&2&3&4\\0&1&2&3\\0&0&0&1\end{pmatrix}\in\mathbb{R}^{3\times 4}$. Tre pivot (colonne 1, 2, 4): $\text{rk}(A)=3$. Quindi $\dim(N(A))=4-3=1$: il nucleo è una retta (una variabile libera, colonna 3).

---

## 6. Grafico — Vettori LI vs LD in $\mathbb{R}^2$

```plot
{"title":"LI: (1,0) e (0,1) — base canonica; LD: (2,0) è multiplo di (1,0)","fn":"0*x","fn2":"1*x+0","domain":[-3,3],"yDomain":[-2,2],"label1":"asse x (v₁)","label2":"bisettrice (v₂)"}
```

La retta orizzontale e la bisettrice non sono proporzionali: sono LI e formano una base di $\mathbb{R}^2$. Due rette coincidenti (o parallele all'origine) rappresenterebbero vettori LD.

---

## 7. Slider — Combinazione lineare e dipendenza

```slider
{"title":"c·(1,2) + (3,1): al variare di c, vedi quando i vettori sono proporzionali","fn":"2*a","domain":[-3,3],"yDomain":[-7,7],"pname":"a","pmin":-3,"pmax":3,"pdefault":1,"pstep":0.1,"plabel":"scalare c","label1":"componente y di c·(1,2)"}
```

Lo slider mostra come la componente $y$ di $c\cdot(1,2)$ varia linearmente. Due vettori $(1,2)$ e $(k,2k)$ sono LD per qualsiasi $k$: la retta $y=2x$ non "ruota" mai, è sempre la stessa direzione.

---

## 8. Errori comuni

**Errore 1 — Confondere LI con "non paralleli".**
In $\mathbb{R}^3$, tre vettori non paralleli a coppie possono comunque essere LD: es. $(1,0,0)$, $(0,1,0)$ e $(1,1,0)$ — il terzo è somma dei primi due.

**Errore 2 — Pensare che una base sia "la" base.**
Ogni spazio vettoriale ha infinite basi diverse. La base canonica è solo la più comoda; ogni insieme di $n$ vettori LI che genera lo spazio è una base valida.

**Errore 3 — Confondere rango con numero di righe o colonne.**
Una matrice $3\times 5$ può avere rango al più 3 (numero di righe). Il rango non dipende dal numero di righe/colonne ma dal numero di pivot effettivi.

**Errore 4 — Dimenticare che il vettore zero non può far parte di una base.**
$\mathbf{0}$ rende qualsiasi insieme LD: $1\cdot\mathbf{0}=\mathbf{0}$ è già una combinazione lineare non banale uguale a zero.

**Errore 5 — Credere che LI implichi generare lo spazio.**
$(1,0,0)$ è un vettore LI in $\mathbb{R}^3$, ma non genera $\mathbb{R}^3$. Servono esattamente $\dim(V)$ vettori LI per avere una base.

**Errore 6 — Errori nel calcolo del rango: confondere righe nulle con pivot.**
Dopo la riduzione a scalini, una riga di zeri NON è un pivot. Il rango è il numero di righe non nulle nella forma a scalini.

---

## 9. Applicazioni reali

**Compressione dei dati e PCA.** L'analisi delle componenti principali (PCA) trova una nuova base per i dati in cui le prime $k$ direzioni catturano la massima varianza. I dati originali in $\mathbb{R}^n$ vengono proiettati su un sottospazio $k$-dimensionale ($k\ll n$): è una riduzione di base. Le $k$ direzioni principali formano una base ortogonale del sottospazio più "significativo".

**Sistemi di equazioni differenziali.** Le soluzioni di $\mathbf{y}'=A\mathbf{y}$ formano uno spazio vettoriale di dimensione $n$ (se $A$ è $n\times n$). Trovare la soluzione generale equivale a trovare una base di questo spazio soluzione. L'indipendenza lineare delle soluzioni è verificata tramite il Wronskiano (un determinante).

**Grafica 3D e computer vision.** Rappresentare trasformazioni geometriche (rotazioni, scale, traslazioni omogenee) in $\mathbb{R}^4$ con matrici $4\times 4$ sfrutta basi e coordinate. La scelta della base influenza la precisione numerica: basi mal condizionate (vettori quasi LD) causano errori di arrotondamento amplificati.

---

## 10. Riepilogo

| Concetto | Definizione | Esempio |
| --- | --- | --- |
| Vettori LI | $\sum c_i\mathbf{v}_i=\mathbf{0}\Rightarrow$ tutti $c_i=0$ | $(1,0)$ e $(0,1)$ in $\mathbb{R}^2$ |
| Vettori LD | Esiste soluzione non banale | $(1,2)$ e $(2,4)$: dipendenti |
| Base | LI + generatori | $\{(1,0),(0,1)\}$ base canonica di $\mathbb{R}^2$ |
| Dimensione | Numero di elementi di qualsiasi base | $\dim(\mathbb{R}^3)=3$ |
| Coordinate | Rappresentazione unica in una base | $[(5,1)]_{\mathcal{B}}=(4,-3)$ |
| Rango | Numero di pivot = $\dim(C(A))$ | $A\in\mathbb{R}^{3\times 4}$, rk $\leq 3$ |
| Nullità | $n-\text{rk}(A)=\dim(N(A))$ | rk $=2$, $n=3$ → nullità $=1$ |

---

## 11. Esercizi

<details><summary>Esercizio 1 — LI o LD?</summary>

**Testo.** Verificare se $(1,0,1)$, $(2,1,0)$, $(0,1,-2)$ sono LI in $\mathbb{R}^3$.

**Soluzione:**

$$A=\begin{pmatrix}1&2&0\\0&1&1\\1&0&-2\end{pmatrix} \xrightarrow{R_3-R_1} \begin{pmatrix}1&2&0\\0&1&1\\0&-2&-2\end{pmatrix} \xrightarrow{R_3+2R_2} \begin{pmatrix}1&2&0\\0&1&1\\0&0&0\end{pmatrix}$$

Solo 2 pivot: $\text{rk}(A)=2<3$, i vettori sono **LD**. Il terzo è $\mathbf{v}_3=-2\mathbf{v}_1+2\mathbf{v}_2$ (dalla soluzione di $N(A)$: si ricava $c_3=t$, $c_2=-t$, $c_1=2t$ con $t=1$).

</details>

<details><summary>Esercizio 2 — Base di un nucleo</summary>

**Testo.** Trovare una base di $N(A)$ per $A=\begin{pmatrix}1&2&3\\2&4&6\end{pmatrix}$.

**Soluzione:**

$R_2-2R_1\to(0,0,0)$. Unica equazione: $x_1+2x_2+3x_3=0$.

Variabili libere: $x_2=s$, $x_3=t$. Allora $x_1=-2s-3t$.

$$N(A) = s\begin{pmatrix}-2\\1\\0\end{pmatrix}+t\begin{pmatrix}-3\\0\\1\end{pmatrix}$$

Base di $N(A)$: $\left\{\begin{pmatrix}-2\\1\\0\end{pmatrix},\begin{pmatrix}-3\\0\\1\end{pmatrix}\right\}$. Dimensione 2. Verifica: $1-1=2-2=3-1$ no — ma $\text{rk}(A)=1$, nullità $=3-1=2$ ✓.

</details>

<details><summary>Esercizio 3 — Coordinate rispetto a una base</summary>

**Testo.** Trovare le coordinate di $p(x)=3+2x-x^2$ nella base $\mathcal{B}=\{1+x,\,x+x^2,\,1+x^2\}$ di $P_2$.

**Soluzione:**

Risolviamo $c_1(1+x)+c_2(x+x^2)+c_3(1+x^2)=3+2x-x^2$.

Termini costanti: $c_1+c_3=3$.
Termini in $x$: $c_1+c_2=2$.
Termini in $x^2$: $c_2+c_3=-1$.

Dalla prima: $c_3=3-c_1$. Dalla seconda: $c_2=2-c_1$. Sostituendo nella terza: $(2-c_1)+(3-c_1)=-1 \Rightarrow 5-2c_1=-1 \Rightarrow c_1=3$.

Quindi $c_2=-1$, $c_3=0$. Coordinate: $(3,-1,0)_{\mathcal{B}}$.

Verifica: $3(1+x)+(-1)(x+x^2)+0=3+3x-x-x^2=3+2x-x^2$ ✓.

</details>

<details><summary>Esercizio 4 — Rango e nullità</summary>

**Testo.** Per $A=\begin{pmatrix}1&0&2&1\\0&1&-1&2\\2&1&3&4\end{pmatrix}$, calcolare $\text{rk}(A)$ e $\dim(N(A))$.

**Soluzione:**

$$\xrightarrow{R_3-2R_1} \begin{pmatrix}1&0&2&1\\0&1&-1&2\\0&1&-1&2\end{pmatrix} \xrightarrow{R_3-R_2} \begin{pmatrix}1&0&2&1\\0&1&-1&2\\0&0&0&0\end{pmatrix}$$

Due pivot (colonne 1 e 2): $\text{rk}(A)=2$. $\dim(N(A))=4-2=2$.

Variabili libere: $x_3=s$, $x_4=t$. Da $R_2$: $x_2=x_3-2x_4=s-2t$. Da $R_1$: $x_1=-2x_3-x_4=-2s-t$.

Base di $N(A)$: $\left\{\begin{pmatrix}-2\\1\\1\\0\end{pmatrix},\begin{pmatrix}-1\\-2\\0\\1\end{pmatrix}\right\}$.

</details>

<details><summary>Esercizio 5 — Estendere a una base</summary>

**Testo.** Estendere $\{(1,1,0),(0,1,1)\}$ a una base di $\mathbb{R}^3$.

**Soluzione:**

Dobbiamo trovare un terzo vettore LI dai due dati. Proviamo $(1,0,0)$:

$$\det\begin{pmatrix}1&0&1\\1&1&0\\0&1&0\end{pmatrix} = 1(0-0)-0+1(1-0)=1\neq 0$$

I tre vettori sono LI: $\{(1,1,0),(0,1,1),(1,0,0)\}$ è una base di $\mathbb{R}^3$.

</details>

<details><summary>Esercizio 6 — Dimensione di un sottospazio</summary>

**Testo.** Trovare la dimensione del sottospazio $W=\{(x,y,z,w)\in\mathbb{R}^4: x+y=0,\; z+w=0\}$.

**Soluzione:**

Da $y=-x$ e $w=-z$, con variabili libere $x=s$ e $z=t$:

$$W = s(1,-1,0,0)+t(0,0,1,-1)$$

$\dim(W)=2$. Base: $\{(1,-1,0,0),(0,0,1,-1)\}$.

</details>

<details><summary>Esercizio 7 — LI di funzioni</summary>

**Testo.** Verificare che $\{e^x, e^{2x}, e^{3x}\}$ sono LI come funzioni in $C(\mathbb{R})$.

**Soluzione:**

Supponiamo $c_1 e^x + c_2 e^{2x} + c_3 e^{3x} = 0$ per ogni $x$. Dividiamo per $e^x$:

$c_1 + c_2 e^x + c_3 e^{2x} = 0$ per ogni $x$.

Valutando in $x=0$: $c_1+c_2+c_3=0$. Derivando e valutando in $x=0$: $c_2+2c_3=0$. Derivando ancora e valutando in $x=0$: $2c_3=0 \Rightarrow c_3=0$.

Risalendo: $c_2=0$, $c_1=0$. Le funzioni sono **LI**.

</details>

<details><summary>Esercizio 8 — Cambio di base</summary>

**Testo.** Dato $\mathbf{v}=(3,5)$ in coordinate canoniche, trovare le sue coordinate nella base $\mathcal{B}=\{(1,2),(1,1)\}$.

**Soluzione:**

Sistema: $c_1(1,2)+c_2(1,1)=(3,5)$.

$c_1+c_2=3$ e $2c_1+c_2=5$. Sottraendo la prima dalla seconda: $c_1=2$, $c_2=1$.

$[(3,5)]_{\mathcal{B}}=(2,1)$. Verifica: $2(1,2)+1(1,1)=(2+1,4+1)=(3,5)$ ✓.

</details>
