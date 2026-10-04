---
id: algebra-12-ortogonalita-proiezioni
titolo: "Ortogonalità e proiezioni ortogonali"
materia: algebra-lineare
argomento: "Ortogonalità"
modulo: "Ortogonalità"
livello: universitario
slug: algebra-12-ortogonalita-proiezioni

# legacy
subject: algebra-lineare
topic_it: Ortogonalità
topic_en: Orthogonality
title_it: "Ortogonalità e proiezioni ortogonali"
title_en: "Orthogonality and orthogonal projections"
level: blue
order: 12
source_book: "A. Villanacci, Basic Linear Algebra, Metric Spaces, Differential Calculus and Nonlinear Programming (appunti); S. Axler, Linear Algebra Done Right (4ª ed.); D. Austin, Understanding Linear Algebra"
source_chapter: "Complemento ortogonale, proiezione ortogonale, miglior approssimazione, minimi quadrati"

prerequisiti:
  - algebra-11-prodotto-scalare

collegamenti:
  - algebra-04-rango-rouche-capelli
  - algebra-13-gram-schmidt
  - algebra-14-forme-quadratiche

fonti_integrate:
  - id_fonte: villanacci-math2
    ruolo: primaria
    sezioni_coperte: "Ortogonalità in Rⁿ, complemento ortogonale, proiezione, notazione"
    note: "appunti-prof: notazione e convenzioni come in sede d'esame"
  - id_fonte: axler-ladr
    ruolo: secondaria
    sezioni_coperte: "Complemento ortogonale, decomposizione V = W ⊕ W⊥, proiezione come soluzione del problema di minimo"
    note: "rigore: miglior approssimazione via Pitagora"
  - id_fonte: austin-ula
    ruolo: secondaria
    sezioni_coperte: "Proiezioni ortogonali, matrice di proiezione, minimi quadrati e regressione"
    note: "intuizione ed esempi applicati"

contratto: "3.0"
profondita: essenziale
tipo: teorica
versione: "3.0"
data_ultima_rielaborazione: "2026-10-04"
stato: da-rivedere
componenti_usati:
  - plot
  - checkpoint
---

## Intuizione

Sotto il sole di mezzogiorno, la tua ombra sul pavimento è il punto del pavimento «più vicino» a te: la luce scende perpendicolare, e il segmento che va dalla tua testa alla sua ombra è ortogonale al pavimento. Questa è tutta l'idea della lezione.

In astratto: hai un vettore $\mathbf{b}$ e un sottospazio $W$ (una retta, un piano, …) che non lo contiene. Cerchi il vettore $\mathbf{p}\in W$ più vicino a $\mathbf{b}$. La risposta è la **proiezione ortogonale**, e la si riconosce da una sola proprietà: il **residuo** $\mathbf{e}=\mathbf{b}-\mathbf{p}$ è perpendicolare a tutto $W$. Se $\mathbf{e}$ avesse anche solo una piccola componente lungo $W$, potresti spostarti in quella direzione e avvicinarti ancora.

Perché ci interessa? Perché molti sistemi $A\mathbf{x}=\mathbf{b}$ non hanno soluzione. Con 50 osservazioni di reddito e consumo e un modello $y=\beta_0+\beta_1x$ hai 50 equazioni e 2 incognite: i dati non stanno mai esattamente su una retta. Non si può risolvere, ma si può chiedere la soluzione **migliore possibile**: quella che rende $A\mathbf{x}$ il più vicino possibile a $\mathbf{b}$. Poiché i vettori $A\mathbf{x}$ formano lo spazio colonne $C(A)$, la risposta è proiettare $\mathbf{b}$ su $C(A)$. È il metodo dei **minimi quadrati**, cioè la regressione lineare.

## Teoria

Lavoriamo in $\mathbb{R}^n$ con il prodotto scalare standard $\langle\mathbf{u},\mathbf{v}\rangle=\mathbf{u}^T\mathbf{v}$ e la norma $\lVert\mathbf{v}\rVert=\sqrt{\mathbf{v}^T\mathbf{v}}$ della lezione [Prodotto scalare e spazi con norma](/algebra-lineare/ortogonalita/11-prodotto-scalare).

**Definizione (complemento ortogonale).** Dato un sottospazio $W\subseteq\mathbb{R}^n$,

