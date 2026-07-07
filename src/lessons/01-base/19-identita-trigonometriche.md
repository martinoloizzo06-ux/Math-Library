---
id: base-19-identita-trigonometriche
subject: base
topic_it: Trigonometria
topic_en: Trigonometry
title_it: Identità e formule fondamentali
title_en: Trigonometric identities and formulas
level: green
order: 19
source_book: "MIT OCW 18.01 (Precalcolo)"
source_chapter: "Sezione 7 — Identità trigonometriche"
---

## Identità fondamentale

Dal teorema di Pitagora applicato alla circonferenza unitaria:

$$\sin^2\theta + \cos^2\theta = 1$$

Dividendo per $\cos^2\theta$ (se $\cos\theta \neq 0$):

$$\tan^2\theta + 1 = \sec^2\theta$$

Dividendo per $\sin^2\theta$:

$$1 + \cot^2\theta = \csc^2\theta$$

## Simmetrie (angoli associati)

$$\sin(-\theta) = -\sin\theta \quad \text{(dispari)} \qquad \cos(-\theta) = \cos\theta \quad \text{(pari)}$$
$$\sin(\pi - \theta) = \sin\theta \qquad \cos(\pi - \theta) = -\cos\theta$$
$$\sin\!\left(\frac{\pi}{2} - \theta\right) = \cos\theta \qquad \cos\!\left(\frac{\pi}{2} - \theta\right) = \sin\theta$$

## Formule di addizione

$$\sin(\alpha \pm \beta) = \sin\alpha\cos\beta \pm \cos\alpha\sin\beta$$
$$\cos(\alpha \pm \beta) = \cos\alpha\cos\beta \mp \sin\alpha\sin\beta$$
$$\tan(\alpha \pm \beta) = \frac{\tan\alpha \pm \tan\beta}{1 \mp \tan\alpha\tan\beta}$$

## Formule di duplicazione

Ponendo $\alpha = \beta$ nelle formule di addizione:

$$\sin 2\alpha = 2\sin\alpha\cos\alpha$$
$$\cos 2\alpha = \cos^2\alpha - \sin^2\alpha = 2\cos^2\alpha - 1 = 1 - 2\sin^2\alpha$$
$$\tan 2\alpha = \frac{2\tan\alpha}{1 - \tan^2\alpha}$$

## Formule di bisezione

Dalle formule di duplicazione per $\cos 2\alpha$:

$$\sin^2\alpha = \frac{1 - \cos 2\alpha}{2} \qquad \cos^2\alpha = \frac{1 + \cos 2\alpha}{2}$$

---

## Esercizi

<details>
<summary>Esercizio 1 — Calcolo esatto</summary>

Calcolare $\sin 75°$ usando la formula di addizione.

**Soluzione.**

$75° = 45° + 30°$

$$\sin 75° = \sin 45°\cos 30° + \cos 45°\sin 30° = \frac{\sqrt{2}}{2}\cdot\frac{\sqrt{3}}{2} + \frac{\sqrt{2}}{2}\cdot\frac{1}{2} = \frac{\sqrt{6}+\sqrt{2}}{4}$$

</details>

<details>
<summary>Esercizio 2 — Formula di duplicazione</summary>

Sapendo che $\cos\alpha = -\dfrac{1}{3}$ con $\pi/2 < \alpha < \pi$, calcolare $\sin 2\alpha$ e $\cos 2\alpha$.

**Soluzione.**

$\sin^2\alpha = 1 - 1/9 = 8/9$; nel II quadrante $\sin\alpha > 0$, quindi $\sin\alpha = \dfrac{2\sqrt{2}}{3}$.

$$\sin 2\alpha = 2 \cdot \dfrac{2\sqrt{2}}{3} \cdot \left(-\dfrac{1}{3}\right) = -\dfrac{4\sqrt{2}}{9}$$

$$\cos 2\alpha = 2\cos^2\alpha - 1 = 2 \cdot \dfrac{1}{9} - 1 = -\dfrac{7}{9}$$

</details>

<details>
<summary>Esercizio 3 — Identità</summary>

Dimostrare che $\dfrac{\sin 2\theta}{1 + \cos 2\theta} = \tan\theta$.

**Soluzione.**

Numeratore: $\sin 2\theta = 2\sin\theta\cos\theta$.

Denominatore: $1 + \cos 2\theta = 1 + 2\cos^2\theta - 1 = 2\cos^2\theta$.

$$\frac{2\sin\theta\cos\theta}{2\cos^2\theta} = \frac{\sin\theta}{\cos\theta} = \tan\theta \quad \checkmark$$

</details>
