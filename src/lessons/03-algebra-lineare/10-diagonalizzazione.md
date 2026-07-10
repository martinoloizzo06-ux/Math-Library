---
id: algebra-10-diagonalizzazione
subject: algebra-lineare
topic_it: Autovalori e diagonalizzazione
topic_en: Eigenvalues and diagonalization
title_it: Diagonalizzazione di matrici
title_en: Matrix diagonalization
level: blue
order: 10
source_book: "G. Strang, Introduction to Linear Algebra; MIT OCW 18.06"
source_chapter: "Cap. 6 — Diagonalizzazione"
---

## 1. Intuizione

Una matrice diagonale è la più semplice che esiste: per moltiplicarla basta moltiplicare ogni componente per il corrispondente valore sulla diagonale. Non ci sono interazioni tra componenti diverse.

La diagonalizzazione risponde alla domanda: esiste un cambio di coordinate in cui $A$ diventa diagonale? Se sì, tutti i calcoli complicati — potenze, esponenziali, sistemi differenziali — diventano immediati.

Immagina una trasformazione che deforma uno spazio in modo complicato. In coordinate standard è difficile capire cosa fa. Ma se esiste una base speciale (gli autovettori) in cui la trasformazione agisce semplicemente scalando ciascuna coordinata, allora tutto diventa chiaro: basta passare alla base degli autovettori, fare il calcolo semplice, e tornare alla base originale.

Questa è la formula $A = P\Lambda P^{-1}$: $P^{-1}$ porta nella base degli autovettori, $\Lambda$ fa la trasformazione semplice, $P$ riporta nella base originale.

## 2. Prerequisiti

- Autovalori e autovettori: $A\mathbf{v} = \lambda\mathbf{v}$
- Matrice invertibile e sua inversa
- Cambio di base e matrici di trasformazione
- Indipendenza lineare di vettori
- Molteplicità algebrica e geometrica degli autovalori

## 3. Teoria

**Definizione.** Una matrice $A \in \mathbb{R}^{n\times n}$ è **diagonalizzabile** se esiste una matrice invertibile $P$ e una matrice diagonale $\Lambda$ tali che:

$$A = P\Lambda P^{-1}$$

dove $\Lambda = \text{diag}(\lambda_1, \ldots, \lambda_n)$ contiene gli autovalori, e le colonne di $P$ sono gli autovettori corrispondenti.

**Condizione necessaria e sufficiente.** $A$ è diagonalizzabile se e solo se $A$ ha $n$ autovettori linearmente indipendenti.

**Condizione sufficiente (ma non necessaria).** Se $A$ ha $n$ autovalori distinti, allora $A$ è diagonalizzabile.

**Condizione necessaria e sufficiente in termini di molteplicità.** $A$ è diagonalizzabile se e solo se per ogni autovalore $\lambda_i$:

$$m_g(\lambda_i) = m_a(\lambda_i)$$

