---
id: analisi-22-ottimizzazione-lagrange
subject: analisi
topic_it: Analisi multivariata
topic_en: Multivariable analysis
title_it: Ottimizzazione libera e vincolata — moltiplicatori di Lagrange
title_en: Free and constrained optimization — Lagrange multipliers
level: blue
order: 22
source_book: "J. Stewart, Calculus; MIT OCW 18.02"
source_chapter: "Cap. 14 — Ottimizzazione"
---

## 1. Intuizione — Trovare la vetta e camminare sul recinto

**Ottimizzazione libera:** immagina di cercare la cima più alta di una montagna senza vincoli di percorso. Puoi muoverti in qualsiasi direzione. Al vertice, non c'è più "su": il gradiente è zero in tutte le direzioni. Questo è un **punto critico libero**.

**Ottimizzazione vincolata:** ora hai un vincolo — devi restare su un sentiero preciso (una curva). Non puoi scendere dalla cresta per trovare la cima. Il massimo sul sentiero si trova dove il sentiero è "tangente" alle curve di livello della quota. In quel punto, il gradiente della quota e il gradiente che descrive il sentiero sono **paralleli** — uno è multiplo dell'altro. Quel moltiplicatore è $\lambda$, il **moltiplicatore di Lagrange**.

L'intuizione chiave: al punto ottimo vincolato, non si guadagna nulla spostandosi lungo il vincolo — le curve di livello di $f$ e il vincolo si toccano senza incrociarsi.

---

## 2. Prerequisiti

- Gradiente $\nabla f$ e sue proprietà geometriche (lezione 21)
- Derivate parziali $f_x$, $f_y$, $f_{xx}$, $f_{xy}$, $f_{yy}$
- Sistemi di equazioni non lineari
- Nozione di massimo/minimo locale e globale
- Determinante di una matrice $2\times 2$: $\det\begin{pmatrix}a&b\\c&d\end{pmatrix}=ad-bc$

---

## 3. Teoria

### Punti critici liberi

Un punto $(a,b)$ è **critico** (o stazionario) per $f$ se

$$\nabla f(a,b) = \mathbf{0}, \quad \text{cioè} \quad f_x(a,b) = 0 \text{ e } f_y(a,b) = 0$$

I punti critici sono **candidati** a massimi o minimi locali (o punti di sella).

### Matrice hessiana e classificazione

La **matrice hessiana** di $f$ nel punto $(a,b)$ è la matrice delle derivate seconde:

$$H_f(a,b) = \begin{pmatrix} f_{xx}(a,b) & f_{xy}(a,b) \\ f_{xy}(a,b) & f_{yy}(a,b) \end{pmatrix}$$

Il **discriminante** (o hessiano scalare) è

$$D(a,b) = \det H_f(a,b) = f_{xx}(a,b)\,f_{yy}(a,b) - [f_{xy}(a,b)]^2$$

**Criterio della seconda derivata:**

| Condizione | Classificazione |
| --- | --- |
| $D > 0$ e $f_{xx} > 0$ | **Minimo locale** |
| $D > 0$ e $f_{xx} < 0$ | **Massimo locale** |
| $D < 0$ | **Punto di sella** |
| $D = 0$ | Criterio non conclusivo |

**Intuizione:** $D>0$ significa che la curvatura ha lo stesso segno in tutte le direzioni (ciotola o cupola); $D<0$ significa curvatura mista (sella da cavallo).

### Ottimizzazione vincolata — Moltiplicatori di Lagrange

**Problema:** massimizzare (o minimizzare) $f(x,y)$ soggetta al vincolo $g(x,y)=c$.

**Condizione necessaria del primo ordine:** in ogni punto di ottimo vincolato (purché $\nabla g \neq \mathbf{0}$),

$$\nabla f(x,y) = \lambda\,\nabla g(x,y)$$

cioè il sistema

