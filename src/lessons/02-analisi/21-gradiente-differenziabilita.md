---
id: analisi-21-gradiente-differenziabilita
subject: analisi
topic_it: Analisi multivariata
topic_en: Multivariable analysis
title_it: Gradiente, differenziabilità e piano tangente
title_en: Gradient, differentiability, and tangent plane
level: blue
order: 21
source_book: "J. Stewart, Calculus; MIT OCW 18.02"
source_chapter: "Cap. 14 — Gradiente e differenziale"
---

## 1. Intuizione — La bussola della montagna

Sei di nuovo sull'escursione in montagna. Conosci la quota $f(x,y)$ in ogni punto. Vuoi sapere: **in quale direzione devo muovermi per salire il più rapidamente possibile?**

La risposta è il **gradiente**: un vettore nel piano $(x,y)$ che punta sempre "su per la collina", perpendicolarmente alle curve di livello (le isoipse). Più è ripida la salita, più è lungo il vettore gradiente.

Se invece vuoi approssimare la superficie con un **piano piatto** vicino a un punto — come "appiattire" la montagna localmente per una mappa in scala — stai costruendo il **piano tangente**, che è l'estensione in 2D della retta tangente.

Il **differenziale** quantifica di quanto varia $f$ quando ci sposti di un piccolo passo $(dx, dy)$: è la versione precisa dell'approssimazione lineare.

---

## 2. Prerequisiti

- Derivate parziali $f_x$ e $f_y$ (lezione precedente)
- Vettori in $\mathbb{R}^2$: prodotto scalare $\mathbf{u}\cdot\mathbf{v} = u_1v_1+u_2v_2$, norma $\|\mathbf{u}\|=\sqrt{u_1^2+u_2^2}$
- Vettore unitario: $\hat{\mathbf{u}} = \mathbf{u}/\|\mathbf{u}\|$, con $\|\hat{\mathbf{u}}\|=1$
- Equazione di un piano nello spazio: $z = z_0 + a(x-x_0) + b(y-y_0)$
- Limite e nozione di $o(\varepsilon)$: $\varepsilon(h)/h \to 0$ per $h\to 0$

---

## 3. Teoria

### Il gradiente

Il **gradiente** di $f:\mathbb{R}^2\to\mathbb{R}$ è il vettore delle sue derivate parziali:

$$\nabla f(x,y) = \left(\frac{\partial f}{\partial x},\; \frac{\partial f}{\partial y}\right)$$

Per $f:\mathbb{R}^n\to\mathbb{R}$:

$$\nabla f = \left(\frac{\partial f}{\partial x_1},\;\frac{\partial f}{\partial x_2},\;\ldots,\;\frac{\partial f}{\partial x_n}\right)$$

Il simbolo $\nabla$ si legge "nabla" o "del". Il gradiente è un **operatore vettoriale**: trasforma uno scalare in un vettore.

**Proprietà geometriche fondamentali:**

1. $\nabla f(a,b)$ punta nella direzione di **massima crescita** di $f$ in $(a,b)$.
2. $\nabla f(a,b)$ è **perpendicolare** alla curva di livello $f = f(a,b)$ nel punto $(a,b)$.
3. $\|\nabla f(a,b)\|$ è il **tasso di variazione massimo** di $f$ in $(a,b)$.
4. $-\nabla f$ punta nella direzione di massima **discesa** (usato nel gradiente discendente del ML).

### Derivata direzionale

La **derivata direzionale** di $f$ nella direzione di $\mathbf{u}=(u_1,u_2)$ con $\|\mathbf{u}\|=1$ è

$$D_{\mathbf{u}}f(a,b) = \lim_{t\to 0}\frac{f(a+tu_1,\; b+tu_2) - f(a,b)}{t}$$

Misura la pendenza di $f$ nella direzione $\mathbf{u}$.

**Formula:** se $f$ è differenziabile in $(a,b)$,

$$D_{\mathbf{u}}f(a,b) = \nabla f(a,b)\cdot\mathbf{u} = f_x u_1 + f_y u_2$$

