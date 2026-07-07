---
id: base-21-teoremi-triangoli
subject: base
topic_it: Trigonometria
topic_en: Trigonometry
title_it: Teoremi sui triangoli (seni e coseno)
title_en: Triangle theorems (law of sines and cosines)
level: green
order: 21
source_book: "MIT OCW 18.01 (Precalcolo)"
source_chapter: "Sezione 7 — Triangoli"
---

## Teorema dei seni

In un triangolo $ABC$ con lati $a, b, c$ opposti agli angoli $A, B, C$:

$$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R$$

dove $R$ è il raggio della circonferenza circoscritta.

**Utilizzo:** noti un lato e due angoli (o due lati e un angolo opposto), si trovano gli elementi mancanti.

**Esempio.** Triangolo con $A = 30°$, $B = 70°$, $a = 5$ cm.

$C = 180° - 30° - 70° = 80°$.

$$b = \frac{a \sin B}{\sin A} = \frac{5 \sin 70°}{\sin 30°} \approx \frac{5 \cdot 0{,}940}{0{,}5} = 9{,}40 \text{ cm}$$

## Teorema del coseno

Generalizzazione del teorema di Pitagora:

$$c^2 = a^2 + b^2 - 2ab\cos C$$
$$a^2 = b^2 + c^2 - 2bc\cos A$$
$$b^2 = a^2 + c^2 - 2ac\cos B$$

Se $C = 90°$: $\cos C = 0$ e si ottiene $c^2 = a^2 + b^2$ (Pitagora). ✓

**Utilizzo:** noti tre lati (per trovare gli angoli) o noti due lati e l'angolo compreso (per trovare il terzo lato).

**Esempio.** Triangolo con $a = 7$, $b = 5$, $C = 60°$.

$$c^2 = 49 + 25 - 2 \cdot 7 \cdot 5 \cdot \frac{1}{2} = 74 - 35 = 39 \implies c = \sqrt{39} \approx 6{,}24$$

## Area del triangolo

$$\text{Area} = \frac{1}{2}ab\sin C = \frac{1}{2}bc\sin A = \frac{1}{2}ac\sin B$$

**Formula di Erone** (noti i tre lati):

$$\text{Area} = \sqrt{s(s-a)(s-b)(s-c)}, \quad s = \frac{a+b+c}{2}$$

---

## Esercizi

<details>
<summary>Esercizio 1 — Teorema dei seni</summary>

In un triangolo $A = 45°$, $C = 105°$, $b = 8$. Trovare $a$.

**Soluzione.**

$B = 180° - 45° - 105° = 30°$.

$$\frac{a}{\sin A} = \frac{b}{\sin B} \implies a = b \cdot \frac{\sin A}{\sin B} = 8 \cdot \frac{\sin 45°}{\sin 30°} = 8 \cdot \frac{\sqrt{2}/2}{1/2} = 8\sqrt{2}$$

</details>

<details>
<summary>Esercizio 2 — Teorema del coseno</summary>

Un triangolo ha lati $a = 6$, $b = 8$, $c = 10$. È rettangolo?

**Soluzione.**

Verifico se vale il teorema di Pitagora: $c^2 = a^2 + b^2$?

$100 = 36 + 64 = 100$ ✓

Quindi sì, è rettangolo in $C$. Conferma con teorema del coseno:

$$\cos C = \frac{a^2+b^2-c^2}{2ab} = \frac{100-100}{96} = 0 \implies C = 90°$$

</details>

<details>
<summary>Esercizio 3 — Area</summary>

Calcolare l'area del triangolo con $a = 5$, $b = 7$, $c = 8$.

**Soluzione.**

$s = (5+7+8)/2 = 10$.

$$\text{Area} = \sqrt{10(10-5)(10-7)(10-8)} = \sqrt{10 \cdot 5 \cdot 3 \cdot 2} = \sqrt{300} = 10\sqrt{3} \approx 17{,}32$$

</details>
