---
id: algebra-11-prodotto-scalare
titolo: "Prodotto scalare e spazi con norma"
materia: algebra-lineare
argomento: "Ortogonalità"
modulo: "Ortogonalità"
livello: universitario
slug: algebra-11-prodotto-scalare

# legacy
subject: algebra-lineare
topic_it: Ortogonalità
topic_en: Orthogonality
title_it: "Prodotto scalare e spazi con norma"
title_en: "Inner product and normed spaces"
level: blue
order: 11

prerequisiti:
  - algebra-01-vettori
  - algebra-05-spazi-vettoriali
  - algebra-06-indipendenza-basi

collegamenti:
  - algebra-12-ortogonalita-proiezioni
  - algebra-13-gram-schmidt
  - algebra-14-forme-quadratiche

fonti_integrate:
  - id_fonte: axler-ladr
    ruolo: primaria
    sezioni_coperte: "Cap. 6A: prodotto interno (6.2), esempi tra cui il prodotto pesato su Fⁿ e l'integrale sulle funzioni continue (6.3), spazio con prodotto interno (6.4), norma (6.7), ortogonalità e vettore nullo (6.10–6.11), Pitagora (6.12), Cauchy-Schwarz (6.14), disuguaglianza triangolare (6.17), identità del parallelogramma (6.21); cap. 6B: liste ortonormali (6.22)"
    note: "primaria per la parte astratta, che gli appunti di Villanacci non trattano; Axler lavora su F = R o C, qui solo il caso reale"
  - id_fonte: villanacci-math2
    ruolo: appunti-prof
    sezioni_coperte: "§1.2–1.3: prodotto scalare in Rⁿ (Def. 7, Remark 8), spazio euclideo Rⁿ (Def. 9), norma euclidea (Def. 10), ortogonalità (Def. 11), Cauchy-Schwarz e proprietà della norma in Rⁿ (Prop. 12–13); §12.8.2: norma astratta (Def. 660), spazio normato (Def. 663), metrica indotta (Def. 667, Prop. 668)"
    note: "appunti-prof: non trattano il prodotto scalare astratto né gli spazi di funzioni; la notazione del professore (x·y, xy) vale solo per Rⁿ ed è messa a confronto in Teoria"
  - id_fonte: cherney-linalg
    ruolo: minore
    sezioni_coperte: "§4.3: proprietà del prodotto scalare e forma lorentziana non definita positiva (Example 53); §14.2.1, Example 133: V=span{1,x} con ⟨p,p′⟩=∫₀¹pp′ e base ortonormale {1, 2√3(x−½)} (fonte anche della prima parte dell'Esercizio 6)"
    note: "esempi e controesempio (forma indefinita)"

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

Nella lezione [Vettori e operazioni fondamentali](/algebra-lineare/fondamenti/01-vettori) lunghezza e angolo in $\mathbb{R}^n$ nascono da un'unica operazione, il prodotto scalare $\mathbf{u}\cdot\mathbf{v}=\sum u_iv_i$: la norma è $\sqrt{\mathbf{v}\cdot\mathbf{v}}$ e il coseno dell'angolo è $\mathbf{u}\cdot\mathbf{v}/(\lVert\mathbf{u}\rVert\lVert\mathbf{v}\rVert)$. Le dimostrazioni di Cauchy-Schwarz e della disuguaglianza triangolare viste lì usano solo tre proprietà del prodotto: simmetria, linearità e positività definita (positività + definitezza).

Questa lezione rovescia la logica. Quelle proprietà diventano la **definizione**: chiamiamo prodotto scalare qualunque operazione su uno spazio vettoriale che le soddisfi. Tutto ciò che in $\mathbb{R}^n$ discendeva solo da esse (lunghezza, distanza, angolo, perpendicolarità, Pitagora) vale allora nel nuovo spazio, senza rifare le dimostrazioni.

A cosa serve, concretamente:

- **Dati pesati.** In statistica le osservazioni non contano tutte allo stesso modo: il prodotto $\sum c_iu_iv_i$ con pesi $c_i>0$ è un prodotto scalare diverso, e con esso cambia quali vettori sono ortogonali.
- **Funzioni.** Su $[0,\pi]$ le funzioni $\sin(mx)$ e $\sin(nx)$, con $m\ne n$ interi positivi, sono «perpendicolari» rispetto al prodotto $\int_0^\pi f g\,dx$: è il fatto su cui poggiano le serie di Fourier.
- **Correlazione.** Il coefficiente di correlazione tra due serie di dati è il coseno dell'angolo tra i vettori degli scarti dalla media: variabili scorrelate sono vettori di scarti ortogonali.

Il messaggio: la geometria di uno spazio non è data una volta per tutte, la sceglie il prodotto scalare.

## Teoria

### Definizione e spazio euclideo

**Definizione (prodotto scalare).** Sia $V$ uno spazio vettoriale reale ([Spazi vettoriali e sottospazi](/algebra-lineare/spazi-vettoriali/05-spazi-vettoriali)). Un **prodotto scalare** (o prodotto interno) su $V$ è una funzione $\langle\cdot,\cdot\rangle:V\times V\to\mathbb{R}$ tale che, per ogni $\mathbf{u},\mathbf{v},\mathbf{w}\in V$ e ogni $c\in\mathbb{R}$:

