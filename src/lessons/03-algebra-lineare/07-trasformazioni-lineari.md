---
id: algebra-07-trasformazioni-lineari
subject: algebra-lineare
topic_it: Spazi vettoriali
topic_en: Vector spaces
title_it: Trasformazioni lineari
title_en: Linear transformations
level: blue
order: 7
source_book: "G. Strang, Introduction to Linear Algebra; MIT OCW 18.06"
source_chapter: "Cap. 3–8 — Trasformazioni lineari"
stato: da-rielaborare
---

## 1. Intuizione — Funzioni che rispettano la struttura

Pensa a un prisma di vetro che scompone la luce bianca in colori. Ogni raggio entra e viene deviato, ma la struttura rimane coerente: due raggi paralleli restano paralleli dopo il prisma, e la loro sovrapposizione si comporta come previsto. Il prisma è una **funzione lineare** della luce.

In matematica, una **trasformazione lineare** è una funzione tra spazi vettoriali che "rispetta" le due operazioni fondamentali: somma e scalatura. Se prendi due vettori, li sommi e poi applichi la trasformazione, ottieni lo stesso risultato che se le applicassi prima separatamente e poi sommassI. È la funzione più "gentile" possibile rispetto alla struttura lineare.

Ogni matrice definisce una trasformazione lineare. Ma il punto di vista della trasformazione è più potente: ti permette di ragionare su geometria (rotazioni, riflessioni, proiezioni), su sistemi di equazioni e su cambi di base con un unico linguaggio unificato.

---

## 2. Prerequisiti

- Spazi vettoriali e sottospazi: span, nucleo, base.
- Indipendenza lineare e dimensione: teorema rango-nullità.
- Moltiplicazione di matrici: $A\mathbf{x}$, composizione $BA$.
- Sistemi lineari: eliminazione gaussiana, soluzione generale.

---

## 3. Teoria — Definizioni formali

### Trasformazione lineare

Una funzione $T\colon V\to W$ tra spazi vettoriali è una **trasformazione lineare** (TL) se per ogni $\mathbf{u},\mathbf{v}\in V$ e $c\in\mathbb{R}$:

$$T(\mathbf{u}+\mathbf{v}) = T(\mathbf{u})+T(\mathbf{v}) \qquad \text{(additività)}$$

$$T(c\,\mathbf{v}) = c\,T(\mathbf{v}) \qquad \text{(omogeneità)}$$