**Conseguenze:**
- $D_{\mathbf{u}}f$ è **massima** quando $\mathbf{u}=\nabla f/\|\nabla f\|$: valore massimo $= \|\nabla f\|$.
- $D_{\mathbf{u}}f$ è **minima** (più negativa) per $\mathbf{u}=-\nabla f/\|\nabla f\|$: valore $= -\|\nabla f\|$.
- $D_{\mathbf{u}}f = 0$ quando $\mathbf{u}$ è perpendicolare al gradiente (si cammina lungo una curva di livello).

### Differenziabilità

$f$ è **differenziabile** in $(a,b)$ se esistono $f_x(a,b)$ e $f_y(a,b)$ e vale l'approssimazione lineare:

$$f(a+h,\;b+k) = f(a,b) + f_x(a,b)\,h + f_y(a,b)\,k + \varepsilon(h,k)$$

dove l'errore soddisfa $\dfrac{\varepsilon(h,k)}{\sqrt{h^2+k^2}} \to 0$ per $(h,k)\to(0,0)$.

In parole: $f$ si approssima bene con una funzione lineare vicino al punto.

**Condizione sufficiente (pratica):** se $f_x$ e $f_y$ esistono e sono **continue** in un intorno di $(a,b)$, allora $f$ è differenziabile. Le funzioni elementari composte sono di solito differenziabili nel loro dominio.

**Gerarchia:** differenziabilità $\Rightarrow$ continuità $\Rightarrow$ esistenza delle derivate parziali (ma non viceversa).

### Differenziale totale

Il **differenziale totale** di $f$ è la parte lineare dell'incremento:

$$df = \frac{\partial f}{\partial x}\,dx + \frac{\partial f}{\partial y}\,dy$$

Rappresenta la variazione approssimata di $f$ quando $(x,y)$ varia di $(dx,dy)$.

**Uso pratico:** se si conosce $f(a,b)$ e si vuole approssimare $f(a+\varepsilon, b+\delta)$ per $\varepsilon,\delta$ piccoli:

$$f(a+\varepsilon, b+\delta) \approx f(a,b) + f_x(a,b)\,\varepsilon + f_y(a,b)\,\delta$$

### Piano tangente

Il **piano tangente** alla superficie $z=f(x,y)$ nel punto $(a, b, f(a,b))$ è

$$z = f(a,b) + f_x(a,b)\,(x-a) + f_y(a,b)\,(y-b)$$

È il "miglior piano piatto" che approssima la superficie vicino al punto: coincide con la linearizzazione di $f$.

La **linearizzazione** (o approssimazione lineare) di $f$ vicino a $(a,b)$ è

$$L(x,y) = f(a,b) + f_x(a,b)(x-a) + f_y(a,b)(y-b)$$

---

## 4. Derivazione commentata — Il gradiente è perpendicolare alle curve di livello

**Claim:** $\nabla f(a,b)$ è perpendicolare alla curva di livello $f(x,y)=c$ nel punto $(a,b)$.

**Dimostrazione:**

**Passo 1.** Parametrizziamo la curva di livello: sia $\mathbf{r}(t)=(x(t), y(t))$ una curva con $f(x(t),y(t))=c$ per ogni $t$, e $\mathbf{r}(0)=(a,b)$.

**Passo 2.** Deriviamo rispetto a $t$ (la funzione composta è costante, quindi la derivata è zero):

$$\frac{d}{dt}f(x(t),y(t)) = 0$$

**Passo 3.** Applichiamo la regola della catena:

$$\frac{\partial f}{\partial x}x'(t) + \frac{\partial f}{\partial y}y'(t) = 0$$

**Passo 4.** Riconosciamo il prodotto scalare:

$$\nabla f(x(t),y(t)) \cdot \mathbf{r}'(t) = 0$$

**Passo 5.** In $t=0$: $\nabla f(a,b) \cdot \mathbf{r}'(0) = 0$.

Poiché $\mathbf{r}'(0)$ è il **vettore tangente** alla curva di livello in $(a,b)$, e il prodotto scalare è zero, $\nabla f(a,b)$ è perpendicolare alla curva. $\square$

