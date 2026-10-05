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

prerequisiti:
  - algebra-04-rango-rouche-capelli
  - algebra-11-prodotto-scalare

collegamenti:
  - algebra-13-gram-schmidt

fonti_integrate:
  - id_fonte: austin-ula
    ruolo: primaria
    sezioni_coperte: "§6.2 complemento ortogonale e trasposta (Im(A)⊥ = ker(Aᵀ)); §6.3 proiezione ortogonale come vettore più vicino, formula di proiezione su base ortogonale/ortonormale; §6.5 minimi quadrati, equazioni normali (Prop. 6.5.6–6.5.7), retta di regressione"
    note: "copre tutto il nucleo della lezione in Rⁿ con impostazione matriciale; primaria al posto di villanacci-math2, che non tratta questi argomenti"
  - id_fonte: axler-ladr
    ruolo: minore
    sezioni_coperte: "§6C: complemento ortogonale (6.46–6.48), V = U ⊕ U⊥ (6.49), proiezione ortogonale P_U e sue proprietà (6.55–6.57), minimizzazione della distanza da un sottospazio (6.61)"
    note: "verifica del rigore: decomposizione diretta e teorema di miglior approssimazione; non tratta le equazioni normali in forma matriciale"
  - id_fonte: villanacci-math2
    ruolo: appunti-prof
    sezioni_coperte: "Cap. 1 §1.2: prodotto scalare x·y in Rⁿ (Def. 7), spazio euclideo (Def. 9), norma (Def. 10), ortogonalità tra vettori non nulli (Def. 11); Cap. 3: trasposta (Def. 63)"
    note: "NON tratta complemento ortogonale, proiezione ortogonale né minimi quadrati: la notazione del professore è usata solo per prodotto scalare, norma e ortogonalità tra vettori; differenza di convenzione sull'ortogonalità (Def. 11 solo per vettori non nulli) segnalata in Teoria"

contratto: "3.0"
profondita: essenziale
tipo: teorica
versione: "1.0"
data_ultima_rielaborazione: "2026-10-04"
stato: da-rivedere
componenti_usati:
  - plot
  - checkpoint
---

## Intuizione

Con il sole allo zenit, cioè esattamente sopra di te, l'ombra della tua testa sul pavimento è il punto del pavimento più vicino alla testa: la luce scende perpendicolare, e il segmento che va dalla testa alla sua ombra è ortogonale al pavimento. Questa è tutta l'idea della lezione.

In astratto: hai un vettore $\mathbf{b}$ e un sottospazio $W$ (una retta, un piano, …) che non lo contiene. Cerchi il vettore $\mathbf{p}\in W$ più vicino a $\mathbf{b}$. La risposta è la **proiezione ortogonale**, e la si riconosce da una sola proprietà: il **residuo** $\mathbf{e}=\mathbf{b}-\mathbf{p}$ è perpendicolare a tutto $W$. Se $\mathbf{e}$ avesse anche solo una piccola componente lungo $W$, potresti spostarti in quella direzione e avvicinarti ancora.

Perché ci interessa? Perché molti sistemi $A\mathbf{x}=\mathbf{b}$ non hanno soluzione. Con 50 osservazioni di reddito e consumo e un modello $y=\beta_0+\beta_1x$ hai 50 equazioni e 2 incognite: i dati non stanno quasi mai esattamente su una retta. Non si può risolvere, ma si può chiedere la soluzione **migliore possibile**: quella che rende $A\mathbf{x}$ il più vicino possibile a $\mathbf{b}$. Poiché i vettori $A\mathbf{x}$ formano lo spazio delle colonne di $A$ (la sua immagine $\operatorname{Im}(A)$), la risposta è proiettare $\mathbf{b}$ su $\operatorname{Im}(A)$. È il metodo dei **minimi quadrati**, cioè la regressione lineare.

## Teoria