$$
W^\perp=\{\mathbf{v}\in\mathbb{R}^n:\ \langle\mathbf{v},\mathbf{w}\rangle=0\ \text{ per ogni } \mathbf{w}\in W\}.
$$

Si legge «$W$ ortogonale»: è l'insieme dei vettori perpendicolari a *ogni* vettore di $W$. È un sottospazio: se $\mathbf{v}_1,\mathbf{v}_2\perp\mathbf{w}$, allora $\langle\alpha\mathbf{v}_1+\beta\mathbf{v}_2,\mathbf{w}\rangle=\alpha\cdot0+\beta\cdot0=0$ per linearità del prodotto scalare. Inoltre $W\cap W^\perp=\{\mathbf{0}\}$: un vettore in entrambi è ortogonale a sé stesso, quindi $\lVert\mathbf{v}\rVert^2=0$ e $\mathbf{v}=\mathbf{0}$.

Per verificare $\mathbf{v}\in W^\perp$ basta controllare i vettori di una **base** di $W$: se $\mathbf{v}$ è ortogonale a $\mathbf{a}_1,\dots,\mathbf{a}_k$, è ortogonale a ogni loro combinazione lineare, sempre per linearità. Mettendo la base nelle colonne di $A=[\mathbf{a}_1\ \cdots\ \mathbf{a}_k]$, le condizioni $\mathbf{a}_j^T\mathbf{v}=0$ sono le righe del sistema $A^T\mathbf{v}=\mathbf{0}$. Quindi

$$
C(A)^\perp=N(A^T).
$$

Il complemento ortogonale dello spazio colonne è il nucleo della trasposta. Per il teorema nullità più rango ([Rango e Rouché-Capelli](/algebra-lineare/fondamenti/04-rango-rouche-capelli)) applicato a $A^T$, che ha $n$ colonne e rango $k$: $\dim N(A^T)=n-k$. Dunque $\dim W+\dim W^\perp=n$.

**Proiezione su una retta.** Sia $W=\operatorname{span}\{\mathbf{a}\}$ con $\mathbf{a}\neq\mathbf{0}$. Cerchiamo $\mathbf{p}=c\,\mathbf{a}$ con residuo ortogonale ad $\mathbf{a}$: $\mathbf{a}^T(\mathbf{b}-c\,\mathbf{a})=0$, cioè $c\,\mathbf{a}^T\mathbf{a}=\mathbf{a}^T\mathbf{b}$. Poiché $\mathbf{a}^T\mathbf{a}=\lVert\mathbf{a}\rVert^2>0$ si può dividere:

$$
\mathbf{p}=\frac{\mathbf{a}^T\mathbf{b}}{\mathbf{a}^T\mathbf{a}}\,\mathbf{a},\qquad P_{\mathbf{a}}=\frac{\mathbf{a}\mathbf{a}^T}{\mathbf{a}^T\mathbf{a}}.
$$

Lettura: il coefficiente misura «quanto di $\mathbf{b}$ va nella direzione di $\mathbf{a}$», normalizzato per la lunghezza di $\mathbf{a}$. Il risultato non cambia se si sostituisce $\mathbf{a}$ con un suo multiplo $t\mathbf{a}$ ($t\neq0$): conta la retta, non il vettore scelto per descriverla. $P_{\mathbf{a}}$ è una matrice $n\times n$ (colonna per riga) e $\mathbf{p}=P_{\mathbf{a}}\mathbf{b}$.

```checkpoint
[domanda]
Qual è la proiezione di $\mathbf{b}=(4,-3)$ sulla retta generata da $\mathbf{a}=(3,4)$? Rispondi senza calcolare $P_{\mathbf{a}}$.

[risposta]
$\mathbf{a}^T\mathbf{b}=12-12=0$: $\mathbf{b}$ è già ortogonale alla retta, cioè $\mathbf{b}\in W^\perp$. La proiezione è $\mathbf{p}=\mathbf{0}$ e il residuo è tutto $\mathbf{b}$.
```