Equivalentemente (in un'unica condizione): $T(\alpha\mathbf{u}+\beta\mathbf{v})=\alpha T(\mathbf{u})+\beta T(\mathbf{v})$.

**Proprietà immediata:** $T(\mathbf{0}_V)=\mathbf{0}_W$.

*Dimostrazione:* $T(\mathbf{0})=T(0\cdot\mathbf{v})=0\cdot T(\mathbf{v})=\mathbf{0}$.

### Matrice associata

Ogni TL $T\colon\mathbb{R}^n\to\mathbb{R}^m$ è **univocamente** rappresentata da una matrice $A\in\mathbb{R}^{m\times n}$:

$$T(\mathbf{x}) = A\mathbf{x}$$

La $j$-esima colonna di $A$ è $T(\mathbf{e}_j)$ (immagine del $j$-esimo vettore della base canonica):

$$A = \bigl[\;T(\mathbf{e}_1)\;\big|\;T(\mathbf{e}_2)\;\big|\;\cdots\;\big|\;T(\mathbf{e}_n)\;\bigr]$$

Conoscere l'azione di $T$ su una base determina completamente $T$.

### Nucleo e immagine

**Nucleo:** $\ker(T)=\{\mathbf{v}\in V: T(\mathbf{v})=\mathbf{0}_W\}$ — è un sottospazio di $V$.

**Immagine:** $\text{Im}(T)=\{T(\mathbf{v}):\mathbf{v}\in V\}$ — è un sottospazio di $W$.

Per $T(\mathbf{x})=A\mathbf{x}$: $\ker(T)=N(A)$ e $\text{Im}(T)=C(A)$.

### Teorema rango-nullità

$$\dim(\ker T)+\dim(\text{Im}\,T) = \dim(V)$$

In termini matriciali: $\dim(N(A))+\text{rk}(A)=n$ (numero di colonne).

### Iniettività, suriettività, isomorfismo

| Proprietà | Definizione | Condizione matriciale |
| --- | --- | --- |
| Iniettiva | $T(\mathbf{u})=T(\mathbf{v})\Rightarrow\mathbf{u}=\mathbf{v}$ | $\ker(T)=\{\mathbf{0}\}$, rk $=n$ |
| Suriettiva | $\text{Im}(T)=W$ | rk $=m$ |
| Isomorfismo | Biiettiva (iniettiva e suriettiva) | $A$ invertibile, $m=n$, det $\neq 0$ |

### Trasformazioni geometriche fondamentali

| Trasformazione | Matrice in $\mathbb{R}^2$ |
| --- | --- |
| Rotazione di $\theta$ | $\begin{pmatrix}\cos\theta & -\sin\theta \\ \sin\theta & \cos\theta\end{pmatrix}$ |
| Riflessione rispetto all'asse $x$ | $\begin{pmatrix}1 & 0 \\ 0 & -1\end{pmatrix}$ |
| Riflessione rispetto all'asse $y$ | $\begin{pmatrix}-1 & 0 \\ 0 & 1\end{pmatrix}$ |
| Riflessione rispetto a $y=x$ | $\begin{pmatrix}0 & 1 \\ 1 & 0\end{pmatrix}$ |
| Proiezione sull'asse $x$ | $\begin{pmatrix}1 & 0 \\ 0 & 0\end{pmatrix}$ |
| Scalatura di fattore $k$ | $\begin{pmatrix}k & 0 \\ 0 & k\end{pmatrix}$ |

### Composizione

Se $T\colon U\to V$ e $S\colon V\to W$ sono TL, la composizione $S\circ T\colon U\to W$ è lineare. A livello matriciale:

$$S\circ T \;\leftrightarrow\; BA \quad \text{(prodotto }\mathit{B}\cdot\mathit{A}\text{, attenzione all'ordine!)}$$

---

## 4. Derivazione — Il nucleo è un sottospazio

**Teorema.** Se $T\colon V\to W$ è una TL, allora $\ker(T)$ è un sottospazio di $V$.

**Passo 1 — Zero.** $T(\mathbf{0}_V)=\mathbf{0}_W$ (mostrato sopra), quindi $\mathbf{0}_V\in\ker(T)$. $\checkmark$

**Passo 2 — Somma.** Siano $\mathbf{u},\mathbf{v}\in\ker(T)$, cioè $T(\mathbf{u})=\mathbf{0}$ e $T(\mathbf{v})=\mathbf{0}$.

$$T(\mathbf{u}+\mathbf{v}) = T(\mathbf{u})+T(\mathbf{v}) = \mathbf{0}+\mathbf{0} = \mathbf{0}$$

Quindi $\mathbf{u}+\mathbf{v}\in\ker(T)$. $\checkmark$

**Passo 3 — Scalatura.** Sia $\mathbf{v}\in\ker(T)$ e $c\in\mathbb{R}$.

$$T(c\,\mathbf{v}) = c\,T(\mathbf{v}) = c\,\mathbf{0} = \mathbf{0}$$

Quindi $c\,\mathbf{v}\in\ker(T)$. $\checkmark$

**Conclusione.** $\ker(T)$ è un sottospazio di $V$. $\blacksquare$

**Corollario.** $T$ è iniettiva $\iff$ $\ker(T)=\{\mathbf{0}\}$.

*Dimostrazione:* Se $T(\mathbf{u})=T(\mathbf{v})$, allora $T(\mathbf{u}-\mathbf{v})=\mathbf{0}$, quindi $\mathbf{u}-\mathbf{v}\in\ker(T)$. Se $\ker(T)=\{\mathbf{0}\}$, allora $\mathbf{u}=\mathbf{v}$: $T$ è iniettiva. Viceversa, se $T$ è iniettiva e $T(\mathbf{v})=\mathbf{0}=T(\mathbf{0})$, allora $\mathbf{v}=\mathbf{0}$. $\blacksquare$

---

## 5. Esempi

**Esempio 1 — Riflessione rispetto all'asse $x$.**

$T(x,y)=(x,-y)$. $T(\mathbf{e}_1)=(1,0)$, $T(\mathbf{e}_2)=(0,-1)$.

$$A=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$$

Verifica linearità: $T(3(1,2)+(-1)(0,1))=T(3,5)=(3,-5)=3(1,-2)+(-1)(0,-1)=(3,-6)+(0,1)=(3,-5)$ ✓.

**Esempio 2 — Proiezione sull'asse $x$.**

$T(x,y)=(x,0)$. Matrice $A=\begin{pmatrix}1&0\\0&0\end{pmatrix}$.

$\ker(T)=\{(0,y):y\in\mathbb{R}\}=$ asse $y$. $\text{Im}(T)=\{(x,0)\}=$ asse $x$. $\dim(\ker T)+\dim(\text{Im}\,T)=1+1=2$ ✓.

**Esempio 3 — Rotazione di $\pi/2$.**

$T(\mathbf{e}_1)=(0,1)$, $T(\mathbf{e}_2)=(-1,0)$.

$$R_{\pi/2}=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$$

$R_{\pi/2}$ è un isomorfismo ($\det=1\neq 0$): $\ker=\{\mathbf{0}\}$, $\text{Im}=\mathbb{R}^2$.

**Esempio 4 — Nucleo e immagine di una TL non quadrata.**

$T\colon\mathbb{R}^3\to\mathbb{R}^2$, $T(x,y,z)=(x+y,\;y+z)$.

$A=\begin{pmatrix}1&1&0\\0&1&1\end{pmatrix}$. $\text{rk}(A)=2$, quindi $\dim(N(A))=1$.

$N(A)$: $x+y=0$ e $y+z=0 \Rightarrow x=-y$, $z=-y$. Base: $\{(-1,1,-1)\}$.

$\text{Im}(T)$: rk $=2$, quindi $\text{Im}(T)=\mathbb{R}^2$ ($T$ è suriettiva ma non iniettiva).

**Esempio 5 — Composizione di rotazioni.**

$R_\alpha$ e $R_\beta$ rotazioni in $\mathbb{R}^2$. $R_\beta\circ R_\alpha = R_{\alpha+\beta}$ (si verifica con il prodotto matriciale e le formule di addizione per $\cos$ e $\sin$).

$$R_{\pi/2}\circ R_{\pi/2} = R_{\pi} = \begin{pmatrix}-1&0\\0&-1\end{pmatrix}$$

Verifica: $\begin{pmatrix}0&-1\\1&0\end{pmatrix}^2=\begin{pmatrix}-1&0\\0&-1\end{pmatrix}$ ✓.

**Esempio 6 — Matrice di una TL da $P_1$ a $P_2$.**

$D\colon P_1\to P_1$ definita da $D(a+bx)=b$ (derivata). In base $\{1,x\}$:

$D(1)=0$, $D(x)=1$.

Matrice: $\begin{pmatrix}0&1\end{pmatrix}$ (in quanto $D:P_1\to\mathbb{R}$ punta in $\mathbb{R}$ = $P_0$).

$\ker(D)=\{a: a\in\mathbb{R}\}=P_0$ (costanti). $\text{Im}(D)=\mathbb{R}=P_0$.

**Esempio 7 — TL non rappresentabile da moltiplicazione sinistra?**

$T\colon\mathbb{R}^2\to\mathbb{R}^2$, $T(x,y)=(x+1,y)$ NON è lineare: $T(\mathbf{0})=(1,0)\neq\mathbf{0}$.

Le traslazioni non sono TL (a meno di usare coordinate omogenee in $\mathbb{R}^3$).

**Esempio 8 — Cambio di base di una TL.**

$T\colon\mathbb{R}^2\to\mathbb{R}^2$ con matrice $A=\begin{pmatrix}2&1\\0&3\end{pmatrix}$ nella base canonica. Nella base $\mathcal{B}=\{(1,1),(1,0)\}$, la matrice di $T$ è $B=P^{-1}AP$ dove $P=\begin{pmatrix}1&1\\1&0\end{pmatrix}$. Il cambio di base non cambia la TL, solo la sua rappresentazione matriciale.

---

## 6. Grafico — Rotazione e riflessione come TL

```plot
{"title":"Riflessione (y=-x) vs retta identità (y=x): due TL di ℝ²","fn":"-1*x","fn2":"1*x","domain":[-3,3],"yDomain":[-3,3],"label1":"y = -x (riflessione)","label2":"y = x (identità)"}
```

La retta $y=x$ rappresenta il "non fare nulla" (identità). La retta $y=-x$ è la riflessione rispetto all'asse $x$ applicata alla bisettrice: ogni punto $(t,t)$ diventa $(t,-t)$.

---

## 7. Slider — Scalatura come TL

```slider
{"title":"Scalatura T(x,y) = k·y: effetto dello scalare k sulla componente y","fn":"a*x","domain":[-3,3],"yDomain":[-6,6],"pname":"a","pmin":-3,"pmax":3,"pdefault":1,"pstep":0.1,"plabel":"scalare k","label1":"k·x (uscita scalata)"}
```

Muovi $k$: per $k=1$ la TL è l'identità; per $k=0$ è la proiezione sull'asse $x$ (annulla la componente); per $k=-1$ è la riflessione. La linearità si vede chiaramente: l'output è sempre proporzionale all'input.

---

## 8. Errori comuni

**Errore 1 — Dimenticare di verificare $T(\mathbf{0})=\mathbf{0}$.**
È la prima cosa da controllare. Se la funzione non manda $\mathbf{0}$ in $\mathbf{0}$, non è lineare. Esempio: $T(x)=x+1$ fallisce subito.

**Errore 2 — Confondere la matrice di $T$ con la matrice trasposta.**
La $j$-esima colonna di $A$ è $T(\mathbf{e}_j)$, non la $j$-esima riga.

**Errore 3 — Invertire l'ordine nella composizione.**
$S\circ T$ corrisponde a $BA$ (prima $A$, poi $B$). Scrivere $AB$ invece di $BA$ è un errore frequente che porta a risultati sbagliati.

**Errore 4 — Credere che tutte le funzioni tra $\mathbb{R}^n$ siano lineari.**
$f(x,y)=x^2+y^2$, $g(x,y)=\sin(x)$, traslazioni: nessuna di queste è lineare.

**Errore 5 — Confondere iniettività con suriettività.**
Una TL $T\colon\mathbb{R}^3\to\mathbb{R}^2$ non può essere iniettiva (ker deve contenere almeno un vettore non nullo per il teorema rango-nullità: $3-\text{rk}\geq 1$). Una TL $T\colon\mathbb{R}^2\to\mathbb{R}^3$ non può essere suriettiva.

**Errore 6 — Pensare che la matrice associata dipenda dalla scelta della base.**
La TL è unica come funzione; la sua rappresentazione matriciale dipende dalla base scelta. Cambio di base $\Rightarrow$ matrice simile $B=P^{-1}AP$, stessa TL.

---

## 9. Applicazioni reali

**Computer grafica e modellazione 3D.** Ogni rotazione, scalatura, riflessione e proiezione in grafica è una trasformazione lineare. I motori grafici (OpenGL, DirectX) rappresentano lo stato di una scena come sequenze di moltiplicazioni di matrici $4\times 4$ (coordinate omogenee). La composizione di trasformazioni corrisponde al prodotto matriciale, applicato nell'ordine corretto.

**Risonanza magnetica e tomografia (CT).** La trasformata di Radon — il fondamento matematico delle ricostruzioni CT — è una trasformazione lineare che mappa funzioni 2D in funzioni 1D (le proiezioni). Invertirla (problema inverso) equivale a trovare la TL inversa. Il nucleo della trasformata diretta rappresenta informazione irrecuperabile.

**Apprendimento automatico — layer lineari.** Ogni strato lineare di una rete neurale esegue $\mathbf{y}=A\mathbf{x}+\mathbf{b}$ (affine, non lineare per la traslazione $\mathbf{b}$, ma spesso analizzato come TL per il termine $A\mathbf{x}$). La backpropagation calcola i gradienti attraverso il prodotto della Jacobiana — essenzialmente moltiplicazione di matrici di TL composte.

---

## 10. Riepilogo

| Concetto | Definizione | Esempio |
| --- | --- | --- |
| TL | $T(\alpha\mathbf{u}+\beta\mathbf{v})=\alpha T(\mathbf{u})+\beta T(\mathbf{v})$ | Rotazione, proiezione |
| Matrice associata | $j$-esima colonna $= T(\mathbf{e}_j)$ | $R_\theta=\begin{pmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{pmatrix}$ |
| Nucleo | $\ker(T)=\{\mathbf{v}:T(\mathbf{v})=\mathbf{0}\}$, sottospazio di $V$ | Proiezione su asse $x$: $\ker=$ asse $y$ |
| Immagine | $\text{Im}(T)$, sottospazio di $W$ | Proiezione su asse $x$: Im $=$ asse $x$ |
| Rango-nullità | $\dim\ker+\dim\text{Im}=\dim V$ | $\mathbb{R}^3\to\mathbb{R}^2$: $1+2=3$ |
| Iniettiva | $\ker=\{\mathbf{0}\}$ | Rotazione ($\ker=\{\mathbf{0}\}$) |
| Suriettiva | $\text{Im}=W$ | $\mathbb{R}^3\to\mathbb{R}^2$ con rk $2$ |
| Isomorfismo | Biiettiva, $A$ invertibile | $R_\theta$ è isomorfismo |
| Composizione | $S\circ T\leftrightarrow BA$ | $R_\beta\circ R_\alpha=R_{\alpha+\beta}$ |

---

## 11. Esercizi

<details><summary>Esercizio 1 — Linearità o no?</summary>

**Testo.** Verificare se $T\colon\mathbb{R}^2\to\mathbb{R}^2$ definita da $T(x,y)=(2x+y,\;x-y)$ è una TL.

**Soluzione:**

Verifica additività: $T((x_1,y_1)+(x_2,y_2))=T(x_1+x_2,y_1+y_2)=(2(x_1+x_2)+(y_1+y_2),(x_1+x_2)-(y_1+y_2))$.

$T(x_1,y_1)+T(x_2,y_2)=(2x_1+y_1+2x_2+y_2,\;x_1-y_1+x_2-y_2)$. Uguale ✓.

Verifica omogeneità: $T(cx,cy)=(2cx+cy,cx-cy)=c(2x+y,x-y)=cT(x,y)$ ✓.

$T$ è lineare. Matrice: $A=\begin{pmatrix}2&1\\1&-1\end{pmatrix}$.

</details>

<details><summary>Esercizio 2 — Matrice di una TL</summary>

**Testo.** Trovare la matrice della riflessione rispetto alla retta $y=x$ in $\mathbb{R}^2$.

**Soluzione:**

$T(\mathbf{e}_1)=T(1,0)=(0,1)$: il punto $(1,0)$ riflesso rispetto a $y=x$ diventa $(0,1)$.

$T(\mathbf{e}_2)=T(0,1)=(1,0)$.

$$A=\begin{pmatrix}0&1\\1&0\end{pmatrix}$$

Verifica: $A^2=I$ (riflettere due volte = identità) ✓.

</details>

<details><summary>Esercizio 3 — Nucleo e immagine</summary>

**Testo.** Per $T\colon\mathbb{R}^4\to\mathbb{R}^3$ con matrice $A=\begin{pmatrix}1&2&0&1\\0&0&1&2\\1&2&1&3\end{pmatrix}$, trovare $\ker T$ e $\text{Im}\,T$.

**Soluzione:**

$R_3-R_1-R_2\to(0,0,0,0)$: rk$(A)=2$.

Pivot: colonne 1 e 3. Variabili libere: $x_2=s$, $x_4=t$.

Da $R_1$: $x_1=-2s-t$. Da $R_2$: $x_3=-2t$.

$\ker T = s\begin{pmatrix}-2\\1\\0\\0\end{pmatrix}+t\begin{pmatrix}-1\\0\\-2\\1\end{pmatrix}$, dim $=2$.

$\text{Im}(T)=C(A)=\text{span}\left\{\begin{pmatrix}1\\0\\1\end{pmatrix},\begin{pmatrix}0\\1\\1\end{pmatrix}\right\}$, dim $=2$.

Verifica: $2+2=4=\dim(\mathbb{R}^4)$ ✓.

</details>

<details><summary>Esercizio 4 — Composizione di TL</summary>

**Testo.** Siano $T\colon\mathbb{R}^2\to\mathbb{R}^2$ la riflessione rispetto all'asse $y$ e $S\colon\mathbb{R}^2\to\mathbb{R}^2$ la proiezione sull'asse $x$. Trovare la matrice di $S\circ T$.

**Soluzione:**

$A_T=\begin{pmatrix}-1&0\\0&1\end{pmatrix}$ (riflessione rispetto all'asse $y$).

$A_S=\begin{pmatrix}1&0\\0&0\end{pmatrix}$ (proiezione sull'asse $x$).

$$A_{S\circ T}=A_S\cdot A_T=\begin{pmatrix}1&0\\0&0\end{pmatrix}\begin{pmatrix}-1&0\\0&1\end{pmatrix}=\begin{pmatrix}-1&0\\0&0\end{pmatrix}$$

$(S\circ T)(x,y)=(-x,0)$: prima si riflette ($(x,y)\to(-x,y)$), poi si proietta ($(- x,y)\to(-x,0)$).

</details>

<details><summary>Esercizio 5 — TL iniettiva?</summary>

**Testo.** La TL $T\colon\mathbb{R}^3\to\mathbb{R}^3$ con $A=\begin{pmatrix}1&2&1\\0&1&1\\1&1&0\end{pmatrix}$ è iniettiva?

**Soluzione:**

Calcoliamo $\det(A)$: sviluppo lungo la prima colonna:

$\det(A)=1\det\begin{pmatrix}1&1\\1&0\end{pmatrix}-0+1\det\begin{pmatrix}2&1\\1&1\end{pmatrix}=1(0-1)+1(2-1)=-1+1=0$.

$\det(A)=0$: $A$ non è invertibile, $\ker(T)\neq\{\mathbf{0}\}$. $T$ **non è iniettiva**.

</details>

<details><summary>Esercizio 6 — Rotazione</summary>

**Testo.** Trovare la matrice della rotazione di $\pi/4$ e applicarla a $(1,0)$.

**Soluzione:**

$$R_{\pi/4}=\begin{pmatrix}\cos(\pi/4)&-\sin(\pi/4)\\\sin(\pi/4)&\cos(\pi/4)\end{pmatrix}=\begin{pmatrix}\frac{\sqrt{2}}{2}&-\frac{\sqrt{2}}{2}\\\frac{\sqrt{2}}{2}&\frac{\sqrt{2}}{2}\end{pmatrix}$$

$R_{\pi/4}(1,0)^T=\left(\frac{\sqrt{2}}{2},\frac{\sqrt{2}}{2}\right)^T$: il vettore $(1,0)$ viene ruotato di $45°$ verso la bisettrice $y=x$.

</details>

<details><summary>Esercizio 7 — TL suriettiva?</summary>

**Testo.** $T\colon\mathbb{R}^2\to\mathbb{R}^3$ con $A=\begin{pmatrix}1&0\\0&1\\1&1\end{pmatrix}$ è suriettiva?

**Soluzione:**

rk$(A)=2$ (le prime due righe danno 2 pivot). $\text{Im}(T)$ ha dimensione 2.

Ma $W=\mathbb{R}^3$ ha dimensione 3. $\text{Im}(T)\subsetneq\mathbb{R}^3$: $T$ **non è suriettiva**.

Questo è atteso: una TL $\mathbb{R}^2\to\mathbb{R}^3$ non può essere suriettiva perché $\dim(\text{Im})\leq\dim(\mathbb{R}^2)=2<3$.

</details>

<details><summary>Esercizio 8 — TL sui polinomi</summary>

**Testo.** $T\colon P_2\to P_2$ definita da $T(p)(x)=p(x)+p'(x)$. Trovare la matrice di $T$ nella base $\{1,x,x^2\}$.

**Soluzione:**

$T(1)=1+0=1 \to (1,0,0)^T$.

$T(x)=x+1 \to (1,1,0)^T$.

$T(x^2)=x^2+2x \to (0,2,1)^T$.

$$A_T=\begin{pmatrix}1&1&0\\0&1&2\\0&0&1\end{pmatrix}$$

$\det(A_T)=1\neq 0$: $T$ è un isomorfismo di $P_2$ in sé stesso.

</details>
