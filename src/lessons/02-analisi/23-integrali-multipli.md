---
id: analisi-23-integrali-multipli
subject: analisi
topic_it: Analisi multivariata
topic_en: Multivariable analysis
title_it: Integrali doppi e tripli
title_en: Double and triple integrals
level: blue
order: 23
source_book: "J. Stewart, Calculus; MIT OCW 18.02"
source_chapter: "Cap. 15 — Integrali multipli"
---

## 1. Intuizione — Volume come somma di colonnine

In analisi 1D, l'integrale $\int_a^b f(x)\,dx$ è l'**area** sotto la curva: si sommano tanti rettangolini di larghezza $dx$ e altezza $f(x)$.

In 2D, l'**integrale doppio** $\iint_D f(x,y)\,dA$ è il **volume** sotto la superficie $z=f(x,y)$: si sommano tante colonnine di base $dA$ (piccola area) e altezza $f(x,y)$.

Immagina di versare sabbia sulla superficie della montagna $z=f(x,y)$: la quantità totale di sabbia è il volume del solido fra la superficie e il piano $xy$. L'integrale doppio calcola esattamente questa quantità.

Per l'**integrale triplo**, la funzione dipende da tre variabili $f(x,y,z)$: si sommano su volumi nello spazio. Se $f=\rho$ è la densità, l'integrale dà la **massa totale**.

Il segreto pratico: si calcolano **iterativamente**, un'integrazione alla volta, come "sbucciare una cipolla".

---

## 2. Prerequisiti

- Integrale definito di una variabile: $\int_a^b f(x)\,dx$ e tecniche di calcolo
- Regola di Barrow: $\int_a^b f'(x)\,dx = f(b)-f(a)$
- Coordinate polari: $x=r\cos\theta$, $y=r\sin\theta$, $r^2=x^2+y^2$
- Area e volume elementari: $dA = dx\,dy$, $dV=dx\,dy\,dz$
- Funzioni elementari e loro primitive: $e^x$, $\sin x$, $\cos x$, $x^n$

---

## 3. Teoria

### Integrale doppio — Definizione

L'**integrale doppio** di $f$ su una regione $D\subset\mathbb{R}^2$ è definito come limite di somme di Riemann:

$$\iint_D f(x,y)\,dA = \lim_{m,n\to\infty}\sum_{i=1}^m\sum_{j=1}^n f(x_{ij}^*,y_{ij}^*)\,\Delta A_{ij}$$

dove si suddivide $D$ in rettangolini di area $\Delta A_{ij}$ e si valuta $f$ in un punto campione $(x_{ij}^*, y_{ij}^*)$.

**Interpretazione:** se $f\geq 0$, l'integrale è il **volume** del solido $\{(x,y,z): (x,y)\in D,\ 0\leq z\leq f(x,y)\}$.

Se $f$ cambia segno, l'integrale è il volume con segno (volume sopra meno volume sotto il piano $xy$).

### Teorema di Fubini

Per una regione rettangolare $D=[a,b]\times[c,d]$ e $f$ continua:

$$\iint_D f(x,y)\,dA = \int_a^b\!\int_c^d f(x,y)\,dy\,dx = \int_c^d\!\int_a^b f(x,y)\,dx\,dy$$