1. **simmetria:** $\langle\mathbf{u},\mathbf{v}\rangle=\langle\mathbf{v},\mathbf{u}\rangle$;
2. **linearità nel primo argomento:** $\langle c\mathbf{u}+\mathbf{w},\mathbf{v}\rangle=c\langle\mathbf{u},\mathbf{v}\rangle+\langle\mathbf{w},\mathbf{v}\rangle$;
3. **positività:** $\langle\mathbf{v},\mathbf{v}\rangle\ge0$;
4. **definitezza:** $\langle\mathbf{v},\mathbf{v}\rangle=0$ solo se $\mathbf{v}=\mathbf{0}$.

In parole: il prodotto non dipende dall'ordine (1), rispetta somme e multipli (2), e il prodotto di un vettore con sé stesso si comporta come un quadrato di lunghezza, mai negativo (3) e nullo solo per il vettore nullo (4). Gli assiomi 3 e 4 insieme si chiamano *positività definita*; li teniamo separati perché nelle dimostrazioni servono in punti diversi.

Prime conseguenze degli assiomi. *Vettore nullo:* $\langle\mathbf{0},\mathbf{v}\rangle=\langle1\cdot\mathbf{0}+\mathbf{0},\mathbf{v}\rangle=\langle\mathbf{0},\mathbf{v}\rangle+\langle\mathbf{0},\mathbf{v}\rangle$ (assioma 2 con $c=1$ e $\mathbf{u}=\mathbf{w}=\mathbf{0}$); sottraendo $\langle\mathbf{0},\mathbf{v}\rangle$ da entrambi i membri si ottiene $\langle\mathbf{0},\mathbf{v}\rangle=0$ per ogni $\mathbf{v}$. *Omogeneità:* con $\mathbf{w}=\mathbf{0}$ l'assioma 2 dà $\langle c\mathbf{u},\mathbf{v}\rangle=c\langle\mathbf{u},\mathbf{v}\rangle+\langle\mathbf{0},\mathbf{v}\rangle=c\langle\mathbf{u},\mathbf{v}\rangle$.

La linearità vale anche nel secondo argomento: $\langle\mathbf{u},c\mathbf{v}+\mathbf{w}\rangle=\langle c\mathbf{v}+\mathbf{w},\mathbf{u}\rangle=c\langle\mathbf{v},\mathbf{u}\rangle+\langle\mathbf{w},\mathbf{u}\rangle=c\langle\mathbf{u},\mathbf{v}\rangle+\langle\mathbf{u},\mathbf{w}\rangle$ (simmetria, poi assioma 2, poi di nuovo simmetria). Il prodotto scalare è quindi **bilineare** e si sviluppa come un prodotto di binomi, per esempio $\langle\mathbf{u}+\mathbf{v},\mathbf{u}+\mathbf{v}\rangle=\langle\mathbf{u},\mathbf{u}\rangle+2\langle\mathbf{u},\mathbf{v}\rangle+\langle\mathbf{v},\mathbf{v}\rangle$.

**Definizione (spazio euclideo).** Uno **spazio euclideo** è una coppia $(V,\langle\cdot,\cdot\rangle)$ formata da uno spazio vettoriale reale e da un prodotto scalare su di esso. Il modello è $\mathbb{R}^n$ con il prodotto scalare standard: negli appunti del corso «spazio euclideo di dimensione $n$» indica proprio $\mathbb{R}^n$ con somma, prodotto per scalare e prodotto scalare. Alcuni testi chiedono anche che $V$ abbia dimensione finita; in questa lezione non serve.

> **Notazione.** Gli appunti di Villanacci scrivono il prodotto scalare di $\mathbb{R}^n$ come $x\cdot y$ o $xy$. Qui scriviamo $\langle\mathbf{u},\mathbf{v}\rangle$ (in $\mathbb{R}^n$ anche $\mathbf{u}^T\mathbf{v}$), perché la stessa scrittura vale per ogni prodotto scalare. Gli appunti definiscono l'ortogonalità solo tra vettori non nulli; qui, come in Axler, anche $\mathbf{0}$ è ortogonale a ogni vettore.

### Esempi di prodotti scalari

- **Standard su $\mathbb{R}^n$:** $\langle\mathbf{u},\mathbf{v}\rangle=\mathbf{u}^T\mathbf{v}=\sum_{i=1}^n u_iv_i$. I quattro assiomi sono le proprietà viste nella lezione 01.
- **Pesato su $\mathbb{R}^n$:** fissati $c_1,\dots,c_n>0$, $\langle\mathbf{u},\mathbf{v}\rangle_c=\sum_{i=1}^n c_iu_iv_i$. Qui $\langle\mathbf{v},\mathbf{v}\rangle_c=\sum c_iv_i^2$ è una somma di termini $\ge0$, nulla solo se ogni $v_i=0$, proprio perché ogni $c_i>0$ (Esercizio 3).
- **Integrale su $C([a,b])$**, lo spazio delle funzioni continue su $[a,b]$ con $a<b$: $\langle f,g\rangle=\int_a^b f(x)g(x)\,dx$. L'integrale esiste perché $fg$ è continua; simmetria e linearità vengono dalle proprietà dell'integrale, la positività da $f^2\ge0$.
- **Polinomi:** lo spazio $\mathcal{P}$ dei polinomi reali con $\langle p,q\rangle=\int_0^1 p(x)q(x)\,dx$. È il prodotto precedente ristretto a un sottospazio di $C([0,1])$, quindi soddisfa gli stessi assiomi.