---

## 5. Esempi

**Esempio 1 — Gradiente di un polinomio**

$f(x,y) = x^2 + 3xy - y^3$.

$$\nabla f = (2x+3y,\; 3x-3y^2)$$

In $(1,-1)$: $\nabla f(1,-1) = (2-3,\ 3-3) = (-1,\; 0)$.

Il gradiente punta verso sinistra: $f$ decresce nell'asse $x$ positivo in quel punto.

---

**Esempio 2 — Derivata direzionale**

$f(x,y) = xy^2$, direzione $\mathbf{v}=(3,4)$ (da normalizzare: $\|\mathbf{v}\|=5$, $\mathbf{u}=(3/5,4/5)$).

$\nabla f = (y^2, 2xy)$. In $(2,1)$: $\nabla f = (1, 4)$.

$$D_{\mathbf{u}}f(2,1) = (1,4)\cdot\left(\frac{3}{5},\frac{4}{5}\right) = \frac{3}{5}+\frac{16}{5} = \frac{19}{5}$$

---

**Esempio 3 — Piano tangente a una paraboloide**

$f(x,y) = x^2 + y^2$ nel punto $(1,2,5)$.

$f_x = 2x$, $f_y = 2y$. In $(1,2)$: $f_x=2$, $f_y=4$.

Piano tangente: $z = 5 + 2(x-1) + 4(y-2) = 2x+4y-5$.

Verifica: in $(1,2)$ il piano dà $z=2+8-5=5$ ✓.

---

**Esempio 4 — Approssimazione con il differenziale**

Approssimare $\sqrt{(3.01)^2+(3.99)^2}$.

$f(x,y)=\sqrt{x^2+y^2}$, $a=3$, $b=4$: $f(3,4)=5$.

$f_x = x/\sqrt{x^2+y^2} = 3/5$, $f_y = y/\sqrt{x^2+y^2} = 4/5$.

Con $dx=0.01$, $dy=-0.01$:

$$f(3.01,3.99) \approx 5 + \frac{3}{5}(0.01) + \frac{4}{5}(-0.01) = 5 + 0.006 - 0.008 = 4.998$$

Valore esatto: $\sqrt{9.0601+15.9201}\approx\sqrt{24.9802}\approx 4.998$. ✓

---

**Esempio 5 — Direzione di massima crescita**

$f(x,y)=e^{-x^2-y^2}$ (gaussiana). $\nabla f = (-2xe^{-x^2-y^2},\ -2ye^{-x^2-y^2})$.

In $(1,0)$: $\nabla f = (-2e^{-1},\; 0)$.

La massima crescita è verso **sinistra** (verso il centro $(0,0)$ dove la gaussiana è massima). ✓

Tasso massimo: $\|\nabla f(1,0)\| = 2e^{-1} \approx 0.736$.

---

**Esempio 6 — Piano tangente alla sfera**

$f(x,y,z)=x^2+y^2+z^2$. La superficie $f=1$ è la sfera unitaria. Il gradiente $\nabla f = (2x,2y,2z)$ è il **vettore normale** alla sfera, che in ogni punto punta radialmente verso l'esterno.

Nel punto $(1/\sqrt{3}, 1/\sqrt{3}, 1/\sqrt{3})$: $\nabla f = (2/\sqrt{3}, 2/\sqrt{3}, 2/\sqrt{3})$ — punta ugualmente in tutte le direzioni positive. ✓

---

**Esempio 7 — Funzione non differenziabile con derivate parziali esistenti**

$$f(x,y) = \frac{xy}{\sqrt{x^2+y^2}}, \quad f(0,0)=0$$

$f_x(0,0) = \lim_{h\to 0} f(h,0)/h = 0$, $f_y(0,0)=0$.

Lungo $y=x$: $f(t,t)=t^2/(t\sqrt{2})=t/\sqrt{2}\to 0$. Però il rapporto dell'errore:

$$\frac{f(h,h)-0-0\cdot h-0\cdot h}{\sqrt{2}\,h} = \frac{h/\sqrt{2}}{\sqrt{2}\,h} = \frac{1}{2} \not\to 0$$

Quindi $f$ **non è differenziabile** in $(0,0)$ nonostante le derivate parziali esistano.

---

**Esempio 8 — Gradiente e ottimizzazione**

$f(x,y) = 4-x^2-y^2$. Dov'è il massimo?

$\nabla f = (-2x,-2y) = (0,0)$ solo in $(0,0)$. Qui $f(0,0)=4$.

Poiché $f=4-r^2$ con $r^2=x^2+y^2\geq 0$, effettivamente $f\leq 4$ con eguaglianza solo nell'origine: **massimo globale** in $(0,0)$.

---

## 6. Grafico

Il piano tangente alla paraboloide $f(x,y)=x^2$ nel punto $(1,1)$ ha pendenza $f'(1)=2$, cioè $z=2x-1$:

```plot
{"title":"Paraboloide f(x)=x² e piano tangente in x=1","fn":"x*x","fn2":"2*x - 1","domain":[-2,3],"yDomain":[-2,8],"label1":"f(x)=x²","label2":"Tangente: z=2x−1"}
```

Il piano tangente (rosso) tocca la superficie (blu) in $x=1$ e si discosta via via che ci si allontana: è l'approssimazione lineare locale.

---

## 7. Slider

Esplora il piano tangente a $f(x)=x^2+a$ al variare del punto di tangenza $a$ (qui $a$ sposta il punto $x_0$ da cui si costruisce la tangente, con piano $z=2a\cdot x - a^2$):

```slider
{"title":"Tangente a x² nel punto (a, a²)","fn":"x*x","fn2":"2*a*x - a*a","domain":[-3,3],"yDomain":[-2,10],"pname":"a","pmin":-2,"pmax":2,"pdefault":1,"pstep":0.1,"plabel":"a (punto di tangenza)","label1":"f(x)=x²","label2":"Piano tangente in a"}
```

Osserva: quando sposti $a$, il piano tangente (rossa) ruota e si sposta. L'inclinazione è $2a$ — il valore della derivata (gradiente 1D) nel punto scelto.

---

## 8. Errori comuni

| Errore | Forma sbagliata | Forma corretta |
| --- | --- | --- |
| Dimenticare di normalizzare $\mathbf{u}$ | $D_{\mathbf{u}}f = \nabla f \cdot \mathbf{v}$ con $\lVert\mathbf{v}\rVert\neq 1$ | Prima normalizzare: $\mathbf{u}=\mathbf{v}/\lVert\mathbf{v}\rVert$ |
| Confondere gradiente e derivata parziale | "$\nabla f = f_x$" | $\nabla f = (f_x, f_y)$: è un **vettore** |
| Pensare che derivate parziali $\Rightarrow$ differenziabilità | — | Servono derivate parziali **continue** |
| Invertire formula piano tangente | $z = f_x(x-a) + f_y(y-b)$ | $z = f(a,b) + f_x(x-a) + f_y(y-b)$ |
| Confondere $df$ con $\Delta f$ | $df = \Delta f$ esatto | $df$ è l'approssimazione lineare di $\Delta f$ |
| Dimenticare che il gradiente è nel dominio, non nel grafico | "$\nabla f \in \mathbb{R}^3$" per $f:\mathbb{R}^2\to\mathbb{R}$ | $\nabla f \in \mathbb{R}^2$: vive nel piano di input |
| Usare il gradiente senza verificare differenziabilità | $D_{\mathbf{u}}f = \nabla f \cdot \mathbf{u}$ sempre | Formula valida solo se $f$ è **differenziabile** |

---

## 9. Applicazioni reali

**Imaging medico e visione artificiale.** Nel processing di immagini, una foto digitale è una funzione $I(x,y)$ = intensità luminosa nel pixel $(x,y)$. Il gradiente $\nabla I$ rileva i **bordi** degli oggetti: dove l'intensità varia rapidamente (gradiente grande), c'è un contorno. L'algoritmo Canny, usato in riconoscimento facciale e guida autonoma, sopprime tutto tranne i massimi locali di $\|\nabla I\|$.

