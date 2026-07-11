---
id: algebra-09-autovalori-autovettori
subject: algebra-lineare
topic_it: Autovalori e diagonalizzazione
topic_en: Eigenvalues and diagonalization
title_it: Autovalori e autovettori
title_en: Eigenvalues and eigenvectors
level: blue
order: 9
source_book: "G. Strang, Introduction to Linear Algebra; MIT OCW 18.06"
source_chapter: "Cap. 6 — Autovalori"
stato: da-rielaborare
---

## 1. Intuizione

Immagina di avere una trasformazione lineare — una matrice che ruota, scala, riflette i vettori nello spazio. La maggior parte dei vettori cambia direzione dopo la trasformazione. Ma esistono direzioni speciali che rimangono invariate: i vettori lungo quelle direzioni vengono solo allungati o compressi, mai ruotati. Queste sono le direzioni degli **autovettori**.

Pensa a una matrice che modella la crescita di una popolazione: alcune combinazioni di variabili crescono esponenzialmente secondo un certo ritmo (l'autovalore), mentre altre decrescono. Trovare questi modi propri è la chiave per capire il comportamento a lungo termine del sistema.

Un altro esempio: la deformazione elastica di un materiale. Esistono direzioni privilegiate (le direzioni principali di deformazione) lungo le quali il materiale si allunga o si comprime senza torcersi. Queste sono le direzioni degli autovettori della matrice di deformazione.

Formalmente: una matrice $A$ moltiplica un autovettore $\mathbf{v}$ e restituisce $\lambda\mathbf{v}$ — lo stesso vettore, solo scalato dal fattore $\lambda$.

## 2. Prerequisiti

- Moltiplicazione matriciale $A\mathbf{v}$
- Determinante di una matrice: $\det(A)$
- Sistemi lineari omogenei $(A - \lambda I)\mathbf{v} = \mathbf{0}$
- Nucleo (kernel) di una matrice: $\ker(A)$
- Polinomi e le loro radici

## 3. Teoria

**Definizione.** Sia $A \in \mathbb{R}^{n \times n}$. Un vettore non nullo $\mathbf{v} \in \mathbb{R}^n$ è un **autovettore** di $A$ con **autovalore** $\lambda \in \mathbb{C}$ se:

$$A\mathbf{v} = \lambda\mathbf{v}$$

Geometricamente: $A$ trasforma $\mathbf{v}$ in un suo multiplo scalare. La direzione di $\mathbf{v}$ è preservata (o invertita se $\lambda < 0$).

**Come trovare gli autovalori.** Riscriviamo:

$$A\mathbf{v} = \lambda\mathbf{v} \iff (A - \lambda I)\mathbf{v} = \mathbf{0}$$

Poiché $\mathbf{v} \neq \mathbf{0}$, il sistema deve avere soluzioni non banali, quindi la matrice $(A - \lambda I)$ deve essere singolare:

$$\det(A - \lambda I) = 0$$

**Polinomio caratteristico.** La funzione:

$$p(\lambda) = \det(A - \lambda I)$$

è un polinomio di grado $n$ in $\lambda$, chiamato **polinomio caratteristico** di $A$. I suoi zeri (reali o complessi) sono gli autovalori.

**Autospazio.** Per ogni autovalore $\lambda_0$, l'**autospazio associato** è il nucleo di $(A - \lambda_0 I)$:

$$V_{\lambda_0} = \ker(A - \lambda_0 I) = \{\mathbf{v} \in \mathbb{R}^n : A\mathbf{v} = \lambda_0 \mathbf{v}\}$$

L'autospazio è sempre un sottospazio non banale (almeno 1-dimensionale). Ogni multiplo non nullo di un autovettore è ancora un autovettore.

**Molteplicità.** Per un autovalore $\lambda_0$:
- **Molteplicità algebrica** $m_a$: il numero di volte che $\lambda_0$ compare come radice di $p(\lambda)$.
- **Molteplicità geometrica** $m_g = \dim(V_{\lambda_0})$: la dimensione dell'autospazio.

Vale sempre $1 \leq m_g \leq m_a$.

**Proprietà fondamentali.**
- $\text{tr}(A) = \sum_{i=1}^n \lambda_i$ (somma degli autovalori = traccia).
- $\det(A) = \prod_{i=1}^n \lambda_i$ (prodotto degli autovalori = determinante).
- Autovettori relativi ad autovalori **distinti** sono linearmente indipendenti.
- Una matrice simmetrica $A = A^T$ ha autovalori **reali** e autovettori di autovalori diversi **ortogonali**.
- Se $\lambda$ è autovalore di $A$, allora $\lambda^k$ è autovalore di $A^k$.

## 4. Derivazione

**Dimostrazione che autovettori di autovalori distinti sono LI.**

Siano $\mathbf{v}_1, \ldots, \mathbf{v}_k$ autovettori con autovalori distinti $\lambda_1, \ldots, \lambda_k$. Supponiamo per assurdo che siano linearmente dipendenti e sia $m$ il minimo numero di autovettori in una relazione di dipendenza:

$$c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \cdots + c_m\mathbf{v}_m = \mathbf{0} \quad (*)$$

con $c_1 \neq 0$. Moltiplichiamo $(*)$ per $A$:

$$c_1\lambda_1\mathbf{v}_1 + c_2\lambda_2\mathbf{v}_2 + \cdots + c_m\lambda_m\mathbf{v}_m = \mathbf{0} \quad (**)$$

Sottraiamo $(*)$ moltiplicata per $\lambda_m$:

$$c_1(\lambda_1 - \lambda_m)\mathbf{v}_1 + c_2(\lambda_2 - \lambda_m)\mathbf{v}_2 + \cdots + c_{m-1}(\lambda_{m-1}-\lambda_m)\mathbf{v}_{m-1} = \mathbf{0}$$

Questa è una relazione di dipendenza con $m-1$ autovettori, contraddicendo la minimalità di $m$. Dunque gli autovettori sono linearmente indipendenti. $\square$

## 5. Esempi

**Esempio 1 — Matrice $2 \times 2$ con autovalori distinti.**

$$A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$$

Polinomio caratteristico:

$$p(\lambda) = \det\begin{pmatrix} 4-\lambda & 1 \\ 2 & 3-\lambda \end{pmatrix} = (4-\lambda)(3-\lambda) - 2 = \lambda^2 - 7\lambda + 10 = (\lambda-2)(\lambda-5)$$

**Per $\lambda_1 = 2$:** $(A - 2I)\mathbf{v} = \mathbf{0}$:

$$\begin{pmatrix} 2 & 1 \\ 2 & 1 \end{pmatrix}\mathbf{v} = \mathbf{0} \implies 2v_1 + v_2 = 0 \implies \mathbf{v}_1 = \begin{pmatrix} 1 \\ -2 \end{pmatrix}$$

**Per $\lambda_2 = 5$:** $(A - 5I)\mathbf{v} = \mathbf{0}$:

$$\begin{pmatrix} -1 & 1 \\ 2 & -2 \end{pmatrix}\mathbf{v} = \mathbf{0} \implies v_1 = v_2 \implies \mathbf{v}_2 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$$

Verifica: $A\mathbf{v}_1 = (4-2, 2-6) = (2,-4) = 2(1,-2) = 2\mathbf{v}_1$. ✓

---

**Esempio 2 — Matrice triangolare.**

$$A = \begin{pmatrix} 3 & 5 & 7 \\ 0 & 2 & 4 \\ 0 & 0 & 1 \end{pmatrix}$$

Per una matrice triangolare il determinante è il prodotto degli elementi diagonali:

$$p(\lambda) = (3-\lambda)(2-\lambda)(1-\lambda)$$

Autovalori: $\lambda_1 = 3$, $\lambda_2 = 2$, $\lambda_3 = 1$. Gli autovalori di una matrice triangolare sono esattamente gli elementi della diagonale.

---

**Esempio 3 — Uso di traccia e determinante.**

Per $A = \begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix}$ (matrice $2\times 2$):