Gli integrali iterati si calcolano **dall'interno verso l'esterno**: prima si integra rispetto alla variabile interna (trattando l'altra come parametro), poi rispetto a quella esterna.

**Scelta dell'ordine:** si può integrare in qualsiasi ordine su rettangoli; scegliere quello che rende il calcolo più semplice.

### Regioni non rettangolari

**Regione di tipo I** (verticale): per ogni $x\in[a,b]$, $y$ varia tra $g_1(x)$ e $g_2(x)$:

$$\iint_D f\,dA = \int_a^b\!\int_{g_1(x)}^{g_2(x)} f(x,y)\,dy\,dx$$

**Regione di tipo II** (orizzontale): per ogni $y\in[c,d]$, $x$ varia tra $h_1(y)$ e $h_2(y)$:

$$\iint_D f\,dA = \int_c^d\!\int_{h_1(y)}^{h_2(y)} f(x,y)\,dx\,dy$$

**Strategia:** disegnare la regione $D$ per identificare il tipo; in caso di scambio necessario, invertire i limiti di integrazione di conseguenza.

### Cambio di variabili — Coordinate polari

Per regioni con simmetria circolare, il cambio $x=r\cos\theta$, $y=r\sin\theta$ semplifica i calcoli. Il **jacobiano** del cambiamento è $r$:

$$dA = r\,dr\,d\theta$$

$$\iint_D f(x,y)\,dA = \int_{\theta_1}^{\theta_2}\!\int_{r_1(\theta)}^{r_2(\theta)} f(r\cos\theta,\, r\sin\theta)\,r\,dr\,d\theta$$

**Regole pratiche:**

| Regione | Limiti polari |
| --- | --- |
| Disco $x^2+y^2\leq R^2$ | $0\leq r\leq R$, $0\leq\theta\leq 2\pi$ |
| Semicerchio superiore | $0\leq r\leq R$, $0\leq\theta\leq\pi$ |
| Settore angolare | $0\leq r\leq R$, $\alpha\leq\theta\leq\beta$ |

### Cambio di variabili generale (Jacobiano)

Con $x=x(u,v)$, $y=y(u,v)$:

$$\iint_D f(x,y)\,dA = \iint_{D'} f(x(u,v),y(u,v))\,\left\lvert\frac{\partial(x,y)}{\partial(u,v)}\right\rvert\,du\,dv$$

dove il **jacobiano** è il determinante

$$\left\lvert\frac{\partial(x,y)}{\partial(u,v)}\right\rvert = \left\lvert\det\begin{pmatrix}x_u & x_v \\ y_u & y_v\end{pmatrix}\right\rvert$$

Per le polari: $x_r=\cos\theta$, $x_\theta=-r\sin\theta$, $y_r=\sin\theta$, $y_\theta=r\cos\theta$; il determinante dà $r$. ✓

### Integrale triplo

$$\iiint_E f(x,y,z)\,dV = \int_a^b\!\int_{g_1(x)}^{g_2(x)}\!\int_{u_1(x,y)}^{u_2(x,y)} f(x,y,z)\,dz\,dy\,dx$$

**Applicazioni fisiche:**

- Massa: $M=\iiint_E \rho(x,y,z)\,dV$ (con $\rho$ = densità)
- Centro di massa: $\bar{x}=\frac{1}{M}\iiint_E x\rho\,dV$

**Coordinate cilindriche:** $x=r\cos\theta$, $y=r\sin\theta$, $z=z$, $dV=r\,dr\,d\theta\,dz$ (utile per cilindri e coni).

**Coordinate sferiche:** $x=\rho\sin\phi\cos\theta$, $y=\rho\sin\phi\sin\theta$, $z=\rho\cos\phi$, $dV=\rho^2\sin\phi\,d\rho\,d\phi\,d\theta$ (utile per sfere).

---

## 4. Derivazione commentata — Perché $dA = r\,dr\,d\theta$ in polari?

**Claim:** il fattore di area in coordinate polari è $r\,dr\,d\theta$, non $dr\,d\theta$.

**Dimostrazione geometrica:**

**Passo 1.** Consideriamo un piccolo elemento in coordinate polari: $r$ varia in $[r_0, r_0+dr]$ e $\theta$ in $[\theta_0, \theta_0+d\theta]$.

**Passo 2.** Questo elemento è un "fettina di corona circolare". La lunghezza radiale è $dr$. La lunghezza dell'arco lungo $\theta$ (a raggio $r_0$) è $r_0\,d\theta$.

**Passo 3.** Per $dr$ e $d\theta$ infinitesimi, la forma è approssimativamente un rettangolo di lati $dr$ e $r_0\,d\theta$.

**Passo 4.** L'area è quindi:

$$dA \approx dr \cdot r_0\,d\theta = r_0\,dr\,d\theta$$

**Passo 5.** Formalmente, il jacobiano lo conferma:

$$\frac{\partial(x,y)}{\partial(r,\theta)} = \det\begin{pmatrix}\cos\theta & -r\sin\theta\\\sin\theta & r\cos\theta\end{pmatrix} = r\cos^2\theta + r\sin^2\theta = r \qquad \square$$

**Attenzione:** dimenticare il fattore $r$ è uno degli errori più comuni nel cambio a polari.

---

## 5. Esempi

**Esempio 1 — Integrale su rettangolo**

$$\iint_D (3x^2 y - y^2)\,dA, \quad D=[0,2]\times[1,3]$$

$$= \int_0^2\!\int_1^3 (3x^2 y-y^2)\,dy\,dx = \int_0^2\left[\frac{3x^2 y^2}{2}-\frac{y^3}{3}\right]_1^3 dx$$

$$= \int_0^2\left(\frac{27x^2}{2}-9-\frac{3x^2}{2}+\frac{1}{3}\right)dx = \int_0^2\left(12x^2-\frac{26}{3}\right)dx$$

$$= \left[4x^3-\frac{26x}{3}\right]_0^2 = 32-\frac{52}{3} = \frac{96-52}{3} = \frac{44}{3}$$

---

**Esempio 2 — Regione triangolare e scambio d'ordine**

$$\int_0^1\!\int_0^x e^{x^2}\,dy\,dx$$

La regione è $\{0\leq y\leq x\leq 1\}$ = triangolo con $x\in[y,1]$, $y\in[0,1]$.

Integriamo prima in $y$ (più facile):

$$\int_0^1\!\int_0^x e^{x^2}\,dy\,dx = \int_0^1 x e^{x^2}\,dx = \left[\frac{e^{x^2}}{2}\right]_0^1 = \frac{e-1}{2}$$

---

**Esempio 3 — Coordinate polari: disco unitario**

$$\iint_D e^{x^2+y^2}\,dA, \quad D=\{x^2+y^2\leq 1\}$$

In polari ($0\leq r\leq 1$, $0\leq\theta\leq 2\pi$):

$$\int_0^{2\pi}\!\int_0^1 e^{r^2}\,r\,dr\,d\theta = 2\pi\int_0^1 r\,e^{r^2}\,dr = 2\pi\left[\frac{e^{r^2}}{2}\right]_0^1 = \pi(e-1)$$

---

**Esempio 4 — Volume di un solido**

Calcolare il volume del solido limitato sopra da $z=4-x^2-y^2$ e sotto dal piano $z=0$.

Regione: $4-x^2-y^2\geq 0$, cioè $x^2+y^2\leq 4$ (disco di raggio 2).

$$V = \iint_{x^2+y^2\leq 4}(4-x^2-y^2)\,dA = \int_0^{2\pi}\!\int_0^2(4-r^2)\,r\,dr\,d\theta$$

$$= 2\pi\int_0^2(4r-r^3)\,dr = 2\pi\left[2r^2-\frac{r^4}{4}\right]_0^2 = 2\pi(8-4) = 8\pi$$

---

**Esempio 5 — Scambio d'ordine necessario**

$$\int_0^1\!\int_y^1 \sin(x^2)\,dx\,dy$$

Non esiste primitiva elementare di $\sin(x^2)$ in $x$. Scambiamo l'ordine: la regione è $\{0\leq y\leq x\leq 1\}$, quindi:

$$= \int_0^1\!\int_0^x \sin(x^2)\,dy\,dx = \int_0^1 x\sin(x^2)\,dx = \left[-\frac{\cos(x^2)}{2}\right]_0^1 = \frac{1-\cos 1}{2}$$

---

**Esempio 6 — Integrale triplo: parallelepipedo**

$$\iiint_E xyz\,dV, \quad E=[0,1]\times[0,2]\times[0,3]$$

$$= \int_0^1\!\int_0^2\!\int_0^3 xyz\,dz\,dy\,dx = \int_0^1\!\int_0^2 xy\left[\frac{z^2}{2}\right]_0^3 dy\,dx$$

$$= \int_0^1\!\int_0^2 \frac{9xy}{2}\,dy\,dx = \int_0^1 \frac{9x}{2}\left[y^2\right]_0^2 dx \cdot \frac{1}{2} = \int_0^1 9x\,dx = \frac{9}{2}$$

---

**Esempio 7 — Massa con densità variabile**

Una lamina triangolare con vertici $(0,0)$, $(1,0)$, $(0,1)$ ha densità $\rho(x,y)=x+y$. Calcolare la massa.

Regione: $x\geq 0$, $y\geq 0$, $x+y\leq 1$ (tipo I: $y\in[0,1-x]$, $x\in[0,1]$).

$$M=\int_0^1\!\int_0^{1-x}(x+y)\,dy\,dx = \int_0^1\left[xy+\frac{y^2}{2}\right]_0^{1-x}dx$$

$$=\int_0^1\left(x(1-x)+\frac{(1-x)^2}{2}\right)dx = \int_0^1\left(\frac{1}{2}-\frac{x^2}{2}\right)dx = \left[\frac{x}{2}-\frac{x^3}{6}\right]_0^1 = \frac{1}{2}-\frac{1}{6}=\frac{1}{3}$$

---

**Esempio 8 — Coordinate sferiche: volume della sfera**

$$V = \iiint_{x^2+y^2+z^2\leq R^2}dV = \int_0^{2\pi}\!\int_0^{\pi}\!\int_0^R \rho^2\sin\phi\,d\rho\,d\phi\,d\theta$$

$$= \int_0^{2\pi}d\theta\cdot\int_0^{\pi}\sin\phi\,d\phi\cdot\int_0^R\rho^2\,d\rho = 2\pi\cdot 2\cdot\frac{R^3}{3}=\frac{4\pi R^3}{3} \checkmark$$

---

## 6. Grafico

La funzione $f(x)=4-x^2$ rappresenta la sezione del paraboloide $z=4-x^2-y^2$ lungo $y=0$. L'area sotto la curva (da $-2$ a $2$) è la sezione del volume calcolato nell'Esempio 4:

```plot
{"title":"Sezione y=0 del paraboloide z=4−x²−y²","fn":"4 - x*x","fn2":"0*x","domain":[-3,3],"yDomain":[-1,5],"label1":"f(x,0)=4−x²","label2":"Piano z=0"}
```

L'area colorata tra la curva blu e la linea rossa ($z=0$) è la sezione bidimensionale. Ruotando questa sezione intorno all'asse $z$ (integrando in polari) si ottiene il volume $8\pi$.

---

## 7. Slider

Esplora come cambia la "fetta" di volume del paraboloide $z=4-x^2-a\cdot y^2$ al variare di $a$, visualizzando la sezione $y=1$:

```slider
{"title":"Sezione y=1: z=4−x²−a (effetto del termine y²)","fn":"4 - x*x - a","fn2":"0*x","domain":[-3,3],"yDomain":[-2,5],"pname":"a","pmin":0,"pmax":4,"pdefault":1,"pstep":0.1,"plabel":"a (=a·y² con y=1)","label1":"z=4−x²−a","label2":"Piano z=0"}
```

Quando $a$ aumenta, la sezione si abbassa: il paraboloide diventa più ripido nella direzione $y$. A $a=4$ la sezione tocca $z=0$ in $x=0$: il volume si annulla per quella sezione.

---

## 8. Errori comuni

| Errore | Forma sbagliata | Forma corretta |
| --- | --- | --- |
| Dimenticare il fattore $r$ in polari | $\iint_D f\,dA = \int\!\int f(r,\theta)\,dr\,d\theta$ | $\iint_D f\,dA = \int\!\int f\cdot r\,dr\,d\theta$ |
| Invertire i limiti di integrazione | $\int_0^x\int_0^1\ldots\,dx\,dy$ | Limiti interni dipendono dalla var. esterna |
| Ignorare la regione di integrazione | Integrare su $[0,1]\times[0,1]$ senza verificare | Disegnare $D$ e verificare i limiti |
| Non controllare se lo scambio d'ordine è possibile | Sempre possibile | Solo se $f$ è continua su $D$ (Fubini) |
| Usare $dV=dr\,d\theta\,d\phi$ in sferiche | Dimenticare il jacobiano | $dV=\rho^2\sin\phi\,d\rho\,d\phi\,d\theta$ |
| Confondere tipo I e tipo II | Limiti $y$ in funzione di $y$ | Tipo I: limiti di $y$ in funzione di $x$ |
| Integrare prima la variabile sbagliata | Bloccarsi su una primitiva impossibile | Provare a scambiare l'ordine |

---

## 9. Applicazioni reali

**Probabilità e statistica.** In statistica multivariata, la **funzione di densità di probabilità congiunta** $f(x,y)$ di due variabili aleatorie soddisfa $\iint_{\mathbb{R}^2}f(x,y)\,dA=1$. La probabilità che $(X,Y)$ cada in una regione $D$ è $P((X,Y)\in D)=\iint_D f(x,y)\,dA$. La distribuzione normale bivariata, ubiqua in econometria e biologia, si integra con coordinate polari con il famoso "trucco di Gauss": $\int_{-\infty}^{+\infty}e^{-x^2}dx=\sqrt{\pi}$ si ottiene proprio elevando al quadrato e passando alle polari.

**Ingegneria — centri di massa e momenti di inerzia.** La progettazione di strutture richiede il calcolo del centro di massa $(\bar{x},\bar{y})$ di lamine con densità variabile. Il **momento di inerzia** rispetto all'asse $z$ è $I_z=\iint_D (x^2+y^2)\rho(x,y)\,dA$: determina la resistenza alla rotazione di un oggetto e compare nelle equazioni del moto angolare di eliche, turbine e volani.

**Fluidodinamica e meteorologia.** Il **flusso** di un fluido attraverso una superficie è un integrale doppio del campo di velocità. In meteorologia, la portata d'acqua attraverso la sezione trasversale di un fiume è $Q=\iint_D v(x,y)\,dA$, dove $v$ è la velocità del flusso nel punto $(x,y)$ della sezione. Analogamente, la quantità di calore che fluisce attraverso una superficie isolante si calcola con integrali doppi della distribuzione di temperatura.

---

## 10. Riepilogo

| Concetto | Formula | Note |
| --- | --- | --- |
| Integrale doppio | $\iint_D f(x,y)\,dA$ | Limite di somme di Riemann 2D |
| Fubini (rettangolo) | $\int_a^b\!\int_c^d f\,dy\,dx$ | Ordine liberamente scambiabile |
| Tipo I | $\int_a^b\!\int_{g_1(x)}^{g_2(x)} f\,dy\,dx$ | Limiti $y$ in funzione di $x$ |
| Tipo II | $\int_c^d\!\int_{h_1(y)}^{h_2(y)} f\,dx\,dy$ | Limiti $x$ in funzione di $y$ |
| Polari | $\int\!\int f(r\cos\theta,r\sin\theta)\,r\,dr\,d\theta$ | Fattore $r$ obbligatorio |
| Jacobiano generale | $\lvert\partial(x,y)/\partial(u,v)\rvert$ | Determinante matrice delle derivate |
| Integrale triplo | $\iiint_E f\,dV$ | 3 integrazioni iterate |
| Coord. sferiche | $dV=\rho^2\sin\phi\,d\rho\,d\phi\,d\theta$ | Per sfere e calotte |

---

## 11. Esercizi

<details>
<summary>Esercizio 1 — Integrale su rettangolo con esponenziale</summary>

**Testo:** Calcolare $\displaystyle\iint_D x e^{xy}\,dA$ su $D=[0,1]\times[0,2]$.

**Soluzione:**

$$\int_0^1\!\int_0^2 x e^{xy}\,dy\,dx = \int_0^1 x\left[\frac{e^{xy}}{x}\right]_0^2 dx = \int_0^1(e^{2x}-1)\,dx$$

$$= \left[\frac{e^{2x}}{2}-x\right]_0^1 = \frac{e^2-1}{2}-1 = \frac{e^2-3}{2}$$

</details>

<details>
<summary>Esercizio 2 — Regione triangolare</summary>

**Testo:** Calcolare $\displaystyle\iint_D (x+y)\,dA$ su $D=\{0\leq x,\; 0\leq y,\; x+y\leq 2\}$.

**Soluzione:**

Tipo I: $x\in[0,2]$, $y\in[0,2-x]$.

$$\int_0^2\!\int_0^{2-x}(x+y)\,dy\,dx = \int_0^2\left[xy+\frac{y^2}{2}\right]_0^{2-x}dx = \int_0^2\left(x(2-x)+\frac{(2-x)^2}{2}\right)dx$$

$$= \int_0^2\left(2x-x^2+2-2x+\frac{x^2}{2}\right)dx = \int_0^2\left(2-\frac{x^2}{2}\right)dx = \left[2x-\frac{x^3}{6}\right]_0^2 = 4-\frac{8}{6}=\frac{8}{3}$$

</details>

<details>
<summary>Esercizio 3 — Scambio d'ordine</summary>

**Testo:** Calcolare $\displaystyle\int_0^4\!\int_{\sqrt{x}}^{2}\frac{1}{1+y^3}\,dy\,dx$ scambiando l'ordine.

**Soluzione:**

Regione: $0\leq x\leq 4$, $\sqrt{x}\leq y\leq 2$, cioè $x\in[0,y^2]$, $y\in[0,2]$.

$$\int_0^2\!\int_0^{y^2}\frac{1}{1+y^3}\,dx\,dy = \int_0^2\frac{y^2}{1+y^3}\,dy = \left[\frac{\ln(1+y^3)}{3}\right]_0^2 = \frac{\ln 9}{3}=\frac{2\ln 3}{3}$$

</details>

<details>
<summary>Esercizio 4 — Coordinate polari</summary>

**Testo:** Calcolare $\displaystyle\iint_D \arctan(y/x)\,dA$ su $D=\{1\leq x^2+y^2\leq 4,\; x\geq 0,\; y\geq 0\}$.

**Soluzione:**

In polari: $\arctan(y/x)=\theta$ (per $x>0,\,y>0$). Regione: $1\leq r\leq 2$, $0\leq\theta\leq\pi/2$.

$$\int_0^{\pi/2}\!\int_1^2 \theta\cdot r\,dr\,d\theta = \int_0^{\pi/2}\theta\,d\theta\cdot\int_1^2 r\,dr = \frac{\pi^2}{8}\cdot\frac{3}{2} = \frac{3\pi^2}{16}$$

</details>

<details>
<summary>Esercizio 5 — Volume di un solido</summary>

**Testo:** Calcolare il volume del tetraedro con vertici $(0,0,0)$, $(1,0,0)$, $(0,2,0)$, $(0,0,3)$.

**Soluzione:**

Piano del tetraedro: $x/1+y/2+z/3=1$, cioè $z=3(1-x-y/2)$ per $x,y\geq 0$, $x+y/2\leq 1$.

Regione $D$: $x\in[0,1]$, $y\in[0,2-2x]$.

$$V=\int_0^1\!\int_0^{2-2x}3\left(1-x-\frac{y}{2}\right)dy\,dx$$

$$= 3\int_0^1\left[(1-x)y-\frac{y^2}{4}\right]_0^{2-2x}dx = 3\int_0^1\left[(1-x)^2\cdot 2-\frac{(2-2x)^2}{4}\right]dx$$

$$= 3\int_0^1(2(1-x)^2-(1-x)^2)\,dx = 3\int_0^1(1-x)^2\,dx = 3\left[\frac{-(1-x)^3}{3}\right]_0^1 = 3\cdot\frac{1}{3} = \mathbf{1}$$

</details>

<details>
<summary>Esercizio 6 — Momento di inerzia</summary>

**Testo:** Una lamina circolare di raggio $R$ ha densità costante $\rho_0$. Calcolare il momento di inerzia rispetto al centro $I_O=\iint_D r^2\,\rho_0\,dA$.

**Soluzione:**

$$I_O = \rho_0\iint_{x^2+y^2\leq R^2}(x^2+y^2)\,dA = \rho_0\int_0^{2\pi}\!\int_0^R r^2\cdot r\,dr\,d\theta$$

$$= \rho_0\cdot 2\pi\int_0^R r^3\,dr = \rho_0\cdot 2\pi\cdot\frac{R^4}{4} = \frac{\pi\rho_0 R^4}{2}$$

Con massa $M=\rho_0\pi R^2$: $I_O=\frac{1}{2}MR^2$ (formula standard per il disco).

</details>

<details>
<summary>Esercizio 7 — Integrale triplo in coordinate cilindriche</summary>

**Testo:** Calcolare la massa del cilindro $x^2+y^2\leq 1$, $0\leq z\leq 2$ con densità $\rho(x,y,z)=\sqrt{x^2+y^2}$.

**Soluzione:**

In coordinate cilindriche: $\rho=r$, $dV=r\,dr\,d\theta\,dz$.

$$M = \int_0^{2\pi}\!\int_0^1\!\int_0^2 r\cdot r\,dz\,dr\,d\theta = 2\pi\int_0^1\!\int_0^2 r^2\,dz\,dr = 2\pi\int_0^1 2r^2\,dr = 4\pi\cdot\frac{1}{3} = \frac{4\pi}{3}$$

</details>

<details>
<summary>Esercizio 8 — Probabilità con densità normale bivariata semplificata</summary>

**Testo:** La densità $f(x,y)=\frac{1}{4}$ su $D=[-1,1]\times[-1,1]$ (densità uniforme). Verificare che è una densità, e calcolare $P(X^2+Y^2\leq 1)$.

**Soluzione:**

**Verifica:** $\iint_D \frac{1}{4}\,dA = \frac{1}{4}\cdot 4 = 1$ ✓.

**Probabilità:** $P(X^2+Y^2\leq 1)=\iint_{x^2+y^2\leq 1}\frac{1}{4}\,dA=\frac{1}{4}\cdot\pi\cdot 1^2=\frac{\pi}{4}\approx 0.785$.

Interpretazione: il cerchio unitario occupa una frazione $\pi/4\approx 78.5\%$ del quadrato $[-1,1]^2$ — esattamente il risultato del metodo Monte Carlo per stimare $\pi$.

</details>