$$\begin{cases} f_x = \lambda\,g_x \\ f_y = \lambda\,g_y \\ g(x,y) = c \end{cases}$$

con $\lambda\in\mathbb{R}$ detto **moltiplicatore di Lagrange**.

Il sistema ha $3$ equazioni in $3$ incognite: $x$, $y$, $\lambda$. Le soluzioni sono i **candidati** all'ottimo.

**Metodo alternativo (funzione di Lagrange):** definire

$$\mathcal{L}(x,y,\lambda) = f(x,y) - \lambda\,(g(x,y)-c)$$

e imporre $\nabla\mathcal{L} = \mathbf{0}$ (rispetto a tutte le variabili incluso $\lambda$): si ottiene lo stesso sistema.

**Con $n$ variabili e $m$ vincoli** ($m < n$): il sistema diventa

$$\nabla f = \sum_{i=1}^{m}\lambda_i\nabla g_i, \quad g_i(\mathbf{x})=c_i \; (i=1,\ldots,m)$$

### Interpretazione di $\lambda$

Il moltiplicatore $\lambda$ ha un significato economico preciso: se il vincolo è $g=c$, allora

$$\lambda = \frac{df^*}{dc}$$

dove $f^*$ è il valore ottimo. Indica di quanto cambia il valore ottimo se si "allenta" il vincolo di un'unità. In economia: prezzo ombra, valore marginale del vincolo.

---

## 4. Derivazione commentata — Perché $\nabla f = \lambda \nabla g$?

**Claim:** al punto di ottimo vincolato $(a,b)$ con $g(a,b)=c$ e $\nabla g(a,b)\neq \mathbf{0}$, esiste $\lambda$ tale che $\nabla f(a,b)=\lambda\nabla g(a,b)$.

**Dimostrazione (via curva sul vincolo):**

**Passo 1.** Il vincolo $g(x,y)=c$ è una curva. Parametrizziamola: $\mathbf{r}(t)=(x(t),y(t))$ con $g(x(t),y(t))=c$.

**Passo 2.** La funzione $h(t)=f(x(t),y(t))$ ha un ottimo in $t_0$ (dove $\mathbf{r}(t_0)=(a,b)$). Quindi $h'(t_0)=0$.

**Passo 3.** Per la regola della catena:

$$h'(t_0) = \nabla f(a,b)\cdot\mathbf{r}'(t_0) = 0$$

Quindi $\nabla f(a,b) \perp \mathbf{r}'(t_0)$ (perpendicolare al vettore tangente al vincolo).

**Passo 4.** Derivando $g(x(t),y(t))=c$:

$$\nabla g(a,b)\cdot\mathbf{r}'(t_0) = 0$$

Quindi anche $\nabla g(a,b) \perp \mathbf{r}'(t_0)$.

**Passo 5.** In $\mathbb{R}^2$, se due vettori sono entrambi perpendicolari alla stessa direzione, sono **paralleli**: $\nabla f(a,b) = \lambda\,\nabla g(a,b)$ per qualche scalare $\lambda$. $\square$

---

## 5. Esempi

**Esempio 1 — Classificazione: minimo e sella**

$f(x,y) = x^3 - 3x + y^2 - 4y + 7$

$f_x = 3x^2-3=0 \Rightarrow x=\pm 1$; $f_y=2y-4=0 \Rightarrow y=2$.

Punti critici: $(1,2)$ e $(-1,2)$.

$f_{xx}=6x$, $f_{xy}=0$, $f_{yy}=2$; $D=12x\cdot 2-0=12x$.

- $(1,2)$: $D=12>0$, $f_{xx}=6>0$ → **minimo locale**. Valore: $f(1,2)=1-3+4-8+7=1$.
- $(-1,2)$: $D=-12<0$ → **punto di sella**.

---

**Esempio 2 — Massimo e minimo globali su un dominio chiuso**

$f(x,y)=x^2+y^2-2x$ su $D=\{x^2+y^2\leq 4\}$.