La definitezza dell'integrale va giustificata. Se $f$ è continua e $f(x_0)\ne0$ in un punto, per continuità di $f^2$ esiste un intervallo $I\subseteq[a,b]$ attorno a $x_0$, di lunghezza $\ell>0$, su cui $f(x)^2>\tfrac12 f(x_0)^2$. Allora $\int_a^b f^2\,dx\ge\tfrac12 f(x_0)^2\,\ell>0$. Quindi $\int_a^b f^2\,dx=0$ obbliga $f$ a essere nulla in ogni punto.

*Micro-esempio.* In $C([0,1])$: $\langle 1,x\rangle=\int_0^1 x\,dx=\tfrac12$ e $\langle x,x\rangle=\int_0^1 x^2\,dx=\tfrac13$.

> **Attenzione.** La continuità non è un dettaglio. Sullo spazio delle funzioni integrabili secondo Riemann, non necessariamente continue, la definitezza fallisce: la funzione che vale $1$ in $x=\tfrac12$ e $0$ altrove ha $\int_0^1 f^2\,dx=0$ senza essere la funzione nulla. Lo spazio $L^2$ delle funzioni «a quadrato integrabile» rimedia identificando le funzioni che differiscono su insiemi trascurabili e usando l'integrale di Lebesgue: è un argomento che va oltre questa lezione.

> **Attenzione.** Su $\mathbb{R}^n$ i prodotti scalari sono infiniti, e quello standard è una scelta. Frasi come «questi vettori sono ortogonali» hanno senso solo dopo aver fissato il prodotto.

```checkpoint
[domanda]
Su $\mathbb{R}^2$ poniamo $B(\mathbf{u},\mathbf{v})=u_1v_1-u_2v_2$. È simmetrica e bilineare. È un prodotto scalare?

[risposta]
No. Per $\mathbf{v}=(0,1)$ si ha $B(\mathbf{v},\mathbf{v})=-1<0$: fallisce la positività. Per $\mathbf{v}=(1,1)\ne\mathbf{0}$ si ha $B(\mathbf{v},\mathbf{v})=1-1=0$: fallisce anche la definitezza. Per $\mathbf{v}=(1,0)$, invece, $B(\mathbf{v},\mathbf{v})=1>0$: la forma assume valori di entrambi i segni, ed è per questo una forma bilineare simmetrica *indefinita*, della stessa famiglia della forma di Lorentz della relatività, e $\sqrt{B(\mathbf{v},\mathbf{v})}$ non è nemmeno definita per ogni $\mathbf{v}$.
```

### Norma indotta e disuguaglianza di Cauchy-Schwarz

In uno spazio euclideo si pone

$$\lVert\mathbf{v}\rVert=\sqrt{\langle\mathbf{v},\mathbf{v}\rangle}.$$

Si legge «norma di $\mathbf{v}$»: è la lunghezza di $\mathbf{v}$ misurata con il prodotto scalare scelto. La radice ha senso grazie alla positività (assioma 3). Con il prodotto standard è la norma euclidea della lezione 01; in $C([a,b])$ è $\lVert f\rVert=\big(\int_a^b f^2\,dx\big)^{1/2}$.

**Teorema (Cauchy-Schwarz).** In ogni spazio euclideo, per ogni $\mathbf{u},\mathbf{v}$,

$$\lvert\langle\mathbf{u},\mathbf{v}\rangle\rvert\le\lVert\mathbf{u}\rVert\,\lVert\mathbf{v}\rVert,$$

con uguaglianza se e solo se $\mathbf{u}$ e $\mathbf{v}$ sono linearmente dipendenti ([Indipendenza lineare, basi e dimensione](/algebra-lineare/spazi-vettoriali/06-indipendenza-basi)). In parole: il prodotto scalare di due vettori non supera mai, in valore assoluto, il prodotto delle loro lunghezze, e lo raggiunge solo quando uno dei due è multiplo dell'altro. La dimostrazione è nella sezione Dimostrazioni.

**Definizione (norma, appunti Def. 660).** Una **norma** su uno spazio vettoriale reale $V$ è una funzione $\lVert\cdot\rVert:V\to\mathbb{R}$ tale che, per ogni $\mathbf{x},\mathbf{y}\in V$ e ogni $\alpha\in\mathbb{R}$: (1) $\lVert\mathbf{x}\rVert\ge0$ (non negatività); (2) $\lVert\mathbf{x}+\mathbf{y}\rVert\le\lVert\mathbf{x}\rVert+\lVert\mathbf{y}\rVert$ (disuguaglianza triangolare); (3) $\lVert\alpha\mathbf{x}\rVert=\lvert\alpha\rvert\,\lVert\mathbf{x}\rVert$ (omogeneità); (4) $\lVert\mathbf{x}\rVert=0\Rightarrow\mathbf{x}=\mathbf{0}$ (separazione). La coppia $(V,\lVert\cdot\rVert)$ è uno **spazio normato** (Def. 663). Questa definizione non menziona alcun prodotto scalare.

**Proposizione.** $\lVert\mathbf{v}\rVert=\sqrt{\langle\mathbf{v},\mathbf{v}\rangle}$ è una norma. Quindi ogni spazio euclideo è uno spazio normato, e $d(\mathbf{u},\mathbf{v})=\lVert\mathbf{u}-\mathbf{v}\rVert$ è una distanza (metrica) nel senso della Def. 666 degli appunti: la metrica indotta dalla norma (Def. 667 e Prop. 668).