$$\text{tr}(A) = 2 = \lambda_1 + \lambda_2, \qquad \det(A) = 1 - 4 = -3 = \lambda_1\lambda_2$$

Il polinomio caratteristico è $p(\lambda) = \lambda^2 - 2\lambda - 3 = (\lambda-3)(\lambda+1)$.

Autovalori: $\lambda_1 = 3$, $\lambda_2 = -1$.

Verifica: $3 + (-1) = 2 = \text{tr}(A)$ ✓, $3 \cdot (-1) = -3 = \det(A)$ ✓.

---

**Esempio 4 — Autovettori ortogonali (matrice simmetrica).**

$$A = \begin{pmatrix} 3 & 1 \\ 1 & 3 \end{pmatrix}$$

$p(\lambda) = (\lambda-3)^2 - 1 = (\lambda-2)(\lambda-4)$, quindi $\lambda_1 = 2$, $\lambda_2 = 4$.

Per $\lambda_1 = 2$: autovettore $\mathbf{v}_1 = (1, -1)/\sqrt{2}$.
Per $\lambda_2 = 4$: autovettore $\mathbf{v}_2 = (1, 1)/\sqrt{2}$.

Verifica: $\mathbf{v}_1 \cdot \mathbf{v}_2 = \frac{1}{\sqrt{2}}\frac{1}{\sqrt{2}} + \frac{-1}{\sqrt{2}}\frac{1}{\sqrt{2}} = 0$. Ortogonali! ✓