**Interno:** $f_x=2x-2=0$, $f_y=2y=0$ → punto critico $(1,0)$. $f(1,0)=-1$.

**Frontiera** ($x^2+y^2=4$): con Lagrange, $g=x^2+y^2-4=0$.

$\nabla f=\lambda\nabla g$: $(2x-2, 2y)=\lambda(2x,2y)$.

Da $2y=2\lambda y$: o $y=0$ o $\lambda=1$.

- $y=0$, $x^2=4$: $x=\pm 2$. $f(2,0)=0$, $f(-2,0)=8$.
- $\lambda=1$: $2x-2=2x$: impossibile.

Confronto: minimo $f=-1$ in $(1,0)$; massimo $f=8$ in $(-2,0)$.

---

**Esempio 3 — Lagrange classico: massimo sul cerchio**

Massimizzare $f(x,y)=xy$ su $g(x,y)=x^2+y^2=1$.

Sistema: $y=2\lambda x$, $x=2\lambda y$, $x^2+y^2=1$.

Moltiplicando le prime due: $xy=4\lambda^2 xy$.

- Se $xy\neq 0$: $\lambda^2=1/4$, $\lambda=\pm 1/2$.
  - $\lambda=1/2$: $y=x$; con vincolo $2x^2=1$, $x=\pm 1/\sqrt{2}$. $f=1/2$.
  - $\lambda=-1/2$: $y=-x$. $f=-1/2$.
- Se $xy=0$: $x=0$ o $y=0$ → $f=0$.

**Massimo:** $f=1/2$ in $(\pm 1/\sqrt{2},\pm 1/\sqrt{2})$ (segni uguali).
**Minimo:** $f=-1/2$ in $(\pm 1/\sqrt{2},\mp 1/\sqrt{2})$ (segni opposti).

---

**Esempio 4 — Lagrange a tre variabili**

Minimizzare $f(x,y,z)=x^2+y^2+z^2$ su $g=x+2y+3z=14$.

$\nabla f=\lambda\nabla g$: $(2x,2y,2z)=\lambda(1,2,3)$.

$x=\lambda/2$, $y=\lambda$, $z=3\lambda/2$.

Vincolo: $\lambda/2+2\lambda+9\lambda/2 = 14 \Rightarrow \lambda(1/2+2+9/2)=\lambda\cdot 7=14 \Rightarrow \lambda=2$.

$x=1$, $y=2$, $z=3$. Minimo: $f=1+4+9=\mathbf{14}$.

**Significato:** il punto più vicino all'origine sul piano $x+2y+3z=14$.

---

**Esempio 5 — Punto di sella (visualizzazione)**

$f(x,y)=x^2-y^2$.

$\nabla f=(2x,-2y)=\mathbf{0}$ solo nell'origine.

$D=f_{xx}f_{yy}-(f_{xy})^2=2\cdot(-2)-0=-4<0$: **punto di sella**.

Lungo $y=0$: $f=x^2$ ha un minimo. Lungo $x=0$: $f=-y^2$ ha un massimo. La superficie ha la forma di una sella da cavallo.

---

**Esempio 6 — Lagrange con due vincoli**

Trovare il punto sulla retta $\{x+y=1,\ y+z=1\}$ più vicino all'origine.

Minimizzare $f=x^2+y^2+z^2$ con $g_1=x+y-1=0$, $g_2=y+z-1=0$.

$\nabla f=\lambda_1\nabla g_1+\lambda_2\nabla g_2$:

$(2x,2y,2z)=\lambda_1(1,1,0)+\lambda_2(0,1,1)$.

$2x=\lambda_1$, $2y=\lambda_1+\lambda_2$, $2z=\lambda_2$.

Da vincoli: $x+y=1$ e $y+z=1$. Sostituendo: $\lambda_1/2+(\lambda_1+\lambda_2)/2=1$ e $(\lambda_1+\lambda_2)/2+\lambda_2/2=1$.