*Verifica, proprietà per proprietà.* (1) La radice di un numero $\ge0$ è $\ge0$. (4) $\lVert\mathbf{x}\rVert=0$ significa $\langle\mathbf{x},\mathbf{x}\rangle=0$, e la definitezza dà $\mathbf{x}=\mathbf{0}$. (3) Per l'omogeneità nel primo argomento e, con la simmetria, nel secondo: $\langle\alpha\mathbf{x},\alpha\mathbf{x}\rangle=\alpha\langle\mathbf{x},\alpha\mathbf{x}\rangle=\alpha^2\langle\mathbf{x},\mathbf{x}\rangle$, e $\sqrt{\alpha^2}=\lvert\alpha\rvert$. (2) La dimostrazione della disuguaglianza triangolare nella lezione 01 (§3.3) usa solo lo sviluppo $\lVert\mathbf{x}+\mathbf{y}\rVert^2=\lVert\mathbf{x}\rVert^2+2\langle\mathbf{x},\mathbf{y}\rangle+\lVert\mathbf{y}\rVert^2$ (bilinearità e simmetria) e la stima $\langle\mathbf{x},\mathbf{y}\rangle\le\lVert\mathbf{x}\rVert\lVert\mathbf{y}\rVert$ (Cauchy-Schwarz). Entrambi i fatti valgono in ogni spazio euclideo, quindi quella dimostrazione si trasferisce parola per parola.

### Angolo e ortogonalità

Per $\mathbf{u},\mathbf{v}\ne\mathbf{0}$ si ha $\lVert\mathbf{u}\rVert\lVert\mathbf{v}\rVert>0$ (definitezza), e dividendo Cauchy-Schwarz per questo numero si ottiene $-1\le\dfrac{\langle\mathbf{u},\mathbf{v}\rangle}{\lVert\mathbf{u}\rVert\lVert\mathbf{v}\rVert}\le1$. È quindi lecito **definire** l'angolo tra $\mathbf{u}$ e $\mathbf{v}$ come l'unico $\theta\in[0,\pi]$ tale che

$$\cos\theta=\frac{\langle\mathbf{u},\mathbf{v}\rangle}{\lVert\mathbf{u}\rVert\,\lVert\mathbf{v}\rVert}\qquad(\mathbf{u},\mathbf{v}\ne\mathbf{0}).$$

Il numeratore misura quanto i vettori sono allineati, il denominatore elimina l'effetto delle loro lunghezze. In $\mathbb{R}^n$ con il prodotto standard questo $\theta$ coincide con l'angolo geometrico (teorema del coseno, lezione 01, §3.1); negli altri spazi è una definizione, che porta la geometria dove non si può disegnare. L'ordine logico conta: prima Cauchy-Schwarz, poi l'angolo. Con il vettore nullo l'angolo non è definito.

*Micro-esempio.* Con il prodotto standard, $\mathbf{u}=(1,0,0)$ e $\mathbf{v}=(1,1,0)$ danno $\cos\theta=\dfrac{1}{1\cdot\sqrt2}$, quindi $\theta=\pi/4$.

**Definizione (ortogonalità).** $\mathbf{u}$ e $\mathbf{v}$ sono **ortogonali**, e si scrive $\mathbf{u}\perp\mathbf{v}$, se $\langle\mathbf{u},\mathbf{v}\rangle=0$. Per vettori non nulli equivale a $\theta=\pi/2$. Il vettore nullo è ortogonale a ogni vettore, perché $\langle\mathbf{0},\mathbf{v}\rangle=0$, ed è l'unico vettore ortogonale a sé stesso, per la definitezza.

**Teorema di Pitagora.** Se $\mathbf{u}\perp\mathbf{v}$, allora $\lVert\mathbf{u}+\mathbf{v}\rVert^2=\lVert\mathbf{u}\rVert^2+\lVert\mathbf{v}\rVert^2$. *Perché:* lo sviluppo $\lVert\mathbf{u}+\mathbf{v}\rVert^2=\lVert\mathbf{u}\rVert^2+2\langle\mathbf{u},\mathbf{v}\rangle+\lVert\mathbf{v}\rVert^2$ vale per ogni coppia di vettori, e l'ipotesi annulla il doppio prodotto.

**Identità del parallelogramma.** Per ogni $\mathbf{u},\mathbf{v}$: $\lVert\mathbf{u}+\mathbf{v}\rVert^2+\lVert\mathbf{u}-\mathbf{v}\rVert^2=2\lVert\mathbf{u}\rVert^2+2\lVert\mathbf{v}\rVert^2$. *Perché:* sommando gli sviluppi di $\lVert\mathbf{u}+\mathbf{v}\rVert^2$ e $\lVert\mathbf{u}-\mathbf{v}\rVert^2$ i doppi prodotti $\pm2\langle\mathbf{u},\mathbf{v}\rangle$ si cancellano; è la dimostrazione dell'esercizio E8 della lezione 01, che usa solo la bilinearità. Conseguenza: **una norma che viola questa identità non proviene da alcun prodotto scalare**. Esistono infatti norme nel senso della Def. 660 che non sono indotte (checkpoint qui sotto, Esercizio 5). Vale anche il viceversa (teorema di Jordan-von Neumann), che qui non serve.

```checkpoint
[domanda]
Su $\mathbb{R}^2$ la norma «taxi» $\lVert\mathbf{v}\rVert_1=\lvert v_1\rvert+\lvert v_2\rvert$ soddisfa le quattro proprietà della Def. 660. È indotta da un prodotto scalare?

[risposta]
No. Con $\mathbf{u}=(1,0)$ e $\mathbf{v}=(0,1)$: $\lVert\mathbf{u}+\mathbf{v}\rVert_1=\lVert\mathbf{u}-\mathbf{v}\rVert_1=2$, quindi il membro sinistro dell'identità del parallelogramma vale $4+4=8$, mentre il destro vale $2\cdot1+2\cdot1=4$. Una norma indotta soddisfa l'identità per ogni coppia di vettori; questa no, quindi nessun prodotto scalare la induce.
```

