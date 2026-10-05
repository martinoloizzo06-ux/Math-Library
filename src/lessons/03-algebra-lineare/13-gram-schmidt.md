---
id: algebra-13-gram-schmidt
titolo: "Processo di Gram-Schmidt e fattorizzazione QR"
materia: algebra-lineare
argomento: "Ortogonalità"
modulo: "Ortogonalità"
livello: universitario
slug: algebra-13-gram-schmidt

# legacy
subject: algebra-lineare
topic_it: Ortogonalità
topic_en: Orthogonality
title_it: "Processo di Gram-Schmidt e fattorizzazione QR"
title_en: "Gram-Schmidt process and QR factorization"
level: blue
order: 13

prerequisiti:
  - algebra-03-sistemi-lineari
  - algebra-06-indipendenza-basi
  - algebra-08-determinanti
  - algebra-11-prodotto-scalare
  - algebra-12-ortogonalita-proiezioni

collegamenti:
  - algebra-10-diagonalizzazione
  - algebra-14-forme-quadratiche

fonti_integrate:
  - id_fonte: austin-ula
    ruolo: primaria
    sezioni_coperte: "§6.4.1 algoritmo di Gram-Schmidt in Rⁿ (prima una base ortogonale, poi la normalizzazione; Example 6.4.4); §6.4.2 fattorizzazione QR, Prop. 6.4.5 (A m×n a colonne indipendenti: Q m×n a colonne ortonormali, R n×n triangolare superiore); §6.5 «Using QR factorizations», Prop. 6.5.10 (soluzione ai minimi quadrati x̂ = R⁻¹Qᵀb, cioè R x̂ = Qᵀb, ricavata nell'Activity 6.5.4)"
    note: "copre il nucleo della lezione in Rⁿ con l'impostazione matriciale della lezione 12. Sulla stabilità numerica le fonti del catalogo coprono solo l'affermazione «la via QR è più affidabile delle equazioni normali, che accumulano errori di arrotondamento» (§6.5, paragrafo introduttivo di «Using QR factorizations», che porta alla Prop. 6.5.10); il cenno qualitativo a Gram-Schmidt modificato in Procedura non è coperto da nessuna fonte del catalogo"
  - id_fonte: axler-ladr
    ruolo: minore
    sezioni_coperte: "6.30 coordinate rispetto a una base ortonormale; 6.32 procedura di Gram-Schmidt (enunciato e dimostrazione per induzione); 6.36 ogni lista ortonormale si estende a una base ortonormale; 7.58 fattorizzazione QR di una matrice quadrata (esistenza e unicità con diagonale di R positiva); cenno all'algoritmo QR per gli autovalori nel paragrafo che precede 7.58 («QR algorithm (not discussed here)»); esercizi 6B.9 (⟨vₖ, eₖ⟩ > 0, cioè diagonale di R positiva), 6B.10 (unicità della lista prodotta), 6B.13 (vettore nullo se e solo se la lista è dipendente), 6B.14 (2ᵐ liste ortonormali con gli stessi span)"
    note: "verifica del rigore e traccia della dimostrazione chiave; Axler tratta QR solo per matrici quadrate e lavora su F = R o C (qui solo il caso reale)"
  - id_fonte: cherney-linalg
    ruolo: minore
    sezioni_coperte: "§14.4.1 procedura di Gram-Schmidt; §14.5 decomposizione QR, Example 136 (QR di una 3×3 registrando in R i passi di Gram-Schmidt), con il cenno all'uso di QR per sistemi lineari, autovalori e minimi quadrati"
    note: "esempi e verifica"
  - id_fonte: villanacci-math2
    ruolo: appunti-prof
    sezioni_coperte: "Cap. 1 §1.2: prodotto scalare x·y in Rⁿ (Def. 7), norma (Def. 10), ortogonalità tra vettori non nulli (Def. 11); Cap. 2: sistema in forma triangolare (Def. 32, §2.3) e sostituzione all'indietro (Prop. 33), matrice triangolare superiore (Def. 46, §2.5); Cap. 3: trasposta (Def. 63)"
    note: "NON tratta Gram-Schmidt, basi ortonormali né la fattorizzazione QR: la notazione del professore è usata solo per prodotto scalare, norma, ortogonalità, trasposta, matrice triangolare e sostituzione all'indietro; confronto dei simboli in Teoria"

contratto: "3.0"
profondita: essenziale
tipo: tecnica
versione: "1.0"
data_ultima_rielaborazione: "2026-10-05"
stato: completa
componenti_usati:
  - checkpoint
---

## Intuizione

Nelle lezioni precedenti le basi ortonormali hanno sempre semplificato i conti: in una base ortonormale le coordinate di un vettore sono semplici prodotti scalari, e la proiezione su un sottospazio è $P=QQ^T$ invece di $A(A^TA)^{-1}A^T$ ([Ortogonalità e proiezioni ortogonali](/algebra-lineare/ortogonalita/12-ortogonalita-proiezioni)). Ma i sottospazi che incontriamo arrivano quasi sempre descritti da vettori qualunque: le colonne di una matrice di dati, i generatori di un piano. Serve un metodo per passare da una base qualunque a una base ortonormale **dello stesso sottospazio**.

L'idea è quella di chi squadra un telaio, un lato alla volta. Si tiene fermo il primo vettore. Dal secondo si toglie la sua «ombra» sulla retta del primo, cioè la proiezione ortogonale: ciò che resta è perpendicolare al primo e sta ancora nel piano dei due. Dal terzo si toglie l'ombra sul piano dei primi due, e così via. Alla fine si porta ogni vettore a lunghezza $1$. È il **processo di Gram-Schmidt**.

Se si annotano i coefficienti tolti a ogni passo, si ottiene una fattorizzazione $A=QR$: $Q$ ha colonne ortonormali, $R$ è triangolare superiore. È lo strumento con cui il software risolve i minimi quadrati senza formare $A^TA$, e il punto di partenza dell'algoritmo con cui si calcolano gli autovalori.

## Teoria

Lavoriamo in uno spazio euclideo, cioè uno spazio vettoriale reale con un prodotto scalare $\langle\cdot,\cdot\rangle$ e la norma indotta $\lVert\mathbf{v}\rVert=\sqrt{\langle\mathbf{v},\mathbf{v}\rangle}$ ([Prodotto scalare e spazi con norma](/algebra-lineare/ortogonalita/11-prodotto-scalare)); negli esempi è $\mathbb{R}^n$ con il prodotto standard.