Lavoriamo nello spazio euclideo $\mathbb{R}^n$ con il prodotto scalare standard e la norma $\lVert\mathbf{v}\rVert=\sqrt{\langle\mathbf{v},\mathbf{v}\rangle}$ della lezione [Prodotto scalare e spazi con norma](/algebra-lineare/ortogonalita/11-prodotto-scalare).

**Simboli.** Tre scritture per lo stesso numero: $\langle\mathbf{u},\mathbf{v}\rangle=\mathbf{u}\cdot\mathbf{v}=\mathbf{u}^T\mathbf{v}=\sum_i u_iv_i$. Gli appunti del corso scrivono $\mathbf{x}\cdot\mathbf{y}$ (o $\mathbf{x}\mathbf{y}$); qui useremo $\langle\cdot,\cdot\rangle$ negli enunciati e $\mathbf{u}^T\mathbf{v}$ nei calcoli con le matrici, dove rende visibile il prodotto riga per colonna.

**Convenzione sull'ortogonalità.** Diciamo $\mathbf{u}\perp\mathbf{v}$ quando $\langle\mathbf{u},\mathbf{v}\rangle=0$, senza escludere il vettore nullo: $\mathbf{0}$ è ortogonale a tutto. Gli appunti del corso definiscono l'ortogonalità solo tra vettori **non nulli**; sui vettori non nulli le due definizioni coincidono. Seguiamo la nostra (che è anche quella della lezione 11) perché serve in due punti: $W^\perp$ deve contenere $\mathbf{0}$ per essere un sottospazio, e il residuo deve poter essere nullo quando $\mathbf{b}\in W$.

**Definizione (complemento ortogonale).** Dato un sottospazio $W\subseteq\mathbb{R}^n$,

$$
W^\perp=\{\mathbf{v}\in\mathbb{R}^n:\ \langle\mathbf{v},\mathbf{w}\rangle=0\ \text{ per ogni } \mathbf{w}\in W\}.
$$

Si legge «$W$ ortogonale»: è l'insieme dei vettori perpendicolari a *ogni* vettore di $W$. È un sottospazio: se $\mathbf{v}_1,\mathbf{v}_2\perp\mathbf{w}$, allora $\langle\alpha\mathbf{v}_1+\beta\mathbf{v}_2,\mathbf{w}\rangle=\alpha\cdot0+\beta\cdot0=0$ per linearità del prodotto scalare. Inoltre $W\cap W^\perp=\{\mathbf{0}\}$: un vettore in entrambi è ortogonale a sé stesso, quindi $\lVert\mathbf{v}\rVert^2=0$ e $\mathbf{v}=\mathbf{0}$.

Per verificare $\mathbf{v}\in W^\perp$ basta controllare dei **generatori** $\mathbf{a}_1,\dots,\mathbf{a}_k$ di $W$ (non serve che siano indipendenti): se $\mathbf{v}$ è ortogonale a ciascuno, è ortogonale a ogni loro combinazione lineare, sempre per linearità. Mettendo i generatori nelle colonne di $A=[\mathbf{a}_1\ \cdots\ \mathbf{a}_k]$, le condizioni $\mathbf{a}_j^T\mathbf{v}=0$ sono le righe del sistema $A^T\mathbf{v}=\mathbf{0}$. Quindi, per **ogni** matrice $A$ (anche con colonne dipendenti),

$$
\operatorname{Im}(A)^\perp=\ker(A^T).
$$

Il complemento ortogonale dello spazio delle colonne (immagine) è il nucleo della trasposta; immagine, nucleo e rango $\operatorname{rk}$ sono quelli di [Rango e teorema di Rouché-Capelli](/algebra-lineare/fondamenti/04-rango-rouche-capelli). Scegliendo come colonne di $A$ una base di $W$ (quindi $k=\dim W$ e $\operatorname{rk}(A)=k$), il teorema di nullità più rango, dimostrato in quella lezione e applicato a $A^T$, che ha $n$ colonne e rango $k$ (rango righe = rango colonne), dà $\dim\ker(A^T)=n-k$. Dunque $\dim W+\dim W^\perp=n$.

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