### Famiglie ortogonali e ortonormali

**Definizione.** Una famiglia di vettori **non nulli** $\mathbf{v}_1,\dots,\mathbf{v}_k$ è **ortogonale** se $\langle\mathbf{v}_i,\mathbf{v}_j\rangle=0$ per ogni $i\ne j$. È **ortonormale** se in più $\lVert\mathbf{v}_i\rVert=1$ per ogni $i$, cioè $\langle\mathbf{v}_i,\mathbf{v}_j\rangle=\delta_{ij}$ (che vale $1$ se $i=j$ e $0$ altrimenti). Da una famiglia ortogonale se ne ottiene una ortonormale **normalizzando**, cioè sostituendo ogni $\mathbf{v}_i$ con $\mathbf{v}_i/\lVert\mathbf{v}_i\rVert$.

> **Attenzione.** Ortogonale non vuol dire ortonormale. Con il prodotto standard, $(3,4)$ e $(-4,3)$ sono ortogonali ($-12+12=0$) ma hanno norma $5$; i normalizzati $\tfrac15(3,4)$ e $\tfrac15(-4,3)$ formano una famiglia ortonormale.

**Proposizione.** Una famiglia ortogonale è linearmente indipendente. *Perché:* se $\sum_i a_i\mathbf{v}_i=\mathbf{0}$, il prodotto scalare di entrambi i membri con $\mathbf{v}_j$ dà, per linearità, $\sum_i a_i\langle\mathbf{v}_i,\mathbf{v}_j\rangle=\langle\mathbf{0},\mathbf{v}_j\rangle=0$. A sinistra sopravvive solo il termine $i=j$, quindi $a_j\lVert\mathbf{v}_j\rVert^2=0$; poiché $\mathbf{v}_j\ne\mathbf{0}$, la definitezza dà $\lVert\mathbf{v}_j\rVert^2>0$, e allora $a_j=0$, per ogni $j$. Perciò una famiglia ortogonale di $n$ vettori (quindi non nulli) in uno spazio di dimensione $n$ è una base (lezione 06).

Come proiettare un vettore su un sottospazio, e che cos'è il complemento ortogonale $W^\perp$, si vede in [Ortogonalità e proiezioni ortogonali](/algebra-lineare/ortogonalita/12-ortogonalita-proiezioni); come costruire una base ortonormale a partire da una base qualunque, in [Processo di Gram-Schmidt e fattorizzazione QR](/algebra-lineare/ortogonalita/13-gram-schmidt).

## Dimostrazioni

### Cauchy-Schwarz in uno spazio euclideo qualunque

**Enunciato.** Per ogni $\mathbf{u},\mathbf{v}$ in uno spazio euclideo, $\lvert\langle\mathbf{u},\mathbf{v}\rangle\rvert\le\lVert\mathbf{u}\rVert\,\lVert\mathbf{v}\rVert$, con uguaglianza se e solo se $\mathbf{u},\mathbf{v}$ sono linearmente dipendenti.

**Idea.** La dimostrazione algebrica della lezione 01 (§3.2) studia il polinomio $p(t)=\lVert\mathbf{u}-t\mathbf{v}\rVert^2$. La ripercorriamo indicando a ogni passo quale assioma la rende valida: questo, e solo questo, cambia passando da $\mathbb{R}^n$ a uno spazio euclideo qualunque.

**Dimostrazione.**

1. *Caso $\mathbf{v}=\mathbf{0}$.* Allora $\langle\mathbf{u},\mathbf{0}\rangle=0$ e $\lVert\mathbf{0}\rVert=0$: entrambi i membri sono nulli e vale l'uguaglianza; d'altra parte $\mathbf{u}$ e $\mathbf{0}$ sono dipendenti. La tesi vale. Da qui in poi $\mathbf{v}\ne\mathbf{0}$.
2. *Sviluppo (simmetria e linearità).* Per ogni $t\in\mathbb{R}$, $p(t)=\langle\mathbf{u}-t\mathbf{v},\mathbf{u}-t\mathbf{v}\rangle=\lVert\mathbf{v}\rVert^2t^2-2\langle\mathbf{u},\mathbf{v}\rangle\,t+\lVert\mathbf{u}\rVert^2$. Il calcolo è quello della lezione 01, che usa solo gli assiomi 1 e 2.
3. *Segno (positività).* $p(t)=\langle\mathbf{w},\mathbf{w}\rangle$ con $\mathbf{w}=\mathbf{u}-t\mathbf{v}$, quindi $p(t)\ge0$ per ogni $t$ per l'assioma 3. In $\mathbb{R}^n$ questo passo era «una somma di quadrati è $\ge0$»; ora è un assioma.
4. *Grado (definitezza).* Poiché $\mathbf{v}\ne\mathbf{0}$, l'assioma 4 dà $\lVert\mathbf{v}\rVert^2>0$: $p$ è un polinomio di secondo grado con coefficiente direttore positivo.
5. *Discriminante.* Se fosse $\Delta>0$, $p$ avrebbe due radici reali distinte $t_1<t_2$ e, con coefficiente direttore positivo, sarebbe negativo per $t_1<t<t_2$, contro il passo 3. Quindi $\Delta=4\langle\mathbf{u},\mathbf{v}\rangle^2-4\lVert\mathbf{u}\rVert^2\lVert\mathbf{v}\rVert^2\le0$, cioè $\langle\mathbf{u},\mathbf{v}\rangle^2\le\lVert\mathbf{u}\rVert^2\lVert\mathbf{v}\rVert^2$. Estraendo la radice di due numeri $\ge0$ si ottiene $\lvert\langle\mathbf{u},\mathbf{v}\rangle\rvert\le\lVert\mathbf{u}\rVert\lVert\mathbf{v}\rVert$.
6. *Uguaglianza (definitezza).* Poiché $\Delta\le0$ (passo 5), l'uguaglianza equivale a $\Delta=0$, cioè all'esistenza di una radice reale $t_0$ di $p$. Se $\Delta=0$, allora $\lVert\mathbf{u}-t_0\mathbf{v}\rVert^2=p(t_0)=0$, e la definitezza dà $\mathbf{u}=t_0\mathbf{v}$: i vettori sono dipendenti. Viceversa, se sono dipendenti e $\mathbf{v}\ne\mathbf{0}$, allora $\mathbf{u}=\lambda\mathbf{v}$ per qualche $\lambda$ (in una relazione $a\mathbf{u}+b\mathbf{v}=\mathbf{0}$ non banale deve essere $a\ne0$, altrimenti $b\mathbf{v}=\mathbf{0}$ con $b\ne0$), e per l'omogeneità si calcola $\lvert\langle\lambda\mathbf{v},\mathbf{v}\rangle\rvert=\lvert\lambda\rvert\,\lVert\mathbf{v}\rVert^2=\lVert\lambda\mathbf{v}\rVert\,\lVert\mathbf{v}\rVert$. $\blacksquare$