**Simboli.** Come nelle lezioni 11 e 12: $\langle\mathbf{u},\mathbf{v}\rangle$ negli enunciati, $\mathbf{u}^T\mathbf{v}$ nei calcoli con le matrici; gli appunti del corso scrivono $\mathbf{x}\cdot\mathbf{y}$. Qui $\mathbf{a}_1,\dots,\mathbf{a}_k$ sono i vettori di partenza (le colonne di $A$), $\mathbf{u}_1,\dots,\mathbf{u}_k$ i vettori ortogonali costruiti, $\mathbf{q}_1,\dots,\mathbf{q}_k$ quelli normalizzati, e $V_j=\operatorname{span}\{\mathbf{a}_1,\dots,\mathbf{a}_j\}$. La lettera $\mathbf{e}$ resta riservata al residuo dei minimi quadrati, come nella 12.

**Perché le basi ortonormali.** Se $\mathbf{q}_1,\dots,\mathbf{q}_k$ è una famiglia ortonormale (lezione 11: $\langle\mathbf{q}_i,\mathbf{q}_j\rangle$ vale $1$ se $i=j$ e $0$ altrimenti) e $\mathbf{v}=\sum_j c_j\mathbf{q}_j$, il prodotto scalare con $\mathbf{q}_i$ dà, per linearità, $\langle\mathbf{v},\mathbf{q}_i\rangle=\sum_j c_j\langle\mathbf{q}_j,\mathbf{q}_i\rangle=c_i$: **le coordinate sono prodotti scalari**, senza risolvere sistemi. In $\mathbb{R}^n$, con $Q=[\mathbf{q}_1\ \cdots\ \mathbf{q}_k]$, la proiezione della 12 diventa

$$
QQ^T\mathbf{b}=\sum_{j=1}^k \mathbf{q}_j\,(\mathbf{q}_j^T\mathbf{b})=\sum_{j=1}^k\langle\mathbf{b},\mathbf{q}_j\rangle\,\mathbf{q}_j ,
$$

perché $Q^T\mathbf{b}$ è il vettore dei prodotti scalari $\mathbf{q}_j^T\mathbf{b}$ e moltiplicarlo per $Q$ combina le colonne di $Q$ con quei pesi. Ogni addendo è la proiezione di $\mathbf{b}$ sulla retta di $\mathbf{q}_j$: con una base ortonormale si proietta **una direzione alla volta**.

**Teorema (Gram-Schmidt).** Siano $\mathbf{a}_1,\dots,\mathbf{a}_k$ linearmente indipendenti. Si ponga $\mathbf{u}_1=\mathbf{a}_1$ e, per $j=2,\dots,k$,

$$
\mathbf{u}_j=\mathbf{a}_j-\sum_{i=1}^{j-1}\frac{\langle\mathbf{a}_j,\mathbf{u}_i\rangle}{\langle\mathbf{u}_i,\mathbf{u}_i\rangle}\,\mathbf{u}_i,\qquad \mathbf{q}_j=\frac{\mathbf{u}_j}{\lVert\mathbf{u}_j\rVert}\quad(j=1,\dots,k).
$$

Allora ogni $\mathbf{u}_j$ è non nullo, gli $\mathbf{u}_j$ sono a due a due ortogonali, i $\mathbf{q}_j$ formano una famiglia ortonormale e, per ogni $j$, $\operatorname{span}\{\mathbf{u}_1,\dots,\mathbf{u}_j\}=\operatorname{span}\{\mathbf{q}_1,\dots,\mathbf{q}_j\}=V_j$.

Lettura: la somma è la proiezione di $\mathbf{a}_j$ sul sottospazio $V_{j-1}$ già sistemato, calcolata con la sua base ortogonale $\mathbf{u}_1,\dots,\mathbf{u}_{j-1}$ (ogni addendo è la proiezione su una retta, con la formula della 12). In uno spazio euclideo qualunque è proprio questa somma a definire la proiezione su $V_{j-1}$; la lezione 12 tratta il caso $\mathbb{R}^n$. Dunque $\mathbf{u}_j$ è il residuo di quella proiezione: la parte di $\mathbf{a}_j$ «nuova» rispetto ai vettori precedenti. L'ipotesi di indipendenza serve a garantire $\mathbf{u}_j\neq\mathbf{0}$, cioè che i denominatori non si annullino. Poiché $\mathbf{u}_i=\lVert\mathbf{u}_i\rVert\,\mathbf{q}_i$, ogni addendo si può scrivere anche $\langle\mathbf{a}_j,\mathbf{q}_i\rangle\,\mathbf{q}_i$ (le norme si semplificano): è la forma che darà $R$. La dimostrazione è nella sezione Dimostrazioni.

> **Attenzione.** Con vettori dipendenti il processo segnala da solo il problema. Al primo $j$ con $\mathbf{a}_j\in V_{j-1}$ si ottiene $\mathbf{u}_j=\mathbf{0}$, perché un vettore che sta già in $V_{j-1}$ coincide con la propria proiezione su $V_{j-1}$; e $\mathbf{0}$ non si può normalizzare. Si scarta $\mathbf{a}_j$ (lo span non cambia, perché $\mathbf{a}_j$ è combinazione dei precedenti) e si prosegue: i $\mathbf{q}$ ottenuti sono una base ortonormale dello span di tutti gli $\mathbf{a}$ (Esercizio 3).

```checkpoint
[domanda]
Applichi Gram-Schmidt a $\mathbf{a}_1=(3,4)$ e $\mathbf{a}_2=(-8,6)$. Che cosa succede al passo 2? Quali sono $\mathbf{q}_1$ e $\mathbf{q}_2$?

[risposta]
$\langle\mathbf{a}_2,\mathbf{u}_1\rangle=-24+24=0$: il coefficiente da togliere è nullo e $\mathbf{u}_2=\mathbf{a}_2$. Resta solo da normalizzare: $\mathbf{q}_1=\tfrac15(3,4)$, $\mathbf{q}_2=\tfrac1{10}(-8,6)=\tfrac15(-4,3)$. Su una famiglia già ortogonale Gram-Schmidt si limita a normalizzare.
```

**Fattorizzazione QR.** Sia $A$ una matrice $n\times k$ con colonne $\mathbf{a}_1,\dots,\mathbf{a}_k$ linearmente indipendenti (quindi $k\le n$). Allora

$$
A=QR,
$$