---

**Esempio 5 — Autovalore nullo e nucleo.**

$$A = \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$$

$\det(A) = 4 - 4 = 0$, quindi $\lambda = 0$ è autovalore. Il nucleo di $A$ è l'autospazio per $\lambda = 0$.

$A\mathbf{v} = \mathbf{0}$: $v_1 + 2v_2 = 0$, autovettore $\mathbf{v} = (2, -1)$.

Secondo autovalore: $\text{tr}(A) = 5 = 0 + \lambda_2$, quindi $\lambda_2 = 5$.

---

**Esempio 6 — Sistema dinamico: iterazioni di $A^k$.**

Se $A\mathbf{v} = \lambda\mathbf{v}$, allora $A^k\mathbf{v} = \lambda^k\mathbf{v}$.

Consideriamo il vettore iniziale $\mathbf{x}_0 = \mathbf{v}_1 + \mathbf{v}_2$ (combinazione di autovettori con $\lambda_1 = 3$, $\lambda_2 = 0.5$).

Dopo $k$ passi: $A^k\mathbf{x}_0 = 3^k\mathbf{v}_1 + 0.5^k\mathbf{v}_2$.

Per $k$ grande: la componente lungo $\mathbf{v}_2$ svanisce, il sistema è dominato dall'autovettore con $\lvert\lambda\rvert$ massimo.

---

**Esempio 7 — Autovalori complessi.**

$$A = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$$

Questa è una rotazione di 90°. $p(\lambda) = \lambda^2 + 1 = 0$ dà $\lambda = \pm i$ (immaginari puri).

Non esistono autovettori reali: nessuna direzione reale è preservata da una rotazione di 90°. Gli autovettori sono in $\mathbb{C}^2$.

---

**Esempio 8 — Potenza tramite autovalori.**

Con $A$ da Esempio 1 ($\lambda_1=2$, $\lambda_2=5$), calcolare $A^{100}$:

$$A^{100} = P\begin{pmatrix}2^{100}&0\\0&5^{100}\end{pmatrix}P^{-1}$$

Il termine $5^{100}$ domina completamente. Senza diagonalizzazione, calcolare $A^{100}$ direttamente richiederebbe 99 moltiplicazioni matriciali.

## 6. Grafico

```plot
{"title":"Sistema dinamico: dominanza dell'autovalore maggiore","fn":"Math.pow(3,x/10)","fn2":"Math.pow(0.7,x/10)","domain":[0,30],"yDomain":[0,20],"label1":"componente λ=3 (domina)","label2":"componente λ=0.7 (decade)"}
```

## 7. Slider interattivo