**Proiezione su un sottospazio.** Sia $W=\operatorname{Im}(A)$, con $A$ di tipo $n\times k$ a colonne linearmente indipendenti (una base di $W$). Un vettore di $W$ si scrive $\mathbf{p}=A\hat{\mathbf{x}}$ per un unico $\hat{\mathbf{x}}\in\mathbb{R}^k$. La richiesta «residuo ortogonale a $W$» significa $\mathbf{b}-A\hat{\mathbf{x}}\in \operatorname{Im}(A)^\perp=\ker(A^T)$, cioè $A^T(\mathbf{b}-A\hat{\mathbf{x}})=\mathbf{0}$. Queste sono le **equazioni normali**:

$$
A^TA\,\hat{\mathbf{x}}=A^T\mathbf{b}.
$$

$A^TA$ è $k\times k$ e simmetrica. Riga chiave: $\ker(A^TA)=\ker(A)$, perché se $A^TA\mathbf{x}=\mathbf{0}$ allora $0=\mathbf{x}^TA^TA\mathbf{x}=\lVert A\mathbf{x}\rVert^2$, quindi $A\mathbf{x}=\mathbf{0}$ (l'altra inclusione: $A\mathbf{x}=\mathbf{0}$ implica $A^TA\mathbf{x}=\mathbf{0}$). Una matrice quadrata è invertibile se e solo se il suo nucleo è $\{\mathbf{0}\}$, quindi $A^TA$ è invertibile se e solo se $\ker(A)=\{\mathbf{0}\}$, cioè se e solo se le colonne di $A$ sono indipendenti (dettagli nell'Esercizio 4). In quel caso

$$
\hat{\mathbf{x}}=(A^TA)^{-1}A^T\mathbf{b},\qquad \mathbf{p}=P\mathbf{b},\qquad P=A(A^TA)^{-1}A^T.
$$

> **Attenzione.** Se le colonne sono dipendenti, $A^TA$ è singolare: la proiezione $\mathbf{p}$ esiste ancora, ma $\hat{\mathbf{x}}$ non è unico. Prima si toglie la colonna ridondante. E $(A^TA)^{-1}A^T$ non è $A^{-1}$: $A$ è in generale rettangolare e non ha inversa (se è quadrata e invertibile, $P=I$).

Simboli: $\hat{\mathbf{x}}$ sono le coordinate della proiezione nella base delle colonne di $A$; $P$ è la **matrice di proiezione** su $W$, di tipo $n\times n$. Per $k=1$ si ritrova $P_{\mathbf{a}}$. Proprietà di $P$:

- $P^2=P$: proiettare una seconda volta non cambia nulla, perché $\mathbf{p}$ sta già in $W$;
- $P^T=P$: $P$ è simmetrica;
- $I-P$ è la proiezione su $W^\perp$: $(I-P)\mathbf{b}=\mathbf{b}-\mathbf{p}=\mathbf{e}\in W^\perp$ (passo 1 della dimostrazione), e ciò che resta, $P\mathbf{b}\in W$, è ortogonale a ogni vettore di $W^\perp$: è la stessa caratterizzazione «residuo ortogonale» applicata a $W^\perp$. Inoltre $\mathbf{b}=P\mathbf{b}+(I-P)\mathbf{b}$.

> **Attenzione.** Il test della proiezione è sempre l'ortogonalità del residuo, $A^T(\mathbf{b}-\mathbf{p})=\mathbf{0}$: un punto di $W$ «vicino a occhio» non basta. E proiezione non è riflessione: la riflessione rispetto a $W$ è $2P-I$, che manda $\mathbf{p}+\mathbf{e}$ in $\mathbf{p}-\mathbf{e}$.