**Proiezione su un sottospazio.** Sia $W=C(A)$, con $A$ di tipo $n\times k$ a colonne linearmente indipendenti (una base di $W$). Un vettore di $W$ si scrive $\mathbf{p}=A\hat{\mathbf{x}}$ per un unico $\hat{\mathbf{x}}\in\mathbb{R}^k$. La richiesta «residuo ortogonale a $W$» significa $\mathbf{b}-A\hat{\mathbf{x}}\in C(A)^\perp=N(A^T)$, cioè $A^T(\mathbf{b}-A\hat{\mathbf{x}})=\mathbf{0}$. Queste sono le **equazioni normali**:

$$
A^TA\,\hat{\mathbf{x}}=A^T\mathbf{b}.
$$

$A^TA$ è $k\times k$ e simmetrica; è invertibile esattamente quando le colonne di $A$ sono indipendenti (Esercizio 4). In quel caso

$$
\hat{\mathbf{x}}=(A^TA)^{-1}A^T\mathbf{b},\qquad \mathbf{p}=P\mathbf{b},\qquad P=A(A^TA)^{-1}A^T.
$$

Simboli: $\hat{\mathbf{x}}$ sono le coordinate della proiezione nella base delle colonne di $A$; $P$ è la **matrice di proiezione** su $W$, di tipo $n\times n$. Per $k=1$ si ritrova $P_{\mathbf{a}}$. Proprietà di $P$:

- $P^2=P$: proiettare una seconda volta non cambia nulla, perché $\mathbf{p}$ sta già in $W$;
- $P^T=P$: $P$ è simmetrica;
- $I-P$ è la proiezione su $W^\perp$, e $\mathbf{b}=P\mathbf{b}+(I-P)\mathbf{b}$.

L'ultima riga è la **decomposizione ortogonale** $\mathbb{R}^n=W\oplus W^\perp$: ogni $\mathbf{b}$ si scrive come un pezzo in $W$ più un pezzo in $W^\perp$, e in modo unico. L'unicità viene da $W\cap W^\perp=\{\mathbf{0}\}$: se $\mathbf{w}_1+\mathbf{z}_1=\mathbf{w}_2+\mathbf{z}_2$ allora $\mathbf{w}_1-\mathbf{w}_2=\mathbf{z}_2-\mathbf{z}_1$ sta in entrambi, quindi è nullo. Se la base di $W$ è **ortonormale** (colonne di $Q$ con $Q^TQ=I$), la formula si semplifica in $P=QQ^T$: costruire una base così è lo scopo di [Gram-Schmidt e QR](/algebra-lineare/ortogonalita/13-gram-schmidt).

**Minimi quadrati.** Se $A\mathbf{x}=\mathbf{b}$ non ha soluzione ($\mathbf{b}\notin C(A)$), si chiama **soluzione ai minimi quadrati** il vettore $\hat{\mathbf{x}}$ che minimizza $\lVert A\mathbf{x}-\mathbf{b}\rVert^2$, la somma dei quadrati degli scarti. Poiché $A\mathbf{x}$ percorre tutto $C(A)$, minimizzare $\lVert A\mathbf{x}-\mathbf{b}\rVert$ significa cercare il punto di $C(A)$ più vicino a $\mathbf{b}$. Il teorema della sezione successiva dice che quel punto è la proiezione: $\hat{\mathbf{x}}$ risolve le equazioni normali.

```checkpoint
[domanda]
Se $\mathbf{b}\in C(A)$ e le colonne di $A$ sono indipendenti, che cosa restituiscono le equazioni normali?

[risposta]
In quel caso $A\mathbf{x}=\mathbf{b}$ ha una soluzione esatta $\mathbf{x}^*$. Moltiplicando per $A^T$ si ottiene $A^TA\mathbf{x}^*=A^T\mathbf{b}$, e poiché $A^TA$ è invertibile la soluzione delle equazioni normali è unica: $\hat{\mathbf{x}}=\mathbf{x}^*$. La proiezione è $\mathbf{b}$ stesso e il residuo è nullo. I minimi quadrati estendono la soluzione ordinaria e non la contraddicono.
```

## Dimostrazioni

**Teorema (miglior approssimazione).** Sia $W=C(A)$ con colonne di $A$ indipendenti, $\mathbf{p}=P\mathbf{b}$. Per ogni $\mathbf{w}\in W$ vale $\lVert\mathbf{b}-\mathbf{w}\rVert\ge\lVert\mathbf{b}-\mathbf{p}\rVert$, con uguaglianza solo per $\mathbf{w}=\mathbf{p}$.

