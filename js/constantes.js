'use strict';
const COLUNA = 10;
const LINHA = 20;
const TAM_BLOCO = 30;

const KEY = {
	SPACE: 32,
  LEFT: 37,
  RIGHT: 39,
  DOWN: 40
}
Object.freeze(KEY);

//movimeto das peças
const movimento = {
	[KEY.SPACE]: p => ({ ...p, y: p.y + 1 }),
  [KEY.LEFT]:  p => ({ ...p, x: p.x - 1 }),
  [KEY.RIGHT]: p => ({ ...p, x: p.x + 1 }),
  [KEY.DOWN]:    p => ({ ...p, y: p.y + 1 })
};