con $Q$ di tipo $n\times k$ a colonne ortonormali ($Q^TQ=I_k$) e $R$ di tipo $k\times k$ **triangolare superiore** (zeri sotto la diagonale principale, appunti Def. 46) con diagonale positiva. È la **QR ridotta**.

*Perché esiste.* Si applica Gram-Schmidt alle colonne di $A$ e si pone $Q=[\mathbf{q}_1\ \cdots\ \mathbf{q}_k]$. Riscrivendo la formula del teorema nella forma con i $\mathbf{q}$, e usando $\mathbf{u}_j=\lVert\mathbf{u}_j\rVert\,\mathbf{q}_j$,

$$
\mathbf{a}_j=\sum_{i=1}^{j-1}\langle\mathbf{a}_j,\mathbf{q}_i\rangle\,\mathbf{q}_i+\lVert\mathbf{u}_j\rVert\,\mathbf{q}_j .
$$

La colonna $j$ di $A$ è combinazione dei soli $\mathbf{q}_1,\dots,\mathbf{q}_j$; i coefficienti formano la colonna $j$ di $R$: $r_{ij}=\langle\mathbf{a}_j,\mathbf{q}_i\rangle$ per $i<j$, $r_{jj}=\lVert\mathbf{u}_j\rVert>0$, $r_{ij}=0$ per $i>j$. Poiché $Q^TQ=I$, moltiplicando $A=QR$ a sinistra per $Q^T$ si ottiene anche $R=Q^TA$, cioè $r_{ij}=\mathbf{q}_i^T\mathbf{a}_j$: è il modo più comodo di calcolare $R$.

*Quasi unica.* Se si chiede $r_{jj}>0$ per ogni $j$, la QR ridotta è **unica**. Senza questa richiesta ogni colonna di $Q$ è fissata solo a meno del segno: cambiando segno a $\mathbf{q}_j$ e alla riga $j$ di $R$ si ottiene un'altra fattorizzazione (Esercizio 4). L'idea: $\mathbf{q}_j$ deve essere un vettore di norma $1$ che sta in $V_j$ ed è ortogonale a $V_{j-1}$, e di vettori così ce ne sono esattamente due, opposti. La dimostrazione completa dell'unicità è nell'Approfondimento.