*Dimostrazione.*

1. *Il residuo è ortogonale a $W$.* Per costruzione $\hat{\mathbf{x}}$ risolve $A^TA\hat{\mathbf{x}}=A^T\mathbf{b}$, cioè $A^T(\mathbf{b}-A\hat{\mathbf{x}})=\mathbf{0}$. Quindi $\mathbf{e}=\mathbf{b}-\mathbf{p}\in N(A^T)=C(A)^\perp=W^\perp$.
2. *Spezziamo la distanza.* Per $\mathbf{w}\in W$ qualunque scriviamo $\mathbf{b}-\mathbf{w}=(\mathbf{b}-\mathbf{p})+(\mathbf{p}-\mathbf{w})$, sommando e sottraendo $\mathbf{p}$.
3. *I due pezzi sono ortogonali.* $\mathbf{p}-\mathbf{w}\in W$, perché differenza di due vettori del sottospazio $W$; $\mathbf{b}-\mathbf{p}\in W^\perp$ per il passo 1. Quindi $\langle\mathbf{b}-\mathbf{p},\mathbf{p}-\mathbf{w}\rangle=0$.
4. *Pitagora.* Per il teorema di Pitagora della [lezione 11](/algebra-lineare/ortogonalita/11-prodotto-scalare), applicato ai due vettori ortogonali del passo 3:

$$
\lVert\mathbf{b}-\mathbf{w}\rVert^2=\lVert\mathbf{b}-\mathbf{p}\rVert^2+\lVert\mathbf{p}-\mathbf{w}\rVert^2.
$$

5. *Conclusione.* Il secondo addendo è $\ge0$, quindi $\lVert\mathbf{b}-\mathbf{w}\rVert^2\ge\lVert\mathbf{b}-\mathbf{p}\rVert^2$. Vale l'uguaglianza se e solo se $\lVert\mathbf{p}-\mathbf{w}\rVert=0$, cioè $\mathbf{w}=\mathbf{p}$ (positività della norma). $\blacksquare$

Il teorema giustifica i minimi quadrati: il minimo di $\lVert A\mathbf{x}-\mathbf{b}\rVert$ si raggiunge quando $A\mathbf{x}=\mathbf{p}$, e poiché le colonne sono indipendenti c'è un solo $\mathbf{x}$ con questa proprietà, $\hat{\mathbf{x}}$.

## Esempi

**Esempio 1 (proiezione su una retta).** Proiettare $\mathbf{b}=(4,3)$ sulla retta generata da $\mathbf{a}=(1,2)$.

*Strategia:* formula della retta, poi controllo che il residuo sia ortogonale. $\mathbf{a}^T\mathbf{b}=4+6=10$ e $\mathbf{a}^T\mathbf{a}=5$, quindi $c=2$ e $\mathbf{p}=(2,4)$. Residuo $\mathbf{e}=(2,-1)$; controllo $\mathbf{a}^T\mathbf{e}=2-2=0$. Distanza di $\mathbf{b}$ dalla retta: $\lVert\mathbf{e}\rVert=\sqrt5$.

Lo stesso risultato visto come problema di minimo. La distanza al quadrato da $\mathbf{b}$ al punto $c\,\mathbf{a}$ della retta è $f(c)=\lVert\mathbf{b}-c\,\mathbf{a}\rVert^2=(4-c)^2+(3-2c)^2=5c^2-20c+25$. Osserva nel grafico che il minimo della parabola cade proprio in $c=2$, il coefficiente della proiezione, e vale $5=\lVert\mathbf{e}\rVert^2$.

```plot
{
  "fn": "5*x**2 - 20*x + 25",
  "domain": [-0.5, 4.5],
  "yDomain": [0, 30],
  "title": "f(c) = ||b - c a||²: minimo in c = 2, valore 5",
  "label1": "f(c)",
  "color": "#2563eb"
}
```

**Esempio 2 (proiezione su un piano con le equazioni normali).** Proiettare $\mathbf{b}=(1,2,3)$ sul piano $W=\operatorname{span}\{(1,1,0),(1,0,1)\}$.

*Strategia:* le due colonne sono indipendenti (non proporzionali), quindi si usano le equazioni normali con

