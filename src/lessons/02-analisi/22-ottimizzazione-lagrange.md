---
id: analisi-22-ottimizzazione-lagrange
titolo: "Ottimizzazione libera e vincolata — moltiplicatori di Lagrange"
materia: analisi
argomento: "Analisi multivariata"
modulo: "Ottimizzazione in più variabili"
livello: universitario
slug: analisi-22-ottimizzazione-lagrange

# legacy
subject: analisi
topic_it: Analisi multivariata
topic_en: Multivariable analysis
title_it: "Ottimizzazione libera e vincolata — moltiplicatori di Lagrange"
title_en: "Free and constrained optimization — Lagrange multipliers"
level: blue
order: 22

prerequisiti:
  - analisi-20-funzioni-piu-variabili
  - analisi-21-gradiente-differenziabilita
  - algebra-14-forme-quadratiche
  - analisi-10-taylor

collegamenti:
  - analisi-04-continuita
  - analisi-08-teoremi-differenziale
  - analisi-09-studio-funzione
  - analisi-23-integrali-multipli

fonti_integrate:
  - id_fonte: villanacci-math2
    ruolo: primaria
    sezioni_coperte: "Prop. 848 (gradiente nullo in un estremo interno); Def. 825 (matrice Hessiana); §18.6 (gradiente ortogonale alle curve di livello, via funzione implicita); §18.5 (teorema della funzione implicita, solo come enunciato); §18.7 Def. 908 (soluzione del problema vincolato) e Thm 909 (teorema di Lagrange con la condizione di rango, dimostrato con la funzione implicita); §21.1 Def. 979 (condizioni di Kuhn-Tucker); §21.2 Thm 992 e Rem. 993 (la condizione di rango non si può togliere); §21.4 (passi risolutivi, esistenza con il teorema di Weierstrass); §21.6 Thm 1001, Prop. 1003 e Rem. 1005 (inviluppo e significato dei moltiplicatori); §22.1 (problema del consumatore, moltiplicatore come utilità marginale del reddito)"
    note: "appunti-prof, priorità su notazione e convenzioni d'esame. Gli appunti NON trattano il test locale del second'ordine con la definitezza dell'Hessiana (classificano con la concavità: Prop. 936, 937, 941 e Thm 975): l'enunciato viene da austin-ula e la dimostrazione è scritta qui. Convenzione degli appunti: lagrangiana f + λg con vincolo g(x) = 0 (o g(x) ≥ 0); confronto dei segni in Teoria. Nella Rem. 993 il testo dice «does have full rank» dove la jacobiana nel punto ha rango 1 (refuso)"
  - id_fonte: austin-ula
    ruolo: minore
    sezioni_coperte: "§7.2: Prop. 7.2.13 (test delle derivate seconde con gli autovalori dell'Hessiana e versione 2×2 con determinante e f_xx), con la giustificazione intuitiva tramite l'approssimazione quadratica"
    note: "fonte dell'enunciato del test del second'ordine; la dimostrazione con il resto di Lagrange e la maggiorazione delle derivate seconde è scritta qui"

contratto: "3.0"
profondita: essenziale
tipo: tecnica
versione: "1.0"
data_ultima_rielaborazione: "2026-10-06"
stato: completa
componenti_usati:
  - checkpoint
  - slider
---

## Intuizione

Cerchi il punto più alto di un terreno, libero di muoverti ovunque. In cima il terreno è piatto: nessuna direzione fa salire. Nel linguaggio della lezione [Gradiente, differenziabilità e piano tangente](/analisi/analisi-multivariata/21-gradiente-differenziabilita) ogni derivata direzionale $\nabla f\cdot\mathbf{u}$ è nulla, quindi $\nabla f=\mathbf{0}$.

Ma «piatto» non vuol dire «cima». Anche il fondo di una conca è piatto, e lo è il passo di montagna, che sale in una direzione e scende nell'altra (una **sella**). Per distinguere i tre casi si guarda la curvatura, cioè le derivate seconde: vicino a un punto piatto la funzione si comporta come la forma quadratica della sua Hessiana, e la lezione [Matrici simmetriche e forme quadratiche](/algebra-lineare/autovalori-e-diagonalizzazione/14-forme-quadratiche) di algebra lineare insegna a leggerne il segno.

Ora devi restare su un sentiero: il **vincolo** $g(\mathbf{x})=c$, per esempio il bilancio di un consumatore. Il punto più alto *del sentiero* in genere non è una cima del terreno: lì il terreno sale ancora, ma in una direzione che ti farebbe uscire dal sentiero.

Disegna sulla mappa le curve di livello di $f$. Camminando sul sentiero attraversi livelli sempre più alti, fino al livello più alto che il sentiero riesce a raggiungere. Lì il sentiero non taglia più la curva di livello: la sfiora. Le due curve sono **tangenti**.

Due curve tangenti hanno la stessa direzione normale, e le normali sono i gradienti: $\nabla f$ è perpendicolare alle curve di livello di $f$, $\nabla g$ al sentiero. Quindi nell'ottimo vincolato i due gradienti sono paralleli:

$$
\nabla f=\lambda\,\nabla g .
$$