**QR completa.** Si aggiungono a $\mathbf{q}_1,\dots,\mathbf{q}_k$ altri $n-k$ vettori ortonormali: una base di $\operatorname{Im}(A)^\perp=\ker(A^T)$ (lezione 12), resa ortonormale con Gram-Schmidt; i suoi vettori sono ortogonali a tutti i $\mathbf{q}_j$, che stanno in $\operatorname{Im}(A)$. Si ottiene una matrice quadrata $\tilde Q=[Q\ \ Q_2]$, $n\times n$, con $\tilde Q^T\tilde Q=I_n$, quindi $\tilde Q^{-1}=\tilde Q^T$. Con $\tilde R=\left(\begin{smallmatrix}R\\ 0\end{smallmatrix}\right)$, di tipo $n\times k$, vale ancora $A=\tilde Q\tilde R$, perché le righe nulle di $\tilde R$ annullano il contributo di $Q_2$. Se $k<n$ la QR completa non è unica, nemmeno imponendo $r_{jj}>0$: $Q_2$ si può sostituire con $Q_2U$ per ogni matrice ortogonale $U$ di ordine $n-k$, perché $(Q_2U)^T(Q_2U)=U^TU=I$, le colonne di $Q_2U$ restano in $\ker(A^T)$ e $\tilde R$ non cambia. Per $n-k=1$ le scelte sono due, $\pm\mathbf{q}_{k+1}$ (come nell'Esempio 3); per $n-k\ge2$ sono infinite.

> **Attenzione.** Una matrice quadrata con $\tilde Q^T\tilde Q=I$ si chiama **matrice ortogonale**, ma le sue colonne sono orto*normali*, non solo ortogonali. Una $Q$ rettangolare $n\times k$ ha $Q^TQ=I_k$ ma, se $k<n$, $QQ^T\neq I_n$ (ha rango al più $k$): $QQ^T$ è la proiezione su $\operatorname{Im}(A)$.

**QR e minimi quadrati.** Con $A=QR$ ridotta si ha $A^TA=R^TQ^TQR=R^TR$ e $A^T\mathbf{b}=R^TQ^T\mathbf{b}$, quindi le equazioni normali $A^TA\hat{\mathbf{x}}=A^T\mathbf{b}$ diventano $R^TR\hat{\mathbf{x}}=R^TQ^T\mathbf{b}$. $R$ è triangolare con diagonale non nulla, quindi invertibile (il determinante di una triangolare è il prodotto della diagonale, [Determinanti](/algebra-lineare/spazi-vettoriali/08-determinanti)), e lo è anche $R^T$. Moltiplicando a sinistra per $(R^T)^{-1}$:

$$
R\,\hat{\mathbf{x}}=Q^T\mathbf{b}.
$$

Lettura: si calcolano i $k$ prodotti scalari $Q^T\mathbf{b}$ (le coordinate della proiezione nella base $\mathbf{q}$) e si risolve un sistema triangolare partendo dall'ultima equazione, con la sostituzione all'indietro di [Sistemi lineari e metodo di Gauss](/algebra-lineare/fondamenti/03-sistemi-lineari) (appunti §2.3, Def. 32 e Prop. 33). La proiezione è $A\hat{\mathbf{x}}=QR\hat{\mathbf{x}}=QQ^T\mathbf{b}$, come nella 12. Il vantaggio non è solo di comodità: formare $A^TA$ può far accumulare gli errori di arrotondamento fino a risultati imprecisi, mentre la via QR è numericamente più affidabile.

```checkpoint
[domanda]
(a) Perché $R\hat{\mathbf{x}}=Q^T\mathbf{b}$ ha una e una sola soluzione? (b) A che cosa serve, in più, chiedere che la diagonale di $R$ sia **positiva**?

[risposta]
(a) Basta che la diagonale sia **non nulla**: $R$ è triangolare, quindi $\det R=r_{11}\cdots r_{kk}\neq0$ e $R$ è invertibile; nella risalita ogni passo divide per un $r_{jj}\neq0$. Con Gram-Schmidt $r_{jj}=\lVert\mathbf{u}_j\rVert\neq0$ perché le colonne sono indipendenti. (b) Il segno non c'entra con la risolubilità: cambiando segno a $\mathbf{q}_j$ e alla riga $j$ di $R$ il sistema cambia segno alla riga $j$ da entrambe le parti e ha la stessa soluzione $\hat{\mathbf{x}}$. La positività serve a scegliere **una** tra queste fattorizzazioni, cioè a rendere QR unica.
```

**Cenno: autovalori.** L'algoritmo QR, con cui il software calcola gli autovalori, parte da $A_0=A$ quadrata e invertibile e ripete: fattorizza $A_m=Q_mR_m$, poi pone $A_{m+1}=R_mQ_m$. Poiché $Q_m$ è quadrata ortogonale, $R_m=Q_m^TA_m$ e quindi $A_{m+1}=Q_m^TA_mQ_m=Q_m^{-1}A_mQ_m$: tutte le $A_m$ sono **simili** ad $A$ e hanno gli stessi autovalori ([Diagonalizzazione di matrici](/algebra-lineare/autovalori-e-diagonalizzazione/10-diagonalizzazione)). In particolare hanno lo stesso determinante di $A$, che è non nullo, quindi sono anch'esse invertibili: le loro colonne sono indipendenti e la QR si può ripetere a ogni passo. Sotto opportune ipotesi le $A_m$ tendono a una matrice triangolare, sulla cui diagonale si leggono gli autovalori; ipotesi e convergenza sono argomento dell'Approfondimento. Le basi ortonormali tornano anche nel teorema spettrale di [Matrici simmetriche e forme quadratiche](/algebra-lineare/autovalori-e-diagonalizzazione/14-forme-quadratiche): una matrice simmetrica si diagonalizza con una matrice ortogonale.

## Dimostrazioni

**Teorema (Gram-Schmidt).** Enunciato in Teoria.

*Dimostrazione.* Per induzione su $j$ dimostriamo l'affermazione $(\mathrm{P}_j)$: *$\mathbf{u}_1,\dots,\mathbf{u}_j$ sono non nulli, a due a due ortogonali, e $\operatorname{span}\{\mathbf{u}_1,\dots,\mathbf{u}_j\}=V_j$.*

1. *Base, $j=1$.* $\mathbf{u}_1=\mathbf{a}_1$, e $\mathbf{a}_1\neq\mathbf{0}$ perché una famiglia che contiene il vettore nullo è dipendente ([Indipendenza lineare, basi e dimensione](/algebra-lineare/spazi-vettoriali/06-indipendenza-basi)). Non ci sono coppie da controllare e $\operatorname{span}\{\mathbf{u}_1\}=\operatorname{span}\{\mathbf{a}_1\}=V_1$.
2. *La formula ha senso.* Sia $j\ge2$ e supponiamo vera $(\mathrm{P}_{j-1})$. I denominatori $\langle\mathbf{u}_i,\mathbf{u}_i\rangle$, $i<j$, sono positivi: $\mathbf{u}_i\neq\mathbf{0}$ per l'ipotesi induttiva, e per positività e definitezza del prodotto scalare (lezione 11) $\langle\mathbf{v},\mathbf{v}\rangle>0$ se $\mathbf{v}\neq\mathbf{0}$. Scriviamo $c_i=\langle\mathbf{a}_j,\mathbf{u}_i\rangle/\langle\mathbf{u}_i,\mathbf{u}_i\rangle$, così $\mathbf{u}_j=\mathbf{a}_j-\sum_{i<j}c_i\mathbf{u}_i$.
3. *$\mathbf{u}_j$ è ortogonale ai precedenti.* Fissato $l<j$, per linearità del prodotto scalare $\langle\mathbf{u}_j,\mathbf{u}_l\rangle=\langle\mathbf{a}_j,\mathbf{u}_l\rangle-\sum_{i<j}c_i\langle\mathbf{u}_i,\mathbf{u}_l\rangle$. Per l'ipotesi induttiva $\langle\mathbf{u}_i,\mathbf{u}_l\rangle=0$ se $i\neq l$, quindi della somma resta solo il termine $i=l$: $\langle\mathbf{u}_j,\mathbf{u}_l\rangle=\langle\mathbf{a}_j,\mathbf{u}_l\rangle-c_l\langle\mathbf{u}_l,\mathbf{u}_l\rangle=0$ per la definizione di $c_l$.
4. *$\mathbf{u}_j\neq\mathbf{0}$.* Se fosse $\mathbf{u}_j=\mathbf{0}$, avremmo $\mathbf{a}_j=\sum_{i<j}c_i\mathbf{u}_i\in\operatorname{span}\{\mathbf{u}_1,\dots,\mathbf{u}_{j-1}\}=V_{j-1}$ (ipotesi induttiva): $\mathbf{a}_j$ sarebbe combinazione lineare di $\mathbf{a}_1,\dots,\mathbf{a}_{j-1}$, contro l'indipendenza.
5. *Lo span non cambia.* ($\subseteq$) Gli $\mathbf{u}_i$ con $i<j$ stanno in $V_{j-1}\subseteq V_j$ per l'ipotesi induttiva; $\mathbf{u}_j$ è combinazione di $\mathbf{a}_j$ e di vettori di $V_{j-1}$, quindi sta in $V_j$. Essendo $V_j$ un sottospazio, contiene ogni combinazione di $\mathbf{u}_1,\dots,\mathbf{u}_j$. ($\supseteq$) $\mathbf{a}_1,\dots,\mathbf{a}_{j-1}$ stanno in $V_{j-1}=\operatorname{span}\{\mathbf{u}_1,\dots,\mathbf{u}_{j-1}\}$, e $\mathbf{a}_j=\mathbf{u}_j+\sum_{i<j}c_i\mathbf{u}_i$; quindi ogni combinazione di $\mathbf{a}_1,\dots,\mathbf{a}_j$ è combinazione di $\mathbf{u}_1,\dots,\mathbf{u}_j$. I passi 3–5 provano $(\mathrm{P}_j)$.
6. *Normalizzazione.* $\mathbf{q}_j=\mathbf{u}_j/\lVert\mathbf{u}_j\rVert$ ha norma $1$ per l'omogeneità della norma, $\lVert c\mathbf{v}\rVert=\lvert c\rvert\,\lVert\mathbf{v}\rVert$ con $c=1/\lVert\mathbf{u}_j\rVert$. Per $i\neq l$, $\langle\mathbf{q}_i,\mathbf{q}_l\rangle=\langle\mathbf{u}_i,\mathbf{u}_l\rangle/(\lVert\mathbf{u}_i\rVert\,\lVert\mathbf{u}_l\rVert)=0$ per linearità. Infine moltiplicare ciascun vettore per un numero non nullo non cambia lo span. $\blacksquare$

## Procedura

**Gram-Schmidt e QR a mano.** Dati: $\mathbf{a}_1,\dots,\mathbf{a}_k\in\mathbb{R}^n$, le colonne di $A$.

1. *Ipotesi.* Servono vettori indipendenti. Se non lo sai, il processo stesso lo rivela: un $\mathbf{u}_j=\mathbf{0}$ segnala un vettore da scartare.
2. *Ortogonalizza nell'ordine dato.* $\mathbf{u}_1=\mathbf{a}_1$; per $j=2,\dots,k$ calcola i coefficienti $\mathbf{a}_j^T\mathbf{u}_i/\mathbf{u}_i^T\mathbf{u}_i$ ($i<j$) e sottrai: $\mathbf{u}_j=\mathbf{a}_j-\sum_{i<j}\frac{\mathbf{a}_j^T\mathbf{u}_i}{\mathbf{u}_i^T\mathbf{u}_i}\mathbf{u}_i$.
3. *Controlla subito* che $\mathbf{u}_j^T\mathbf{u}_i=0$ per ogni $i<j$: un errore di conto si vede qui, prima che si propaghi ai passi successivi.
4. *Semplifica le frazioni.* Puoi sostituire $\mathbf{u}_j$ con un suo multiplo $t\mathbf{u}_j$ con $t>0$ (per esempio $2\mathbf{u}_j$): ortogonalità, span e $\mathbf{q}_j$ non cambiano, e nemmeno i termini sottratti dopo, perché $\frac{\langle\mathbf{a},t\mathbf{u}\rangle}{\langle t\mathbf{u},t\mathbf{u}\rangle}\,t\mathbf{u}=\frac{\langle\mathbf{a},\mathbf{u}\rangle}{\langle\mathbf{u},\mathbf{u}\rangle}\,\mathbf{u}$. Il fattore deve essere **positivo**: con $t<0$ cambia il segno di $\mathbf{q}_j$, $r_{jj}$ diventa negativo e si perde la QR con diagonale positiva enunciata in Teoria.
5. *Normalizza alla fine:* $\mathbf{q}_j=\mathbf{u}_j/\lVert\mathbf{u}_j\rVert$ e $Q=[\mathbf{q}_1\ \cdots\ \mathbf{q}_k]$. Così le radici quadrate compaiono solo qui.
6. *Costruisci $R=Q^TA$*, calcolando solo $r_{ij}=\mathbf{q}_i^T\mathbf{a}_j$ con $i\le j$ (sotto la diagonale ci sono zeri). Controlli finali: $r_{jj}=\mathbf{q}_j^T\mathbf{a}_j>0$, uguale alla norma dell'$\mathbf{u}_j$ originale, non di quello riscalato al passo 4; $Q^TQ=I$; $QR=A$ colonna per colonna.
7. *Minimi quadrati:* calcola $Q^T\mathbf{b}$ e risolvi $R\hat{\mathbf{x}}=Q^T\mathbf{b}$ dall'ultima equazione verso la prima.

> **Attenzione.** Tre errori tipici. (1) *Non normalizzare:* gli $\mathbf{u}_j$ sono solo ortogonali; con la matrice $U=[\mathbf{u}_1\ \cdots\ \mathbf{u}_k]$ il prodotto $U^TU$ è diagonale ma non è $I$, e $UU^T$ non è la proiezione. (2) *Sbagliare l'ordine:* il risultato dipende dall'ordine dei vettori ($\mathbf{q}_1$ è sempre parallelo al primo); cambiando ordine cambiano $Q$ e $R$ (Esercizio 6), e in QR l'ordine è quello delle colonne di $A$. (3) *Proiettare sui vettori sbagliati:* si tolgono le proiezioni sugli $\mathbf{u}_i$ già costruiti, non sugli $\mathbf{a}_i$ originali, che in generale non sono ortogonali tra loro.

> **Attenzione (calcolo numerico).** In aritmetica esatta il metodo funziona sempre. Al calcolatore, con colonne quasi dipendenti, gli errori di arrotondamento possono far perdere l'ortogonalità: i $\mathbf{q}_j$ calcolati non sono più ortogonali tra loro. La variante **modificata** di Gram-Schmidt toglie le componenti una alla volta, calcolando ogni prodotto scalare sul vettore già aggiornato invece che su $\mathbf{a}_j$: in aritmetica esatta dà gli stessi $\mathbf{q}_j$, ma è molto meno sensibile agli arrotondamenti. Questa variante e i metodi usati dal software (riflessioni di Householder, rotazioni di Givens) sono argomento dell'Approfondimento.

## Esempi

**Esempio 1 ($\mathbb{R}^2$, il significato geometrico).** Ortonormalizzare $\mathbf{a}_1=(3,4)$, $\mathbf{a}_2=(2,1)$.

*Strategia:* togliere ad $\mathbf{a}_2$ la sua ombra sulla retta di $\mathbf{a}_1$. $\mathbf{u}_1=(3,4)$, $\mathbf{u}_1^T\mathbf{u}_1=25$. Coefficiente $\mathbf{a}_2^T\mathbf{u}_1/\mathbf{u}_1^T\mathbf{u}_1=10/25=2/5$, ombra $\tfrac25(3,4)=(6/5,\,8/5)$, quindi $\mathbf{u}_2=(2,1)-(6/5,\,8/5)=(4/5,\,-3/5)$. Controllo: $\mathbf{u}_2^T\mathbf{u}_1=12/5-12/5=0$.

| vettore | ombra sulla retta di $\mathbf{a}_1$ | parte ortogonale | norma |
|---|---|---|---|
| $\mathbf{a}_1=(3,4)$ | — | $\mathbf{u}_1=(3,4)$ | $5$ |
| $\mathbf{a}_2=(2,1)$ | $(6/5,\ 8/5)$ | $\mathbf{u}_2=(4/5,\ -3/5)$ | $1$ |

Quindi $\mathbf{q}_1=(3/5,\,4/5)$, $\mathbf{q}_2=(4/5,\,-3/5)$ e, con $r_{12}=\mathbf{q}_1^T\mathbf{a}_2=(6+4)/5=2$,

$$
\begin{pmatrix}3&2\\4&1\end{pmatrix}=\begin{pmatrix}3/5&4/5\\4/5&-3/5\end{pmatrix}\begin{pmatrix}5&2\\0&1\end{pmatrix}.
$$

*Lettura geometrica:* $r_{11}=5$ è la lunghezza di $\mathbf{a}_1$, cioè la base del parallelogramma di lati $\mathbf{a}_1,\mathbf{a}_2$; $r_{22}=\lVert\mathbf{u}_2\rVert=1$ è la distanza di $\mathbf{a}_2$ dalla retta di $\mathbf{a}_1$, cioè l'altezza. Il prodotto $5\cdot1$ è l'area, e infatti $\lvert\det A\rvert=\lvert3-8\rvert=5$: $\det A=\det Q\cdot\det R$ (lezione [Determinanti](/algebra-lineare/spazi-vettoriali/08-determinanti)), con $\det R=5$ e $\det Q=-\tfrac9{25}-\tfrac{16}{25}=-1$.

**Esempio 2 ($\mathbb{R}^3$, tutti i passi).** Ortonormalizzare $\mathbf{a}_1=(1,2,2)$, $\mathbf{a}_2=(1,3,4)$, $\mathbf{a}_3=(1,1,3)$ e scrivere la QR di $A=[\mathbf{a}_1\ \mathbf{a}_2\ \mathbf{a}_3]$.

*Passo 1.* $\mathbf{u}_1=(1,2,2)$, $\mathbf{u}_1^T\mathbf{u}_1=9$.

*Passo 2.* $\mathbf{a}_2^T\mathbf{u}_1=1+6+8=15$, coefficiente $15/9=5/3$: $\mathbf{u}_2=(1,3,4)-\tfrac53(1,2,2)=(-2/3,\,-1/3,\,2/3)$. Controllo $\mathbf{u}_2^T\mathbf{u}_1=(-2-2+4)/3=0$; $\mathbf{u}_2^T\mathbf{u}_2=(4+1+4)/9=1$.

*Passo 3.* $\mathbf{a}_3^T\mathbf{u}_1=1+2+6=9$, coefficiente $9/9=1$; $\mathbf{a}_3^T\mathbf{u}_2=(-2-1+6)/3=1$, coefficiente $1/1=1$. Quindi $\mathbf{u}_3=(1,1,3)-(1,2,2)-(-2/3,\,-1/3,\,2/3)=(2/3,\,-2/3,\,1/3)$. Controlli: $\mathbf{u}_3^T\mathbf{u}_1=(2-4+2)/3=0$, $\mathbf{u}_3^T\mathbf{u}_2=(-4+2+2)/9=0$, $\lVert\mathbf{u}_3\rVert=1$.

*Normalizzazione:* $\mathbf{q}_1=\tfrac13(1,2,2)$, $\mathbf{q}_2=\tfrac13(-2,-1,2)$, $\mathbf{q}_3=\tfrac13(2,-2,1)$: tre vettori ortonormali in $\mathbb{R}^3$, quindi una base ortonormale di $\mathbb{R}^3$.

*La QR.* $R=Q^TA$: $r_{11}=3$, $r_{12}=\mathbf{q}_1^T\mathbf{a}_2=15/3=5$, $r_{13}=\mathbf{q}_1^T\mathbf{a}_3=9/3=3$, $r_{22}=\lVert\mathbf{u}_2\rVert=1$, $r_{23}=\mathbf{q}_2^T\mathbf{a}_3=(-2-1+6)/3=1$, $r_{33}=\lVert\mathbf{u}_3\rVert=1$:

$$
\begin{pmatrix}1&1&1\\2&3&1\\2&4&3\end{pmatrix}=\frac13\begin{pmatrix}1&-2&2\\2&-1&-2\\2&2&1\end{pmatrix}\begin{pmatrix}3&5&3\\0&1&1\\0&0&1\end{pmatrix}.
$$

Verifica per colonne: $5\mathbf{q}_1+\mathbf{q}_2=\tfrac13(3,9,12)=\mathbf{a}_2$ e $3\mathbf{q}_1+\mathbf{q}_2+\mathbf{q}_3=\tfrac13(3,3,9)=\mathbf{a}_3$. Qui $Q$ è quadrata: è una matrice ortogonale.

**Esempio 3 (QR ridotta e completa: ritorno alla 12).** $A=\left(\begin{smallmatrix}1&1\\1&0\\0&1\end{smallmatrix}\right)$, la matrice dell'Esempio 2 della lezione 12.

*Ridotta.* $\mathbf{u}_1=(1,1,0)$, $\lVert\mathbf{u}_1\rVert=\sqrt2$. $\mathbf{a}_2^T\mathbf{u}_1=1$, coefficiente $1/2$: $\mathbf{u}_2=(1,0,1)-\tfrac12(1,1,0)=(\tfrac12,-\tfrac12,1)$; per evitare frazioni usiamo $2\mathbf{u}_2=(1,-1,2)$, di norma $\sqrt6$ (passo 4 della Procedura). Quindi $\mathbf{q}_1=\tfrac1{\sqrt2}(1,1,0)$, $\mathbf{q}_2=\tfrac1{\sqrt6}(1,-1,2)$, e $R=Q^TA$ ha $r_{11}=\sqrt2$, $r_{12}=\mathbf{q}_1^T\mathbf{a}_2=1/\sqrt2$, $r_{22}=\mathbf{q}_2^T\mathbf{a}_2=3/\sqrt6=\sqrt6/2$. Verifica: $r_{12}\mathbf{q}_1+r_{22}\mathbf{q}_2=\tfrac12(1,1,0)+\tfrac12(1,-1,2)=(1,0,1)=\mathbf{a}_2$.

*Proiezione senza inverse.* Con $QQ^T=\mathbf{q}_1\mathbf{q}_1^T+\mathbf{q}_2\mathbf{q}_2^T$:

$$
QQ^T=\frac12\begin{pmatrix}1&1&0\\1&1&0\\0&0&0\end{pmatrix}+\frac16\begin{pmatrix}1&-1&2\\-1&1&-2\\2&-2&4\end{pmatrix}=\frac13\begin{pmatrix}2&1&1\\1&2&-1\\1&-1&2\end{pmatrix},
$$

la stessa $P=A(A^TA)^{-1}A^T$ della lezione 12, ottenuta senza invertire nulla.

*Completa.* $\ker(A^T)$ è generato da $\mathbf{n}=(1,-1,-1)$ (Esempio 3 della 12), quindi $\mathbf{q}_3=\tfrac1{\sqrt3}(1,-1,-1)$ e

$$
\tilde Q=\begin{pmatrix}1/\sqrt2&1/\sqrt6&1/\sqrt3\\1/\sqrt2&-1/\sqrt6&-1/\sqrt3\\0&2/\sqrt6&-1/\sqrt3\end{pmatrix},\qquad \tilde R=\begin{pmatrix}\sqrt2&1/\sqrt2\\0&\sqrt6/2\\0&0\end{pmatrix}.
$$

Verifica di $\tilde Q^T\tilde Q=I_3$: le norme al quadrato valgono $\tfrac12+\tfrac12=1$, $\tfrac16+\tfrac16+\tfrac46=1$, $\tfrac13+\tfrac13+\tfrac13=1$; i prodotti misti valgono $\tfrac{1-1+0}{\sqrt{12}}=0$, $\tfrac{1-1+0}{\sqrt6}=0$, $\tfrac{1+1-2}{\sqrt{18}}=0$. E $\tilde Q\tilde R=A$, perché la riga nulla di $\tilde R$ annulla la colonna $\mathbf{q}_3$ e resta la QR ridotta.

**Esempio 4 (minimi quadrati con QR).** Riprendiamo la retta dell'Esempio 4 della lezione 12: $x=1,2,3,4$, $y=2,3,5,6$, $X=[\mathbf{1}\ \ \mathbf{x}]$.

*Gram-Schmidt sulle colonne.* $\mathbf{u}_1=\mathbf{1}=(1,1,1,1)$, $\lVert\mathbf{u}_1\rVert=2$, $\mathbf{q}_1=\tfrac12(1,1,1,1)$. $\mathbf{x}^T\mathbf{u}_1=10$, coefficiente $10/4=5/2$, che è la media $\bar x$: $\mathbf{u}_2=\mathbf{x}-\bar x\,\mathbf{1}=(-\tfrac32,-\tfrac12,\tfrac12,\tfrac32)$, $\lVert\mathbf{u}_2\rVert=\sqrt5$, $\mathbf{q}_2=\tfrac1{2\sqrt5}(-3,-1,1,3)$. Togliere a $\mathbf{x}$ la proiezione su $\mathbf{1}$ vuol dire **togliere la media**: $\mathbf{u}_2$ è la variabile centrata.

$R$: $r_{11}=2$, $r_{12}=\mathbf{q}_1^T\mathbf{x}=10/2=5$, $r_{22}=\sqrt5$. $Q^T\mathbf{y}$: $\mathbf{q}_1^T\mathbf{y}=16/2=8$ e $\mathbf{q}_2^T\mathbf{y}=\tfrac{-6-3+5+18}{2\sqrt5}=\tfrac7{\sqrt5}$. Risalita: $\sqrt5\,\hat\beta_1=7/\sqrt5$, quindi $\hat\beta_1=7/5$; poi $2\hat\beta_0+5\cdot\tfrac75=8$, quindi $\hat\beta_0=\tfrac12$. È la retta della 12, $\hat y=0{,}5+1{,}4\,x$. Controllo: $R^TR=\left(\begin{smallmatrix}4&10\\10&30\end{smallmatrix}\right)=X^TX$.

*Ragionamento:* con QR non si forma mai $X^TX$. Anche la somma dei quadrati dei residui si legge da $Q^T\mathbf{y}$: $\mathbf{y}=QQ^T\mathbf{y}+\mathbf{e}$ con i due pezzi ortogonali (lezione 12), e $\lVert Q\mathbf{z}\rVert^2=\mathbf{z}^TQ^TQ\mathbf{z}=\lVert\mathbf{z}\rVert^2$; per Pitagora $\lVert\mathbf{e}\rVert^2=\lVert\mathbf{y}\rVert^2-\lVert Q^T\mathbf{y}\rVert^2=74-\big(64+\tfrac{49}5\big)=\tfrac15$, come nella 12.

## Esercizi

**Esercizio 1.** Trova la QR di $A=\left(\begin{smallmatrix}1&0\\1&2\end{smallmatrix}\right)$ e verifica $QR=A$.

<details>
<summary>Soluzione</summary>

$\mathbf{u}_1=(1,1)$, $\mathbf{q}_1=\tfrac1{\sqrt2}(1,1)$. $\mathbf{a}_2^T\mathbf{u}_1=2$, coefficiente $2/2=1$: $\mathbf{u}_2=(0,2)-(1,1)=(-1,1)$, $\mathbf{q}_2=\tfrac1{\sqrt2}(-1,1)$. $R$: $r_{11}=\sqrt2$, $r_{12}=\mathbf{q}_1^T\mathbf{a}_2=2/\sqrt2=\sqrt2$, $r_{22}=\lVert\mathbf{u}_2\rVert=\sqrt2$. Quindi $Q=\tfrac1{\sqrt2}\left(\begin{smallmatrix}1&-1\\1&1\end{smallmatrix}\right)$, $R=\left(\begin{smallmatrix}\sqrt2&\sqrt2\\0&\sqrt2\end{smallmatrix}\right)$. Verifica: prima colonna $\sqrt2\,\mathbf{q}_1=(1,1)$; seconda $\sqrt2\,\mathbf{q}_1+\sqrt2\,\mathbf{q}_2=(1,1)+(-1,1)=(0,2)$.
</details>

**Esercizio 2.** Trova una base ortonormale di $W=\operatorname{span}\{(1,0,1),(0,1,1)\}$ e proietta $\mathbf{b}=(1,1,1)$ su $W$ con la formula $\sum_j\langle\mathbf{b},\mathbf{q}_j\rangle\mathbf{q}_j$.

<details>
<summary>Soluzione</summary>

$\mathbf{u}_1=(1,0,1)$; coefficiente $\tfrac{(0,1,1)^T\mathbf{u}_1}{2}=\tfrac12$, $\mathbf{u}_2=(0,1,1)-\tfrac12(1,0,1)=(-\tfrac12,1,\tfrac12)$, che sostituiamo con $(-1,2,1)$. Quindi $\mathbf{q}_1=\tfrac1{\sqrt2}(1,0,1)$, $\mathbf{q}_2=\tfrac1{\sqrt6}(-1,2,1)$. Proiezione: $\langle\mathbf{b},\mathbf{q}_1\rangle\mathbf{q}_1=\tfrac22(1,0,1)=(1,0,1)$ e $\langle\mathbf{b},\mathbf{q}_2\rangle\mathbf{q}_2=\tfrac26(-1,2,1)$; somma $\mathbf{p}=(2/3,\,2/3,\,4/3)$. Residuo $\mathbf{b}-\mathbf{p}=\tfrac13(1,1,-1)$: è ortogonale a entrambi i generatori ($\tfrac13-\tfrac13=0$ in tutti e due i casi) ed è multiplo di $(-1,-1,1)$, che genera $W^\perp$ (Esercizio 2 della lezione 12).
</details>

**Esercizio 3.** Applica Gram-Schmidt a $(1,1,0)$, $(0,1,1)$, $(1,2,1)$. Che cosa succede al terzo passo? Che cosa concludi?

<details>
<summary>Soluzione</summary>

$\mathbf{u}_1=(1,1,0)$. $\mathbf{u}_2=(0,1,1)-\tfrac12(1,1,0)=(-\tfrac12,\tfrac12,1)$, con $\mathbf{u}_2^T\mathbf{u}_2=\tfrac32$. Terzo passo: $\mathbf{a}_3^T\mathbf{u}_1=3$, coefficiente $\tfrac32$; $\mathbf{a}_3^T\mathbf{u}_2=-\tfrac12+1+1=\tfrac32$, coefficiente $1$. Quindi $\mathbf{u}_3=(1,2,1)-\tfrac32(1,1,0)-(-\tfrac12,\tfrac12,1)=(0,0,0)$. I tre vettori sono dipendenti: infatti $\mathbf{a}_3=\mathbf{a}_1+\mathbf{a}_2$. Si scarta $\mathbf{a}_3$: lo span ha dimensione $2$ e una sua base ortonormale è $\tfrac1{\sqrt2}(1,1,0)$, $\tfrac1{\sqrt6}(-1,1,2)$. La matrice con queste tre colonne non ha una QR nel senso della lezione (con diagonale di $R$ positiva), perché le colonne non sono indipendenti. Una fattorizzazione $A=QR$ con $R$ triangolare ma singolare esiste comunque per ogni matrice: si vedrà nell'Approfondimento.
</details>

**Esercizio 4.** Sia $A=QR$ una QR ridotta e $D$ una matrice diagonale $k\times k$ con elementi $d_j=\pm1$. Mostra che $Q'=QD$ e $R'=DR$ danno un'altra fattorizzazione $A=Q'R'$, con $Q'^TQ'=I$ e $R'$ triangolare superiore. Quale $D$ rispetta $r'_{jj}>0$? Quante fattorizzazioni si ottengono così?

<details>
<summary>Soluzione</summary>

$D^2=I$, perché ogni $d_j^2=1$. Quindi $Q'R'=QD^2R=QR=A$ e $Q'^TQ'=DQ^TQD=D^2=I$. $DR$ moltiplica la riga $j$ di $R$ per $d_j$: gli zeri sotto la diagonale restano zeri, e la diagonale diventa $d_jr_{jj}$. Poiché $r_{jj}>0$, la condizione $d_jr_{jj}>0$ vale per ogni $j$ solo se tutti i $d_j=1$, cioè $D=I$. Ogni $d_j$ ha due scelte: si ottengono $2^k$ fattorizzazioni distinte (le colonne $\pm\mathbf{q}_j$ di $QD$ cambiano). È la «quasi unicità» enunciata in Teoria; che non ce ne siano altre si dimostra nell'Approfondimento.
</details>

**Esercizio 5.** Con la QR trova la retta dei minimi quadrati $y=\beta_0+\beta_1x$ per i punti $(0,1)$, $(1,3)$, $(2,4)$ e la somma dei quadrati dei residui.

<details>
<summary>Soluzione</summary>

$X=[\mathbf{1}\ \mathbf{x}]$ con $\mathbf{x}=(0,1,2)$. $\mathbf{u}_1=(1,1,1)$, $\mathbf{q}_1=\tfrac1{\sqrt3}(1,1,1)$; coefficiente $\mathbf{x}^T\mathbf{u}_1/3=1=\bar x$, $\mathbf{u}_2=(-1,0,1)$, $\mathbf{q}_2=\tfrac1{\sqrt2}(-1,0,1)$. $R=\left(\begin{smallmatrix}\sqrt3&\sqrt3\\0&\sqrt2\end{smallmatrix}\right)$ ($r_{12}=3/\sqrt3=\sqrt3$). $Q^T\mathbf{y}=(8/\sqrt3,\ 3/\sqrt2)$. Risalita: $\sqrt2\,\hat\beta_1=3/\sqrt2$, quindi $\hat\beta_1=3/2$; $\sqrt3\,\hat\beta_0+\sqrt3\cdot\tfrac32=8/\sqrt3$, quindi $\hat\beta_0=\tfrac83-\tfrac32=\tfrac76$. Somma dei quadrati dei residui: $\lVert\mathbf{y}\rVert^2-\lVert Q^T\mathbf{y}\rVert^2=26-\big(\tfrac{64}3+\tfrac92\big)=\tfrac16$. Stessi valori dell'Esercizio 5 della lezione 12.
</details>

**Esercizio 6.** Ripeti l'Esempio 1 cambiando l'ordine: Gram-Schmidt su $\mathbf{a}_1=(2,1)$, $\mathbf{a}_2=(3,4)$. Confronta $Q$, $R$ e il prodotto $r_{11}r_{22}$ con l'Esempio 1.

<details>
<summary>Soluzione</summary>

$\mathbf{u}_1=(2,1)$, $\lVert\mathbf{u}_1\rVert=\sqrt5$. $\mathbf{a}_2^T\mathbf{u}_1=10$, coefficiente $10/5=2$: $\mathbf{u}_2=(3,4)-(4,2)=(-1,2)$, $\lVert\mathbf{u}_2\rVert=\sqrt5$. Quindi $\mathbf{q}_1=\tfrac1{\sqrt5}(2,1)$, $\mathbf{q}_2=\tfrac1{\sqrt5}(-1,2)$ e $R=\left(\begin{smallmatrix}\sqrt5&2\sqrt5\\0&\sqrt5\end{smallmatrix}\right)$, con $r_{12}=10/\sqrt5=2\sqrt5$. Base ortonormale e $R$ sono diverse da quelle dell'Esempio 1 (ora $\mathbf{q}_1$ è parallelo a $(2,1)$), ma $r_{11}r_{22}=5$ come prima: è l'area dello stesso parallelogramma, $\lvert\det\left(\begin{smallmatrix}2&3\\1&4\end{smallmatrix}\right)\rvert=5$.
</details>
