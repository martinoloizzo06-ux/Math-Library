---
id: analisi-14-applicazioni-integrale
subject: analisi
topic_it: Calcolo integrale (una variabile)
topic_en: Integral calculus (one variable)
title_it: Applicazioni dell'integrale (aree, volumi, valor medio)
title_en: Applications of the integral (areas, volumes, average value)
level: blue
order: 14
source_book: "J. Stewart, Calculus; MIT OCW 18.01"
source_chapter: "Cap. 6 — Applicazioni dell'integrale"
stato: da-rielaborare
---

## 1. Intuizione — Dalla somma all'area, dal piano allo spazio

L'integrale nasce dal calcolo di aree, ma la sua potenza va molto oltre. Immagina di voler calcolare:

- **L'area di un lago** con bordi a forma di curva — integrare la "larghezza" ad ogni altezza.
- **Il volume di una cupola** — sommare l'area di ogni sezione orizzontale da terra alla sommità.
- **La lunghezza di una strada sinuosa** su una mappa — sommare i contributi infinitesimi del percorso.

In tutti questi casi, la struttura è la stessa: si prende una quantità elementare (area di un rettangolo, area di un disco, lunghezza di un segmentino) e si somma su un continuum di posizioni — ovvero si integra.

Il calcolo integrale trasforma problemi geometrici e fisici tridimensionali in un'unica operazione: trovare la primitiva giusta e applicare il TFC.

---

## 2. Prerequisiti

- Integrale definito e TFC: $\int_a^b f(x)\,dx = F(b) - F(a)$
- Area di un rettangolo, volume di un cilindro, area di un cerchio
- Derivate: regola della catena, derivata di funzioni composte
- Relazione tra funzione e sua derivata (punti di incrocio, segno)
- Teorema del valor medio per integrali

---

## 3. Teoria

### Aree tra curve

Siano $f$ e $g$ continue su $[a, b]$ con $f(x) \geq g(x)$. L'**area della regione** compresa tra i due grafici è:

$$\boxed{A = \int_a^b [f(x) - g(x)]\,dx}$$

**Se le curve si intersecano** nell'intervallo, bisogna trovare i punti di incrocio, dividere l'integrale in sottointervalli e gestire il segno:

$$A = \int_a^b \lvert f(x) - g(x)\rvert\,dx$$

**Integrazione rispetto a $y$:** quando le curve sono più naturalmente espresse come $x = h(y)$, si integra verticalmente:

$$A = \int_c^d [x_{\text{destra}}(y) - x_{\text{sinistra}}(y)]\,dy$$

### Volumi di solidi di rotazione

**Metodo dei dischi e degli anelli** (rotazione attorno all'asse $x$):

Ogni sezione perpendicolare all'asse $x$ è un disco di area $\pi R^2$ o un anello di area $\pi(R^2 - r^2)$:

$$\boxed{V = \pi\int_a^b [R(x)^2 - r(x)^2]\,dx}$$

dove $R(x)$ è il raggio esterno e $r(x)$ il raggio interno (per la rotazione di una regione tra due curve). Se si ruota solo una curva, $r = 0$.

**Metodo dei gusci cilindrici** (utile soprattutto per rotazione attorno all'asse $y$ o quando l'integrale in $x$ è più semplice):

Ogni guscio cilindrico ha volume approssimato da $2\pi x \cdot h(x) \cdot dx$ (circonferenza × altezza × spessore):

$$\boxed{V = 2\pi\int_a^b x\cdot h(x)\,dx}$$

dove $h(x) = f(x) - g(x)$ è l'altezza del guscio.

**Quando usare quale metodo:**
- Dischi/anelli: naturale quando l'asse di rotazione è lo stesso asse di integrazione
- Gusci: naturale quando l'asse di rotazione è perpendicolare all'asse di integrazione

### Lunghezza d'arco

Il differenziale di lunghezza d'arco è $ds = \sqrt{(dx)^2 + (dy)^2} = \sqrt{1 + [f'(x)]^2}\,dx$ (pitagora infinitesimale).