Prima: $\lambda_1+\lambda_2/2=1$. Seconda: $\lambda_1/2+\lambda_2=1$.

Risolvendo: $\lambda_1=\lambda_2=2/3$. Quindi $x=z=1/3$, $y=2/3$.

Minimo: $f=1/9+4/9+1/9=\mathbf{2/3}$.

---

**Esempio 7 — Hessiano e forma quadratica**

$f(x,y)=x^4+y^4-4xy+2$.

$f_x=4x^3-4y=0$, $f_y=4y^3-4x=0$: da queste $x=y^3$ e $y=x^3$, quindi $x=x^9$, $x(x^8-1)=0$.

Soluzioni: $x=0$ (poi $y=0$) e $x=\pm 1$ (poi $y=\pm 1$).

Hessiano: $f_{xx}=12x^2$, $f_{xy}=-4$, $f_{yy}=12y^2$.

- $(0,0)$: $D=0\cdot 0-16=-16<0$ → sella.
- $(1,1)$: $D=12\cdot 12-16=128>0$, $f_{xx}=12>0$ → **minimo locale**. $f(1,1)=0$.
- $(-1,-1)$: $D=128>0$, $f_{xx}=12>0$ → **minimo locale**. $f(-1,-1)=0$.

---

**Esempio 8 — Ottimizzazione economica**

Un'azienda produce $x$ unità del bene A e $y$ del bene B con costo $C(x,y)=x^2+xy+y^2$. Il contratto impone $x+y=10$. Minimizzare $C$.

Lagrange: $\nabla C=\lambda\nabla g$. $(2x+y, x+2y)=\lambda(1,1)$.

$2x+y=x+2y \Rightarrow x=y$. Vincolo: $2x=10 \Rightarrow x=y=5$.

$C_{\min}=25+25+25=\mathbf{75}$.

---

## 6. Grafico

Il punto di sella di $f(x,y)=x^2-y^2$ è ben visibile nelle sezioni: lungo $y=0$ è un minimo, lungo $x=0$ è un massimo:

```plot
{"title":"Sezione y=0: f(x,0)=x² (minimo) e x=0: f(0,y)=−y² (massimo)","fn":"x*x","fn2":"-x*x","domain":[-3,3],"yDomain":[-6,6],"label1":"f(x,0)=x² (sezione y=0)","label2":"f(0,y)=−y² (sezione x=0)"}
```

La curva blu ha un minimo in $x=0$; la rossa ha un massimo. L'origine è simultaneamente un minimo e un massimo in direzioni diverse: questo è un **punto di sella**.

---

## 7. Slider

Esplora il punto critico di $f(x,y)=x^2+a\cdot y^2$ al variare di $a$ (sezione con $y=1$: $f(x,1)=x^2+a$):

```slider
{"title":"f(x)=x²+a·1² — effetto di a sulla forma","fn":"x*x + a","fn2":"0*x","domain":[-3,3],"yDomain":[-4,10],"pname":"a","pmin":-2,"pmax":2,"pdefault":1,"pstep":0.1,"plabel":"a","label1":"f(x,1)=x²+a","label2":"livello zero"}
```

Quando $a>0$: il minimo di $f$ è un minimo globale (paraboloide ellittico). Quando $a<0$: la funzione ha un punto di sella nell'origine (paraboloide iperbolico). Il discriminante $D=2a\cdot 2-0=4a$ cambia segno con $a$.

---

## 8. Errori comuni

