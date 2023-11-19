class Node<T> {
  key: string | null;
  endOfWord: boolean;
  value?: T
  children: Record<string, Node<T>>

  constructor(key: string | null, endOfWord: boolean = false) {
    this.key = key;
    this.endOfWord = false;
    this.children = {}
    this.value = undefined;
  }
}

export class Trie<T> {
  root: Node<T>;

  constructor() {
    this.root = new Node(null);
  }

  insert(word: string, value: T) {
    const chars = word.split('');
    let currentNode = this.root;
    for (const char of chars) {
      if (!currentNode.children[char]) {
        currentNode.children[char] = new Node(char);
      }
      currentNode = currentNode.children[char];
    }
    currentNode.endOfWord = true;
    currentNode.value = value;
  }

  contains(word: string) {
    const chars = word.split('');
    let currentNode = this.root;
    for (const char of chars) {
      if (!currentNode.children[char]) {
        return false;
      }
      currentNode = currentNode.children[char];
    }
    return currentNode.endOfWord;
  }

  startsWith(prefix: string): boolean {
    const foundNode = this.navigateToEndOfPrefix(prefix);
    if (!foundNode) {
      return false;
    }

    return true;
  }

  private navigateToEndOfPrefix(prefix: string): Node<T> | null {
    const chars = prefix.split('');
    let currentNode = this.root;
    for (const char of chars) {
      if (!currentNode.children[char]) {
        return null;
      }
      currentNode = currentNode.children[char];
    }

    return currentNode;
  }

  get(key: string): T | undefined {
    const currentNodeAfterPrefix = this.navigateToEndOfPrefix(key);
    if (!currentNodeAfterPrefix) {
      return undefined;
    }

    return currentNodeAfterPrefix.value;
  }



  possibilities(prefix: string): { value: T | undefined, key: string }[] {
    const currentNodeAfterPrefix = this.navigateToEndOfPrefix(prefix);
    if (!currentNodeAfterPrefix) {
      return []
    }

    const possibilities = [];
    for (const char of Object.keys(currentNodeAfterPrefix.children)) {
      // recurse to create words with possibilties
      let currentNode = currentNodeAfterPrefix.children[char];
      const stack = [];
      stack.push(currentNode.key);
      while (Object.keys(currentNode.children).length > 0) {
        const nextChar = Object.keys(currentNode.children)[0];
        currentNode = currentNode.children[nextChar];
        stack.push(currentNode.key);
      }
      possibilities.push({ key: prefix + stack.join(''), value: currentNode.value })
    }

    return possibilities
  }
}