In sintesi: la positività serve a sapere che $p\ge0$; la definitezza serve a sapere che $p$ è davvero di secondo grado e a caratterizzare il caso di uguaglianza.

## Esempi

**Esempio 1 — L'ortogonalità dipende dal prodotto scalare.**
*Strategia:* stessa coppia di vettori, due prodotti scalari diversi su $\mathbb{R}^2$.
Siano $\mathbf{u}=(1,1)$ e $\mathbf{v}=(1,-1)$. Col prodotto standard $\langle\mathbf{u},\mathbf{v}\rangle=1-1=0$: sono ortogonali. Prendiamo ora il prodotto pesato $\langle\mathbf{u},\mathbf{v}\rangle_c=2u_1v_1+u_2v_2$, con pesi $c_1=2$ e $c_2=1$ positivi, quindi un vero prodotto scalare. Si ottiene $\langle\mathbf{u},\mathbf{v}\rangle_c=2\cdot1\cdot1+1\cdot(-1)=1\ne0$: non sono più ortogonali. Cambiano anche le lunghezze: $\lVert\mathbf{u}\rVert=\sqrt2$, mentre $\lVert\mathbf{u}\rVert_c=\sqrt{2+1}=\sqrt3$ e $\lVert\mathbf{v}\rVert_c=\sqrt{2+1}=\sqrt3$. L'angolo col prodotto pesato è dato da $\cos\theta_c=\dfrac{1}{\sqrt3\cdot\sqrt3}=\dfrac13$, cioè $\theta_c\approx70{,}5^\circ$ invece di $90^\circ$.
*Lettura:* in una regressione pesata il peso $c_i$ dice quanto conta l'osservazione $i$; cambiare i pesi cambia la geometria con cui si misura la distanza dai dati.

**Esempio 2 — Lunghezza e angolo tra funzioni.**
*Strategia:* in $C([0,1])$ con $\langle f,g\rangle=\int_0^1 fg\,dx$, calcolare tre integrali e applicare la definizione di angolo a $f(x)=1$ e $g(x)=x$.
Si ha $\langle 1,x\rangle=\int_0^1 x\,dx=\tfrac12$, $\lVert1\rVert^2=\int_0^1 1\,dx=1$ e $\lVert x\rVert^2=\int_0^1 x^2\,dx=\tfrac13$, quindi $\lVert x\rVert=1/\sqrt3$. Allora

$$\cos\theta=\frac{1/2}{1\cdot(1/\sqrt3)}=\frac{\sqrt3}{2},\qquad\theta=\frac{\pi}{6}.$$

Controllo con Cauchy-Schwarz: $\tfrac12\le1\cdot\tfrac{1}{\sqrt3}\approx0{,}577$. *Lettura:* su $[0,1]$ le due funzioni sono entrambe non negative, e il loro prodotto è positivo su $(0,1]$, quindi $\langle1,x\rangle>0$ e l'angolo è acuto: $30^\circ$.

**Esempio 3 — Una famiglia ortogonale di funzioni.**
*Strategia:* in $C([0,\pi])$ con $\langle f,g\rangle=\int_0^\pi fg\,dx$, trasformare il prodotto di seni in una differenza di coseni.
Siano $m\ne n$ interi positivi. Con la formula $\sin(mx)\sin(nx)=\tfrac12\big[\cos((m-n)x)-\cos((m+n)x)\big]$:

$$\int_0^\pi\sin(mx)\sin(nx)\,dx=\frac12\left[\frac{\sin((m-n)x)}{m-n}-\frac{\sin((m+n)x)}{m+n}\right]_0^\pi=0,$$