| Errore | Forma sbagliata | Forma corretta |
| --- | --- | --- |
| Dimenticare il vincolo nel sistema | Solo $\nabla f=\lambda\nabla g$ | Aggiungere sempre $g(x,y)=c$ |
| Fermarsi ai candidati senza confrontarli | Prendere il primo punto trovato | Valutare $f$ in tutti i candidati e scegliere |
| Usare $D$ senza punto critico | Calcolare $D$ in punto arbitrario | $D$ si valuta solo **nei punti critici** |
| Confondere $f_{xy}$ e $f_{xx}$ nel discriminante | $D=f_{xx}f_{xy}-(f_{yy})^2$ | $D=f_{xx}f_{yy}-(f_{xy})^2$ |
| $D=0$ conclusivo | "$D=0$ → minimo/massimo" | $D=0$: criterio **non conclusivo**, serve altro |
| Ignorare frontiera nel dominio chiuso | Solo punti interni critici | Includere la frontiera con Lagrange o parametrizzazione |
| Dividere per $\nabla g$ invece di usare il sistema | "$\nabla f / \nabla g = \lambda$" | Scrivere le equazioni componente per componente |

---

## 9. Applicazioni reali

**Ingegneria strutturale.** Un progettista deve minimizzare il peso di una trave (funzione da minimizzare) rispettando limiti di resistenza (vincoli). I moltiplicatori di Lagrange danno la "sensibilità" del peso ottimo rispetto a ciascun vincolo: se $\lambda_i$ è grande, allentare il vincolo $i$ porta un grande risparmio di peso. Questa informazione guida le scelte di progetto.

**Microeconomia e teoria del consumatore.** Un consumatore massimizza l'utilità $U(x,y)$ spendendo esattamente il budget $B=p_x x + p_y y$. La condizione di Lagrange dà $U_x/p_x = U_y/p_y = \lambda$: il rapporto tra utilità marginale e prezzo deve essere uguale per tutti i beni. Questo è il celebre "teorema di Gossen" e fonda tutta la teoria della domanda.

**Apprendimento automatico — SVM.** Le macchine a vettori di supporto (Support Vector Machine) trovano l'iperpiano separatore di massimo margine attraverso un problema di ottimizzazione vincolata quadratica. I moltiplicatori di Lagrange identificano i **vettori di supporto** (i punti dati critici sul bordo del margine): solo questi determinano il classificatore, rendendo l'SVM efficiente e robusto.

---

## 10. Riepilogo

| Concetto | Formula / Condizione | Note |
| --- | --- | --- |
| Punto critico libero | $\nabla f = \mathbf{0}$ | Necessario, non sufficiente |
| Discriminante hessiano | $D = f_{xx}f_{yy}-(f_{xy})^2$ | Solo nei punti critici |
| Minimo locale | $D>0$, $f_{xx}>0$ | Curvatura positiva in tutte le direzioni |
| Massimo locale | $D>0$, $f_{xx}<0$ | Curvatura negativa in tutte le direzioni |
| Punto di sella | $D<0$ | Curvatura mista |
| Criterio di Lagrange | $\nabla f=\lambda\nabla g$, $g=c$ | 3 equazioni, 3 incognite |
| Significato di $\lambda$ | $\lambda=df^*/dc$ | Sensibilità del valore ottimo al vincolo |

---

## 11. Esercizi

<details>
<summary>Esercizio 1 — Trovare e classificare i punti critici</summary>

**Testo:** $f(x,y)=x^3+y^3-3xy$. Trovare e classificare tutti i punti critici.

**Soluzione:**

$f_x=3x^2-3y=0 \Rightarrow y=x^2$; $f_y=3y^2-3x=0 \Rightarrow x=y^2$.

Sostituendo: $x=(x^2)^2=x^4$, $x^4-x=0$, $x(x^3-1)=0$.

$x=0$ (poi $y=0$) e $x=1$ (poi $y=1$).

$f_{xx}=6x$, $f_{xy}=-3$, $f_{yy}=6y$. $D=36xy-9$.

- $(0,0)$: $D=-9<0$ → **punto di sella**.
- $(1,1)$: $D=36-9=27>0$, $f_{xx}=6>0$ → **minimo locale**. $f(1,1)=-1$.

</details>

<details>
<summary>Esercizio 2 — Lagrange: massimo su ellisse</summary>