$$
A=\begin{pmatrix}1&1\\1&0\\0&1\end{pmatrix},\qquad A^TA=\begin{pmatrix}2&1\\1&2\end{pmatrix},\qquad A^T\mathbf{b}=\begin{pmatrix}3\\4\end{pmatrix}.
$$

Il sistema $2x_1+x_2=3$, $x_1+2x_2=4$ dà $\hat{\mathbf{x}}=(2/3,\,5/3)$. Quindi $\mathbf{p}=\tfrac23(1,1,0)+\tfrac53(1,0,1)=(7/3,\,2/3,\,5/3)$ e $\mathbf{e}=(-4/3,\,4/3,\,4/3)$. Controllo: $\mathbf{e}$ ha prodotto scalare $-\tfrac43+\tfrac43=0$ con entrambe le colonne. La matrice di proiezione, con $(A^TA)^{-1}=\tfrac13\left(\begin{smallmatrix}2&-1\\-1&2\end{smallmatrix}\right)$, è

$$
P=A(A^TA)^{-1}A^T=\frac13\begin{pmatrix}2&1&1\\1&2&-1\\1&-1&2\end{pmatrix}.
$$

È simmetrica, e un calcolo diretto conferma $P^2=P$.

**Esempio 3 (la stessa proiezione passando da $W^\perp$).** In $\mathbb{R}^3$ un piano ha complemento ortogonale di dimensione $3-2=1$: una retta. Conviene proiettare su quella retta e sottrarre.

Un vettore $\mathbf{n}$ ortogonale a $(1,1,0)$ e $(1,0,1)$ deve risolvere $n_1+n_2=0$, $n_1+n_3=0$: per esempio $\mathbf{n}=(1,-1,-1)$. Proiezione di $\mathbf{b}$ su $W^\perp$: $\frac{\mathbf{n}^T\mathbf{b}}{\mathbf{n}^T\mathbf{n}}\mathbf{n}=\frac{-4}{3}(1,-1,-1)=(-4/3,\,4/3,\,4/3)$. È esattamente il residuo $\mathbf{e}$ dell'Esempio 2. Togliendolo a $\mathbf{b}$ si ritrova $\mathbf{p}=(7/3,\,2/3,\,5/3)$. In matrici: $P=I-\frac{\mathbf{n}\mathbf{n}^T}{\mathbf{n}^T\mathbf{n}}$, la stessa matrice di prima. *Morale:* quando $W^\perp$ è più piccolo di $W$, proietta su $W^\perp$ e usa $\mathbf{b}=P\mathbf{b}+(I-P)\mathbf{b}$.

**Esempio 4 (retta dei minimi quadrati).** Quattro famiglie hanno reddito $x=1,2,3,4$ e consumo $y=2,3,5,6$ (migliaia di euro). Cerchiamo $y\approx\beta_0+\beta_1x$.

*Modello come sistema:* una equazione per osservazione, $\beta_0+\beta_1x_i=y_i$. In forma matriciale $X\boldsymbol\beta=\mathbf{y}$, con una colonna di uno (per $\beta_0$) e la colonna dei redditi:

$$
X=\begin{pmatrix}1&1\\1&2\\1&3\\1&4\end{pmatrix},\qquad X^TX=\begin{pmatrix}4&10\\10&30\end{pmatrix},\qquad X^T\mathbf{y}=\begin{pmatrix}16\\47\end{pmatrix}.
$$

Il sistema è incompatibile (quattro punti non allineati). Le equazioni normali $4\beta_0+10\beta_1=16$, $10\beta_0+30\beta_1=47$ hanno determinante $20$ e soluzione $\hat\beta_0=1/2$, $\hat\beta_1=7/5$. Retta stimata: $\hat y=0{,}5+1{,}4\,x$ (ogni mille euro di reddito in più, $1{,}4$ mila di consumo in più in questo campione inventato). Valori stimati $1{,}9;\ 3{,}3;\ 4{,}7;\ 6{,}1$; residui $0{,}1;\ -0{,}3;\ 0{,}3;\ -0{,}1$; somma dei quadrati $0{,}2$.

*Ragionamento:* i residui sommano a zero, e non per caso. Il residuo è ortogonale a ogni colonna di $X$, quindi anche alla colonna di uno: $\mathbf{1}^T\mathbf{e}=\sum_i e_i=0$. Ogni regressione con intercetta ha questa proprietà.