cioè la molteplicità geometrica (dimensione dell'autospazio) eguaglia la molteplicità algebrica (molteplicità come radice del polinomio caratteristico).

**Procedura di diagonalizzazione.**

1. Calcolare $p(\lambda) = \det(A - \lambda I)$ e trovare gli autovalori $\lambda_1, \ldots, \lambda_k$.
2. Per ciascun $\lambda_i$, trovare una base dell'autospazio $V_{\lambda_i} = \ker(A - \lambda_i I)$.
3. Raccogliere tutti gli autovettori. Se il totale è $n$ vettori LI:
   - $P$ = matrice con questi autovettori come colonne (nell'ordine degli autovalori scelto).
   - $\Lambda$ = matrice diagonale con i corrispondenti autovalori.
4. Verificare: $AP = P\Lambda$, cioè $A = P\Lambda P^{-1}$.

**Potenze di una matrice.** La diagonalizzazione semplifica enormemente il calcolo di $A^k$:

$$A^k = P\Lambda^k P^{-1}, \qquad \Lambda^k = \text{diag}(\lambda_1^k, \ldots, \lambda_n^k)$$

Invece di $k-1$ moltiplicazioni matriciali, bastano le potenze scalari $\lambda_i^k$.

**Esponenziale di matrice.** Definito dalla serie di Taylor:

$$e^{tA} = \sum_{k=0}^{\infty}\frac{t^k A^k}{k!} = P\,e^{t\Lambda}\,P^{-1}, \qquad e^{t\Lambda} = \text{diag}(e^{t\lambda_1}, \ldots, e^{t\lambda_n})$$

Fondamentale per risolvere sistemi di equazioni differenziali lineari $\dot{\mathbf{x}} = A\mathbf{x}$.

## 4. Derivazione

**Dimostrazione che $A = P\Lambda P^{-1} \iff AP = P\Lambda$.**

Siano $\mathbf{v}_1, \ldots, \mathbf{v}_n$ autovettori LI con autovalori $\lambda_1, \ldots, \lambda_n$, e sia $P = [\mathbf{v}_1 \mid \cdots \mid \mathbf{v}_n]$.

Calcoliamo $AP$: la $i$-esima colonna di $AP$ è $A\mathbf{v}_i = \lambda_i\mathbf{v}_i$.

Calcoliamo $P\Lambda$: la $i$-esima colonna di $P\Lambda$ è $P\mathbf{e}_i\lambda_i = \lambda_i\mathbf{v}_i$ (dove $\mathbf{e}_i$ è il vettore standard).

Quindi $AP = P\Lambda$ colonna per colonna. Poiché $P$ è invertibile (colonne LI), moltiplicando a destra per $P^{-1}$:

$$A = P\Lambda P^{-1} \quad \square$$

**Derivazione di $A^k = P\Lambda^k P^{-1}$.**

Per $k=2$: $A^2 = (P\Lambda P^{-1})(P\Lambda P^{-1}) = P\Lambda(P^{-1}P)\Lambda P^{-1} = P\Lambda^2 P^{-1}$.

Per induzione: se vale per $k$, allora $A^{k+1} = A\cdot A^k = (P\Lambda P^{-1})(P\Lambda^k P^{-1}) = P\Lambda^{k+1}P^{-1}$. $\square$

## 5. Esempi

**Esempio 1 — Diagonalizzazione completa $2\times 2$.**

$$A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$$

Dalla lezione precedente: $\lambda_1 = 2$ con $\mathbf{v}_1 = (1,-2)$, $\lambda_2 = 5$ con $\mathbf{v}_2 = (1,1)$.

$$P = \begin{pmatrix}1&1\\-2&1\end{pmatrix}, \quad \Lambda = \begin{pmatrix}2&0\\0&5\end{pmatrix}$$

$$P^{-1} = \frac{1}{\det P}\begin{pmatrix}1&-1\\2&1\end{pmatrix} = \frac{1}{3}\begin{pmatrix}1&-1\\2&1\end{pmatrix}$$

Verifica: $AP = \begin{pmatrix}2&5\\-4&5\end{pmatrix}$ e $P\Lambda = \begin{pmatrix}2&5\\-4&5\end{pmatrix}$. ✓

---

**Esempio 2 — Matrice non diagonalizzabile (blocco di Jordan).**

$$A = \begin{pmatrix} 2 & 1 \\ 0 & 2 \end{pmatrix}$$

$p(\lambda) = (2-\lambda)^2$. Unico autovalore: $\lambda = 2$ con $m_a = 2$.

$(A - 2I) = \begin{pmatrix}0&1\\0&0\end{pmatrix}$: il nucleo è $\text{span}\{(1,0)\}$, quindi $m_g = 1 \neq m_a = 2$.

$A$ **non è diagonalizzabile**: non si possono trovare 2 autovettori LI. La forma normale di Jordan è $A$ stessa.

---

**Esempio 3 — Calcolo di $A^{10}$.**

$$A = \begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix}$$

$\lambda_1 = 3$, $\lambda_2 = -1$. Autovettori: $\mathbf{v}_1 = (1,1)$, $\mathbf{v}_2 = (1,-1)$.

$$P = \begin{pmatrix}1&1\\1&-1\end{pmatrix}, \quad P^{-1} = \frac{1}{2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}$$

$$A^{10} = P\begin{pmatrix}3^{10}&0\\0&(-1)^{10}\end{pmatrix}P^{-1} = P\begin{pmatrix}59049&0\\0&1\end{pmatrix}P^{-1}$$

$$= \frac{1}{2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}\begin{pmatrix}59049&0\\0&1\end{pmatrix}\begin{pmatrix}1&1\\1&-1\end{pmatrix} = \frac{1}{2}\begin{pmatrix}59050&59048\\59048&59050\end{pmatrix}$$

---

**Esempio 4 — Sistema di equazioni differenziali.**

Risolvere $\dot{\mathbf{x}} = A\mathbf{x}$ con $A = \begin{pmatrix}-1&0\\0&-3\end{pmatrix}$ e $\mathbf{x}(0) = (2,1)^T$.

$A$ è già diagonale: $\lambda_1 = -1$, $\lambda_2 = -3$. La soluzione è:

$$\mathbf{x}(t) = e^{tA}\mathbf{x}(0) = \begin{pmatrix}e^{-t}&0\\0&e^{-3t}\end{pmatrix}\begin{pmatrix}2\\1\end{pmatrix} = \begin{pmatrix}2e^{-t}\\e^{-3t}\end{pmatrix}$$

Entrambe le componenti decadono: il sistema è **stabile** (tutti gli autovalori negativi).

---

**Esempio 5 — Matrice $3\times 3$ con autovalore ripetuto diagonalizzabile.**

$$A = \begin{pmatrix}2&0&0\\0&3&1\\0&1&3\end{pmatrix}$$

Autovalori: dalla sottomatrice $\begin{pmatrix}3&1\\1&3\end{pmatrix}$: $\lambda = 2, 4$. E $\lambda = 2$ dal primo blocco.

Quindi: $\lambda_1 = 2$ (con $m_a = 2$), $\lambda_2 = 4$.

Per $\lambda = 2$: $\ker(A-2I)$: equazioni $0=0$, $v_2+v_3=0$. Base: $\{(1,0,0), (0,1,-1)\}$. Quindi $m_g = 2 = m_a$. Diagonalizzabile!

---

**Esempio 6 — Successioni di Fibonacci via autovalori.**

La successione di Fibonacci soddisfa $F_{n+1} = F_n + F_{n-1}$, riscrivibile come:

$$\begin{pmatrix}F_{n+1}\\F_n\end{pmatrix} = \begin{pmatrix}1&1\\1&0\end{pmatrix}\begin{pmatrix}F_n\\F_{n-1}\end{pmatrix}$$

Gli autovalori di $A = \begin{pmatrix}1&1\\1&0\end{pmatrix}$ sono $\phi = \frac{1+\sqrt{5}}{2} \approx 1.618$ (sezione aurea) e $\psi = \frac{1-\sqrt{5}}{2}$.

$$F_n = \frac{\phi^n - \psi^n}{\sqrt{5}}$$

(formula di Binet). Il termine $\psi^n \to 0$ perché $\lvert\psi\rvert < 1$, quindi $F_n \approx \phi^n/\sqrt{5}$.

---

**Esempio 7 — Comportamento a lungo termine.**

Un ecosistema con due specie evolve secondo $\mathbf{x}_{k+1} = A\mathbf{x}_k$. Se $\lvert\lambda_1\rvert > 1 > \lvert\lambda_2\rvert$, scrivendo $\mathbf{x}_0 = c_1\mathbf{v}_1 + c_2\mathbf{v}_2$:

$$\mathbf{x}_k = c_1\lambda_1^k\mathbf{v}_1 + c_2\lambda_2^k\mathbf{v}_2 \approx c_1\lambda_1^k\mathbf{v}_1 \quad \text{per } k \text{ grande}$$

Il comportamento a lungo termine è determinato dall'autovettore dominante.

---

**Esempio 8 — Diagonalizzazione con matrici simmetriche.**

$$A = \begin{pmatrix}5&2\\2&2\end{pmatrix}$$

$p(\lambda) = \lambda^2 - 7\lambda + 6 = (\lambda-1)(\lambda-6)$. Autovalori: $\lambda_1=1$, $\lambda_2=6$.

Per $\lambda_1=1$: $\mathbf{v}_1 = (-2, 5)/\sqrt{29}$... meglio non normalizzati: $\mathbf{v}_1=(-2,1)$... verifichiamo: $A(-2,1)^T = (-10+2, -4+2)^T = (-8, -2)^T$. Non è $1\cdot(-2,1)^T$. Rifare: $(A-I)\mathbf{v}=0$: $4v_1+2v_2=0$, quindi $v_2=-2v_1$. $\mathbf{v}_1=(1,-2)$.

Verifica: $A(1,-2)^T = (5-4, 2-4)^T = (1,-2)^T = 1\cdot(1,-2)^T$ ✓.

Per $\lambda_2=6$: $(A-6I)\mathbf{v}=0$: $-v_1+2v_2=0$, $\mathbf{v}_2=(2,1)$.

## 6. Grafico

```plot
{"title":"Comportamento di A^k: dominanza dell'autovalore maggiore","fn":"Math.pow(1.5,x)","fn2":"Math.pow(0.6,x)","domain":[0,15],"yDomain":[-0.2,8],"label1":"componente λ₁=1.5 (diverge)","label2":"componente λ₂=0.6 (decade)"}
```

## 7. Slider interattivo

```slider
{"title":"Evoluzione di sistema: A^k x₀ con autovalori λ e 1/λ","fn":"Math.pow(a,x)","domain":[0,12],"yDomain":[-0.2,6],"pname":"a","pmin":1.01,"pmax":2.0,"pdefault":1.3,"pstep":0.05,"plabel":"autovalore dominante λ","label1":"λᵏ (componente dominante)"}
```

## 8. Errori comuni

**Errore 1 — Invertire l'ordine in $A = P\Lambda P^{-1}$.** Un errore classico è scrivere $A = P^{-1}\Lambda P$. La formula corretta è $P\Lambda P^{-1}$: prima si entra nella base degli autovettori ($P^{-1}$), si scala ($\Lambda$), poi si torna ($P$).

**Errore 2 — Non abbinare colonne di $P$ e diagonale di $\Lambda$.** Se la $i$-esima colonna di $P$ è l'autovettore $\mathbf{v}_i$, allora la posizione $(i,i)$ di $\Lambda$ deve essere $\lambda_i$. Confondere l'ordine invalida la fattorizzazione.

**Errore 3 — Credere che $m_a = m_g$ sempre.** L'errore più sottile: solo perché un autovalore ha $m_a = 2$ non significa che abbia $m_g = 2$ (esempio: $\begin{pmatrix}2&1\\0&2\end{pmatrix}$).

**Errore 4 — Calcolare $A^k$ come $(P\Lambda)^k$.** La formula è $A^k = P\Lambda^k P^{-1}$: si calcola $\Lambda^k$ (facile: diagonale) e poi si coniuga. Non $(P\Lambda)^k$.

**Errore 5 — Dimenticare di verificare l'invertibilità di $P$.** $P$ è invertibile se e solo se le sue colonne (gli autovettori) sono LI. Se non lo sono, $A$ non è diagonalizzabile e la procedura fallisce.

**Errore 6 — Pensare che le matrici con autovalori complessi non siano diagonalizzabili.** Sono diagonalizzabili su $\mathbb{C}$, ma non su $\mathbb{R}$. Per lavorare su $\mathbb{R}$ si usa la forma reale di Jordan (blocchi $2\times 2$ con rotazioni e scalature).

**Errore 7 — Non sfruttare che $A = P\Lambda P^{-1}$ implica $f(A) = Pf(\Lambda)P^{-1}$.** Questa relazione vale per qualsiasi funzione analitica $f$ (polinomio, esponenziale, radice quadrata). È il cuore dell'utilità della diagonalizzazione.

## 9. Applicazioni reali

**Equazioni differenziali lineari.** Il sistema $\dot{\mathbf{x}} = A\mathbf{x}$ ha soluzione $\mathbf{x}(t) = e^{tA}\mathbf{x}(0)$. Se $A$ è diagonalizzabile, $e^{tA} = Pe^{t\Lambda}P^{-1}$ riduce il calcolo a esponenziali scalari. In fisica, chimica cinetica e ingegneria elettrica, i sistemi di ODE lineari sono ovunque: circuiti RC, reazioni chimiche a più specie, meccanica strutturale. La diagonalizzazione identifica i **modi normali** del sistema — le componenti che si comportano indipendentemente, ciascuna con la propria costante di tempo $1/\lambda_i$.

**Catene di Markov e processi stocastici.** Una catena di Markov con matrice di transizione $M$ (colonne che sommano a 1) evolve come $\mathbf{p}_{k+1} = M\mathbf{p}_k$. La distribuzione stazionaria è l'autovettore di $M$ con autovalore 1. La velocità di convergenza verso l'equilibrio è determinata dal secondo autovalore $\lvert\lambda_2\rvert$: più piccolo è, più rapida è la mescolazione. Questo principio — il **gap spettrale** — è fondamentale in algoritmi di campionamento MCMC, analisi di reti sociali e motori di raccomandazione.

**Grafica e computer vision.** Nelle trasformazioni geometriche 3D (rotazioni, deformazioni, proiezioni), la diagonalizzazione rivela le direzioni principali di una deformazione. In computer vision, la decomposizione spettrale della matrice di struttura (Structure from Motion) permette di ricostruire la forma 3D di oggetti da sequenze di immagini 2D. Gli autovettori principali codificano le direzioni in cui la struttura è più informativa.

## 10. Riepilogo

| Concetto | Definizione / Condizione |
| --- | --- |
| Diagonalizzabile | $A = P\Lambda P^{-1}$ con $P$ invertibile |
| Colonne di $P$ | autovettori $\mathbf{v}_1, \ldots, \mathbf{v}_n$ |
| Diagonale di $\Lambda$ | autovalori $\lambda_1, \ldots, \lambda_n$ |
| Condizione necessaria e sufficiente | $n$ autovettori LI, equivalentemente $m_g = m_a$ per ogni $\lambda$ |
| Condizione sufficiente | $n$ autovalori distinti |
| Potenza | $A^k = P\Lambda^k P^{-1}$ |
| Esponenziale | $e^{tA} = Pe^{t\Lambda}P^{-1}$ |
| Non diagonalizzabile | $m_g < m_a$ per qualche $\lambda$ (forma di Jordan) |

## 11. Esercizi

<details>
<summary>Esercizio 1 — Diagonalizzazione completa</summary>

Diagonalizzare $A = \begin{pmatrix}4&1\\2&3\end{pmatrix}$ e scrivere esplicitamente $P$, $\Lambda$, $P^{-1}$.

**Soluzione:**

Autovalori: $\lambda_1 = 2$, $\lambda_2 = 5$. Autovettori: $\mathbf{v}_1 = (1,-2)$, $\mathbf{v}_2 = (1,1)$.

$$P = \begin{pmatrix}1&1\\-2&1\end{pmatrix}, \quad \Lambda = \begin{pmatrix}2&0\\0&5\end{pmatrix}, \quad P^{-1} = \frac{1}{3}\begin{pmatrix}1&-1\\2&1\end{pmatrix}$$

Verifica: $P\Lambda P^{-1} = \frac{1}{3}\begin{pmatrix}1&1\\-2&1\end{pmatrix}\begin{pmatrix}2&0\\0&5\end{pmatrix}\begin{pmatrix}1&-1\\2&1\end{pmatrix} = \begin{pmatrix}4&1\\2&3\end{pmatrix}$ ✓.

</details>

<details>
<summary>Esercizio 2 — Matrice non diagonalizzabile</summary>

Mostrare che $A = \begin{pmatrix}3&1\\0&3\end{pmatrix}$ non è diagonalizzabile.

**Soluzione:**

$p(\lambda) = (3-\lambda)^2$. Unico autovalore $\lambda = 3$ con $m_a = 2$.

$(A-3I) = \begin{pmatrix}0&1\\0&0\end{pmatrix}$. Il nucleo è $\text{span}\{(1,0)\}$, quindi $m_g = 1$.

Poiché $m_g = 1 < m_a = 2$, $A$ **non è diagonalizzabile**.

</details>

<details>
<summary>Esercizio 3 — Calcolo di $A^{10}$</summary>

Calcolare $A^{10}$ per $A = \begin{pmatrix}1&2\\2&1\end{pmatrix}$.

**Soluzione:**

$\lambda_1 = 3$ ($\mathbf{v}_1=(1,1)$), $\lambda_2 = -1$ ($\mathbf{v}_2=(1,-1)$).

$P = \begin{pmatrix}1&1\\1&-1\end{pmatrix}$, $P^{-1} = \frac{1}{2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}$.

$$A^{10} = \frac{1}{2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}\begin{pmatrix}59049&0\\0&1\end{pmatrix}\begin{pmatrix}1&1\\1&-1\end{pmatrix} = \frac{1}{2}\begin{pmatrix}59050&59048\\59048&59050\end{pmatrix}$$

</details>

<details>
<summary>Esercizio 4 — Sistema differenziale</summary>

Risolvere $\dot{\mathbf{x}} = A\mathbf{x}$ con $A = \begin{pmatrix}2&1\\0&-1\end{pmatrix}$ e $\mathbf{x}(0) = (1,2)^T$.

**Soluzione:**

Autovalori: $\lambda_1 = 2$ ($\mathbf{v}_1=(1,0)$), $\lambda_2=-1$ ($\mathbf{v}_2=(1,-3)$).

$\mathbf{x}(0) = c_1\mathbf{v}_1 + c_2\mathbf{v}_2$: $c_1+c_2=1$, $-3c_2=2$ $\Rightarrow$ $c_2=-2/3$, $c_1=5/3$.

$$\mathbf{x}(t) = \frac{5}{3}e^{2t}\begin{pmatrix}1\\0\end{pmatrix} - \frac{2}{3}e^{-t}\begin{pmatrix}1\\-3\end{pmatrix}$$

Il termine $e^{2t}$ domina per $t\to+\infty$: sistema instabile.

</details>

<details>
<summary>Esercizio 5 — Successioni lineari ricorrenti</summary>

La successione $a_{n+2} = 5a_{n+1} - 6a_n$ con $a_0=0$, $a_1=1$ può essere scritta come $\mathbf{x}_{n+1} = A\mathbf{x}_n$. Trovare la formula chiusa.

**Soluzione:**

$A = \begin{pmatrix}5&-6\\1&0\end{pmatrix}$. $p(\lambda) = \lambda^2 - 5\lambda + 6 = (\lambda-2)(\lambda-3)$.

La soluzione generale è $a_n = c_1 \cdot 2^n + c_2 \cdot 3^n$.

Condizioni iniziali: $a_0 = c_1+c_2 = 0$, $a_1 = 2c_1+3c_2 = 1$.

$c_1 = -1$, $c_2 = 1$: $\boxed{a_n = 3^n - 2^n}$.

Verifica: $a_2 = 9-4 = 5 = 5\cdot1 - 6\cdot0$ ✓.

</details>

<details>
<summary>Esercizio 6 — Stabilità di sistema dinamico</summary>

Data $A = \begin{pmatrix}0.5&0.2\\0&0.3\end{pmatrix}$, determinare se il sistema $\mathbf{x}_{k+1}=A\mathbf{x}_k$ è stabile.

**Soluzione:**

$A$ è triangolare superiore: autovalori $\lambda_1 = 0.5$ e $\lambda_2 = 0.3$.

Entrambi hanno $\lvert\lambda_i\rvert < 1$. Il sistema è **asintoticamente stabile**: $A^k\mathbf{x}_0 \to \mathbf{0}$ per ogni $\mathbf{x}_0$.

La velocità di convergenza è dominata dall'autovalore maggiore: $\lvert\lambda_1\rvert = 0.5$ (dimezzamento ad ogni passo).

</details>

<details>
<summary>Esercizio 7 — Formula di Binet per Fibonacci</summary>

Verificare che $F_3 = 2$ e $F_4 = 3$ con la formula $F_n = (\phi^n - \psi^n)/\sqrt{5}$, dove $\phi=(1+\sqrt{5})/2$, $\psi=(1-\sqrt{5})/2$.

**Soluzione:**

$\phi \approx 1.618$, $\psi \approx -0.618$.

$F_3 = (\phi^3 - \psi^3)/\sqrt{5} = (4.236 - (-0.236))/\sqrt{5} = 4.472/2.236 \approx 2$ ✓.

$F_4 = (\phi^4 - \psi^4)/\sqrt{5} = (6.854 - 0.146)/\sqrt{5} = 6.708/2.236 \approx 3$ ✓.

</details>

<details>
<summary>Esercizio 8 — Diagonalizzazione $3\times 3$</summary>

Diagonalizzare $A = \begin{pmatrix}1&0&0\\0&3&1\\0&1&3\end{pmatrix}$.

**Soluzione:**

Il blocco $\begin{pmatrix}3&1\\1&3\end{pmatrix}$ ha autovalori $\lambda=2$ e $\lambda=4$.

Autovalori di $A$: $\lambda_1=1$, $\lambda_2=2$, $\lambda_3=4$.

Per $\lambda_1=1$: $\mathbf{v}_1=(1,0,0)$.
Per $\lambda_2=2$: $(A-2I)\mathbf{v}=0$: $\mathbf{v}_2=(0,1,-1)$.
Per $\lambda_3=4$: $(A-4I)\mathbf{v}=0$: $\mathbf{v}_3=(0,1,1)$.

$$P = \begin{pmatrix}1&0&0\\0&1&1\\0&-1&1\end{pmatrix}, \quad \Lambda = \begin{pmatrix}1&0&0\\0&2&0\\0&0&4\end{pmatrix}$$

</details>