**Testo:** Trovare i valori massimo e minimo di $f(x,y)=x+2y$ su $g(x,y)=x^2+4y^2=4$.

**Soluzione:**

$\nabla f=\lambda\nabla g$: $(1,2)=\lambda(2x,8y)$.

$1=2\lambda x \Rightarrow x=1/(2\lambda)$; $2=8\lambda y \Rightarrow y=1/(4\lambda)$.

Vincolo: $\frac{1}{4\lambda^2}+\frac{4}{16\lambda^2}=4 \Rightarrow \frac{1}{4\lambda^2}+\frac{1}{4\lambda^2}=4 \Rightarrow \frac{1}{2\lambda^2}=4 \Rightarrow \lambda^2=1/8$.

$\lambda=\pm 1/(2\sqrt{2})$.

- $\lambda>0$: $x=\sqrt{2}$, $y=\sqrt{2}/2$. $f=\sqrt{2}+\sqrt{2}=2\sqrt{2}$ (**massimo**).
- $\lambda<0$: $x=-\sqrt{2}$, $y=-\sqrt{2}/2$. $f=-2\sqrt{2}$ (**minimo**).

</details>

<details>
<summary>Esercizio 3 — Minima distanza da un punto a una retta</summary>

**Testo:** Trovare il punto sulla retta $2x+y=5$ più vicino all'origine. Usare i moltiplicatori di Lagrange.

**Soluzione:**

Minimizzare $f(x,y)=x^2+y^2$ con $g(x,y)=2x+y=5$.

$(2x,2y)=\lambda(2,1)$: $x=\lambda$, $y=\lambda/2$.

Vincolo: $2\lambda+\lambda/2=5 \Rightarrow 5\lambda/2=5 \Rightarrow \lambda=2$.

$x=2$, $y=1$. Distanza: $\sqrt{4+1}=\sqrt{5}$.

Verifica con formula: distanza punto-retta $d=\lvert 0+0-5\rvert/\sqrt{4+1}=5/\sqrt{5}=\sqrt{5}$ ✓.

</details>

<details>
<summary>Esercizio 4 — Ottimizzazione su dominio chiuso</summary>

**Testo:** Trovare i valori massimo e minimo di $f(x,y)=x^2-xy+y^2$ su $D=\{x^2+y^2\leq 1\}$.

**Soluzione:**

**Interno:** $f_x=2x-y=0$, $f_y=-x+2y=0 \Rightarrow x=y=0$. $f(0,0)=0$.

**Frontiera:** $g=x^2+y^2-1=0$. $(2x-y,-x+2y)=\lambda(2x,2y)$.

$(1-\lambda)2x=y$ e $(-1+2\lambda)y\cdot\text{...}$: poniamo $y=mx$.

Da $(2-2\lambda)x=mx$: $m=2-2\lambda$. Da $(-1+2\lambda)y=2\lambda y/1$... più semplicemente: sostituendo $y=x$ o $y=-x$ nel vincolo:

- $y=x$: $f=x^2-x^2+x^2=x^2=1$ (su frontiera). $f=1$.
- $y=-x$: $f=x^2+x^2+x^2=3x^2=3$ (su frontiera, $x=\pm 1/\sqrt{?}$... attenzione: $2x^2=1$, $x=1/\sqrt{2}$, $f=3/2$).

Procediamo con Lagrange: $2x-y=2\lambda x$, $-x+2y=2\lambda y$. Somma: $x+y=2\lambda(x+y)$. Se $x+y\neq 0$: $\lambda=1/2$. Da $2x-y=x$: $x=y$. Vincolo: $x=1/\sqrt{2}$, $f=1/2$.

Differenza equazioni: $3x-3y=2\lambda(x-y)$. Se $x\neq y$: $\lambda=3/2$. $2x-y=3x \Rightarrow y=-x$. Vincolo: $x=1/\sqrt{2}$, $f=3\cdot 1/2=3/2$.