**Decomposizione ortogonale.** $\mathbb{R}^n=W\oplus W^\perp$: ogni $\mathbf{b}$ si scrive in uno e un solo modo come un pezzo in $W$ più un pezzo in $W^\perp$. Le due metà hanno giustificazioni diverse.
- *Esistenza:* $\mathbf{b}=P\mathbf{b}+(\mathbf{b}-P\mathbf{b})$. Il primo pezzo sta in $W$ perché è $A\hat{\mathbf{x}}$; che il secondo stia in $W^\perp$ è il **passo 1 della dimostrazione** nella sezione Dimostrazioni, che usa solo le equazioni normali e $\operatorname{Im}(A)^\perp=\ker(A^T)$, entrambe già stabilite qui sopra. (Se $W=\{\mathbf{0}\}$ non serve una base: $\mathbf{b}=\mathbf{0}+\mathbf{b}$.)
- *Unicità:* viene da $W\cap W^\perp=\{\mathbf{0}\}$. Se $\mathbf{w}_1+\mathbf{z}_1=\mathbf{w}_2+\mathbf{z}_2$, allora $\mathbf{w}_1-\mathbf{w}_2=\mathbf{z}_2-\mathbf{z}_1$ sta in entrambi, quindi è nullo.

Se la base di $W$ è **ortonormale** (colonne di $Q$ con $Q^TQ=I$), allora $A^TA=Q^TQ=I$ e la formula si semplifica in $P=QQ^T$: costruire una base così è lo scopo del [Processo di Gram-Schmidt e fattorizzazione QR](/algebra-lineare/ortogonalita/13-gram-schmidt).

> **Attenzione.** $P=QQ^T$ vale solo se $Q^TQ=I$. Con una base qualsiasi serve $A(A^TA)^{-1}A^T$.

**Minimi quadrati.** Per ogni $\mathbf{b}\in\mathbb{R}^n$ si chiama **soluzione ai minimi quadrati** di $A\mathbf{x}=\mathbf{b}$ un vettore $\hat{\mathbf{x}}$ che minimizza $\lVert A\mathbf{x}-\mathbf{b}\rVert^2$, la somma dei quadrati degli scarti. Se il sistema ha soluzione ($\mathbf{b}\in\operatorname{Im}(A)$) il minimo è $0$ e le soluzioni ai minimi quadrati coincidono con le soluzioni ordinarie; il caso interessante è $\mathbf{b}\notin\operatorname{Im}(A)$. Poiché $A\mathbf{x}$ percorre tutto $\operatorname{Im}(A)$, minimizzare $\lVert A\mathbf{x}-\mathbf{b}\rVert$ significa cercare il punto di $\operatorname{Im}(A)$ più vicino a $\mathbf{b}$. Il teorema della sezione successiva dice che quel punto è la proiezione: $\hat{\mathbf{x}}$ risolve le equazioni normali.

```checkpoint
[domanda]
Se $\mathbf{b}\in \operatorname{Im}(A)$ e le colonne di $A$ sono indipendenti, che cosa restituiscono le equazioni normali?

[risposta]
In quel caso $A\mathbf{x}=\mathbf{b}$ ha una soluzione esatta $\mathbf{x}^*$. Moltiplicando per $A^T$ si ottiene $A^TA\mathbf{x}^*=A^T\mathbf{b}$, e poiché $A^TA$ è invertibile la soluzione delle equazioni normali è unica: $\hat{\mathbf{x}}=\mathbf{x}^*$. La proiezione è $\mathbf{b}$ stesso e il residuo è nullo. I minimi quadrati estendono la soluzione ordinaria e non la contraddicono.
```

## Dimostrazioni

**Teorema (miglior approssimazione).** Sia $W=\operatorname{Im}(A)$ con colonne di $A$ indipendenti, $\mathbf{p}=P\mathbf{b}$. Per ogni $\mathbf{w}\in W$ vale $\lVert\mathbf{b}-\mathbf{w}\rVert\ge\lVert\mathbf{b}-\mathbf{p}\rVert$, con uguaglianza solo per $\mathbf{w}=\mathbf{p}$.

