import { keccak256 } from '@ethersproject/solidity';
import { bytecode } from '@pancakeswap-libs/pancake-swap-core/build/IPancakePair.json';

import { ChainId, INIT_CODE_HASH } from '../src/constants';

// this _could_ go in constants, except that it would cost every consumer of the sdk the CPU to compute the hash
// and load the JSON.
const COMPUTED_INIT_CODE_HASH = keccak256(['bytes'], [`0x${bytecode}`])

describe('constants', () => {
  describe('INIT_CODE_HASH', () => {
    it('matches computed bytecode hash', () => {
      expect(COMPUTED_INIT_CODE_HASH).toEqual(INIT_CODE_HASH[ChainId.MAINNET])
    })
  })
})
