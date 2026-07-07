---
id: base-18-seno-coseno-tangente
subject: base
topic_it: Trigonometria
topic_en: Trigonometry
title_it: Funzioni seno, coseno, tangente
title_en: Sine, cosine and tangent functions
level: green
order: 18
source_book: "MIT OCW 18.01 (Precalcolo)"
source_chapter: "Sezione 7 — Funzioni trigonometriche"
---

## Definizioni sulla circonferenza goniometrica

Per un angolo $\theta$ misurato in radianti, il punto $P(\theta) = (\cos\theta, \sin\theta)$ è il punto della circonferenza unitaria corrispondente a $\theta$. Quindi:

$$\cos\theta = x\text{-coordinata di }P(\theta) \qquad \sin\theta = y\text{-coordinata di }P(\theta)$$

$$\tan\theta = \frac{\sin\theta}{\cos\theta} \quad (\cos\theta \neq 0)$$

## Valori notevoli

| $\theta$ | $\sin\theta$ | $\cos\theta$ | $\tan\theta$ |
|---|---|---|---|
| $0$ | $0$ | $1$ | $0$ |
| $\pi/6$ | $1/2$ | $\sqrt{3}/2$ | $1/\sqrt{3}$ |
| $\pi/4$ | $\sqrt{2}/2$ | $\sqrt{2}/2$ | $1$ |
| $\pi/3$ | $\sqrt{3}/2$ | $1/2$ | $\sqrt{3}$ |
| $\pi/2$ | $1$ | $0$ | — |
| $\pi$ | $0$ | $-1$ | $0$ |
| $3\pi/2$ | $-1$ | $0$ | — |

**Mnemonica per $\sin$:** $0,\; \tfrac{1}{2},\; \tfrac{\sqrt{2}}{2},\; \tfrac{\sqrt{3}}{2},\; 1$ agli angoli $0°, 30°, 45°, 60°, 90°$.

## Segno nei quadranti

| Quadrante | $\sin$ | $\cos$ | $\tan$ |
|---|---|---|---|
| I ($0 < \theta < \pi/2$) | $+$ | $+$ | $+$ |
| II ($\pi/2 < \theta < \pi$) | $+$ | $-$ | $-$ |
| III ($\pi < \theta < 3\pi/2$) | $-$ | $-$ | $+$ |
| IV ($3\pi/2 < \theta < 2\pi$) | $-$ | $+$ | $-$ |

**Mnemonica:** "CAST" (IV→I→II→III): Coseno, All positive, Seno, Tangente.

## Funzioni reciproche

$$\cot\theta = \frac{\cos\theta}{\sin\theta} \qquad \sec\theta = \frac{1}{\cos\theta} \qquad \csc\theta = \frac{1}{\sin\theta}$$

## Periodicità

$$\sin(\theta + 2\pi) = \sin\theta \qquad \cos(\theta + 2\pi) = \cos\theta \qquad \tan(\theta + \pi) = \tan\theta$$

---

## Esercizi

<details>
<summary>Esercizio 1 — Valori esatti</summary>

Calcolare $\sin\!\left(\dfrac{5\pi}{6}\right)$, $\cos\!\left(\dfrac{5\pi}{4}\right)$, $\tan\!\left(\dfrac{4\pi}{3}\right)$.

**Soluzione.**

$\dfrac{5\pi}{6} = \pi - \dfrac{\pi}{6}$ (II quadrante): $\sin\!\left(\dfrac{5\pi}{6}\right) = \sin\!\left(\dfrac{\pi}{6}\right) = \dfrac{1}{2}$.

$\dfrac{5\pi}{4} = \pi + \dfrac{\pi}{4}$ (III quadrante): $\cos\!\left(\dfrac{5\pi}{4}\right) = -\cos\!\left(\dfrac{\pi}{4}\right) = -\dfrac{\sqrt{2}}{2}$.

$\dfrac{4\pi}{3} = \pi + \dfrac{\pi}{3}$ (III quadrante): $\tan\!\left(\dfrac{4\pi}{3}\right) = \tan\!\left(\dfrac{\pi}{3}\right) = \sqrt{3}$.

</details>

<details>
<summary>Esercizio 2 — Angoli associati</summary>

Sapendo che $\sin\alpha = \dfrac{3}{5}$ con $\alpha$ nel II quadrante, trovare $\cos\alpha$ e $\tan\alpha$.

**Soluzione.**

Identità fondamentale: $\cos^2\alpha = 1 - \sin^2\alpha = 1 - \dfrac{9}{25} = \dfrac{16}{25}$.

Nel II quadrante $\cos\alpha < 0$, quindi $\cos\alpha = -\dfrac{4}{5}$.

$\tan\alpha = \dfrac{\sin\alpha}{\cos\alpha} = \dfrac{3/5}{-4/5} = -\dfrac{3}{4}$.

</details>

<details>
<summary>Esercizio 3 — Periodicità</summary>

Calcolare $\cos\!\left(\dfrac{47\pi}{4}\right)$ sfruttando la periodicità.

**Soluzione.**

$\dfrac{47}{4} = 11 + \dfrac{3}{4}$, quindi $\dfrac{47\pi}{4} = 11\pi + \dfrac{3\pi}{4} = 10\pi + \pi + \dfrac{3\pi}{4} = 10\pi + \dfrac{7\pi}{4}$.

Poiché $\cos$ ha periodo $2\pi$ e $10\pi = 5 \cdot 2\pi$:

$$\cos\!\left(\dfrac{47\pi}{4}\right) = \cos\!\left(\dfrac{7\pi}{4}\right) = \cos\!\left(-\dfrac{\pi}{4}\right) = \frac{\sqrt{2}}{2}$$

</details>