$$\boxed{L = \int_a^b \sqrt{1 + [f'(x)]^2}\,dx}$$

**In forma parametrica:** se la curva è $x = x(t)$, $y = y(t)$ per $t \in [\alpha, \beta]$:

$$L = \int_\alpha^\beta \sqrt{[x'(t)]^2 + [y'(t)]^2}\,dt$$

### Valor medio di una funzione

Il **valor medio** di $f$ su $[a, b]$ è l'altezza del rettangolo con la stessa area dell'integrale:

$$\boxed{\bar{f} = \frac{1}{b-a}\int_a^b f(x)\,dx}$$

**Teorema del valor medio per gli integrali:** se $f$ è continua su $[a, b]$, esiste almeno un $c \in [a, b]$ tale che $f(c) = \bar{f}$.

### Area di una superficie di rotazione

La superficie generata ruotando il grafico di $f$ attorno all'asse $x$ tra $a$ e $b$:

$$S = 2\pi\int_a^b f(x)\sqrt{1 + [f'(x)]^2}\,dx$$

---

## 4. Derivazione — Formula del volume con i gusci

Deriviamo la formula $V = 2\pi\int_a^b x\,f(x)\,dx$ dalla definizione.

Consideriamo un guscio cilindrico sottile di raggio $x$, altezza $f(x)$ e spessore infinitesimo $dx$.

Il volume di un cilindro pieno di raggio $x + dx$ e altezza $f(x)$ è $\pi(x+dx)^2 f(x)$.
Il volume del cilindro interno di raggio $x$ è $\pi x^2 f(x)$.

Il volume del guscio è la differenza:
$$dV = \pi[(x+dx)^2 - x^2]f(x) = \pi[2x\,dx + (dx)^2]f(x) \approx 2\pi x\,f(x)\,dx$$

(abbiamo trascurato $(dx)^2$ che è infinitesimo di ordine superiore).

Il volume totale si ottiene sommando (integrando) su $[a, b]$:

$$V = \int_a^b dV = 2\pi\int_a^b x\,f(x)\,dx \quad \blacksquare$$

Alternativamente, il guscio ha:
- Circonferenza: $2\pi x$
- Altezza: $f(x)$
- Spessore: $dx$

quindi $dV = \text{(circonferenza)} \times \text{(altezza)} \times \text{(spessore)} = 2\pi x\,f(x)\,dx$.

---

## 5. Esempi

**Esempio 1 — Area tra parabola e retta**

Trovare l'area tra $y = x^2$ e $y = 2x$.

Intersezioni: $x^2 = 2x \Rightarrow x(x-2) = 0 \Rightarrow x = 0,\; x = 2$.

Su $[0,2]$: $2x \geq x^2$ (verifica in $x=1$: $2 > 1$).

$$A = \int_0^2(2x - x^2)\,dx = \left[x^2 - \frac{x^3}{3}\right]_0^2 = 4 - \frac{8}{3} = \frac{4}{3}$$

---

**Esempio 2 — Area con più intersezioni**

Trovare l'area tra $y = \sin x$ e $y = \cos x$ su $[0, \pi]$.

Intersezione: $\sin x = \cos x \Rightarrow \tan x = 1 \Rightarrow x = \pi/4$.

Su $[0, \pi/4]$: $\cos x \geq \sin x$. Su $[\pi/4, \pi]$: $\sin x \geq \cos x$.

$$A = \int_0^{\pi/4}(\cos x - \sin x)\,dx + \int_{\pi/4}^{\pi}(\sin x - \cos x)\,dx$$

$$= \Big[\sin x + \cos x\Big]_0^{\pi/4} + \Big[-\cos x - \sin x\Big]_{\pi/4}^{\pi}$$

$$= (\sqrt{2}-1) + (1-(-\sqrt{2})) \cdot \text{... } = \sqrt{2}-1+1+\sqrt{2} = 2\sqrt{2}$$

---

**Esempio 3 — Volume per dischi: $y=\sqrt{x}$ ruotata attorno all'asse $x$**

La regione sotto $y = \sqrt{x}$ per $x \in [0, 4]$ ruota attorno all'asse $x$.

Sezione circolare di raggio $R(x) = \sqrt{x}$:

$$V = \pi\int_0^4 (\sqrt{x})^2\,dx = \pi\int_0^4 x\,dx = \pi\left[\frac{x^2}{2}\right]_0^4 = 8\pi$$

---

**Esempio 4 — Volume per anelli: regione tra due curve**

Trovare il volume del solido generato dalla rotazione attorno all'asse $x$ della regione tra $y = \sqrt{x}$ e $y = x$ per $x \in [0, 1]$.

Su $[0,1]$: $\sqrt{x} \geq x$. Raggio esterno $R = \sqrt{x}$, interno $r = x$.

$$V = \pi\int_0^1[(\sqrt{x})^2 - x^2]\,dx = \pi\int_0^1(x - x^2)\,dx = \pi\left[\frac{x^2}{2} - \frac{x^3}{3}\right]_0^1 = \frac{\pi}{6}$$

---

**Esempio 5 — Volume per gusci: rotazione attorno all'asse $y$**

Trovare il volume del solido generato dalla rotazione attorno all'asse $y$ della regione sotto $y = x^2$ per $x \in [0, 2]$.

Usiamo i gusci (raggio $x$, altezza $x^2$):

$$V = 2\pi\int_0^2 x \cdot x^2\,dx = 2\pi\int_0^2 x^3\,dx = 2\pi\left[\frac{x^4}{4}\right]_0^2 = 2\pi \cdot 4 = 8\pi$$

---

**Esempio 6 — Lunghezza d'arco**

Calcolare la lunghezza del grafico di $f(x) = \frac{2}{3}x^{3/2}$ per $x \in [0, 3]$.

$f'(x) = x^{1/2} = \sqrt{x}$, quindi $1 + [f'(x)]^2 = 1 + x$.

$$L = \int_0^3 \sqrt{1+x}\,dx = \left[\frac{2}{3}(1+x)^{3/2}\right]_0^3 = \frac{2}{3}(8 - 1) = \frac{14}{3}$$

---

**Esempio 7 — Valor medio**

Trovare il valor medio di $f(x) = \sin x$ su $[0, \pi]$.

$$\bar{f} = \frac{1}{\pi}\int_0^\pi \sin x\,dx = \frac{1}{\pi}\Big[-\cos x\Big]_0^\pi = \frac{1}{\pi}(1+1) = \frac{2}{\pi} \approx 0.637$$

Il punto $c$: $\sin c = \frac{2}{\pi} \Rightarrow c = \arcsin\frac{2}{\pi} \approx 0.69 \in [0, \pi]$.

---

**Esempio 8 — Integrazione rispetto a $y$**

Trovare l'area della regione delimitata da $x = y^2$ e $x = y + 2$.

Intersezioni: $y^2 = y + 2 \Rightarrow y^2 - y - 2 = 0 \Rightarrow y = -1,\; y = 2$.

Su $[-1, 2]$: $x_{\text{destra}} = y+2$, $x_{\text{sinistra}} = y^2$.

$$A = \int_{-1}^2(y+2-y^2)\,dy = \left[\frac{y^2}{2}+2y-\frac{y^3}{3}\right]_{-1}^2 = (2+4-\frac{8}{3}) - (\frac{1}{2}-2+\frac{1}{3}) = \frac{9}{2}$$

---

## 6. Grafico

Visualizza l'area tra $f(x) = x$ e $g(x) = x^2$ su $[0, 1]$. La regione verde rappresenta l'integrale $\int_0^1(x-x^2)\,dx = 1/6$.

```plot
{"title":"Area tra y=x e y=x²","fn":"x","fn2":"x*x","domain":[-0.5,1.5],"yDomain":[-0.2,1.2],"label1":"y=x","label2":"y=x²"}
```

---

## 7. Slider — Volume di un solido di rotazione

Varia l'esponente $n$ della curva $y = x^n$ ruotata attorno all'asse $x$ su $[0, 1]$: il volume è $\pi\int_0^1 x^{2n}\,dx = \frac{\pi}{2n+1}$.

```slider
{"title":"Curva y=xⁿ che genera un solido di rotazione","fn":"Math.pow(x, a)","domain":[0,1],"yDomain":[-0.1,1.2],"pname":"a","pmin":0.5,"pmax":4,"pdefault":1,"pstep":0.25,"plabel":"n","label1":"y=xⁿ"}
```

Con $n=1$ (retta): volume = $\pi/3$ (cono). Con $n=0.5$ (radice): volume = $\pi/2$ (paraboloide). Al crescere di $n$ la curva si appiattisce e il volume diminuisce.

---

## 8. Errori comuni

**Errore 1 — Non determinare quale curva sta sopra**

- Sbagliato: $\int_0^2 (x^2 - 2x)\,dx$ senza verificare il segno
- Corretto: su $[0,2]$, $2x \geq x^2$ (il valore $x^2-2x = x(x-2) \leq 0$). Quindi l'integrale per l'area è $\int_0^2(2x-x^2)\,dx$

Verificare sempre in un punto interno quale funzione è maggiore.

---

**Errore 2 — Non trovare tutti i punti di intersezione**

Se $f$ e $g$ si incrociano più volte, bisogna suddividere l'integrale. Calcolare $\int_a^b [f-g]\,dx$ quando le curve si incrociano nell'interno dà un risultato sbagliato (le aree si cancellano parzialmente).

---

**Errore 3 — Dimenticare il $\pi$ nella formula dei dischi**

- Sbagliato: $V = \int_a^b [f(x)]^2\,dx$
- Corretto: $V = \pi\int_a^b [f(x)]^2\,dx$

Il fattore $\pi$ viene dall'area del cerchio $A = \pi r^2$.

---

**Errore 4 — Elevare al quadrato erroneamente nella formula degli anelli**

- Sbagliato: $V = \pi\int_a^b [R(x) - r(x)]^2\,dx$
- Corretto: $V = \pi\int_a^b [R(x)^2 - r(x)^2]\,dx$

Non si sottrae il raggio, si sottraggono le aree dei cerchi.

---

**Errore 5 — Sbagliare la formula della lunghezza d'arco**

- Sbagliato: $L = \int_a^b f'(x)\,dx$ (questa è solo la variazione verticale)
- Corretto: $L = \int_a^b \sqrt{1+[f'(x)]^2}\,dx$

La lunghezza combina variazione orizzontale e verticale (teorema di Pitagora).

---

**Errore 6 — Confondere valor medio con valore in un punto**

- Sbagliato: "il valor medio di $\sin x$ su $[0,\pi]$ è $\sin(\pi/2) = 1$"
- Corretto: $\bar{f} = \frac{2}{\pi} \approx 0.637 \neq 1$

Il valor medio è un integrale diviso per la lunghezza dell'intervallo, non il valore in un punto particolare.

---

**Errore 7 — Non controllare le unità nel volume**

Se si lavora con lunghezze in cm, il volume viene in cm³, non in cm. Un errore frequente è trattare il volume come se fosse bidimensionale.

---

## 9. Applicazioni reali

**Ingegneria civile — Calcolo dei volumi di terra.** I progetti stradali e di costruzione richiedono di calcolare quanto materiale rimuovere (scavo) o aggiungere (riempimento). Il profilo del terreno è descritto da una funzione $h(x)$ e il volume di terra in una sezione è calcolato con integrali. Gli ingegneri usano la regola di Cavalieri: $V = \int A(x)\,dx$ dove $A(x)$ è l'area della sezione trasversale.

**Medicina — Gittata cardiaca.** Tramite il **metodo della diluizione dell'indicatore**, si inietta una sostanza nel sangue e si misura la concentrazione $c(t)$ nel tempo. La gittata cardiaca è $CO = \frac{D}{\int_0^\infty c(t)\,dt}$ dove $D$ è la dose. L'integrale al denominatore — calcolato numericamente — misura quanto a lungo la sostanza rimane nel circolo sanguigno.

**Fisica — Centro di massa.** Per un oggetto con densità di massa lineare $\rho(x)$ (massa per unità di lunghezza), il centro di massa si trova a:
$$\bar{x} = \frac{\int_a^b x\,\rho(x)\,dx}{\int_a^b \rho(x)\,dx}$$
Questa formula è esattamente analoga al valor medio, con $\rho$ come "peso". La progettazione di strutture stabili richiede di calcolare questi centri di massa con precisione.

---

## 10. Riepilogo

| Applicazione | Formula | Note |
| --- | --- | --- |
| Area tra curve | $A = \int_a^b [f(x)-g(x)]\,dx$ | con $f \geq g$ su $[a,b]$ |
| Area rispetto a $y$ | $A = \int_c^d [x_D(y)-x_S(y)]\,dy$ | curve espresse come $x=h(y)$ |
| Volume (dischi/anelli) | $V = \pi\int_a^b [R^2-r^2]\,dx$ | rotazione attorno asse $x$ |
| Volume (gusci) | $V = 2\pi\int_a^b x\,h(x)\,dx$ | rotazione attorno asse $y$ |
| Lunghezza d'arco | $L = \int_a^b \sqrt{1+[f'(x)]^2}\,dx$ | Pitagora infinitesimale |
| Valor medio | $\bar{f} = \frac{1}{b-a}\int_a^b f(x)\,dx$ | TVM garantisce $f(c)=\bar{f}$ |

---

## 11. Esercizi

<details>
<summary>Esercizio 1 — Area tra parabola e retta</summary>

Trovare l'area della regione chiusa tra $y = 4 - x^2$ e $y = x + 2$.

**Soluzione:**

Intersezioni: $4-x^2 = x+2 \Rightarrow x^2+x-2=0 \Rightarrow (x+2)(x-1)=0 \Rightarrow x=-2,\;x=1$.

Su $[-2,1]$: $4-x^2 \geq x+2$ (verifica in $x=0$: $4>2$).

$$A = \int_{-2}^1[(4-x^2)-(x+2)]\,dx = \int_{-2}^1(2-x-x^2)\,dx = \left[2x-\frac{x^2}{2}-\frac{x^3}{3}\right]_{-2}^1$$

$$= (2-\frac{1}{2}-\frac{1}{3})-(-4-2+\frac{8}{3}) = \frac{7}{6}+6-\frac{8}{3} = \frac{7}{6}+\frac{36}{6}-\frac{16}{6} = \frac{27}{6} = \frac{9}{2}$$

</details>

<details>
<summary>Esercizio 2 — Volume per dischi</summary>

La regione delimitata da $y = x^2$ e $y = 4$ viene ruotata attorno all'asse $y$. Trovare il volume.

**Soluzione:**

In termini di $y$: $x = \sqrt{y}$ (raggio del disco). $y$ varia da 0 a 4.

$$V = \pi\int_0^4 (\sqrt{y})^2\,dy = \pi\int_0^4 y\,dy = \pi\left[\frac{y^2}{2}\right]_0^4 = 8\pi$$

</details>

<details>
<summary>Esercizio 3 — Volume per gusci</summary>

La regione sotto $y = \sin x$ per $x \in [0, \pi]$ viene ruotata attorno all'asse $y$. Trovare il volume.

**Soluzione:**

Usiamo i gusci (raggio $x$, altezza $\sin x$):

$$V = 2\pi\int_0^\pi x\sin x\,dx$$

Integriamo per parti: $u=x$, $dv=\sin x\,dx$ → $v=-\cos x$:

$$V = 2\pi\left(\left[-x\cos x\right]_0^\pi + \int_0^\pi\cos x\,dx\right) = 2\pi\left(\pi + \Big[\sin x\Big]_0^\pi\right) = 2\pi(\pi + 0) = 2\pi^2$$

</details>

<details>
<summary>Esercizio 4 — Confronto fra metodi</summary>

La regione tra $y=x$ e $y=x^2$ (per $x\in[0,1]$) viene ruotata attorno all'asse $x$. Trovare il volume usando il metodo degli anelli.

**Soluzione:**

$R(x) = x$ (raggio esterno), $r(x) = x^2$ (raggio interno):

$$V = \pi\int_0^1(x^2 - x^4)\,dx = \pi\left[\frac{x^3}{3}-\frac{x^5}{5}\right]_0^1 = \pi\left(\frac{1}{3}-\frac{1}{5}\right) = \frac{2\pi}{15}$$

</details>

<details>
<summary>Esercizio 5 — Lunghezza d'arco</summary>

Calcolare la lunghezza del grafico di $f(x) = \ln(\cos x)$ per $x \in [0, \pi/4]$.

**Soluzione:**

$f'(x) = \dfrac{-\sin x}{\cos x} = -\tan x$, quindi $[f'(x)]^2 = \tan^2 x$.

$1 + \tan^2 x = \sec^2 x$, quindi $\sqrt{1+[f'(x)]^2} = \lvert\sec x\rvert = \sec x$ (su $[0,\pi/4]$, $\sec x > 0$).

$$L = \int_0^{\pi/4}\sec x\,dx = \Big[\ln\lvert\sec x+\tan x\rvert\Big]_0^{\pi/4} = \ln(\sqrt{2}+1) - \ln(1) = \ln(\sqrt{2}+1)$$

</details>

<details>
<summary>Esercizio 6 — Valor medio e TVM</summary>

Trovare il valor medio di $f(x) = e^x$ su $[0, 2]$ e il punto $c$ garantito dal teorema.

**Soluzione:**

$$\bar{f} = \frac{1}{2}\int_0^2 e^x\,dx = \frac{1}{2}\Big[e^x\Big]_0^2 = \frac{e^2-1}{2} \approx 3.19$$

Punto $c$: $e^c = \dfrac{e^2-1}{2} \Rightarrow c = \ln\dfrac{e^2-1}{2} \approx \ln(3.19) \approx 1.16 \in [0,2]$.

</details>

<details>
<summary>Esercizio 7 — Area rispetto a y</summary>

Trovare l'area della regione delimitata da $x = y^2 - 2$ e $x = y$ (integrate rispetto a $y$).

**Soluzione:**

Intersezioni: $y^2-2 = y \Rightarrow y^2-y-2=0 \Rightarrow y=-1,\;y=2$.

Su $[-1,2]$: $x_D = y$, $x_S = y^2-2$ (verifica in $y=0$: $0 > -2$).

$$A = \int_{-1}^2 (y - y^2+2)\,dy = \left[\frac{y^2}{2}-\frac{y^3}{3}+2y\right]_{-1}^2 = (2-\frac{8}{3}+4)-(\frac{1}{2}+\frac{1}{3}-2) = \frac{9}{2}$$

</details>

<details>
<summary>Esercizio 8 — Volume di una sfera</summary>

Derivare la formula $V = \frac{4}{3}\pi R^3$ del volume della sfera di raggio $R$ usando il metodo dei dischi.

**Soluzione:**

La sfera è il solido ottenuto ruotando il semicerchio $y = \sqrt{R^2-x^2}$ attorno all'asse $x$ per $x \in [-R, R]$.

Raggio di ogni sezione: $r(x) = \sqrt{R^2-x^2}$.

$$V = \pi\int_{-R}^R (R^2-x^2)\,dx = \pi\left[R^2 x - \frac{x^3}{3}\right]_{-R}^R = \pi\left[(R^3-\frac{R^3}{3})-(-R^3+\frac{R^3}{3})\right]$$

$$= \pi\left[\frac{2R^3}{3}+\frac{2R^3}{3}\right] = \pi\cdot\frac{4R^3}{3} = \frac{4\pi R^3}{3} \quad \blacksquare$$

</details>
