# Reto #6: 📦 ¿Regalo dentro de la caja?

Ya hemos empaquetado cientos de regalos 🎁… pero **a un elfo se le ha olvidado revisar si el regalo**, representado por un asterisco `*`, **está dentro de la caja**.

La caja tiene un regalo (`*`) y _cuenta como dentro de la caja_ si:

- Está rodeada por `#` en los bordes de la caja.
- El `*` no está en los bordes de la caja.

Ten en cuenta entonces que el `*` puede estar dentro, fuera o incluso no estar. Y debemos devolver true si el `*` está dentro de la caja y false en caso contrario.

### Ejemplos:

```javascript
inBox(["###", "#*#", "###"]); // ➞ true

inBox(["####", "#* #", "#  #", "####"]); // ➞ true

inBox(["#####", "#   #", "#  #*", "#####"]); // ➞ false

inBox(["#####", "#   #", "#   #", "#   #", "#####"]); // ➞ false
```
