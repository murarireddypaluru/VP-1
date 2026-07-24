# VP-1 — Virtual Pet (Stage 1)

The first stage of a **Virtual Pet** game built with **p5.js** / **p5.play** and a
**Firebase Realtime Database**. A dog sprite sits in a garden. Pressing the **Up Arrow**
"feeds" the dog: it decrements the shared food stock stored in Firebase and swaps the dog to
its happy image. The food value is kept in the Realtime Database so it persists and stays in
sync across clients.

## How it works

- The food stock is read from Firebase (`food` node) via an `on("value", ...)` listener.
- Feeding (`writeStock`) `update()`s the `Food` value down by one and shows the happy dog.

## Libraries

- [p5.js](https://p5js.org/) — canvas and input
- [p5.play](https://molleindustria.github.io/p5.play/) — the dog sprite (`p5.play.js` bundled)
- [Firebase](https://firebase.google.com/) (App + Realtime Database) — food-stock persistence

## Controls

- **Up Arrow** — feed the dog (decrements food stock, dog turns happy)

## How to run

This game needs a **Firebase Realtime Database of your own** — the committed config only
contains placeholders.

1. Create a project at <https://console.firebase.google.com> and enable **Realtime Database**.
2. Open `index.html` and replace the placeholders in `firebaseConfig`
   (`YOUR_FIREBASE_API_KEY`, `https://YOUR_PROJECT.firebaseio.com`, etc.) with your own
   project's values.
3. Serve the folder over a local web server (e.g. `python3 -m http.server`) and open it in a
   browser.

## Security

The original Firebase credentials were removed and replaced with placeholders. Please read
[SECURITY-NOTE.md](SECURITY-NOTE.md) before running — and remember to lock down your
Realtime Database security rules.