## Errori comuni

- **Dimenticare la condizione di ortogonalità.** Un vettore di $W$ «vicino a occhio» non è la proiezione. Il test è sempre $A^T(\mathbf{b}-\mathbf{p})=\mathbf{0}$.
- **Usare $P=QQ^T$ con una base non ortonormale.** La formula semplice vale solo se $Q^TQ=I$; altrimenti serve $A(A^TA)^{-1}A^T$.
- **Scrivere $(A^TA)^{-1}A^T=A^{-1}$.** $A$ è in generale rettangolare e non ha inversa. L'identità $(A^TA)^{-1}=A^{-1}(A^T)^{-1}$ vale solo per $A$ quadrata invertibile, e in quel caso $P=I$.
- **Colonne dipendenti.** Allora $A^TA$ è singolare: la proiezione $\mathbf{p}$ esiste ancora, ma $\hat{\mathbf{x}}$ non è unico. Prima si toglie la colonna ridondante.
- **Confondere proiezione e riflessione.** La riflessione rispetto a $W$ è $2P-I$, non $P$: manda $\mathbf{b}=\mathbf{p}+\mathbf{e}$ in $\mathbf{p}-\mathbf{e}$.

## Collegamenti e riepilogo

- $C(A)^\perp=N(A^T)$, $\ \mathbb{R}^n=W\oplus W^\perp$, $\ \dim W+\dim W^\perp=n$.
- Proiezione: $A^TA\hat{\mathbf{x}}=A^T\mathbf{b}$, $\ P=A(A^TA)^{-1}A^T$, $\ P^2=P=P^T$; su una retta $P=\mathbf{a}\mathbf{a}^T/\mathbf{a}^T\mathbf{a}$.
- Idea chiave: il punto più vicino è quello con residuo ortogonale (Pitagora).
- Avanti: con una base ortonormale tutto si semplifica ([Gram-Schmidt e QR](/algebra-lineare/ortogonalita/13-gram-schmidt)). In statistica, $P$ è la «hat matrix» della regressione.

## Esercizi

**Esercizio 1.** Proietta $\mathbf{b}=(2,0,4)$ sulla retta generata da $\mathbf{a}=(1,2,2)$ e calcola la distanza di $\mathbf{b}$ dalla retta.

<details>
<summary>Soluzione</summary>

$\mathbf{a}^T\mathbf{b}=2+0+8=10$, $\mathbf{a}^T\mathbf{a}=9$, quindi $\mathbf{p}=\tfrac{10}{9}(1,2,2)=(10/9,\,20/9,\,20/9)$. Residuo $\mathbf{e}=(8/9,\,-20/9,\,16/9)$. Controllo: $\mathbf{a}^T\mathbf{e}=\tfrac{8-40+32}{9}=0$. Distanza $\lVert\mathbf{e}\rVert=\tfrac19\sqrt{64+400+256}=\tfrac{\sqrt{720}}{9}=\tfrac{4\sqrt5}{3}$.
</details>

**Esercizio 2.** Trova una base di $W^\perp$ per $W=\operatorname{span}\{(1,0,1),(0,1,1)\}\subseteq\mathbb{R}^3$ e verifica $\dim W+\dim W^\perp=3$.

<details>
<summary>Soluzione</summary>

$W^\perp=N(A^T)$ con $A^T=\left(\begin{smallmatrix}1&0&1\\0&1&1\end{smallmatrix}\right)$: il sistema $v_1+v_3=0$, $v_2+v_3=0$ con $v_3=t$ libero dà $\mathbf{v}=t(-1,-1,1)$. Base di $W^\perp$: $\{(-1,-1,1)\}$. I due generatori di $W$ non sono proporzionali, quindi $\dim W=2$; $\dim W^\perp=1$; somma $3$.
</details>

**Esercizio 3.** Dimostra che $P=A(A^TA)^{-1}A^T$ soddisfa $P^2=P$ e $P^T=P$.

<details>
<summary>Soluzione</summary>

*Idempotenza:* $P^2=A(A^TA)^{-1}\,(A^TA)\,(A^TA)^{-1}A^T$. Il prodotto centrale $(A^TA)(A^TA)^{-1}$ è $I$, e resta $A(A^TA)^{-1}A^T=P$.

