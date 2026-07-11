---
id: base-24-coniche
subject: base
topic_it: Geometria analitica
topic_en: Analytic geometry
title_it: Coniche (circonferenza, ellisse, parabola, iperbole)
title_en: Conics (circle, ellipse, parabola, hyperbola)
level: green
order: 24
source_book: "MIT OCW 18.01 (Precalcolo)"
source_chapter: "Sezione 8 — Coniche"
stato: da-rielaborare
---

## 1. Intuizione e motivazione

Immagina di tagliare un cono con un piano piatto. A seconda dell'angolo di taglio, ottieni curve diverse:
- **Sezione orizzontale** → cerchio
- **Sezione inclinata** → ellisse
- **Sezione parallela a un lato del cono** → parabola
- **Sezione ancora più inclinata (che attraversa entrambe le falde)** → iperbole

Queste quattro curve — cerchio, ellisse, parabola, iperbole — sono le **coniche**, studiate da Apollonio di Perge già nel 200 a.C. La loro importanza è enorme: le orbite dei pianeti sono ellissi (Keplero), le traiettorie dei proiettili sono parabole (Galileo), le antenne paraboliche usano la riflessione della parabola, i riflettori delle torce usano l'iperbole. Conoscere le coniche significa capire la geometria dell'universo.

---

## 2. Prerequisiti

- Piano cartesiano e coordinate $(x, y)$
- Equazione della retta e distanza punto-retta
- Radici quadrate e completamento del quadrato
- Formula della distanza: $d = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$
- Concetto di luogo geometrico (insieme di punti che soddisfano una proprietà)

---

## 3. Teoria passo-passo

### Circonferenza

La **circonferenza** è il luogo dei punti equidistanti da un punto fisso chiamato **centro**.

**Equazione canonica** (centro $C = (h, k)$, raggio $r > 0$):

$$\boxed{(x - h)^2 + (y - k)^2 = r^2}$$

**Forma generale:** $x^2 + y^2 + Dx + Ey + F = 0$

Per tornare alla forma canonica si completa il quadrato:

$$(x^2 + Dx) + (y^2 + Ey) = -F$$

$$\left(x + \frac{D}{2}\right)^2 + \left(y + \frac{E}{2}\right)^2 = \frac{D^2 + E^2}{4} - F$$

**Centro:** $\left(-\frac{D}{2}, -\frac{E}{2}\right)$, **Raggio:** $r = \sqrt{\frac{D^2+E^2}{4} - F}$ (reale se $> 0$)

### Ellisse

L'**ellisse** è il luogo dei punti per cui la somma delle distanze da due punti fissi detti **fuochi** è costante:

$$PF_1 + PF_2 = 2a$$

