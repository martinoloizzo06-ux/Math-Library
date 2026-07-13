---
id: analisi-23-integrali-multipli
titolo: "Integrali doppi e tripli"
materia: analisi
argomento: "Analisi multivariata"
modulo: "Calcolo integrale in più variabili"
livello: universitario
slug: analisi-23-integrali-multipli

# legacy
subject: analisi
topic_it: Analisi multivariata
topic_en: Multivariable analysis
title_it: "Integrali doppi e tripli"
title_en: "Double and triple integrals"
level: blue
order: 23
source_book: "A. Villanacci, Basic Linear Algebra, Metric Spaces, Differential Calculus and Nonlinear Programming (appunti); OpenStax Calculus Vol. 1; MIT OCW 18.02"
source_chapter: "Integrali doppi, teorema di Fubini, cambio di variabili e Jacobiano, coordinate polari, integrale di Gauss"

prerequisiti:
  - analisi-12-integrale-definito
  - analisi-13-tecniche-integrazione
  - analisi-20-funzioni-piu-variabili

collegamenti:
  - analisi-12-integrale-definito
  - analisi-13-tecniche-integrazione
  - analisi-19-serie-taylor
  - analisi-20-funzioni-piu-variabili

fonti_integrate:
  - id_fonte: villanacci-math2
    ruolo: primaria
    sezioni_coperte: "Integrazione in Rⁿ, misura di regioni, cambio di variabili, Jacobiano; impianto rigoroso e notazione d'esame"
    note: "appunti-prof: notazione e convenzioni. Struttura dell'integrale multiplo e del teorema del cambio di variabili"
  - id_fonte: openstax-calculus-1
    ruolo: secondaria
    sezioni_coperte: "Somme di Riemann e integrale definito 1D (base per l'estensione al doppio), tecniche di integrazione usate negli integrali iterati"
    note: "il ponte con l'integrale a una variabile già noto; esempi introduttivi"
  - id_fonte: villanacci-math1
    ruolo: secondaria
    sezioni_coperte: "Topologia di Rⁿ, regioni limitate e loro frontiera; supporto alle regioni di integrazione"
    note: "definizione delle regioni normali (tipo I/II) e delle loro frontiere"

versione: "3.0"
data_ultima_rielaborazione: "2026-07-12"
stato: completa

componenti_usati:
  - slider
  - checkpoint

sezioni_omesse: []
---

## 1. Motivazione e intuizione

L'integrale di una funzione di una variabile misura un'**area**: $\int_a^b f(x)\,dx$ è l'area della regione tra il grafico e l'asse. Quando la funzione ha due variabili, il grafico è una superficie sospesa sopra il piano, e la domanda naturale diventa: quanto **volume** c'è sotto quella superficie? La risposta è l'**integrale doppio** $\iint_D f(x,y)\,dA$. Con tre variabili si misura una **massa** (o una carica, o una probabilità) distribuita in una regione dello spazio, tramite l'**integrale triplo**.

Ma «volume sotto una superficie» è solo l'immagine di partenza. La vera potenza dell'integrale multiplo è che serve a *sommare in modo continuo* una quantità distribuita su una regione. In probabilità, il **valore atteso** di una funzione di due variabili aleatorie è un integrale doppio della funzione pesata dalla densità congiunta; la probabilità che $(X,Y)$ cada in una regione è l'integrale doppio della densità su quella regione. In meccanica, il **baricentro** e il **momento d'inerzia** di una lamina sono integrali doppi. In economia e statistica, medie su regioni e normalizzazioni di densità multivariate sono integrali multipli. È il linguaggio con cui si «pesano» distribuzioni continue in più dimensioni.

Il problema pratico è: come si calcola un integrale in due o tre dimensioni? La risposta, elegante, è il **teorema di Fubini**: si integra **una variabile alla volta**, riducendo l'integrale multiplo a una successione di integrali ordinari già noti dal modulo precedente. Integri prima «lungo $x$», ottieni una funzione di $y$, poi integri quella «lungo $y$». Un volume si costruisce affettandolo: si calcola l'area di ogni fetta e si sommano le aree lungo lo spessore.

Il secondo strumento chiave è il **cambio di variabili**. In una variabile la sostituzione $u=g(x)$ portava con sé il fattore $g'(x)\,dx=du$. In più variabili quel fattore diventa il **determinante Jacobiano**, che misura di quanto la trasformazione dilata o contrae le aree localmente. Il caso più importante, le **coordinate polari**, produce il celebre fattore $r$ (l'elemento d'area $dx\,dy=r\,dr\,d\theta$) e permette di calcolare integrali altrimenti impossibili — primo fra tutti l'**integrale di Gauss** $\int_{-\infty}^{+\infty}e^{-x^2}dx=\sqrt\pi$, che è la chiave di volta della distribuzione normale e quindi di tutta la statistica.