Il numero $\lambda$ è il **moltiplicatore di Lagrange**. Ha anche un significato economico preciso: dice di quanto cambia il valore ottimo se la risorsa $c$ aumenta di un'unità. È il **prezzo ombra** della risorsa.

## Teoria

**Simboli.** Si usa la notazione delle lezioni 20 e 21 e della lezione 14 di algebra lineare: $f_x$, $f_{xy}$ per le derivate parziali, $\nabla f$ per il gradiente, $H_f(\mathbf{x}_0)$ per l'Hessiana, punti di $\mathbb{R}^n$ in grassetto. Gli appunti scrivono $Df$ e $D^2f$, e la lagrangiana come $f+\lambda g$ con il vincolo nella forma $g(\mathbf{x})=0$. Qui la lagrangiana è $\mathcal{L}=f-\lambda\,(g-c)$. Se negli appunti il vincolo è scritto $c-g(\mathbf{x})=0$ (per esempio $w-\mathbf{p}\cdot\mathbf{x}=0$, §22.1), i due $\lambda$ coincidono; se è scritto $g(\mathbf{x})-c=0$, hanno segno opposto.

**Estremi.** Sia $f:A\to\mathbb{R}$ con $A\subseteq\mathbb{R}^n$. Il punto $\mathbf{x}_0\in A$ è di **minimo locale** se esiste $r>0$ tale che $f(\mathbf{x})\ge f(\mathbf{x}_0)$ per ogni $\mathbf{x}\in A$ con $\|\mathbf{x}-\mathbf{x}_0\|<r$. È **stretto** se la disuguaglianza è stretta per $\mathbf{x}\ne\mathbf{x}_0$, **globale** se vale per ogni $\mathbf{x}\in A$. Per il massimo si scrive $\le$. Un punto interno con $\nabla f(\mathbf{x}_0)=\mathbf{0}$ è un **punto critico** (o stazionario).

**Condizione del prim'ordine.** Se $\mathbf{x}_0$ è interno ad $A$, è un estremo locale di $f$ e le derivate parziali esistono in $\mathbf{x}_0$, allora

$$
\nabla f(\mathbf{x}_0)=\mathbf{0}.
$$

