---
id: analisi-20-funzioni-piu-variabili
subject: analisi
topic_it: Analisi multivariata
topic_en: Multivariable analysis
title_it: Funzioni di più variabili e derivate parziali
title_en: Functions of several variables and partial derivatives
level: blue
order: 20
source_book: "J. Stewart, Calculus; MIT OCW 18.02"
source_chapter: "Cap. 14 — Derivate parziali"
stato: da-rielaborare
---

## 1. Intuizione — Una superficie come paesaggio

Immagina di fare un'escursione in montagna. La tua quota dipende da **dove ti trovi**: dalla tua posizione orizzontale, cioè da due coordinate $(x, y)$ sulla cartina. Se chiami $f(x,y)$ la tua altitudine, hai una funzione di due variabili.

La **derivata parziale rispetto a $x$** risponde alla domanda: "se cammino verso Est (lasciando invariata la mia posizione Nord-Sud), quanto sale o scende rapidamente la quota?" Analogamente, $\partial f/\partial y$ misura la pendenza dirigendosi verso Nord.

Questo concetto si generalizza: la temperatura in un edificio dipende da tre coordinate spaziali, il profitto di un'azienda dipende da decine di fattori, la pressione atmosferica dipende da posizione e quota. Tutte situazioni descritte da **funzioni di più variabili**.

---

## 2. Prerequisiti

- Derivate di funzioni di una variabile: $\frac{d}{dx}[x^n] = nx^{n-1}$, regola della catena in 1D
- Limite di funzioni reali: $\lim_{x\to a} f(x) = L$
- Vettori in $\mathbb{R}^2$ e $\mathbb{R}^3$: somma, prodotto scalare, norma $\|\mathbf{v}\|$
- Nozione di piano in $\mathbb{R}^3$: equazione $ax + by + cz = d$

---

## 3. Teoria

### Funzioni di più variabili

Una **funzione di due variabili reali** è una mappa

$$f: D \subseteq \mathbb{R}^2 \longrightarrow \mathbb{R}, \quad (x,y) \mapsto f(x,y)$$

dove $D$ è il **dominio** (sottoinsieme di $\mathbb{R}^2$ su cui $f$ è definita). Il **grafico** di $f$ è la superficie

$$\{(x,y,z) \in \mathbb{R}^3 : z = f(x,y),\ (x,y)\in D\}$$

Le **curve di livello** (o isoipse) sono le curve piane $f(x,y) = c$ per $c$ costante: proiettano la superficie sul piano $xy$ come una carta topografica.

Per $n$ variabili: $f: D \subseteq \mathbb{R}^n \to \mathbb{R}$, scritta $f(x_1, \ldots, x_n)$.

### Limiti e continuità

Il limite

$$\lim_{(x,y)\to(a,b)} f(x,y) = L$$

significa che $f(x,y)$ si avvicina a $L$ **qualunque sia il percorso** con cui $(x,y)$ tende a $(a,b)$.

Questo è molto più restrittivo del caso 1D: in due dimensioni esistono **infiniti percorsi** possibili (rette, parabole, spirali, …). Se anche uno solo dà un limite diverso, il limite **non esiste**.

$f$ è **continua** in $(a,b)$ se il limite esiste, è uguale a $f(a,b)$, e $f$ è definita lì.

### Derivate parziali

La **derivata parziale di $f$ rispetto a $x$** nel punto $(a,b)$ è

$$\frac{\partial f}{\partial x}(a,b) = \lim_{h\to 0} \frac{f(a+h,\,b) - f(a,b)}{h}$$

Si tratta della derivata ordinaria di $x \mapsto f(x,b)$ (con $y = b$ fissato). Geometricamente è la **pendenza della curva** ottenuta tagliando la superficie con il piano $y = b$.

Analogamente

$$\frac{\partial f}{\partial y}(a,b) = \lim_{k\to 0} \frac{f(a,\,b+k) - f(a,b)}{k}$$

**Regola pratica:** per calcolare $\partial f/\partial x$, si tratta $y$ come una costante e si derivano rispetto a $x$ le stesse regole dell'analisi 1D.

**Notazioni equivalenti:**

$$f_x = \partial_x f = D_x f = \frac{\partial f}{\partial x}$$

### Derivate parziali di ordine superiore

Si possono derivare di nuovo le derivate parziali:

$$f_{xx} = \frac{\partial^2 f}{\partial x^2}, \quad f_{yy} = \frac{\partial^2 f}{\partial y^2}$$