---

## 2. Teoria

### 2.1 L'integrale doppio come limite di somme di Riemann

**Definizione (integrale doppio su un rettangolo).** Sia $f:R\to\mathbb{R}$ limitata sul rettangolo $R=[a,b]\times[c,d]$. Suddividiamo $R$ in piccoli rettangoli $R_{ij}$ di area $\Delta A_{ij}$, scegliamo un punto $(x_{ij}^*,y_{ij}^*)$ in ciascuno, e formiamo la **somma di Riemann**
$$S=\sum_{i,j} f(x_{ij}^*,y_{ij}^*)\,\Delta A_{ij}.$$
Se al raffinarsi della griglia (tutti i lati $\to0$) queste somme tendono a un unico numero indipendente dalle scelte, quel numero è l'**integrale doppio**
$$\iint_R f(x,y)\,dA=\lim S.$$

Leggiamola. Ogni addendo $f(x_{ij}^*,y_{ij}^*)\,\Delta A_{ij}$ è il volume di una colonnina con base il rettangolino $R_{ij}$ (area $\Delta A_{ij}$) e altezza il valore della funzione lì sopra: $\text{altezza}\times\text{area di base}$. Sommando tutte le colonnine e affinando, si «riempie» il volume sotto la superficie. Il simbolo $dA$ (elemento d'area) è il limite di $\Delta A_{ij}$; in coordinate cartesiane $dA=dx\,dy$. Per una funzione $f\ge0$ il risultato è il volume tra la superficie e il piano; se $f$ cambia segno, i contributi negativi (superficie sotto il piano) si sottraggono, esattamente come le aree con segno in 1D.

Per una regione $D$ più generale (non rettangolare) la definizione è la stessa, con la convenzione di porre $f=0$ fuori da $D$. Le funzioni continue su una regione limitata «ragionevole» sono integrabili.

*Micro-esempio.* Se $f(x,y)=1$ costante su $D$, allora $\iint_D 1\,dA=\text{area}(D)$: le colonnine hanno altezza $1$, quindi il volume è numericamente l'area di base. L'integrale doppio della funzione costante $1$ **misura l'area** della regione.

### 2.2 Il teorema di Fubini: integrare una variabile alla volta

Calcolare l'integrale doppio dalla definizione (limite di somme) è impraticabile. Il teorema di Fubini lo riduce a integrali ordinari iterati.

**Teorema di Fubini (su un rettangolo).** Se $f$ è continua su $R=[a,b]\times[c,d]$, allora
$$\iint_R f(x,y)\,dA=\int_a^b\!\left(\int_c^d f(x,y)\,dy\right)dx=\int_c^d\!\left(\int_a^b f(x,y)\,dx\right)dy.$$

Il senso geometrico è l'**affettamento**. Fissato $x$, l'integrale interno $A(x)=\int_c^d f(x,y)\,dy$ è l'area della fetta verticale del solido al valore $x$ (una sezione trasversale). L'integrale esterno $\int_a^b A(x)\,dx$ somma le aree delle fette lungo lo spessore $dx$, ricostruendo il volume. Nell'integrale interno, $x$ è **congelato** e fa da costante: si integra rispetto a $y$ come in una variabile sola. Il teorema garantisce anche che **l'ordine non conta**: si può affettare lungo $x$ o lungo $y$, il volume è lo stesso. La libertà di scegliere l'ordine è preziosa, perché spesso un ordine dà conti semplici e l'altro conti proibitivi.

Lo strumento qui sotto mostra l'affettamento per $f(x,y)=e^{-(x^2+y^2)}$ (una campana). Spostando la posizione $c$ della fetta $y=c$, vedi la sezione $g(x)=f(x,c)=e^{-c^2}e^{-x^2}$: una gaussiana la cui altezza è modulata da $e^{-c^2}$. L'area di ogni fetta è l'integrale interno; sommandole (integrale esterno) si ottiene il volume totale — che in §3.1 useremo per calcolare $\int e^{-x^2}dx$.

```slider
{"title":"Fubini per affettamento: sezione g(x)=e^{−c²}·e^{−x²} della campana e^{−(x²+y²)}","fn":"Math.exp(-a*a)*Math.exp(-x*x)","fn2":"0","domain":[-3,3],"yDomain":[0,1.1],"pname":"a","pmin":-2.5,"pmax":2.5,"pdefault":0,"pstep":0.05,"plabel":"posizione c della fetta y = c","label1":"sezione g(x) = f(x,c) (area = integrale interno)","label2":"livello zero"}
```

**Regioni normali.** Per regioni non rettangolari, gli estremi interni dipendono dalla variabile esterna. Una regione è di **tipo I** se descritta da $a\le x\le b$, $g_1(x)\le y\le g_2(x)$ (bordi inferiore/superiore funzioni di $x$); allora
$$\iint_D f\,dA=\int_a^b\!\left(\int_{g_1(x)}^{g_2(x)} f(x,y)\,dy\right)dx.$$
Simmetricamente, una regione di **tipo II** ha $c\le y\le d$, $h_1(y)\le x\le h_2(y)$, e si integra prima in $x$. Molte regioni sono di entrambi i tipi: si sceglie l'ordine che semplifica i conti (o che rende gli estremi più semplici).

*Micro-esempio.* $\displaystyle\iint_R xy\,dA$ su $R=[0,1]\times[0,2]$: interno $\int_0^2 xy\,dy=x\cdot\frac{y^2}{2}\Big|_0^2=2x$; esterno $\int_0^1 2x\,dx=1$.

### 2.3 Cambio di variabili e determinante Jacobiano

A volte la regione o la funzione si semplificano enormemente in altre coordinate. Serve la regola di sostituzione multivariata.

**Teorema (cambio di variabili).** Sia $T:(u,v)\mapsto(x(u,v),\,y(u,v))$ una trasformazione regolare e invertibile da una regione $D^*$ del piano $uv$ alla regione $D$ del piano $xy$. Allora
$$\iint_D f(x,y)\,dx\,dy=\iint_{D^*} f\big(x(u,v),y(u,v)\big)\,\big|\,J(u,v)\,\big|\,du\,dv,$$
dove $J$ è il **determinante Jacobiano** della trasformazione:
$$J=\frac{\partial(x,y)}{\partial(u,v)}=\det\begin{pmatrix}\dfrac{\partial x}{\partial u} & \dfrac{\partial x}{\partial v}\\[2mm] \dfrac{\partial y}{\partial u} & \dfrac{\partial y}{\partial v}\end{pmatrix}.$$

Interpretazione. Lo Jacobiano è il **fattore locale di dilatazione dell'area**: la trasformazione $T$ manda un rettangolino di area $du\,dv$ nel piano $uv$ in un parallelogrammo di area $|J|\,du\,dv$ nel piano $xy$. È l'analogo multivariato di $g'(x)$ nella sostituzione 1D $\int f(g(x))g'(x)\,dx$: là $g'$ diceva quanto si allungava il segmentino $dx$, qui $|J|$ dice quanto si dilata l'elemento d'area. Il valore assoluto compare perché l'area è positiva a prescindere dall'orientazione (in 1D il segno era assorbito dallo scambio degli estremi).

### 2.4 Coordinate polari: l'elemento d'area $r\,dr\,d\theta$

Il cambio di variabili più usato passa alle **coordinate polari** $x=r\cos\theta$, $y=r\sin\theta$, con $r\ge0$ raggio e $\theta$ angolo. Il suo Jacobiano vale $r$ (lo calcoliamo in §3.3), quindi
$$dx\,dy=r\,dr\,d\theta,\qquad \iint_D f\,dx\,dy=\iint_{D^*} f(r\cos\theta,r\sin\theta)\,r\,dr\,d\theta.$$

Il fattore $r$ ha un senso geometrico immediato: un «rettangolino polare» delimitato da raggi tra $\theta$ e $\theta+d\theta$ e cerchi tra $r$ e $r+dr$ ha lati $dr$ (radiale) e $r\,d\theta$ (arco, tanto più lungo quanto più si è lontani dal centro), quindi area $\approx r\,dr\,d\theta$. **Dimenticare il fattore $r$ è l'errore numero uno** con le polari. Le polari sono la scelta obbligata quando compaiono $x^2+y^2$ (diventa $r^2$) o quando la regione è un disco/settore/corona (estremi costanti in $r$ e $\theta$).

*Micro-esempio.* Area del disco di raggio $a$: $\iint_{x^2+y^2\le a^2}1\,dx\,dy=\int_0^{2\pi}\!\int_0^a 1\cdot r\,dr\,d\theta=\int_0^{2\pi}\frac{a^2}{2}\,d\theta=\pi a^2$. Il fattore $r$ produce esattamente il $\pi a^2$ atteso.

```checkpoint
[domanda] Calcola $\displaystyle\iint_{D}(x^2+y^2)\,dx\,dy$ dove $D$ è il disco $x^2+y^2\le 1$, usando le coordinate polari. (Non dimenticare il fattore $r$.)
[risposta] In polari $x^2+y^2=r^2$ e $dx\,dy=r\,dr\,d\theta$, con $0\le r\le1$, $0\le\theta\le2\pi$: $\int_0^{2\pi}\!\int_0^1 r^2\cdot r\,dr\,d\theta=\int_0^{2\pi}\!\int_0^1 r^3\,dr\,d\theta=\int_0^{2\pi}\frac14\,d\theta=\frac{2\pi}{4}=\frac{\pi}{2}$. (Senza il fattore $r$ si otterrebbe erroneamente $\int_0^{2\pi}\int_0^1 r^2\,dr\,d\theta=\frac{2\pi}{3}$.)
```

### 2.5 Integrali tripli e coordinate cilindriche/sferiche

Tutto si estende a tre dimensioni: $\iiint_E f(x,y,z)\,dV$ è il limite di somme $\sum f\cdot\Delta V$, e Fubini lo riduce a tre integrali iterati. I cambi di variabile utili sono le **coordinate cilindriche** $(r,\theta,z)$ con $dV=r\,dr\,d\theta\,dz$ (polari nel piano $xy$, $z$ invariato) e le **coordinate sferiche** $(\rho,\theta,\varphi)$ con $dV=\rho^2\sin\varphi\,d\rho\,d\theta\,d\varphi$, ideali per sfere e simmetrie radiali nello spazio. Il fattore $\rho^2\sin\varphi$ è di nuovo il determinante Jacobiano della trasformazione sferica: la stessa logica del fattore $r$ delle polari, in una dimensione in più.

*Micro-esempio.* Volume della sfera di raggio $a$ in coordinate sferiche: $\int_0^{2\pi}\!\int_0^\pi\!\int_0^a \rho^2\sin\varphi\,d\rho\,d\varphi\,d\theta=\left(\int_0^a\rho^2d\rho\right)\!\left(\int_0^\pi\sin\varphi\,d\varphi\right)\!\left(\int_0^{2\pi}d\theta\right)=\frac{a^3}{3}\cdot2\cdot2\pi=\frac{4}{3}\pi a^3$.

```checkpoint
[domanda] Sull'integrale iterato $\int_0^1\!\int_0^x xy\,dy\,dx$: perché l'estremo interno è $x$ e non una costante, e quanto vale l'integrale?
[risposta] L'estremo interno dipende da $x$ perché la regione è il triangolo di tipo I $\{0\le x\le1,\ 0\le y\le x\}$: per ogni $x$ fissato, $y$ va da $0$ alla retta $y=x$. Calcolo: interno $\int_0^x xy\,dy=x\cdot\frac{y^2}{2}\big|_0^x=\frac{x^3}{2}$; esterno $\int_0^1\frac{x^3}{2}\,dx=\frac{1}{2}\cdot\frac14=\frac18$.
```

---

## 3. Dimostrazioni

### 3.1 L'integrale di Gauss $\displaystyle\int_{-\infty}^{+\infty}e^{-x^2}\,dx=\sqrt\pi$

**Affermazione.** $\displaystyle I:=\int_{-\infty}^{+\infty}e^{-x^2}\,dx=\sqrt{\pi}$.

Questo integrale non ha primitiva elementare (la funzione $e^{-x^2}$ non è integrabile in termini di funzioni elementari), quindi le tecniche 1D non bastano. Il trucco — uno dei più belli della matematica — è passare al **quadrato** e riconoscerlo come integrale doppio, poi usare le polari.

**Dimostrazione.** Consideriamo $I^2$. Poiché $I$ è un numero, possiamo scriverlo come prodotto di due copie con variabili d'integrazione diverse:
$$I^2=\left(\int_{-\infty}^{+\infty}e^{-x^2}dx\right)\!\left(\int_{-\infty}^{+\infty}e^{-y^2}dy\right).$$
Il secondo fattore non dipende da $x$: possiamo portarlo dentro il primo integrale (rispetto a $x$ è una costante), e viceversa. Per Fubini il prodotto dei due integrali semplici è l'integrale doppio del prodotto degli integrandi su tutto il piano:
$$I^2=\int_{-\infty}^{+\infty}\!\int_{-\infty}^{+\infty}e^{-x^2}e^{-y^2}\,dx\,dy=\iint_{\mathbb{R}^2}e^{-(x^2+y^2)}\,dx\,dy.$$
Ora la presenza di $x^2+y^2$ invita alle **coordinate polari**: $x^2+y^2=r^2$, $dx\,dy=r\,dr\,d\theta$, con $r$ da $0$ a $+\infty$ e $\theta$ da $0$ a $2\pi$ (tutto il piano):
$$I^2=\int_0^{2\pi}\!\int_0^{+\infty}e^{-r^2}\,r\,dr\,d\theta.$$
L'integrale radiale ora **ha** primitiva elementare, proprio grazie al fattore $r$ portato dalle polari: con la sostituzione $s=r^2$, $ds=2r\,dr$,
$$\int_0^{+\infty}e^{-r^2}r\,dr=\frac12\int_0^{+\infty}e^{-s}\,ds=\frac12\big[-e^{-s}\big]_0^{+\infty}=\frac12(0-(-1))=\frac12.$$
Quindi $I^2=\int_0^{2\pi}\frac12\,d\theta=\frac12\cdot2\pi=\pi$. Poiché $I>0$ (integrale di una funzione positiva), si conclude $I=\sqrt\pi$. $\blacksquare$

*Perché funziona.* La magia sta nel fattore $r$: l'integrale $\int e^{-x^2}dx$ è impossibile in 1D, ma $\int e^{-r^2}\,r\,dr$ è banale perché il $r$ è esattamente (a meno di $-\tfrac12$) la derivata dell'esponente. Le polari «regalano» quel fattore. Questo calcolo è la ragione per cui la costante di normalizzazione della **distribuzione normale** è $\frac{1}{\sqrt{2\pi}\,\sigma}$: senza $I=\sqrt\pi$ la campana di Gauss non avrebbe area totale $1$. È anche il ponte con la lez. 19: la gaussiana, priva di primitiva elementare, si integra su tutta la retta solo con questo argomento bidimensionale.

### 3.2 Il teorema del cambio di variabili (traccia e interpretazione)

<details class="dim-tecnica">
<summary>Perché compare il determinante Jacobiano: l'idea geometrica</summary>

Il cuore del teorema è locale e lineare. Vicino a un punto $(u_0,v_0)$, la trasformazione $T(u,v)=(x(u,v),y(u,v))$ si approssima con la sua parte lineare (differenziabilità, lez. 21): lo spostamento $(du,dv)$ viene mandato in
$$\begin{pmatrix}dx\\ dy\end{pmatrix}\approx \begin{pmatrix}x_u & x_v\\ y_u & y_v\end{pmatrix}\begin{pmatrix}du\\ dv\end{pmatrix}=DT\begin{pmatrix}du\\ dv\end{pmatrix},$$
dove $DT$ è la matrice Jacobiana delle derivate parziali. Un fatto di algebra lineare (che dimostreremo nel modulo di algebra lineare) è che una matrice $2\times2$ trasforma un quadratino unitario in un parallelogramma di area pari a $|\det DT|$. Quindi il rettangolino $du\,dv$ (area $du\,dv$) viene mandato in un parallelogramma di area $|\det DT|\,du\,dv=|J|\,du\,dv$.

Nella somma di Riemann che definisce l'integrale, ogni cella della griglia nel piano $uv$ contribuisce con «altezza $\times$ area della cella immagine»: $f(T(u,v))\cdot|J|\,du\,dv$. Passando al limite, le somme convergono a
$$\iint_{D^*} f(T(u,v))\,|J|\,du\,dv,$$
che eguaglia $\iint_D f\,dx\,dy$ perché entrambe approssimano lo stesso volume, calcolato una volta con la griglia in $xy$ e una volta con la griglia (deformata) immagine di quella in $uv$. Il valore assoluto su $J$ riflette che stiamo misurando aree (sempre positive): un $J<0$ segnala solo che $T$ inverte l'orientazione, senza cambiare l'area. La dimostrazione completa e rigorosa richiede il controllo uniforme dell'errore di linearizzazione su tutta la regione e appartiene a un corso di analisi avanzata; l'idea geometrica qui esposta è però esattamente ciò che «genera» il fattore Jacobiano.

</details>

### 3.3 L'elemento d'area polare $dx\,dy=r\,dr\,d\theta$

**Affermazione.** Il determinante Jacobiano della trasformazione polare $x=r\cos\theta$, $y=r\sin\theta$ vale $r$, quindi $dx\,dy=r\,dr\,d\theta$.

**Dimostrazione.** Calcoliamo le quattro derivate parziali:
$$x_r=\cos\theta,\quad x_\theta=-r\sin\theta,\quad y_r=\sin\theta,\quad y_\theta=r\cos\theta.$$
Il determinante Jacobiano è
$$J=\det\begin{pmatrix}x_r & x_\theta\\ y_r & y_\theta\end{pmatrix}=\det\begin{pmatrix}\cos\theta & -r\sin\theta\\ \sin\theta & r\cos\theta\end{pmatrix}=\cos\theta\cdot r\cos\theta-(-r\sin\theta)\cdot\sin\theta.$$
Sviluppando:
$$J=r\cos^2\theta+r\sin^2\theta=r(\cos^2\theta+\sin^2\theta)=r.$$
Poiché $r\ge0$, si ha $|J|=r$, dunque $dx\,dy=|J|\,dr\,d\theta=r\,dr\,d\theta$. $\blacksquare$

*Lettura geometrica.* Il risultato $J=r$ conferma il ragionamento del §2.4: l'elemento d'area cresce linearmente con la distanza dal centro, perché l'arco sotteso da un angolo $d\theta$ a distanza $r$ ha lunghezza $r\,d\theta$. Nell'origine ($r=0$) il Jacobiano si annulla: le coordinate polari sono singolari lì (l'angolo $\theta$ non è definito), ma essendo un solo punto non influisce sugli integrali.

---

## 4. Esempi

**Esempio 1 (integrale su rettangolo — introduttivo).** Calcolare $\displaystyle\iint_R (x+2y)\,dA$, $R=[0,2]\times[0,1]$.
*Svolgimento:* interno $\int_0^1(x+2y)\,dy=xy+y^2\big|_0^1=x+1$; esterno $\int_0^2(x+1)\,dx=\frac{x^2}{2}+x\big|_0^2=2+2=4$.

**Esempio 2 (regione triangolare, tipo I — introduttivo).** Calcolare $\displaystyle\iint_D x\,dA$ sul triangolo $D$ di vertici $(0,0),(1,0),(1,1)$.
*Strategia:* descrivere $D$ come tipo I: $0\le x\le1$, $0\le y\le x$.
*Svolgimento:* interno $\int_0^x x\,dy=x\cdot y\big|_0^x=x^2$; esterno $\int_0^1 x^2\,dx=\frac13$.

**Esempio 3 (scelta dell'ordine — intermedio).** Calcolare $\displaystyle\int_0^1\!\int_x^1 e^{y^2}\,dy\,dx$.
*Strategia:* l'ordine dato è impossibile ($e^{y^2}$ non ha primitiva elementare in $y$). **Invertire l'ordine**. La regione è $\{0\le x\le1,\ x\le y\le1\}$, cioè il triangolo $\{0\le y\le1,\ 0\le x\le y\}$ (tipo II).
*Svolgimento:* $\int_0^1\!\int_0^y e^{y^2}\,dx\,dy=\int_0^1 e^{y^2}\cdot x\big|_0^y\,dy=\int_0^1 y\,e^{y^2}\,dy=\frac12 e^{y^2}\big|_0^1=\frac{e-1}{2}$. Cambiare ordine ha trasformato un problema impossibile in uno immediato: è il vantaggio pratico di Fubini.

**Esempio 4 (polari, disco — intermedio).** Calcolare $\displaystyle\iint_D e^{-(x^2+y^2)}\,dA$ sul disco $x^2+y^2\le R^2$.
*Svolgimento:* in polari $\int_0^{2\pi}\!\int_0^R e^{-r^2}r\,dr\,d\theta=\int_0^{2\pi}\left[-\tfrac12 e^{-r^2}\right]_0^R d\theta=\int_0^{2\pi}\tfrac12(1-e^{-R^2})\,d\theta=\pi(1-e^{-R^2})$. (Per $R\to\infty$ tende a $\pi$: coerente con $I^2=\pi$ di §3.1.)

**Esempio 5 (area tra curve — intermedio/avanzato).** Trovare l'area della regione racchiusa tra $y=x^2$ e $y=\sqrt{x}$ con l'integrale doppio.
*Svolgimento:* le curve si incrociano in $x=0$ e $x=1$, con $\sqrt x\ge x^2$ in $[0,1]$. Regione tipo I: $0\le x\le1$, $x^2\le y\le\sqrt x$. Area $=\int_0^1\!\int_{x^2}^{\sqrt x}1\,dy\,dx=\int_0^1(\sqrt x-x^2)\,dx=\frac{2}{3}-\frac13=\frac13$.

**Esempio 6 (volume — avanzato).** Volume del solido sotto il paraboloide $z=4-x^2-y^2$ e sopra il piano $z=0$.
*Strategia:* la base è dove $z\ge0$, cioè $x^2+y^2\le4$ (disco di raggio $2$); integrare l'altezza $z$ in polari.
*Svolgimento:* $V=\iint_{x^2+y^2\le4}(4-x^2-y^2)\,dA=\int_0^{2\pi}\!\int_0^2(4-r^2)r\,dr\,d\theta=\int_0^{2\pi}\left[2r^2-\tfrac{r^4}{4}\right]_0^2 d\theta=\int_0^{2\pi}(8-4)\,d\theta=8\pi$.

**Esempio 7 (integrale triplo — avanzato).** Calcolare $\displaystyle\iiint_E z\,dV$ su $E=[0,1]\times[0,1]\times[0,2]$.
*Svolgimento:* fattorizzabile perché l'integrando dipende solo da $z$ e la regione è un mattone: $\left(\int_0^1 dx\right)\!\left(\int_0^1 dy\right)\!\left(\int_0^2 z\,dz\right)=1\cdot1\cdot\frac{z^2}{2}\big|_0^2=2$.

**Esempio 8 (applicativo probabilistico).** Siano $X,Y$ variabili aleatorie con densità congiunta $f(x,y)=c\,e^{-(x^2+y^2)/2}$ su $\mathbb{R}^2$. Trovare la costante $c$ affinché $f$ sia una densità (integrale totale $1$).
*Strategia:* imporre $\iint_{\mathbb{R}^2}f=1$ e usare le polari (o l'integrale di Gauss).
*Svolgimento:* $\iint_{\mathbb{R}^2}e^{-(x^2+y^2)/2}\,dA=\int_0^{2\pi}\!\int_0^\infty e^{-r^2/2}r\,dr\,d\theta=\int_0^{2\pi}\left[-e^{-r^2/2}\right]_0^\infty d\theta=\int_0^{2\pi}1\,d\theta=2\pi$. Quindi $c\cdot2\pi=1\Rightarrow c=\frac{1}{2\pi}$. Questa è esattamente la densità della **normale bivariata standard** con componenti indipendenti: la costante $\frac{1}{2\pi}$ nasce dall'integrale di Gauss applicato in due dimensioni.

---

## 5. Collegamenti e riepilogo

**Chiusura del modulo.** L'integrale multiplo completa il calcolo in più variabili: dopo derivate parziali (lez. 20), gradiente e differenziabilità (lez. 21) e ottimizzazione, l'integrazione estende a $\mathbb{R}^n$ l'idea di «sommare in modo continuo». Il teorema di Fubini è il ponte con tutto il modulo precedente (2.2–2.3): riduce ogni integrale multiplo a integrali ordinari, che si calcolano con le tecniche già note. Il cambio di variabili con lo Jacobiano è l'erede diretto della sostituzione 1D, con il determinante al posto della derivata.

**Collegamenti trasversali.** In **probabilità e statistica**, gli integrali doppi calcolano densità congiunte, valori attesi, covarianze; l'integrale di Gauss è la ragione per cui la normale è normalizzabile, e la normale bivariata (Esempio 8) è il modello di base per due variabili correlate. In **fisica** danno massa, baricentro, momenti d'inerzia, campi. In **economia** compaiono nel calcolo di surplus aggregati e in modelli con distribuzioni continue di agenti. Le coordinate polari/sferiche e il loro Jacobiano riappaiono ogni volta che c'è simmetria radiale. Il calcolo di aree e volumi via $\iint 1\,dA$ collega l'integrale alla misura delle regioni.

**Idee da portare via.**
- L'integrale doppio $\iint_D f\,dA$ è un volume (con segno); $\iint_D 1\,dA$ è l'area di $D$.
- **Fubini:** si integra una variabile alla volta, congelando l'altra; l'ordine è libero e va scelto per semplificare. Per regioni non rettangolari gli estremi interni dipendono dalla variabile esterna (tipo I/II).
- **Cambio di variabili:** $dx\,dy=|J|\,du\,dv$, con $J$ determinante Jacobiano = fattore locale di dilatazione dell'area.
- **Polari:** $dx\,dy=r\,dr\,d\theta$ — non dimenticare mai il fattore $r$; indispensabili con $x^2+y^2$ e regioni circolari.
- **Integrale di Gauss:** $\int_{-\infty}^{+\infty}e^{-x^2}dx=\sqrt\pi$, dimostrato passando al quadrato e alle polari.

**Formule chiave.**
$$\iint_D f\,dA=\int_a^b\!\int_{g_1(x)}^{g_2(x)}\!f\,dy\,dx,\qquad dx\,dy=r\,dr\,d\theta,\qquad \int_{-\infty}^{+\infty}e^{-x^2}dx=\sqrt\pi.$$

---

## 6. Esercizi

**Introduttivi.**

**E1.** Calcola $\displaystyle\iint_R (2x+3y)\,dA$ su $R=[0,1]\times[0,2]$.

<details class="dim-tecnica"><summary>Soluzione E1</summary>

Interno $\int_0^2(2x+3y)\,dy=2xy+\frac{3y^2}{2}\big|_0^2=4x+6$; esterno $\int_0^1(4x+6)\,dx=2+6=8$.

</details>

**E2.** Calcola $\displaystyle\iint_D 1\,dA$ sul triangolo $0\le x\le1$, $0\le y\le 2x$ e verifica che è l'area.

<details class="dim-tecnica"><summary>Soluzione E2</summary>

$\int_0^1\!\int_0^{2x}1\,dy\,dx=\int_0^1 2x\,dx=1$. Il triangolo ha vertici $(0,0),(1,0),(1,2)$: base $1$, altezza $2$, area $\frac{1\cdot2}{2}=1$ ✓.

</details>

**E3.** Calcola l'area del disco $x^2+y^2\le 9$ con un integrale doppio in polari.

<details class="dim-tecnica"><summary>Soluzione E3</summary>

$\int_0^{2\pi}\!\int_0^3 r\,dr\,d\theta=\int_0^{2\pi}\frac{9}{2}\,d\theta=9\pi$. (Il fattore $r$ dà $\pi a^2$ con $a=3$.)

</details>

**Standard.**

**E4.** Calcola $\displaystyle\int_0^1\!\int_{\sqrt y}^1 \sin(x^3)\,dx\,dy$ invertendo l'ordine.

<details class="dim-tecnica"><summary>Soluzione E4</summary>

Regione: $0\le y\le1$, $\sqrt y\le x\le1$, cioè $0\le x\le1$, $0\le y\le x^2$. $\int_0^1\!\int_0^{x^2}\sin(x^3)\,dy\,dx=\int_0^1 x^2\sin(x^3)\,dx=-\frac13\cos(x^3)\big|_0^1=\frac{1-\cos1}{3}$.

</details>

**E5.** Trova il volume sotto $z=xy$ sopra il rettangolo $[0,2]\times[0,3]$.

<details class="dim-tecnica"><summary>Soluzione E5</summary>

$\int_0^2\!\int_0^3 xy\,dy\,dx=\int_0^2 x\cdot\frac{9}{2}\,dx=\frac92\cdot2=9$.

</details>

**E6.** Con le polari calcola $\displaystyle\iint_D (x^2+y^2)^{3/2}\,dA$ sul disco $x^2+y^2\le1$.

<details class="dim-tecnica"><summary>Soluzione E6</summary>

$(x^2+y^2)^{3/2}=r^3$. $\int_0^{2\pi}\!\int_0^1 r^3\cdot r\,dr\,d\theta=\int_0^{2\pi}\!\int_0^1 r^4\,dr\,d\theta=\int_0^{2\pi}\frac15\,d\theta=\frac{2\pi}{5}$.

</details>

**Avanzati / applicativi.**

**E7.** Usa l'integrale di Gauss per calcolare $\displaystyle\int_{-\infty}^{+\infty}e^{-a x^2}\,dx$ con $a>0$.

<details class="dim-tecnica"><summary>Soluzione E7</summary>

Sostituzione $u=\sqrt a\,x$, $du=\sqrt a\,dx$: $\int_{-\infty}^{+\infty}e^{-ax^2}dx=\frac{1}{\sqrt a}\int_{-\infty}^{+\infty}e^{-u^2}du=\frac{\sqrt\pi}{\sqrt a}=\sqrt{\frac{\pi}{a}}$. (Con $a=\frac{1}{2\sigma^2}$ si ottiene $\sqrt{2\pi}\,\sigma$, la costante di normalizzazione della normale.)

</details>

**E8.** Calcola il volume della sfera $x^2+y^2+z^2\le a^2$ con un integrale triplo in coordinate sferiche.

<details class="dim-tecnica"><summary>Soluzione E8</summary>

$V=\int_0^{2\pi}\!\int_0^\pi\!\int_0^a \rho^2\sin\varphi\,d\rho\,d\varphi\,d\theta=\left(\int_0^a\rho^2d\rho\right)\!\left(\int_0^\pi\sin\varphi\,d\varphi\right)\!\left(\int_0^{2\pi}d\theta\right)=\frac{a^3}{3}\cdot2\cdot2\pi=\frac43\pi a^3$.

</details>

**E9.** Per la densità normale bivariata $f(x,y)=\frac{1}{2\pi}e^{-(x^2+y^2)/2}$, calcola $P(X^2+Y^2\le 1)$ (probabilità di cadere nel disco unitario).

<details class="dim-tecnica"><summary>Soluzione E9</summary>

$P=\frac{1}{2\pi}\iint_{x^2+y^2\le1}e^{-(x^2+y^2)/2}\,dA=\frac{1}{2\pi}\int_0^{2\pi}\!\int_0^1 e^{-r^2/2}r\,dr\,d\theta=\frac{1}{2\pi}\cdot2\pi\left[-e^{-r^2/2}\right]_0^1=1-e^{-1/2}\approx0.393$. (Circa il $39\%$ della massa di una normale bivariata standard cade entro un raggio $1$.)

</details>

**E10.** Calcola $\displaystyle\iint_D \frac{1}{(1+x^2+y^2)^2}\,dA$ su tutto $\mathbb{R}^2$ con le polari.

<details class="dim-tecnica"><summary>Soluzione E10</summary>

$\int_0^{2\pi}\!\int_0^\infty \frac{r}{(1+r^2)^2}\,dr\,d\theta$. Con $s=1+r^2$, $ds=2r\,dr$: $\int_0^\infty\frac{r}{(1+r^2)^2}dr=\frac12\int_1^\infty s^{-2}ds=\frac12\left[-s^{-1}\right]_1^\infty=\frac12$. Quindi il totale è $\int_0^{2\pi}\frac12\,d\theta=\pi$.

</details>