*Simmetria:* $(XYZ)^T=Z^TY^TX^T$, quindi $P^T=A\,\big((A^TA)^{-1}\big)^T A^T$. L'inversa di una matrice simmetrica è simmetrica (trasponendo $MM^{-1}=I$ si ottiene $(M^{-1})^TM=I$, cioè $(M^{-1})^T=M^{-1}$), e $A^TA$ è simmetrica perché $(A^TA)^T=A^TA$. Quindi $P^T=P$.
</details>

**Esercizio 4.** Dimostra che $A^TA$ è invertibile se e solo se le colonne di $A$ sono linearmente indipendenti.

<details>
<summary>Soluzione</summary>

$A^TA$ è quadrata, quindi è invertibile se e solo se $A^TA\mathbf{x}=\mathbf{0}$ ha solo $\mathbf{x}=\mathbf{0}$. Mostriamo che $N(A^TA)=N(A)$.

Se $A\mathbf{x}=\mathbf{0}$, allora $A^TA\mathbf{x}=A^T\mathbf{0}=\mathbf{0}$. Viceversa, se $A^TA\mathbf{x}=\mathbf{0}$, moltiplicando a sinistra per $\mathbf{x}^T$ si ha $0=\mathbf{x}^TA^TA\mathbf{x}=(A\mathbf{x})^T(A\mathbf{x})=\lVert A\mathbf{x}\rVert^2$, quindi $A\mathbf{x}=\mathbf{0}$.

Le colonne di $A$ sono indipendenti se e solo se $N(A)=\{\mathbf{0}\}$, cioè se e solo se $N(A^TA)=\{\mathbf{0}\}$, cioè se e solo se $A^TA$ è invertibile.
</details>

**Esercizio 5.** Trova la retta dei minimi quadrati $y=\beta_0+\beta_1x$ per i punti $(0,1)$, $(1,3)$, $(2,4)$ e la somma dei quadrati dei residui.

<details>
<summary>Soluzione</summary>

$X=\left(\begin{smallmatrix}1&0\\1&1\\1&2\end{smallmatrix}\right)$, $\mathbf{y}=(1,3,4)$. $X^TX=\left(\begin{smallmatrix}3&3\\3&5\end{smallmatrix}\right)$, $X^T\mathbf{y}=(8,11)$. Il sistema $3\beta_0+3\beta_1=8$, $3\beta_0+5\beta_1=11$: sottraendo, $2\beta_1=3$, quindi $\hat\beta_1=3/2$ e $\hat\beta_0=(8-9/2)/3=7/6$. Retta $\hat y=\tfrac76+\tfrac32x$. Residui $-\tfrac16,\ \tfrac13,\ -\tfrac16$ (somma zero, come atteso con l'intercetta); somma dei quadrati $\tfrac1{36}+\tfrac4{36}+\tfrac1{36}=\tfrac16$.
</details>

**Esercizio 6.** Con la $P$ dell'Esempio 2, spiega senza moltiplicare perché $P(2,1,1)=(2,1,1)$ e $P(1,-1,-1)=\mathbf{0}$. Poi decomponi $\mathbf{b}=(3,0,0)$ come $\mathbf{w}+\mathbf{z}$ con $\mathbf{w}\in W$ e $\mathbf{z}\in W^\perp$.

<details>
<summary>Soluzione</summary>

$(2,1,1)=(1,1,0)+(1,0,1)\in W$, e la proiezione lascia fermi i vettori di $W$: il punto di $W$ più vicino a un vettore di $W$ è il vettore stesso. $(1,-1,-1)=\mathbf{n}\in W^\perp$, quindi il suo pezzo in $W$ è nullo.

Per $\mathbf{b}=(3,0,0)$ conviene passare da $W^\perp$: $\mathbf{z}=\frac{\mathbf{n}^T\mathbf{b}}{\mathbf{n}^T\mathbf{n}}\mathbf{n}=\frac33(1,-1,-1)=(1,-1,-1)$, e $\mathbf{w}=\mathbf{b}-\mathbf{z}=(2,1,1)$. Controllo: $\mathbf{w}\in W$ (è la somma dei due generatori) e $\mathbf{w}^T\mathbf{z}=2-1-1=0$.
</details>