Le **derivate miste** derivano rispetto a variabili diverse:

$$f_{xy} = \frac{\partial}{\partial y}\left(\frac{\partial f}{\partial x}\right), \qquad f_{yx} = \frac{\partial}{\partial x}\left(\frac{\partial f}{\partial y}\right)$$

**Teorema di Schwarz (simmetria delle derivate miste):** Se $f_{xy}$ e $f_{yx}$ sono continue in un intorno di $(a,b)$, allora

$$f_{xy}(a,b) = f_{yx}(a,b)$$

Per funzioni regolari (classi $C^2$ e superiori), l'ordine di derivazione non conta.

### Regola della catena multivariabile

Se $x = x(t)$, $y = y(t)$ sono funzioni differenziabili di $t$, la derivata totale di $z = f(x(t),y(t))$ è

$$\frac{dz}{dt} = \frac{\partial f}{\partial x}\frac{dx}{dt} + \frac{\partial f}{\partial y}\frac{dy}{dt}$$

Ogni variabile intermedia contribuisce con il proprio "canale": si somma il prodotto di ogni derivata parziale per la derivata della variabile corrispondente.

Con due parametri $s, t$:

$$\frac{\partial f}{\partial s} = \frac{\partial f}{\partial x}\frac{\partial x}{\partial s} + \frac{\partial f}{\partial y}\frac{\partial y}{\partial s}$$

---

## 4. Derivazione commentata — La regola della catena passo per passo

**Claim:** se $z = f(x,y)$, $x = r\cos\theta$, $y = r\sin\theta$, allora

$$\frac{\partial z}{\partial r} = f_x \cos\theta + f_y \sin\theta$$

**Dimostrazione:**

**Passo 1.** Scriviamo le dipendenze: $z$ dipende da $x$ e $y$; a loro volta $x$ e $y$ dipendono da $r$ e $\theta$.

**Passo 2.** Per la regola della catena (due canali verso $r$):

$$\frac{\partial z}{\partial r} = \frac{\partial f}{\partial x}\cdot\frac{\partial x}{\partial r} + \frac{\partial f}{\partial y}\cdot\frac{\partial y}{\partial r}$$

**Passo 3.** Calcoliamo $\partial x/\partial r$ e $\partial y/\partial r$ da $x = r\cos\theta$, $y = r\sin\theta$ (con $\theta$ fissato):

$$\frac{\partial x}{\partial r} = \cos\theta, \qquad \frac{\partial y}{\partial r} = \sin\theta$$

**Passo 4.** Sostituiamo:

$$\frac{\partial z}{\partial r} = f_x \cos\theta + f_y \sin\theta \qquad \square$$

Analogamente $\dfrac{\partial z}{\partial \theta} = -f_x r\sin\theta + f_y r\cos\theta$.

---

## 5. Esempi

**Esempio 1 — Derivate parziali di un polinomio**

$f(x,y) = 3x^2 y - y^3 + 5x$

$$\frac{\partial f}{\partial x} = 6xy + 5 \quad (\text{trattando } y \text{ come costante})$$

$$\frac{\partial f}{\partial y} = 3x^2 - 3y^2 \quad (\text{trattando } x \text{ come costante})$$

---

**Esempio 2 — Derivate parziali di una funzione trascendente**

$f(x,y) = e^{xy}\sin(x+y)$

$$f_x = ye^{xy}\sin(x+y) + e^{xy}\cos(x+y)$$

$$f_y = xe^{xy}\sin(x+y) + e^{xy}\cos(x+y)$$

(Regola del prodotto: $e^{xy}$ e $\sin(x+y)$, con la regola della catena per ogni fattore.)

---

**Esempio 3 — Verifica del teorema di Schwarz**

$f(x,y) = x^2 y^3$

$$f_x = 2xy^3, \quad f_{xy} = \frac{\partial}{\partial y}(2xy^3) = 6xy^2$$

$$f_y = 3x^2y^2, \quad f_{yx} = \frac{\partial}{\partial x}(3x^2y^2) = 6xy^2$$

Confermato: $f_{xy} = f_{yx} = 6xy^2$.

---

**Esempio 4 — Limite che esiste**

$$\lim_{(x,y)\to(0,0)} \frac{x^2 y}{x^2+y^2}$$