```slider
{"title":"Potenza di un autovalore: λᵏ al variare di λ","fn":"Math.pow(a,x)","domain":[0,10],"yDomain":[-0.5,8],"pname":"a","pmin":0.5,"pmax":1.5,"pdefault":1.1,"pstep":0.05,"plabel":"autovalore λ","label1":"λˣ (traiettoria)"}
```

## 8. Errori comuni

**Errore 1 — Confondere autovalore e autovettore.** L'equazione $A\mathbf{v} = \lambda\mathbf{v}$: $\lambda$ è uno scalare, $\mathbf{v}$ è un vettore non nullo. Scrivere "$\lambda$ è il vettore" o "$\mathbf{v}$ è lo scalare" è concettualmente sbagliato.

**Errore 2 — Dimenticare $\mathbf{v} \neq \mathbf{0}$.** Il vettore zero soddisfa $A\mathbf{0} = \lambda\mathbf{0}$ per qualsiasi $\lambda$: per questo il vettore zero non è mai un autovettore per convenzione.

**Errore 3 — Calcolare mal il polinomio caratteristico.** La formula per una $2\times 2$ è $p(\lambda) = \lambda^2 - \text{tr}(A)\lambda + \det(A)$. Errori frequenti: sbagliare il segno della traccia o del determinante.

**Errore 4 — Pensare che $m_g = m_a$ sempre.** La molteplicità geometrica può essere strettamente minore di quella algebrica (esempio: matrice di Jordan $\begin{pmatrix}2&1\\0&2\end{pmatrix}$ ha $m_a=2$ ma $m_g=1$).

**Errore 5 — Normalizzare gli autovettori quando non richiesto.** Gli autovettori sono definiti a meno di un fattore scalare non nullo. Qualsiasi multiplo non nullo è valido. La normalizzazione serve solo quando si costruisce una base ortonormale.

**Errore 6 — Supporre che autovettori diversi siano sempre ortogonali.** Questo vale solo per matrici simmetriche. Per matrici generali, autovettori di autovalori distinti sono linearmente indipendenti ma non necessariamente ortogonali.

**Errore 7 — Risolvere $(A - \lambda I)\mathbf{v} = \mathbf{0}$ usando Cramer.** Il sistema è sempre singolare (per design!), quindi Cramer non si applica. Usare l'eliminazione gaussiana e parametrizzare il nucleo.

## 9. Applicazioni reali

**Meccanica vibrazionale.** Le equazioni del moto di un sistema con $n$ gradi di libertà si scrivono $M\ddot{\mathbf{x}} + K\mathbf{x} = \mathbf{0}$, dove $M$ è la matrice delle masse e $K$ quella delle rigidezze. Cercando soluzioni del tipo $\mathbf{x}(t) = \mathbf{v}e^{i\omega t}$, si ottiene il problema agli autovalori generalizzato $K\mathbf{v} = \omega^2 M\mathbf{v}$. Gli autovalori $\omega^2$ danno le frequenze naturali di vibrazione, e gli autovettori le forme modali: i modi in cui la struttura può vibrare liberamente. Ponti, aerei e grattacieli vengono progettati in modo che queste frequenze siano lontane dalle frequenze delle forze esterne (vento, traffico), per evitare la risonanza.

