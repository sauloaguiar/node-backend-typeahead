import { Trie } from "../src/Trie";

describe('trie', () => {
  describe('contains', () => {
    it('a single word', () => {
      const trie = new Trie<number>();
      trie.insert('apple', 1);

      expect(trie.contains('apple')).toBe(true);
    })

    it('multiple words with different prefixes', () => {
      const trie = new Trie<number>();
      trie.insert('apple', 1);
      trie.insert('tax', 2);

      expect(trie.contains('apple')).toBe(true);
      expect(trie.contains('tax')).toBe(true);
    })

    it('multiple words with similar prefixes', () => {
      const trie = new Trie<number>();
      trie.insert('apple', 1);
      trie.insert('apartment', 2);
      trie.insert('tax', 3);
      trie.insert('tailor', 4);

      expect(trie.contains('apple')).toBe(true);
      expect(trie.contains('apartment')).toBe(true);
      expect(trie.contains('tax')).toBe(true);
      expect(trie.contains('tailor')).toBe(true);
    })
  })

  describe('get', () => {
    it('returns the value associated to a key', () => {
      const trie = new Trie<number>();
      trie.insert('apple', 1);
      trie.insert('tax', 2);

      expect(trie.get('apple')).toBe(1);
      expect(trie.get('tax')).toBe(2);
    })
  })

  describe('startsWith', () => {
    it('returns true when prefix exists', () => {
      const trie = new Trie<number>();
      trie.insert('apple', 1);

      expect(trie.startsWith('app')).toBe(true);
    })

    it('returns false when prefix does not exists', () => {
      const trie = new Trie<number>();
      trie.insert('apple', 1);

      expect(trie.startsWith('tai')).toBe(false);
    })
  })

  describe('possibilities', () => {
    it('returns empty array of possibilities when none was found', () => {
      const trie = new Trie<number>();
      trie.insert('apple', 1);

      expect(trie.possibilities('tai')).toEqual([]);
    })

    it('returns all possibilities given a prefix when only a single word was added', () => {
      const trie = new Trie<number>();
      trie.insert('apple', 1);

      expect(trie.possibilities('ap')).toEqual(['apple']);
    })

    it('returns all possibilities given a prefix when multiple words with same prefix were added', () => {
      const trie = new Trie<number>();
      trie.insert('tax', 1);
      trie.insert('tailor', 2);

      expect(trie.possibilities('ta')).toEqual(['tax', 'tailor']);
    })

  })
})