perché $m-n$ e $m+n$ sono interi non nulli e $\sin(k\pi)=0$ per ogni intero $k$. Le ipotesi servono: con $m=n$ l'integrale vale $\pi/2$ (sotto), e con $n=-m$ si avrebbe $\sin(nx)=-\sin(mx)$, che non è ortogonale a $\sin(mx)$. Inoltre

$$\lVert\sin(nx)\rVert^2=\int_0^\pi\sin^2(nx)\,dx=\int_0^\pi\frac{1-\cos(2nx)}{2}\,dx=\frac{\pi}{2},$$

quindi la famiglia $\sin x,\sin 2x,\sin 3x,\dots$ è ortogonale ma non ortonormale; normalizzando si ottiene la famiglia ortonormale $\sqrt{2/\pi}\,\sin(nx)$.

Il grafico mostra il prodotto $\sin x\cdot\sin 2x$ su $[0,\pi]$: osserva che l'area della parte sopra l'asse compensa esattamente quella della parte sotto. Per questo l'integrale, cioè il prodotto scalare, vale zero.

```plot
{"title":"Prodotto sin(x)·sin(2x) su [0, π]: le aree sopra e sotto l'asse si compensano","fn":"Math.sin(x)*Math.sin(2*x)","fn2":"0","domain":[0,3.1416],"yDomain":[-0.9,0.9],"label1":"sin(x)·sin(2x)","label2":"asse y = 0"}
```

**Esempio 4 — La correlazione è un coseno.**
*Strategia:* passare dai dati agli scarti dalla media e riconoscere nella formula di Pearson un rapporto prodotto scalare / norme.
Cinque osservazioni di reddito $x=(1,2,3,4,5)$ e consumo $y=(2,4,5,4,5)$ hanno medie $3$ e $4$. Gli scarti sono $\tilde{\mathbf{x}}=(-2,-1,0,1,2)$ e $\tilde{\mathbf{y}}=(-2,0,1,0,1)$. Con il prodotto standard di $\mathbb{R}^5$: $\langle\tilde{\mathbf{x}},\tilde{\mathbf{y}}\rangle=4+0+0+0+2=6$, $\lVert\tilde{\mathbf{x}}\rVert^2=10$, $\lVert\tilde{\mathbf{y}}\rVert^2=6$. Il coefficiente di Pearson è

$$r=\frac{\sum\tilde x_i\tilde y_i}{\sqrt{\sum\tilde x_i^2}\,\sqrt{\sum\tilde y_i^2}}=\frac{\langle\tilde{\mathbf{x}},\tilde{\mathbf{y}}\rangle}{\lVert\tilde{\mathbf{x}}\rVert\,\lVert\tilde{\mathbf{y}}\rVert}=\frac{6}{\sqrt{60}}=\frac{\sqrt{15}}{5}\approx0{,}775,$$

cioè il coseno dell'angolo tra i vettori degli scarti ($\theta\approx39{,}2^\circ$). La formula richiede dati non costanti (scarti non nulli). Cauchy-Schwarz garantisce $-1\le r\le1$, con $r=\pm1$ solo se $\tilde{\mathbf{y}}$ è multiplo di $\tilde{\mathbf{x}}$ (i punti stanno su una retta); $r=0$ significa scarti ortogonali.

## Collegamenti e riepilogo

- Un prodotto scalare è simmetrico, lineare (quindi bilineare), positivo e definito; uno spazio euclideo è uno spazio vettoriale reale con un prodotto scalare.
- Dal prodotto si ottengono la norma $\lVert\mathbf{v}\rVert=\sqrt{\langle\mathbf{v},\mathbf{v}\rangle}$, che è una norma nel senso della Def. 660, la distanza $\lVert\mathbf{u}-\mathbf{v}\rVert$ e, grazie a Cauchy-Schwarz, l'angolo tra vettori non nulli.
- Ortogonalità, Pitagora e identità del parallelogramma valgono in ogni spazio euclideo; una norma che viola il parallelogramma non è indotta.
- Indietro: le dimostrazioni in $\mathbb{R}^n$ della lezione [Vettori e operazioni fondamentali](/algebra-lineare/fondamenti/01-vettori), che qui si trasferiscono senza cambiamenti salvo i punti indicati. Avanti: proiezioni e $W^\perp$ nella lezione 12, basi ortonormali nella 13; nella lezione [Matrici simmetriche e forme quadratiche](/algebra-lineare/autovalori-e-diagonalizzazione/14-forme-quadratiche) ritornano le forme bilineari simmetriche senza positività, come quella del primo checkpoint.

## Esercizi

**Esercizio 1.** In $\mathbb{R}^4$ con il prodotto standard siano $\mathbf{u}=(1,2,-1,0)$ e $\mathbf{v}=(2,-1,0,3)$. Sono ortogonali? Calcola le norme e verifica il teorema di Pitagora.

<details>
<summary>Soluzione</summary>

$\langle\mathbf{u},\mathbf{v}\rangle=2-2+0+0=0$: ortogonali. $\lVert\mathbf{u}\rVert=\sqrt{1+4+1+0}=\sqrt6$, $\lVert\mathbf{v}\rVert=\sqrt{4+1+0+9}=\sqrt{14}$. Poi $\mathbf{u}+\mathbf{v}=(3,1,-1,3)$ e $\lVert\mathbf{u}+\mathbf{v}\rVert^2=9+1+1+9=20=6+14=\lVert\mathbf{u}\rVert^2+\lVert\mathbf{v}\rVert^2$.
</details>

**Esercizio 2.** Con il prodotto standard di $\mathbb{R}^3$, calcola l'angolo tra $\mathbf{u}=(1,1,0)$ e $\mathbf{v}=(0,1,1)$.

