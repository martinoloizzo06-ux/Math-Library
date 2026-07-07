---
id: analisi-05-limiti-notevoli-asintoti
subject: analisi
topic_it: Limiti e continuità
topic_en: Limits and continuity
title_it: Limiti notevoli e asintoti
title_en: Notable limits and asymptotes
level: blue
order: 5
source_book: "J. Stewart, Calculus; MIT OCW 18.01"
source_chapter: "Cap. 2 — Asintoti e limiti speciali"
---

## Limiti notevoli principali

Questi limiti ricorrono costantemente in analisi e si usano come "mattoni" per calcoli più complessi.

**Trigonometrici:**
$$\lim_{x\to 0}\frac{\sin x}{x}=1 \qquad \lim_{x\to 0}\frac{\tan x}{x}=1 \qquad \lim_{x\to 0}\frac{1-\cos x}{x^2}=\frac{1}{2}$$

**Esponenziali e logaritmici:**
$$\lim_{x\to 0}\frac{e^x-1}{x}=1 \qquad \lim_{x\to 0}\frac{\ln(1+x)}{x}=1 \qquad \lim_{x\to 0}(1+x)^{1/x}=e$$

**Potenze:**
$$\lim_{x\to 0}\frac{(1+x)^\alpha-1}{x}=\alpha \quad (\alpha\in\mathbb{R}) \qquad \lim_{x\to\infty}\frac{\ln x}{x^\alpha}=0 \quad (\alpha>0)$$

## Equivalenze asintotiche

Per $x\to 0$ scriviamo $f(x)\sim g(x)$ se $\displaystyle\lim_{x\to 0}\frac{f(x)}{g(x)}=1$:

$$\sin x \sim x, \quad \tan x \sim x, \quad e^x-1\sim x, \quad \ln(1+x)\sim x, \quad 1-\cos x\sim\frac{x^2}{2}$$

Le equivalenze si possono **moltiplicare e dividere**, ma non sommare o sottrarre in generale.

**Esempio.** $\displaystyle\lim_{x\to 0}\frac{\sin(x^2)}{x\tan x} \sim \frac{x^2}{x\cdot x} = 1$.

## Asintoti

**Verticale** $x=a$: $\displaystyle\lim_{x\to a^\pm}f(x)=\pm\infty$.

**Orizzontale** $y=L$: $\displaystyle\lim_{x\to\pm\infty}f(x)=L$.

**Obliquo** $y=mx+q$: $m = \displaystyle\lim_{x\to\infty}\frac{f(x)}{x}$ (se finito, $\neq 0$), poi $q=\displaystyle\lim_{x\to\infty}[f(x)-mx]$.

---

## Esercizi

<details>
<summary>Esercizio 1 — Equivalenze</summary>

Calcolare $\displaystyle\lim_{x\to 0}\frac{e^{3x}-1-\ln(1+3x)}{x^2}$.

**Soluzione.**

Per $x\to 0$: $e^{3x}-1\sim 3x$ e $\ln(1+3x)\sim 3x$, quindi la differenza è di ordine superiore. Espandiamo al secondo ordine:

$e^{3x} \approx 1+3x+\frac{9x^2}{2}$, $\quad\ln(1+3x)\approx 3x-\frac{9x^2}{2}$.

$$e^{3x}-1-\ln(1+3x) \approx \frac{9x^2}{2}+\frac{9x^2}{2} = 9x^2$$

$$\lim_{x\to 0}\frac{9x^2}{x^2} = 9$$

</details>

<details>
<summary>Esercizio 2 — Asintoto obliquo</summary>

Trovare l'asintoto obliquo per $x\to+\infty$ di $f(x)=\sqrt{x^2+2x}$.

**Soluzione.**

$m = \displaystyle\lim_{x\to+\infty}\frac{\sqrt{x^2+2x}}{x} = \lim\sqrt{1+2/x} = 1$.

$q = \displaystyle\lim_{x\to+\infty}(\sqrt{x^2+2x}-x) = \lim\frac{2x}{\sqrt{x^2+2x}+x} = \lim\frac{2}{\sqrt{1+2/x}+1} = 1$.

Asintoto obliquo: $y = x + 1$.

</details>

<details>
<summary>Esercizio 3 — Tutti gli asintoti</summary>

Trovare tutti gli asintoti di $f(x)=\dfrac{x^2}{x^2-1}$.

**Soluzione.**

**Verticali:** $x^2-1=0 \implies x=\pm 1$. Entrambi asintoti verticali (verificare i segni).

**Orizzontale:** $\dfrac{x^2}{x^2-1}=\dfrac{1}{1-1/x^2}\to 1$, quindi $y=1$.

**Obliqui:** nessuno (esiste già l'orizzontale).

</details>
