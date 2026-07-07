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
---

## Circonferenza

La **circonferenza** di centro $(h,k)$ e raggio $r > 0$:

$$\boxed{(x-h)^2 + (y-k)^2 = r^2}$$

**Forma generale:** $x^2 + y^2 + Dx + Ey + F = 0$. Si porta in forma canonica completando il quadrato.

**Esempio.** $x^2 + y^2 - 6x + 4y - 3 = 0$:

$$(x-3)^2 - 9 + (y+2)^2 - 4 - 3 = 0 \implies (x-3)^2 + (y+2)^2 = 16$$

Centro $(3,-2)$, raggio $4$.

## Ellisse

L'**ellisse** con semiassi $a \geq b > 0$ (asse maggiore su $x$):

$$\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$$

Fuochi: $F_{1,2} = (\pm c, 0)$ dove $c = \sqrt{a^2 - b^2}$.  
**Proprietà:** $PF_1 + PF_2 = 2a$ per ogni punto $P$ sull'ellisse.

Se $a = b = r$: si ottiene una circonferenza di raggio $r$.

## Parabola (forma canonica)

**Parabola con asse verticale:**

$$y = ax^2 + bx + c$$

**Parabola con asse orizzontale:**

$$x = ay^2 + by + c$$

Il **fuoco** e la **direttrice** sono equidistanti da ogni punto della parabola.

## Iperbole

L'**iperbole** con semiassi $a, b > 0$ (asse trasverso su $x$):

$$\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$$

**Asintoti:** $y = \pm \dfrac{b}{a} x$.

Fuochi: $F_{1,2} = (\pm c, 0)$ dove $c = \sqrt{a^2 + b^2}$.  
**Proprietà:** $|PF_1 - PF_2| = 2a$ per ogni punto $P$ sull'iperbole.

**Iperbole equilatera:** $xy = k$ (assi coordinati come asintoti, k $\neq$ 0).

---

## Esercizi

<details>
<summary>Esercizio 1 — Circonferenza</summary>

Trovare l'equazione della circonferenza passante per $A=(1,0)$, $B=(5,0)$, $C=(0,4)$.

**Soluzione.**

L'equazione generale è $x^2+y^2+Dx+Ey+F=0$.

Da $A$: $1 + D + F = 0$.
Da $B$: $25 + 5D + F = 0$.
Da $C$: $16 + 4E + F = 0$.

Da $B-A$: $24 + 4D = 0 \implies D = -6$.  
Da $A$: $F = -1+6 = 5$.  
Da $C$: $16 + 4E + 5 = 0 \implies E = -21/4$.

$(x-3)^2 + (y + 21/8)^2 = r^2$; centrare per trovare $r$.

Oppure più veloce: il centro dell'asse $AB$ è $(3,0)$ con asse perpendicolare $x=3$; l'asse perpendicolare di $AC$ trova $y_c$. Centro $(3, 21/8)$... Verifica con formula: $r^2 = (1-3)^2 + (21/8)^2 = 4 + 441/64 = 697/64$.

**Risposta:** $(x-3)^2 + \left(y - \dfrac{21}{8}\right)^2 = \dfrac{697}{64}$.

</details>

<details>
<summary>Esercizio 2 — Ellisse</summary>

L'ellisse ha semiasse maggiore $a=5$ (su $x$) e fuochi in $(\pm 3, 0)$. Trovare $b$ e l'equazione.

**Soluzione.**

$c = 3$, $a = 5$: $b^2 = a^2 - c^2 = 25 - 9 = 16 \implies b = 4$.

$$\frac{x^2}{25} + \frac{y^2}{16} = 1$$

</details>

<details>
<summary>Esercizio 3 — Iperbole e asintoti</summary>

Trovare asintoti e vertici dell'iperbole $\dfrac{x^2}{9} - \dfrac{y^2}{4} = 1$.

**Soluzione.**

$a = 3$, $b = 2$. Vertici: $(\pm 3, 0)$.

Asintoti: $y = \pm \dfrac{2}{3} x$.

Fuochi: $c = \sqrt{9+4} = \sqrt{13}$, cioè $F_{1,2} = (\pm\sqrt{13}, 0)$.

</details>