**Climatologia.** La pressione atmosferica $P(x,y)$ è una funzione della posizione geografica. Il vento soffia approssimativamente nella direzione di $-\nabla P$ (dal campo di alta pressione verso quello di bassa pressione). Le isobare (curve di livello di $P$) appaiono sulle mappe meteo: il vento è perpendicolare a esse.

**Robotica e controllo.** Un robot che deve raggiungere una destinazione senza ostacoli usa il "campo potenziale": definisce $f(x,y)=$ "distanza dal goal" e si muove nella direzione $-\nabla f$. La superficie del potenziale guida il robot verso il minimo (la destinazione). Il piano tangente approssima localmente questa superficie e permette previsioni a breve termine del percorso.

---

## 10. Riepilogo

| Concetto | Formula | Significato geometrico |
| --- | --- | --- |
| Gradiente | $\nabla f = (f_x, f_y)$ | Vettore di massima crescita |
| Perpendicolarità | $\nabla f \perp$ curve di livello | Dimostrato con regola della catena |
| Derivata direzionale | $D_{\mathbf{u}}f = \nabla f \cdot \mathbf{u}$ | Pendenza nella direzione $\mathbf{u}$ |
| Massima crescita | $\mathbf{u} = \nabla f / \lVert\nabla f\rVert$ | Tasso max $= \lVert\nabla f\rVert$ |
| Differenziabilità | Errore $= o(\lVert(h,k)\rVert)$ | Approssimazione lineare valida |
| Piano tangente | $z = f(a,b)+f_x(x-a)+f_y(y-b)$ | Linearizzazione della superficie |
| Differenziale | $df = f_x\,dx + f_y\,dy$ | Variazione approssimata di $f$ |

---

## 11. Esercizi

<details>
<summary>Esercizio 1 — Gradiente e direzione di massima crescita</summary>

**Testo:** $f(x,y)=x^2 y - y^3$. Trovare $\nabla f(2,1)$ e la direzione unitaria di massima crescita. Qual è il tasso di variazione massimo?

**Soluzione:**

$f_x=2xy$, $f_y=x^2-3y^2$. In $(2,1)$: $f_x=4$, $f_y=4-3=1$.

$\nabla f(2,1)=(4,1)$.

Direzione: $\hat{\mathbf{u}}=(4,1)/\sqrt{17}=(4/\sqrt{17},\,1/\sqrt{17})$.

Tasso max: $\|\nabla f\|=\sqrt{16+1}=\sqrt{17}\approx 4.12$.

</details>

<details>
<summary>Esercizio 2 — Piano tangente</summary>

**Testo:** Trovare il piano tangente a $f(x,y)=\ln(xy)$ nel punto $(1,e,1)$ e usarlo per approssimare $f(1.1,\, e+0.1)$.

**Soluzione:**

$f_x=1/x$, $f_y=1/y$. In $(1,e)$: $f_x=1$, $f_y=1/e$.

Piano: $z = 1 + 1\cdot(x-1) + \frac{1}{e}(y-e) = x + \frac{y}{e} - 1$.

Approssimazione con $dx=0.1$, $dy=0.1$:

$$f(1.1,e+0.1)\approx 1 + 1\cdot 0.1 + \frac{1}{e}\cdot 0.1 = 1.1 + \frac{0.1}{e} \approx 1.1368$$

Valore esatto: $\ln(1.1(e+0.1))=\ln(1.1\cdot e+0.11)\approx\ln(2.9923)\approx 1.096$ (approssimazione buona per piccoli incrementi).

</details>

<details>
<summary>Esercizio 3 — Derivata direzionale e angolo</summary>

**Testo:** $f(x,y)=x^2-2xy+3y^2$. In $(1,1)$: in quale direzione $D_{\mathbf{u}}f = 0$? Trovare il vettore unitario.

**Soluzione:**

$f_x=2x-2y$, $f_y=-2x+6y$. In $(1,1)$: $\nabla f=(0,4)$.