Usiamo $\lvert x^2 y/(x^2+y^2)\rvert \leq \lvert y\rvert$ (perché $x^2 \leq x^2+y^2$). Poiché $\lvert y\rvert \to 0$, il limite è $\mathbf{0}$.

---

**Esempio 5 — Limite che non esiste**

$$\lim_{(x,y)\to(0,0)} \frac{x^2 - y^2}{x^2+y^2}$$

- Lungo $y=0$: $\dfrac{x^2}{x^2} = 1 \to 1$.
- Lungo $x=0$: $\dfrac{-y^2}{y^2} = -1 \to -1$.

Limiti diversi: il limite **non esiste**.

---

**Esempio 6 — Regola della catena**

$f(x,y)=x^2+y^2$, $x(t)=\cos t$, $y(t)=\sin t$.

$$\frac{d}{dt}f = 2x(-\sin t) + 2y(\cos t) = 2\cos t(-\sin t) + 2\sin t\cos t = 0$$

(Ovvio: $f = \cos^2 t + \sin^2 t = 1$, costante.)

---

**Esempio 7 — Dominio di una funzione di due variabili**

$f(x,y) = \ln(1-x^2-y^2)$

Il logaritmo richiede argomento positivo: $1-x^2-y^2 > 0$, cioè $x^2+y^2 < 1$.

Dominio: il disco aperto di raggio 1, $D = \{(x,y): x^2+y^2 < 1\}$.

---

**Esempio 8 — Derivata parziale seconda**

$f(x,y)=\sin(xy)$

$$f_x = y\cos(xy), \quad f_{xx} = -y^2\sin(xy)$$

$$f_{xy} = \cos(xy) - xy\sin(xy) = f_{yx}$$

---

## 6. Grafico

Visualizzazione delle curve di livello di $f(x,y)= x^2 - y^2$ lungo la sezione $y=c$ (cioè $z=x^2-c^2$):

```plot
{"title":"Sezione y=0 di f(x,y)=x²−y²","fn":"x*x","fn2":"2*x","domain":[-3,3],"yDomain":[-1,9],"label1":"f(x,0)=x²","label2":"f'(x,0)=2x (derivata parziale)"}
```

La curva blu è il profilo della superficie lungo $y=0$; la curva rossa è la derivata parziale $\partial f/\partial x = 2x$ valutata su quella sezione.

---

## 7. Slider

Esplora come cambia la sezione $f(x,y)=x^2 + a\cdot y^2$ al variare di $a$ (con $y=1$ fissato, cioè $z=x^2+a$):

```slider
{"title":"Sezione y=1: f(x)=x²+a","fn":"x*x + a","domain":[-3,3],"yDomain":[-3,12],"pname":"a","pmin":-2,"pmax":4,"pdefault":1,"pstep":0.1,"plabel":"a","label1":"f(x,1)=x²+a"}
```

All'aumentare di $a$, la parabola si sposta in alto (il valore $f(0,1)=a$ cresce). La **forma** non cambia: la curvatura in $x$ è sempre 2, indipendentemente da $a$. Questo mostra che $\partial^2 f/\partial x^2 = 2$ non dipende da $y$.

---

## 8. Errori comuni

| Errore | Forma sbagliata | Forma corretta |
| --- | --- | --- |
| Derivare anche la variabile tenuta fissa | $\partial(xy^2)/\partial x = y^2 + 2xy$ | $\partial(xy^2)/\partial x = y^2$ ($y$ è costante) |
| Confondere limite con valore | "$\lim_{(x,y)\to(0,0)} f = f(0,0)$" sempre | Serve verificare l'esistenza del limite |
| Pensare che limiti su rette bastino | Controllare solo $y=0$ e $y=x$ | Il limite deve esistere su **tutti** i percorsi |
| Invertire ordine in $f_{xy}$ | $f_{xy}=\partial_x(\partial_x f)$ | $f_{xy}=\partial_y(\partial_x f)$: prima $x$, poi $y$ |
| Omettere il fattore nella regola della catena | $\frac{d}{dt}f(x(t),y(t))=f_x + f_y$ | $\frac{d}{dt}f = f_x x'(t) + f_y y'(t)$ |
| Credere che continuità implichi derivabilità parziale | — | Esistono funzioni continue senza derivate parziali |
| Applicare Schwarz senza continuità | $f_{xy}=f_{yx}$ sempre | Solo se le derivate miste sono **continue** |

---

## 9. Applicazioni reali