**Riepilogo:** minimo $f=0$ in $(0,0)$; massimo $f=3/2$ in $(\pm 1/\sqrt{2},\mp 1/\sqrt{2})$.

</details>

<details>
<summary>Esercizio 5 — Massimo del prodotto con somma fissa</summary>

**Testo:** Fra tutti i rettangoli di perimetro $P$ fissato, quale ha area massima?

**Soluzione:**

Lati $x$ e $y$. Massimizzare $A=xy$ con $g=2x+2y=P$.

$(y,x)=\lambda(2,2) \Rightarrow y=2\lambda=x$: il rettangolo ottimo è un **quadrato**.

Con $4x=P$: $x=y=P/4$. Area massima: $A=(P/4)^2=P^2/16$.

**Significato:** fissato il perimetro, il quadrato ha area massima fra tutti i rettangoli (caso particolare dell'isoperimetrica).

</details>

<details>
<summary>Esercizio 6 — Lagrange e interpretazione di $\lambda$</summary>

**Testo:** Massimizzare $f(x,y)=xy$ con $x+y=c$ (parametro). Trovare $f^*(c)$ e verificare che $\lambda = df^*/dc$.

**Soluzione:**

$(y,x)=\lambda(1,1) \Rightarrow x=y=c/2$. $f^*(c)=(c/2)^2=c^2/4$.

$\frac{df^*}{dc}=\frac{c}{2}=\lambda$ (dalla prima equazione $y=\lambda$ con $y=c/2$): $\lambda=c/2$ ✓.

</details>

<details>
<summary>Esercizio 7 — Punto di sella non ovvio</summary>

**Testo:** $f(x,y)=x^2 y^2 - y^2 - x^2 + 1$. Mostrare che $(0,0)$ è un punto di sella.

**Soluzione:**

$f_x=2xy^2-2x=2x(y^2-1)=0$; $f_y=2x^2 y-2y=2y(x^2-1)=0$.

In $(0,0)$: $f_x=0$, $f_y=0$ → punto critico.

$f_{xx}=2y^2-2$, $f_{xy}=4xy$, $f_{yy}=2x^2-2$.

In $(0,0)$: $f_{xx}=-2$, $f_{xy}=0$, $f_{yy}=-2$. $D=(-2)(-2)-0=4>0$, $f_{xx}=-2<0$ → **massimo locale**.

(Attenzione: non è una sella! $f(0,0)=1$ è massimo locale. Ci sono altri punti critici: $(\pm 1,\pm 1)$ con $D=4\cdot 4-16=0$ — criterio non conclusivo.)

</details>

<details>
<summary>Esercizio 8 — Lagrange a tre variabili: produzione ottimale</summary>

**Testo:** Una fabbrica produce con funzione $Q(K,L,M)=K^{1/3}L^{1/3}M^{1/3}$ (capitale $K$, lavoro $L$, materiali $M$). Il costo totale è $2K+3L+6M=12$. Massimizzare $Q$.

**Soluzione:**

$\nabla Q = \lambda\nabla g$ con $g=2K+3L+6M-12$.

$\frac{1}{3}K^{-2/3}L^{1/3}M^{1/3}=2\lambda$, $\frac{1}{3}K^{1/3}L^{-2/3}M^{1/3}=3\lambda$, $\frac{1}{3}K^{1/3}L^{1/3}M^{-2/3}=6\lambda$.

Rapporto prima/seconda: $L/K=2/3$. Rapporto prima/terza: $M/K=1/3$.

Con vincolo: $2K+3\cdot(2K/3)+6\cdot(K/3)=12 \Rightarrow 2K+2K+2K=12 \Rightarrow K=2$, $L=4/3$, $M=2/3$.

$Q_{\max}=2^{1/3}(4/3)^{1/3}(2/3)^{1/3}=(2\cdot 4/3\cdot 2/3)^{1/3}=(16/9)^{1/3}$.

</details>