$D_{\mathbf{u}}f=(0,4)\cdot(u_1,u_2)=4u_2=0 \Rightarrow u_2=0$.

Con $u_1^2+u_2^2=1$: $u_1=\pm 1$. Quindi $\mathbf{u}=(\pm 1, 0)$: la direzione è quella dell'asse $x$ (orizzontale), perpendicolare al gradiente verticale.

</details>

<details>
<summary>Esercizio 4 — Approssimazione con differenziale</summary>

**Testo:** Un cilindro ha raggio $r=5$ cm e altezza $h=10$ cm. Se $r$ aumenta di $0.1$ cm e $h$ diminuisce di $0.2$ cm, come varia il volume $V=\pi r^2 h$?

**Soluzione:**

$\frac{\partial V}{\partial r}=2\pi r h=100\pi$, $\frac{\partial V}{\partial h}=\pi r^2=25\pi$.

$dV = 100\pi\cdot(0.1) + 25\pi\cdot(-0.2) = 10\pi - 5\pi = 5\pi \approx 15.7\ \text{cm}^3$.

Il volume aumenta di circa $15.7$ cm³.

</details>

<details>
<summary>Esercizio 5 — Gradiente e curva di livello</summary>

**Testo:** $f(x,y)=x^2+4y^2$. Trovare la retta tangente alla curva di livello $f=5$ nel punto $(1,1)$.

**Soluzione:**

$\nabla f(1,1)=(2,8)$: questo è il **vettore normale** alla curva di livello.

La retta tangente in $(1,1)$ con vettore normale $(2,8)$ ha equazione:

$$2(x-1)+8(y-1)=0 \Rightarrow 2x+8y=10 \Rightarrow x+4y=5$$

Verifica: $(1,1)$ sulla retta $\checkmark$, $(3,1/2)$ sulla curva: $9+1=10\neq 5$ — quindi la curva non è una retta, ma la **tangente** in $(1,1)$ è corretta.

</details>

<details>
<summary>Esercizio 6 — Differenziabilità e continuità</summary>

**Testo:** Sia $f(x,y)=\sqrt{\lvert x \rvert + \lvert y \rvert}$. $f$ è differenziabile in $(0,0)$?

**Soluzione:**

$f_x(0,0)=\lim_{h\to 0}\frac{\sqrt{\lvert h\rvert}-0}{h}=\lim_{h\to 0}\frac{1}{\sqrt{\lvert h\rvert}}\cdot\text{sgn}(h)$: questo limite non esiste (diverge).

Quindi $f_x(0,0)$ **non esiste** e $f$ non è differenziabile in $(0,0)$.

</details>

<details>
<summary>Esercizio 7 — Gradiente di $f: \mathbb{R}^3 \to \mathbb{R}$</summary>

**Testo:** $f(x,y,z)=x^2 yz + e^z\sin(xy)$. Calcolare $\nabla f(0,0,0)$.

**Soluzione:**

$f_x=2xyz+ye^z\cos(xy)$. In $(0,0,0)$: $f_x=0$.

$f_y=x^2z+xe^z\cos(xy)$. In $(0,0,0)$: $f_y=0$.

$f_z=x^2y+e^z\sin(xy)$. In $(0,0,0)$: $f_z=\sin(0)=0$.

$\nabla f(0,0,0)=(0,0,0)$: l'origine è un punto critico.

</details>

<details>
<summary>Esercizio 8 — Piano tangente a superficie implicita</summary>

**Testo:** Trovare il piano tangente alla superficie $F(x,y,z)=x^2+y^2-z=0$ (paraboloide) nel punto $(1,2,5)$.

**Soluzione:**

$\nabla F=(2x, 2y, -1)$. In $(1,2,5)$: $\nabla F=(2,4,-1)$.

Il piano tangente ha $\nabla F$ come vettore normale:

$$2(x-1)+4(y-2)-1(z-5)=0 \Rightarrow 2x+4y-z=5$$

Verifica in $(1,2,5)$: $2+8-5=5$ ✓.

</details>