In un estremo interno tutte le pendenze lungo gli assi sono nulle (appunti Prop. 848). *Perché:* la funzione di una variabile $t\mapsto f(\mathbf{x}_0+t\mathbf{e}_i)$ ha un estremo locale in $t=0$, e la sua derivata in $0$ è $f_{x_i}(\mathbf{x}_0)$ ([Funzioni di più variabili e derivate parziali](/analisi/analisi-multivariata/20-funzioni-piu-variabili)); per il teorema di Fermat ([Teoremi del calcolo differenziale (Rolle, Lagrange, de l'Hôpital)](/analisi/calcolo-differenziale-una-variabile/08-teoremi-differenziale)) quella derivata è nulla.

> **Attenzione.** La condizione è solo necessaria: $f(x,y)=xy$ ha $\nabla f(0,0)=\mathbf{0}$, ma nell'origine ha una sella. E vale solo nei punti *interni*: sul bordo del dominio un estremo può avere gradiente non nullo.

**Test del second'ordine.** Sia $f$ di classe $C^2$ in una palla centrata nel punto critico $\mathbf{x}_0$. L'Hessiana $H_f(\mathbf{x}_0)$ è simmetrica, quindi ha autovalori reali $\lambda_1,\dots,\lambda_n$ ([Matrici simmetriche e forme quadratiche](/algebra-lineare/autovalori-e-diagonalizzazione/14-forme-quadratiche)). Allora:

- tutti gli autovalori $>0$ ($H$ definita positiva) ⇒ $\mathbf{x}_0$ è un **minimo locale stretto**;
- tutti $<0$ ($H$ definita negativa) ⇒ **massimo locale stretto**;
- almeno uno $>0$ e almeno uno $<0$ ($H$ indefinita) ⇒ **punto di sella**: in ogni intorno $f$ prende valori sia maggiori sia minori di $f(\mathbf{x}_0)$.

Per $n=2$ bastano i minori $D_1=f_{xx}$ e $D_2=\det H$ (algebra 14): $\det H>0$ e $f_{xx}>0$ danno un minimo, $\det H>0$ e $f_{xx}<0$ un massimo, $\det H<0$ una sella. Per $n$ qualunque si può usare il criterio di Sylvester sui minori principali di testa $D_1,\dots,D_n$ (algebra 14): tutti $>0$, minimo; segni alterni a partire da $D_1<0$, massimo.

**Il caso dubbio.** Se $H$ è semidefinita ma non definita (autovalori tutti $\ge0$ o tutti $\le0$, almeno uno nullo), il test non decide. $f=x^2+y^4$ e $k=x^2-y^4$ hanno nell'origine la stessa Hessiana $\left(\begin{smallmatrix}2&0\\0&0\end{smallmatrix}\right)$. La prima ha un minimo; la seconda una sella, perché $k(0,t)=-t^4<0<k(t,0)$. Lungo l'autovettore dell'autovalore nullo contano i termini di ordine superiore; per provare un estremo, però, non basta una sola direzione e nemmeno il controllo lungo ogni retta per il punto (il controesempio di Peano è nell'Approfondimento). Resta una condizione necessaria, dimostrata nell'Approfondimento: in un minimo locale $H_f(\mathbf{x}_0)$ è semidefinita positiva, in un massimo semidefinita negativa.

**Perché il test funziona.** Sia $H_f(\mathbf{x}_0)$ definita positiva, con autovalore minimo $\lambda_{\min}>0$. Sia $r$ il raggio della palla in cui $f$ è $C^2$. Fissato $\mathbf{h}$ con $\|\mathbf{h}\|<r$ (così il segmento da $\mathbf{x}_0$ a $\mathbf{x}_0+\mathbf{h}$ sta nella palla), sia $\varphi(t)=f(\mathbf{x}_0+t\mathbf{h})$. La regola della catena (lezione 21), applicata due volte, dà $\varphi'(t)=\nabla f(\mathbf{x}_0+t\mathbf{h})\cdot\mathbf{h}$ e $\varphi''(t)=\sum_{i,j}f_{x_ix_j}(\mathbf{x}_0+t\mathbf{h})\,h_ih_j=\mathbf{h}^TH_f(\mathbf{x}_0+t\mathbf{h})\,\mathbf{h}$. La formula di Taylor con resto di Lagrange in una variabile ([Polinomio di Taylor, sviluppi di MacLaurin e formula del resto](/analisi/calcolo-differenziale-una-variabile/10-taylor)), con $\varphi'(0)=\nabla f(\mathbf{x}_0)\cdot\mathbf{h}=0$, dà per qualche $\tau\in(0,1)$

$$
f(\mathbf{x}_0+\mathbf{h})=f(\mathbf{x}_0)+\tfrac12\,\mathbf{h}^TH_f(\mathbf{y})\,\mathbf{h},\qquad \mathbf{y}=\mathbf{x}_0+\tau\mathbf{h}.
$$

Si scrive $H_f(\mathbf{y})=H_f(\mathbf{x}_0)+\big(H_f(\mathbf{y})-H_f(\mathbf{x}_0)\big)$ e si stimano i due pezzi.

- *Primo pezzo.* $\mathbf{h}^TH_f(\mathbf{x}_0)\mathbf{h}\ge\lambda_{\min}\|\mathbf{h}\|^2$ (algebra 14).
- *Secondo pezzo: la maggiorazione.* Per una matrice $M$ vale $\mathbf{h}^TM\mathbf{h}=\sum_{i,j}m_{ij}h_ih_j$, e $|h_ih_j|\le\|\mathbf{h}\|^2$ perché ogni componente è al più la norma. Quindi

$$
\big|\mathbf{h}^T\big(H_f(\mathbf{y})-H_f(\mathbf{x}_0)\big)\mathbf{h}\big|\le S(\mathbf{y})\,\|\mathbf{h}\|^2,\qquad S(\mathbf{y})=\sum_{i,j}\big|f_{x_ix_j}(\mathbf{y})-f_{x_ix_j}(\mathbf{x}_0)\big|.
$$

- *Continuità.* Le derivate seconde sono continue, quindi $S(\mathbf{y})\to0$ per $\mathbf{y}\to\mathbf{x}_0$: esiste $\delta$ con $0<\delta\le r$ e $S(\mathbf{y})<\lambda_{\min}$ quando $\|\mathbf{y}-\mathbf{x}_0\|<\delta$.

Se $0<\|\mathbf{h}\|<\delta$, anche $\|\mathbf{y}-\mathbf{x}_0\|=\tau\|\mathbf{h}\|<\delta$, quindi $\mathbf{h}^TH_f(\mathbf{y})\mathbf{h}\ge\big(\lambda_{\min}-S(\mathbf{y})\big)\|\mathbf{h}\|^2>0$ e $f(\mathbf{x}_0+\mathbf{h})>f(\mathbf{x}_0)$: minimo locale stretto. Per il massimo si applica l'argomento a $-f$. Per la sella si ripete il conto con $\mathbf{h}=t\mathbf{v}$, dove $\mathbf{v}$ è un autovettore di un autovalore $\lambda>0$ (al posto di $\lambda_{\min}$ si usa $\lambda$, perché $\mathbf{v}^TH_f(\mathbf{x}_0)\mathbf{v}=\lambda\|\mathbf{v}\|^2$): $f$ sale lungo $\mathbf{v}$ per $t\ne0$ piccolo, e scende lungo un autovettore di un autovalore negativo.

```checkpoint
[domanda]
In un punto critico $H_f=\left(\begin{smallmatrix}2&3\\3&2\end{smallmatrix}\right)$. Poiché $f_{xx}=2>0$, è un minimo?

[risposta]
No. $\det H=4-9=-5<0$: $H$ è indefinita (autovalori $5$ e $-1$), quindi il punto è una sella. Il segno di $f_{xx}$ conta solo quando $\det H>0$.
```

**Esistenza: il teorema di Weierstrass.** Una funzione continua su un insieme non vuoto, chiuso e limitato di $\mathbb{R}^n$ ha massimo e minimo globali (appunti §21.4, passo 3; il caso di una variabile è in [Continuità e teoremi fondamentali](/analisi/limiti-e-continuita/04-continuita)). Questo autorizza la strategia «trova i candidati e confronta i valori»: se il massimo esiste, è tra i candidati. Su un insieme non limitato può mancare: $f=x+y$ sulla retta $y=x$ non ha né massimo né minimo.

**Ottimizzazione vincolata.** Si cerca il massimo (o il minimo) di $f(\mathbf{x})$ fra i punti che soddisfano $g(\mathbf{x})=c$, con $f$ e $g$ di classe $C^1$ su un aperto $A\subseteq\mathbb{R}^n$. Un **estremo locale vincolato** è un punto che si confronta solo con i punti vicini *del vincolo*.

**Teorema di Lagrange (un vincolo).** Se $\mathbf{x}_0$ è un estremo locale di $f$ sul vincolo $g=c$ e $\nabla g(\mathbf{x}_0)\ne\mathbf{0}$, esiste un unico $\lambda\in\mathbb{R}$ tale che

$$
\nabla f(\mathbf{x}_0)=\lambda\,\nabla g(\mathbf{x}_0),\qquad g(\mathbf{x}_0)=c.
$$

Si legge: nell'ottimo vincolato il gradiente dell'obiettivo è un multiplo del gradiente del vincolo. $\lambda$ è il moltiplicatore di Lagrange. L'ipotesi $\nabla g(\mathbf{x}_0)\ne\mathbf{0}$ è la **qualificazione del vincolo**: negli appunti (Thm 909, Thm 992) è la condizione di rango pieno della jacobiana dei vincoli, che con un solo vincolo significa $\nabla g\ne\mathbf{0}$. Il moltiplicatore è unico perché, moltiplicando scalarmente per $\nabla g$, vale $\lambda=\nabla f\cdot\nabla g/\|\nabla g\|^2$.

*Geometria.* Se $\nabla f$ non fosse parallelo a $\nabla g$, avrebbe una componente tangente al vincolo: muovendosi sul vincolo in quel verso $f$ crescerebbe, nel verso opposto calerebbe, e il punto non sarebbe un estremo. La dimostrazione per $n=2$ è nella sezione Dimostrazioni.

**La lagrangiana.** Con $\mathcal{L}(\mathbf{x},\lambda)=f(\mathbf{x})-\lambda\big(g(\mathbf{x})-c\big)$ le condizioni diventano $\nabla_{\mathbf{x}}\mathcal{L}=\mathbf{0}$ e $\partial\mathcal{L}/\partial\lambda=0$: un sistema di $n+1$ equazioni nelle $n+1$ incognite $(\mathbf{x},\lambda)$. Il punto trovato è critico per $\mathcal{L}$, ma in genere non ne è un estremo: se sia massimo o minimo si decide guardando $f$ sul vincolo.

> **Attenzione (qualificazione).** Si minimizzi $f(x,y)=x$ sulla cuspide $g(x,y)=y^2-x^3=0$. Sul vincolo $x=y^{2/3}\ge0$, quindi il minimo vale $0$ ed è nell'origine. Lì però $\nabla g=(-3x^2,2y)=(0,0)$, e $\nabla f=(1,0)$ non è multiplo del vettore nullo. Il sistema $1=-3\lambda x^2$, $0=2\lambda y$, $y^2=x^3$ non ha soluzioni: la seconda equazione dà $\lambda=0$, impossibile per la prima, oppure $y=0$, quindi $x=0$ e di nuovo $1=0$. I punti del vincolo con $\nabla g=\mathbf{0}$ vanno sempre esaminati a parte (negli appunti, Rem. 993 mostra lo stesso fenomeno con due vincoli).

**Il moltiplicatore come prezzo ombra.** Sia $v(c)$ il valore ottimo con vincolo $g=c$, raggiunto in $\mathbf{x}^*(c)$ con moltiplicatore $\lambda(c)$, e si supponga che $\mathbf{x}^*$ dipenda da $c$ in modo derivabile (in condizioni regolari è garantito, appunti §21.6). Allora

$$
v'(c)=\lambda(c).
$$

*Perché:* $v(c)=f(\mathbf{x}^*(c))$. Per la regola della catena e per la condizione di Lagrange, $v'(c)=\nabla f(\mathbf{x}^*)\cdot\mathbf{x}^{*\prime}(c)=\lambda\,\nabla g(\mathbf{x}^*)\cdot\mathbf{x}^{*\prime}(c)$. L'ultimo prodotto scalare è la derivata di $c\mapsto g(\mathbf{x}^*(c))$, che vale identicamente $c$: quindi è $1$.

Si legge: $\lambda$ misura di quanto cambia l'ottimo per un'unità in più di risorsa, $v(c+1)-v(c)\approx\lambda$. Nel problema del consumatore, con $c$ il reddito, $\lambda$ è l'**utilità marginale del reddito** (appunti §22.1). Nella minimizzazione del costo con un vincolo di produzione, è il **costo marginale**.

> **Attenzione.** $\lambda$ dipende da come è scritto il vincolo. $\sqrt{KL}=4$ e $KL=16$ descrivono lo stesso insieme, ma il primo $\lambda$ misura la sensibilità rispetto alla quantità prodotta, il secondo rispetto al suo quadrato (Esercizio 4).

```checkpoint
[domanda]
Un consumatore ha reddito $w=100$ e all'ottimo il moltiplicatore vale $\lambda=3$. Senza risolvere nulla: di quanto cambia, circa, l'utilità massima se il reddito passa a $101$? E a $98$?

[risposta]
Per $v'(w)=\lambda$: circa $+3$ con $w=101$ e circa $-2\cdot3=-6$ con $w=98$. Sono stime al prim'ordine, buone per variazioni piccole, perché anche $\lambda$ cambia con $w$.
```

**Cenno: vincoli di disuguaglianza (Karush-Kuhn-Tucker).** Per massimizzare $f$ con il vincolo $g(\mathbf{x})\le c$ (e $\nabla g\ne\mathbf{0}$ nel punto, se il vincolo è attivo) le condizioni diventano $\nabla f(\mathbf{x}_0)=\mu\,\nabla g(\mathbf{x}_0)$, $\mu\ge0$, $g(\mathbf{x}_0)\le c$, $\mu\,\big(g(\mathbf{x}_0)-c\big)=0$. È la forma degli appunti (Def. 979) con il vincolo scritto $c-g(\mathbf{x})\ge0$. L'ultima condizione, la **complementarità**, dice che o il vincolo è **attivo** ($g=c$) o $\mu=0$: un vincolo non attivo non conta vicino al punto, che è un punto critico libero (negli appunti la Prop. 1003 ne dà la versione globale, sotto ipotesi di quasi-concavità). Il segno $\mu\ge0$ dice che, quando $\mu>0$, nel massimo $\nabla f$ punta fuori dalla regione ammessa: per salire bisognerebbe violare il vincolo. Teoria completa, qualificazioni e condizioni sufficienti sono nell'Approfondimento.

## Dimostrazioni

**Teorema di Lagrange, caso $n=2$.** *Ipotesi:* $f,g$ di classe $C^1$ su un aperto $A\subseteq\mathbb{R}^2$; $\mathbf{x}_0=(x_0,y_0)$ è un estremo locale di $f$ sul vincolo $\{g=c\}$; $\nabla g(\mathbf{x}_0)\ne\mathbf{0}$. *Tesi:* esiste $\lambda$ con $\nabla f(\mathbf{x}_0)=\lambda\nabla g(\mathbf{x}_0)$.

*Passo 1 — vicino a $\mathbf{x}_0$ il vincolo è una curva liscia.* Poiché $\nabla g(\mathbf{x}_0)\ne\mathbf{0}$, almeno una derivata parziale è non nulla; sia $g_y(\mathbf{x}_0)\ne0$ (se è $g_x$, si scambiano i ruoli di $x$ e $y$). Si usa senza dimostrazione il **teorema della funzione implicita** (appunti §18.5): esistono un intervallo aperto $I\ni x_0$, un intorno $U$ di $\mathbf{x}_0$ e una funzione $\phi:I\to\mathbb{R}$ di classe $C^1$, con $\phi(x_0)=y_0$, tali che i punti del vincolo in $U$ sono esattamente i punti $(x,\phi(x))$ con $x\in I$. La curva $\mathbf{r}(t)=\big(x_0+t,\ \phi(x_0+t)\big)$ percorre quindi il vincolo, passa per $\mathbf{x}_0$ in $t=0$ e ha velocità $\mathbf{r}'(0)=\big(1,\phi'(x_0)\big)\ne\mathbf{0}$.

*Passo 2 — $\nabla f(\mathbf{x}_0)$ è ortogonale a $\mathbf{r}'(0)$.* La funzione di una variabile $h(t)=f(\mathbf{r}(t))$ ha un estremo locale in $t=0$. Infatti $\mathbf{r}$ è continua, quindi per $t$ piccolo $\mathbf{r}(t)$ è un punto del vincolo vicino a $\mathbf{x}_0$, e su questi punti $f$ non supera $f(\mathbf{x}_0)$ (o non scende sotto, per un minimo). Per il teorema di Fermat $h'(0)=0$; per la regola della catena $h'(0)=\nabla f(\mathbf{x}_0)\cdot\mathbf{r}'(0)$. Quindi $\nabla f(\mathbf{x}_0)\cdot\mathbf{r}'(0)=0$.

*Passo 3 — anche $\nabla g(\mathbf{x}_0)$ è ortogonale a $\mathbf{r}'(0)$.* Per $t$ vicino a $0$ vale $g(\mathbf{r}(t))=c$: la funzione è costante, quindi ha derivata nulla, e per la regola della catena $\nabla g(\mathbf{x}_0)\cdot\mathbf{r}'(0)=0$. È l'ortogonalità tra gradiente e curve di livello della lezione 21.

*Passo 4 — due vettori del piano ortogonali allo stesso vettore non nullo sono paralleli.* Sia $\mathbf{r}'(0)=(a,b)\ne\mathbf{0}$. Ogni $(u,v)$ con $au+bv=0$ è multiplo di $(-b,a)$: se $a\ne0$, allora $u=-bv/a$ e $(u,v)=\tfrac va(-b,a)$; se $a=0$, allora $b\ne0$, quindi $v=0$ e $(u,v)=-\tfrac ub(-b,a)$. Dai passi 2 e 3, $\nabla f(\mathbf{x}_0)=\alpha(-b,a)$ e $\nabla g(\mathbf{x}_0)=\beta(-b,a)$ per qualche $\alpha,\beta$, con $\beta\ne0$ perché $\nabla g(\mathbf{x}_0)\ne\mathbf{0}$. Allora $\nabla f(\mathbf{x}_0)=\tfrac\alpha\beta\,\nabla g(\mathbf{x}_0)$: è la tesi con $\lambda=\alpha/\beta$. $\blacksquare$

*Dove serve l'ipotesi.* $\nabla g(\mathbf{x}_0)\ne\mathbf{0}$ entra nel passo 1 (senza, il vincolo può non essere una curva liscia: la cuspide della Teoria) e nel passo 4 (garantisce $\beta\ne0$). In $\mathbb{R}^n$ con un vincolo l'idea è la stessa, usando tutte le curve del vincolo per $\mathbf{x}_0$; con più vincoli serve il rango pieno della jacobiana (appunti Thm 909). Entrambi i casi sono nell'Approfondimento.

## Procedura

**A. Ottimizzazione libera** di $f$ di classe $C^2$ su un aperto.

1. Risolvi $\nabla f=\mathbf{0}$: i punti critici sono gli unici candidati interni.
2. In ogni punto critico calcola $H_f$ e classificalo con gli autovalori o con Sylvester; per $n=2$ con $\det H$ e $f_{xx}$.
3. Se $H$ è semidefinita ma non definita, il test tace. Rette o curve per il punto possono mostrare che **non** è un estremo ($f$ sale lungo una e scende lungo un'altra); per provare che lo è serve il confronto diretto di $f(\mathbf{x})$ con $f(\mathbf{x}_0)$ in tutto un intorno.
4. Per gli estremi **globali** i test locali non bastano: serve un argomento diretto (una disuguaglianza, una formula esatta) oppure il confronto dei valori su un insieme chiuso e limitato, bordo compreso.

**B. Ottimizzazione con un vincolo** $g=c$.

1. Trova i punti del vincolo con $\nabla g=\mathbf{0}$: sono candidati da esaminare a parte.
2. Risolvi il sistema $\nabla f=\lambda\nabla g$, $g=c$, nelle incognite $\mathbf{x}$ e $\lambda$. Spesso conviene ricavare $\lambda$ da due equazioni e uguagliare le espressioni.
3. Decidi chi è massimo e chi minimo. Se il vincolo è chiuso e limitato, per Weierstrass massimo e minimo esistono: confronta $f$ su tutti i candidati, compresi i punti dove il vincolo finisce (per esempio sugli assi, se le variabili devono essere non negative). Se non è limitato, giustifica l'esistenza a parte: per esempio, una funzione continua su un vincolo chiuso e non vuoto, che tende a $+\infty$ quando $\|\mathbf{x}\|\to\infty$ restando sul vincolo, ha minimo.
4. Leggi $\lambda$ come $v'(c)$.

> **Attenzione.** Risolvere il sistema produce candidati, non risposte: il passo 3 non si salta.

## Esempi

**Esempio 1 (libera: un'impresa con due prodotti).** Il profitto è $\pi(x,y)=10x+8y-x^2-xy-y^2$, con $x,y$ le quantità prodotte.

*Strategia:* punto critico, poi Hessiana. *Punto critico:* $\pi_x=10-2x-y=0$ e $\pi_y=8-x-2y=0$. Sottraendo dalla prima il doppio della seconda si ha $-6+3y=0$, cioè $y=2$, poi $x=4$. *Hessiana:* $H=\left(\begin{smallmatrix}-2&-1\\-1&-2\end{smallmatrix}\right)$ in ogni punto, con $D_1=-2<0$ e $D_2=4-1=3>0$: definita negativa (autovalori $-1$ e $-3$). Quindi $(4,2)$ è un massimo locale stretto, con $\pi(4,2)=40+16-16-8-4=28$. *Globale?* $\pi$ è un polinomio di grado 2, quindi la sua formula di Taylor si ferma al second'ordine e il resto è nullo: $\pi(4+h_1,2+h_2)=28+\tfrac12\mathbf{h}^TH\mathbf{h}<28$ per ogni $\mathbf{h}\ne\mathbf{0}$. Il massimo è globale.

**Esempio 2 (libera: due minimi e una sella).** $f(x,y)=x^4+y^4-4xy$.

*Punti critici:* $f_x=4x^3-4y=0$ e $f_y=4y^3-4x=0$ danno $y=x^3$ e $x=y^3=x^9$, cioè $x(x^8-1)=0$: tra i reali $x=0$ o $x=\pm1$. Punti $(0,0)$, $(1,1)$, $(-1,-1)$. *Hessiana:* $H=\left(\begin{smallmatrix}12x^2&-4\\-4&12y^2\end{smallmatrix}\right)$.

- In $(0,0)$: $H=\left(\begin{smallmatrix}0&-4\\-4&0\end{smallmatrix}\right)$, $\det H=-16<0$, autovalori $\pm4$: **sella**. Verifica diretta: $f(t,t)=2t^4-4t^2<0$ e $f(t,-t)=2t^4+4t^2>0$ per $t\ne0$ piccolo.
- In $(1,1)$ e $(-1,-1)$: $H=\left(\begin{smallmatrix}12&-4\\-4&12\end{smallmatrix}\right)$, $D_1=12>0$, $D_2=144-16=128>0$, autovalori $8$ e $16$: **minimi locali stretti**, con $f=-2$.

*Globali?* Da $4xy\le2(x^2+y^2)$ segue $f\ge(x^4-2x^2)+(y^4-2y^2)=(x^2-1)^2+(y^2-1)^2-2\ge-2$: i due minimi sono globali. Massimo globale non ne esiste, perché $f(t,0)=t^4\to+\infty$.

**Esempio 3 (vincolata: estremi su una circonferenza).** Massimo e minimo di $f(x,y)=3x+4y$ su $x^2+y^2=25$.

*Qualificazione:* $\nabla g=(2x,2y)$ si annulla solo nell'origine, che non sta sul vincolo. *Sistema:* $3=2\lambda x$, $4=2\lambda y$, $x^2+y^2=25$. Il moltiplicatore non è nullo (altrimenti $3=0$), quindi $x=\tfrac3{2\lambda}$, $y=\tfrac2\lambda$, e sostituendo $\tfrac{9}{4\lambda^2}+\tfrac{4}{\lambda^2}=\tfrac{25}{4\lambda^2}=25$, cioè $\lambda=\pm\tfrac12$. Candidati: $(3,4)$ con $\lambda=\tfrac12$ e $(-3,-4)$ con $\lambda=-\tfrac12$.

*Chi è chi:* la circonferenza è chiusa e limitata, quindi per Weierstrass massimo e minimo esistono e sono tra i candidati: $f(3,4)=25$ è il massimo, $f(-3,-4)=-25$ il minimo. Geometricamente, le rette di livello $3x+4y=k$ sono tangenti alla circonferenza proprio dove il raggio è parallelo a $(3,4)$.

*Prezzo ombra:* su $x^2+y^2=c$ il massimo vale $5\sqrt c$, e $\tfrac{d}{dc}5\sqrt c=\tfrac{5}{2\sqrt c}=\tfrac12$ per $c=25$: è il $\lambda$ del massimo.

**Esempio 4 (il consumatore e il prezzo ombra).** Un consumatore massimizza $U(x,y)=xy$ con il vincolo di bilancio $p_xx+p_yy=w$, con $x,y\ge0$ e prezzi e reddito positivi.

*Sistema:* $\nabla U=(y,x)=\lambda(p_x,p_y)$, quindi $y=\lambda p_x$ e $x=\lambda p_y$. Nel vincolo: $2\lambda p_xp_y=w$. Allora

$$
\lambda=\frac{w}{2p_xp_y},\qquad x=\frac{w}{2p_x},\qquad y=\frac{w}{2p_y},\qquad v(w)=xy=\frac{w^2}{4p_xp_y}.
$$

*Perché è il massimo:* il vincolo con $x,y\ge0$ è un segmento, chiuso e limitato; agli estremi (sugli assi) $U=0$, all'interno $U>0$. Il massimo esiste, non sta agli estremi, quindi è un punto interno del segmento dove vale Lagrange ($\nabla g=(p_x,p_y)\ne\mathbf{0}$): l'unico candidato.

*Con i numeri* $p_x=1$, $p_y=2$, $w=8$: paniere $(4,2)$, $U^*=8$, $\lambda=2$. Verifica del prezzo ombra: $v'(w)=\tfrac{w}{2p_xp_y}=\lambda$; con $w=9$ si ha $v=\tfrac{81}8=10{,}125$, cioè $+2{,}125\approx\lambda=2$. Un euro in più vale circa $2$ unità di utilità.

Nel grafico muovi il livello $a$ della curva di indifferenza $xy=a$ e osserva la retta di bilancio. Per $a<8$ la curva taglia la retta in due panieri acquistabili; per $a=8$ la tocca solo in $(4,2)$, tangente; per $a>8$ non la incontra più, perché quell'utilità non è raggiungibile con il reddito dato.

```slider
{"title": "Curve di indifferenza xy = a e retta di bilancio x + 2y = 8", "fn": "a/x", "fn2": "(8 - x)/2", "domain": [0, 10], "yDomain": [0, 4.5], "pname": "a", "pmin": 2, "pmax": 14, "pdefault": 4, "pstep": 1, "plabel": "livello di utilità a", "label1": "curva di indifferenza xy = a", "label2": "vincolo x + 2y = 8"}
```

## Esercizi

**Esercizio 1.** Trova e classifica i punti critici di $f(x,y)=x^3-3x+y^2$. Ci sono estremi globali?

<details>
<summary>Soluzione</summary>

$f_x=3x^2-3=0$ e $f_y=2y=0$: punti $(1,0)$ e $(-1,0)$. $H=\left(\begin{smallmatrix}6x&0\\0&2\end{smallmatrix}\right)$. In $(1,0)$: $\operatorname{diag}(6,2)$, definita positiva, **minimo locale** con $f=-2$. In $(-1,0)$: $\operatorname{diag}(-6,2)$, indefinita, **sella**. Nessun estremo globale: $f(t,0)=t^3-3t$ tende a $-\infty$ per $t\to-\infty$ e a $+\infty$ per $t\to+\infty$.
</details>

**Esercizio 2.** Mostra che $f=x^2+y^4$ e $k=x^2-y^4$ hanno entrambe un punto critico nell'origine con la stessa Hessiana, ma che la prima vi ha un minimo e la seconda una sella. Perché il test del second'ordine non poteva distinguerle?

<details>
<summary>Soluzione</summary>

$\nabla f=(2x,4y^3)$ e $\nabla k=(2x,-4y^3)$ si annullano in $(0,0)$; in entrambi i casi $H=\left(\begin{smallmatrix}2&0\\0&0\end{smallmatrix}\right)$, semidefinita positiva con un autovalore nullo. $f\ge0=f(0,0)$: minimo (globale). $k(t,0)=t^2>0$ e $k(0,t)=-t^4<0$: sella. La parte quadratica $\tfrac12\mathbf{h}^TH\mathbf{h}=h_1^2$ è nulla lungo la direzione $(0,1)$, dove decide il termine $\pm y^4$, che l'Hessiana non vede.
</details>

**Esercizio 3.** Trova il punto della retta $x+2y=5$ più vicino all'origine, minimizzando $x^2+y^2$, e verifica che $\lambda$ è la derivata del valore minimo rispetto al termine noto.

<details>
<summary>Soluzione</summary>

$(2x,2y)=\lambda(1,2)$: $x=\lambda/2$, $y=\lambda$; nel vincolo $\tfrac\lambda2+2\lambda=5$, quindi $\lambda=2$, punto $(1,2)$, valore $5$. È un minimo perché $x^2+y^2\to+\infty$ lungo la retta (procedura B, passo 3). Con termine noto $c$: $x=c/5$, $y=2c/5$, $v(c)=c^2/5$, e $v'(5)=2=\lambda$.
</details>

**Esercizio 4.** Un'impresa produce $q=\sqrt{KL}$ con capitale $K>0$ e lavoro $L>0$, pagati $2$ e $8$ per unità. Minimizza il costo $2K+8L$ per produrre $q=4$, prima con il vincolo $\sqrt{KL}=4$, poi con $KL=16$. Confronta i due $\lambda$.

<details>
<summary>Soluzione</summary>

Con $g=\sqrt{KL}$: $\nabla g=\big(\tfrac12\sqrt{L/K},\ \tfrac12\sqrt{K/L}\big)$. Il rapporto delle due equazioni dà $\tfrac28=\tfrac LK$, cioè $K=4L$; nel vincolo $2L=4$, quindi $L=2$, $K=8$, costo $32$. È il minimo: sul vincolo $L=16/K$ e il costo $2K+128/K$ tende a $+\infty$ sia per $K\to0^+$ sia per $K\to+\infty$, quindi un minimo esiste (procedura B, passo 3) ed è l'unico candidato. Dalla prima equazione $2=\lambda\cdot\tfrac12\cdot\tfrac12$, quindi $\lambda=8$. In generale $L=q/2$, $K=2q$ e il costo minimo è $C(q)=8q$: $\lambda=C'(q)=8$ è il **costo marginale**. Con $KL=16$: $(2,8)=\tilde\lambda(L,K)=\tilde\lambda(2,8)$, quindi $\tilde\lambda=1$. Stesso punto, moltiplicatore diverso: ora il termine noto è $s=q^2$, $C=8\sqrt s$ e $\tfrac{dC}{ds}=\tfrac{4}{\sqrt s}=1$ per $s=16$.
</details>

**Esercizio 5.** Trova massimo e minimo di $f(x,y)=xy$ sulla circonferenza $x^2+y^2=2$.

<details>
<summary>Soluzione</summary>

$(y,x)=\lambda(2x,2y)$: $y=2\lambda x$ e $x=2\lambda y=4\lambda^2x$. Se $x=0$ allora $y=0$, che non sta sul vincolo; quindi $4\lambda^2=1$, $\lambda=\pm\tfrac12$. Con $\lambda=\tfrac12$: $y=x$, punti $(1,1)$ e $(-1,-1)$, $f=1$. Con $\lambda=-\tfrac12$: $y=-x$, punti $(1,-1)$ e $(-1,1)$, $f=-1$. Il vincolo è chiuso e limitato: massimo $1$, minimo $-1$.
</details>

**Esercizio 6 (KKT).** Massimizza $f(x,y)=-(x-1)^2-(y-1)^2$ con il vincolo $x+y\le c$, prima per $c=4$ e poi per $c=1$, usando le condizioni con $\mu\ge0$ e la complementarità.

<details>
<summary>Soluzione</summary>

$\nabla f=\big(-2(x-1),-2(y-1)\big)=\mu(1,1)$. *$c=4$.* Se il vincolo fosse attivo, dalle due equazioni $x-1=y-1$, quindi $x=y=2$, e $(-2,-2)=\mu(1,1)$ darebbe $\mu=-2<0$: escluso. Quindi $\mu=0$, $\nabla f=\mathbf{0}$, punto $(1,1)$, ammissibile perché $1+1\le4$: il vincolo non conta. *$c=1$.* Con $\mu=0$ si ritrova $(1,1)$, che viola $x+y\le1$; quindi il vincolo è attivo, $x=y=\tfrac12$ e $(1,1)=\mu(1,1)$ dà $\mu=1\ge0$: massimo in $(\tfrac12,\tfrac12)$, valore $-\tfrac12$. Controllo geometrico: $-f$ è il quadrato della distanza da $(1,1)$, e il punto del semipiano $x+y\le1$ più vicino a $(1,1)$ è la sua proiezione $(\tfrac12,\tfrac12)$.
</details>