*Dimostrazione.*

1. *Il residuo è ortogonale a $W$.* Per costruzione $\hat{\mathbf{x}}$ risolve $A^TA\hat{\mathbf{x}}=A^T\mathbf{b}$, cioè $A^T(\mathbf{b}-A\hat{\mathbf{x}})=\mathbf{0}$. Quindi $\mathbf{e}=\mathbf{b}-\mathbf{p}\in \ker(A^T)=\operatorname{Im}(A)^\perp=W^\perp$. (È questo passo a dare l'esistenza nella decomposizione $\mathbb{R}^n=W\oplus W^\perp$ enunciata in Teoria.)
2. *Spezziamo la distanza.* Per $\mathbf{w}\in W$ qualunque scriviamo $\mathbf{b}-\mathbf{w}=(\mathbf{b}-\mathbf{p})+(\mathbf{p}-\mathbf{w})$, sommando e sottraendo $\mathbf{p}$.
3. *I due pezzi sono ortogonali.* $\mathbf{p}-\mathbf{w}\in W$, perché differenza di due vettori del sottospazio $W$; $\mathbf{b}-\mathbf{p}\in W^\perp$ per il passo 1. Quindi $\langle\mathbf{b}-\mathbf{p},\mathbf{p}-\mathbf{w}\rangle=0$.
4. *Pitagora.* Per il teorema di Pitagora di [Prodotto scalare e spazi con norma](/algebra-lineare/ortogonalita/11-prodotto-scalare), applicato ai due vettori ortogonali del passo 3:

$$
\lVert\mathbf{b}-\mathbf{w}\rVert^2=\lVert\mathbf{b}-\mathbf{p}\rVert^2+\lVert\mathbf{p}-\mathbf{w}\rVert^2.
$$

5. *Conclusione.* Il secondo addendo è $\ge0$, quindi $\lVert\mathbf{b}-\mathbf{w}\rVert^2\ge\lVert\mathbf{b}-\mathbf{p}\rVert^2$. Vale l'uguaglianza se e solo se $\lVert\mathbf{p}-\mathbf{w}\rVert=0$, cioè $\mathbf{w}=\mathbf{p}$ (separazione della norma). $\blacksquare$

Il teorema giustifica i minimi quadrati: il minimo di $\lVert A\mathbf{x}-\mathbf{b}\rVert$ si raggiunge quando $A\mathbf{x}=\mathbf{p}$, e poiché le colonne sono indipendenti c'è un solo $\mathbf{x}$ con questa proprietà, $\hat{\mathbf{x}}$.

## Esempi

**Esempio 1 (proiezione su una retta).** Proiettare $\mathbf{b}=(4,3)$ sulla retta generata da $\mathbf{a}=(1,2)$.

*Strategia:* formula della retta, poi controllo che il residuo sia ortogonale. $\mathbf{a}^T\mathbf{b}=4+6=10$ e $\mathbf{a}^T\mathbf{a}=5$, quindi $c=2$ e $\mathbf{p}=(2,4)$. Residuo $\mathbf{e}=(2,-1)$; controllo $\mathbf{a}^T\mathbf{e}=2-2=0$. Distanza di $\mathbf{b}$ dalla retta: $\lVert\mathbf{e}\rVert=\sqrt5$.

Lo stesso risultato visto come problema di minimo. La distanza al quadrato da $\mathbf{b}$ al punto $c\,\mathbf{a}$ della retta è $f(c)=\lVert\mathbf{b}-c\,\mathbf{a}\rVert^2=(4-c)^2+(3-2c)^2=5c^2-20c+25$. Osserva nel grafico che il minimo della parabola cade proprio in $c=2$, il coefficiente della proiezione, e vale $5=\lVert\mathbf{e}\rVert^2$.

```plot
{
  "fn": "5*x**2 - 20*x + 25",
  "domain": [-0.5, 4.5],
  "yDomain": [0, 40],
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

**Esempio 4 (retta dei minimi quadrati).** Quattro famiglie hanno reddito annuo $x=1,2,3,4$ (in **decine di migliaia** di euro: da 10 000 a 40 000 €) e spesa alimentare annua $y=2,3,5,6$ (in **migliaia** di euro). Cerchiamo $y\approx\beta_0+\beta_1x$.

*Modello come sistema:* una equazione per osservazione, $\beta_0+\beta_1x_i=y_i$. In forma matriciale $X\boldsymbol\beta=\mathbf{y}$, con una colonna di uno (per $\beta_0$) e la colonna dei redditi:

$$
X=\begin{pmatrix}1&1\\1&2\\1&3\\1&4\end{pmatrix},\qquad X^TX=\begin{pmatrix}4&10\\10&30\end{pmatrix},\qquad X^T\mathbf{y}=\begin{pmatrix}16\\47\end{pmatrix}.
$$

Il sistema è incompatibile (quattro punti non allineati). Le equazioni normali sono $4\beta_0+10\beta_1=16$, $10\beta_0+30\beta_1=47$. La loro matrice dei coefficienti $X^TX$ ha determinante $4\cdot30-10\cdot10=20\neq0$, quindi la soluzione è unica: $\hat\beta_0=1/2$, $\hat\beta_1=7/5$. Retta stimata: $\hat y=0{,}5+1{,}4\,x$. Lettura con le unità: ogni 10 000 € di reddito in più, la spesa alimentare stimata sale di 1 400 €, cioè 14 centesimi per ogni euro in più (propensione marginale alla spesa alimentare $0{,}14$, in questo campione inventato); l'intercetta è una spesa di base di 500 € (estrapolazione: nel campione nessuna famiglia ha reddito nullo). Valori stimati $1{,}9;\ 3{,}3;\ 4{,}7;\ 6{,}1$; residui $0{,}1;\ -0{,}3;\ 0{,}3;\ -0{,}1$ (cioè $\pm100$ € e $\pm300$ €); somma dei quadrati $0{,}2$.

*Ragionamento:* i residui sommano a zero, e non per caso. Il residuo è ortogonale a ogni colonna di $X$, quindi anche alla colonna di uno: $\mathbf{1}^T\mathbf{e}=\sum_i e_i=0$. Ogni regressione con intercetta ha questa proprietà.

## Collegamenti e riepilogo

- $\operatorname{Im}(A)^\perp=\ker(A^T)$, $\ \mathbb{R}^n=W\oplus W^\perp$, $\ \dim W+\dim W^\perp=n$.
- Proiezione: $A^TA\hat{\mathbf{x}}=A^T\mathbf{b}$, $\ P=A(A^TA)^{-1}A^T$, $\ P^2=P=P^T$; su una retta $P=\mathbf{a}\mathbf{a}^T/\mathbf{a}^T\mathbf{a}$.
- Idea chiave: il punto più vicino è quello con residuo ortogonale (Pitagora).
- Avanti: con una base ortonormale tutto si semplifica ([Processo di Gram-Schmidt e fattorizzazione QR](/algebra-lineare/ortogonalita/13-gram-schmidt)). In statistica, $P$ è la «hat matrix» della regressione.

## Esercizi

**Esercizio 1.** Proietta $\mathbf{b}=(2,0,4)$ sulla retta generata da $\mathbf{a}=(1,2,2)$ e calcola la distanza di $\mathbf{b}$ dalla retta.

<details>
<summary>Soluzione</summary>

$\mathbf{a}^T\mathbf{b}=2+0+8=10$, $\mathbf{a}^T\mathbf{a}=9$, quindi $\mathbf{p}=\tfrac{10}{9}(1,2,2)=(10/9,\,20/9,\,20/9)$. Residuo $\mathbf{e}=(8/9,\,-20/9,\,16/9)$. Controllo: $\mathbf{a}^T\mathbf{e}=\tfrac{8-40+32}{9}=0$. Distanza $\lVert\mathbf{e}\rVert=\tfrac19\sqrt{64+400+256}=\tfrac{\sqrt{720}}{9}=\tfrac{4\sqrt5}{3}$.
</details>

**Esercizio 2.** Trova una base di $W^\perp$ per $W=\operatorname{span}\{(1,0,1),(0,1,1)\}\subseteq\mathbb{R}^3$ e verifica $\dim W+\dim W^\perp=3$.

<details>
<summary>Soluzione</summary>

$W^\perp=\ker(A^T)$ con $A^T=\left(\begin{smallmatrix}1&0&1\\0&1&1\end{smallmatrix}\right)$: il sistema $v_1+v_3=0$, $v_2+v_3=0$ con $v_3=t$ libero dà $\mathbf{v}=t(-1,-1,1)$. Base di $W^\perp$: $\{(-1,-1,1)\}$. I due generatori di $W$ non sono proporzionali, quindi $\dim W=2$; $\dim W^\perp=1$; somma $3$.
</details>

**Esercizio 3.** Dimostra che $P=A(A^TA)^{-1}A^T$ soddisfa $P^2=P$ e $P^T=P$.

<details>
<summary>Soluzione</summary>

*Idempotenza:* $P^2=A(A^TA)^{-1}\,(A^TA)\,(A^TA)^{-1}A^T$. Il prodotto centrale $(A^TA)(A^TA)^{-1}$ è $I$, e resta $A(A^TA)^{-1}A^T=P$.

*Simmetria:* $(XYZ)^T=Z^TY^TX^T$, quindi $P^T=A\,\big((A^TA)^{-1}\big)^T A^T$. $A^TA$ è simmetrica perché $(A^TA)^T=A^T(A^T)^T=A^TA$. E l'inversa di una matrice simmetrica $M$ è simmetrica: trasponendo $MM^{-1}=I$ si ottiene $(M^{-1})^TM^T=I$; poiché $M^T=M$, questo dice $(M^{-1})^TM=I$, cioè $(M^{-1})^T$ è un'inversa di $M$, e per l'unicità dell'inversa $(M^{-1})^T=M^{-1}$. Con $M=A^TA$ si ottiene $\big((A^TA)^{-1}\big)^T=(A^TA)^{-1}$, quindi $P^T=A(A^TA)^{-1}A^T=P$.
</details>

**Esercizio 4.** Dimostra che $A^TA$ è invertibile se e solo se le colonne di $A$ sono linearmente indipendenti.

<details>
<summary>Soluzione</summary>

$A^TA$ è quadrata, quindi è invertibile se e solo se $A^TA\mathbf{x}=\mathbf{0}$ ha solo $\mathbf{x}=\mathbf{0}$. Mostriamo che $\ker(A^TA)=\ker(A)$.

Se $A\mathbf{x}=\mathbf{0}$, allora $A^TA\mathbf{x}=A^T\mathbf{0}=\mathbf{0}$. Viceversa, se $A^TA\mathbf{x}=\mathbf{0}$, moltiplicando a sinistra per $\mathbf{x}^T$ si ha $0=\mathbf{x}^TA^TA\mathbf{x}=(A\mathbf{x})^T(A\mathbf{x})=\lVert A\mathbf{x}\rVert^2$, quindi $A\mathbf{x}=\mathbf{0}$.

Le colonne di $A$ sono indipendenti se e solo se $\ker(A)=\{\mathbf{0}\}$, cioè se e solo se $\ker(A^TA)=\{\mathbf{0}\}$, cioè se e solo se $A^TA$ è invertibile.
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
