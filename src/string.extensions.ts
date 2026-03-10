export {};

declare global {
  interface String {
    toSentenceCase(): string;
  }
}

String.prototype.toSentenceCase = function (): string {
  const str = this.toLowerCase();

  return str.charAt(0).toUpperCase() + str.slice(1);
};