**Google PageRank.** L'algoritmo di Google modella il web come una catena di Markov: la matrice di transizione $A$ ha una voce $A_{ij}$ che rappresenta la probabilità di spostarsi dalla pagina $j$ alla pagina $i$. Il vettore PageRank è l'**autovettore principale** di $A$ (corrispondente all'autovalore 1). Trovare questo autovettore — per miliardi di pagine — è uno dei più grandi calcoli di autovettori nella storia dell'informatica. Il metodo delle potenze ($\mathbf{x}_{k+1} = A\mathbf{x}_k$, normalizzato) converge proprio all'autovettore dominante.

**Analisi delle componenti principali (PCA).** Dato un dataset con $n$ osservazioni in $p$ dimensioni, la matrice di covarianza $C \in \mathbb{R}^{p\times p}$ è simmetrica. I suoi autovettori (le **componenti principali**) indicano le direzioni di massima varianza nei dati. Proiettando i dati lungo i primi $k$ autovettori si ottiene la migliore rappresentazione in $k$ dimensioni — fondamentale in machine learning, compressione di immagini e bioinformatica.

## 10. Riepilogo

| Concetto | Definizione / Formula |
| --- | --- |
| Autovalore e autovettore | $A\mathbf{v} = \lambda\mathbf{v}$, $\mathbf{v}\neq\mathbf{0}$ |
| Polinomio caratteristico | $p(\lambda) = \det(A - \lambda I)$ |
| Autospazio | $V_{\lambda_0} = \ker(A - \lambda_0 I)$ |
| Molteplicità algebrica $m_a$ | molteplicità di $\lambda_0$ come radice di $p(\lambda)$ |
| Molteplicità geometrica $m_g$ | $\dim(V_{\lambda_0})$ |
| Relazione | $1 \leq m_g \leq m_a$ |
| Traccia | $\text{tr}(A) = \sum \lambda_i$ |
| Determinante | $\det(A) = \prod \lambda_i$ |
| Matrice simmetrica | autovalori reali, autovettori ortogonali |
| Autovettori di $A^k$ | stessi di $A$, autovalori $\lambda^k$ |

## 11. Esercizi

<details>
<summary>Esercizio 1 — Calcolo completo autovalori e autovettori</summary>

Trovare autovalori e autovettori di $A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$.

**Soluzione:**

$p(\lambda) = (4-\lambda)(3-\lambda) - 2 = \lambda^2 - 7\lambda + 10 = (\lambda-2)(\lambda-5)$.

**Per $\lambda_1 = 2$:** sistema $(A-2I)\mathbf{v}=\mathbf{0}$: $2v_1+v_2=0$. Autovettore: $\mathbf{v}_1 = (1,-2)$.

**Per $\lambda_2 = 5$:** sistema $(A-5I)\mathbf{v}=\mathbf{0}$: $-v_1+v_2=0$, cioè $v_1=v_2$. Autovettore: $\mathbf{v}_2 = (1,1)$.

Verifica: $\text{tr}(A)=7=2+5$ ✓, $\det(A)=10=2\cdot5$ ✓.

</details>

<details>
<summary>Esercizio 2 — Matrice triangolare</summary>

Trovare gli autovalori di $A = \begin{pmatrix} 5 & 3 & 1 \\ 0 & -2 & 7 \\ 0 & 0 & 4 \end{pmatrix}$.

**Soluzione:**

Per una matrice triangolare (superiore o inferiore), il polinomio caratteristico è:

$$p(\lambda) = (5-\lambda)(-2-\lambda)(4-\lambda)$$

Autovalori: $\lambda_1 = 5$, $\lambda_2 = -2$, $\lambda_3 = 4$.

Verifica: $\text{tr}(A) = 5 + (-2) + 4 = 7 = 5 + (-2) + 4$ ✓.

</details>

<details>
<summary>Esercizio 3 — Uso di traccia e determinante</summary>

Per $A = \begin{pmatrix} 6 & 2 \\ 2 & 3 \end{pmatrix}$, trovare gli autovalori usando le relazioni con traccia e determinante.

**Soluzione:**

$\text{tr}(A) = 9 = \lambda_1 + \lambda_2$ e $\det(A) = 18 - 4 = 14 = \lambda_1\lambda_2$.

$p(\lambda) = \lambda^2 - 9\lambda + 14 = (\lambda - 7)(\lambda - 2)$.

Autovalori: $\lambda_1 = 7$, $\lambda_2 = 2$.

</details>

<details>
<summary>Esercizio 4 — Autovettori di matrice simmetrica</summary>

Trovare autovalori e autovettori di $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$ e verificarne l'ortogonalità.

**Soluzione:**

$p(\lambda) = (\lambda-2)^2 - 1 = (\lambda-1)(\lambda-3)$.

Per $\lambda_1 = 1$: $(A-I)\mathbf{v}=\mathbf{0}$: $v_1 + v_2 = 0$. Autovettore: $\mathbf{v}_1 = (1,-1)/\sqrt{2}$.

Per $\lambda_2 = 3$: $(A-3I)\mathbf{v}=\mathbf{0}$: $-v_1 + v_2 = 0$, cioè $v_1=v_2$. Autovettore: $\mathbf{v}_2 = (1,1)/\sqrt{2}$.

Ortogonalità: $\mathbf{v}_1 \cdot \mathbf{v}_2 = \frac{1}{\sqrt{2}}\frac{1}{\sqrt{2}} - \frac{1}{\sqrt{2}}\frac{1}{\sqrt{2}} = 0$. ✓

</details>

<details>
<summary>Esercizio 5 — Autovalore zero e rango</summary>

Mostrare che $A = \begin{pmatrix} 2 & -6 \\ -1 & 3 \end{pmatrix}$ ha autovalore $\lambda = 0$ e trovare il relativo autovettore.

**Soluzione:**

$\det(A) = 6 - 6 = 0$, quindi $\lambda = 0$ è autovalore.

$(A - 0\cdot I)\mathbf{v} = A\mathbf{v} = \mathbf{0}$: equazione $2v_1 - 6v_2 = 0$, cioè $v_1 = 3v_2$.

Autovettore: $\mathbf{v} = (3, 1)$.

Il secondo autovalore: $\text{tr}(A) = 5 = 0 + \lambda_2$, quindi $\lambda_2 = 5$.

</details>

<details>
<summary>Esercizio 6 — Potenza di matrice via autovalori</summary>

Con $A = \begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix}$ (autovalori $\lambda_1=3$, $\lambda_2=-1$), verificare che $A^2\mathbf{v}_1 = 9\mathbf{v}_1$ dove $\mathbf{v}_1 = (1,1)$.

