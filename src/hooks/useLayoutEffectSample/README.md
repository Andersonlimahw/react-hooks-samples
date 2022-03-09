## Descrição:

A principal diferença é que use LAyoutEffect executa de forma assyncrona, e o react exibe as alterações apenas depois.

## useLayoutEffect, sync
triggers:
*  Render
*  React fas as alterações no DOM
*  useLayoutEffect é disparado e o React espera ele finalizar para prosegguir
*  As mudanças visuais são aplicadas

## useEffect, async
triggers:
*  Render
*  React fas as alterações no DOM

*  As mudanças visuais são aplicadas
*  useEffect é disparado e o React espera 