**Equazione canonica** (fuochi sull'asse $x$, $a \geq b > 0$):

$$\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$$

Dove:
- $a$ = **semiasse maggiore** (lunghezza dal centro a un estremo sull'asse $x$)
- $b$ = **semiasse minore** (lunghezza dal centro a un estremo sull'asse $y$)
- $c = \sqrt{a^2 - b^2}$ → **distanza focale** (dal centro a un fuoco)
- Fuochi: $F_{1,2} = (\pm c, 0)$
- **Eccentricità:** $e = c/a \in [0, 1)$: se $e = 0$ è un cerchio, se $e \to 1$ è molto allungata

Se i fuochi sono sull'asse $y$: $\frac{x^2}{b^2} + \frac{y^2}{a^2} = 1$ con $a > b$.

### Parabola

La **parabola** è il luogo dei punti equidistanti da un punto fisso (**fuoco**) e da una retta fissa (**direttrice**).

**Parabola con asse verticale** (apertura verso l'alto se $a > 0$, verso il basso se $a < 0$):

$$y = ax^2 + bx + c$$

**Forma canonica** (vertice nell'origine, fuoco sull'asse $y$):

$$y = \frac{1}{4p} x^2$$

Dove $p > 0$ è la distanza dal vertice al fuoco. Fuoco: $(0, p)$. Direttrice: $y = -p$.

**Parabola con asse orizzontale** (apertura a destra se $a > 0$):

$$x = ay^2 + by + c$$

### Iperbole

L'**iperbole** è il luogo dei punti per cui la differenza in valore assoluto delle distanze da due fuochi è costante:

$$\lvert PF_1 - PF_2 \rvert = 2a$$

**Equazione canonica** (asse trasverso su $x$):

$$\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$$

Dove:
- $a$ = semilunghezza dell'asse reale (vertici in $(\pm a, 0)$)
- $b$ = semilunghezza dell'asse immaginario
- $c = \sqrt{a^2 + b^2}$, fuochi $F_{1,2} = (\pm c, 0)$
- **Asintoti:** $y = \pm \frac{b}{a} x$ (la curva si avvicina senza mai toccarli)

**Iperbole equilatera (rettangolare):** $xy = k$ — i fuochi sono sulle bisettrici degli assi.

---

## 4. Derivazione commentata

### Derivazione dell'equazione della parabola

Vogliamo trovare il luogo dei punti $P = (x, y)$ equidistanti dal fuoco $F = (0, p)$ e dalla direttrice $y = -p$.

Distanza da $F$: $\sqrt{x^2 + (y-p)^2}$

Distanza dalla direttrice: $\lvert y + p \rvert = y + p$ (per $y > -p$)

Imponiamo l'uguaglianza:

$$\sqrt{x^2 + (y-p)^2} = y + p$$

Eleviamo al quadrato (entrambi i membri non negativi):

$$x^2 + (y-p)^2 = (y+p)^2$$

$$x^2 + y^2 - 2py + p^2 = y^2 + 2py + p^2$$

$$x^2 = 4py$$

$$y = \frac{x^2}{4p} \qquad \square$$

La parabola è quindi una curva quadratica — la forma familiare $y = ax^2$ con $a = \frac{1}{4p}$.

---

## 5. Esempi graduati

**Esempio 1 — Circonferenza centrata nell'origine.**
Equazione della circonferenza di centro $O = (0,0)$ e raggio $3$.

$$x^2 + y^2 = 9$$

---

**Esempio 2 — Circonferenza in forma generale.**
$x^2 + y^2 - 6x + 4y - 3 = 0$: trovare centro e raggio.

Completiamo il quadrato:

$$(x-3)^2 - 9 + (y+2)^2 - 4 - 3 = 0$$

$$(x-3)^2 + (y+2)^2 = 16$$

Centro $(3, -2)$, raggio $r = 4$.

---

**Esempio 3 — Ellisse con fuochi dati.**
Ellisse con semiasse maggiore $a = 5$ (su $x$) e fuochi in $(\pm 3, 0)$.

$c = 3$, $a = 5$: $b^2 = 25 - 9 = 16 \implies b = 4$.

$$\frac{x^2}{25} + \frac{y^2}{16} = 1$$

La proprietà: per ogni punto $P$ sull'ellisse, $PF_1 + PF_2 = 2a = 10$.

---

**Esempio 4 — Parabola con vertice e fuoco.**
Parabola con vertice in $(0,0)$ e fuoco in $(0, 2)$.

$p = 2$, quindi: $y = \frac{x^2}{8}$.

Direttrice: $y = -2$. La curva apre verso l'alto.

---

**Esempio 5 — Parabola con vertice traslato.**
Trovare vertice e asse di $y = x^2 - 4x + 3$.

Completiamo il quadrato: $y = (x-2)^2 - 1$.

Vertice: $(2, -1)$. Asse di simmetria: $x = 2$. La parabola apre verso l'alto ($a = 1 > 0$).

---

**Esempio 6 — Iperbole e asintoti.**
Trovare vertici, fuochi e asintoti di $\frac{x^2}{9} - \frac{y^2}{4} = 1$.

$a = 3$, $b = 2$, $c = \sqrt{9+4} = \sqrt{13}$.

Vertici: $(\pm 3, 0)$. Fuochi: $(\pm\sqrt{13}, 0)$. Asintoti: $y = \pm \frac{2}{3}x$.

---

**Esempio 7 — Circonferenza per tre punti.**
Circonferenza per $A=(1,0)$, $B=(5,0)$, $C=(0,4)$.

Sistema su $x^2 + y^2 + Dx + Ey + F = 0$:
- Da $A$: $1 + D + F = 0$
- Da $B$: $25 + 5D + F = 0$
- Da $C$: $16 + 4E + F = 0$

$B - A$: $24 + 4D = 0 \implies D = -6$; da $A$: $F = 5$; da $C$: $E = -21/4$.

Centro: $(3, 21/8)$, raggio: $\sqrt{4 + (21/8)^2}$.

---

## 6. Grafico

```plot
{
  "title": "Parabola y = x² e cerchio x² + y² = 9",
  "fn": "x*x",
  "fn2": "Math.sqrt(Math.max(0, 9 - x*x))",
  "domain": [-4, 4],
  "yDomain": [-2, 10],
  "label1": "y = x² (parabola)",
  "label2": "parte sup. cerchio r=3"
}
```

---

## 7. Elemento interattivo

```slider
{
  "title": "Ellisse: semiasse a al variare di a (b fissato a 2)",
  "fn": "Math.sqrt(Math.max(0, (1 - (x*x)/(a*a)) * 4))",
  "domain": [-6, 6],
  "yDomain": [-4, 4],
  "pname": "a",
  "pmin": 2,
  "pmax": 5,
  "pdefault": 3,
  "pstep": 0.1,
  "plabel": "Semiasse a",
  "label1": "parte sup. ellisse"
}
```

Aumenta $a$: l'ellisse si allunga orizzontalmente. Per $a = 2$ diventa un cerchio di raggio 2. Osserva come l'eccentricità $e = c/a$ cresce al crescere di $a$.

---

## 8. Errori comuni

**Errore 1 — Confondere il segno nella forma canonica.**
Per il cerchio $(x-h)^2 + (y-k)^2 = r^2$, il centro è $(h, k)$, non $(-h, -k)$. In $(x-3)^2 + (y+2)^2 = 16$, il centro è $(3, -2)$ — attenzione al segno del secondo termine.

**Errore 2 — Raggio negativo.**
Se $\frac{D^2+E^2}{4} - F < 0$, l'equazione non rappresenta alcuna circonferenza reale (cerchio immaginario). Verificare sempre che il discriminante sia positivo.

**Errore 3 — $a$ e $b$ nell'ellisse.**
$a$ è sempre il **semiasse maggiore** ($a \geq b$). Se i fuochi sono sull'asse $y$, l'equazione è $\frac{x^2}{b^2} + \frac{y^2}{a^2} = 1$ con $a > b$.

**Errore 4 — Formula dei fuochi nell'iperbole vs ellisse.**
Nell'ellisse: $c = \sqrt{a^2 - b^2}$ (il denominatore maggiore meno il minore). Nell'iperbole: $c = \sqrt{a^2 + b^2}$ (somma). Errore frequente: usare la formula dell'ellisse per l'iperbole.

**Errore 5 — Asintoti dell'iperbole come parte della curva.**
Gli asintoti $y = \pm \frac{b}{a}x$ sono rette che la curva approssima all'infinito, ma non la toca mai.

**Errore 6 — Confondere asse di simmetria e direttrice della parabola.**
L'asse di simmetria della parabola $y = ax^2 + bx + c$ è $x = -\frac{b}{2a}$ (verticale); la direttrice è una retta orizzontale sotto il vertice.

**Errore 7 — Dimenticare le due metà dell'iperbole.**
L'equazione $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$ descrive due rami: uno con $x \geq a$ (destra) e uno con $x \leq -a$ (sinistra).

---

## 9. Applicazioni reali

**Astronomia e orbite planetarie.** Keplero (1609) scoprì che i pianeti orbitano attorno al Sole lungo traiettorie ellittiche, con il Sole in uno dei due fuochi. L'eccentricità dell'orbita terrestre è $e \approx 0.017$ (quasi circolare). Le comete, invece, seguono orbite con eccentricità vicina a 1 (ellissi molto allungate) o addirittura paraboliche/iperboliche se provengono dallo spazio interstellare.

**Antenne e riflettori.** Una parabola ha la proprietà che i raggi paralleli all'asse di simmetria si riflettono tutti verso il fuoco. Questa è la geometria usata nelle antenne paraboliche (TV satellitare), nei riflettori dei fari delle automobili, nei radiotelescopi, e nei forni solari a concentrazione. Il fuoco è il punto esatto dove si pone il ricevitore o il punto di cottura.

**Onde d'urto e medicina.** Nella litotrissia extracorporea (tecnica per frantumare i calcoli renali senza chirurgia), si usa una capsula a forma di ellissoide: le onde d'urto prodotte in un fuoco si concentrano automaticamente nell'altro fuoco — dove si trova il calcolo da frantumare. Stesso principio usato nelle sale "sussurranti" (whispering galleries) dove la voce emessa da un fuoco si sente chiaramente nell'altro.

---

## 10. Riepilogo tabellare

| Conica | Equazione canonica | Elementi caratteristici |
| --- | --- | --- |
| Circonferenza | $(x-h)^2+(y-k)^2=r^2$ | Centro $(h,k)$, raggio $r$ |
| Ellisse ($a \geq b$) | $\frac{x^2}{a^2}+\frac{y^2}{b^2}=1$ | Fuochi $(\pm c,0)$, $c=\sqrt{a^2-b^2}$, $PF_1+PF_2=2a$ |
| Parabola (verticale) | $y = ax^2+bx+c$ | Vertice $\left(-\frac{b}{2a}, f\left(-\frac{b}{2a}\right)\right)$, asse $x=-\frac{b}{2a}$ |
| Iperbole | $\frac{x^2}{a^2}-\frac{y^2}{b^2}=1$ | Fuochi $(\pm c,0)$, $c=\sqrt{a^2+b^2}$, asintoti $y=\pm\frac{b}{a}x$ |

| Relazione fuochi-eccentricità | Conica |
| --- | --- |
| $e = 0$ ($c=0$) | Circonferenza |
| $0 < e < 1$ | Ellisse |
| $e = 1$ | Parabola |
| $e > 1$ | Iperbole |

---

## 11. Esercizi con soluzioni

<details>
<summary>Esercizio 1 — Circonferenza da forma generale</summary>

**Testo:** Portare in forma canonica e trovare centro e raggio: $x^2 + y^2 + 4x - 6y - 3 = 0$.

**Soluzione:**

$$(x^2 + 4x) + (y^2 - 6y) = 3$$

$$(x+2)^2 - 4 + (y-3)^2 - 9 = 3$$

$$(x+2)^2 + (y-3)^2 = 16$$

Centro $(-2, 3)$, raggio $r = 4$.

</details>

<details>
<summary>Esercizio 2 — Ellisse con fuochi e semiasse</summary>

**Testo:** Scrivere l'equazione dell'ellisse con fuochi in $(\pm 4, 0)$ e semiasse maggiore $a = 5$.

**Soluzione:**

$c = 4$, $a = 5$: $b^2 = 25 - 16 = 9$.

$$\frac{x^2}{25} + \frac{y^2}{9} = 1$$

Verifica: per ogni punto $P$, $PF_1 + PF_2 = 10 = 2a$ ✓.

</details>

<details>
<summary>Esercizio 3 — Parabola con vertice traslato</summary>

**Testo:** Trovare vertice, asse di simmetria e senso di apertura di $y = -2x^2 + 8x - 5$.

**Soluzione:**

Completiamo il quadrato:

$$y = -2(x^2 - 4x) - 5 = -2\bigl[(x-2)^2 - 4\bigr] - 5 = -2(x-2)^2 + 3$$

Vertice: $(2, 3)$. Asse: $x = 2$. Apre verso il **basso** ($a = -2 < 0$).

</details>

<details>
<summary>Esercizio 4 — Iperbole e asintoti</summary>

**Testo:** Trovare vertici, fuochi e asintoti dell'iperbole $\frac{x^2}{16} - \frac{y^2}{9} = 1$.

**Soluzione:**

$a = 4$, $b = 3$, $c = \sqrt{16 + 9} = 5$.

Vertici: $(\pm 4, 0)$.

Fuochi: $(\pm 5, 0)$.

Asintoti: $y = \pm \frac{3}{4}x$.

</details>

<details>
<summary>Esercizio 5 — Punto su una conica</summary>

**Testo:** Verificare che $P = (3, 8/5)$ appartiene all'ellisse $\frac{x^2}{25} + \frac{y^2}{16} = 1$, e calcolare $PF_1 + PF_2$.

**Soluzione:**

$$\frac{9}{25} + \frac{(8/5)^2}{16} = \frac{9}{25} + \frac{64/25}{16} = \frac{9}{25} + \frac{4}{25} = \frac{13}{25} \neq 1$$

Quindi $P$ **non** appartiene all'ellisse — è un utile avvertimento per verificare sempre i conti.

Trovare invece un punto: per $x = 4$: $\frac{16}{25} + \frac{y^2}{16} = 1 \implies y^2 = 16 \cdot \frac{9}{25} = \frac{144}{25} \implies y = \frac{12}{5}$.

Quindi $Q = (4, 12/5)$ è sull'ellisse. Con $c = 3$: $QF_1 + QF_2 = 2a = 10$.

</details>

<details>
<summary>Esercizio 6 — Circonferenza passante per tre punti</summary>

**Testo:** Trovare la circonferenza passante per $O = (0,0)$, $A = (4,0)$, $B = (0,3)$.

**Soluzione:**

Forma generale: $x^2 + y^2 + Dx + Ey + F = 0$.

Da $O$: $F = 0$.

Da $A$: $16 + 4D = 0 \implies D = -4$.

Da $B$: $9 + 3E = 0 \implies E = -3$.

Equazione: $x^2 + y^2 - 4x - 3y = 0$, cioè $(x-2)^2 + (y-3/2)^2 = 4 + 9/4 = 25/4$.

Centro $(2, 3/2)$, raggio $5/2$.

</details>

<details>
<summary>Esercizio 7 — Iperbole equilatera</summary>

**Testo:** Trovare i punti dell'iperbole $xy = 6$ con ascissa $x = 2$ e $x = -3$.

**Soluzione:**

Per $x = 2$: $y = 6/2 = 3$ → punto $(2, 3)$.

Per $x = -3$: $y = 6/(-3) = -2$ → punto $(-3, -2)$.

Entrambi i punti si trovano nel primo e nel terzo quadrante — l'iperbole $xy = k > 0$ è sempre nel I e III quadrante.

</details>