**Soluzione:**

$A\mathbf{v}_1 = \begin{pmatrix}1+2\\2+1\end{pmatrix} = \begin{pmatrix}3\\3\end{pmatrix} = 3\mathbf{v}_1$ ✓.

$A^2\mathbf{v}_1 = A(3\mathbf{v}_1) = 3A\mathbf{v}_1 = 3\cdot 3\mathbf{v}_1 = 9\mathbf{v}_1 = 3^2\mathbf{v}_1$ ✓.

In generale: $A^k\mathbf{v}_i = \lambda_i^k\mathbf{v}_i$.

</details>

<details>
<summary>Esercizio 7 — Autovettori LI di autovalori distinti</summary>

Verificare che $\mathbf{v}_1=(1,-2)$ e $\mathbf{v}_2=(1,1)$ (autovettori di $\lambda_1=2$ e $\lambda_2=5$) sono LI.

**Soluzione:**

Supponiamo $c_1(1,-2) + c_2(1,1) = (0,0)$:

$$c_1 + c_2 = 0 \quad \text{e} \quad -2c_1 + c_2 = 0$$

Dalla seconda: $c_2 = 2c_1$. Sostituendo nella prima: $3c_1 = 0$, quindi $c_1 = 0$ e $c_2 = 0$.

I vettori sono LI. Il determinante della matrice $\begin{pmatrix}1&1\\-2&1\end{pmatrix}$ vale $3 \neq 0$, confermando l'indipendenza.

</details>

<details>
<summary>Esercizio 8 — Sistema dinamico</summary>

Un sistema evolve secondo $\mathbf{x}_{k+1} = A\mathbf{x}_k$ con $A = \begin{pmatrix}1.2&0\\0&0.8\end{pmatrix}$ e $\mathbf{x}_0 = (1,1)^T$. Descrivere il comportamento per $k \to \infty$.

**Soluzione:**

$A$ è diagonale: autovalori $\lambda_1 = 1.2 > 1$ e $\lambda_2 = 0.8 < 1$.

$\mathbf{x}_k = A^k\mathbf{x}_0 = \begin{pmatrix}1.2^k\\0.8^k\end{pmatrix}$.

Per $k \to \infty$: la prima componente cresce esponenzialmente ($1.2^k \to \infty$), la seconda decade a zero ($0.8^k \to 0$).

Il sistema diverge lungo la direzione dell'autovettore con $\lvert\lambda\rvert > 1$.

</details>
