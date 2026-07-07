---
id: analisi-02-limite-epsilon-delta
subject: analisi
topic_it: Limiti e continuità
topic_en: Limits and continuity
title_it: Definizione rigorosa ε–δ
title_en: Rigorous ε–δ definition of limit
level: blue
order: 2
source_book: "W. Rudin, Principles of Mathematical Analysis; MIT OCW 18.01"
source_chapter: "Cap. 4 — Limiti (definizione formale)"
---

## La definizione di Weierstrass

La definizione intuitiva di limite è insufficiente per dimostrare risultati rigorosi. La **definizione ε–δ** (Weierstrass, XIX sec.) formalizza il concetto:

$$\lim_{x \to a} f(x) = L \iff \forall \varepsilon > 0,\; \exists \delta > 0 \text{ tale che } 0 < |x-a| < \delta \implies |f(x) - L| < \varepsilon$$

In parole: per ogni "tolleranza" $\varepsilon$ sull'output, si può trovare una "finestra" $\delta$ sull'input entro cui $f(x)$ si discosta da $L$ di meno di $\varepsilon$.

> La condizione $0 < |x-a|$ esclude il punto $x=a$ stesso: il limite descrive il comportamento *intorno* ad $a$, non *in* $a$.

## Come leggere una dimostrazione ε–δ

La struttura è sempre la stessa:
1. Sia $\varepsilon > 0$ arbitrario.
2. Si **costruisce** un $\delta$ (spesso in funzione di $\varepsilon$) che funziona.
3. Si **verifica** che con quel $\delta$, se $0<|x-a|<\delta$ allora $|f(x)-L|<\varepsilon$.

**Esempio.** Dimostrare che $\displaystyle\lim_{x\to 3}(2x-1) = 5$.

*Dim.* Dato $\varepsilon>0$, vogliamo $|(2x-1)-5|<\varepsilon$, cioè $|2x-6|=2|x-3|<\varepsilon$.  
Basta scegliere $\delta = \varepsilon/2$. Allora:

$$0 < |x-3| < \delta = \frac{\varepsilon}{2} \implies |2x-6| = 2|x-3| < 2\cdot\frac{\varepsilon}{2} = \varepsilon. \quad\square$$

## Unicità del limite

Il limite, se esiste, è **unico**. (Dimostrazione: supporre due limiti $L_1 \neq L_2$ e usare la definizione con $\varepsilon = |L_1-L_2|/2$ per ottenere una contraddizione.)

## Algebra dei limiti

Se $\lim_{x\to a}f(x)=L$ e $\lim_{x\to a}g(x)=M$, allora:

$$\lim_{x\to a}[f(x)\pm g(x)] = L\pm M$$
$$\lim_{x\to a}[f(x)\cdot g(x)] = L\cdot M$$
$$\lim_{x\to a}\frac{f(x)}{g(x)} = \frac{L}{M} \quad (M\neq 0)$$

## Teorema del confronto (Squeeze Theorem)

Se $g(x) \leq f(x) \leq h(x)$ in un intorno di $a$ e $\displaystyle\lim_{x\to a}g(x) = \lim_{x\to a}h(x) = L$, allora $\displaystyle\lim_{x\to a}f(x) = L$.

**Applicazione classica.** $\displaystyle\lim_{x\to 0} x^2 \sin(1/x) = 0$, poiché $-x^2 \leq x^2\sin(1/x) \leq x^2$ e entrambi i limitatori tendono a 0.

---

## Esercizi

<details>
<summary>Esercizio 1 — Verifica ε–δ</summary>

Verificare con la definizione che $\displaystyle\lim_{x\to 1}(x^2+1)=2$.

**Soluzione.**

$|(x^2+1)-2| = |x^2-1| = |x-1||x+1|$.

Per $|x-1|<1$ (vincolo ausiliare) si ha $0 < x < 2$, quindi $|x+1| < 3$.

Dunque $|x^2-1| < 3|x-1|$. Per avere $< \varepsilon$ basta $|x-1| < \varepsilon/3$.

Scegliere $\delta = \min(1, \varepsilon/3)$. Se $|x-1|<\delta$: $|x^2-1| \leq 3|x-1| < 3\cdot\frac{\varepsilon}{3} = \varepsilon$. $\square$

</details>

<details>
<summary>Esercizio 2 — Squeeze Theorem</summary>

Calcolare $\displaystyle\lim_{x\to 0}\frac{\sin x}{x}$.

**Soluzione (schizzo geometrico).**

Dalla geometria della circonferenza unitaria, per $0 < x < \pi/2$:

$$\cos x < \frac{\sin x}{x} < 1$$

Per $x\to 0^+$: $\cos x \to 1$ e $1 \to 1$, quindi per Squeeze: $\dfrac{\sin x}{x}\to 1$.

Per simmetria ($\sin(-x)/(-x) = \sin x/x$), vale anche per $x\to 0^-$.

$$\lim_{x\to 0}\frac{\sin x}{x} = 1$$

</details>

<details>
<summary>Esercizio 3 — Limite con sostituzione</summary>

Calcolare $\displaystyle\lim_{x\to 0}\frac{1-\cos x}{x^2}$ usando il risultato $\lim_{x\to 0}\frac{\sin x}{x}=1$.

**Soluzione.**

$$\frac{1-\cos x}{x^2} = \frac{(1-\cos x)(1+\cos x)}{x^2(1+\cos x)} = \frac{\sin^2 x}{x^2(1+\cos x)} = \left(\frac{\sin x}{x}\right)^2 \cdot \frac{1}{1+\cos x}$$

Per $x\to 0$: $\left(\dfrac{\sin x}{x}\right)^2 \to 1$ e $\dfrac{1}{1+\cos x} \to \dfrac{1}{2}$.

$$\lim_{x\to 0}\frac{1-\cos x}{x^2} = \frac{1}{2}$$

</details>
