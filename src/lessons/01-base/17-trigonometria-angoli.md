---
id: base-17-trigonometria-angoli
subject: base
topic_it: Trigonometria
topic_en: Trigonometry
title_it: Angoli, radianti e circonferenza goniometrica
title_en: Angles, radians and the unit circle
level: green
order: 17
source_book: "MIT OCW 18.01 (Precalcolo)"
source_chapter: "Sezione 7 — Trigonometria"
---

## Misura degli angoli

Gli angoli si misurano in **gradi** o in **radianti**.

**Grado (°):** si divide la rotazione completa in 360 parti uguali.

**Radiante (rad):** un angolo di 1 rad è quello che, al centro di un cerchio di raggio $r$, sottende un arco di lunghezza $r$. Poiché la circonferenza ha lunghezza $2\pi r$, una rotazione completa vale $2\pi$ rad.

**Conversione:**

$$\theta [\text{rad}] = \theta [°] \cdot \frac{\pi}{180°} \qquad \theta [°] = \theta [\text{rad}] \cdot \frac{180°}{\pi}$$

**Angoli notevoli:**

| Gradi | Radianti |
|---|---|
| 30° | $\pi/6$ |
| 45° | $\pi/4$ |
| 60° | $\pi/3$ |
| 90° | $\pi/2$ |
| 180° | $\pi$ |
| 360° | $2\pi$ |

## La circonferenza goniometrica

La **circonferenza goniometrica** (o trigonometrica) è la circonferenza di raggio 1 centrata nell'origine del piano cartesiano. Ogni angolo $\theta$ (misurato in senso antiorario dall'asse $x$ positivo) individua un punto $P = (\cos\theta, \sin\theta)$ sulla circonferenza.

Ogni angolo $\theta$ e $\theta + 2k\pi$ ($k$ intero) individuano lo **stesso punto** sulla circonferenza: le funzioni trigonometriche sono periodiche di periodo $2\pi$.

## Arco e settore circolare

Per un cerchio di raggio $r$ e angolo al centro $\theta$ (in radianti):

$$\text{Lunghezza arco} = r\theta \qquad \text{Area settore} = \frac{1}{2}r^2\theta$$

---

## Esercizi

<details>
<summary>Esercizio 1 — Conversione</summary>

Convertire in radianti: 135°, 270°. Convertire in gradi: $\dfrac{5\pi}{4}$, $\dfrac{7\pi}{6}$.

**Soluzione.**

$135° = 135 \cdot \dfrac{\pi}{180} = \dfrac{3\pi}{4}$

$270° = 270 \cdot \dfrac{\pi}{180} = \dfrac{3\pi}{2}$

$\dfrac{5\pi}{4} = \dfrac{5\pi}{4} \cdot \dfrac{180°}{\pi} = 225°$

$\dfrac{7\pi}{6} = \dfrac{7 \cdot 180°}{6} = 210°$

</details>

<details>
<summary>Esercizio 2 — Lunghezza arco</summary>

Un settore circolare ha raggio 5 cm e angolo al centro 72°. Trovare la lunghezza dell'arco e l'area del settore.

**Soluzione.**

$72° = \dfrac{2\pi}{5}$ rad.

Arco: $l = r\theta = 5 \cdot \dfrac{2\pi}{5} = 2\pi \approx 6{,}28$ cm.

Area: $A = \dfrac{1}{2}r^2\theta = \dfrac{1}{2} \cdot 25 \cdot \dfrac{2\pi}{5} = 5\pi \approx 15{,}7$ cm².

</details>

<details>
<summary>Esercizio 3 — Posizione sulla circonferenza</summary>

In quale quadrante si trova l'angolo $\dfrac{11\pi}{6}$? Qual è l'angolo "equivalente" in $[0, 2\pi)$?

**Soluzione.**

$\dfrac{11\pi}{6} = 2\pi - \dfrac{\pi}{6}$, quindi è a $30°$ sotto l'asse $x$ positivo → **IV quadrante**.

Già nell'intervallo $[0, 2\pi)$ poiché $\dfrac{11\pi}{6} < 2\pi$.

</details>