**Termodinamica.** Lo stato di un gas ideale è descritto da $P(V,T)= nRT/V$, una funzione di due variabili (volume $V$ e temperatura $T$). Le derivate parziali $\partial P/\partial V$ (a $T$ fissa) e $\partial P/\partial T$ (a $V$ fisso) compaiono nelle equazioni di stato e nei cicli termodinamici. La regola della catena permette di collegare queste derivate quando sia $V$ che $T$ variano nel tempo.

**Machine learning.** L'addestramento di una rete neurale minimizza una funzione di perdita $L(w_1, w_2, \ldots, w_n)$ con milioni di parametri $w_i$. Le derivate parziali $\partial L/\partial w_i$ (il "gradiente") indicano in che direzione muoversi per ridurre l'errore: questo è il cuore dell'algoritmo di **backpropagation**.

**Economia.** La funzione di utilità $U(x,y)$ di un consumatore dipende dalle quantità $x$ e $y$ di due beni. L'**utilità marginale** $\partial U/\partial x$ misura il beneficio aggiuntivo di un'unità in più del bene $x$, con il bene $y$ tenuto fisso. Le curve di livello $U=c$ si chiamano **curve di indifferenza**.

---

## 10. Riepilogo

| Concetto | Definizione / Formula | Note |
| --- | --- | --- |
| Funzione di 2 variabili | $f: D \subseteq \mathbb{R}^2 \to \mathbb{R}$ | Grafico = superficie in $\mathbb{R}^3$ |
| Curva di livello | $f(x,y) = c$ | Come isoipse su cartina |
| Limite in 2D | $\lim_{(x,y)\to(a,b)} f = L$ | Valido per **tutti** i percorsi |
| Derivata parziale $f_x$ | $\lim_{h\to 0}\frac{f(a+h,b)-f(a,b)}{h}$ | $y$ tenuto costante |
| Derivata parziale $f_y$ | $\lim_{k\to 0}\frac{f(a,b+k)-f(a,b)}{k}$ | $x$ tenuto costante |
| Teorema di Schwarz | $f_{xy} = f_{yx}$ se continue | Ordine di derivazione irrilevante |
| Regola della catena | $\frac{dz}{dt}=f_x x' + f_y y'$ | Un termine per ogni canale |

---

## 11. Esercizi

<details>
<summary>Esercizio 1 — Dominio e derivate parziali di base</summary>

**Testo:** Trovare il dominio di $f(x,y)=\dfrac{\sqrt{x+y}}{x-y}$ e calcolare $f_x$, $f_y$.

**Soluzione:**

Dominio: $x+y \geq 0$ e $x \neq y$, cioè $D = \{(x,y): x+y\geq 0,\ x\neq y\}$.

$$f_x = \frac{\frac{1}{2\sqrt{x+y}}\cdot(x-y) - \sqrt{x+y}\cdot 1}{(x-y)^2} = \frac{-x-3y}{2\sqrt{x+y}\,(x-y)^2}$$

$$f_y = \frac{\frac{1}{2\sqrt{x+y}}\cdot(x-y) - \sqrt{x+y}\cdot(-1)}{(x-y)^2} = \frac{3x+y}{2\sqrt{x+y}\,(x-y)^2}$$

</details>

<details>
<summary>Esercizio 2 — Limite per percorsi</summary>

**Testo:** Determinare se $\displaystyle\lim_{(x,y)\to(0,0)}\frac{xy^2}{x^2+y^4}$ esiste.

**Soluzione:**

Lungo $y=0$: $0/x^2 = 0$.

Lungo $x=y^2$: $\dfrac{y^2\cdot y^2}{y^4+y^4} = \dfrac{y^4}{2y^4} = \dfrac{1}{2}$.

Percorsi diversi danno limiti diversi: il limite **non esiste**.

</details>

<details>
<summary>Esercizio 3 — Derivate seconde miste</summary>

**Testo:** Per $f(x,y)=\ln(x^2+y^2)$ (con $(x,y)\neq(0,0)$), calcolare $f_{xx}+f_{yy}$ (Laplaciano).

**Soluzione:**

$$f_x = \frac{2x}{x^2+y^2}, \quad f_{xx} = \frac{2(x^2+y^2)-2x\cdot 2x}{(x^2+y^2)^2} = \frac{2y^2-2x^2}{(x^2+y^2)^2}$$

$$f_y = \frac{2y}{x^2+y^2}, \quad f_{yy} = \frac{2x^2-2y^2}{(x^2+y^2)^2}$$