<details>
<summary>Soluzione</summary>

$\langle\mathbf{u},\mathbf{v}\rangle=0+1+0=1$ e $\lVert\mathbf{u}\rVert=\lVert\mathbf{v}\rVert=\sqrt2$. Quindi $\cos\theta=\dfrac{1}{\sqrt2\cdot\sqrt2}=\dfrac12$ e $\theta=\pi/3$, cioè $60^\circ$.
</details>

**Esercizio 3.** Mostra che $\langle\mathbf{u},\mathbf{v}\rangle_c=\sum_{i=1}^n c_iu_iv_i$ è un prodotto scalare su $\mathbb{R}^n$ se ogni $c_i>0$, e che non lo è se qualche $c_k\le0$.

<details>
<summary>Soluzione</summary>

Simmetria e linearità valgono per qualunque scelta dei $c_i$: $c_iu_iv_i=c_iv_iu_i$, e $\sum c_i(\alpha u_i+w_i)v_i=\alpha\sum c_iu_iv_i+\sum c_iw_iv_i$. Se ogni $c_i>0$: $\langle\mathbf{v},\mathbf{v}\rangle_c=\sum c_iv_i^2\ge0$, e se la somma è nulla ogni termine $c_iv_i^2$ (che è $\ge0$) è nullo, quindi ogni $v_i=0$. Se invece $c_k\le0$, si prende il $k$-esimo vettore della base canonica $\mathbf{e}_k\ne\mathbf{0}$: $\langle\mathbf{e}_k,\mathbf{e}_k\rangle_c=c_k$. Se $c_k<0$ fallisce la positività, se $c_k=0$ fallisce la definitezza.
</details>

**Esercizio 4.** Usando Cauchy-Schwarz, dimostra che per ogni $a_1,\dots,a_n\in\mathbb{R}$ vale $\left(\sum_{i=1}^n a_i\right)^2\le n\sum_{i=1}^n a_i^2$. Quando vale l'uguaglianza?

<details>
<summary>Soluzione</summary>

In $\mathbb{R}^n$ con il prodotto standard, siano $\mathbf{a}=(a_1,\dots,a_n)$ e $\mathbf{1}=(1,\dots,1)$. Allora $\langle\mathbf{a},\mathbf{1}\rangle=\sum a_i$, $\lVert\mathbf{a}\rVert^2=\sum a_i^2$, $\lVert\mathbf{1}\rVert^2=n$. Elevando al quadrato Cauchy-Schwarz: $\left(\sum a_i\right)^2\le n\sum a_i^2$. Non serve alcuna ipotesi di segno sugli $a_i$. L'uguaglianza vale se e solo se $\mathbf{a}$ e $\mathbf{1}$ sono dipendenti, cioè (essendo $\mathbf{1}\ne\mathbf{0}$) $\mathbf{a}=\lambda\mathbf{1}$: tutti gli $a_i$ uguali. Dividendo per $n^2$: il quadrato della media non supera la media dei quadrati.
</details>

**Esercizio 5.** Su $\mathbb{R}^2$ la norma del massimo $\lVert(x,y)\rVert_\infty=\max(\lvert x\rvert,\lvert y\rvert)$ soddisfa le proprietà della Def. 660. Mostra che non è indotta da alcun prodotto scalare.

<details>
<summary>Soluzione</summary>

Con $\mathbf{u}=(1,0)$ e $\mathbf{v}=(0,1)$: $\lVert\mathbf{u}\rVert_\infty=\lVert\mathbf{v}\rVert_\infty=1$, e $\mathbf{u}+\mathbf{v}=(1,1)$, $\mathbf{u}-\mathbf{v}=(1,-1)$ hanno entrambi norma $1$. Il membro sinistro dell'identità del parallelogramma vale $1+1=2$, il destro $2+2=4$. L'identità fallisce, quindi la norma non è indotta.
</details>

**Esercizio 6.** In $C([0,1])$ con $\langle f,g\rangle=\int_0^1 fg\,dx$, verifica che $1\perp\left(x-\tfrac12\right)$. Poi considera il prodotto pesato $\langle f,g\rangle_w=\int_0^1 f(x)g(x)e^{-x}\,dx$ e calcola $\langle 1,x-\tfrac12\rangle_w$. Suggerimento: una primitiva di $xe^{-x}$ è $-(x+1)e^{-x}$.

<details>
<summary>Soluzione</summary>

Col primo prodotto: $\int_0^1\left(x-\tfrac12\right)dx=\tfrac12-\tfrac12=0$, quindi sono ortogonali. Il secondo è un prodotto scalare per lo stesso argomento usato per l'integrale, perché $e^{-x}>0$ è continua (la definitezza si ripete con $f^2e^{-x}$ al posto di $f^2$). Si calcola $\int_0^1 xe^{-x}\,dx=\big[-(x+1)e^{-x}\big]_0^1=1-\tfrac{2}{e}$ e $\int_0^1 e^{-x}\,dx=1-\tfrac1e$, quindi

$$\left\langle 1,x-\tfrac12\right\rangle_w=\left(1-\frac2e\right)-\frac12\left(1-\frac1e\right)=\frac12-\frac{3}{2e}\approx-0{,}052\ne0.$$

Con il peso $e^{-x}$ le due funzioni non sono più ortogonali: il peso conta di più vicino a $0$, dove $x-\tfrac12<0$, e infatti il prodotto è negativo.
</details>
