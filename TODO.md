# TODO: Arreglar visibilidad del scroll-indicator en móviles

## Problema
El elemento `<div class="scroll-indicator"></div>` no se ve en pantallas de celular porque:
- En móviles, el `.banner` tiene `height: auto` en lugar de `100vh`.
- El `.scroll-indicator` usa `position: absolute; bottom: 22px`, relativo al banner.
- Si el contenido del banner excede la altura de la pantalla, el indicador queda fuera de la viewport inicial.

## Solución
Cambiar el posicionamiento del `.scroll-indicator` en móviles a `position: fixed` para que esté siempre en la parte inferior de la pantalla.

## Pasos
- [x] Editar `src/pages/index.astro` en el media query `@media (max-width: 480px)`.
- [x] Cambiar `position: absolute;` a `position: fixed;` para `.scroll-indicator`.
- [x] Ajustar `bottom: 22px;` si es necesario para mejor visibilidad.
- [x] Agregar `z-index: 1000;` para asegurar que esté por encima de otros elementos.
- [x] Probar en emulador de móvil o navegador para confirmar que se ve. (Servidor dev corriendo en localhost:4321)
- [x] Mover el scroll-indicator fuera del banner para que no sea ocultado por el overflow hidden del banner.
- [x] Remover display: none en el media query de 768px que ocultaba el indicador en tablets.
- [x] Confirmar que el scroll-indicator ahora se ve correctamente en móviles.
- [x] Ajustar el posicionamiento para que aparezca dentro del banner en móviles, no en la parte inferior de la pantalla.