$$f_{xx}+f_{yy} = \frac{2y^2-2x^2+2x^2-2y^2}{(x^2+y^2)^2} = \mathbf{0}$$

$f$ è **armonica** (soddisfa l'equazione di Laplace).

</details>

<details>
<summary>Esercizio 4 — Regola della catena</summary>

**Testo:** $f(x,y)=x^2 y$, $x=e^t$, $y=\sin t$. Calcolare $df/dt$ usando la regola della catena e verificare sostituendo direttamente.

**Soluzione:**

$f_x=2xy$, $f_y=x^2$, $x'=e^t$, $y'=\cos t$.

$$\frac{df}{dt} = 2xy\cdot e^t + x^2\cdot\cos t = 2e^t\sin t\cdot e^t + e^{2t}\cos t = e^{2t}(2\sin t+\cos t)$$

**Verifica:** $f = e^{2t}\sin t$, quindi $\frac{d}{dt}(e^{2t}\sin t) = 2e^{2t}\sin t + e^{2t}\cos t = e^{2t}(2\sin t+\cos t)$. ✓

</details>

<details>
<summary>Esercizio 5 — Teorema di Schwarz applicato</summary>

**Testo:** $f(x,y)=x^3 y^2 - 2x^2 y^4$. Verificare $f_{xy}=f_{yx}$ senza calcolare entrambe le derivate miste.

**Soluzione:**

Il teorema di Schwarz si applica se $f_{xy}$ e $f_{yx}$ sono continue. Poiché $f$ è un polinomio, è di classe $C^\infty$: tutte le derivate parziali di qualsiasi ordine sono continue ovunque. Dunque $f_{xy}=f_{yx}$ per il teorema di Schwarz.

**Verifica esplicita:**

$f_x = 3x^2y^2 - 4xy^4$, poi $f_{xy}=6x^2y - 16xy^3$.

$f_y = 2x^3y - 8x^2y^3$, poi $f_{yx}=6x^2y - 16xy^3$. ✓

</details>

<details>
<summary>Esercizio 6 — Coordinate polari e regola della catena</summary>

**Testo:** Esprimere $f_{rr}$ in funzione delle derivate parziali di $f(x,y)$, dove $x=r\cos\theta$, $y=r\sin\theta$.

**Soluzione:**

Dalla derivazione commentata: $f_r = f_x\cos\theta + f_y\sin\theta$.

Derivando di nuovo rispetto a $r$ (con $\theta$ fisso):

$$f_{rr} = \frac{\partial}{\partial r}(f_x)\cos\theta + \frac{\partial}{\partial r}(f_y)\sin\theta$$

$$= (f_{xx}\cos\theta + f_{xy}\sin\theta)\cos\theta + (f_{yx}\cos\theta + f_{yy}\sin\theta)\sin\theta$$

$$= f_{xx}\cos^2\theta + 2f_{xy}\sin\theta\cos\theta + f_{yy}\sin^2\theta$$

</details>

<details>
<summary>Esercizio 7 — Curva di livello e punto specifico</summary>

**Testo:** Trovare le curve di livello di $f(x,y)=y-x^2$ e descriverle geometricamente. Qual è la curva che passa per $(1,3)$?

**Soluzione:**

$f(x,y)=c$ diventa $y-x^2=c$, cioè $y=x^2+c$: una **parabola** con vertice in $(0,c)$.

Per $(1,3)$: $c=f(1,3)=3-1=2$, quindi la curva è $y=x^2+2$.

Le curve di livello sono parabole traslate verticalmente; al crescere di $c$ si alzano di $c$ unità.

</details>

<details>
<summary>Esercizio 8 — Funzione non continua in un punto</summary>

**Testo:** Mostrare che $f(x,y)=\dfrac{2xy}{x^2+y^2}$ per $(x,y)\neq(0,0)$, $f(0,0)=0$, non è continua in $(0,0)$ pur avendo derivate parziali.

**Soluzione:**

Lungo $y=x$: $f(x,x)=\dfrac{2x^2}{2x^2}=1\not\to 0=f(0,0)$: la funzione non è continua.

Tuttavia: $f_x(0,0)=\lim_{h\to 0}\frac{f(h,0)-f(0,0)}{h}=\lim_{h\to 0}\frac{0-0}{h}=0$, e analogamente $f_y(0,0)=0$.

**Conclusione:** l'esistenza delle derivate parziali **non implica** la continuità.

</details>
